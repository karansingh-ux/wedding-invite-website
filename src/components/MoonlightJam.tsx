'use client';

import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Moon, Music } from 'lucide-react';

export function MoonlightJam() {
  const containerRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={containerRef}
      id="moonlight-jam"
      className="relative min-h-screen w-full bg-[#120B0F] text-warm-ivory flex flex-col items-center justify-center py-16 sm:py-24 px-4 sm:px-6 overflow-hidden"
      aria-label="Moonlight Jam Acoustic Night"
    >
      {/* Deep starlit night atmosphere */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(83,97,77,0.2)_0%,rgba(18,11,15,0.95)_75%)] pointer-events-none" />

      {/* Header */}
      <header
        ref={headerRef}
        className="relative z-20 flex flex-col items-center text-center max-w-md mx-auto mb-6 px-2"
      >
        <h2 className="font-instrument font-normal text-3xl xs:text-4xl sm:text-5xl text-butter-yellow tracking-[-0.02em] leading-tight mb-2">
          The Moonlight Jam
        </h2>

        <p className="font-instrument italic text-base sm:text-lg text-warm-ivory/85 leading-snug max-w-sm mb-2">
          Acoustic music, bonfire warmth, and one last celebration under the stars.
        </p>

        <p className="font-satoshi text-[11px] sm:text-xs tracking-[0.15em] uppercase text-warm-ivory/70 font-medium">
          Sunday, 23 Nov · 8:00 PM · Starlit Olive Grove
        </p>
      </header>

      {/* Centerpiece Visual Frame */}
      <main className="relative z-10 w-full max-w-[420px] flex flex-col items-center justify-center my-2">
        <div className="relative w-full aspect-[4/5] max-h-[460px] rounded-3xl overflow-hidden shadow-2xl border border-butter-yellow/20 bg-[#1D141A]">
          <Image
            src="/images/moonlight-jam-bg.jpg"
            alt="Intimate acoustic night garden with fire bowl, rugs and fairy lights"
            fill
            sizes="(max-width: 640px) 94vw, 420px"
            className="object-cover object-center select-none"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#120B0F]/80 via-transparent to-transparent pointer-events-none" />
        </div>

        {/* Ambient Acoustic Note with ample breathing room */}
        <p className="font-instrument italic text-base sm:text-lg text-butter-yellow/85 mt-6 text-center leading-relaxed max-w-sm px-4">
          Warm bonfire, live guitars, and midnight chai.
        </p>
      </main>
    </section>
  );
}
