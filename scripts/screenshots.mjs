/**
 * Captures the README screenshots from a running preview server:
 * desktop and mobile first viewports, the before/after gallery, the
 * "My approach" and "How it works" sections, and a full-page desktop JPEG.
 *
 *   npm run build && npm run preview      # in one terminal
 *   npm run screenshots                   # in another
 *
 * Uses the locally installed Chrome or Edge through playwright-core, so no
 * browser download is needed. Options:
 *   --url=http://localhost:4310   server to capture
 *   --out=docs/screenshots        output folder
 *   --locale=vi                   locale to store before loading
 *   --suffix=                     appended to file names (e.g. "-en")
 */
import { mkdir } from 'node:fs/promises';
import path from 'node:path';
import { chromium } from 'playwright-core';

const arg = (name, fallback) =>
  process.argv
    .find((a) => a.startsWith(`--${name}=`))
    ?.split('=')
    .slice(1)
    .join('=') ?? fallback;

const url = arg('url', 'http://localhost:4310');
const out = arg('out', 'docs/screenshots');
const locale = arg('locale', 'vi');
const suffix = arg('suffix', '');
await mkdir(out, { recursive: true });

async function launch() {
  for (const channel of ['chrome', 'msedge']) {
    try {
      return await chromium.launch({ channel });
    } catch {
      // try the next installed browser
    }
  }
  throw new Error('No local Chrome or Edge found for playwright-core.');
}

const browser = await launch();

async function page(viewport, options = {}) {
  const context = await browser.newContext({
    viewport,
    deviceScaleFactor: options.scale ?? 1,
    isMobile: options.mobile ?? false,
    hasTouch: options.mobile ?? false,
    reducedMotion: 'reduce',
  });
  await context.addInitScript((value) => {
    try {
      localStorage.setItem('familyframe.locale', value);
    } catch {
      /* ignore */
    }
  }, locale);
  const p = await context.newPage();
  await p.goto(url, { waitUntil: 'networkidle' });
  await p.evaluate(() => document.fonts.ready);
  return p;
}

/** Scrolls through the page so every lazy image loads before a full-page capture. */
async function loadAllImages(p) {
  await p.evaluate(async () => {
    for (let y = 0; y < document.body.scrollHeight; y += window.innerHeight / 2) {
      window.scrollTo(0, y);
      await new Promise((r) => setTimeout(r, 120));
    }
    window.scrollTo(0, 0);
    await Promise.all(
      Array.from(document.images).map((img) =>
        img.complete ? null : new Promise((r) => img.addEventListener('load', r, { once: true })),
      ),
    );
  });
  await p.waitForTimeout(300);
}

const file = (name, ext = 'png') => path.join(out, `${name}${suffix}.${ext}`);

// Desktop: first viewport, plus a full-page JPEG (PNG would be ~8 MB)
const desktop = await page({ width: 1440, height: 900 });
await desktop.screenshot({ path: file('familyframe-home-desktop') });
await loadAllImages(desktop);
await desktop.screenshot({
  path: file('familyframe-full-desktop', 'jpg'),
  fullPage: true,
  type: 'jpeg',
  quality: 72,
});

// Before/after pairs, desktop: the "More examples" grid, where every card is
// one original + restored pair sharing a frame.
const pairs = desktop.locator('.gallery__more');
await desktop.addStyleTag({
  content: '.site-header, .skip-link { visibility: hidden !important; }',
});
await desktop.screenshot({
  path: file('familyframe-before-after'),
  fullPage: true,
  clip: await pairs.evaluate((el) => {
    const r = el.getBoundingClientRect();
    return {
      x: 0,
      y: r.top + window.scrollY,
      width: window.innerWidth,
      height: Math.min(r.height, 1900),
    };
  }),
});

// "My approach": the whole paper section, desktop.
await desktop.locator('.philosophy').screenshot({ path: file('familyframe-approach') });

// "How it works": the four-step process panel with the payment note, desktop.
await desktop.locator('.process__panel').screenshot({ path: file('familyframe-process') });

// Mobile: first viewport at 2x
const mobile = await page({ width: 390, height: 844 }, { mobile: true, scale: 2 });
await mobile.screenshot({ path: file('familyframe-home-mobile') });

await browser.close();
console.log(`Screenshots saved to ${out}/`);
