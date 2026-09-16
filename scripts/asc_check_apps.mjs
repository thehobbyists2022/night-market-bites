import fs from 'node:fs';
import crypto from 'node:crypto';

const CRED_MD = 'C:/Users/Matrixkuo/Desktop/Antigravity/APP Design/_apple_credentials.md';
const APP_ID = '6812878832';

const md = fs.readFileSync(CRED_MD, 'utf8');
const pick = (re) => md.match(re)[1].trim();
const p8Path = pick(/- 檔案：`([^`]+\.p8)`/);
const keyId = pick(/- Key ID：`([^`]+)`/);
const issuerId = pick(/- Issuer ID：`([^`]+)`/);
const privateKey = fs.readFileSync(p8Path, 'utf8');
const b64url = (b) => Buffer.from(b).toString('base64url');

function token() {
  const now = Math.floor(Date.now() / 1000);
  const input = b64url(JSON.stringify({ alg: 'ES256', kid: keyId, typ: 'JWT' })) + '.' +
    b64url(JSON.stringify({ iss: issuerId, iat: now, exp: now + 1100, aud: 'appstoreconnect-v1' }));
  const sig = crypto.sign('sha256', Buffer.from(input), { key: privateKey, dsaEncoding: 'ieee-p1363' });
  return input + '.' + b64url(sig);
}

const res = await fetch(`https://api.appstoreconnect.apple.com/v1/apps?filter[bundleId]=com.clarityclinicalsolutions.nightmarketbites`, {
  headers: { Authorization: 'Bearer ' + token() },
});
const j = await res.json();
const apps = j?.data || [];
console.log('apps found:', apps.length);
for (const a of apps) {
  console.log(`app record | id ${a.id} | ${a.attributes?.name}`);
}
if (!apps.length) console.log('(none found via this key scope)');

const res2 = await fetch('https://api.appstoreconnect.apple.com/v1/builds?filter[app]=6812878832&limit=10', {
  headers: { Authorization: 'Bearer ' + token() },
});
const j2 = await res2.json();
const builds = j2?.data || [];
console.log('builds found:', builds.length);
for (const b of builds) {
  const a = b.attributes;
  console.log(`build ${a.version} | state ${a.processingState} | uploaded ${a.uploadedDate}`);
}


