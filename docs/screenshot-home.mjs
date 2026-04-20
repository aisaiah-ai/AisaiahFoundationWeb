import { chromium } from "playwright";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = join(__dirname, "screenshots");

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await context.newPage();
  console.log("Capturing new homepage...");
  await page.goto("http://localhost:3000", { waitUntil: "networkidle", timeout: 15000 });
  await page.waitForTimeout(1000);
  await page.screenshot({ path: join(outDir, "home-redesign.png"), fullPage: true });
  console.log("Done — saved to docs/screenshots/home-redesign.png");
  await browser.close();
})();
