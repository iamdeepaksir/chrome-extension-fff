import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { ExtensionFAQ } from '../types/index.ts';

interface FAQAccordionProps {
  items: ExtensionFAQ[];
  title?: string;
}

export const FAQAccordion: React.FC<FAQAccordionProps> = ({ items, title = 'Frequently Asked Questions' }) => {
  const [openIndices, setOpenIndices] = useState<number[]>([0]); // First open by default

  const toggle = (index: number) => {
    setOpenIndices((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <div className="space-y-4">
      {title && (
        <h3 className="text-xl font-bold text-[#182321] tracking-tight mb-4">
          {title}
        </h3>
      )}
      <div className="space-y-3">
        {items.map((item, index) => {
          const isOpen = openIndices.includes(index);
          const headingId = `faq-heading-${index}`;
          const contentId = `faq-content-${index}`;

          return (
            <div
              key={index}
              className="bg-white border border-stone-200 rounded-xl overflow-hidden transition-colors"
            >
              <button
                type="button"
                id={headingId}
                aria-expanded={isOpen}
                aria-controls={contentId}
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between p-4 sm:p-5 text-left text-sm font-semibold text-[#182321] hover:text-[#123C3A] hover:bg-stone-50/50 transition-colors focus-visible:outline-2 focus-visible:outline-[#C9A84C]"
              >
                <span className="pr-4">{item.question}</span>
                <ChevronDown
                  className={`w-4 h-4 text-stone-400 shrink-0 transition-transform duration-200 ${
                    isOpen ? 'rotate-180 text-[#1A5C52]' : ''
                  }`}
                  aria-hidden="true"
                />
              </button>
              {isOpen && (
                <div
                  id={contentId}
                  role="region"
                  aria-labelledby={headingId}
                  className="px-4 pb-5 sm:px-5 sm:pb-5 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-100 pt-3"
                >
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
