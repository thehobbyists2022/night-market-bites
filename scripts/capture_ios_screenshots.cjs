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

    console.log(`\nCapturing for ${dev.name}...`);
    await page.goto(`http://localhost:${PORT}/?lang=en`, { waitUntil: 'networkidle2', timeout: 60000 });
    await sleep(2500);

    const shot = async (name) => {
      const outPath = path.join(outDir, `${name}.png`);
      const buf = await page.screenshot({ type: 'png' });
      for (let i = 0; i < 5; i++) {
        try {
          fs.writeFileSync(outPath, buf);
          break;
        } catch (e) {
          await sleep(500);
        }
      }
      console.log(`  ✓ ${dev.name} -> ${name}.png`);
    };

    // 01 Market Hall (Home view with vibrant banner and 7 country cards)
    await shot('01-market-hall');

    // 02 Taiwan District View
    const clickedTw = await page.evaluate(() => {
      const buttons = [...document.querySelectorAll('button')];
      const twBtn = buttons.find((b) => {
        const card = b.closest('.card-e');
        return card && (card.textContent || '').includes('Taiwan');
      });
      if (twBtn) {
        twBtn.click();
        return true;
      }
      // Fallback: click directly on the card-e div containing Taiwan
      const cards = [...document.querySelectorAll('.card-e')];
      const twCard = cards.find((c) => (c.textContent || '').includes('Taiwan'));
      if (twCard) {
        twCard.click();
        return true;
      }
      return false;
    });
    console.log(`  Taiwan card click: ${clickedTw}`);
    await sleep(2500);
    await shot('02-district-taiwan');

    // 03 Recipe Detail View (Switch to Recipes tab and open Popcorn Chicken / Lu Rou Fan)
    const openedRecipe = await page.evaluate(async () => {
      // Find and click the dishes/recipes tab button
      const buttons = [...document.querySelectorAll('button')];
      const recipeTab = buttons.find((b) => {
        const text = (b.textContent || '').toLowerCase();
        return text.includes('recipes') || text.includes('dishes');
      });
      if (recipeTab) recipeTab.click();
      
      await new Promise((r) => setTimeout(r, 600));

      // Click the first recipe card with an image
      const cards = [...document.querySelectorAll('button')];
      const firstDish = cards.find((b) => b.querySelector('img') && (b.textContent || '').includes('min'));
      if (firstDish) {
        firstDish.click();
        return true;
      }
      return false;
    });
    console.log(`  Recipe card click: ${openedRecipe}`);
    await sleep(2500);
    await shot('03-recipe-detail');

    // 04 Pantry & Amazon Prime Essentials View
    const openedPantry = await page.evaluate(() => {
      const navButtons = [...document.querySelectorAll('nav button')];
      const pantryBtn = navButtons.find((b) => (b.textContent || '').toLowerCase().includes('pantry')) || navButtons[2];
      if (pantryBtn) {
        pantryBtn.click();
        return true;
      }
      return false;
    });
    console.log(`  Pantry nav click: ${openedPantry}`);
    await sleep(2500);
    await shot('04-ingredients-steps');

    // 05 Taste Passport & Travel Stamps View
    const openedPassport = await page.evaluate(() => {
      const navButtons = [...document.querySelectorAll('nav button')];
      const passportBtn = navButtons.find((b) => (b.textContent || '').toLowerCase().includes('passport')) || navButtons[3];
      if (passportBtn) {
        passportBtn.click();
        return true;
      }
      return false;
    });
    console.log(`  Passport nav click: ${openedPassport}`);
    await sleep(2500);
    await shot('05-passport');

    await page.close();
  }

  await browser.close();
  server.close();
  console.log('\nAll App Store screenshots successfully captured and updated!');
}

main().catch((err) => { console.error('ERROR:', err); process.exit(1); });

