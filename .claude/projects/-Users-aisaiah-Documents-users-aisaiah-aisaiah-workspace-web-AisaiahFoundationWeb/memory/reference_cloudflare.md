---
name: Cloudflare account and project mapping
description: Cloudflare account ID, Pages project names, and deploy commands for dev/prod
type: reference
---

## Cloudflare Account
- **Email:** aisaiah.platform@gmail.com
- **Account ID:** `215fee009e8e5c687dbdc8a74ecac543`

## Pages Projects
| Project | Pages Domain | Branch |
|---------|-------------|--------|
| `aisaiah-foundation-dev` | aisaiah-foundation-dev.pages.dev | dev |
| `aisaiah-foundation-web` | (TBD — needs prod deploy) | main |

## Deploy Command (local)
```bash
CLOUDFLARE_ACCOUNT_ID=215fee009e8e5c687dbdc8a74ecac543 wrangler pages deploy out --project-name=aisaiah-foundation-dev --branch=dev --commit-dirty=true
```

## Firebase (separate login)
- **Email:** hope.dajao@aisaiah.org
- **Dev project:** aisaiah-app-dev
- **Prod project:** aisaiah-app

## GitHub Actions Secrets Needed
- `CLOUDFLARE_ACCOUNT_ID` → `215fee009e8e5c687dbdc8a74ecac543`
- `CLOUDFLARE_API_TOKEN` → needs token from aisaiah.platform@gmail.com account
