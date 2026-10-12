'use client';

import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { KolamMotif, BandhaniMotif } from '@/components/Motifs';

export function BaraatWedding() {
  const containerRef = useRef<HTMLElement>(null);
  const baraatTextRef = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={containerRef}
      id="wedding-ceremony"
      className="relative min-h-screen w-full bg-[#FFF9F2] text-warm-brown flex flex-col items-center justify-center py-16 sm:py-24 px-4 sm:px-6 overflow-hidden"
      aria-label="The Auspicious Wedding and Cultural Fusion"
    >
      {/* 1. Header: The Wedding Ceremony */}
      <header
        ref={baraatTextRef}
        className="relative z-20 flex flex-col items-center text-center max-w-md mx-auto mb-6 px-2"
      >
        <h2 className="font-instrument font-normal text-3xl xs:text-4xl sm:text-5xl text-deep-maroon tracking-[-0.02em] leading-tight mb-2">
          The Wedding Ceremony
        </h2>

        <p className="font-instrument italic text-base sm:text-lg text-warm-brown/85 leading-snug max-w-sm mb-2">
          Sacred rituals, joyous celebrations, and one lifetime together.
        </p>

        <p className="font-satoshi text-[11px] sm:text-xs tracking-[0.15em] uppercase text-warm-brown/70 font-medium">
          Sunday, 23 Nov · 9:30 AM · Temple Mandap by the Lake
        </p>
      </header>

      {/* 2. Visual Centerpiece: Sacred Lakeside Mandap Frame */}
      <main className="relative z-10 w-full max-w-[420px] flex flex-col items-center justify-center my-2">
        <div className="relative w-full aspect-[4/5] max-h-[460px] rounded-3xl overflow-hidden shadow-2xl border border-muted-gold/30 bg-soft-cream">
          <Image
            src="/images/cultural-wedding-bg.jpg"
            alt="Sacred Mandap by Udaipur Lake"
            fill
            sizes="(max-width: 640px) 94vw, 420px"
            className="object-cover object-center select-none"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-deep-maroon/40 via-transparent to-transparent pointer-events-none" />
        </div>

        {/* Minimal Editorial Reflection with ample breathing room */}
        <p className="font-instrument italic text-base sm:text-lg text-deep-maroon/85 mt-6 text-center leading-relaxed max-w-sm px-4">
          &ldquo;Surrounded by family, blessings, and forever.&rdquo;
        </p>
      </main>
    </section>
  );
}
