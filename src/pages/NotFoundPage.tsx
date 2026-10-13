import React from 'react';
import { SEOHead } from '../components/SEOHead.tsx';
import { useRouter } from '../router/RouterContext.tsx';
import { ArrowLeft, Home, Search } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  const { navigate } = useRouter();

  return (
    <>
      <SEOHead
        title="Page Not Found (404)"
        description="The requested page or extension could not be found."
        noIndex={true}
      />

      <div className="max-w-xl mx-auto px-4 py-20 text-center space-y-6">
        <div className="w-16 h-16 rounded-2xl bg-teal-50 text-[#1A5C52] flex items-center justify-center mx-auto">
          <span className="font-mono text-xl font-bold">404</span>
        </div>

        <div className="space-y-2">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#182321] tracking-tight">
            Page Not Found
          </h1>
          <p className="text-sm text-stone-600 leading-relaxed">
            The link you followed may be incorrect, outdated, or the extension record may have been relocated.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-[#123C3A] hover:bg-[#1A5C52] rounded-lg transition-colors"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Go to Homepage</span>
          </button>
          <button
            onClick={() => navigate('/extensions')}
            className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-[#123C3A] bg-white hover:bg-stone-50 border border-stone-200 rounded-lg transition-colors"
          >
            <Search className="w-3.5 h-3.5" />
            <span>Browse Extensions</span>
          </button>
        </div>
      </div>
    </>
  );
};
