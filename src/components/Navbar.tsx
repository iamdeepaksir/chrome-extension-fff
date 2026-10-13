import React, { useState, useEffect } from 'react';
import { Link, useRouter } from '../router/RouterContext.tsx';
import { siteConfig } from '../config/siteConfig.ts';
import { Menu, X, Search } from 'lucide-react';

export const Navbar: React.FC = () => {
  const { currentPath, navigate } = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [currentPath]);

  // Handle escape key to close menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-18">
          {/* Zone 1: Brand Wordmark (Single clean text element in display face) */}
          <Link
            href="/"
            className="flex items-center gap-3 text-lg font-bold tracking-tight text-[#123C3A] hover:text-[#1A5C52] transition-colors whitespace-nowrap shrink-0"
            aria-label="Deepak Sheoran Software & Extensions Home"
          >
            <span className="w-8 h-8 rounded-lg bg-[#123C3A] text-[#C9A84C] flex items-center justify-center font-mono font-bold text-sm shadow-xs">
              DS
            </span>
            <span className="font-semibold text-base sm:text-lg">Deepak Sheoran</span>
          </Link>

          {/* Zone 2: 4-5 Clean, single-line text navigation links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-[#182321]/80" aria-label="Main Navigation">
            <Link
              href="/"
              className={`hover:text-[#123C3A] transition-colors whitespace-nowrap shrink-0 py-1 ${
                currentPath === '/' ? 'text-[#123C3A] font-semibold border-b-2 border-[#C9A84C]' : ''
              }`}
            >
              Home
            </Link>
            <Link
              href="/extensions"
              className={`hover:text-[#123C3A] transition-colors whitespace-nowrap shrink-0 py-1 ${
                currentPath === '/extensions' ? 'text-[#123C3A] font-semibold border-b-2 border-[#C9A84C]' : ''
              }`}
            >
              Extensions
            </Link>
            <Link
              href="/about"
              className={`hover:text-[#123C3A] transition-colors whitespace-nowrap shrink-0 py-1 ${
                currentPath === '/about' ? 'text-[#123C3A] font-semibold border-b-2 border-[#C9A84C]' : ''
              }`}
            >
              About
            </Link>
            <Link
              href="/help"
              className={`hover:text-[#123C3A] transition-colors whitespace-nowrap shrink-0 py-1 ${
                currentPath === '/help' ? 'text-[#123C3A] font-semibold border-b-2 border-[#C9A84C]' : ''
              }`}
            >
              Help & Support
            </Link>
          </nav>

          {/* Zone 3: 1 Primary Action */}
          <div className="hidden md:flex items-center gap-3 shrink-0">
            <button
              onClick={() => navigate('/extensions')}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-[#123C3A] hover:bg-[#1A5C52] active:bg-[#123C3A] rounded-lg transition-colors shadow-xs whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C9A84C]"
            >
              <Search className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Browse Extensions</span>
            </button>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#182321] hover:text-[#123C3A] hover:bg-stone-100 rounded-lg focus-visible:outline-2 focus-visible:outline-[#C9A84C]"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-stone-200 bg-white px-4 pt-3 pb-6 shadow-lg animate-in slide-in-from-top-2 duration-150">
          <nav className="flex flex-col gap-3 py-2 text-base font-medium text-[#182321]" aria-label="Mobile Navigation">
            <Link
              href="/"
              className={`px-3 py-2 rounded-md hover:bg-stone-50 ${currentPath === '/' ? 'text-[#123C3A] font-semibold bg-stone-50' : ''}`}
            >
              Home
            </Link>
            <Link
              href="/extensions"
              className={`px-3 py-2 rounded-md hover:bg-stone-50 ${currentPath === '/extensions' ? 'text-[#123C3A] font-semibold bg-stone-50' : ''}`}
            >
              All Extensions
            </Link>
            <Link
              href="/about"
              className={`px-3 py-2 rounded-md hover:bg-stone-50 ${currentPath === '/about' ? 'text-[#123C3A] font-semibold bg-stone-50' : ''}`}
            >
              About Deepak Sheoran
            </Link>
            <Link
              href="/help"
              className={`px-3 py-2 rounded-md hover:bg-stone-50 ${currentPath === '/help' ? 'text-[#123C3A] font-semibold bg-stone-50' : ''}`}
            >
              Help & Activation
            </Link>
            <Link
              href="/contact"
              className={`px-3 py-2 rounded-md hover:bg-stone-50 ${currentPath === '/contact' ? 'text-[#123C3A] font-semibold bg-stone-50' : ''}`}
            >
              Contact Support
            </Link>
          </nav>

          <div className="pt-4 border-t border-stone-100">
            <button
              onClick={() => {
                navigate('/extensions');
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 text-sm font-semibold text-white bg-[#123C3A] hover:bg-[#1A5C52] rounded-lg shadow-xs"
            >
              <Search className="w-4 h-4" />
              Browse Extension Directory
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
