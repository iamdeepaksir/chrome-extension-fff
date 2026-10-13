import { ExtensionItem } from '../types/index.ts';

/**
 * CENTRAL EXTENSION CATALOG (Single Source of Truth)
 * 
 * To add a new extension in the future:
 * 1. Add a new object entry to this `extensions` array.
 * 2. It will automatically populate the directory, search index, category filters,
 *    detail pages, dynamic sitemaps, and thank-you routing.
 * 
 * Scalable for 1 to 50+ extensions.
 */
export const extensions: ExtensionItem[] = [
  {
    id: 'flow-automator',
    slug: 'flow-automator',
    name: 'Flow Automator',
    tagline: 'Browser Workflow & Task Automation for Power Users',
    category: 'Productivity & Automation',
    shortDescription:
      'Automate repetitive browser steps, web form inputs, routine tab workflows, and page extractions directly on your local device without external cloud dependencies.',
    description: `Flow Automator is a lightweight, privacy-focused browser extension engineered to eliminate repetitive web actions. Build visual macros to click buttons, fill recurring forms, extract structured page data, and cycle through multi-tab operational routines. All automation logic runs strictly within your local browser sandbox, ensuring your confidential web workflows and credentials never leave your machine.`,
    features: [
      'Visual Click & Type Workflow Builder: Record and replay complex multi-step browser interactions with zero code.',
      'Local Sandbox Execution: 100% of automation macros run inside your browser engine; zero telemetry or cloud server relaying.',
      'Smart Form Auto-Population: Store localized field templates for testing, admin dashboards, and data entry routines.',
      'Conditional Branching & Delays: Configure element-wait thresholds, conditional triggers, and custom retry intervals.',
      'Import & Export Recipes: Safely backup and transfer your automation workflows via clean JSON files.',
      'Keyboard Shortcut Triggers: Launch designated automations instantly using configurable global browser hotkeys.',
    ],
    icon: 'flow-automator',
    status: 'coming_soon', // Unreleased status: download button is disabled with "Not Yet Available"
    version: '0.9.0-preview',
    platforms: ['Google Chrome', 'Brave', 'Microsoft Edge'],
    officialDownloadUrl: null, // Set to verified Chrome Web Store URL once approved and published
    detailsUrl: '/extensions/flow-automator',
    supportUrl: '/help',
    pricing: {
      isFree: true,
      hasPaidTiers: true,
      freeTierDescription: 'Free tier includes up to 5 local workflows, standard triggers, and manual execution.',
      tiers: [
        {
          id: 'flow-pro-monthly',
          name: 'Pro Monthly',
          price: '$9',
          period: 'monthly',
          description: 'For active professionals automating daily operational routines.',
          features: [
            'Unlimited automation workflows',
            'Advanced element selector tuning',
            'Scheduled background executions',
            'Priority email support',
          ],
          checkoutUrl: undefined, // Add verified Dodo Payments checkout link when published
        },
        {
          id: 'flow-pro-yearly',
          name: 'Pro Yearly',
          price: '$79',
          period: 'yearly',
          description: 'Best value for year-round browser automation productivity.',
          popular: true,
          features: [
            'All Pro Monthly features',
            '2 months free included',
            'JSON recipe import/export sync',
            'Priority email support',
          ],
          checkoutUrl: undefined, // Add verified Dodo Payments checkout link when published
        },
        {
          id: 'flow-pro-lifetime',
          name: 'Lifetime License',
          price: '$149',
          period: 'lifetime',
          description: 'One-time payment for lifetime access and future v1.x updates.',
          features: [
            'Lifetime access to Pro features',
            'Single user across up to 3 personal devices',
            'All future v1.x feature releases',
            'Dedicated support queue',
          ],
          checkoutUrl: undefined, // Add verified Dodo Payments checkout link when published
        },
      ],
    },
    featured: true,
    privacyDisclosure: {
      dataCollected: ['None. Flow Automator does not transmit your personal data, browser history, or workflow macros to any remote server.'],
      localStorageUsage: 'Uses standard chrome.storage.local exclusively to store user-defined workflow recipes and local extension settings on your device.',
      permissionsRequired: [
        'activeTab / tabs: Needed to inspect elements and simulate workflow actions upon user activation.',
        'storage: Needed to save workflow definitions locally on your browser.',
      ],
      externalServices: ['None for core functionality. License key activation communicates directly with official Dodo Payments licensing verification endpoints.'],
      chromeWebStoreLimitedUseCompliance: true,
      verificationNotes: 'Pending final Chrome Web Store review. Complete permissions audit completed according to Manifest V3 standards.',
    },
    activationInstructions: [
      'Install Flow Automator from the official Chrome Web Store when published.',
      'Click the Flow Automator icon in your browser toolbar to open the extension popup.',
      'Click the Settings gear icon in the top right corner.',
      'Navigate to the "Pro License" tab.',
      'Paste your Dodo Payments license key into the license field.',
      'Click "Activate License" to unlock Pro capabilities on this browser.',
    ],
    faqs: [
      {
        question: 'Does Flow Automator send my form data or browsing history to any cloud server?',
        answer: 'No. Flow Automator is built with a strict offline-first philosophy. All workflows, selectors, and captured data stay strictly in your browser\'s local storage.',
      },
      {
        question: 'When will Flow Automator be available on the Chrome Web Store?',
        answer: 'Flow Automator is currently undergoing final quality checks and compliance review before initial submission. You can check back here or bookmark this page for the official release link.',
      },
      {
        question: 'Can I transfer my Pro license to another computer?',
        answer: 'Yes. If you switch computers or browser profiles, simply paste your license key into the extension settings on your new device.',
      },
      {
        question: 'What happens if a web page layout changes?',
        answer: 'Flow Automator uses fallback selector algorithms. If a page changes significantly, you can open the visual builder and re-target the updated button or input in seconds.',
      },
    ],
    lastUpdated: '2026-10-12',
    keywords: ['automation', 'workflow', 'chrome extension', 'form filler', 'productivity', 'macro recorder', 'flow automator'],
  },
];

/**
 * List of available product categories for filters
 */
export const extensionCategories = [
  'All Categories',
  'Productivity & Automation',
  'Developer Tools',
  'Data & Web Utilities',
  'Privacy & Security',
  'Design & Research',
];

/**
 * Helper to fetch extension by slug
 */
export function getExtensionBySlug(slug: string): ExtensionItem | undefined {
  return extensions.find((ext) => ext.slug.toLowerCase() === slug.toLowerCase());
}

/**
 * Helper to fetch all featured extensions
 */
export function getFeaturedExtensions(): ExtensionItem[] {
  return extensions.filter((ext) => ext.featured);
}
