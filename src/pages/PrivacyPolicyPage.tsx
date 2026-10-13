import React from 'react';
import { SEOHead } from '../components/SEOHead.tsx';
import { siteConfig } from '../config/siteConfig.ts';
import { extensions } from '../data/extensions.ts';
import { Shield, AlertCircle, FileText, CheckCircle2 } from 'lucide-react';
import { Link } from '../router/RouterContext.tsx';

export const PrivacyPolicyPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Privacy Policy – Software & Chrome Extensions"
        description="Official privacy policy for Deepak Sheoran software and Chrome extensions, detailing local storage, data processing, and compliance."
        canonicalPath="/privacy"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16 space-y-10">
        {/* Header */}
        <div className="space-y-3">
          <div className="text-xs font-semibold uppercase tracking-wider text-[#1A5C52]">
            Legal & Compliance
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#182321] tracking-tight">
            Privacy Policy
          </h1>
          <div className="flex items-center gap-3 text-xs text-stone-500">
            <span>Effective Date: October 12, 2026</span>
            <span aria-hidden="true">·</span>
            <span>Entity: {siteConfig.businessOwner}</span>
            <span aria-hidden="true">·</span>
            <span className="font-mono">{siteConfig.productionBaseUrl}</span>
          </div>
        </div>

        {/* Notice of Owner Review */}
        <div className="bg-amber-50/80 border border-amber-200 rounded-xl p-4 flex items-start gap-3 text-xs text-amber-900">
          <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <p className="font-semibold">Compliance Note for Website Owner</p>
            <p className="text-amber-800 leading-relaxed">
              This policy is tailored specifically for the software and Chrome extensions developed by {siteConfig.businessOwner}.
              Please review all clauses with legal counsel prior to formal commercial operations to ensure alignment with your specific jurisdictions.
            </p>
          </div>
        </div>

        {/* Policy Body */}
        <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-10 space-y-8 text-xs sm:text-sm text-stone-700 leading-relaxed">
          {/* Section 1 */}
          <section className="space-y-3">
            <h2 className="text-base font-bold text-[#182321] tracking-tight">
              1. Overview & Scope
            </h2>
            <p>
              This Privacy Policy explains how <strong>{siteConfig.businessOwner}</strong> ("we", "us", or "our") collects, handles,
              and protects information when you browse this website (<span className="font-mono text-stone-800">{siteConfig.productionBaseUrl}</span>)
              or use any software application or Chrome browser extension in our catalog, including our flagship product, <strong>Flow Automator</strong>.
            </p>
            <p>
              We design our software with a strict privacy-first architecture: browser extensions are built to execute routines
              locally within your browser environment rather than transmitting your workflow data, form inputs, or browsing activity
              to cloud servers.
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-3">
            <h2 className="text-base font-bold text-[#182321] tracking-tight">
              2. Website Data Collection & Analytics
            </h2>
            <p>
              When you visit this website:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-stone-600">
              <li>
                <strong>No Behavioral Trackers:</strong> This central catalog does not deploy third-party advertising cookies, cross-site trackers, or surveillance pixels.
              </li>
              <li>
                <strong>Server Logs:</strong> Standard infrastructure logs (such as IP addresses, browser user agent, and requested asset paths) may be processed transiently by our hosting provider (Cloudflare Pages) exclusively for network security, DDoS mitigation, and system reliability.
              </li>
              <li>
                <strong>Voluntary Communication:</strong> If you contact us via email, we receive the email address and information you voluntarily choose to include in your inquiry.
              </li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="space-y-3">
            <h2 className="text-base font-bold text-[#182321] tracking-tight">
              3. Data Processed by Individual Chrome Extensions
            </h2>
            <p>
              Because each extension in our catalog provides specific utility, data handling is configured strictly according to the scope of that tool:
            </p>

            <div className="mt-4 p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-3">
              <h3 className="font-bold text-[#182321] text-xs uppercase tracking-wider">
                Flagship Disclosure: Flow Automator
              </h3>
              <ul className="list-disc pl-5 space-y-1 text-xs text-stone-600">
                <li>
                  <strong>No Remote Storage:</strong> Automation recipes, selector paths, delay preferences, and form auto-fill rules are saved exclusively on your local computer using the Chromium <code className="text-teal-900 font-mono">chrome.storage.local</code> API.
                </li>
                <li>
                  <strong>Zero Web Page Harvesting:</strong> Flow Automator does not inspect, transmit, or record page content, credentials, or web sessions other than executing the specific user-defined macro on the active browser tab.
                </li>
                <li>
                  <strong>Permissions:</strong> Scoped strictly to <code className="text-teal-900 font-mono">activeTab</code>, <code className="text-teal-900 font-mono">tabs</code>, and <code className="text-teal-900 font-mono">storage</code>. No unrestricted background interception permissions are requested.
                </li>
              </ul>
            </div>

            <p className="text-stone-600 text-xs">
              Disclosures for future catalog additions are documented individually on each product detail page and audited during Chrome Web Store package updates.
            </p>
          </section>

          {/* Section 4 */}
          <section className="space-y-3">
            <h2 className="text-base font-bold text-[#182321] tracking-tight">
              4. Payment Processing & Dodo Payments
            </h2>
            <p>
              Paid extensions and Pro licenses are processed by <strong>Dodo Payments</strong> as our authorized Merchant of Record.
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-stone-600">
              <li>
                We do not collect, process, or store credit card numbers, CVVs, or full payment card details on this website or in our extensions.
              </li>
              <li>
                All payment transactions occur through Dodo Payments' secure, PCI-DSS compliant checkout interface.
              </li>
              <li>
                Dodo Payments handles order invoicing, applicable sales taxes, VAT calculations, and automated license-key dispatch.
              </li>
              <li>
                Dodo Payments shares limited order metadata with us (such as purchase email, order ID, and purchased tier) strictly for customer support, license verification, and refund administration.
              </li>
            </ul>
          </section>

          {/* Section 5 */}
          <section className="space-y-3">
            <h2 className="text-base font-bold text-[#182321] tracking-tight">
              5. License-Key Verification & Security
            </h2>
            <p>
              When you activate a Pro tier inside an extension:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-stone-600">
              <li>
                The extension connects directly via HTTPS to official Dodo Payments licensing verification endpoints to confirm seat validity and expiration status.
              </li>
              <li>
                Your license key is saved in local encrypted extension storage to maintain activation across browser sessions.
              </li>
              <li>
                License keys are never logged in plain text or transmitted to unauthorized third parties.
              </li>
            </ul>
          </section>

          {/* Section 6 */}
          <section className="space-y-3">
            <h2 className="text-base font-bold text-[#182321] tracking-tight">
              6. Google Chrome Web Store Limited Use Disclosure
            </h2>
            <p>
              Our extensions comply with the <strong>Google Chrome Web Store User Data Policy</strong>, including the Limited Use requirements:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-stone-600">
              <li>
                The use of information received from Google APIs adheres strictly to the Chrome Web Store Limited Use Policy.
              </li>
              <li>
                We do not transfer or sell user data to third parties, data brokers, advertising networks, or lending platforms.
              </li>
              <li>
                We do not use or transfer user data to serve targeted advertisements.
              </li>
              <li>
                We do not use or transfer user data to train machine learning or AI models without explicit, affirmative user authorization.
              </li>
            </ul>
          </section>

          {/* Section 7 */}
          <section className="space-y-3">
            <h2 className="text-base font-bold text-[#182321] tracking-tight">
              7. Data Retention & Deletion
            </h2>
            <p>
              Because all workflow data is stored locally in your browser:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-stone-600">
              <li>
                Uninstalling an extension immediately deletes all locally saved workflows, templates, and stored license keys associated with that extension.
              </li>
              <li>
                To clear stored data without uninstalling, you can clear extension data or site data through Chrome Settings.
              </li>
              <li>
                To request deletion of support correspondence or order records from our support archives, email us at <span className="font-mono text-stone-800">{siteConfig.supportEmail}</span>.
              </li>
            </ul>
          </section>

          {/* Section 8 */}
          <section className="space-y-3">
            <h2 className="text-base font-bold text-[#182321] tracking-tight">
              8. Contact for Privacy Inquiries
            </h2>
            <p>
              For questions regarding this policy, data practices, or to exercise statutory privacy rights under GDPR, CCPA, or applicable laws, contact:
            </p>
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
              <p className="font-semibold text-stone-900">{siteConfig.businessOwner}</p>
              <p className="text-stone-600">Developer & Data Controller</p>
              <p className="mt-2">
                Official Support Email:{' '}
                <a href={`mailto:${siteConfig.supportEmail}`} className="font-mono text-[#123C3A] font-semibold underline">
                  {siteConfig.supportEmail}
                </a>
              </p>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};
