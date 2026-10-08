'use client';

import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScratchCard } from '@/components/ScratchCard';

export function SunshineSoiree() {
  const containerRef = useRef<HTMLElement>(null);
  const imageFrameRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Parallax scroll on the Haldi garden environment
      if (imageFrameRef.current) {
        gsap.to(imageFrameRef.current, {
          yPercent: 6,
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1.2,
          },
        });
      }

      // Editorial text reveal
      if (textRef.current) {
        gsap.fromTo(
          textRef.current,
          { y: 25, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: textRef.current,
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
      id="sunshine-soiree"
      className="relative min-h-screen w-full bg-[#FFFBF0] text-warm-brown flex flex-col items-center justify-between py-16 px-4 sm:px-6 overflow-hidden"
      aria-label="The Sunshine Soirée Haldi Event"
    >
      {/* Background radial warmth */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(246,223,160,0.35)_0%,transparent_70%)] pointer-events-none" />

      {/* Editorial Header */}
      <header
        ref={textRef}
        className="relative z-20 flex flex-col items-center text-center max-w-md mx-auto mb-6 px-2"
      >
        <span className="text-[10px] sm:text-[11px] font-sans font-semibold uppercase tracking-[0.25em] text-sunset-orange mb-1.5">
          01 · THE MORNING AFTER WE DECIDED TO GET MESSY
        </span>

        <h2 className="font-display-title text-3xl xs:text-4xl sm:text-5xl font-bold text-deep-maroon tracking-tight leading-none mb-3">
          THE SUNSHINE SOIRÉE
        </h2>

        <p className="font-editorial italic text-xs xs:text-sm sm:text-base text-warm-brown/90 leading-snug max-w-sm mb-2">
          Come for the flowers. Stay for the haldi. Leave with absolutely no chance of keeping your outfit clean.
        </p>

        <p className="font-sans text-[10px] xs:text-[11px] tracking-[0.2em] uppercase text-warm-brown/70 font-medium">
          SATURDAY, 22 NOV · 10:30 AM · SUNLIT POOLSIDE LAWN
        </p>
      </header>

      {/* Visual Environment Canvas Frame */}
      <main className="relative z-10 w-full max-w-[420px] flex-1 flex flex-col items-center justify-center my-4">
        <div
          ref={imageFrameRef}
          className="relative w-full h-[60vh] max-h-[580px] rounded-3xl overflow-hidden shadow-2xl border border-muted-gold/25 bg-soft-cream will-change-transform mb-6"
        >
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
