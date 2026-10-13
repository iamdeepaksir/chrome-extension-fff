import React, { useState } from 'react';
import { SEOHead } from '../components/SEOHead.tsx';
import { siteConfig } from '../config/siteConfig.ts';
import { Mail, Clock, HelpCircle, MessageSquare, Check, ArrowRight } from 'lucide-react';
import { useRouter } from '../router/RouterContext.tsx';

export const ContactPage: React.FC = () => {
  const { navigate } = useRouter();
  const [selectedTopic, setSelectedTopic] = useState('License Key & Activation');
  const [userEmail, setUserEmail] = useState('');
  const [orderReference, setOrderReference] = useState('');
  const [message, setMessage] = useState('');
  const [copied, setCopied] = useState(false);

  const topics = [
    'License Key & Activation',
    'Flow Automator Setup',
    'Refund or Billing Inquiry',
    'Feature Suggestion',
    'Bug Report',
    'General Inquiry',
  ];

  const handleCopyEmail = async () => {
    try {
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(siteConfig.supportEmail);
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
      }
    } catch {
      // Fallback
    }
  };

  const mailtoSubject = encodeURIComponent(`[${selectedTopic}] Support Request from ${userEmail || 'Customer'}`);
  const mailtoBody = encodeURIComponent(
    `Product/Topic: ${selectedTopic}\nOrder Reference (if applicable): ${orderReference || 'N/A'}\n\nDetails:\n${message || 'Please describe your request here...'}`
  );
  const mailtoLink = `mailto:${siteConfig.supportEmail}?subject=${mailtoSubject}&body=${mailtoBody}`;

  return (
    <>
      <SEOHead
        title="Contact & Customer Support"
        description={`Contact ${siteConfig.businessOwner} for extension support, license key recovery, and technical assistance.`}
        canonicalPath="/contact"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16 space-y-10">
        <div>
          <div className="text-xs font-semibold uppercase tracking-wider text-[#1A5C52] mb-1">
            Get in Touch
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#182321] tracking-tight">
            Customer Support & Inquiries
          </h1>
          <p className="text-sm sm:text-base text-stone-600 mt-2 max-w-2xl leading-relaxed">
            Have questions regarding an extension, need help activating your Pro license, or experiencing an issue?
            Reach out directly via email.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Email Card & Information */}
          <div className="md:col-span-1 space-y-6">
            <div className="bg-white rounded-xl border border-stone-200 p-6 space-y-4">
              <div className="w-10 h-10 rounded-lg bg-teal-50 text-[#1A5C52] flex items-center justify-center">
                <Mail className="w-5 h-5 text-[#C9A84C]" />
              </div>
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-wider text-stone-500">
                  Official Support Email
                </h3>
                <a
                  href={`mailto:${siteConfig.supportEmail}`}
                  className="font-mono text-sm font-bold text-[#123C3A] hover:text-[#1A5C52] break-all block mt-1"
                >
                  {siteConfig.supportEmail}
                </a>
              </div>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-semibold text-stone-700 bg-stone-50 hover:bg-stone-100 border border-stone-200 rounded-lg transition-colors"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Mail className="w-3.5 h-3.5 text-[#1A5C52]" />}
                <span>{copied ? 'Copied to Clipboard' : 'Copy Email Address'}</span>
              </button>
            </div>

            <div className="bg-white rounded-xl border border-stone-200 p-6 space-y-3">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-stone-500">
                <Clock className="w-4 h-4 text-[#1A5C52]" />
                <span>Response Times</span>
              </div>
              <p className="text-xs text-stone-600 leading-relaxed">
                Inquiries are typically reviewed by {siteConfig.businessOwner} within 1–2 business days. Please include your order or license email if asking about a purchase.
              </p>
            </div>

            <div className="bg-stone-50 rounded-xl border border-stone-200 p-5 space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-[#182321]">
                <HelpCircle className="w-4 h-4 text-[#C9A84C]" />
                <span>Lost your license key?</span>
              </div>
              <p className="text-xs text-stone-600">
                Check our activation and license recovery guide before submitting a ticket.
              </p>
              <button
                onClick={() => navigate('/help')}
                className="text-xs font-semibold text-[#123C3A] hover:underline inline-flex items-center gap-1 mt-1"
              >
                <span>Go to Help Center</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>

          {/* Structured Email Composer Helper */}
          <div className="md:col-span-2 bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 space-y-6">
            <div className="flex items-center gap-2 pb-2 border-b border-stone-100">
              <MessageSquare className="w-5 h-5 text-[#1A5C52]" />
              <h2 className="text-base font-bold text-[#182321]">
                Prepare Your Support Request
              </h2>
            </div>
            <p className="text-xs text-stone-600 leading-relaxed">
              Use this helper to draft your inquiry with all relevant context, then click "Open in Email Client" to send directly to <span className="font-mono text-stone-800">{siteConfig.supportEmail}</span>.
            </p>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1.5">
                  Inquiry Topic
                </label>
                <select
                  value={selectedTopic}
                  onChange={(e) => setSelectedTopic(e.target.value)}
                  className="w-full p-2.5 text-xs bg-stone-50 border border-stone-200 rounded-lg text-[#182321] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#1A5C52]/20"
                >
                  {topics.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1.5">
                  Your Purchase / Contact Email (optional)
                </label>
                <input
                  type="email"
                  value={userEmail}
                  onChange={(e) => setUserEmail(e.target.value)}
                  placeholder="e.g. name@example.com"
                  className="w-full p-2.5 text-xs bg-stone-50 border border-stone-200 rounded-lg text-[#182321] placeholder-stone-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#1A5C52]/20"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1.5">
                  Order or Transaction Reference (if applicable)
                </label>
                <input
                  type="text"
                  value={orderReference}
                  onChange={(e) => setOrderReference(e.target.value)}
                  placeholder="e.g. Dodo Payments order number or invoice ID"
                  className="w-full p-2.5 text-xs bg-stone-50 border border-stone-200 rounded-lg text-[#182321] placeholder-stone-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#1A5C52]/20"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1.5">
                  Details / Message
                </label>
                <textarea
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Please describe the issue, extension name, browser version, or question..."
                  className="w-full p-2.5 text-xs bg-stone-50 border border-stone-200 rounded-lg text-[#182321] placeholder-stone-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#1A5C52]/20"
                />
              </div>

              <div className="pt-2">
                <a
                  href={mailtoLink}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 text-xs font-bold text-white bg-[#123C3A] hover:bg-[#1A5C52] active:bg-[#123C3A] rounded-xl transition-colors shadow-xs"
                >
                  <Mail className="w-4 h-4 text-[#C9A84C]" />
                  <span>Send via Email to {siteConfig.supportEmail}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
