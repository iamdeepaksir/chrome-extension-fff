import React from 'react';
import { Search, X, SlidersHorizontal } from 'lucide-react';
import { extensionCategories } from '../data/extensions.ts';

interface SearchAndFiltersProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedCategory: string;
  setSelectedCategory: (cat: string) => void;
  pricingFilter: 'all' | 'free' | 'paid';
  setPricingFilter: (filter: 'all' | 'free' | 'paid') => void;
  onReset: () => void;
  totalCount: number;
  filteredCount: number;
}

export const SearchAndFilters: React.FC<SearchAndFiltersProps> = ({
  searchQuery,
  setSearchQuery,
  selectedCategory,
  setSelectedCategory,
  pricingFilter,
  setPricingFilter,
  onReset,
  totalCount,
  filteredCount,
}) => {
  const hasActiveFilters =
    searchQuery.trim() !== '' ||
    selectedCategory !== 'All Categories' ||
    pricingFilter !== 'all';

  return (
    <div className="bg-white rounded-xl border border-stone-200 p-4 sm:p-6 shadow-xs mb-8">
      {/* Search Input Bar */}
      <div className="relative mb-5">
        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-stone-400">
          <Search className="w-4 h-4" />
        </div>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search extensions by name, keyword, workflow, or capability..."
          className="w-full pl-10 pr-10 py-2.5 text-sm bg-stone-50 border border-stone-200 rounded-lg text-[#182321] placeholder-stone-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#1A5C52]/20 focus:border-[#1A5C52] transition-colors"
          aria-label="Search extensions catalog"
        />
        {searchQuery && (
          <button
            type="button"
            onClick={() => setSearchQuery('')}
            className="absolute inset-y-0 right-0 pr-3 flex items-center text-stone-400 hover:text-stone-600"
            aria-label="Clear search query"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Filter Controls Row */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        {/* Category Selector */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-semibold text-stone-500 uppercase tracking-wider flex items-center gap-1 mr-1">
            <SlidersHorizontal className="w-3.5 h-3.5 text-[#1A5C52]" />
            <span>Category:</span>
          </span>
          <div className="flex flex-wrap gap-1.5">
            {extensionCategories.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
                    isSelected
                      ? 'bg-[#123C3A] text-white shadow-xs'
                      : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Pricing Segmented Control & Reset */}
        <div className="flex items-center gap-3 pt-2 lg:pt-0 border-t lg:border-t-0 border-stone-100">
          <div className="flex items-center bg-stone-100 p-1 rounded-lg">
            <button
              onClick={() => setPricingFilter('all')}
              className={`px-3 py-1 text-xs font-medium rounded-md transition-colors ${
                pricingFilter === 'all'
                  ? 'bg-white text-[#123C3A] shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              All Tiers
            </button>
            <button
              onClick={() => setPricingFilter('free')}
              className={`px-3 py-1 text-xs font-medium rounded-md transition-colors ${
                pricingFilter === 'free'
                  ? 'bg-white text-[#123C3A] shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Free
            </button>
            <button
              onClick={() => setPricingFilter('paid')}
              className={`px-3 py-1 text-xs font-medium rounded-md transition-colors ${
                pricingFilter === 'paid'
                  ? 'bg-white text-[#123C3A] shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Pro / Paid
            </button>
          </div>

          {hasActiveFilters && (
            <button
              onClick={onReset}
              className="inline-flex items-center gap-1 text-xs font-medium text-stone-500 hover:text-[#123C3A] hover:underline"
            >
              <X className="w-3.5 h-3.5" />
              <span>Clear filters</span>
            </button>
          )}
        </div>
      </div>

      {/* Results Count Meta */}
      <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500">
        <span>
          Showing <strong className="text-stone-800 font-medium tabular-nums">{filteredCount}</strong> of{' '}
          <span className="tabular-nums">{totalCount}</span> extensions
        </span>
        {hasActiveFilters && (
          <span className="italic">Filters active</span>
        )}
      </div>
    </div>
  );
};
