import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';

const CRED_MD = 'C:/Users/Matrixkuo/Desktop/Antigravity/APP Design/_apple_credentials.md';
const BUNDLE_ID = process.env.BUNDLE_ID || 'com.clarityclinicalsolutions.nightmarketbites';
const BUNDLE_NAME = 'Night Market Bites';
const PROFILE_NAME = process.env.PROFILE_NAME || 'Night Market Bites AppStore';
const OUT_DIR = process.env.OUT_DIR || 'credentials';
const OUT_FILE = process.env.OUT_FILE || 'NightMarketBites_AppStore.mobileprovision';

const md = fs.readFileSync(CRED_MD, 'utf8');
const pick = (re, label) => {
  const m = md.match(re);
  if (!m) throw new Error('Could not parse ' + label + ' from credentials file');
  return m[1].trim();
};

const teamId = pick(/Team ID[^\n`]*`([^`]+)`/, 'Team ID');
const p8Path = pick(/`([^`]+\.p8)`/, '.p8 path');
const keyId = pick(/Key ID[^\n`]*`([^`]+)`/, 'Key ID');
const issuerId = pick(/Issuer ID[^\n`]*`([^`]+)`/, 'Issuer ID');
const serial = pick(/Serial[^\n`]*`([0-9A-Fa-f]{16,})`/, 'certificate serial');

const privateKey = fs.readFileSync(p8Path, 'utf8');
const b64url = (buf) => Buffer.from(buf).toString('base64url');

function makeToken() {
  const now = Math.floor(Date.now() / 1000);
  const header = { alg: 'ES256', kid: keyId, typ: 'JWT' };
  const payload = { iss: issuerId, iat: now, exp: now + 1100, aud: 'appstoreconnect-v1' };
  const input = b64url(JSON.stringify(header)) + '.' + b64url(JSON.stringify(payload));
  const sig = crypto.sign('sha256', Buffer.from(input), { key: privateKey, dsaEncoding: 'ieee-p1363' });
  return input + '.' + b64url(sig);
}

const API = 'https://api.appstoreconnect.apple.com';

async function api(method, url, body) {
  const res = await fetch(API + url, {
    method,
    headers: { Authorization: 'Bearer ' + makeToken(), 'Content-Type': 'application/json' },
    body: body ? JSON.stringify(body) : undefined,
  });
  const text = await res.text();
  let json = null;
  try { json = text ? JSON.parse(text) : null; } catch { /* non-JSON */ }
  if (!res.ok) {
    const detail = json?.errors?.map((e) => `${e.status} ${e.code}: ${e.detail}`).join(' | ') || text;
    throw new Error(`${method} ${url} -> ${res.status} ${detail}`);
  }
  return json;
}

async function findCertificate() {
  const candidates = [];
  const filter = await api('GET', `/v1/certificates?limit=200&filter[serialNumber]=${encodeURIComponent(serial)}`);
  if (filter?.data?.length) candidates.push(...filter.data);
  if (!candidates.length) {
    const all = await api('GET', '/v1/certificates?limit=200');
    candidates.push(...(all?.data || []));
  }
  const match = candidates.find((c) => (c.attributes?.serialNumber || '').toUpperCase() === serial.toUpperCase());
  if (!match) throw new Error('Certificate with serial ' + serial + ' not found in App Store Connect');
  return match;
}

async function findOrCreateBundleId() {
  const found = await api('GET', `/v1/bundleIds?limit=200&filter[identifier]=${encodeURIComponent(BUNDLE_ID)}`);
  if (found?.data?.length) return found.data[0];
  const created = await api('POST', '/v1/bundleIds', {
    data: {
      type: 'bundleIds',
      attributes: { identifier: BUNDLE_ID, name: BUNDLE_NAME, platform: 'IOS', seedId: teamId },
    },
  });
  return created.data;
}

async function findOrCreateProfile(bundleResource, certResource) {
  const found = await api('GET', `/v1/profiles?limit=200&filter[name]=${encodeURIComponent(PROFILE_NAME)}`);
  let profile = found?.data?.find((p) => p.attributes?.name === PROFILE_NAME);
  if (profile) {
    if (!profile.attributes?.profileContent) {
      profile = (await api('GET', `/v1/profiles/${profile.id}`)).data;
    }
    return { profile, reused: true };
  }
  const created = await api('POST', '/v1/profiles', {
    data: {
      type: 'profiles',
      attributes: { name: PROFILE_NAME, profileType: 'IOS_APP_STORE' },
      relationships: {
        bundleId: { data: { type: 'bundleIds', id: bundleResource.id } },
        certificates: { data: [{ type: 'certificates', id: certResource.id }] },
      },
    },
  });
  return { profile: created.data, reused: false };
}

async function main() {
  console.log('Team:', teamId);
  console.log('Bundle ID:', BUNDLE_ID);
  console.log('Target certificate serial:', serial);

  const cert = await findCertificate();
  console.log('Found certificate:', cert.attributes.name, '| serial', cert.attributes.serialNumber, '| type', cert.attributes.certificateType);

  const bundle = await findOrCreateBundleId();
  console.log('Bundle resource id:', bundle.id, '| name', bundle.attributes.name);

  const { profile, reused } = await findOrCreateProfile(bundle, cert);
  console.log('Profile', reused ? 'reused' : 'created', ':', profile.attributes.name, '| id', profile.id, '| state', profile.attributes.profileState);

  const content = profile.attributes.profileContent;
  if (!content) throw new Error('Profile has no profileContent');
  fs.mkdirSync(OUT_DIR, { recursive: true });
  const outPath = path.join(OUT_DIR, OUT_FILE);
  fs.writeFileSync(outPath, Buffer.from(content, 'base64'));
  console.log('Wrote profile:', outPath, '|', fs.statSync(outPath).size, 'bytes');
}

main().catch((err) => { console.error('ERROR:', err.message); process.exit(1); });

