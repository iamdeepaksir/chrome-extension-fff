import React from 'react';
import { SEOHead } from '../components/SEOHead.tsx';
import { siteConfig } from '../config/siteConfig.ts';
import { Link } from '../router/RouterContext.tsx';
import {
  Key,
  Mail,
  HelpCircle,
  AlertCircle,
  RefreshCw,
  XCircle,
  ShieldCheck,
  ArrowRight,
} from 'lucide-react';

export const HelpPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Help & License Activation Guide"
        description="Comprehensive troubleshooting guide: missing license keys, activation steps, device management, subscription cancellations, and support."
        canonicalPath="/help"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16 space-y-12">
        {/* Header */}
        <div className="space-y-3">
          <div className="text-xs font-semibold uppercase tracking-wider text-[#1A5C52]">
            Support & Documentation
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#182321] tracking-tight">
            Help Center & Activation Guide
          </h1>
          <p className="text-sm sm:text-base text-stone-600 leading-relaxed max-w-2xl">
            Step-by-step instructions for license activation, missing email recovery, subscription management, and common technical questions.
          </p>
        </div>

        {/* Quick Jump Navigation */}
        <div className="bg-white rounded-xl border border-stone-200 p-4 sm:p-5 flex flex-wrap gap-2 text-xs font-medium text-stone-600">
          <a href="#missing-key" className="px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-stone-200 hover:text-stone-900 transition-colors">
            1. Missing License Key
          </a>
          <a href="#activation-steps" className="px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-stone-200 hover:text-stone-900 transition-colors">
            2. Activating in Extension
          </a>
          <a href="#troubleshooting" className="px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-stone-200 hover:text-stone-900 transition-colors">
            3. Activation Errors
          </a>
          <a href="#devices" className="px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-stone-200 hover:text-stone-900 transition-colors">
            4. Multiple Devices
          </a>
          <a href="#cancellations" className="px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-stone-200 hover:text-stone-900 transition-colors">
            5. Subscription Cancellation
          </a>
          <a href="#refunds" className="px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-stone-200 hover:text-stone-900 transition-colors">
            6. Refund Requests
          </a>
        </div>

        {/* Section 1: Missing License Key */}
        <section id="missing-key" className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 space-y-4">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-teal-50 text-[#1A5C52] flex items-center justify-center">
              <Mail className="w-4 h-4 text-[#C9A84C]" />
            </div>
            <h2 className="text-lg font-bold text-[#182321] tracking-tight">
              1. Finding a Missing License Key Email
            </h2>
          </div>

          <div className="space-y-3 text-xs sm:text-sm text-stone-700 leading-relaxed">
            <p>
              When purchasing a Pro license through Dodo Payments, your order confirmation receipt containing your license key is dispatched automatically to the billing email address entered during checkout.
            </p>

            <div className="bg-stone-50 p-4 rounded-xl border border-stone-200 space-y-2">
              <strong className="block text-stone-800">Troubleshooting Steps:</strong>
              <ul className="list-disc pl-4 space-y-1 text-stone-600">
                <li>
                  <strong>Check Spam & Promotions:</strong> Search your email provider for "Dodo Payments" or "{siteConfig.businessOwner}".
                </li>
                <li>
                  <strong>Verify Email Address:</strong> Confirm whether Apple Pay, Google Pay, or PayPal automatically used an alternate email address associated with your payment wallet.
                </li>
                <li>
                  <strong>Allow Up to 10 Minutes:</strong> Payment webhook notifications occasionally take a few moments during high banking network traffic.
                </li>
                <li>
                  <strong>Still Missing?</strong> Email <a href={`mailto:${siteConfig.supportEmail}`} className="font-mono text-[#123C3A] font-semibold underline">{siteConfig.supportEmail}</a> with your purchase date and approximate time, and we will locate your order receipt.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 2: Activating in Extension */}
        <section id="activation-steps" className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 space-y-4">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-teal-50 text-[#1A5C52] flex items-center justify-center">
              <Key className="w-4 h-4 text-[#C9A84C]" />
            </div>
            <h2 className="text-lg font-bold text-[#182321] tracking-tight">
              2. How to Paste and Activate a License Key
            </h2>
          </div>

          <div className="space-y-3 text-xs sm:text-sm text-stone-700 leading-relaxed">
            <p>
              Follow these simple steps inside your browser:
            </p>
            <ol className="list-decimal pl-5 space-y-2 text-stone-700">
              <li>
                <strong>Copy Your Key:</strong> Copy the license key string from your order email or from the secure confirmation page.
              </li>
              <li>
                <strong>Open Extension Popup:</strong> Click the extension icon (such as Flow Automator) in your browser top bar.
              </li>
              <li>
                <strong>Access Settings:</strong> Click the Settings gear icon in the extension interface.
              </li>
              <li>
                <strong>Go to the Pro / License Section:</strong> Select the "License" or "Pro" tab.
              </li>
              <li>
                <strong>Paste & Click Activate:</strong> Paste your key into the text field and click <strong>Activate</strong>.
              </li>
              <li>
                <strong>Confirmation:</strong> The extension will query the licensing endpoint and unlock Pro features immediately.
              </li>
            </ol>
          </div>
        </section>

        {/* Section 3: Activation Errors */}
        <section id="troubleshooting" className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 space-y-4">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center">
              <AlertCircle className="w-4 h-4" />
            </div>
            <h2 className="text-lg font-bold text-[#182321] tracking-tight">
              3. Troubleshooting Activation Errors
            </h2>
          </div>

          <div className="space-y-3 text-xs sm:text-sm text-stone-700 leading-relaxed">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
                <h3 className="font-bold text-[#182321] text-xs uppercase mb-1">
                  "Invalid License Key"
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Ensure no accidental leading or trailing spaces were selected when copying. Re-copy the clean key directly.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
                <h3 className="font-bold text-[#182321] text-xs uppercase mb-1">
                  "Network Error / Unreachable"
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Check if an aggressive ad-blocker or strict corporate firewall is blocking secure HTTPS calls to the Dodo Payments API.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
                <h3 className="font-bold text-[#182321] text-xs uppercase mb-1">
                  "Seat Limit Exceeded"
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  If you have already activated the key on multiple computers or profiles, deactivate an unused machine before activating a new one.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
                <h3 className="font-bold text-[#182321] text-xs uppercase mb-1">
                  "License Expired or Cancelled"
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  For monthly or yearly subscriptions, check that your recurring payment on file did not encounter an expired card.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Device Management & Deactivation */}
        <section id="devices" className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 space-y-4">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-teal-50 text-[#1A5C52] flex items-center justify-center">
              <ShieldCheck className="w-4 h-4 text-[#C9A84C]" />
            </div>
            <h2 className="text-lg font-bold text-[#182321] tracking-tight">
              4. Deactivating a Device or Moving Computers
            </h2>
          </div>

          <div className="space-y-3 text-xs sm:text-sm text-stone-700 leading-relaxed">
            <p>
              Pro licenses typically allow activation on up to 3 personal devices for the same user.
            </p>
            <p>
              To transfer your license to a new workstation:
            </p>
            <ul className="list-disc pl-4 space-y-1 text-stone-600">
              <li>Open Settings &gt; License on your old browser and click <strong>Deactivate</strong>.</li>
              <li>Install the extension on your new machine and paste the license key.</li>
              <li>If your old machine is broken or formatted, contact <span className="font-mono text-stone-800">{siteConfig.supportEmail}</span> to perform a manual seat reset.</li>
            </ul>
          </div>
        </section>

        {/* Section 5: Subscription Cancellation */}
        <section id="cancellations" className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 space-y-4">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-teal-50 text-[#1A5C52] flex items-center justify-center">
              <XCircle className="w-4 h-4 text-[#C9A84C]" />
            </div>
            <h2 className="text-lg font-bold text-[#182321] tracking-tight">
              5. Finding Subscription Cancellation Instructions
            </h2>
          </div>

          <div className="space-y-3 text-xs sm:text-sm text-stone-700 leading-relaxed">
            <p>
              You can cancel recurring monthly or yearly subscriptions at any time with no penalties.
            </p>
            <ul className="list-disc pl-4 space-y-1 text-stone-600">
              <li>
                <strong>Via Your Receipt Email:</strong> Every invoice email from Dodo Payments includes a direct self-service link to "Manage Subscription" or "Cancel Subscription".
              </li>
              <li>
                <strong>Access Period:</strong> Upon cancellation, your Pro features remain active until the end of your current paid billing period.
              </li>
              <li>
                <strong>Via Support:</strong> You may also email <span className="font-mono text-stone-800">{siteConfig.supportEmail}</span> at least 24 hours before your renewal date requesting cancellation.
              </li>
            </ul>
          </div>
        </section>

        {/* Section 6: Refund Requests */}
        <section id="refunds" className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 space-y-4">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-teal-50 text-[#1A5C52] flex items-center justify-center">
              <RefreshCw className="w-4 h-4 text-[#C9A84C]" />
            </div>
            <h2 className="text-lg font-bold text-[#182321] tracking-tight">
              6. Submitting a Refund Request
            </h2>
          </div>

          <div className="space-y-3 text-xs sm:text-sm text-stone-700 leading-relaxed">
            <p>
              If a product did not meet your expectations or encountered an irreconcilable technical bug, please review our official Refund Policy.
            </p>
            <p>
              Every refund inquiry is reviewed personally to ensure fair treatment in accordance with applicable consumer laws.
            </p>
            <div className="pt-2">
              <Link
                href="/refund"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#123C3A] hover:underline"
              >
                <span>Read Full Refund Policy & Submission Requirements</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
