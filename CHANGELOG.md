# Changelog

## v2.0.0 — Full Site Redesign & CI/CD Pipeline (2026-04-14)

### Overview

Complete rewrite of the Aisaiah Foundation website from the legacy Vite + Express + PostgreSQL stack to a modern Next.js App Router architecture with Firebase, plus a fully automated CI/CD pipeline with Terraform and Cloudflare.

---

### 1. Full Platform Rewrite

**From:** Vite + Express + PostgreSQL (Neon/Drizzle)
**To:** Next.js 15 (App Router) + React 19 + TypeScript + Tailwind CSS + Firebase Firestore

- Static export for maximum performance and CDN compatibility
- Component-driven architecture with reusable UI system
- Typed data models for all content
- Firebase Firestore for contact form submissions
- Framer Motion for polished animations

### 2. Strategic Repositioning

Shifted the entire site from CFC-exclusive positioning to a broad, inclusive faith-community platform:

- **Before:** "Digital Infrastructure for Couples for Christ" — every page positioned the foundation as a CFC-only tool
- **After:** "Digital Infrastructure for Faith Communities" — CFC honored as roots/heritage, open invitation to all Christians

Key changes:
- All metadata, OpenGraph, and Twitter cards updated
- Trust highlights: "CFC-aligned" → "Ministry-tested"
- Keywords broadened: "ministry digital platform", "Christian community technology"
- Navigation: "For CFC USA" → "Partnerships"
- Board page: "CFC Connection" → "Community Roots"
- FAQ answers rewritten for inclusive audience

### 3. Internal Design Notes Removed

Discovered and removed multiple instances of developer-facing meta-commentary that was visible in production:

- Hero: "Recommended narrative" block with internal positioning guidance
- Mission Preview: "Lead with CFC alignment before feature detail" callout
- CTA Section: "Turn the site into a presentation-quality partnership asset"
- CFC Preview: "Why The CFC USA Page Should Carry More Weight"
- Board Page: "Public governance content should stay factual" description
- Solutions Page: "The solutions page should prove that Aisaiah is not only mission-driven..."

All replaced with actual public-facing content.

### 4. New Pages

| Page | Route | Purpose |
|------|-------|---------|
| Partnerships | `/partnerships` | Hub for all partnership models (founding, strategic, community) |
| CFC-USA Case Study | `/partnerships/cfc-usa` | Migrated from `/cfc-usa`, reframed as founding partnership |
| Blog | `/blog` | 4 SEO-ready articles with individual pages |
| Blog Posts | `/blog/[slug]` | Dynamic static generation via `generateStaticParams` |
| Team | `/team` | Builders & operators (separate from Board governance) |
| Events | `/events` | Upcoming workshops & community initiatives |
| CFC-USA Redirect | `/cfc-usa` | Client-side redirect to `/partnerships/cfc-usa` |

### 5. New Components

**Section Components:**
- `partnerships-preview.tsx` — Homepage partnership model preview (replaces `cfc-preview.tsx`)
- `blog-preview.tsx` — Homepage featured blog posts

**Page Components:**
- `blog/blog-card.tsx` — Blog post card for list views
- `blog/blog-content.tsx` — Blog post body renderer with inline markdown
- `team/team-card.tsx` — Team member profile card
- `partnerships/partnership-tier.tsx` — Partnership tier card with benefits

**UI Components:**
- `ui/badge.tsx` — Tag/badge component (4 variants)

### 6. Content System

New typed content files:
- `content/blog-posts.ts` — 4 initial blog posts (origin story, thought leadership, privacy, strategy)
- `content/partnerships.ts` — 3 partnership tiers with benefits
- `content/team-members.ts` — Team data (separate from board)
- `content/events.ts` — 3 upcoming events

New types added to `types/index.ts`:
- `TeamMember`, `BlogPost`, `Partnership`, `Event`
- `BoardMember.cfcConnection` renamed to `communityRoots`

### 7. SEO Enhancements

- `getArticleSchema()` added for blog post structured data
- Sitemap expanded: 17+ routes including all blog posts
- All page metadata broadened for faith-community audience
- OpenGraph image updated: "Digital infrastructure for faith communities"
- Breadcrumb schemas on all new pages

### 8. CI/CD Pipeline with Terraform

**Terraform Infrastructure** (`terraform/`):
- Cloudflare Pages module (reusable for dev + prod)
- DNS record management
- Environment-specific Firebase config as outputs
- Local state backend (ready for Terraform Cloud migration)

**GitHub Actions Workflows:**
| Workflow | Trigger | Pipeline |
|----------|---------|----------|
| `ci.yml` | PRs + pushes | Lint → Type check → Build → Playwright E2E |
| `deploy-dev.yml` | Push to `dev` | Full CI → Deploy to Cloudflare (dev) |
| `deploy-prod.yml` | Push to `main` | Full CI → Deploy to Cloudflare (prod) |
| `terraform.yml` | Changes to `terraform/` | Validate → Plan → Apply |

**Two Environments:**
- **Development:** `aisaiah-foundation-dev` → `dev.aisaiah.org`
- **Production:** `aisaiah-foundation-web` → `aisaiah.org`

**Automated Testing:**
- 38 Playwright E2E tests covering page rendering, navigation, SEO, content, and responsive design
- Tests run against static export via `serve`
- Blocks deployment on test failure

### 9. Cleanup

- Removed old `client/` directory (Vite SPA)
- Removed old `server/` directory (Express backend)
- Removed old `shared/` directory (Drizzle schemas)
- Removed legacy config files: `vite.config.ts`, `drizzle.config.ts`, `wrangler.toml`, `cloudflare-pages.json`, `components.json`
- Removed old GitHub Actions workflows: `deploy.yml`, `backend-deploy.yml`, `create-cloudflare-project.yml`
- Removed unused `cfc-preview.tsx` component
- Added `.env.example` documenting all required environment variables

---

### GitHub Secrets Required

```
CLOUDFLARE_API_TOKEN
CLOUDFLARE_ACCOUNT_ID
CLOUDFLARE_ZONE_ID
NEXT_PUBLIC_FIREBASE_API_KEY_DEV
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN_DEV
NEXT_PUBLIC_FIREBASE_PROJECT_ID_DEV
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET_DEV
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID_DEV
NEXT_PUBLIC_FIREBASE_APP_ID_DEV
NEXT_PUBLIC_FIREBASE_API_KEY_PROD
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN_PROD
NEXT_PUBLIC_FIREBASE_PROJECT_ID_PROD
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET_PROD
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID_PROD
NEXT_PUBLIC_FIREBASE_APP_ID_PROD
```

### Build Stats

- **25 static routes** generated
- **38 E2E tests** passing
- **0 build errors**
- **~40 source files** (components, pages, content, services, types)
