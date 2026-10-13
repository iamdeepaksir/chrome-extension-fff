import React, { useState, useMemo, useEffect } from 'react';
import { useRouter } from '../router/RouterContext.tsx';
import { extensions } from '../data/extensions.ts';
import { ExtensionCard } from '../components/ExtensionCard.tsx';
import { SearchAndFilters } from '../components/SearchAndFilters.tsx';
import { SEOHead } from '../components/SEOHead.tsx';
import { siteConfig } from '../config/siteConfig.ts';
import { FolderSearch } from 'lucide-react';

export const ExtensionsPage: React.FC = () => {
  const { queryParams } = useRouter();

  const [searchQuery, setSearchQuery] = useState(() => queryParams.get('q') || '');
  const [selectedCategory, setSelectedCategory] = useState(
    () => queryParams.get('category') || 'All Categories'
  );
  const [pricingFilter, setPricingFilter] = useState<'all' | 'free' | 'paid'>('all');

  // Sync state if URL queryParams changes
  useEffect(() => {
    const q = queryParams.get('q');
    if (q !== null) setSearchQuery(q);
    const cat = queryParams.get('category');
    if (cat !== null) setSelectedCategory(cat);
  }, [queryParams]);

  const filteredExtensions = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return extensions.filter((ext) => {
      // Category match
      if (selectedCategory !== 'All Categories' && ext.category !== selectedCategory) {
        return false;
      }

      // Pricing match
      if (pricingFilter === 'free' && !ext.pricing.isFree) return false;
      if (pricingFilter === 'paid' && !ext.pricing.hasPaidTiers) return false;

      // Query search match
      if (!query) return true;

      const inName = ext.name.toLowerCase().includes(query);
      const inTagline = ext.tagline.toLowerCase().includes(query);
      const inCategory = ext.category.toLowerCase().includes(query);
      const inDesc = ext.description.toLowerCase().includes(query);
      const inFeatures = ext.features.some((f) => f.toLowerCase().includes(query));
      const inKeywords = (ext.keywords || []).some((k) => k.toLowerCase().includes(query));

      return inName || inTagline || inCategory || inDesc || inFeatures || inKeywords;
    });
  }, [searchQuery, selectedCategory, pricingFilter]);

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedCategory('All Categories');
    setPricingFilter('all');
  };

  return (
    <>
      <SEOHead
        title="All Software & Chrome Extensions"
        description="Browse the complete catalog of Chrome extensions and productivity software built by Deepak Sheoran, featuring Flow Automator."
        canonicalPath="/extensions"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14 space-y-8">
        {/* Header */}
        <div>
          <div className="text-xs font-semibold uppercase tracking-wider text-[#1A5C52] mb-1">
            Software Catalog
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#182321] tracking-tight">
            Chrome Extensions & Tools
          </h1>
          <p className="text-sm text-stone-600 mt-2 max-w-2xl">
            Explore practical browser extensions designed for seamless workflow automation and everyday productivity.
            Each tool runs strictly inside your local browser sandbox.
          </p>
        </div>

        {/* Search & Filter Controls */}
        <SearchAndFilters
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          pricingFilter={pricingFilter}
          setPricingFilter={setPricingFilter}
          onReset={handleResetFilters}
          totalCount={extensions.length}
          filteredCount={filteredExtensions.length}
        />

        {/* Extensions Grid or Empty State */}
        {filteredExtensions.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredExtensions.map((ext) => (
              <ExtensionCard key={ext.id} extension={ext} />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-xl border border-stone-200 p-12 text-center max-w-lg mx-auto space-y-4">
            <div className="w-12 h-12 rounded-full bg-stone-100 text-stone-400 flex items-center justify-center mx-auto">
              <FolderSearch className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-[#182321]">No extensions found</h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              No software matches your current search terms or filter selection. Try adjusting your query or resetting all filters.
            </p>
            <button
              onClick={handleResetFilters}
              className="inline-flex items-center px-4 py-2 text-xs font-semibold text-white bg-[#123C3A] hover:bg-[#1A5C52] rounded-lg transition-colors"
            >
              Reset All Filters
            </button>
          </div>
        )}
      </div>
    </>
  );
};
