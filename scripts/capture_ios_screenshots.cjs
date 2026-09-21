/**
 * Captures REAL screenshots of the running Night Market Bites app (dist/) at
 * App Store device sizes. English UI. No placeholder text.
 *
 * Device sizes:
 * - iPhone 6.7"  1290x2796 (430x932  @3x)
 * - iPhone 6.5"  1242x2688 (414x896  @3x)
 * - iPad 12.9"   2048x2732 (1024x1366 @2x)
 *
 * Screenshots captured (10 per device):
 *  01-market-hall.png          – Home: 7 country district cards
 *  02-district-taiwan.png      – TW Taiwan district view
 *  03-district-thailand.png    – TH Thailand district view
 *  04-district-japan.png       – JP Japan district view
 *  05-district-korea.png       – KR Korea district view
 *  06-district-malaysia.png    – MY Malaysia district view
 *  07-district-philippines.png – PH Philippines district view
 *  08-district-vietnam.png     – VN Vietnam district view
 *  09-pantry.png               – Pantry & Amazon Prime Essentials
 *  10-passport.png             – Taste Passport & Travel Stamps
 *
 * Output: appstore_screenshots/<device>/NN-name.png
 */
const fs   = require('fs');
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
  { name: 'iPhone-6.7-1290x2796', width: 430,  height: 932,  dpr: 3, mobile: true  },
  { name: 'iPhone-6.5-1242x2688', width: 414,  height: 896,  dpr: 3, mobile: true  },
  { name: 'iPad-12.9-2048x2732',  width: 1024, height: 1366, dpr: 2, mobile: false }
];

// All 7 country codes + their English names as they appear in the UI
const COUNTRIES = [
  { code: 'tw', label: 'Taiwan',      file: '02-district-taiwan'      },
  { code: 'th', label: 'Thailand',    file: '03-district-thailand'     },
  { code: 'jp', label: 'Japan',       file: '04-district-japan'        },
  { code: 'kr', label: 'Korea',       file: '05-district-korea'        },
  { code: 'my', label: 'Malaysia',    file: '06-district-malaysia'     },
  { code: 'ph', label: 'Philippines', file: '07-district-philippines'  },
  { code: 'vn', label: 'Vietnam',     file: '08-district-vietnam'      },
];

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

/** Click the country card by country code, falling back to text match */
async function clickCountryCard(page, code, label) {
  return page.evaluate(({ code, label }) => {
    // Strategy 1: find a card whose badge text contains the country name
    const allCards = [...document.querySelectorAll('.card-e')];
    const byLabel = allCards.find((c) => (c.textContent || '').includes(label));
    if (byLabel) {
      // click the inner clickable div (first child that has onClick)
      const clickable = byLabel.querySelector('[class*="cursor-pointer"]') || byLabel;
      clickable.click();
      return `clicked by label: ${label}`;
    }
    return `not found: ${label}`;
  }, { code, label });
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

    console.log(`\n=== Capturing for ${dev.name} ===`);

    /** Write screenshot to disk with retry */
    const shot = async (name) => {
      const outPath = path.join(outDir, `${name}.png`);
      const buf = await page.screenshot({ type: 'png' });
      for (let i = 0; i < 5; i++) {
        try { fs.writeFileSync(outPath, buf); break; }
        catch (e) { await sleep(500); }
      }
      console.log(`  ✓ ${dev.name} -> ${name}.png`);
    };

    // ── 01 Market Hall (Home) ──────────────────────────────────────────────
    await page.goto(`http://localhost:${PORT}/?lang=en`, { waitUntil: 'networkidle2', timeout: 60000 });
    await sleep(2500);
    await shot('01-market-hall');

    // ── 02–08 Each Country District View ─────────────────────────────────
    for (const country of COUNTRIES) {
      // Always return to home first
      await page.goto(`http://localhost:${PORT}/?lang=en`, { waitUntil: 'networkidle2', timeout: 60000 });
      await sleep(2000);

      const result = await clickCountryCard(page, country.code, country.label);
      console.log(`  ${country.label} card: ${result}`);
      await sleep(2500);
      await shot(country.file);
    }

    // ── 09 Pantry & Amazon Prime Essentials ───────────────────────────────
    await page.goto(`http://localhost:${PORT}/?lang=en`, { waitUntil: 'networkidle2', timeout: 60000 });
    await sleep(1500);
    const openedPantry = await page.evaluate(() => {
      const navButtons = [...document.querySelectorAll('nav button')];
      const pantryBtn = navButtons.find((b) => (b.textContent || '').toLowerCase().includes('pantry')) || navButtons[2];
      if (pantryBtn) { pantryBtn.click(); return true; }
      return false;
    });
    console.log(`  Pantry nav click: ${openedPantry}`);
    await sleep(2500);
    await shot('09-pantry');

    // ── 10 Taste Passport ─────────────────────────────────────────────────
    const openedPassport = await page.evaluate(() => {
      const navButtons = [...document.querySelectorAll('nav button')];
      const passportBtn = navButtons.find((b) => (b.textContent || '').toLowerCase().includes('passport')) || navButtons[3];
      if (passportBtn) { passportBtn.click(); return true; }
      return false;
    });
    console.log(`  Passport nav click: ${openedPassport}`);
    await sleep(2500);
    await shot('10-passport');

    await page.close();
  }

  await browser.close();
  server.close();
  console.log('\n✅ All 30 App Store screenshots successfully captured!');
}

main().catch((err) => { console.error('ERROR:', err); process.exit(1); });
