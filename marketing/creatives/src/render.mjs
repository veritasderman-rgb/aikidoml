/**
 * Vyrenderuje každý blok .canvas z creatives.html do PNG v ../build/.
 *
 *   npm i playwright         (jednorázově, mimo tento projekt stačí i npx)
 *   node render.mjs
 *
 * Název souboru = data-name, rozměry = skutečná velikost bloku v CSS.
 * data-transparent="1" vyrenderuje PNG s alfa kanálem (textové vrstvy do videa).
 */
import { chromium } from "playwright";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";
import { mkdirSync } from "node:fs";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = resolve(here, "../build");
mkdirSync(outDir, { recursive: true });

// V prostředí, kde je Chromium mimo Playwright, jde cesta přes CHROME_PATH.
const browser = await chromium.launch(
  process.env.CHROME_PATH ? { executablePath: process.env.CHROME_PATH } : {},
);
const page = await browser.newPage({ viewport: { width: 1400, height: 900 }, deviceScaleFactor: 1 });
await page.goto("file://" + resolve(here, "creatives.html"), { waitUntil: "networkidle" });

const names = await page.$$eval(".canvas", (els) => els.map((e) => e.dataset.name));
for (const name of names) {
  const el = page.locator(`[data-name="${name}"]`);
  const transparent = (await el.getAttribute("data-transparent")) === "1";
  // omitBackground odstraní jen výchozí bílou stránky – šedé pozadí <body> pro náhled
  // by se jinak zapeklo do PNG a překrylo video.
  await page.evaluate((t) => {
    document.body.style.background = t ? "transparent" : "#333";
  }, transparent);
  const file = resolve(outDir, `${name}.png`);
  await el.screenshot({ path: file, omitBackground: transparent });
  const box = await el.boundingBox();
  console.log(`${name}.png  ${box.width}×${box.height}${transparent ? "  (alpha)" : ""}`);
}

await browser.close();
