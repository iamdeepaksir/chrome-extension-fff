# Deepak Sheoran Software & Extensions — Central Website

> Production-ready, data-driven central website and software catalog built for **Deepak Sheoran** to showcase, distribute, and manage 40–50+ Chrome extensions and software tools from a single codebase.

---

## 1. Architecture Overview

```
Google AI Studio  ──▶  GitHub Repository  ──▶  Cloudflare Pages (Git Integration)  ──▶  Live Website
```

- **Frontend Framework:** React 19, TypeScript, Vite 8, Tailwind CSS v4.
- **Hosting Target:** Cloudflare Pages (Static Site Architecture).
- **Build Output Directory:** `dist`
- **Build Command:** `npm run build`
- **Routing:** High-performance, clean client-side routing with Cloudflare Pages `_redirects` fallback.
- **Payment & Licensing:** Dodo Payments hosted checkout redirect integration with secure client-side license rendering.

---

## 2. Quick Setup & Local Development

### Prerequisites
- Node.js 20+ installed
- npm or bun

### Commands
```bash
# Install dependencies
npm install

# Start local development server (runs on port 3000)
npm run dev

# Run TypeScript linting / typecheck
npm run lint

# Create production build (outputs to /dist)
npm run build

# Preview production build locally
npm run preview
```

---

## 3. Configuration & Customization

All business identities, contact inboxes, domains, and extension items are managed centrally—**you never need to search and replace text across component files**.

### A. Global Settings (`src/config/siteConfig.ts`)
Before pointing your domain to production:
1. **Support Email:** Change `'YOUR_VERIFIED_SUPPORT_EMAIL'` to your actual support email address (e.g. `support@deepaksheoran.com`).
2. **Production Domain:** Change `'YOUR_FINAL_DOMAIN'` to your actual custom domain (e.g. `https://tools.deepaksheoran.com`).
3. **Canonical URLs & Sitemaps:** Update `public/robots.txt` and `public/sitemap.xml` with your final domain.

### B. Adding a New Extension (`src/data/extensions.ts`)
To add an extension in the future (scaling to 40–50 extensions):
Simply open `src/data/extensions.ts` and append a new record to the `extensions` array:

```typescript
{
  id: 'my-new-tool',
  slug: 'my-new-tool',
  name: 'My New Tool',
  tagline: 'Fast browser productivity utility',
  category: 'Developer Tools',
  shortDescription: '...',
  description: '...',
  features: ['Feature 1', 'Feature 2'],
  icon: 'my-new-tool',
  status: 'published', // or 'coming_soon'
  version: '1.0.0',
  platforms: ['Google Chrome', 'Brave', 'Microsoft Edge'],
  officialDownloadUrl: 'https://chromewebstore.google.com/detail/...', // null if unreleased
  detailsUrl: '/extensions/my-new-tool',
  supportUrl: '/help',
  pricing: {
    isFree: true,
    hasPaidTiers: true,
    tiers: [ ... ]
  },
  featured: true,
  privacyDisclosure: { ... },
  lastUpdated: '2026-10-12'
}
```
**That is it!** The new extension will automatically appear in:
- The Home page featured section (if `featured: true`)
- The All Extensions catalog (`/extensions`)
- Real-time client-side search index
- Category filters
- Its dedicated detail page (`/extensions/my-new-tool`)
- The shared `/thank-you?product=my-new-tool` activation flow
- Dynamic schema metadata and privacy audit disclosures

---

## 4. Dodo Payments Checkout Redirect Setup

When configuring a product or subscription inside your **Dodo Payments Dashboard**:

1. Set the **Success / Return URL** to:
   ```
   https://<YOUR_FINAL_DOMAIN>/thank-you?product=<extension-slug>&license_key={license_key}
   ```
   *(For Flow Automator: `https://<YOUR_FINAL_DOMAIN>/thank-you?product=flow-automator&license_key={license_key}`)*

### How the Thank-You Route Operates:
- **Normal Visitors (State A):** If visited directly without a valid license key, the page displays a normal confirmation message: *"Your license key has been emailed to you. Please check your Spam or Junk folder."* No empty license boxes, fake keys, or dead copy buttons are shown.
- **Paid Customers (State B):** When redirected with a valid `license_key`, the key is validated against strict Dodo regex formatting, displayed in dedicated secure copy containers, and **immediately removed from the visible browser address bar** via `history.replaceState` to prevent key leakage in browser history or bookmarks.
- **Zero Third-Party Storage:** License keys are rendered purely in component memory and are never saved to `localStorage`, never logged to console, and never transmitted to external analytics.

---

## 5. Deployment Guide (GitHub ➔ Cloudflare Pages)

### Step 1: Push to GitHub
1. Create a new repository on your GitHub account (e.g., `deepak-sheoran-extensions`).
2. Initialize and push your code:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of central extensions platform"
   git branch -M main
   git remote add origin https://github.com/<your-username>/deepak-sheoran-extensions.git
   git push -u origin main
   ```

### Step 2: Connect to Cloudflare Pages
1. Log into your [Cloudflare Dashboard](https://dash.cloudflare.com/) and navigate to **Workers & Pages** ➔ **Create application** ➔ **Pages** ➔ **Connect to Git**.
2. Select your repository: `deepak-sheoran-extensions`.
3. Configure the build settings:
   - **Framework preset:** `Vite`
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Root directory:** *(leave blank / `/`)*
4. Click **Save and Deploy**.

### Step 3: Verify Routing & Headers
Cloudflare Pages automatically deploys the following pre-configured assets from the `public/` directory:
- `_headers`: Strict Content Security Policy (CSP), `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin`, and `X-Robots-Tag: noindex, nofollow` on `/thank-you`.
- `_redirects`: `/* /index.html 200` ensures refreshing `/privacy`, `/terms`, `/extensions/flow-automator`, or `/thank-you` works without 404 errors.

---

## 6. Compliance & Legal Review Checklist

The central legal policies (`/privacy`, `/terms`, `/refund`) have been pre-written specifically for Chrome extensions, Manifest V3 security, local storage rules, and Dodo Payments Merchant of Record standards.

Before official launch:
- [ ] Confirm your verified support email in `src/config/siteConfig.ts`.
- [ ] Review `/privacy` with respect to any future extensions requiring cloud endpoints.
- [ ] Confirm your refund review timeline in `/refund` matching your Dodo account terms.
- [ ] Replace `YOUR_FINAL_DOMAIN` in `siteConfig.ts`, `robots.txt`, and `sitemap.xml`.
