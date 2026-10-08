'use client';

import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export function WeekendIntro() {
  const containerRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const wordsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Gentle reveal of the weekend numbers and keywords on scroll
      gsap.fromTo(
        headlineRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 75%',
          },
        }
      );

      gsap.fromTo(
        '.weekend-word',
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.15,
          duration: 0.9,
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
      className="relative w-full py-20 sm:py-28 px-6 flex flex-col items-center justify-center text-center bg-warm-ivory text-warm-brown overflow-hidden"
      aria-label="Wedding Weekend Introduction"
    >
      <div className="max-w-md mx-auto flex flex-col items-center">
        {/* Editorial Subtitle */}
        <span className="text-[10px] sm:text-xs font-sans font-semibold uppercase tracking-[0.3em] text-deep-maroon/70 mb-3">
          The Celebration Roadmap
        </span>

        {/* Primary Statement */}
        <h2
          ref={headlineRef}
          className="font-display-title text-3xl xs:text-4xl sm:text-5xl font-bold text-deep-maroon tracking-tight leading-[1.05] mb-6"
        >
          THREE DAYS.<br />
          FOUR CELEBRATIONS.
        </h2>

        {/* The 5 Atmospheric Rhythm Words */}
        <div
          ref={wordsRef}
          className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1.5 font-editorial italic text-lg xs:text-xl sm:text-2xl text-warm-brown/85 max-w-xs"
        >
          <span className="weekend-word">Sunshine.</span>
          <span className="weekend-word text-peach">Sunset.</span>
          <span className="weekend-word">Music.</span>
          <span className="weekend-word text-deep-maroon">Rituals.</span>
          <span className="weekend-word text-sunset-orange">A little chaos.</span>
        </div>
      </div>
    </section>
  );
}
