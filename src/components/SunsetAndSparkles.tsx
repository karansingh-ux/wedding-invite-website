'use client';

import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Sparkles } from 'lucide-react';

export function SunsetAndSparkles() {
  const containerRef = useRef<HTMLElement>(null);
  const imageFrameRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const sangeetCalloutRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Parallax on the twilight terrace
      if (imageFrameRef.current) {
        gsap.to(imageFrameRef.current, {
          yPercent: 8,
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1.2,
          },
        });
      }

      // Sangeet callout dramatic entrance
      if (sangeetCalloutRef.current) {
        gsap.fromTo(
          sangeetCalloutRef.current,
          { y: 30, opacity: 0, scale: 0.96 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 1.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: sangeetCalloutRef.current,
              start: 'top 85%',
            },
          }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      id="sunset-sparkles"
      className="relative min-h-screen w-full bg-[#1C0F17] text-warm-ivory flex flex-col items-center justify-between py-16 px-4 sm:px-6 overflow-hidden"
      aria-label="Sunset & Sparkles Sangeet Scene"
    >
      {/* Twilight atmospheric glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(200,183,217,0.15)_0%,rgba(28,15,23,0.95)_70%)] pointer-events-none" />

      {/* 1. Header: Sunset & Sparkles */}
      <header
        ref={headlineRef}
        className="relative z-20 flex flex-col items-center text-center max-w-md mx-auto mb-6 px-2"
      >
        <span className="text-[10px] sm:text-[11px] font-sans font-semibold uppercase tracking-[0.25em] text-peach mb-1.5">
          02 · WHEN THE SUN GOES DOWN
        </span>

        <h2 className="font-display-title text-3xl xs:text-4xl sm:text-5xl font-bold text-butter-yellow tracking-tight leading-none mb-3">
          SUNSET &amp; SPARKLES
        </h2>

        <p className="font-editorial italic text-xs xs:text-sm sm:text-base text-warm-ivory/90 leading-snug max-w-sm mb-3">
          A little puja at golden hour, a ring exchange at sunset, and then we&apos;re turning the music up.
        </p>

        {/* Quiet Ring Exchange Reveal */}
        <div className="flex flex-col items-center text-center py-2 px-4 rounded-xl bg-deep-maroon/30 border border-peach/20 max-w-xs">
          <p className="text-[10px] font-sans uppercase tracking-[0.2em] text-peach font-semibold mb-0.5">
            A quiet beginning
          </p>
          <p className="font-editorial italic text-xs sm:text-sm text-warm-ivory/80">
            Two rings. One very easy answer.
          </p>
        </div>

        <p className="font-sans text-[10px] xs:text-[11px] tracking-[0.2em] uppercase text-warm-ivory/70 mt-3 font-medium">
          SATURDAY, 22 NOV · 6:00 PM · PALACE AMPHITHEATRE
        </p>
      </header>

      {/* 2. Visual Centerpiece: Evening Transformation with Fairy Lights & Candles */}
      <main className="relative z-10 w-full max-w-[420px] flex-1 flex flex-col items-center justify-center my-4">
        <div
          ref={imageFrameRef}
          className="relative w-full h-[60vh] max-h-[580px] rounded-3xl overflow-hidden shadow-2xl border border-muted-gold/30 bg-[#2A1622] will-change-transform mb-8"
        >
          <Image
            src="/images/sunset-sparkles-bg.jpg"
            alt="Palace terrace lit with candles and fairy lights at twilight"
            fill
            sizes="(max-width: 640px) 94vw, 420px"
            className="object-cover object-center select-none"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#1C0F17]/80 via-transparent to-transparent pointer-events-none" />
        </div>

        {/* 3. Section 07 — Sangeet Climax Transition */}
        <div
          ref={sangeetCalloutRef}
          className="w-full max-w-sm mx-auto text-center px-4 py-6 rounded-2xl bg-gradient-to-b from-deep-maroon/60 to-[#2A121A]/80 backdrop-blur-md border border-butter-yellow/20 shadow-xl"
        >
          <div className="inline-flex items-center gap-1.5 text-butter-yellow text-[11px] font-sans font-semibold uppercase tracking-[0.25em] mb-1">
            <Sparkles className="w-3.5 h-3.5 text-butter-yellow" />
            <span>AND THEN...</span>
            <Sparkles className="w-3.5 h-3.5 text-butter-yellow" />
          </div>

          <h3 className="font-display-title text-2xl xs:text-3xl font-bold text-butter-yellow tracking-tight leading-none my-2">
            NO MORE SITTING POLITELY.
          </h3>

          <p className="font-editorial italic text-xs xs:text-sm text-warm-ivory/80 leading-relaxed">
            Dhol beats, dance face-offs, family rivalries, and the DJ playing until they pull the plug.
          </p>
        </div>
      </main>
    </section>
  );
}
