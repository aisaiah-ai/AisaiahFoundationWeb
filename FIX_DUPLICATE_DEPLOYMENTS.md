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
**Disable Cloudflare Pages Git Integration (if enabled):**

1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com) → Pages → `aisaiah-foundation-web`
2. Check the **Deployments** tab to see if deployments are coming from "Git" source
3. If Git integration is enabled, you'll need to:
   - Go to **Settings** → Look for Git/repository connection options
   - Or contact Cloudflare support to disconnect the Git repository
   - Alternatively, delete and recreate the project using only the API (via GitHub Actions)
4. Keep only the GitHub Actions workflow for deployments

**Note:** If your project was created via `wrangler pages project create` (as your GitHub Actions does), Git integration is likely NOT enabled, and you're already using GitHub Actions only.

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

1. **Check for Duplicate Deployments (Best Method):**
   - Go to Cloudflare Dashboard → Pages → `aisaiah-foundation-web` → **Deployments** tab
   - Look at recent deployments for the same commit
   - **If you see TWO deployments for the same commit message** → You have duplicate deployments (Git + GitHub Actions)
   - **If you see ONE deployment per commit** → You're good! Only one deployment method is active
   - Note: GitHub Actions deployments show branch/commit info (making them look like Git deployments), so the UI may not clearly distinguish. The key is checking for duplicates.

2. **Check GitHub Actions:**
   - Go to your repository → Actions tab
   - See if the workflow is running on pushes
   - Check if deployments are happening from GitHub Actions

3. **Check Deployment Details (Alternative):**
   - Click "View details" on a recent deployment in the Deployments tab
   - Look for deployment source information in the details
   - Note: GitHub Actions deployments via `wrangler` will show branch/commit info, making them look similar to Git deployments in the UI
   - The key indicator is: **Do you see TWO deployments for the same commit?** If yes, you have duplicates.

4. **Check Settings (Alternative):**
   - Go to Pages → `aisaiah-foundation-web` → Settings → General
   - Look for any Git-related settings or connected repository info
   - Note: The "Production branch: main" setting is just a default and doesn't mean Git integration is enabled

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


