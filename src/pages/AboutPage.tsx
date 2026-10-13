import React from 'react';
import { SEOHead } from '../components/SEOHead.tsx';
import { siteConfig } from '../config/siteConfig.ts';
import { Shield, Sparkles, Code2, Cpu, ArrowRight } from 'lucide-react';
import { useRouter } from '../router/RouterContext.tsx';

export const AboutPage: React.FC = () => {
  const { navigate } = useRouter();

  return (
    <>
      <SEOHead
        title="About Deepak Sheoran & Software Philosophy"
        description="Learn about Deepak Sheoran's engineering principles: lightweight browser extensions, zero cloud telemetry, and local-first productivity tools."
        canonicalPath="/about"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16 space-y-12">
        {/* Intro */}
        <div className="space-y-4">
          <div className="text-xs font-semibold uppercase tracking-wider text-[#1A5C52]">
            About the Developer & Studio
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#182321] tracking-tight">
            Building Practical Browser Software
          </h1>
          <p className="text-base sm:text-lg text-stone-600 leading-relaxed">
            Founded by independent software engineer <strong>{siteConfig.businessOwner}</strong>, this project is dedicated
            to designing fast, focused browser tools that solve real productivity friction without compromising user privacy.
          </p>
        </div>

        {/* Philosophy Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl border border-stone-200 p-6 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-teal-50 text-[#1A5C52] flex items-center justify-center">
              <Shield className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-[#182321]">Local-First Sandbox Architecture</h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              Modern web software too often sends your every keystroke and web page visit to remote tracking servers.
              Our tools prioritize client-side execution where all automation rules, forms, and preferences stay on your device.
            </p>
          </div>

          <div className="bg-white rounded-xl border border-stone-200 p-6 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-teal-50 text-[#1A5C52] flex items-center justify-center">
              <Code2 className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-[#182321]">Manifest V3 Compliance</h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              Every extension is architected under the latest Chrome extension standards (Manifest V3), ensuring minimal background
              resource consumption, strict security sandboxes, and scoped permissions.
            </p>
          </div>

          <div className="bg-white rounded-xl border border-stone-200 p-6 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-teal-50 text-[#1A5C52] flex items-center justify-center">
              <Cpu className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-[#182321]">Single Central Platform</h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              Instead of scattering dozens of disconnected micro-sites, this central hub acts as the verified home for our entire
              catalog of 40–50 future utilities, offering unified support, transparent policies, and consistent licensing.
            </p>
          </div>

          <div className="bg-white rounded-xl border border-stone-200 p-6 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-teal-50 text-[#1A5C52] flex items-center justify-center">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-[#182321]">Dodo Payments Merchant of Record</h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              Paid Pro upgrades are billed through Dodo Payments as the authorized Merchant of Record, handling global tax compliance,
              secure card transactions, and automated license-key dispatch.
            </p>
          </div>
        </div>

        {/* Roadmap & Commitment */}
        <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 space-y-4">
          <h2 className="text-lg font-bold text-[#182321]">Development Roadmap & Integrity</h2>
          <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
            Our flagship extension, <strong>Flow Automator</strong>, represents our vision for visual browser automation.
            As new tools in developer productivity, data extraction, and workflow efficiency are developed, they will be published
            directly through this verified catalog.
          </p>
          <div className="pt-2">
            <button
              onClick={() => navigate('/extensions')}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-[#123C3A] hover:bg-[#1A5C52] rounded-lg transition-colors"
            >
              <span>Explore All Extensions</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
