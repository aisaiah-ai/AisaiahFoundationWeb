import { chromium } from "playwright";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = join(__dirname, "screenshots");

const pages = [
  { name: "home", path: "/" },
  { name: "about", path: "/about" },
  { name: "solutions", path: "/solutions" },
  { name: "partnerships", path: "/partnerships" },
  { name: "partnerships-cfc-usa", path: "/partnerships/cfc-usa" },
  { name: "cfc-usa", path: "/cfc-usa" },
  { name: "team", path: "/team" },
  { name: "board", path: "/board" },
  { name: "blog", path: "/blog" },
  { name: "blog-why-we-built-aisaiah", path: "/blog/why-we-built-aisaiah" },
  { name: "blog-faith-communities-deserve-better-technology", path: "/blog/faith-communities-deserve-better-technology" },
  { name: "blog-our-approach-to-privacy-in-ministry-tech", path: "/blog/our-approach-to-privacy-in-ministry-tech" },
  { name: "blog-the-case-for-purpose-built-ministry-platforms", path: "/blog/the-case-for-purpose-built-ministry-platforms" },
  { name: "events", path: "/events" },
  { name: "contact", path: "/contact" },
  { name: "privacy", path: "/privacy" },
  { name: "terms", path: "/terms" },
];

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
  });

  for (const pg of pages) {
    const page = await context.newPage();
    const url = `http://localhost:3000${pg.path}`;
    console.log(`Capturing ${pg.name} → ${url}`);
    try {
      await page.goto(url, { waitUntil: "networkidle", timeout: 15000 });
      await page.waitForTimeout(500);
      await page.screenshot({
        path: join(outDir, `${pg.name}.png`),
        fullPage: true,
      });
    } catch (err) {
      console.error(`  Failed: ${err.message}`);
    }
    await page.close();
  }

  await browser.close();
  console.log("Done — screenshots saved to docs/screenshots/");
})();
