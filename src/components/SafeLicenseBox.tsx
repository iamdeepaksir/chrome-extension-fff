import React, { useState } from 'react';
import { Copy, Check, ShieldAlert, Key } from 'lucide-react';

interface SafeLicenseBoxProps {
  licenseKeys: string[];
}

export const SafeLicenseBox: React.FC<SafeLicenseBoxProps> = ({ licenseKeys }) => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [copyError, setCopyError] = useState<string | null>(null);

  const handleCopy = async (keyText: string, index: number) => {
    setCopyError(null);
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(keyText);
        setCopiedIndex(index);
        setTimeout(() => setCopiedIndex(null), 3000);
      } else {
        // Fallback for older or restricted environments
        const textArea = document.createElement('textarea');
        textArea.value = keyText;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        textArea.style.top = '-999999px';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        const successful = document.execCommand('copy');
        document.body.removeChild(textArea);
        if (successful) {
          setCopiedIndex(index);
          setTimeout(() => setCopiedIndex(null), 3000);
        } else {
          setCopyError('Unable to copy automatically. Please select and copy the text manually.');
        }
      }
    } catch {
      setCopyError('Clipboard access denied. Please select and copy the key manually.');
    }
  };

  if (!licenseKeys || licenseKeys.length === 0) {
    return null;
  }

  return (
    <div className="space-y-4 my-6">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold uppercase tracking-wider text-[#123C3A] flex items-center gap-2">
          <Key className="w-4 h-4 text-[#C9A84C]" />
          <span>
            {licenseKeys.length === 1 ? 'Your Product License Key' : `Your Product License Keys (${licenseKeys.length})`}
          </span>
        </h3>
        <span className="text-xs text-stone-500 font-mono">Dodo Payments License Delivery</span>
      </div>

      {licenseKeys.map((key, index) => (
        <div
          key={index}
          className="bg-white border-2 border-[#1A5C52]/30 rounded-xl p-4 sm:p-5 shadow-xs hover:border-[#1A5C52] transition-colors"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex-1 min-w-0">
              <span className="text-xs font-semibold text-stone-500 block mb-1">
                {licenseKeys.length > 1 ? `License Seat #${index + 1}` : 'License Code'}
              </span>
              {/* Safe rendering using React text node (pure textContent equivalent) */}
              <div
                className="font-mono text-sm sm:text-base font-bold text-[#123C3A] bg-stone-50 py-2.5 px-3.5 rounded-lg border border-stone-200 select-all break-all tracking-wide"
                tabIndex={0}
                aria-label={`License key ${index + 1}`}
              >
                {key}
              </div>
            </div>

            <button
              type="button"
              onClick={() => handleCopy(key, index)}
              className={`inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-xs font-bold transition-all shadow-xs shrink-0 ${
                copiedIndex === index
                  ? 'bg-emerald-600 text-white'
                  : 'bg-[#123C3A] hover:bg-[#1A5C52] active:bg-[#123C3A] text-white'
              }`}
              aria-label={`Copy license key ${index + 1} to clipboard`}
            >
              {copiedIndex === index ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-[#C9A84C]" />
                  <span>Copy Key</span>
                </>
              )}
            </button>
          </div>
        </div>
      ))}

      {copyError && (
        <p className="text-xs text-amber-700 bg-amber-50 p-2.5 rounded-lg border border-amber-200">
          {copyError}
        </p>
      )}

      {/* Security and Confidentiality Warning */}
      <div className="bg-amber-50/70 border border-amber-200 rounded-lg p-3.5 flex items-start gap-3 text-xs text-amber-900">
        <ShieldAlert className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
        <div className="space-y-1">
          <p className="font-semibold">Confidential License Key Notice</p>
          <p className="text-amber-800 leading-relaxed">
            Do not share, publish, or redistribute this license key. Each key is tied to your authorized purchase seats.
            License validation is verified cryptographically by the extension via Dodo Payments official endpoints upon activation.
          </p>
        </div>
      </div>
    </div>
  );
};
