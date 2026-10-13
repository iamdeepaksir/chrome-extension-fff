import React from 'react';
import { SEOHead } from '../components/SEOHead.tsx';
import { siteConfig } from '../config/siteConfig.ts';
import { AlertCircle } from 'lucide-react';

export const TermsPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Terms and Conditions – Software & Extensions"
        description="Official terms of use, licensing agreements, acceptable use, and intellectual property terms for software by Deepak Sheoran."
        canonicalPath="/terms"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16 space-y-10">
        {/* Header */}
        <div className="space-y-3">
          <div className="text-xs font-semibold uppercase tracking-wider text-[#1A5C52]">
            Legal & Licensing
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#182321] tracking-tight">
            Terms and Conditions
          </h1>
          <div className="flex items-center gap-3 text-xs text-stone-500">
            <span>Effective Date: October 12, 2026</span>
            <span aria-hidden="true">·</span>
            <span>Licensor: {siteConfig.businessOwner}</span>
            <span aria-hidden="true">·</span>
            <span className="font-mono">{siteConfig.productionBaseUrl}</span>
          </div>
        </div>

        {/* Notice of Owner Review */}
        <div className="bg-amber-50/80 border border-amber-200 rounded-xl p-4 flex items-start gap-3 text-xs text-amber-900">
          <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <p className="font-semibold">Review Notice for Website Owner</p>
            <p className="text-amber-800 leading-relaxed">
              These terms govern software licensing, subscription rights, intellectual property, and limitations of liability.
              Specific provisions should be reviewed with qualified legal counsel in accordance with your business entity structure.
            </p>
          </div>
        </div>

        {/* Terms Body */}
        <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-10 space-y-8 text-xs sm:text-sm text-stone-700 leading-relaxed">
          {/* Section 1 */}
          <section className="space-y-3">
            <h2 className="text-base font-bold text-[#182321] tracking-tight">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing this website, downloading, installing, or using any software or Chrome browser extension created by <strong>{siteConfig.businessOwner}</strong> (including Flow Automator), you agree to be bound by these Terms and Conditions. If you do not agree to these terms, do not install or use our software.
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-3">
            <h2 className="text-base font-bold text-[#182321] tracking-tight">
              2. Grant of License & Permitted Use
            </h2>
            <p>
              Subject to your compliance with these Terms and payment of any applicable fees:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-stone-600">
              <li>
                <strong>License Scope:</strong> We grant you a personal, non-exclusive, non-transferable, revocable license to install and use the software strictly for your own personal or internal business workflows.
              </li>
              <li>
                <strong>Free Tiers:</strong> Free extension tiers may be used subject to documented feature caps or local storage quotas.
              </li>
              <li>
                <strong>Pro / Paid Tiers:</strong> Paid licenses grant access to extended functionality for the licensed user across up to three (3) personal workstations or browser profiles.
              </li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="space-y-3">
            <h2 className="text-base font-bold text-[#182321] tracking-tight">
              3. Restrictions & Prohibited Conduct
            </h2>
            <p>
              You agree that you will not, directly or indirectly:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-stone-600">
              <li>Decompile, reverse engineer, disassemble, or attempt to derive the source code of any proprietary extension component, except to the extent permitted by applicable mandatory law.</li>
              <li>Circumvent, bypass, modify, or tamper with any license verification, key validation, or security mechanisms enforced by the software or Dodo Payments.</li>
              <li>Rent, lease, sublicense, sell, distribute, or publicly host license keys or software packages on key-sharing forums, torrents, or warez portals.</li>
              <li>Use the software to conduct automated attacks, distributed scraping in violation of third-party website Terms of Service, or malicious automation activities.</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section className="space-y-3">
            <h2 className="text-base font-bold text-[#182321] tracking-tight">
              4. Subscription vs. Lifetime Licenses
            </h2>
            <ul className="list-disc pl-5 space-y-1.5 text-stone-600">
              <li>
                <strong>Monthly & Yearly Subscriptions:</strong> Provide uninterrupted access to Pro features for the duration of the active billing cycle. Subscriptions renew automatically unless cancelled prior to the renewal date.
              </li>
              <li>
                <strong>Lifetime Licenses:</strong> Provide perpetual access to the specified major version (e.g. v1.x) of the purchased product without recurring periodic fees.
              </li>
              <li>
                <strong>Payment Facilitation:</strong> All financial transactions, renewals, and taxes are processed by Dodo Payments as the authorized Merchant of Record.
              </li>
            </ul>
          </section>

          {/* Section 5 */}
          <section className="space-y-3">
            <h2 className="text-base font-bold text-[#182321] tracking-tight">
              5. Intellectual Property
            </h2>
            <p>
              All copyrights, trademarks, software code, UI designs, and documentation associated with this website and the extensions are the exclusive property of {siteConfig.businessOwner} or its licensors.
            </p>
            <p className="text-stone-600">
              Google Chrome, Chrome Web Store, Brave, and Microsoft Edge are trademarks of their respective owners and are referenced solely for compatibility purposes.
            </p>
          </section>

          {/* Section 6 */}
          <section className="space-y-3">
            <h2 className="text-base font-bold text-[#182321] tracking-tight">
              6. Software Updates & Availability
            </h2>
            <p>
              We periodically issue updates to enhance capabilities, maintain compatibility with evolving browser engines (Chromium Manifest V3 updates), or resolve bugs. We do not guarantee that older browser versions or unsupported third-party web pages will remain perpetually compatible with dynamic DOM automation scripts.
            </p>
          </section>

          {/* Section 7 */}
          <section className="space-y-3">
            <h2 className="text-base font-bold text-[#182321] tracking-tight">
              7. Disclaimers & Limitation of Liability
            </h2>
            <p>
              TO THE MAXIMUM EXTENT PERMITTED UNDER APPLICABLE LAW, THE SOFTWARE AND EXTENSIONS ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED.
            </p>
            <p>
              IN NO EVENT SHALL {siteConfig.businessOwner} BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, OR CONSEQUENTIAL DAMAGES, INCLUDING LOSS OF DATA, INTERRUPTED AUTOMATION JOBS, OR INABILITY TO USE THE TOOLS, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
            </p>
          </section>

          {/* Section 8 */}
          <section className="space-y-3">
            <h2 className="text-base font-bold text-[#182321] tracking-tight">
              8. Contact
            </h2>
            <p>
              For legal inquiries regarding these terms, contact <a href={`mailto:${siteConfig.supportEmail}`} className="font-mono text-[#123C3A] font-semibold underline">{siteConfig.supportEmail}</a>.
            </p>
          </section>
        </div>
      </div>
    </>
  );
};
