import React, { useState } from 'react';
import { useRouter } from '../router/RouterContext.tsx';
import { extensions, extensionCategories } from '../data/extensions.ts';
import { ExtensionCard } from '../components/ExtensionCard.tsx';
import { FAQAccordion } from '../components/FAQAccordion.tsx';
import { SEOHead } from '../components/SEOHead.tsx';
import { siteConfig } from '../config/siteConfig.ts';
import { Search, ArrowRight, ShieldCheck, Zap, Lock, Terminal, HelpCircle } from 'lucide-react';

export const HomePage: React.FC = () => {
  const { navigate } = useRouter();
  const [heroSearch, setHeroSearch] = useState('');

  const handleHeroSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (heroSearch.trim()) {
      navigate(`/extensions?q=${encodeURIComponent(heroSearch.trim())}`);
    } else {
      navigate('/extensions');
    }
  };

  const generalFAQs = [
    {
      question: 'How do browser extensions work?',
      answer: 'Browser extensions are lightweight software plug-ins that integrate directly into Chromium-based browsers (Google Chrome, Brave, Microsoft Edge). They extend browser functionality, streamline recurring workflows, and save hours of manual repetitive effort.',
    },
    {
      question: 'Are extensions from this site safe and privacy-compliant?',
      answer: 'Yes. Every extension built by Deepak Sheoran is engineered under strict Manifest V3 security standards with a local-first philosophy. Workflows run in your local browser sandbox without telemetry or cloud recording.',
    },
    {
      question: 'How do paid licenses and Dodo Payments checkout work?',
      answer: 'For extensions offering Pro tiers, transactions are processed securely through Dodo Payments. Upon checkout, your license key is delivered directly to your confirmation screen and emailed to your purchase address.',
    },
    {
      question: 'Can I use one license key on multiple personal devices?',
      answer: 'Yes, depending on the tier. Pro licenses generally support activation on up to 3 personal machines or browser profiles for the same licensee.',
    },
  ];

  return (
    <>
      <SEOHead
        title="Practical Browser Tools & Extensions"
        description="Discover practical browser extensions and software tools designed to simplify everyday digital tasks. Home of Flow Automator by Deepak Sheoran."
        canonicalPath="/"
        schemaData={{
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: siteConfig.siteName,
          url: typeof window !== 'undefined' ? window.location.origin : '',
          description: siteConfig.defaultMetaDescription,
          author: {
            '@type': 'Person',
            name: siteConfig.businessOwner,
          },
        }}
      />

      <div className="space-y-16 lg:space-y-24 pb-16">
        {/* Hero Section */}
        <section className="relative pt-12 lg:pt-20 pb-8 border-b border-stone-200 bg-linear-to-b from-stone-100/60 to-[#F5F7F6]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              {/* Unboxed Kicker Metadata */}
              <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#1A5C52]">
                <span>Software Catalog</span>
                <span aria-hidden="true">·</span>
                <span>By {siteConfig.businessOwner}</span>
              </div>

              {/* Exact Suggested Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#182321] tracking-tight leading-[1.1] text-balance">
                Powerful Tools. <span className="text-[#1A5C52]">Simpler Workflows.</span>
              </h1>

              {/* Exact Suggested Supporting Text */}
              <p className="text-lg sm:text-xl text-stone-600 leading-relaxed max-w-2xl mx-auto">
                Discover practical browser extensions and software tools designed to simplify everyday digital tasks.
              </p>

              {/* Instant Search Bar */}
              <form onSubmit={handleHeroSearchSubmit} className="max-w-xl mx-auto pt-2">
                <div className="relative flex items-center shadow-xs">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-stone-400">
                    <Search className="w-5 h-5 text-[#1A5C52]" />
                  </div>
                  <input
                    type="text"
                    value={heroSearch}
                    onChange={(e) => setHeroSearch(e.target.value)}
                    placeholder="Search tools (e.g., Flow Automator, automation, forms)..."
                    className="w-full pl-11 pr-28 py-3.5 text-sm bg-white border-2 border-stone-200 rounded-xl text-[#182321] placeholder-stone-400 focus:outline-none focus:border-[#1A5C52] transition-colors"
                  />
                  <button
                    type="submit"
                    className="absolute right-2 px-4 py-2 text-xs font-semibold text-white bg-[#123C3A] hover:bg-[#1A5C52] rounded-lg transition-colors"
                  >
                    Search
                  </button>
                </div>
              </form>

              {/* Hero Action Buttons */}
              <div className="flex flex-wrap items-center justify-center gap-3 pt-3">
                <button
                  onClick={() => navigate('/extensions')}
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-[#123C3A] hover:bg-[#1A5C52] rounded-lg transition-colors shadow-xs"
                >
                  <span>Browse Extensions</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <a
                  href="#featured-section"
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-[#123C3A] bg-white hover:bg-stone-50 border border-stone-200 rounded-lg transition-colors"
                >
                  <span>Featured Products</span>
                </a>
              </div>
            </div>

            {/* Core Values Strip */}
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 pt-10 border-t border-stone-200/80">
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-teal-50 text-[#1A5C52] flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#182321]">Zero-Telemetry Architecture</h4>
                  <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                    Browser extensions execute tasks strictly in your local client sandbox with no hidden data harvest.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-teal-50 text-[#1A5C52] flex items-center justify-center shrink-0">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#182321]">Lightweight & Fast</h4>
                  <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                    Engineered without heavy bloated libraries, preserving snappy page load times and minimal RAM usage.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-teal-50 text-[#1A5C52] flex items-center justify-center shrink-0">
                  <Lock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#182321]">Dodo Payments Delivery</h4>
                  <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                    Clear checkout experience with instant license-key confirmation and transparent refund procedures.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Extensions Section */}
        <section id="featured-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-[#1A5C52] mb-1">
                Spotlight
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#182321] tracking-tight">
                Featured Extensions
              </h2>
            </div>
            <button
              onClick={() => navigate('/extensions')}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#123C3A] hover:text-[#1A5C52] transition-colors"
            >
              <span>View all software tools</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {extensions
              .filter((ext) => ext.featured)
              .map((extension) => (
                <ExtensionCard key={extension.id} extension={extension} />
              ))}
          </div>
        </section>

        {/* Explore by Category */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl border border-stone-200 p-8 sm:p-10 shadow-xs">
            <div className="max-w-xl mb-8">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#1A5C52]">
                Organization
              </span>
              <h2 className="text-2xl font-bold text-[#182321] mt-1 tracking-tight">
                Browse by Category
              </h2>
              <p className="text-sm text-stone-600 mt-2">
                Browse our expanding catalog of tools tailored for daily workflows, developers, and researchers.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {extensionCategories.filter((c) => c !== 'All Categories').map((category) => (
                <button
                  key={category}
                  onClick={() => navigate(`/extensions?category=${encodeURIComponent(category)}`)}
                  className="flex items-center justify-between p-4 rounded-xl border border-stone-200 hover:border-[#1A5C52] hover:bg-stone-50 transition-all text-left group"
                >
                  <span className="text-sm font-semibold text-[#182321] group-hover:text-[#123C3A]">
                    {category}
                  </span>
                  <ArrowRight className="w-4 h-4 text-stone-400 group-hover:text-[#1A5C52] group-hover:translate-x-1 transition-all" />
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* How to Install Guide Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#1A5C52]">
              Simple Setup
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#182321] mt-1 tracking-tight">
              How to Install an Extension
            </h2>
            <p className="text-sm text-stone-600 mt-2">
              Getting started takes less than a minute directly through the official store.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl border border-stone-200 p-6 space-y-3">
              <div className="font-mono text-xs font-bold text-[#C9A84C]">01. Official Installation</div>
              <h3 className="text-base font-bold text-[#182321]">Install via Web Store</h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Click the official store link on the extension detail page once released to add the package to your Chrome, Brave, or Edge browser.
              </p>
            </div>

            <div className="bg-white rounded-xl border border-stone-200 p-6 space-y-3">
              <div className="font-mono text-xs font-bold text-[#C9A84C]">02. Pin to Toolbar</div>
              <h3 className="text-base font-bold text-[#182321]">Pin for Fast Access</h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Click the puzzle-piece icon in your browser toolbar and pin the extension for 1-click access to its interactive workspace.
              </p>
            </div>

            <div className="bg-white rounded-xl border border-stone-200 p-6 space-y-3">
              <div className="font-mono text-xs font-bold text-[#C9A84C]">03. Activate (Optional Pro)</div>
              <h3 className="text-base font-bold text-[#182321]">Paste Your License</h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                If you purchased a Pro license, open the extension Settings tab, paste your Dodo Payments license key, and click Activate.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FAQAccordion items={generalFAQs} title="Frequently Asked Questions" />
        </section>

        {/* Support Banner Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#123C3A] text-white rounded-2xl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 max-w-xl">
              <h3 className="text-2xl font-bold text-white tracking-tight">
                Need Help or Have a Feature Request?
              </h3>
              <p className="text-sm text-white/80 leading-relaxed">
                Reach out directly to {siteConfig.businessOwner}. We provide dedicated activation assistance and prompt support for all products.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <button
                onClick={() => navigate('/help')}
                className="px-5 py-2.5 text-xs font-semibold text-white bg-[#1A5C52] hover:bg-[#1A5C52]/80 rounded-lg transition-colors flex items-center gap-2"
              >
                <HelpCircle className="w-4 h-4 text-[#C9A84C]" />
                <span>Help Center</span>
              </button>
              <button
                onClick={() => navigate('/contact')}
                className="px-5 py-2.5 text-xs font-semibold text-[#123C3A] bg-white hover:bg-stone-100 rounded-lg transition-colors"
              >
                Contact Support
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
