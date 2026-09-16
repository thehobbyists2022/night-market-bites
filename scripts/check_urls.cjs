const fs = require('fs');
const s = fs.readFileSync('src/data/pantry.ts', 'utf8');
const urls = s.match(/https:\/\/www\.amazon\.com\/s\?k=[^"&]+(&tag=[a-z0-9-]+)?/g) || [];
console.log('total amazon urls:', urls.length);
urls.slice(0, 8).forEach((u) => console.log(' ', u));
const tags = {};
(urls.join(' ')).match(/tag=[a-z0-9-]+/g)?.forEach((t) => { tags[t] = (tags[t] || 0) + 1; });
console.log(tags);
