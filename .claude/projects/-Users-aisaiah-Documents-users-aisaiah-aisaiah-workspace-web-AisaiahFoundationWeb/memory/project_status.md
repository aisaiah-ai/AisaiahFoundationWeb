---
name: Project status — AIsaiah Foundation Web
description: Current state of the website redesign as of April 2026, branch status, and pending tasks
type: project
---

## Current Branch
`hero_improvements` (branched from `dev` at `eaf27f2`)

## What's Been Done

### Design System
- Added purple palette (Pray pillar), expanded gold (Serve pillar), kept teal (Reflect)
- Full dark spiritual theme — `--gradient-spiritual` background across entire site
- Updated Button variants: primary=purple, accent=purple gradient, outline=glass
- All components (Card, Badge, Input, Section) updated for dark theme

### Homepage (10 sections, fully redesigned)
- Hero: "Strengthen Your Faith. Live It Daily." with tri-color gradient headline
- 3 overlapping phone cards (Prayer, Reflect, Serve real screenshots)
- Pillar-colored value cards (purple/teal/gold)
- Daily Rhythm section uses app-rhythm.png
- All sections dark-themed with atmospheric glows

### Inner Pages (all dark-themed)
- About: narrative "Problem → Vision" storytelling
- Solutions: clean screenshots, proper download buttons
- Partnerships, Board, Team, Events, Blog, Contact: all updated

### Architecture
- `content/homepage.ts` — typed content layer (CMS-ready)
- `components/sections/home/` — 10 modular sections + AppPreviewCard + SectionHeading
- PageHero: centered single-column when no aside (no parking lots)

## Pending Tasks

### Immediate
1. **Firebase .env.local** — User needs to register web app in "AIsaiah App - Development" (aisaiah-app-dev) Firebase project, then paste config values to fill in `.env.local`
2. **Merge hero_improvements → dev** — When user is satisfied with changes
3. **Blog post pages** — Individual blog post pages (`/blog/[slug]`) may need dark theme audit on the content rendering

### Short-term
4. **Clean app screenshots** — Current hero uses real screenshots but they could be higher res / cleaner
5. **Real testimonials** — Replace placeholder quote with real user testimonials
6. **CFC-USA partnership page** — Still has some old terminology, needs dark theme pass

### Medium-term
7. **CMS integration** — Content layer is structured and ready
8. **App Store badges** — Replace text download buttons with official badges
9. **Analytics** — Track conversion funnel

## Firebase Projects
- **Dev:** AIsaiah App - Development (`aisaiah-app-dev`)
- **Prod:** AIsaiah App - Production (`aisaiah-app`)

## Key Files
- `src/content/homepage.ts` — all homepage copy
- `src/styles/tokens.css` — design tokens including pillar colors
- `tailwind.config.ts` — purple/gold palettes
- `src/components/sections/home/` — homepage sections
- `src/components/sections/page-hero.tsx` — shared inner page hero
- `src/components/ui/button.tsx` — Button with spiritual variants
