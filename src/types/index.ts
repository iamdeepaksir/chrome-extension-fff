/**
 * Central TypeScript types for Deepak Sheoran Software & Extensions
 */

export type ExtensionStatus = 'published' | 'coming_soon' | 'beta' | 'under_review';

export interface PricingTier {
  id: string;
  name: string;
  price: string;
  period?: 'monthly' | 'yearly' | 'lifetime' | 'one-time';
  description: string;
  checkoutUrl?: string; // Verified Dodo Payments checkout URL (null if not yet active)
  features: string[];
  popular?: boolean;
}

export interface PricingConfig {
  isFree: boolean;
  hasPaidTiers: boolean;
  freeTierDescription?: string;
  tiers?: PricingTier[];
}

export interface PrivacyDisclosure {
  dataCollected: string[];
  localStorageUsage: string;
  permissionsRequired: string[];
  externalServices: string[];
  chromeWebStoreLimitedUseCompliance: boolean;
  verificationNotes?: string;
}

export interface ExtensionFAQ {
  question: string;
  answer: string;
}

export interface ExtensionItem {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  category: string;
  shortDescription: string;
  description: string;
  features: string[];
  icon: string; // Identifier or SVG icon name
  status: ExtensionStatus;
  version?: string;
  platforms: string[]; // e.g. ['Chrome', 'Brave', 'Edge']
  officialDownloadUrl?: string | null; // Chrome Web Store official URL (null if unreleased)
  detailsUrl?: string;
  supportUrl?: string;
  pricing: PricingConfig;
  featured: boolean;
  privacyDisclosure: PrivacyDisclosure;
  activationInstructions?: string[];
  faqs?: ExtensionFAQ[];
  lastUpdated: string;
  keywords?: string[];
}

export interface SiteConfig {
  siteName: string;
  brandTagline: string;
  businessOwner: string;
  supportEmail: string;
  productionBaseUrl: string;
  defaultMetaTitle: string;
  defaultMetaDescription: string;
  socialLinks: {
    github?: string;
    twitter?: string;
    chromeWebStore?: string;
  };
  routes: {
    home: string;
    extensions: string;
    about: string;
    contact: string;
    help: string;
    privacy: string;
    terms: string;
    refund: string;
    thankYou: string;
  };
}

export interface FilterState {
  searchQuery: string;
  category: string;
  pricingFilter: 'all' | 'free' | 'paid';
  statusFilter: 'all' | 'published' | 'coming_soon';
  sortBy: 'featured' | 'name' | 'newest';
}
