# Setting Up Custom Domain (aisaiah.org)

## Current Situation

The site is currently deployed to:
- **Default subdomain**: `https://aisaiah-foundation-web.pages.dev`
- **Desired domain**: `https://aisaiah.org`

## Steps to Configure Custom Domain

### Prerequisites

1. **Domain must be managed by Cloudflare**
   - The domain `aisaiah.org` must be added to your Cloudflare account
   - DNS must be managed by Cloudflare

2. **Access to Cloudflare Dashboard**
   - You need admin access to the Cloudflare account

### Configuration Steps

#### Option 1: Via Cloudflare Dashboard (Recommended)

1. **Go to Cloudflare Pages Dashboard**
   - Navigate to: https://dash.cloudflare.com → Pages
   - Select your project: `aisaiah-foundation-web`

2. **Add Custom Domain**
   - Click on **"Custom domains"** in the left sidebar
   - Click **"Set up a custom domain"**
   - Enter: `aisaiah.org`
   - Click **"Continue"**

3. **Configure DNS (if not already done)**
   - Cloudflare will automatically create the necessary DNS records
   - If the domain is already in Cloudflare, it will use existing DNS
   - Wait for DNS propagation (usually a few minutes)

4. **SSL Certificate**
   - Cloudflare will automatically provision an SSL certificate
   - This usually takes a few minutes
   - The site will be available at both:
     - `https://aisaiah.org` (custom domain)
     - `https://aisaiah-foundation-web.pages.dev` (still works)

#### Option 2: Via Wrangler CLI

```bash
# Install wrangler if not already installed
npm install -g wrangler@latest

# Login to Cloudflare
wrangler login

# Add custom domain to the Pages project
wrangler pages domain add aisaiah.org --project-name=aisaiah-foundation-web
```

### Verify Domain Setup

1. **Check DNS Records**
   - Go to Cloudflare Dashboard → DNS
   - Verify there's a CNAME record for `aisaiah.org` pointing to the Pages project
   - Or an A/AAAA record if using apex domain

2. **Test the Domain**
   - Visit `https://aisaiah.org` in a browser
   - Should load the same content as `aisaiah-foundation-web.pages.dev`
   - Check SSL certificate is valid (green lock icon)

### Important Notes

- **Both domains will work**: The custom domain doesn't replace the `.pages.dev` subdomain, both will be accessible
- **SSL is automatic**: Cloudflare automatically provisions SSL certificates for custom domains
- **DNS propagation**: Changes can take up to 24 hours, but usually happen within minutes
- **Apex domain**: If you want `aisaiah.org` (without www), Cloudflare Pages supports this via CNAME flattening

### Troubleshooting

**Domain not resolving:**
- Check DNS records in Cloudflare dashboard
- Verify domain is added to the Pages project
- Wait for DNS propagation (can take up to 24 hours)

**SSL certificate issues:**
- Cloudflare automatically provisions SSL, but it can take a few minutes
- Check SSL/TLS settings in Cloudflare dashboard
- Ensure SSL/TLS encryption mode is set to "Full" or "Full (strict)"

**Domain already in use:**
- If the domain is used elsewhere, you may need to remove it from the other service first
- Check if there are conflicting DNS records

## After Setup

Once configured, the site will be accessible at:
- ✅ `https://aisaiah.org` (primary)
- ✅ `https://aisaiah-foundation-web.pages.dev` (still works)

All routes will work on both domains:
- `https://aisaiah.org/data-deletion`
- `https://aisaiah.org/delete-account`
- `https://aisaiah.org/privacy`
- etc.

