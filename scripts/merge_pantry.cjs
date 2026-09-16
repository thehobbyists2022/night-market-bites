/**
 * Step A: extract the 7 source apps' Pantry Kits (READ-ONLY) into a unified
 * pantry data pack with tracked Amazon Associates search URLs (per-country
 * tracking ids, found in each source codebase).
 */
const fs = require('fs');
const path = require('path');
const esbuild = require('esbuild');

const ROOT = path.resolve(__dirname, '..');
const BASE = 'C:/Users/Matrixkuo/Desktop/Antigravity/APP Design/';
const TMP = path.join(ROOT, 'scripts', '.tmp-bundles');

const APPS = [
  { slug: 'tw', dir: 'Taiwan', tag: 'taiwanbite-20', native: ['chineseName'], keywordDefaultDir: 'Taiwanese' },
  { slug: 'th', dir: 'ThaiFood Master', tag: 'thaifoodmasterof-20', native: ['thaiName'] },
  { slug: 'jp', dir: 'Japan Food Master', tag: 'jpfoodmaster-20', native: ['japaneseKanji', 'japaneseKana', 'japaneseRomaji'] },
  { slug: 'kr', dir: 'Korean Food Master', tag: 'koreanfoodmaster-20', native: ['koreanName'] },
  { slug: 'my', dir: 'Malaysia Food Master', tag: 'myfoodmaster-20', native: ['malayName'] },
  { slug: 'ph', dir: 'Filipino Food Master', tag: 'pinoybite-20', native: ['filipinoName'] },
  { slug: 'vn', dir: 'Vietnamese Food Master', tag: 'vietfoodmaster-20', native: [] },
];

function loadPantry(dir) {
  const entry = path.join(BASE, dir, 'src', 'data', 'pantryKit.ts');
  if (!fs.existsSync(entry)) return null;
  const outfile = path.join(TMP, 'pantry_' + dir.replace(/[^\w]+/g, '_') + '.cjs');
  esbuild.buildSync({ entryPoints: [entry], outfile, bundle: true, platform: 'node', format: 'cjs', logLevel: 'silent' });
  const mod = require(outfile);
  const arrKey = Object.keys(mod).find((k) => Array.isArray(mod[k]));
  return arrKey ? mod[arrKey] : null;
}

// country-specific native name fields seen in probe
const NATIVE = {
  tw: ['chineseName'],
  th: ['thaiName'],
  jp: ['japaneseKanji', 'japaneseKana', 'japaneseRomaji'],
  kr: ['koreanName'],
  my: ['malayName'],
  ph: ['filipinoName'],
  vn: ['label', 'grade'],
};

function collectImages(obj, set) {
  if (typeof obj === 'string') {
    if ((obj.startsWith('/images/') || obj.startsWith('images/')) && obj.includes('.')) {
      set.add(obj.startsWith('/') ? obj.slice(1) : obj);
    }
    return;
  }
  if (Array.isArray(obj)) { obj.forEach((v) => collectImages(v, set)); return; }
  if (obj && typeof obj === 'object') { Object.values(obj).forEach((v) => collectImages(v, set)); }
}

/** Flatten any nested multilingual object/strings into a flat MultilingualText */
function toML(m) {
  if (typeof m === 'string') return { en: m };
  if (!m || typeof m !== 'object' || Array.isArray(m)) return {};
  const out = {};
  for (const [k, v] of Object.entries(m)) {
    if (typeof v === 'string') { out[k] = v; continue; }
    if (v && typeof v === 'object' && !Array.isArray(v)) {
      const inner = toML(v);
      if (out[k] === undefined && inner[k]) out[k] = inner[k];
      for (const [k2, v2] of Object.entries(inner)) if (out[k2] === undefined) out[k2] = v2;
    }
  }
  return out;
}

const report = [];
const copied = [];
const output = {};

for (const src of APPS) {
  const raw = loadPantry(src.dir);
  if (!raw) { console.log(src.slug, 'NO pantry data'); continue; }

  const items = raw.map((it) => {
    const nf = NATIVE[src.slug] || [];
    const nativeName = it.nativeName || (nf.length ? (it[nf[0]] || it[nf[1]]) : undefined);
    const name = toML(it.name || it.label);
    const phonetic = it.japaneseRomaji || it.koreanPronunciation || it.thaiPronunciation ||
      (typeof (name && name.en) === 'string' ? name.en : undefined);
    const keyword =
      it.amazonSearchKeyword ||
      phonetic ||
      (typeof nativeName === 'string' && nativeName) ||
      it.id;
    // Latin-only keyword for Amazon search; fallback even if native is non-Latin
    var cleaned = encodeURIComponent(String(keyword).trim());
    if (/[^A-Za-z0-9%20'()+._!-]/.test(decodeURIComponent(cleaned))) {
      const latin = String((name && name.en) || '').trim().replace(/[^A-Za-z0-9 ]+/g, ' ').replace(/\s+/g, ' ');
      cleaned = encodeURIComponent(latin || String(keyword));
    }
    const amazonUrl = cleaned
      ? 'https://www.amazon.com/s?k=' + cleaned + '&tag=' + src.tag
      : null;

    const { amazonSearchKeyword, ...rest } = it;
    const id = it.id || (typeof it.grade === 'string' ? it.grade.toLowerCase().replace(/[^a-z0-9]+/g, '-')
      : 'item') + '-' + src.slug;
    return {
      id,
      country: src.slug,
      ...rest,
      name,
      nativeName: typeof nativeName === 'string' ? nativeName : undefined,
      category: String(it.category || 'pantry'),
      image: it.imageUrl || it.image,
      description: it.description,
      substituteTip: typeof it.substituteTip === 'string' ? it.substituteTip : undefined,
      amazonKeyword: keyword,
      amazonUrl,
    };
  });

  const imgs = new Set();
  collectImages(items, imgs);
  const imgMap = new Map();
  for (const rel of imgs) {
    const from = path.join(BASE, src.dir, 'public', rel);
    if (!fs.existsSync(from)) continue;
    const toRel = 'images/' + src.slug + '/' + rel.replace(/^images\//, '');
    const to = path.join(ROOT, 'public', toRel);
    fs.mkdirSync(path.dirname(to), { recursive: true });
    fs.copyFileSync(from, to);
    imgMap.set('/' + rel, '/' + toRel);
    copied.push({ country: src.slug, rel });
  }

  let json = JSON.stringify(items);
  for (const [from, to] of imgMap) json = json.split('"' + from + '"').join('"' + to + '"');
  json = json.replace(/\u2028/g, '\\u2028').replace(/\u2029/g, '\\u2029');
  output[src.slug] = JSON.parse(json);

  report.push({ country: src.slug, items: items.length, withAmazon: items.filter((i) => i.amazonUrl).length, images: imgMap.size });
}

fs.mkdirSync(path.join(ROOT, 'src', 'data'), { recursive: true });
const tagsSrc = Object.fromEntries(APPS.map((a) => [a.slug, a.tag]));
const content =
  `import type { CountryCode } from '../types/unified';\n` +
  `import type { PantryItem } from '../types/pantry';\n\n` +
  `// Auto-generated by scripts/merge_pantry.cjs — do not edit by hand.\n` +
  `// Amazon Associates tracking ids sourced from the 7 original apps.\n` +
  `export const AMAZON_TAGS: Record<CountryCode, string> = ${JSON.stringify(tagsSrc)};\n\n` +
  `export const PANTRY: Record<CountryCode, PantryItem[]> = ${JSON.stringify(output)};\n`;
fs.writeFileSync(path.join(ROOT, 'src', 'data', 'pantry.ts'), content);

fs.writeFileSync(path.join(__dirname, 'pantry_report.json'), JSON.stringify({ report, copied }, null, 2));
console.log(JSON.stringify(report, null, 2));
console.log('image copies:', copied.length);
