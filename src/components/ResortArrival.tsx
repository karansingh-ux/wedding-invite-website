'use client';

import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export function ResortArrival() {
  const sceneRef = useRef<HTMLElement>(null);
  const heroImageContainerRef = useRef<HTMLDivElement>(null);
  const typographyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Subtle scroll parallax on the couple visual
      if (heroImageContainerRef.current) {
        gsap.to(heroImageContainerRef.current, {
          yPercent: 8,
          ease: 'none',
          scrollTrigger: {
            trigger: sceneRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: 1.2,
          },
        });
      }
    }, sceneRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sceneRef}
      id="resort-arrival"
      className="relative min-h-screen w-full bg-warm-ivory text-warm-brown flex flex-col items-center justify-between overflow-hidden px-4 pt-6 pb-10 sm:px-6 sm:pt-8"
      aria-label="Resort Arrival Scene"
    >
      {/* Subtle organic paper background texture */}
      <div className="absolute inset-0 paper-texture pointer-events-none opacity-40" />

      {/* 1. Minimal Typography (Strictly the required 4 lines only) */}
      <header
        ref={typographyRef}
        className="relative z-20 flex flex-col items-center text-center max-w-md mx-auto mb-3 sm:mb-4 px-2"
      >
        <span className="text-[10px] sm:text-[11px] font-sans font-semibold uppercase tracking-[0.25em] text-deep-maroon/75 mb-1.5">
          TAMIL × GUJARATI
        </span>

        <h1 className="font-display-title text-3xl xs:text-4xl sm:text-5xl font-bold text-deep-maroon tracking-tight leading-none mb-2">
          ANANYA &amp; DHRUV
        </h1>

        <p className="font-editorial italic text-xs xs:text-sm sm:text-base text-warm-brown/90 leading-snug">
          The Heritage Royal Palace &amp; Gardens · Udaipur
        </p>

        <p className="font-sans text-[10px] xs:text-[11px] sm:text-xs tracking-[0.2em] uppercase text-warm-brown/70 mt-1 font-medium">
          21–23 NOVEMBER 2026
        </p>
      </header>

      {/* 2. Visual Centerpiece: Couple arriving occupying ~70% of mobile composition */}
      <main className="relative z-10 w-full max-w-[420px] flex-1 flex items-center justify-center">
        <div
          ref={heroImageContainerRef}
          className="relative w-full h-[66vh] max-h-[640px] rounded-3xl overflow-hidden shadow-2xl border border-muted-gold/20 bg-soft-cream will-change-transform"
        >
          <Image
            src="/images/couple-arrival.png"
            alt="Ananya and Dhruv arriving at the resort"
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
