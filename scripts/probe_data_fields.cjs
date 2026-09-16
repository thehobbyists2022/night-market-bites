// Probe the merged data pack field shapes (ingredients/steps/troubleshooting)
const esbuild = require('esbuild');
const fs = require('fs');
const path = require('path');
const ROOT = path.resolve(__dirname, '..');
const outfile = path.join(ROOT, 'scripts', '.tmp-bundles', 'probe_data.cjs');
esbuild.buildSync({
  entryPoints: [path.join(ROOT, 'src', 'data', 'recipes-kr.ts')],
  outfile, bundle: true, platform: 'node', format: 'cjs', logLevel: 'silent',
});
const { recipes } = require(outfile);
const r = recipes[0];
console.log('id:', r.id, '| category:', r.category, '| cookware:', r.supportedCookware.join(','));
console.log('--- ingredient keys:', Object.keys(r.ingredients[0]).join(', '));
console.log(JSON.stringify(r.ingredients[0]).slice(0, 300));
console.log('--- step keys:', Object.keys(r.steps[0]).join(', '));
console.log(JSON.stringify(r.steps[0]).slice(0, 300));
console.log('--- culture keys:', Object.keys(r.culture).join(', '));
console.log('--- top-level keys:', Object.keys(r).join(', '));
