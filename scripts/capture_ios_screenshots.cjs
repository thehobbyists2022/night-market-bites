/**
 * Captures REAL screenshots of the running Night Market Bites app (dist/) at
 * App Store device sizes. English UI is the app default; no rival-platform text.
 * - iPhone 6.7" 1290x2796 (430x932  @3x)
 * - iPhone 6.5" 1242x2688 (414x896  @3x)
 * - iPad 12.9" 2048x2732  (1024x1366 @2x)
 * Output: appstore_screenshots/<device>/NN-name.png
 */
const fs = require('fs');
const path = require('path');
const http = require('http');

const PUP = 'C:/Users/Matrixkuo/Desktop/Antigravity/APP Design/Filipino Food Master/node_modules';
module.paths.push(PUP);
const puppeteer = require(path.join(PUP, 'puppeteer-core'));

const EDGE = [
  'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
  'C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe',
  'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe'
].find((p) => fs.existsSync(p));
if (!EDGE) { console.error('No Edge/Chrome found.'); process.exit(1); }

const DIST = path.resolve(__dirname, '..', 'dist');
const PORT = 4217;

const MIME = {
  '.html': 'text/html; charset=utf-8', '.js': 'text/javascript', '.css': 'text/css',
  '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.svg': 'image/svg+xml',
  '.json': 'application/json', '.webmanifest': 'application/json', '.ico': 'image/x-icon'
};

function startServer() {
  return new Promise((resolve) => {
    const server = http.createServer((req, res) => {
      let p = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
      if (p === '/') p = '/index.html';
      const file = path.join(DIST, p);
      if (fs.existsSync(file) && fs.statSync(file).isFile()) {
        res.writeHead(200, { 'Content-Type': MIME[path.extname(file).toLowerCase()] || 'application/octet-stream' });
        fs.createReadStream(file).pipe(res);
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        fs.createReadStream(path.join(DIST, 'index.html')).pipe(res);
      }
    });
    server.listen(PORT, () => resolve(server));
  });
}

const DEVICES = [
  { name: 'iPhone-6.7-1290x2796', width: 430, height: 932, dpr: 3, mobile: true },
  { name: 'iPhone-6.5-1242x2688', width: 414, height: 896, dpr: 3, mobile: true },
  { name: 'iPad-12.9-2048x2732', width: 1024, height: 1366, dpr: 2, mobile: false }
];

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function clickButtonWithText(page, txt) {
  return page.evaluate((t) => {
    const el = [...document.querySelectorAll('button')]
      .find((b) => (b.textContent || '').trim().toLowerCase().includes(t.toLowerCase()));
    if (el) { el.click(); return true; }
    return false;
  }, txt);
}

async function main() {
  if (!fs.existsSync(path.join(DIST, 'index.html'))) {
    console.error('dist/index.html missing. Run "npm run build" first.');
    process.exit(1);
  }
  const server = await startServer();
  const browser = await puppeteer.launch({
    executablePath: EDGE,
    headless: 'new',
    args: ['--disable-gpu', '--hide-scrollbars', '--force-color-profile=srgb', '--lang=en-US', '--no-first-run']
  });

  for (const dev of DEVICES) {
    const outDir = path.join(process.cwd(), 'appstore_screenshots', dev.name);
    fs.mkdirSync(outDir, { recursive: true });

    const page = await browser.newPage();
    await page.setViewport({
      width: dev.width, height: dev.height,
      deviceScaleFactor: dev.dpr, isMobile: dev.mobile, hasTouch: dev.mobile
    });
    await page.goto(`http://localhost:${PORT}/?lang=en`, { waitUntil: 'networkidle2', timeout: 90000 });
    await sleep(2200);

    const shot = async (name) => {
      await page.screenshot({ path: path.join(outDir, `${name}.png`) });
      console.log(`  ${dev.name} -> ${name}.png`);
    };

    // 01 market hall
    await shot('01-market-hall');

    // 02 district (Taiwan)
    const okDistrict = await clickButtonWithText(page, 'Taiwan');
    await sleep(2000);
    if (okDistrict) {
      await shot('02-district-taiwan');

      // 03 recipe detail (first stall)
      const okRecipe = await page.evaluate(() => {
        const card = [...document.querySelectorAll('button')].find((b) => b.querySelector('img') && b.textContent.includes('min'));
        if (card) { card.click(); return true; }
        return false;
      });
      await sleep(2200);
      if (okRecipe) {
        await shot('03-recipe-detail');
        await page.evaluate((h) => window.scrollTo({ top: Math.round(h * 1.05), behavior: 'instant' }), dev.height);
        await sleep(700);
        await shot('04-ingredients-steps');
      } else {
        console.log('  ! recipe click failed');
        fs.copyFileSync(path.join(outDir, '02-district-taiwan.png'), path.join(outDir, '03-recipe-detail.png'));
        fs.copyFileSync(path.join(outDir, '02-district-taiwan.png'), path.join(outDir, '04-ingredients-steps.png'));
      }
    } else {
      console.log('  ! district click failed');
      fs.copyFileSync(path.join(outDir, '01-market-hall.png'), path.join(outDir, '02-district-taiwan.png'));
    }

    // 05 passport (stamps visible)
    await clickButtonWithText(page, 'Passport');
    await sleep(2000);
    await shot('05-passport');

    await page.close();
  }

  await browser.close();
  server.close();
  console.log('\nDone. Real-app screenshots in appstore_screenshots/');
}

main().catch((err) => { console.error('ERROR:', err); process.exit(1); });
