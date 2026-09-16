// Probe pantryKit exports + affiliate tracking ids across the 7 source apps
const esbuild = require('esbuild');
const fs = require('fs');
const path = require('path');
const ROOT = path.resolve(__dirname, '..');
const BASE = 'C:/Users/Matrixkuo/Desktop/Antigravity/APP Design/';
const TMP = path.join(ROOT, 'scripts', '.tmp-bundles');

const APPS = [
  ['tw', 'Taiwan'], ['th', 'ThaiFood Master'], ['jp', 'Japan Food Master'],
  ['kr', 'Korean Food Master'], ['my', 'Malaysia Food Master'],
  ['ph', 'Filipino Food Master'], ['vn', 'Vietnamese Food Master'],
];

for (const [key, dir] of APPS) {
  console.log('=== ' + key + ' ' + dir + ' ===');
  // pantry
  const p = path.join(BASE, dir, 'src', 'data', 'pantryKit.ts');
  if (fs.existsSync(p)) {
    const out = path.join(TMP, 'pantry_' + key + '.cjs');
    esbuild.buildSync({ entryPoints: [p], outfile: out, bundle: true, platform: 'node', format: 'cjs', logLevel: 'silent' });
    const mod = require(out);
    const arr = mod.pantryItems || mod.default || Object.values(mod).find(Array.isArray);
    console.log('  pantry export keys:', Object.keys(mod).join(','));
    if (arr) {
      console.log('  items:', arr.length, '| item keys:', Object.keys(arr[0]).join(','));
      console.log('  languages on name:', Object.keys(arr[0].name || {}).join(','));
      console.log('  categories:', [...new Set(arr.map(x => x.category))].join(','));
    }
  } else console.log('  NO pantryKit.ts');
  // affiliate
  const a = path.join(BASE, dir, 'src', 'config', 'affiliateConfig.ts');
  if (fs.existsSync(a)) {
    const out = path.join(TMP, 'aff_' + key + '.cjs');
    try {
      esbuild.buildSync({ entryPoints: [a], outfile: out, bundle: true, platform: 'node', format: 'cjs', logLevel: 'silent' });
      const m = require(out);
      const cfg = m.AFFILIATE_CONFIG || m.default?.AFFILIATE_CONFIG;
      if (cfg?.amazon) console.log('  amazon tag:', cfg.amazon.trackingId, '| enabled:', cfg.amazon.enabled);
      else console.log('  affiliate exports:', Object.keys(m).join(','));
    } catch (e) { console.log('  affiliate bundle fail:', e.message.slice(0, 80)); }
  } else console.log('  NO affiliateConfig.ts');
}
