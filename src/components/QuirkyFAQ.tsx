'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    id: 1,
    question: 'What should I wear?',
    answer: 'Something you can dance in. We are not responsible for your heels.',
  },
  {
    id: 2,
    question: 'Will there be food?',
    answer: "It's an Indian wedding. We thought that went without saying.",
  },
  {
    id: 3,
    question: 'Can I bring a plus one?',
    answer: "If your invitation says so, absolutely. If it doesn't, please don't test us.",
  },
  {
    id: 4,
    question: 'What time should I arrive?',
    answer: 'Earlier than you think.',
  },
  {
    id: 5,
    question: 'Are we expected to dance?',
    answer: 'Expected? No. Encouraged? Very much.',
  },
];

export function QuirkyFAQ() {
  const [openId, setOpenId] = useState<number | null>(1);

  const toggle = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section
      id="faq"
      className="relative w-full py-20 px-4 sm:px-6 bg-[#FAF6EE] text-warm-brown overflow-hidden"
      aria-label="Frequently Asked Questions"
    >
      <div className="max-w-md mx-auto flex flex-col items-center">
        <header className="text-center mb-8">
          <span className="text-[10px] sm:text-[11px] font-sans font-semibold uppercase tracking-[0.25em] text-deep-maroon/70 mb-2 block">
            BEFORE YOU GO
          </span>

          <h2 className="font-display-title text-2xl xs:text-3xl sm:text-4xl font-bold text-deep-maroon tracking-tight leading-tight mb-2">
            A FEW THINGS YOU MIGHT BE WONDERING.
          </h2>
        </header>

        {/* Minimal Accordion */}
        <div className="w-full space-y-3">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="rounded-2xl bg-white/80 border border-warm-brown/10 overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggle(faq.id)}
                  className="w-full px-5 py-4 flex items-center justify-between text-left font-sans font-semibold text-deep-maroon text-sm sm:text-base"
                  aria-expanded={isOpen}
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-deep-maroon/70 shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-4 text-xs sm:text-sm font-editorial italic text-warm-brown/85 leading-relaxed border-t border-warm-brown/5 pt-2 animate-fade-in">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
