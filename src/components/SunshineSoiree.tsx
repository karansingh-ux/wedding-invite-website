'use client';

import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScratchCard } from '@/components/ScratchCard';

export function SunshineSoiree() {
  const containerRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={containerRef}
      id="sunshine-soiree"
      className="relative min-h-screen w-full bg-[#FFFBF0] text-warm-brown flex flex-col items-center justify-center py-16 sm:py-24 px-4 sm:px-6 overflow-hidden"
      aria-label="The Sunshine Soirée Haldi Event"
    >
      {/* Background radial warmth */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(246,223,160,0.35)_0%,transparent_70%)] pointer-events-none" />

      {/* Editorial Header */}
      <header
        ref={textRef}
        className="relative z-20 flex flex-col items-center text-center max-w-md mx-auto mb-6 px-2"
      >
        <h2 className="font-instrument font-normal text-3xl xs:text-4xl sm:text-5xl text-deep-maroon tracking-[-0.02em] leading-tight mb-2">
          The Sunshine Soirée
        </h2>

        <p className="font-instrument italic text-base sm:text-lg text-warm-brown/85 leading-snug max-w-sm mb-2">
          A morning of sunshine, marigold petals, and haldi.
        </p>

        <p className="font-satoshi text-[11px] sm:text-xs tracking-[0.15em] uppercase text-warm-brown/70 font-medium">
          Saturday, 22 Nov · 10:30 AM · Poolside Lawn
        </p>
      </header>

      {/* Visual Environment Canvas Frame */}
      <main className="relative z-10 w-full max-w-[420px] flex flex-col items-center justify-center my-2">
        <div className="relative w-full aspect-[4/5] max-h-[460px] rounded-3xl overflow-hidden shadow-2xl border border-muted-gold/30 bg-soft-cream mb-6">
          <Image
            src="/images/sunshine-soiree-bg.jpg"
            alt="Sunshine Soiree Haldi Garden Setup"
            fill
            sizes="(max-width: 640px) 94vw, 420px"
            className="object-cover object-center select-none"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-deep-maroon/30 via-transparent to-transparent pointer-events-none" />
        </div>

        {/* Integrated Scratch Card Invitation Object */}
        <div className="w-full">
          <ScratchCard />
        </div>
      </main>
    </section>
  );
}
