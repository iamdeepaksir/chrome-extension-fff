# Cloudflare Deployment & Rebuild Guide

This guide explains how to deploy the **Deepak Sheoran Software & Extensions** website to Cloudflare Pages and how to rebuild the site after making future changes.

---

## 1. Quick Rebuild & Packaging

Whenever you add new extensions to `src/data/extensions.ts` or make edits to any page:

```bash
# 1. Rebuild the production assets and recreate the deployment ZIP
npm run package
```

This single command:
1. Runs `npm run build` (Vite production compiler).
2. Verifies that all required Cloudflare Pages routing and security files (`_headers`, `_redirects`, `robots.txt`, `sitemap.xml`, and `index.html`) exist in the `dist/` directory.
3. Automatically generates an updated, self-contained deployment ZIP file at:
   ```
   /cloudflare-deployment.zip
   ```

---

## 2. Deployment Methods on Cloudflare Pages

### Method A: Direct Static Upload (No Git required)

Cloudflare Pages allows direct manual uploads of production builds:

1. Log into your [Cloudflare Dashboard](https://dash.cloudflare.com/).
2. In the left navigation, click **Workers & Pages**.
3. Click **Create application** ➔ select the **Pages** tab.
4. Choose **Upload assets** (Direct Upload).
5. Name your project (e.g., `deepak-sheoran-extensions`).
6. Upload the deployment ZIP:
   - Drag and drop `cloudflare-deployment.zip` (or upload the entire `dist` folder).
   - *Note:* The ZIP has `index.html` directly at its root, matching Cloudflare's exact upload specification.
7. Click **Deploy site**.
8. Your site will immediately be live on a `*.pages.dev` subdomain.

---

### Method B: Git Integration (Continuous Deployment from GitHub)

If you connect your GitHub repository, Cloudflare Pages will automatically rebuild and deploy on every `git push`:

1. **Push your code to GitHub:**
   ```bash
   git init -b main
   git add .
   git commit -m "Production release for Cloudflare Pages"
   git remote add origin https://github.com/<your-username>/<your-repo-name>.git
   git push -u origin main
   ```
2. **Connect in Cloudflare Dashboard:**
   - Go to **Workers & Pages** ➔ **Create application** ➔ **Pages** ➔ **Connect to Git**.
   - Select your repository.
   - Set the build settings:
     - **Framework preset:** `Vite`
     - **Build command:** `npm run build`
     - **Build output directory:** `dist`
     - **Node.js Version:** `20` or higher
3. Click **Save and Deploy**.

---

## 3. Custom Domain & DNS Setup

To link your final custom domain (e.g. `https://extensions.deepaksheoran.com`):

1. Inside your Cloudflare Pages project, go to **Custom domains** ➔ **Set up a custom domain**.
2. Enter your domain name and follow the automated DNS CNAME record verification.
3. Update `src/config/siteConfig.ts` with your confirmed domain and verified support email:
   ```typescript
   export const siteConfig = {
     supportEmail: 'your-email@example.com',
     productionBaseUrl: 'https://your-domain.com',
     // ...
   };
   ```
4. Run `npm run package` to rebuild with the new domain in canonical URLs and sitemaps.

---

## 4. Verification Checklist

Before publishing:
- [x] Production build generated in `dist/` with HTML, CSS, and JS chunks.
- [x] Security headers configured in `_headers` (CSP, nosniff, strict referrer policy, noindex on `/thank-you`).
- [x] SPA client-side deep routing configured in `_redirects` (`/* /index.html 200`).
- [x] Deployment ZIP prepared at `/cloudflare-deployment.zip` with `index.html` at root.
- [x] Standalone source code kept intact for future updates.
