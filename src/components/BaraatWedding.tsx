'use client';

import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { KolamMotif, BandhaniMotif } from '@/components/Motifs';

export function BaraatWedding() {
  const containerRef = useRef<HTMLElement>(null);
  const baraatTextRef = useRef<HTMLDivElement>(null);
  const mandapImageRef = useRef<HTMLDivElement>(null);
  const fusionStatementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Mandap parallax scroll
      if (mandapImageRef.current) {
        gsap.to(mandapImageRef.current, {
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

      // Climax statement reveal
      if (fusionStatementRef.current) {
        gsap.fromTo(
          fusionStatementRef.current,
          { y: 35, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1.3,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: fusionStatementRef.current,
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
      id="wedding-ceremony"
      className="relative min-h-screen w-full bg-[#FFF9F2] text-warm-brown flex flex-col items-center justify-between py-16 px-4 sm:px-6 overflow-hidden"
      aria-label="The Auspicious Wedding and Cultural Fusion"
    >
      {/* 1. Section 08: Baraat Welcome */}
      <header
        ref={baraatTextRef}
        className="relative z-20 flex flex-col items-center text-center max-w-md mx-auto mb-8 px-2"
      >
        <span className="text-[10px] sm:text-[11px] font-sans font-semibold uppercase tracking-[0.25em] text-deep-maroon/75 mb-1.5">
          03 · THE BIG ONE
        </span>

        <h2 className="font-display-title text-3xl xs:text-4xl sm:text-5xl font-bold text-deep-maroon tracking-tight leading-none mb-3">
          HERE COMES THE GROOM
        </h2>

        <p className="font-editorial italic text-xs xs:text-sm sm:text-base text-warm-brown/90 leading-snug max-w-sm mb-2">
          The music gets louder. The family gets louder. And somehow, the groom still makes it on time.
        </p>

        <p className="font-sans text-[10px] xs:text-[11px] tracking-[0.2em] uppercase text-warm-brown/70 font-medium">
          SUNDAY, 23 NOV · 9:30 AM · TEMPLE MANDAP BY THE LAKE
        </p>
      </header>

      {/* 2. Visual Centerpiece: Cultural Fusion Mandap Frame */}
      <main className="relative z-10 w-full max-w-[420px] flex-1 flex flex-col items-center justify-center my-4">
        <div
          ref={mandapImageRef}
          className="relative w-full h-[62vh] max-h-[600px] rounded-3xl overflow-hidden shadow-2xl border-2 border-muted-gold/30 bg-soft-cream will-change-transform mb-8"
        >
          <Image
            src="/images/cultural-wedding-bg.jpg"
            alt="Sacred Cultural Fusion Mandap by Udaipur Lake"
            fill
            sizes="(max-width: 640px) 94vw, 420px"
            className="object-cover object-center select-none"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-deep-maroon/50 via-transparent to-transparent pointer-events-none" />
        </div>

        {/* 3. Section 09: Cultural Fusion Climax Statement */}
        <div
          ref={fusionStatementRef}
          className="w-full max-w-sm mx-auto flex flex-col items-center text-center px-4 py-8 rounded-2xl bg-warm-ivory/90 backdrop-blur-md border border-deep-maroon/15 shadow-lg"
        >
          {/* Fusion Motifs: Kolam & Bandhani */}
          <div className="flex items-center gap-3 mb-4">
            <KolamMotif className="w-5 h-5 text-deep-maroon/70" />
            <span className="text-[10px] font-sans font-bold uppercase tracking-[0.25em] text-deep-maroon">
              Tamil × Gujarati
            </span>
            <BandhaniMotif className="w-5 h-5 text-deep-maroon/70" />
          </div>

          <h3 className="font-display-title text-2xl xs:text-3xl font-bold text-deep-maroon tracking-tight leading-tight mb-3">
            TWO CULTURES.<br />
            ONE WEDDING.<br />
            <span className="text-muted-gold">ONE FOREVER.</span>
          </h3>

          <p className="font-editorial italic text-xs xs:text-sm sm:text-base text-warm-brown/90 leading-relaxed mb-4 max-w-xs">
            Different rituals. Different traditions. Same two people.
          </p>

          <div className="pt-3 border-t border-deep-maroon/15 w-full">
            <p className="font-editorial text-sm sm:text-base text-deep-maroon font-semibold italic">
              &ldquo;And just like that, we&apos;re married.&rdquo;
            </p>
          </div>
        </div>
      </main>
    </section>
  );
}
