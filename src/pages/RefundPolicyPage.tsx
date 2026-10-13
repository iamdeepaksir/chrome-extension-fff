import React from 'react';
import { SEOHead } from '../components/SEOHead.tsx';
import { siteConfig } from '../config/siteConfig.ts';
import { AlertCircle, RefreshCw, Mail, HelpCircle, ArrowRight } from 'lucide-react';
import { Link } from '../router/RouterContext.tsx';

export const RefundPolicyPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Refund Policy – Software & Extensions"
        description="Official refund guidelines for digital software licenses by Deepak Sheoran, including request procedures and statutory consumer rights."
        canonicalPath="/refund"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16 space-y-10">
        {/* Header */}
        <div className="space-y-3">
          <div className="text-xs font-semibold uppercase tracking-wider text-[#1A5C52]">
            Billing & Policies
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#182321] tracking-tight">
            Refund Policy
          </h1>
          <div className="flex items-center gap-3 text-xs text-stone-500">
            <span>Effective Date: October 12, 2026</span>
            <span aria-hidden="true">·</span>
            <span>Seller: {siteConfig.businessOwner}</span>
            <span aria-hidden="true">·</span>
            <span className="font-mono">{siteConfig.productionBaseUrl}</span>
          </div>
        </div>

        {/* Notice of Owner Review */}
        <div className="bg-amber-50/80 border border-amber-200 rounded-xl p-4 flex items-start gap-3 text-xs text-amber-900">
          <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <p className="font-semibold">Owner Review & Verification Notice</p>
            <p className="text-amber-800 leading-relaxed">
              This refund policy sets clear, balanced standards for digital software licenses processed via Dodo Payments.
              Specific refund timeframes (e.g. 14-day or 30-day trial allowances) should be reviewed and configured by {siteConfig.businessOwner}
              prior to public product releases to match your exact Dodo Merchant of Record merchant terms.
            </p>
          </div>
        </div>

        {/* Refund Policy Body */}
        <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-10 space-y-8 text-xs sm:text-sm text-stone-700 leading-relaxed">
          {/* Section 1 */}
          <section className="space-y-3">
            <h2 className="text-base font-bold text-[#182321] tracking-tight">
              1. Overview
            </h2>
            <p>
              We stand behind the quality of the software and Chrome extensions developed by <strong>{siteConfig.businessOwner}</strong>.
              Because our digital products provide instant access to intellectual property and license activation keys upon checkout,
              we maintain a transparent, case-by-case evaluation policy to address technical issues, accidental duplicate orders, or customer dissatisfaction fairly.
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-3">
            <h2 className="text-base font-bold text-[#182321] tracking-tight">
              2. How to Request a Refund
            </h2>
            <p>
              To request a refund review, contact our support team directly via email at{' '}
              <a href={`mailto:${siteConfig.supportEmail}`} className="font-mono text-[#123C3A] font-semibold underline">
                {siteConfig.supportEmail}
              </a>{' '}
              with the subject line: <code>[Refund Request] - &lt;Your Order Reference&gt;</code>.
            </p>
            <p>
              To expedite review, please include the following essential details:
            </p>
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-2 text-stone-800">
              <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm">
                <li><strong>Product Name:</strong> (e.g., Flow Automator - Pro Yearly)</li>
                <li><strong>Purchase Email:</strong> The exact email address provided during checkout on Dodo Payments.</li>
                <li><strong>Transaction / Order Reference:</strong> Found in your Dodo Payments email receipt or invoice.</li>
                <li><strong>Reason for Request:</strong> A brief description of the technical incompatibility, browser conflict, or reason for the request.</li>
              </ul>
            </div>
            <p className="text-xs text-stone-500">
              *Please note: Submitting a request initiates a review; refunds are evaluated based on the circumstances and applicable consumer statutes rather than processed automatically.
            </p>
          </section>

          {/* Section 3 */}
          <section className="space-y-3">
            <h2 className="text-base font-bold text-[#182321] tracking-tight">
              3. Refund Request vs. Subscription Cancellation
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
              <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-1.5">
                <strong className="block text-[#182321] font-bold text-xs uppercase">
                  Subscription Cancellation
                </strong>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Stops future recurring renewal charges. Your license remains fully active until the end of your prepaid period.
                  You can cancel anytime via the link in your invoice email or by contacting support.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-1.5">
                <strong className="block text-[#182321] font-bold text-xs uppercase">
                  Refund Request
                </strong>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Applies to an already charged transaction. If approved, the purchase funds are returned via the original payment method,
                  and the associated license key is deactivated.
                </p>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section className="space-y-3">
            <h2 className="text-base font-bold text-[#182321] tracking-tight">
              4. Missing License Key Assistance
            </h2>
            <p>
              If your request is primarily due to not having received your license key, please check our{' '}
              <Link href="/help" className="text-[#1A5C52] font-semibold underline">
                License Key Recovery Guide
              </Link>{' '}
              first. In most cases, keys are held up in spam filters or alternate payment email addresses.
              We can reissue your active key within minutes without needing to cancel or refund your order.
            </p>
          </section>

          {/* Section 5 */}
          <section className="space-y-3">
            <h2 className="text-base font-bold text-[#182321] tracking-tight">
              5. Statutory Consumer Rights
            </h2>
            <p>
              Nothing in this Refund Policy is intended to limit, exclude, or modify any statutory consumer guarantees or rights
              that cannot be lawfully excluded under applicable national or local laws (such as statutory consumer protections in the
              European Union, United Kingdom, or Australia). Where mandatory law provides a statutory right of withdrawal or remedy for
              defective digital content, your statutory rights will prevail.
            </p>
          </section>

          {/* Section 6 */}
          <section className="space-y-3">
            <h2 className="text-base font-bold text-[#182321] tracking-tight">
              6. Processing Timelines
            </h2>
            <p>
              Upon approval, refunds are issued through Dodo Payments directly to your original payment method (credit card, debit card, or digital wallet).
              Credit card processing networks typically reflect the returned funds within 5–10 business days depending on your issuing bank.
            </p>
          </section>

          {/* Contact */}
          <div className="pt-4 border-t border-stone-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <p className="font-semibold text-stone-900 text-xs">Questions or Billing Inquiries?</p>
              <p className="text-xs text-stone-500">Contact Deepak Sheoran Support</p>
            </div>
            <a
              href={`mailto:${siteConfig.supportEmail}`}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-[#123C3A] hover:bg-[#1A5C52] rounded-lg transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#C9A84C]" />
              <span>Email Support: {siteConfig.supportEmail}</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
