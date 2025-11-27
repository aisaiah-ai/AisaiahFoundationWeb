# Deployment Guide

This guide covers deploying the AIsaiah Foundation website to GitHub and Cloudflare.

## Architecture

The application consists of:
- **Frontend**: React app built with Vite (deployed to Cloudflare Pages)
- **Backend**: Express.js API server (needs separate hosting)

## GitHub Deployment

The repository is already connected to GitHub at:
```
https://github.com/aisaiah-ai/AisaiahFoundationWeb.git
```

### Pushing Changes

```bash
git add .
git commit -m "Your commit message"
git push origin main
```

## Cloudflare Deployment

### Option 1: Cloudflare Pages (Frontend) + Separate Backend

This is the recommended approach for full-stack applications.

#### Frontend (Cloudflare Pages)

1. **Automatic Deployment via GitHub Actions**
   - The workflow in `.github/workflows/deploy.yml` automatically deploys to Cloudflare Pages on push to `main`
   - Requires GitHub secrets:
     - `CLOUDFLARE_API_TOKEN`: Your Cloudflare API token
     - `CLOUDFLARE_ACCOUNT_ID`: Your Cloudflare account ID

2. **Manual Setup** (if needed):
   - Go to Cloudflare Dashboard → Pages
   - Create a new project
   - Connect to GitHub repository
   - Build settings:
     - Build command: `npm run build`
     - Output directory: `dist/public`
     - Root directory: `/`
     - Node version: `20`

#### Backend (Recommended: Railway, Render, or Fly.io)

Since Cloudflare Pages only serves static files, deploy the Express backend separately:

**Railway:**
1. Connect your GitHub repository
2. Set environment variables:
   - `NODE_ENV=production`
   - `DATABASE_URL=your_postgres_connection_string`
   - `PORT=5000` (or let Railway assign)
3. Build command: `npm run build`
4. Start command: `npm start`

**Render:**
1. Create a new Web Service
2. Connect GitHub repository
3. Build command: `npm run build`
4. Start command: `npm start`
5. Set environment variables (same as Railway)

**Update Frontend API URLs:**
After deploying the backend, update your frontend to point to the backend URL:
- Create a `.env` file or update API calls to use the backend URL
- Example: `VITE_API_URL=https://your-backend.railway.app`

### Option 2: Cloudflare Pages Functions (API Routes)

For simpler deployments, you can use Cloudflare Pages Functions for API routes:

1. Create `functions/api/[[path]].ts` to handle API routes
2. This requires converting Express routes to Cloudflare Workers format

### Option 3: Cloudflare Workers (Full Stack)

Convert the entire app to Cloudflare Workers (requires significant refactoring).

## Environment Variables

### Frontend (Cloudflare Pages)
- `VITE_API_URL`: Backend API URL (if using separate backend)

### Backend
- `DATABASE_URL`: PostgreSQL connection string (required)
- `NODE_ENV`: Set to `production`
- `PORT`: Server port (default: 5000)

## Setting Up Cloudflare Secrets

### For GitHub Actions:

1. Get your Cloudflare API Token:
   - Go to Cloudflare Dashboard → My Profile → API Tokens
   - Create token with "Cloudflare Pages:Edit" permission

2. Get your Account ID:
   - Found in Cloudflare Dashboard URL or right sidebar

3. Add to GitHub Secrets:
   - Go to repository → Settings → Secrets and variables → Actions
   - Add `CLOUDFLARE_API_TOKEN`
   - Add `CLOUDFLARE_ACCOUNT_ID`

## Monitoring

### Health Checks
- Frontend: `https://your-pages-url.pages.dev/`
- Backend: `https://your-backend-url/api/health`

### Logs
- Cloudflare Pages: Dashboard → Pages → Your Project → Deployments → View Logs
- Backend: Check your hosting provider's logs

## Troubleshooting

### Build Failures
- Check Node version (should be 20)
- Verify all dependencies are in `package.json`
- Check build logs in Cloudflare Pages dashboard

### API Connection Issues
- Verify `VITE_API_URL` is set correctly
- Check CORS settings on backend
- Ensure backend is accessible from frontend domain

### Database Connection
- Verify `DATABASE_URL` is set correctly
- Check database provider (Neon, Supabase, etc.) connection limits
- Ensure database allows connections from your hosting provider

## Current Deployment Status

- ✅ GitHub repository connected
- ✅ Cloudflare Pages workflow configured
- ✅ Build process tested locally
- ⚠️ Backend needs separate hosting (Railway/Render recommended)
- ⚠️ Environment variables need to be configured

