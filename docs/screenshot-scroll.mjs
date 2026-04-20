import { chromium } from "playwright";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = join(__dirname, "screenshots");

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await context.newPage();

  console.log("Loading homepage...");
  await page.goto("http://localhost:3000", { waitUntil: "networkidle", timeout: 15000 });
  await page.waitForTimeout(800);

  // Scroll through the entire page to trigger whileInView animations
  const totalHeight = await page.evaluate(() => document.body.scrollHeight);
  const step = 400;
  for (let y = 0; y < totalHeight; y += step) {
    await page.evaluate((scrollY) => window.scrollTo(0, scrollY), y);
    await page.waitForTimeout(150);
  }
  // Scroll back to top for the full screenshot
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(500);

  await page.screenshot({ path: join(outDir, "home-redesign.png"), fullPage: true });
  console.log("Done — saved home-redesign.png");

  // Also capture individual sections at viewport size for clarity
  const sections = [
    { name: "hero", y: 0 },
    { name: "trust-bar", y: 550 },
  ];
  for (const s of sections) {
    await page.evaluate((scrollY) => window.scrollTo(0, scrollY), s.y);
    await page.waitForTimeout(300);
    await page.screenshot({ path: join(outDir, `home-${s.name}.png`) });
  }

  console.log("Section screenshots done.");
  await browser.close();
})();
