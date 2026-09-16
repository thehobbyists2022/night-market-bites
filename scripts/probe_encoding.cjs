// Probe whether source-data multilingual strings are real CJK or mojibake,
// by extracting the first zh-TW / ja / ko value of each file and showing codepoints.
const fs = require('fs');
const base = 'C:/Users/Matrixkuo/Desktop/Antigravity/APP Design/';

function probe(label, file) {
  const p = base + file;
  if (!fs.existsSync(p)) { console.log(label.padEnd(16), file, 'MISSING'); return; }
  const s = fs.readFileSync(p, 'utf8');
  for (const key of ['zh-TW', 'ja', 'ko', 'th', 'vi']) {
    const re = new RegExp("[\"']" + key + "[\"']\\s*:\\s*[\"']([^\"']{0,20})[\"']");
    const m = s.match(re);
    if (m) {
      const chars = [...m[1]].slice(0, 8);
      const codes = chars.map(c => c.codePointAt(0).toString(16).padStart(4, '0')).join(' ');
      const ranges = chars.map(c => {
        const cp = c.codePointAt(0);
        if (cp >= 0x4e00 && cp <= 0x9fff) return 'HAN';
        if (cp >= 0xac00 && cp <= 0xd7af) return 'HANGUL';
        if (cp >= 0x3040 && cp <= 0x30ff) return 'KANA';
        if (cp >= 0x0e00 && cp <= 0x0e7f) return 'THAI';
        if (cp >= 0xfffd && cp <= 0xfffd) return 'REPL';
        return 'LATIN';
      }).join(',');
      console.log(label.padEnd(12), key.padEnd(6), JSON.stringify(m[1].slice(0, 8)).padEnd(12), '|', ranges, '|', codes);
    }
  }
  console.log('----');
}

probe('Taiwan', 'Taiwan/src/data/recipes.ts');
probe('KoreanFM', 'Korean Food Master/src/data/recipes/tteokbokki.ts');
probe('ThaiFM', 'ThaiFood Master/src/data/recipes.ts');
probe('JapanFM', 'Japan Food Master/src/data/recipes/takoyaki.ts');
