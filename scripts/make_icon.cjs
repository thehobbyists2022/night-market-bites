const fs = require('fs');
const path = require('path');

const PUP = 'C:/Users/Matrixkuo/Desktop/Antigravity/APP Design/Filipino Food Master/node_modules';
module.paths.push(PUP);
const puppeteer = require(path.join(PUP, 'puppeteer-core'));

const EDGE = [
  'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
  'C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe',
  'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe'
].find((p) => fs.existsSync(p));

const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" width="1024" height="1024" style="position:absolute;top:0;left:0;width:1024px;height:1024px;">
  <defs>
    <!-- Background Gradient: Deep Night Market Midnight -->
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#080F1E" />
      <stop offset="45%" stop-color="#0E1D38" />
      <stop offset="100%" stop-color="#050811" />
    </linearGradient>

    <!-- Radial Ambient Atmosphere -->
    <radialGradient id="ambientGlow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#F59E0B" stop-opacity="0.32" />
      <stop offset="45%" stop-color="#EA580C" stop-opacity="0.16" />
      <stop offset="75%" stop-color="#DC2626" stop-opacity="0.04" />
      <stop offset="100%" stop-color="#000000" stop-opacity="0" />
    </radialGradient>

    <!-- Outer Flame: Sizzling Amber & Orange -->
    <linearGradient id="flameOuterGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FDE047" />
      <stop offset="25%" stop-color="#F59E0B" />
      <stop offset="65%" stop-color="#EA580C" />
      <stop offset="100%" stop-color="#DC2626" />
    </linearGradient>

    <!-- Mid Flame Core: Golden Glow -->
    <linearGradient id="flameMidGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#FFFFFF" />
      <stop offset="25%" stop-color="#FEF08A" />
      <stop offset="60%" stop-color="#FBBF24" />
      <stop offset="100%" stop-color="#F97316" />
    </linearGradient>

    <!-- Cast Iron Wok Gradient -->
    <linearGradient id="wokGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#475569" />
      <stop offset="35%" stop-color="#334155" />
      <stop offset="100%" stop-color="#1E293B" />
    </linearGradient>

    <!-- Wok Rim Highlight -->
    <linearGradient id="rimGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#F59E0B" stop-opacity="0.6" />
      <stop offset="50%" stop-color="#FEF08A" stop-opacity="0.95" />
      <stop offset="100%" stop-color="#F59E0B" stop-opacity="0.6" />
    </linearGradient>
  </defs>

  <!-- Solid Canvas Background -->
  <rect width="1024" height="1024" fill="url(#bgGrad)" />

  <!-- Ambient Radiant Warmth -->
  <circle cx="512" cy="500" r="460" fill="url(#ambientGlow)" />

  <!-- Warm Floating Embers -->
  <circle cx="280" cy="330" r="6" fill="#FDE047" opacity="0.8" />
  <circle cx="740" cy="370" r="7" fill="#F59E0B" opacity="0.85" />
  <circle cx="340" cy="210" r="5" fill="#F97316" opacity="0.7" />
  <circle cx="680" cy="240" r="6" fill="#FDE047" opacity="0.75" />
  <circle cx="480" cy="130" r="6" fill="#FFF" opacity="0.9" />
  <circle cx="570" cy="170" r="5" fill="#FEF08A" opacity="0.75" />

  <!-- Asian Street Food Cast Iron Wok Base -->
  <!-- Wok Side Loop Handles -->
  <path d="M 205 675 C 170 675 165 725 200 735 C 215 738 225 730 230 720" fill="none" stroke="#475569" stroke-width="14" stroke-linecap="round" />
  <path d="M 819 675 C 854 675 859 725 824 735 C 809 738 799 730 794 720" fill="none" stroke="#475569" stroke-width="14" stroke-linecap="round" />

  <!-- Wok Bowl -->
  <path
    d="M 220 690 Q 512 755 804 690 Q 724 835 512 835 Q 300 835 220 690 Z"
    fill="url(#wokGrad)"
  />
  <!-- Wok Rim Highlight -->
  <path
    d="M 216 688 Q 512 753 808 688 Q 512 746 216 688 Z"
    fill="url(#rimGrad)"
  />
  <!-- Wok Pedestal Base -->
  <rect x="437" y="828" width="150" height="24" rx="12" fill="#334155" />

  <!-- Central Flame: Exact Lucide Flame scaled up with rich gradients and inner glow -->
  <!-- Outer Flame Body -->
  <g transform="translate(512, 450) scale(27) translate(-12, -12)">
    <path
      d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 3.5z"
      fill="url(#flameOuterGrad)"
    />
  </g>

  <!-- Mid Glowing Core Flame -->
  <g transform="translate(512, 470) scale(16) translate(-12, -12)">
    <path
      d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 3.5z"
      fill="url(#flameMidGrad)"
    />
  </g>

  <!-- Inner Incandescent White Flame Tear -->
  <g transform="translate(512, 495) scale(8) translate(-12, -12)">
    <path
      d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 3.5z"
      fill="#FFFFFF"
      opacity="0.95"
    />
  </g>

</svg>`;

async function run() {
  const browser = await puppeteer.launch({
    executablePath: EDGE,
    headless: 'new',
    args: ['--disable-gpu', '--hide-scrollbars', '--no-sandbox']
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1024, height: 1024, deviceScaleFactor: 1 });
  await page.setContent(`<!DOCTYPE html><html><head><style>html,body{margin:0;padding:0;width:1024px;height:1024px;overflow:hidden;background:#080F20;}</style></head><body>${svg}</body></html>`);

  const out1 = path.join(__dirname, '..', 'assets', 'images', 'icon-ios.png');
  const out2 = path.join(__dirname, '..', 'ios', 'App', 'App', 'Assets.xcassets', 'AppIcon.appiconset', 'AppIcon-512@2x.png');

  await page.screenshot({ path: out1, omitBackground: false });
  fs.copyFileSync(out1, out2);
  console.log('Saved:', out1);
  console.log('Saved:', out2);

  const favPath = path.join(__dirname, '..', 'public', 'favicon.svg');
  fs.writeFileSync(favPath, svg.trim());
  console.log('Saved:', favPath);

  await browser.close();
}

run().catch((e) => { console.error(e); process.exit(1); });
