'use client';

import React from 'react';
import { FloralDividerMotif } from '@/components/Motifs';
import { finalPartyConfig } from '@/data/wedding';

export function WeekendIntro() {
  return (
    <section
      id="wedding-weekend-intro"
      className="relative w-full py-12 sm:py-16 px-4 sm:px-6 flex flex-col items-center justify-center text-center bg-warm-ivory text-warm-brown overflow-hidden border-b border-muted-gold/20"
      aria-label="Wedding Weekend Introduction"
    >
      <div className="absolute inset-0 paper-texture pointer-events-none opacity-30" />

      <div className="relative z-10 max-w-xl mx-auto flex flex-col items-center">
        {/* Masthead Label */}
        <span className="font-satoshi text-[9.5px] sm:text-[10.5px] tracking-[0.26em] uppercase text-deep-maroon/80 font-bold mb-1">
          CELEBRATIONS ITINERARY
        </span>

        {/* Primary Statement */}
        <h2 className="font-instrument font-normal text-4xl xs:text-5xl sm:text-6xl text-deep-maroon tracking-[-0.01em] leading-tight mb-1">
          The Wedding Weekend
        </h2>

        {/* Subtitle */}
        <p className="font-script text-2xl sm:text-3xl text-deep-maroon leading-snug mb-2">
          Four celebrations · One unforgettable journey
        </p>

        {/* Floral Divider Motif */}
        <FloralDividerMotif className="w-28 h-6 mb-3" />

        {/* Heritage Union Badge */}
        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-deep-maroon/5 border border-deep-maroon/15 text-[10px] text-deep-maroon font-medium tracking-wide mb-3">
          <span>Gujarati Traditions</span>
          <span className="text-muted-gold font-bold">✕</span>
          <span>Tamil Heritage</span>
        </div>

        {/* Four Celebrations Quick Ribbon */}
        <div className="flex flex-wrap items-center justify-center gap-x-3.5 gap-y-1.5 font-instrument italic text-lg sm:text-xl text-deep-maroon/90 text-center">
          <span>Haldi</span>
          <span className="text-muted-gold/60 select-none">·</span>
          <span>Sangeet</span>
          <span className="text-muted-gold/60 select-none">·</span>
          <span>Wedding</span>
          <span className="text-muted-gold/60 select-none">·</span>
          <span>{finalPartyConfig.name}</span>
        </div>
      </div>
    </section>
  );
}
