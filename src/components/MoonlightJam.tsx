'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { finalPartyConfig } from '@/data/wedding';

export function MoonlightJam() {
  const containerRef = useRef<HTMLElement>(null);

  return (
    <section
      ref={containerRef}
      id="moonlight-jam"
      className="relative w-full bg-[#181116] text-warm-ivory flex flex-col items-center justify-center py-8 sm:py-12 px-4 sm:px-6 overflow-hidden"
      aria-label="Night Celebration Party"
    >
      {/* Background celestial night glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(200,183,217,0.15)_0%,transparent_75%)] pointer-events-none" />

      {/* Editorial Header matching Reference */}
      <header className="relative z-20 flex flex-col items-center text-center max-w-md mx-auto mb-3.5 px-2">
        <span className="font-satoshi text-[10.5px] sm:text-[11.5px] tracking-[0.2em] uppercase text-butter-yellow/90 font-semibold mb-1 flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-butter-yellow/80" />
          {finalPartyConfig.badge}
        </span>

        <h2 className="font-instrument font-normal text-3xl xs:text-4xl sm:text-5xl text-butter-yellow tracking-[-0.01em] leading-tight mb-1">
          {finalPartyConfig.name}
        </h2>

        <p className="font-instrument italic text-base sm:text-lg text-warm-ivory/85 leading-snug max-w-sm mb-1">
          {finalPartyConfig.subTitle}
        </p>

        <p className="font-satoshi text-[10px] sm:text-[11px] tracking-[0.16em] uppercase text-warm-ivory/70 font-medium">
          {finalPartyConfig.time} · {finalPartyConfig.location} · {finalPartyConfig.attire}
        </p>
      </header>

      {/* Visual Centerpiece Frame */}
      <main className="relative z-10 w-full max-w-[420px] flex flex-col items-center justify-center">
        <div className="relative w-full aspect-[4/5] max-h-[380px] sm:max-h-[420px] rounded-3xl overflow-hidden shadow-2xl border border-butter-yellow/20 bg-[#140D12]">
          <Image
            src="/images/moonlight-jam-bg.jpg"
            alt="Intimate acoustic stage with lanterns and rugs under a starry night"
            fill
            sizes="(max-width: 640px) 94vw, 420px"
            className="object-cover object-center select-none"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#100A0E]/80 via-transparent to-transparent pointer-events-none" />
        </div>

        {/* Script Reflection */}
        <p className="font-script text-2xl sm:text-[28px] text-butter-yellow mt-3 text-center leading-snug">
          {finalPartyConfig.reflectionQuote}
        </p>

        {/* Tagline from Reference */}
        <p className="font-satoshi text-[9.5px] sm:text-[10px] tracking-[0.24em] uppercase text-butter-yellow/60 font-medium mt-2 text-center">
          {finalPartyConfig.tagline}
        </p>
      </main>
    </section>
  );
}
