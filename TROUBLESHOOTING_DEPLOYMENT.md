# Troubleshooting Deployment Issues

## Problem: Deployed Site Shows Old Content

If your site is deployed but you're still seeing old content, try these solutions:

### 1. Browser Cache (Most Common)

**Quick Fix:**
- **Windows/Linux**: Press `Ctrl + Shift + R` or `Ctrl + F5`
- **Mac**: Press `Cmd + Shift + R`
- This forces a hard refresh, bypassing browser cache

**Full Cache Clear:**
1. Open browser DevTools (F12)
2. Right-click the refresh button
3. Select "Empty Cache and Hard Reload"

### 2. Cloudflare Cache

Cloudflare may cache your site for a few minutes. Wait 1-2 minutes after deployment, then try again.

**To Purge Cloudflare Cache:**
1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com)
2. Navigate to **Caching** → **Configuration**
3. Click **Purge Everything** (or use **Custom Purge** for specific URLs)

**Or via Wrangler CLI:**
```bash
wrangler pages deployment purge-cache aisaiah-foundation-web
```

### 3. Verify Deployment Actually Succeeded

1. **Check GitHub Actions:**
   - Go to your repository → **Actions** tab
   - Check the latest workflow run
   - Verify it completed successfully (green checkmark)

2. **Check Cloudflare Dashboard:**
   - Go to Pages → `aisaiah-foundation-web` → **Deployments** tab
   - Verify the latest deployment shows:
     - ✅ Green checkmark (success)
     - Recent timestamp
     - Correct commit message

3. **Check Deployment URL:**
   - Visit the deployment URL directly: `https://4c5ed0d4.aisaiah-foundation-web.pages.dev`
   - (Replace with your actual deployment ID from the dashboard)
   - This bypasses the custom domain cache

### 4. Verify Build Output

The build should create files in `dist/public/`. Check:
- `dist/public/index.html` exists
- `dist/public/_redirects` exists
- `dist/public/_headers` exists (newly added for cache control)
- `dist/public/assets/` contains JS/CSS files

### 5. Check for Deployment Errors

**In GitHub Actions logs, look for:**
- ❌ Any error messages
- ⚠️ Warnings about missing files
- Build failures

**Common errors:**
- `Build output directory not found!` → Build failed
- `Deployment failed with exit code X` → Deployment issue
- Missing secrets → `CLOUDFLARE_API_TOKEN` or `CLOUDFLARE_ACCOUNT_ID` not set

### 6. Force a New Deployment

**Option 1: Manual Trigger**
1. Go to repository → **Actions** tab
2. Select "Deploy to Cloudflare Pages" workflow
3. Click **Run workflow** → **Run workflow** (manual trigger)

**Option 2: Empty Commit**
```bash
git commit --allow-empty -m "Force deployment"
git push origin main
```

### 7. Check Custom Domain Configuration

If using `aisaiah.org`, verify:
1. DNS is properly configured
2. Custom domain is added in Cloudflare Pages settings
3. SSL certificate is active

### 8. Verify Files Are Actually Updated

**Check the deployment:**
1. Go to Cloudflare Dashboard → Pages → Deployments
2. Click "View details" on the latest deployment
3. Check the file list - are your new files there?

**Check file timestamps:**
- In the deployment details, verify files have recent timestamps
- Old timestamps = old files deployed

## Prevention

### Cache Headers

The `_headers` file has been added to control caching:
- HTML files: No cache (always fresh)
- Assets (JS/CSS): Long cache with immutable flag
- Images: Long cache

This ensures HTML is always fresh while assets are cached efficiently.

### Deployment Verification

The workflow now includes:
- ✅ Build output verification
- ✅ File existence checks
- ✅ Deployment URL extraction
- ✅ Better error messages

## Still Not Working?

1. **Check Cloudflare Status**: https://www.cloudflarestatus.com/
2. **Check GitHub Actions Status**: https://www.githubstatus.com/
3. **Review deployment logs** in both GitHub Actions and Cloudflare Dashboard
4. **Try deploying to a preview URL** to test without affecting production

## Quick Checklist

- [ ] Hard refreshed browser (Ctrl+Shift+R / Cmd+Shift+R)
- [ ] Waited 1-2 minutes after deployment
- [ ] Checked GitHub Actions - deployment succeeded
- [ ] Checked Cloudflare Dashboard - deployment shows success
- [ ] Verified deployment URL directly (not custom domain)
- [ ] Cleared browser cache completely
- [ ] Tried incognito/private browsing mode
- [ ] Checked deployment details for correct files

