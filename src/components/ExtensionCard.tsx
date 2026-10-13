import React from 'react';
import { ExtensionItem } from '../types/index.ts';
import { Link, useRouter } from '../router/RouterContext.tsx';
import { ArrowRight, Download, Check, Clock, Cpu } from 'lucide-react';

interface ExtensionCardProps {
  extension: ExtensionItem;
}

export const ExtensionCard: React.FC<ExtensionCardProps> = ({ extension }) => {
  const { navigate } = useRouter();

  // Status text formatting
  const statusLabel =
    extension.status === 'published'
      ? 'Available on Chrome Web Store'
      : extension.status === 'coming_soon'
      ? 'Coming Soon / In Review'
      : 'Preview Version';

  return (
    <article className="group flex flex-col justify-between bg-white rounded-xl border border-stone-200 p-6 shadow-xs hover:border-[#1A5C52]/40 hover:shadow-md transition-all duration-200">
      <div>
        {/* Top Unboxed Metadata Header (Zero-Pill Discipline) */}
        <div className="flex items-center justify-between text-xs text-stone-500 mb-4 pb-3 border-b border-stone-100">
          <div className="flex items-center gap-2">
            <span className="font-medium text-[#1A5C52]">{extension.category}</span>
            <span aria-hidden="true">·</span>
            <span>{extension.platforms.join(', ')}</span>
          </div>
          {extension.version && (
            <span className="font-mono text-stone-400">v{extension.version}</span>
          )}
        </div>

        {/* Product Identity */}
        <div className="flex items-start gap-4 mb-3">
          <div className="w-12 h-12 rounded-xl bg-[#123C3A] text-[#C9A84C] flex items-center justify-center shrink-0 shadow-xs">
            <Cpu className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-[#182321] group-hover:text-[#123C3A] transition-colors">
              <Link href={`/extensions/${extension.slug}`} className="hover:underline">
                {extension.name}
              </Link>
            </h3>
            <p className="text-xs text-stone-600 line-clamp-1">{extension.tagline}</p>
          </div>
        </div>

        {/* Short Description */}
        <p className="text-sm text-stone-600 mb-5 leading-relaxed line-clamp-3">
          {extension.shortDescription}
        </p>

        {/* Key Features preview (First 3) */}
        <div className="mb-6 space-y-2">
          {extension.features.slice(0, 3).map((feature, idx) => (
            <div key={idx} className="flex items-start gap-2 text-xs text-stone-700">
              <Check className="w-3.5 h-3.5 text-[#1A5C52] shrink-0 mt-0.5" />
              <span className="line-clamp-1">{feature}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Card Actions & Official Status */}
      <div className="pt-4 border-t border-stone-100 flex flex-col gap-3">
        {/* Unboxed Status Indicator */}
        <div className="flex items-center gap-1.5 text-xs text-stone-500">
          <Clock className="w-3.5 h-3.5 text-[#C9A84C]" />
          <span>{statusLabel}</span>
        </div>

        <div className="flex items-center gap-2 pt-1">
          {/* Download Button (Only enabled if officialDownloadUrl is verified and present) */}
          {extension.officialDownloadUrl ? (
            <a
              href={extension.officialDownloadUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 text-xs font-semibold text-white bg-[#123C3A] hover:bg-[#1A5C52] rounded-lg transition-colors shadow-xs"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Install Extension</span>
            </a>
          ) : (
            <button
              disabled
              title="Official Chrome Web Store package is currently undergoing submission review"
              className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 text-xs font-semibold text-stone-400 bg-stone-100 rounded-lg cursor-not-allowed border border-stone-200"
            >
              <Clock className="w-3.5 h-3.5 text-stone-400" />
              <span>Not Yet Available</span>
            </button>
          )}

          {/* Learn More Button */}
          <button
            onClick={() => navigate(`/extensions/${extension.slug}`)}
            className="inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-semibold text-[#123C3A] bg-stone-50 hover:bg-stone-100 border border-stone-200 rounded-lg transition-colors whitespace-nowrap"
          >
            <span>Learn More</span>
            <ArrowRight className="w-3 h-3 text-stone-400 group-hover:text-[#123C3A] group-hover:translate-x-0.5 transition-all" />
          </button>
        </div>
      </div>
    </article>
  );
};
