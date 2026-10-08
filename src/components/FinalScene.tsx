'use client';

import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUp } from 'lucide-react';

export function FinalScene() {
  const containerRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      if (textRef.current) {
        gsap.fromTo(
          textRef.current,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1.3,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top 75%',
            },
          }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      ref={containerRef}
      className="relative min-h-[75vh] w-full bg-[#180E14] text-warm-ivory flex flex-col items-center justify-between py-16 px-4 sm:px-6 overflow-hidden"
      aria-label="Final Farewell Scene"
    >
      {/* Background night ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(100,31,39,0.3)_0%,rgba(24,14,20,1)_85%)] pointer-events-none" />

      {/* Subtle night resort backdrop */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <Image
          src="/images/moonlight-jam-bg.jpg"
          alt="Night resort environment"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      <div className="relative z-10 w-full flex-1 flex flex-col items-center justify-center text-center max-w-md mx-auto my-auto">
        <div ref={textRef} className="flex flex-col items-center">
          <span className="text-[10px] sm:text-[11px] font-sans font-semibold uppercase tracking-[0.3em] text-peach mb-3">
            UNTIL THEN
          </span>

          <h2 className="font-display-title text-3xl xs:text-4xl sm:text-5xl font-bold text-butter-yellow tracking-tight leading-tight mb-4">
            SEE YOU UNDER THE LIGHTS.
          </h2>

          <p className="font-editorial text-xl sm:text-2xl text-warm-ivory font-light mb-2">
            Ananya &amp; Dhruv
          </p>

          <p className="font-sans text-[11px] sm:text-xs tracking-[0.25em] uppercase text-warm-ivory/60 font-medium mb-8">
            21–23 NOVEMBER 2026 · UDAIPUR
          </p>

          <p className="font-editorial italic text-xs xs:text-sm text-warm-ivory/60 max-w-xs leading-relaxed border-t border-warm-ivory/15 pt-5">
            Made with a little love, a lot of planning, and probably too many opinions.
          </p>
        </div>
      </div>

      {/* Subtle back to top button */}
      <div className="relative z-10 pt-6">
        <button
          onClick={scrollToTop}
          aria-label="Back to top"
          className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 hover:bg-white/15 text-warm-ivory/80 text-[11px] font-sans tracking-wider uppercase transition-colors"
        >
          <ArrowUp className="w-3.5 h-3.5" />
          <span>Back to beginning</span>
        </button>
      </div>
    </footer>
  );
}
