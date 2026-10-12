'use client';

import React, { useRef } from 'react';
import { ScratchCard } from '@/components/ScratchCard';
import { FloralDividerMotif } from '@/components/Motifs';

export function SecretNoteSection() {
  const containerRef = useRef<HTMLElement>(null);

  return (
    <section
      ref={containerRef}
      id="secret-note"
      className="relative z-20 w-full pt-10 pb-8 sm:pt-14 sm:pb-10 px-4 sm:px-6 flex flex-col items-center justify-center text-center bg-warm-ivory text-warm-brown overflow-hidden"
      aria-label="A little note, just for you"
    >
      {/* Subtle organic paper background texture */}
      <div className="absolute inset-0 paper-texture pointer-events-none opacity-25" />

      <div className="relative z-10 w-full max-w-lg mx-auto flex flex-col items-center">
        {/* Section Header */}
        <header className="mb-5 px-2 flex flex-col items-center">
          <h2 className="font-instrument font-normal text-3xl xs:text-4xl sm:text-5xl text-deep-maroon tracking-[-0.01em] leading-tight mb-1">
            A little note, just for you.
          </h2>
          <p className="font-script text-2xl sm:text-3xl text-deep-maroon leading-snug">
            A quiet word from Prashant &amp; Delliah
          </p>
          <FloralDividerMotif className="w-28 h-6 mt-1.5" />
        </header>

        {/* Personal Letter Stationery Card */}
        <div className="w-full max-w-[430px]">
          <ScratchCard />
        </div>
      </div>
    </section>
  );
}
