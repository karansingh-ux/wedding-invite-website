'use client';

import React, { useRef } from 'react';
import Image from 'next/image';

export function BaraatWedding() {
  const containerRef = useRef<HTMLElement>(null);

  return (
    <section
      ref={containerRef}
      id="wedding-ceremony"
      className="relative w-full bg-[#FFF9F2] text-warm-brown flex flex-col items-center justify-center py-8 sm:py-12 px-4 sm:px-6 overflow-hidden"
      aria-label="The Sacred Wedding Ceremony"
    >
      {/* Background warm ceremonial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(239,166,181,0.2)_0%,transparent_70%)] pointer-events-none" />

      {/* Editorial Header matching Reference */}
      <header className="relative z-20 flex flex-col items-center text-center max-w-md mx-auto mb-3.5 px-2">
        <span className="font-satoshi text-[10.5px] sm:text-[11.5px] tracking-[0.2em] uppercase text-deep-maroon font-semibold mb-1 flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-deep-maroon/70" />
          11TH
        </span>

        <h2 className="font-instrument font-normal text-3xl xs:text-4xl sm:text-5xl text-deep-maroon tracking-[-0.01em] leading-tight mb-1">
          The Wedding
        </h2>

        <p className="font-instrument italic text-base sm:text-lg text-warm-brown/85 leading-snug max-w-sm mb-1">
          Our favourite ritual, rooted in tradition and surrounded by nature&rsquo;s beauty.
        </p>

        <p className="font-satoshi text-[10px] sm:text-[11px] tracking-[0.16em] uppercase text-warm-brown/70 font-medium">
          4:00 PM Baraat · 5:30 PM Pheras · Sacred Mandap · Traditional Royal Attire
        </p>
      </header>

      {/* Visual Centerpiece Frame */}
      <main className="relative z-10 w-full max-w-[420px] flex flex-col items-center justify-center">
        <div className="relative w-full aspect-[4/5] max-h-[380px] sm:max-h-[420px] rounded-3xl overflow-hidden shadow-2xl border border-muted-gold/30 bg-soft-cream">
          <Image
            src="/images/cultural-wedding-bg.jpg"
            alt="Sacred Mandap in Malshej Ghat"
            fill
            sizes="(max-width: 640px) 94vw, 420px"
            className="object-cover object-center select-none"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-deep-maroon/35 via-transparent to-transparent pointer-events-none" />
        </div>

        {/* Script Reflection */}
        <p className="font-script text-2xl sm:text-[28px] text-deep-maroon mt-3 text-center leading-snug">
          &ldquo;Two souls, seven sacred vows, and a shared forever.&rdquo;
        </p>
      </main>
    </section>
  );
}
