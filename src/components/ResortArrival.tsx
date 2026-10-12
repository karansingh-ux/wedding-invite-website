'use client';

import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export function ResortArrival() {
  const sceneRef = useRef<HTMLElement>(null);
  const typographyRef = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={sceneRef}
      id="resort-arrival"
      className="relative min-h-screen w-full bg-warm-ivory text-warm-brown flex flex-col items-center justify-between overflow-hidden px-4 pt-8 pb-12 sm:px-6 sm:pt-12 sm:pb-16"
      aria-label="Resort Arrival Scene"
    >
      {/* Subtle organic paper background texture */}
      <div className="absolute inset-0 paper-texture pointer-events-none opacity-40" />

      {/* 1. Minimal Editorial Typography */}
      <header
        ref={typographyRef}
        className="relative z-20 flex flex-col items-center text-center max-w-md mx-auto mb-4 px-2"
      >
        <h1 className="font-instrument font-normal text-3xl xs:text-4xl sm:text-5xl md:text-6xl text-deep-maroon tracking-[-0.02em] leading-[1.08] mb-2">
          PRASHANT &amp; DELLIAH
        </h1>

        <p className="font-instrument italic text-base sm:text-lg text-warm-brown/90 leading-snug">
          The Heritage Royal Palace &amp; Gardens · Udaipur
        </p>

        <p className="font-satoshi text-[11px] sm:text-xs tracking-[0.15em] uppercase text-warm-brown/70 mt-1.5 font-medium">
          21–23 NOVEMBER 2026
        </p>
      </header>

      {/* 2. Visual Centerpiece: Couple arriving occupying ~70% of mobile composition */}
      <main className="relative z-10 w-full max-w-[420px] flex-1 flex items-center justify-center">
        <div className="relative w-full h-[65vh] max-h-[620px] rounded-3xl overflow-hidden shadow-2xl border border-muted-gold/20 bg-soft-cream">
          <Image
            src="/images/couple-arrival.png"
            alt="Prashant and Delliah arriving at the resort"
            fill
            priority
            sizes="(max-width: 640px) 94vw, 420px"
            className="object-cover object-center select-none"
          />

          {/* Soft natural lighting gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-deep-maroon/40 via-transparent to-transparent pointer-events-none" />
        </div>
      </main>
    </section>
  );
}
