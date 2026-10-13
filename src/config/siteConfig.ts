import { SiteConfig } from '../types/index.ts';

/**
 * GLOBAL SITE CONFIGURATION
 * 
 * Central configuration file for business information, domains, support contacts,
 * and global operational paths.
 * 
 * NOTE FOR PRODUCTION DEPLOYMENT:
 * 1. Replace "YOUR_VERIFIED_SUPPORT_EMAIL" with your official support inbox.
 * 2. Replace "YOUR_FINAL_DOMAIN" with your connected domain (e.g., https://extensions.deepaksheoran.com).
 */
export const siteConfig: SiteConfig = {
  siteName: 'Deepak Sheoran Software & Extensions',
  brandTagline: 'Practical Browser Tools & Extensions',
  businessOwner: 'Deepak Sheoran',
  // Central support inbox. Used throughout the site in mailto links, policies, and help guides.
  supportEmail: 'YOUR_VERIFIED_SUPPORT_EMAIL',
  // Production domain for canonical URLs, sitemaps, and Dodo Payments redirect configuration.
  productionBaseUrl: 'YOUR_FINAL_DOMAIN',
  defaultMetaTitle: 'Deepak Sheoran Software & Extensions – Practical Browser Tools',
  defaultMetaDescription: 'Discover fast, privacy-conscious Chrome extensions and software tools designed to simplify everyday digital tasks. Home of Flow Automator.',
  socialLinks: {
    github: 'https://github.com',
    twitter: 'https://x.com',
    chromeWebStore: 'https://chromewebstore.google.com',
  },
  routes: {
    home: '/',
    extensions: '/extensions',
    about: '/about',
    contact: '/contact',
    help: '/help',
    privacy: '/privacy',
    terms: '/terms',
    refund: '/refund',
    thankYou: '/thank-you',
  },
};

/**
 * Dodo Payments License Key Validator
 * 
 * Real Dodo Payments license keys follow structured formats:
 * Typically alphanumeric strings with hyphens (e.g., DODO-XXXX-XXXX-XXXX or 24-64 character hexadecimal/alphanumeric tokens).
 * 
 * This validator strictly prevents injection, script tags, empty tokens, and malformed strings.
 */
export function validateDodoLicenseKey(keyCandidate: string): boolean {
  if (!keyCandidate || typeof keyCandidate !== 'string') return false;
  const trimmed = keyCandidate.trim();

  // Basic sanity limits: keys are between 8 and 128 characters
  if (trimmed.length < 8 || trimmed.length > 128) return false;

  // Real Dodo keys contain only alphanumeric characters, dashes, and underscores
  // Prohibit spaces, HTML angle brackets, quotes, slashes, or script characters
  const dodoKeyRegex = /^[A-Za-z0-9_-]{8,128}$/;
  return dodoKeyRegex.test(trimmed);
}

/**
 * Parses and validates up to 5 comma-separated license keys safely.
 */
export function parseAndValidateLicenseKeys(rawParam: string | null): string[] {
  if (!rawParam) return [];
  
  // Split on commas or spaces, take at most 5 keys
  const candidates = rawParam
    .split(/[,+]/)
    .map((k) => k.trim())
    .filter((k) => k.length > 0)
    .slice(0, 5);

  const validKeys: string[] = [];
  for (const candidate of candidates) {
    if (validateDodoLicenseKey(candidate)) {
      validKeys.push(candidate);
    }
  }

  return validKeys;
}
