'use client';

import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FloralDividerMotif } from '@/components/Motifs';
import { finalPartyConfig } from '@/data/wedding';

export function WeekendIntro() {
  const containerRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const wordsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        headlineRef.current,
        { y: 25, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 75%',
          },
        }
      );

      gsap.fromTo(
        '.celebration-label',
        { y: 18, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.85,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: wordsRef.current,
            start: 'top 80%',
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full pt-6 pb-8 sm:pt-8 sm:pb-10 px-4 sm:px-6 flex flex-col items-center justify-center text-center bg-warm-ivory text-warm-brown overflow-hidden"
      aria-label="Wedding Weekend Introduction"
    >
      <div className="max-w-xl mx-auto flex flex-col items-center">
        {/* Masthead Label from Column 2 */}
        <span className="font-satoshi text-[10px] tracking-[0.24em] uppercase text-deep-maroon/75 font-semibold mb-1">
          THE
        </span>

        {/* Primary Statement */}
        <h2
          ref={headlineRef}
          className="font-instrument font-normal text-4xl xs:text-5xl sm:text-6xl text-deep-maroon tracking-[-0.01em] leading-tight mb-1.5"
        >
          Wedding Weekend
        </h2>

        {/* Subtitle from Reference */}
        <p className="font-satoshi text-[9.5px] sm:text-[10.5px] tracking-[0.2em] uppercase text-warm-brown/75 font-medium mb-2.5">
          FOUR CELEBRATIONS. ONE UNFORGETTABLE JOURNEY.
        </p>

        {/* Floral Divider Motif */}
        <FloralDividerMotif className="w-32 h-6 mb-3.5" />

        {/* Exactly Four Celebration Labels */}
        <div
          ref={wordsRef}
          className="grid grid-cols-2 sm:flex sm:items-center sm:justify-center gap-x-6 gap-y-2.5 sm:gap-6 md:gap-8 font-instrument italic text-xl sm:text-2xl text-deep-maroon/90 text-center"
        >
          <div className="celebration-label flex items-center justify-center sm:justify-start gap-3 sm:gap-6 md:gap-8">
            <span>Haldi</span>
            <span className="hidden sm:inline text-muted-gold/60 text-base select-none">·</span>
          </div>
          <div className="celebration-label flex items-center justify-center sm:justify-start gap-3 sm:gap-6 md:gap-8">
            <span>Sangeet</span>
            <span className="hidden sm:inline text-muted-gold/60 text-base select-none">·</span>
          </div>
          <div className="celebration-label flex items-center justify-center sm:justify-start gap-3 sm:gap-6 md:gap-8">
            <span>Wedding</span>
            <span className="hidden sm:inline text-muted-gold/60 text-base select-none">·</span>
          </div>
          <div className="celebration-label flex items-center justify-center">
            <span>{finalPartyConfig.name}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
