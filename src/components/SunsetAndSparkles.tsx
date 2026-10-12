'use client';

import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Sparkles } from 'lucide-react';

export function SunsetAndSparkles() {
  const containerRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={containerRef}
      id="sunset-sparkles"
      className="relative min-h-screen w-full bg-[#1C0F17] text-warm-ivory flex flex-col items-center justify-center py-16 sm:py-24 px-4 sm:px-6 overflow-hidden"
      aria-label="Sunset & Sparkles Sangeet Scene"
    >
      {/* Twilight atmospheric glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(200,183,217,0.15)_0%,rgba(28,15,23,0.95)_70%)] pointer-events-none" />

      {/* 1. Header: Sunset & Sangeet */}
      <header
        ref={headlineRef}
        className="relative z-20 flex flex-col items-center text-center max-w-md mx-auto mb-6 px-2"
      >
        <h2 className="font-instrument font-normal text-3xl xs:text-4xl sm:text-5xl text-butter-yellow tracking-[-0.02em] leading-tight mb-2">
          Sunset &amp; Sangeet
        </h2>

        <p className="font-instrument italic text-base sm:text-lg text-warm-ivory/85 leading-snug max-w-sm mb-2">
          A sunset ring exchange, followed by an evening of music and dancing under the stars.
        </p>

        <p className="font-satoshi text-[11px] sm:text-xs tracking-[0.15em] uppercase text-warm-ivory/70 font-medium">
          Saturday, 22 Nov · 6:00 PM · Palace Amphitheatre
        </p>
      </header>

      {/* 2. Visual Centerpiece: Evening Transformation with Fairy Lights & Candles */}
      <main className="relative z-10 w-full max-w-[420px] flex flex-col items-center justify-center my-2">
        <div className="relative w-full aspect-[4/5] max-h-[460px] rounded-3xl overflow-hidden shadow-2xl border border-muted-gold/30 bg-[#2A1622]">
          <Image
            src="/images/sunset-sparkles-bg.jpg"
            alt="Palace terrace lit with candles and fairy lights at twilight"
            fill
            sizes="(max-width: 640px) 94vw, 420px"
            className="object-cover object-center select-none"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#1C0F17]/80 via-transparent to-transparent pointer-events-none" />
        </div>

        {/* Minimal Editorial Reflection with ample breathing room */}
        <p className="font-instrument italic text-base sm:text-lg text-butter-yellow/85 mt-6 text-center leading-relaxed max-w-sm px-4">
          &ldquo;Two rings, loud music, and dancing until midnight.&rdquo;
        </p>
      </main>
    </section>
  );
}
