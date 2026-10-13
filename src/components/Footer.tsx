import React from 'react';
import { Link } from '../router/RouterContext.tsx';
import { siteConfig } from '../config/siteConfig.ts';
import { Mail, Shield, FileText, RefreshCw, HelpCircle } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#123C3A] text-white/90 border-t border-teal-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Col */}
          <div className="md:col-span-1 space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-[#1A5C52] text-[#C9A84C] flex items-center justify-center font-mono font-bold text-sm">
                DS
              </span>
              <span className="font-bold text-lg text-white">Deepak Sheoran</span>
            </div>
            <p className="text-sm text-white/70 leading-relaxed">
              Practical, lightweight browser extensions and workflow tools crafted with strict local privacy standards.
            </p>
            <div className="pt-2 text-xs text-white/60">
              <a
                href={`mailto:${siteConfig.supportEmail}`}
                className="inline-flex items-center gap-2 hover:text-[#C9A84C] transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-[#C9A84C]" />
                <span className="font-mono">{siteConfig.supportEmail}</span>
              </a>
            </div>
          </div>

          {/* Software & Catalog */}
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#C9A84C]">
              Software Catalog
            </p>
            <ul className="space-y-2 text-sm text-white/80">
              <li>
                <Link href="/extensions" className="hover:text-white transition-colors">
                  All Extensions
                </Link>
              </li>
              <li>
                <Link href="/extensions/flow-automator" className="hover:text-white transition-colors">
                  Flow Automator (Flagship)
                </Link>
              </li>
              <li>
                <Link href="/extensions" className="hover:text-white transition-colors">
                  Productivity & Automation
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About the Developer
                </Link>
              </li>
            </ul>
          </div>

          {/* Support & Licensing */}
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#C9A84C]">
              Support & Activation
            </p>
            <ul className="space-y-2 text-sm text-white/80">
              <li>
                <Link href="/help" className="hover:text-white transition-colors inline-flex items-center gap-1.5">
                  <HelpCircle className="w-3.5 h-3.5 text-[#C9A84C]" />
                  <span>Activation & License Help</span>
                </Link>
              </li>
              <li>
                <Link href="/thank-you" className="hover:text-white transition-colors">
                  License Key Instructions
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact Support
                </Link>
              </li>
              <li>
                <Link href="/help" className="hover:text-white transition-colors">
                  Missing Key Troubleshooting
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Policies */}
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#C9A84C]">
              Compliance & Legal
            </p>
            <ul className="space-y-2 text-sm text-white/80">
              <li>
                <Link href="/privacy" className="hover:text-white transition-colors inline-flex items-center gap-1.5">
                  <Shield className="w-3.5 h-3.5 text-[#C9A84C]" />
                  <span>Privacy Policy</span>
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white transition-colors inline-flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5 text-[#C9A84C]" />
                  <span>Terms & Conditions</span>
                </Link>
              </li>
              <li>
                <Link href="/refund" className="hover:text-white transition-colors inline-flex items-center gap-1.5">
                  <RefreshCw className="w-3.5 h-3.5 text-[#C9A84C]" />
                  <span>Refund Policy</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-teal-900/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60">
          <div>
            © {currentYear} {siteConfig.businessOwner}. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span>Chrome Web Store Manifest V3 Compliant</span>
            <span aria-hidden="true">·</span>
            <span>Local Browser Sandbox Execution</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
