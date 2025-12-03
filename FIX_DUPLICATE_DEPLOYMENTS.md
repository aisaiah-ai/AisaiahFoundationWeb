# Fix Duplicate Deployments

## Why You're Seeing 2 Deployments

There are two common causes for duplicate Cloudflare Pages deployments:

### 1. **GitHub Actions + Cloudflare Git Integration**
If you have both:
- GitHub Actions workflow deploying (`.github/workflows/deploy.yml`)
- Cloudflare Pages connected via Git integration (auto-deploy)

Both will deploy on every push, causing duplicates.

### 2. **Multiple Workflow Runs**
If the workflow is triggered multiple times (e.g., multiple commits in quick succession).

## Solutions

### Option 1: Use Only GitHub Actions (Recommended)
**Disable Cloudflare Pages Git Integration:**

1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com) → Pages
2. Select your project: `aisaiah-foundation-web`
3. Go to **Settings** → **Builds & deployments**
4. **Disable** "Git integration" or disconnect the Git repository
5. Keep only the GitHub Actions workflow for deployments

**Benefits:**
- Full control over deployment process
- Better error handling and logging
- Can customize build process

### Option 2: Use Only Cloudflare Git Integration
**Disable GitHub Actions Workflow:**

1. Rename `.github/workflows/deploy.yml` to `.github/workflows/deploy.yml.disabled`
2. Or delete the workflow file
3. Configure Cloudflare Pages Git integration in the dashboard

**Benefits:**
- Simpler setup
- Automatic deployments from Cloudflare
- Less GitHub Actions usage

### Option 3: Keep Both with Concurrency (Current Setup)
I've added concurrency controls to prevent simultaneous runs:

```yaml
concurrency:
  group: cloudflare-pages-deploy
  cancel-in-progress: true
```

This will:
- Cancel any in-progress deployment when a new one starts
- Prevent multiple deployments from running at the same time

**However**, if Cloudflare Pages Git integration is also enabled, you'll still see 2 deployments (one from each source).

## Recommended: Option 1

**Use GitHub Actions only** because:
- ✅ Better error handling
- ✅ More control over the build process
- ✅ Can add custom steps (validation, testing, etc.)
- ✅ Better integration with GitHub

## How to Check

1. **Check Cloudflare Dashboard:**
   - Go to Pages → Your Project → Settings
   - Look for "Git integration" or "Connected repository"
   - If connected, you'll see the repository name

2. **Check GitHub Actions:**
   - Go to your repository → Actions
   - See if multiple workflows are running

3. **Check Deployment Logs:**
   - In Cloudflare Pages, check the deployment source
   - It will show if it came from "Git" or "API" (GitHub Actions)

## Quick Fix

**To stop duplicate deployments right now:**

1. **Disable Cloudflare Git Integration:**
   ```
   Cloudflare Dashboard → Pages → aisaiah-foundation-web → Settings
   → Disconnect Git repository or disable auto-deploy
   ```

2. **Or disable GitHub Actions:**
   ```bash
   # Rename the workflow file
   mv .github/workflows/deploy.yml .github/workflows/deploy.yml.disabled
   git add .github/workflows/deploy.yml.disabled
   git commit -m "Disable GitHub Actions deployment (using Cloudflare Git integration)"
   git push
   ```

## Current Status

✅ Added concurrency controls to prevent simultaneous workflow runs
✅ Backend deploy workflow only runs on backend file changes
✅ Main deploy workflow has concurrency group: `cloudflare-pages-deploy`

**Next step:** Check your Cloudflare Pages settings to see if Git integration is enabled.


