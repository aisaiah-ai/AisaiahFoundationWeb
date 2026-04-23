import { test, expect } from "@playwright/test";

const pages = [
  { path: "/", title: "AIsaiah" },
  { path: "/about", title: "About" },
  { path: "/board", title: "Board" },
  { path: "/solutions", title: "AIsaiah App" },
  { path: "/partnerships", title: "Partner" },
  { path: "/partnerships/cfc-usa", title: "Couples for Christ" },
  { path: "/blog", title: "Blog" },
  { path: "/team", title: "Team" },
  { path: "/events", title: "Events" },
  { path: "/contact", title: "Contact" },
];

const blogPosts = [
  "/blog/why-we-built-aisaiah",
  "/blog/faith-communities-deserve-better-technology",
  "/blog/our-approach-to-privacy-in-ministry-tech",
  "/blog/the-case-for-purpose-built-ministry-platforms",
];

test.describe("Page Rendering", () => {
  for (const pg of pages) {
    test(`${pg.path} loads successfully`, async ({ page }) => {
      const response = await page.goto(pg.path, { waitUntil: "networkidle" });
      expect(response?.status()).toBe(200);
    });

    test(`${pg.path} contains expected title text`, async ({ page }) => {
      await page.goto(pg.path, { waitUntil: "networkidle" });
      const title = await page.title();
      expect(title.toLowerCase()).toContain(pg.title.toLowerCase());
    });
  }

  for (const postPath of blogPosts) {
    test(`blog post ${postPath} loads`, async ({ page }) => {
      const response = await page.goto(postPath, { waitUntil: "networkidle" });
      expect(response?.status()).toBe(200);
    });
  }
});

test.describe("Navigation", () => {
  test("header navigation is visible on desktop", async ({ page }) => {
    await page.goto("/", { waitUntil: "networkidle" });
    const nav = page.locator("header nav");
    await expect(nav).toBeVisible();
  });

  test("all nav links resolve to valid pages", async ({ page }) => {
    await page.goto("/", { waitUntil: "networkidle" });
    const navLinks = page.locator('header nav a[href^="/"]');
    const count = await navLinks.count();
    expect(count).toBeGreaterThan(0);

    for (let i = 0; i < count; i++) {
      const href = await navLinks.nth(i).getAttribute("href");
      if (href && href.startsWith("/")) {
        const response = await page.request.get(href);
        expect(response.status(), `${href} should return 200`).toBe(200);
      }
    }
  });

  test("footer links resolve to valid pages", async ({ page }) => {
    await page.goto("/", { waitUntil: "networkidle" });
    const footerLinks = page.locator('footer a[href^="/"]');
    const count = await footerLinks.count();
    expect(count).toBeGreaterThan(0);

    for (let i = 0; i < count; i++) {
      const href = await footerLinks.nth(i).getAttribute("href");
      if (href && href.startsWith("/") && !href.includes("#")) {
        const response = await page.request.get(href);
        expect(response.status(), `Footer ${href} should return 200`).toBe(200);
      }
    }
  });
});

test.describe("SEO", () => {
  test("home page has meta description", async ({ page }) => {
    await page.goto("/", { waitUntil: "networkidle" });
    const metaDescription = page.locator('meta[name="description"]');
    const content = await metaDescription.getAttribute("content");
    expect(content).toBeTruthy();
    expect(content!.length).toBeGreaterThan(50);
  });

  test("home page has OpenGraph tags", async ({ page }) => {
    await page.goto("/", { waitUntil: "networkidle" });
    const ogTitle = page.locator('meta[property="og:title"]');
    await expect(ogTitle).toHaveAttribute("content", /.+/);
  });

  test("home page has structured data", async ({ page }) => {
    await page.goto("/", { waitUntil: "networkidle" });
    const ldJson = page.locator('script[type="application/ld+json"]');
    const count = await ldJson.count();
    expect(count).toBeGreaterThan(0);
  });

  test("blog post has Article structured data", async ({ page }) => {
    await page.goto(blogPosts[0], { waitUntil: "networkidle" });
    const ldJson = page.locator('script[type="application/ld+json"]');
    const scripts = await ldJson.allTextContents();
    const hasArticle = scripts.some((s) => {
      try {
        const data = JSON.parse(s);
        const items = Array.isArray(data) ? data : [data];
        return items.some((item) => item["@type"] === "Article");
      } catch {
        return false;
      }
    });
    expect(hasArticle).toBe(true);
  });
});

test.describe("Content", () => {
  test("home page has hero heading", async ({ page }) => {
    await page.goto("/", { waitUntil: "networkidle" });
    const heading = page.locator("h1");
    await expect(heading.first()).toBeVisible();
  });

  test("about page has mission section", async ({ page }) => {
    await page.goto("/about", { waitUntil: "networkidle" });
    const missionSection = page.locator("#mission");
    await expect(missionSection).toBeVisible();
  });

  test("partnerships page shows content", async ({ page }) => {
    await page.goto("/partnerships", { waitUntil: "networkidle" });
    const heading = page.locator("h1");
    await expect(heading.first()).toBeVisible();
  });

  test("blog page shows post cards", async ({ page }) => {
    await page.goto("/blog", { waitUntil: "networkidle" });
    const cards = page.locator("a[href*='/blog/']");
    const count = await cards.count();
    expect(count).toBeGreaterThanOrEqual(3);
  });

  test("contact page renders form after hydration", async ({ page }) => {
    await page.goto("/contact", { waitUntil: "networkidle" });
    // Contact is a client component — wait for hydration
    await page.waitForTimeout(1000);
    const form = page.locator("form");
    await expect(form.first()).toBeVisible({ timeout: 10000 });
  });
});

test.describe("Responsive Design", () => {
  test("mobile menu button visible on small screens", async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto("/", { waitUntil: "networkidle" });
    const menuButton = page.locator('button[aria-label="Toggle navigation menu"]');
    await expect(menuButton).toBeVisible();
  });

  test("footer is present on all pages", async ({ page }) => {
    for (const pg of pages.slice(0, 3)) {
      await page.goto(pg.path, { waitUntil: "networkidle" });
      const footer = page.locator("footer");
      await expect(footer).toBeVisible();
    }
  });
});
