# Bootstrap & Operations Runbook

Single page. Every recurring "how do I set up X again" question is answered here.

## TL;DR — first-time setup

```bash
# 1. Install gh CLI and authenticate
brew install gh && gh auth login

# 2. Fill three local env files (gitignored — never committed)
cp .env.example .env.development      # then paste Firebase dev SDK config
cp .env.example .env.production       # then paste Firebase prod SDK config
cat > .env.cloudflare <<EOF
CLOUDFLARE_API_TOKEN=...
CLOUDFLARE_ACCOUNT_ID=...
CLOUDFLARE_ZONE_ID=...
EOF

# 3. Push everything to GitHub secrets in one shot
./scripts/bootstrap-secrets.sh all

# 4. Verify
./scripts/doctor.sh
```

If `doctor.sh` is green, push to `dev` (or `main`) and the deploy will succeed.

---

## How the automation prevents the problem you keep hitting

| Layer | What it checks | When it runs |
|---|---|---|
| `scripts/doctor.sh` | All required secrets exist on the GitHub repo, terraform valid, local env complete | Before you push, run manually |
| `scripts/ci-audit.sh` | All env vars piped into the deploy job are non-empty | First step of every deploy workflow — fails in <1s if a secret is missing |
| `src/lib/env.ts` (`assertBuildEnv`) | Production builds abort with a loud error if `NEXT_PUBLIC_FIREBASE_*` are empty | Inside `next.config.ts` — every `npm run build` in production mode |

If any of these fire, **the deploy is blocked** before broken code reaches the live site.

---

## Where each value comes from

### Firebase (6 vars per environment)
1. https://console.firebase.google.com → pick the project (`aisaiah-app-dev` or your prod project)
2. Project settings (gear icon) → **Your apps** → click the web app
3. Under "Firebase SDK snippet", select **Config**
4. Copy the 6 fields into `.env.development` or `.env.production`

### Cloudflare API Token
1. https://dash.cloudflare.com/profile/api-tokens → **Create Token** → "Custom token"
2. Permissions:
   - `Account` → `Cloudflare Pages` → **Edit**
   - `User` → `User Details` → **Read**
   - `Zone` → `DNS` → **Edit** *(only if you want terraform to manage DNS)*
3. Account Resources: `Include → All accounts`
4. Zone Resources: `Include → Specific zone → aisaiah.org` *(if DNS perm is included)*
5. **TTL: leave blank** — no expiration. This is the most common cause of "the token broke again."
6. Paste the value into `.env.cloudflare` as `CLOUDFLARE_API_TOKEN=...`

### Cloudflare Account ID + Zone ID
- Cloudflare dashboard → click any zone → **right sidebar** under "API"
- `CLOUDFLARE_ACCOUNT_ID` and `CLOUDFLARE_ZONE_ID` are both there with copy buttons

---

## Common operations

### "I rotated the Cloudflare token"
```bash
# Edit .env.cloudflare with the new value, then:
./scripts/bootstrap-secrets.sh cloudflare
```

### "I need to add a new Firebase value to dev"
```bash
# Edit .env.development, then:
./scripts/bootstrap-secrets.sh dev
```

### "I'm onboarding a new contributor"
```bash
# They run:
cp .env.example .env.local
# Then paste Firebase dev values from the team password manager.
# They never need to touch GitHub secrets — that's CI's job.
```

### "Did the prod deploy actually succeed?"
```bash
gh run list --branch main --limit 3
# If the latest "Deploy to Production" is green:
curl -sI https://aisaiah.org | head -3
```

### "I think a secret is wrong but I'm not sure which"
```bash
./scripts/doctor.sh           # local audit
gh secret list                # raw list of names (values are encrypted)
```

---

## Why deploys keep "needing a new token"

Three causes, in order of frequency:

1. **TTL was set on the Cloudflare token.** Recreate with TTL blank.
2. **Token has wrong permissions.** Use the exact list above.
3. **GitHub secret was overwritten with a typo / blank.** `gh secret list` shows the secret exists but doesn't show the value — `ci-audit.sh` will catch the empty case.

The new audit gates make this category of error *visible at deploy time* instead of *visible to a user trying to submit a contact form*.

---

## What lives where

| File | Purpose | Committed? |
|---|---|---|
| `.env.example` | Template — what vars exist | ✅ yes |
| `.env.local` | Local dev secrets | ❌ gitignored |
| `.env.development` | Dev environment values, used by `bootstrap-secrets.sh dev` | ❌ gitignored |
| `.env.production` | Prod environment values, used by `bootstrap-secrets.sh prod` | ❌ gitignored |
| `.env.cloudflare` | Cloudflare deploy creds, used by `bootstrap-secrets.sh cloudflare` | ❌ gitignored |
| `scripts/bootstrap-secrets.sh` | Push local `.env.*` files to GitHub secrets | ✅ yes |
| `scripts/doctor.sh` | Pre-flight audit before pushing | ✅ yes |
| `scripts/ci-audit.sh` | Fast in-CI gate that runs *before* the build | ✅ yes |
| `src/lib/env.ts` | Last-ditch build-time guard inside `next.config.ts` | ✅ yes |

---

## Adding a new secret in the future

1. Add `MY_NEW_SECRET` line to `.env.example`
2. Add it to the appropriate `.env.<env>` file locally
3. Update `REQUIRED_FIREBASE` (or add a new array) in:
   - `scripts/bootstrap-secrets.sh`
   - `scripts/doctor.sh`
   - `scripts/ci-audit.sh` (workflow files reference it)
4. Add it to `deploy-dev.yml` and `deploy-prod.yml` env blocks
5. Run `./scripts/bootstrap-secrets.sh all && ./scripts/doctor.sh`

That's it. No more manual secret pasting in the GitHub UI.
