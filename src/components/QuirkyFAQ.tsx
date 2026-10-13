'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Calendar, MapPin, Car, Shirt, Gift } from 'lucide-react';
import { FloralDividerMotif } from '@/components/Motifs';
import { finalPartyConfig } from '@/data/wedding';

interface FAQItem {
  id: number;
  question: string;
  answer?: string;
  isConsolidated?: boolean;
}

const faqs: FAQItem[] = [
  {
    id: 1,
    question: 'Everything You Need to Know',
    isConsolidated: true,
  },
  {
    id: 2,
    question: 'Where should we stay?',
    answer:
      'Guest rooms are reserved for all our guests directly at the resort. Check-in begins at 12:00 PM on 10 November. Our hospitality desk will assist you with keys and luggage upon arrival.',
  },
  {
    id: 3,
    question: 'What is the weather like?',
    answer:
      'Late November in Malshej Ghat brings pleasant breezy days (around 24°C) and crisp, cool evenings (around 16°C). We recommend carrying a light shawl, stole, or jacket for evening outdoor gatherings.',
  },
  {
    id: 4,
    question: 'Can we bring our kids?',
    answer:
      'Children are warmly welcome! We have fun activities, games, and dedicated arrangements planned to keep little ones joyful throughout the weekend.',
  },
  {
    id: 5,
    question: 'Any other helpful tips?',
    answer:
      'Comfortable footwear is recommended for lush garden lawns. Keep your cameras ready for the breathtaking mist, waterfalls, and mountain panoramas!',
  },
];

export function QuirkyFAQ() {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggle = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section
      id="faq"
      className="relative w-full min-h-[100dvh] py-16 sm:py-20 px-4 sm:px-6 bg-[#FAF6EE] text-warm-brown overflow-hidden flex flex-col justify-center items-center"
      aria-label="Frequently Asked Questions & Essential Details"
    >
      <div className="absolute inset-0 paper-texture pointer-events-none opacity-30" />

      <div className="relative z-10 max-w-md mx-auto flex flex-col items-center">
        {/* Section Header */}
        <header className="text-center mb-5 px-2 flex flex-col items-center">
          <h2 className="font-instrument font-normal text-4xl xs:text-5xl text-deep-maroon tracking-[-0.01em] leading-tight mb-1">
            Frequently Asked Questions
          </h2>
          <p className="font-satoshi text-[9.5px] sm:text-[10px] tracking-[0.22em] uppercase text-warm-brown/75 font-semibold">
            EVERYTHING YOU NEED TO PLAN YOUR TRIP.
          </p>
          <FloralDividerMotif className="w-28 h-6 mt-2" />
        </header>

        {/* Accordion List */}
        <div className="w-full space-y-2.5">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <div
                key={faq.id}
                className="rounded-2xl bg-[#FFFDF9] border border-muted-gold/25 overflow-hidden transition-all shadow-sm"
              >
                <button
                  onClick={() => toggle(faq.id)}
                  className="w-full px-5 py-4 flex items-center justify-between text-left font-instrument font-normal text-lg sm:text-xl text-deep-maroon focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className={faq.isConsolidated ? 'font-medium' : ''}>
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-deep-maroon/60 transition-transform duration-300 flex-shrink-0 ml-2 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 pt-3 border-t border-muted-gold/15">
                        {faq.isConsolidated ? (
                          /* Consolidated Essential Details Panel */
                          <div className="space-y-3.5 text-left">
                            {/* Dates */}
                            <div className="flex items-start gap-3">
                              <div className="w-7 h-7 rounded-full bg-warm-ivory flex items-center justify-center flex-shrink-0 text-deep-maroon border border-muted-gold/30 mt-0.5">
                                <Calendar className="w-3.5 h-3.5" />
                              </div>
                              <div>
                                <span className="font-satoshi font-semibold text-[11px] uppercase tracking-wider text-deep-maroon block">
                                  Dates &amp; Schedule
                                </span>
                                <span className="font-instrument italic text-sm text-warm-brown/90 leading-snug block">
                                  10 – 11 November 2026 · Four celebrations: 10th Morning (Haldi), 10th Evening (Engagement + Sundowner Sangeet), 11th (Wedding), and 11th Night ({finalPartyConfig.name}).
                                </span>
                              </div>
                            </div>

                            {/* Venue & Location */}
                            <div className="flex items-start gap-3">
                              <div className="w-7 h-7 rounded-full bg-warm-ivory flex items-center justify-center flex-shrink-0 text-deep-maroon border border-muted-gold/30 mt-0.5">
                                <MapPin className="w-3.5 h-3.5" />
                              </div>
                              <div>
                                <span className="font-satoshi font-semibold text-[11px] uppercase tracking-wider text-deep-maroon block">
                                  Venue &amp; Location
                                </span>
                                <span className="font-instrument italic text-sm text-warm-brown/90 leading-snug block">
                                  The Heritage Resort &amp; Gardens, Malshej Ghat. A scenic 3-hour drive from Mumbai and Pune.
                                </span>
                              </div>
                            </div>

                            {/* Travel & Directions */}
                            <div className="flex items-start gap-3">
                              <div className="w-7 h-7 rounded-full bg-warm-ivory flex items-center justify-center flex-shrink-0 text-deep-maroon border border-muted-gold/30 mt-0.5">
                                <Car className="w-3.5 h-3.5" />
                              </div>
                              <div>
                                <span className="font-satoshi font-semibold text-[11px] uppercase tracking-wider text-deep-maroon block">
                                  Travel &amp; Directions
                                </span>
                                <span className="font-instrument italic text-sm text-warm-brown/90 leading-snug block">
                                  Nearest airport is Mumbai (BOM) / Pune (PNQ). Valet parking is available for guests driving down.
                                </span>
                              </div>
                            </div>

                            {/* Attire Guide */}
                            <div className="flex items-start gap-3">
                              <div className="w-7 h-7 rounded-full bg-warm-ivory flex items-center justify-center flex-shrink-0 text-deep-maroon border border-muted-gold/30 mt-0.5">
                                <Shirt className="w-3.5 h-3.5" />
                              </div>
                              <div>
                                <span className="font-satoshi font-semibold text-[11px] uppercase tracking-wider text-deep-maroon block">
                                  Attire Guide
                                </span>
                                <span className="font-instrument italic text-sm text-warm-brown/90 leading-snug block">
                                  Haldi: Bright Yellows &amp; Florals · Sangeet: Indo-Western Glam · Wedding: Traditional Royal · Chill Party: Cozy Loungewear.
                                </span>
                              </div>
                            </div>

                            {/* Gifts */}
                            <div className="flex items-start gap-3">
                              <div className="w-7 h-7 rounded-full bg-warm-ivory flex items-center justify-center flex-shrink-0 text-deep-maroon border border-muted-gold/30 mt-0.5">
                                <Gift className="w-3.5 h-3.5" />
                              </div>
                              <div>
                                <span className="font-satoshi font-semibold text-[11px] uppercase tracking-wider text-deep-maroon block">
                                  Gifts
                                </span>
                                <span className="font-instrument italic text-sm text-warm-brown/90 leading-snug block">
                                  Your presence and blessings are our greatest gift. We kindly request no boxed gifts.
                                </span>
                              </div>
                            </div>
                          </div>
                        ) : (
                          /* Standard Question Answer */
                          <p className="text-warm-brown/85 font-instrument italic text-sm sm:text-base leading-relaxed text-left">
                            {faq.answer}
                          </p>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
