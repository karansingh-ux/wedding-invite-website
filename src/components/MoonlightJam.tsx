'use client';

import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Moon, Music } from 'lucide-react';

export function MoonlightJam() {
  const containerRef = useRef<HTMLElement>(null);
  const imageFrameRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Parallax on the late night garden
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

      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: headerRef.current,
              start: 'top 80%',
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
      id="moonlight-jam"
      className="relative min-h-screen w-full bg-[#120B0F] text-warm-ivory flex flex-col items-center justify-between py-16 px-4 sm:px-6 overflow-hidden"
      aria-label="Moonlight Jam Acoustic Night"
    >
      {/* Deep starlit night atmosphere */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(83,97,77,0.2)_0%,rgba(18,11,15,0.95)_75%)] pointer-events-none" />

      {/* Header */}
      <header
        ref={headerRef}
        className="relative z-20 flex flex-col items-center text-center max-w-md mx-auto mb-6 px-2"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-deep-green/30 border border-butter-yellow/20 text-butter-yellow text-[10px] font-sans font-semibold uppercase tracking-[0.25em] mb-2">
          <Moon className="w-3.5 h-3.5" />
          <span>04 · NO SCHEDULE. JUST MUSIC.</span>
        </div>

        <h2 className="font-display-title text-3xl xs:text-4xl sm:text-5xl font-bold text-butter-yellow tracking-tight leading-none mb-3">
          THE MOONLIGHT JAM
        </h2>

        <p className="font-editorial italic text-xs xs:text-sm sm:text-base text-warm-ivory/85 leading-snug max-w-sm mb-3">
          No choreography. No programme. Just good music, tired feet, people we love, and one last reason to stay up.
        </p>

        <p className="font-sans text-[10px] xs:text-[11px] tracking-[0.2em] uppercase text-warm-ivory/60 font-medium">
          SUNDAY, 23 NOV · 8:00 PM · STARLIT OLIVE GROVE
        </p>
      </header>

      {/* Centerpiece Visual Frame */}
      <main className="relative z-10 w-full max-w-[420px] flex-1 flex flex-col items-center justify-center my-4">
        <div
          ref={imageFrameRef}
          className="relative w-full h-[60vh] max-h-[580px] rounded-3xl overflow-hidden shadow-2xl border border-butter-yellow/20 bg-[#1D141A] will-change-transform mb-6"
        >
          <Image
            src="/images/moonlight-jam-bg.jpg"
            alt="Intimate acoustic night garden with fire bowl, rugs and fairy lights"
            fill
            sizes="(max-width: 640px) 94vw, 420px"
            className="object-cover object-center select-none"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#120B0F]/80 via-transparent to-transparent pointer-events-none" />
        </div>

        {/* Ambient Acoustic Quote */}
        <div className="flex items-center gap-2 text-butter-yellow/80 text-xs font-editorial italic text-center">
          <Music className="w-4 h-4 text-butter-yellow/60" />
          <span>Warm bonfire, unamplified guitars, and midnight chai.</span>
        </div>
      </main>
    </section>
  );
}
