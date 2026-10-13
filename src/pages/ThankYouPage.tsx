import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from '../router/RouterContext.tsx';
import { siteConfig, parseAndValidateLicenseKeys } from '../config/siteConfig.ts';
import { getExtensionBySlug } from '../data/extensions.ts';
import { SafeLicenseBox } from '../components/SafeLicenseBox.tsx';
import { SEOHead } from '../components/SEOHead.tsx';
import {
  CheckCircle2,
  Mail,
  ShieldCheck,
  HelpCircle,
  AlertTriangle,
  ArrowRight,
  ExternalLink,
} from 'lucide-react';

export const ThankYouPage: React.FC = () => {
  const { queryParams, stripSensitiveQueryParams, navigate } = useRouter();

  // State to hold safely validated keys in component memory only (never written to disk or storage)
  const [validKeys, setValidKeys] = useState<string[]>([]);
  const [associatedProductSlug, setAssociatedProductSlug] = useState<string | null>(null);
  const [hasProcessedUrl, setHasProcessedUrl] = useState<boolean>(false);

  // Guard to ensure query extraction and URL clean-up runs once upon initial render
  const processedRef = useRef<boolean>(false);

  useEffect(() => {
    if (processedRef.current) return;
    processedRef.current = true;

    // Safely extract parameters
    const rawKeyParam = queryParams.get('license_key');
    const rawProductParam = queryParams.get('product');

    if (rawProductParam) {
      setAssociatedProductSlug(rawProductParam.trim());
    }

    if (rawKeyParam) {
      // Validate format strictly (supports up to 5 comma-separated keys, no injections)
      const validated = parseAndValidateLicenseKeys(rawKeyParam);
      if (validated.length > 0) {
        setValidKeys(validated);
      }
    }

    // SECURITY: Immediately strip sensitive license_key from the visible browser address bar
    // This prevents license keys from leaking in browser history, bookmarks, or accidental shoulder surfing
    stripSensitiveQueryParams(['product']);
    setHasProcessedUrl(true);
  }, [queryParams, stripSensitiveQueryParams]);

  const targetExtension = associatedProductSlug
    ? getExtensionBySlug(associatedProductSlug)
    : null;

  const productName = targetExtension ? targetExtension.name : 'Your Extension';

  // Determine state:
  // STATE B: Valid key present
  // STATE A: Ordinary visitor or missing/invalid key
  const hasValidKeys = validKeys.length > 0;

  return (
    <>
      {/* Absolute no-index and no-follow for thank you / licensing routes */}
      <SEOHead
        title="Order Confirmation & License Instructions"
        description="Software license confirmation, activation instructions, and customer support."
        canonicalPath="/thank-you"
        noIndex={true}
      />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 space-y-8">
        {/* Main Header Card */}
        <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-10 shadow-xs text-center space-y-4">
          <div className="w-14 h-14 rounded-full bg-teal-50 text-[#1A5C52] flex items-center justify-center mx-auto mb-2">
            <CheckCircle2 className="w-8 h-8" />
          </div>

          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#182321] tracking-tight">
            Thank You for Your Order
          </h1>

          <p className="text-sm sm:text-base text-stone-600 max-w-xl mx-auto leading-relaxed">
            We appreciate your support of independent software development.
            {associatedProductSlug && targetExtension
              ? ` Below are the activation details for ${targetExtension.name}.`
              : ' Below are the activation and access instructions for your software.'}
          </p>

          <div className="pt-2 text-xs text-stone-400 font-mono">
            Merchant of Record: Dodo Payments · Creator: {siteConfig.businessOwner}
          </div>
        </div>

        {/* STATE B: LICENSE KEY PRESENT & VALIDATED */}
        {hasValidKeys ? (
          <div className="space-y-6 animate-in fade-in duration-200">
            {/* Safe License Boxes */}
            <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 shadow-xs">
              <SafeLicenseBox licenseKeys={validKeys} />
            </div>

            {/* Step-by-Step Activation Instructions */}
            <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 shadow-xs space-y-5">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#1A5C52]" />
                <h2 className="text-base font-bold text-[#182321] tracking-tight">
                  How to Activate {productName}
                </h2>
              </div>

              <div className="space-y-3 pt-1">
                <div className="flex items-start gap-3.5 text-xs sm:text-sm text-stone-700">
                  <span className="font-mono text-xs font-bold text-[#1A5C52] bg-teal-50 px-2 py-0.5 rounded-md shrink-0">
                    1
                  </span>
                  <span>
                    Open <strong>{productName}</strong> in your Chromium browser toolbar (Chrome, Brave, or Edge).
                  </span>
                </div>

                <div className="flex items-start gap-3.5 text-xs sm:text-sm text-stone-700">
                  <span className="font-mono text-xs font-bold text-[#1A5C52] bg-teal-50 px-2 py-0.5 rounded-md shrink-0">
                    2
                  </span>
                  <span>
                    Open the extension <strong>Settings</strong> or Preferences menu.
                  </span>
                </div>

                <div className="flex items-start gap-3.5 text-xs sm:text-sm text-stone-700">
                  <span className="font-mono text-xs font-bold text-[#1A5C52] bg-teal-50 px-2 py-0.5 rounded-md shrink-0">
                    3
                  </span>
                  <span>
                    Go to the <strong>Pro</strong> or <strong>License</strong> tab.
                  </span>
                </div>

                <div className="flex items-start gap-3.5 text-xs sm:text-sm text-stone-700">
                  <span className="font-mono text-xs font-bold text-[#1A5C52] bg-teal-50 px-2 py-0.5 rounded-md shrink-0">
                    4
                  </span>
                  <span>
                    Paste your copied license key into the input field.
                  </span>
                </div>

                <div className="flex items-start gap-3.5 text-xs sm:text-sm text-stone-700">
                  <span className="font-mono text-xs font-bold text-[#1A5C52] bg-teal-50 px-2 py-0.5 rounded-md shrink-0">
                    5
                  </span>
                  <span>
                    Click <strong>Activate</strong>. The extension will verify your key directly with Dodo Payments endpoints.
                  </span>
                </div>
              </div>

              {/* Crucial payment verification notice */}
              <div className="mt-6 pt-4 border-t border-stone-100 flex items-start gap-2.5 text-xs text-stone-500">
                <AlertTriangle className="w-4 h-4 text-stone-400 shrink-0 mt-0.5" />
                <p>
                  <strong>Verification Note:</strong> Display of a key parameter in this browser session is not independent proof of settled payment.
                  Final authorization is verified cryptographically by the extension connecting to official Dodo Payments licensing servers.
                </p>
              </div>
            </div>
          </div>
        ) : (
          /* STATE A: NORMAL VISITOR / NO VALID KEY PARAMETER */
          <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 shadow-xs space-y-6">
            <div className="p-4 rounded-xl bg-teal-50/60 border border-teal-100 text-sm text-[#123C3A] leading-relaxed">
              <strong className="block font-semibold mb-1">
                Your license key has been emailed to you. Please check your Spam or Junk folder.
              </strong>
              <p className="text-xs text-stone-600 mt-1">
                If you just completed a purchase through Dodo Payments, an order receipt containing your official license key was sent to your billing email address.
              </p>
            </div>

            <div className="space-y-4 pt-2">
              <h3 className="text-sm font-bold text-[#182321] uppercase tracking-wider">
                What to do next:
              </h3>
              <ul className="space-y-3 text-xs sm:text-sm text-stone-700">
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1A5C52] shrink-0 mt-2" />
                  <span>
                    <strong>Check your email inbox:</strong> Search for messages from "Dodo Payments" or "{siteConfig.businessOwner}".
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1A5C52] shrink-0 mt-2" />
                  <span>
                    <strong>Inspect Spam / Promotions:</strong> Automated delivery emails can occasionally land in promotional or junk tabs.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1A5C52] shrink-0 mt-2" />
                  <span>
                    <strong>Need assistance?</strong> If your confirmation email has not arrived after 10 minutes, contact our verified support inbox below with your checkout email address.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        )}

        {/* Central Help & Contact Support Section */}
        <div className="bg-stone-50 rounded-2xl border border-stone-200 p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="space-y-1">
            <h3 className="text-sm font-bold text-[#182321]">Need Support or Activation Help?</h3>
            <p className="text-xs text-stone-600">
              Our support team is happy to help with any key activation or billing questions.
            </p>
            <div className="pt-2">
              <a
                href={`mailto:${siteConfig.supportEmail}`}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#123C3A] hover:underline"
              >
                <Mail className="w-3.5 h-3.5 text-[#C9A84C]" />
                <span className="font-mono">{siteConfig.supportEmail}</span>
              </a>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => navigate('/help')}
              className="px-4 py-2 text-xs font-semibold text-[#123C3A] bg-white hover:bg-stone-100 border border-stone-200 rounded-lg transition-colors flex items-center gap-1.5"
            >
              <HelpCircle className="w-3.5 h-3.5 text-[#1A5C52]" />
              <span>Activation Help</span>
            </button>
            <button
              onClick={() => navigate('/extensions')}
              className="px-4 py-2 text-xs font-semibold text-white bg-[#123C3A] hover:bg-[#1A5C52] rounded-lg transition-colors flex items-center gap-1.5"
            >
              <span>Back to Catalog</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
