import React from 'react';
import { useRouter, Link } from '../router/RouterContext.tsx';
import { getExtensionBySlug } from '../data/extensions.ts';
import { FAQAccordion } from '../components/FAQAccordion.tsx';
import { SEOHead } from '../components/SEOHead.tsx';
import { siteConfig } from '../config/siteConfig.ts';
import {
  Download,
  Clock,
  Check,
  Shield,
  HelpCircle,
  Cpu,
  ArrowLeft,
  ChevronRight,
  ExternalLink,
  Layers,
  HardDrive,
  Key,
} from 'lucide-react';

export const ExtensionDetailPage: React.FC = () => {
  const { currentPath, navigate } = useRouter();

  // Extract slug from path: /extensions/:slug
  const slug = currentPath.replace(/^\/extensions\/?/, '').split('/')[0] || '';
  const extension = getExtensionBySlug(slug);

  if (!extension) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center space-y-4">
        <h1 className="text-2xl font-bold text-[#182321]">Extension Not Found</h1>
        <p className="text-sm text-stone-600">
          The requested extension record "{slug}" does not exist in our catalog.
        </p>
        <button
          onClick={() => navigate('/extensions')}
          className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-[#123C3A] rounded-lg"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Extensions Directory</span>
        </button>
      </div>
    );
  }

  const isAvailable = Boolean(extension.officialDownloadUrl);

  return (
    <>
      <SEOHead
        title={extension.name}
        description={extension.shortDescription}
        canonicalPath={`/extensions/${extension.slug}`}
        type="product"
        schemaData={{
          '@context': 'https://schema.org',
          '@type': 'SoftwareApplication',
          name: extension.name,
          operatingSystem: extension.platforms.join(', '),
          applicationCategory: extension.category,
          description: extension.shortDescription,
          offers: {
            '@type': 'Offer',
            price: extension.pricing.isFree ? '0' : '9',
            priceCurrency: 'USD',
          },
          author: {
            '@type': 'Person',
            name: siteConfig.businessOwner,
          },
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14 space-y-12">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs text-stone-500" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-[#123C3A]">
            Home
          </Link>
          <ChevronRight className="w-3 h-3 text-stone-400" />
          <Link href="/extensions" className="hover:text-[#123C3A]">
            Extensions
          </Link>
          <ChevronRight className="w-3 h-3 text-stone-400" />
          <span className="text-[#182321] font-medium">{extension.name}</span>
        </nav>

        {/* Product Hero Header */}
        <section className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-10 shadow-xs">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-8">
            <div className="flex items-start gap-5">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-[#123C3A] text-[#C9A84C] flex items-center justify-center shrink-0 shadow-xs">
                <Cpu className="w-8 h-8 sm:w-10 sm:h-10" />
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs text-stone-500">
                  <span className="font-semibold text-[#1A5C52]">{extension.category}</span>
                  <span aria-hidden="true">·</span>
                  <span>{extension.platforms.join(' / ')}</span>
                  {extension.version && (
                    <>
                      <span aria-hidden="true">·</span>
                      <span className="font-mono text-stone-400">v{extension.version}</span>
                    </>
                  )}
                </div>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-[#182321] tracking-tight">
                  {extension.name}
                </h1>
                <p className="text-sm sm:text-base text-stone-600 max-w-2xl leading-relaxed">
                  {extension.tagline}
                </p>
              </div>
            </div>

            {/* Actions Block */}
            <div className="flex flex-col sm:flex-row md:flex-col items-stretch md:items-end gap-3 shrink-0 pt-2">
              {isAvailable ? (
                <a
                  href={extension.officialDownloadUrl!}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-bold text-white bg-[#123C3A] hover:bg-[#1A5C52] rounded-xl shadow-xs transition-colors"
                >
                  <Download className="w-4 h-4" />
                  <span>Install from Chrome Web Store</span>
                </a>
              ) : (
                <div className="space-y-1.5 text-center md:text-right">
                  <button
                    disabled
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-semibold text-stone-400 bg-stone-100 rounded-xl cursor-not-allowed border border-stone-200"
                  >
                    <Clock className="w-4 h-4 text-stone-400" />
                    <span>Not Yet Available on Web Store</span>
                  </button>
                  <p className="text-[11px] text-stone-400">
                    Currently under submission & compliance review
                  </p>
                </div>
              )}

              <Link
                href="/help"
                className="inline-flex items-center justify-center gap-1.5 text-xs font-semibold text-[#123C3A] hover:text-[#1A5C52] py-1"
              >
                <HelpCircle className="w-3.5 h-3.5" />
                <span>Activation & Setup Help</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Detailed Description & Key Features */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-10">
            {/* Overview */}
            <section className="bg-white rounded-xl border border-stone-200 p-6 sm:p-8 space-y-4">
              <h2 className="text-lg font-bold text-[#182321] tracking-tight">
                About {extension.name}
              </h2>
              <div className="text-sm text-stone-700 leading-relaxed space-y-3">
                <p>{extension.description}</p>
              </div>
            </section>

            {/* Core Capabilities */}
            <section className="bg-white rounded-xl border border-stone-200 p-6 sm:p-8 space-y-5">
              <h2 className="text-lg font-bold text-[#182321] tracking-tight">
                Key Features & Capabilities
              </h2>
              <div className="grid grid-cols-1 gap-3.5">
                {extension.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 rounded-lg bg-stone-50/70 border border-stone-100">
                    <Check className="w-4 h-4 text-[#1A5C52] shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-stone-800 leading-relaxed font-medium">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            {/* How It Works & Local Sandbox Security */}
            <section className="bg-white rounded-xl border border-stone-200 p-6 sm:p-8 space-y-5">
              <div className="flex items-center gap-2 text-[#1A5C52]">
                <HardDrive className="w-5 h-5 text-[#C9A84C]" />
                <h2 className="text-lg font-bold text-[#182321] tracking-tight">
                  How It Works & Execution Architecture
                </h2>
              </div>
              <p className="text-sm text-stone-600 leading-relaxed">
                {extension.name} executes all operational commands entirely inside your Chromium browser process.
                Unlike cloud services that require sharing credentials or streaming page contents to remote servers,
                your automation workflows, form templates, and data extractions remain 100% private.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="p-3.5 rounded-lg bg-stone-50 border border-stone-200/80">
                  <div className="font-mono text-xs font-bold text-[#C9A84C]">01. Local Storage</div>
                  <p className="text-xs text-stone-600 mt-1">
                    Workflows are persisted via <code className="text-[11px] font-mono text-teal-900">chrome.storage.local</code> on your device.
                  </p>
                </div>
                <div className="p-3.5 rounded-lg bg-stone-50 border border-stone-200/80">
                  <div className="font-mono text-xs font-bold text-[#C9A84C]">02. Zero Telemetry</div>
                  <p className="text-xs text-stone-600 mt-1">
                    No analytics trackers, user behavior logging, or external metrics collection.
                  </p>
                </div>
                <div className="p-3.5 rounded-lg bg-stone-50 border border-stone-200/80">
                  <div className="font-mono text-xs font-bold text-[#C9A84C]">03. Manifest V3</div>
                  <p className="text-xs text-stone-600 mt-1">
                    Compliant with modern Chrome security standards and limited permission scoping.
                  </p>
                </div>
              </div>
            </section>

            {/* How to Activate Pro License */}
            {extension.activationInstructions && (
              <section className="bg-white rounded-xl border border-stone-200 p-6 sm:p-8 space-y-4">
                <div className="flex items-center gap-2 text-[#123C3A]">
                  <Key className="w-5 h-5 text-[#C9A84C]" />
                  <h2 className="text-lg font-bold text-[#182321] tracking-tight">
                    How to Activate a Pro License
                  </h2>
                </div>
                <div className="space-y-2.5">
                  {extension.activationInstructions.map((step, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-stone-700">
                      <span className="font-mono text-xs font-bold text-[#1A5C52] bg-teal-50 px-2 py-0.5 rounded-md shrink-0">
                        {idx + 1}
                      </span>
                      <span>{step}</span>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Extension FAQs */}
            {extension.faqs && extension.faqs.length > 0 && (
              <section className="bg-white rounded-xl border border-stone-200 p-6 sm:p-8">
                <FAQAccordion items={extension.faqs} title={`${extension.name} FAQ`} />
              </section>
            )}
          </div>

          {/* Sidebar: Pricing & Privacy Audit Disclosures */}
          <div className="space-y-6">
            {/* Pricing Section (When Configured) */}
            {extension.pricing.hasPaidTiers && extension.pricing.tiers && (
              <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs space-y-4">
                <div className="flex items-center justify-between pb-2 border-b border-stone-100">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-[#123C3A]">
                    Available Tiers
                  </h3>
                  <span className="text-xs text-stone-500 font-mono">Dodo Payments</span>
                </div>

                <div className="space-y-4">
                  {extension.pricing.tiers.map((tier) => (
                    <div
                      key={tier.id}
                      className={`p-4 rounded-xl border ${
                        tier.popular
                          ? 'border-[#1A5C52] bg-teal-50/20'
                          : 'border-stone-200 bg-stone-50/50'
                      }`}
                    >
                      <div className="flex items-baseline justify-between mb-1">
                        <span className="text-xs font-bold text-[#182321]">{tier.name}</span>
                        <div className="text-right">
                          <span className="text-lg font-extrabold text-[#123C3A] font-mono">
                            {tier.price}
                          </span>
                          {tier.period && (
                            <span className="text-[11px] text-stone-500 font-sans ml-1">
                              /{tier.period}
                            </span>
                          )}
                        </div>
                      </div>
                      <p className="text-[11px] text-stone-600 mb-3 leading-relaxed">
                        {tier.description}
                      </p>

                      <ul className="space-y-1.5 text-xs text-stone-700 mb-4">
                        {tier.features.map((f, i) => (
                          <li key={i} className="flex items-center gap-1.5">
                            <Check className="w-3 h-3 text-[#1A5C52]" />
                            <span className="text-[11px]">{f}</span>
                          </li>
                        ))}
                      </ul>

                      {tier.checkoutUrl ? (
                        <a
                          href={tier.checkoutUrl}
                          className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-bold text-white bg-[#123C3A] hover:bg-[#1A5C52] rounded-lg transition-colors"
                        >
                          <span>Get {tier.name}</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      ) : (
                        <button
                          disabled
                          className="w-full inline-flex items-center justify-center py-2 px-3 text-xs font-semibold text-stone-400 bg-stone-100 rounded-lg cursor-not-allowed border border-stone-200"
                        >
                          <span>Available on Launch</span>
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Privacy & Permissions Disclosure */}
            <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs space-y-4">
              <div className="flex items-center gap-2 pb-2 border-b border-stone-100">
                <Shield className="w-4 h-4 text-[#1A5C52]" />
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#123C3A]">
                  Privacy & Data Disclosures
                </h3>
              </div>

              <div className="space-y-3 text-xs text-stone-600 leading-relaxed">
                <div>
                  <strong className="text-stone-800 block mb-0.5">Data Processed:</strong>
                  <p>{extension.privacyDisclosure.dataCollected.join(', ')}</p>
                </div>
                <div>
                  <strong className="text-stone-800 block mb-0.5">Local Storage:</strong>
                  <p>{extension.privacyDisclosure.localStorageUsage}</p>
                </div>
                <div>
                  <strong className="text-stone-800 block mb-0.5">Permissions:</strong>
                  <ul className="list-disc pl-4 space-y-1">
                    {extension.privacyDisclosure.permissionsRequired.map((p, i) => (
                      <li key={i}>{p}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <strong className="text-stone-800 block mb-0.5">Chrome Web Store Compliance:</strong>
                  <p>Manifest V3 limited use compliant. No remote executable code.</p>
                </div>
              </div>

              <div className="pt-2 border-t border-stone-100">
                <Link
                  href="/privacy"
                  className="text-xs font-medium text-[#1A5C52] hover:underline inline-flex items-center gap-1"
                >
                  <span>Read Central Privacy Policy</span>
                  <ChevronRight className="w-3 h-3" />
                </Link>
              </div>
            </div>

            {/* Support Link Box */}
            <div className="bg-stone-50 rounded-xl border border-stone-200 p-5 space-y-2 text-xs">
              <p className="font-bold text-[#182321]">Need assistance with {extension.name}?</p>
              <p className="text-stone-600 leading-relaxed">
                Check our activation guide or contact our support inbox directly.
              </p>
              <div className="pt-1 flex items-center gap-3">
                <Link href="/help" className="font-semibold text-[#123C3A] hover:underline">
                  Activation Guide
                </Link>
                <span aria-hidden="true">·</span>
                <Link href="/contact" className="font-semibold text-[#123C3A] hover:underline">
                  Contact Developer
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
