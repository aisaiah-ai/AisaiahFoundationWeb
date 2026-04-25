---
name: Project status — AIsaiah Foundation Web
description: Current state of the website as of 2026-04-24, completed fixes, deploy setup, and remaining work
type: project
---

## Current Branch
`hero_improvements` — all work uncommitted (deployed directly via wrangler)

## Deploy Setup
- **Dev site:** https://aisaiah-foundation-dev.pages.dev
- **Deploy command:** `CLOUDFLARE_ACCOUNT_ID=215fee009e8e5c687dbdc8a74ecac543 wrangler pages deploy out --project-name=aisaiah-foundation-dev --branch=dev --commit-dirty=true`
- **Wrangler login:** aisaiah.platform@gmail.com (Cloudflare)
- **Firebase login:** hope.dajao@aisaiah.org
- **GitHub Actions CI/CD:** failing due to `CLOUDFLARE_ACCOUNT_ID` secret mismatch — needs updating to `215fee009e8e5c687dbdc8a74ecac543`

## What's Been Done This Session

### Bug Fixes (7 bugs)
1. **Contact form Firestore rules** — Created `firestore.rules` with tight field validation for `contactSubmissions` collection. Deployed to `aisaiah-app-dev` via `firebase deploy --only firestore:rules`
2. **About page \u2014 escapes** — Replaced literal `\u2014`/`\u2019` with actual em dashes and curly quotes in JSX text
3. **Board typo** — "Christoper Angelo" → "Christopher Angelo" in `content/board-members.ts`
4. **Contact Send Message button** — Added `variant="accent"`. Also fixed root cause: Button component `{...rest}` spread was overwriting `className={classes}` — destructured out known props before spreading
5. **Solutions hero CTAs** — Changed to `variant="accent"`/`variant="primary"`, matching lower CTA pair
6. **Scroll-margin-top** — Changed from `var(--s-20)` to `6rem`, applied to all `[id]` elements
7. **Home hero Google Play CTA** — Added second download button, renamed "Start Your Journey" to "Download for iOS"

### Store Badges
- Copied official App Store and Google Play badge images to `public/images/badge-appstore.png` and `badge-googleplay.png`
- Created `StoreBadges` reusable component at `src/components/ui/store-badges.tsx`
- Replaced ALL text download buttons site-wide with official badge images:
  - Home hero, home daily rhythm, home final CTA
  - Solutions hero (via PageHero `storeBadges` prop), solutions mid-page, solutions bottom CTA
  - `cta-section.tsx`, `hero.tsx` (old components)
- "Explore the App" button restyled as same-height rounded rectangle inline with badges

### SEO & AI Search Fixes (9 items)
1. **Canonical URLs** — Removed root-level `alternates.canonical` from `layout.tsx`. Added per-page `alternates: { canonical: "/path" }` to all 12 pages + blog `generateMetadata`
2. **Noindex dev** — Robots meta gated on `NEXT_PUBLIC_SITE_ENV === "production"`. Dev builds get `noindex, nofollow`. Added env var to `deploy-prod.yml`
3. **BlogPosting JSON-LD** — Changed `@type` from `Article` to `BlogPosting`, added `mainEntityOfPage`, `image`, publisher `logo`
4. **`/llms.txt`** — Created at `public/llms.txt` with structured site index for AI crawlers
5. **FAQ schema** — Added `FAQPage` JSON-LD to `/solutions` with 5 Q&As
6. **Organization schema** — Added `@type: ["Organization", "NGO"]`, `@id` refs, `logo` as ImageObject
7. **SoftwareApplication schema** — Added `downloadUrl` (both stores), `screenshot`, `author` @id ref
8. **WebSite schema** — Publisher uses `@id` reference instead of inline
9. **favicon.ico + manifest.webmanifest** — Added static files. Removed deprecated `meta keywords`

### Other
- ESLint config created (`eslint.config.mjs`) with `eslint-config-next`
- Header lint fix — `setIsMobileMenuOpen` in useEffect suppressed
- Team page `We're` → `We&apos;re`
- Playwright test expectations updated for new page titles and BlogPosting type
- `firebase.json` created for Firestore rules deployment
- Sticky nav changed from `bg-transparent` to `bg-slate-950/80 backdrop-blur-sm` when not scrolled

## Uncommitted Changes
All changes above are uncommitted on `hero_improvements`. Need to commit and optionally merge to `dev`/`main`.

## Pending Tasks

### Immediate
1. **Commit all changes** — Large set of uncommitted fixes
2. **Fix GitHub Actions secrets** — `CLOUDFLARE_ACCOUNT_ID` needs updating to `215fee009e8e5c687dbdc8a74ecac543`, `CLOUDFLARE_API_TOKEN` needs token from aisaiah.platform@gmail.com
3. **Add Firebase dev secrets to GitHub** — `NEXT_PUBLIC_FIREBASE_*_DEV` secrets for CI builds
4. **Populate `sameAs`** — Add social profile URLs to `src/content/site.ts` when available

### Short-term
5. **Higher-res app screenshots** — Current ones work but could be cleaner
6. **Real testimonials** — Replace placeholder quote
7. **CFC-USA partnership page** — Needs terminology + dark theme pass
8. **Blog post dark theme audit** — Content rendering in `/blog/[slug]`

### Medium-term
9. **CMS integration** — Content layer is structured and ready
10. **Analytics** — Track conversion funnel
11. **Production deploy** — Merge to `main` and deploy to aisaiah.org

## Key Files (updated)
- `src/components/ui/button.tsx` — Fixed class override bug, spiritual variants
- `src/components/ui/store-badges.tsx` — Reusable App Store + Google Play badges
- `src/components/sections/page-hero.tsx` — `storeBadges` prop support
- `src/lib/structured-data.ts` — All JSON-LD schemas (Organization, WebSite, SoftwareApplication, BlogPosting, FAQ, etc.)
- `src/app/layout.tsx` — Root metadata (no keywords, manifest, noindex gate)
- `firestore.rules` — Firestore security rules for contactSubmissions
- `firebase.json` — Firebase project config
- `public/llms.txt` — AI search index
- `public/manifest.webmanifest` — Web app manifest
