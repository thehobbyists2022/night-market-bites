/**
 * Step 4a: extract the UI translation dictionaries from the 7 source apps
 * (READ-ONLY) and analyse key coverage to build the unified dictionary.
 */
const fs = require('fs');
const path = require('path');
const esbuild = require('esbuild');

const ROOT = path.resolve(__dirname, '..');
const BASE = 'C:/Users/Matrixkuo/Desktop/Antigravity/APP Design/';
const TMP = path.join(ROOT, 'scripts', '.tmp-bundles');
const OUT = path.join(ROOT, 'scripts', 'i18n_extracted');
fs.mkdirSync(OUT, { recursive: true });

const APPS = [
  { key: 'tw', dir: 'Taiwan' },
  { key: 'th', dir: 'ThaiFood Master' },
  { key: 'jp', dir: 'Japan Food Master' },
  { key: 'kr', dir: 'Korean Food Master' },
  { key: 'my', dir: 'Malaysia Food Master' },
  { key: 'ph', dir: 'Filipino Food Master' },
  { key: 'vn', dir: 'Vietnamese Food Master' },
];

const LANGS = ['zh-TW', 'en', 'ja', 'ko', 'th', 'vi', 'fil', 'ms'];

function loadDict(dir) {
  const entry = path.join(BASE, dir, 'src', 'i18n', 'translations.ts');
  if (!fs.existsSync(entry)) return null;
  const outfile = path.join(TMP, 'i18n_' + dir.replace(/[^\w]+/g, '_') + '.cjs');
  esbuild.buildSync({
    entryPoints: [entry],
    outfile,
    bundle: true,
    platform: 'node',
    format: 'cjs',
    logLevel: 'silent',
  });
  const mod = require(outfile);
  return mod.translations || mod.default || mod.default?.translations || null;
}

function flatKeys(obj, prefix = '') {
  const out = [];
  for (const [k, v] of Object.entries(obj || {})) {
    if (v && typeof v === 'object') out.push(...flatKeys(v, prefix + k + '.'));
    else out.push(prefix + k);
  }
  return out;
}

const result = [];
for (const app of APPS) {
  const dict = loadDict(app.dir);
  if (!dict) { console.log(app.key, 'NO translations export'); continue; }
  const langs = {};
  for (const L of LANGS) {
    if (dict[L]) {
      langs[L] = flatKeys(dict[L]).length;
      fs.writeFileSync(path.join(OUT, `ui_${app.key}_${L}.json`), JSON.stringify(dict[L], null, 1));
    }
  }
  result.push({ app: app.key, langs: Object.fromEntries(Object.entries(langs)) });
}

fs.writeFileSync(path.join(ROOT, 'scripts', 'i18n_report.json'), JSON.stringify(result, null, 2));
console.log(JSON.stringify(result, null, 2));
