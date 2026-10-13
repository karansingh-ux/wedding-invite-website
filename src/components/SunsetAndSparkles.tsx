'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { GujaratiPeacockJharokhaArch } from '@/components/CulturalArches';

export function SunsetAndSparkles() {
  const containerRef = useRef<HTMLElement>(null);

  return (
    <section
      ref={containerRef}
      id="sunset-sparkles"
      className="relative w-full min-h-[100dvh] bg-[#2A1622] text-warm-ivory flex flex-col items-center justify-center py-16 sm:py-20 px-4 sm:px-6 overflow-hidden border-b border-muted-gold/20"
      aria-label="The Sunset & Sangeet Celebration"
    >
      {/* Background twilight glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(217,120,75,0.2)_0%,transparent_75%)] pointer-events-none" />

      {/* Editorial Header */}
      <motion.header
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-20 flex flex-col items-center text-center max-w-md mx-auto mb-3.5 px-2"
      >
        <span className="font-satoshi text-[10.5px] sm:text-[11.5px] tracking-[0.2em] uppercase text-butter-yellow/90 font-semibold mb-1 flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-butter-yellow/80" />
          10TH EVENING
        </span>

        <h3 className="font-instrument font-normal text-4xl xs:text-5xl sm:text-6xl text-warm-ivory tracking-[-0.01em] leading-tight mb-1">
          Sunset &amp; Sparkles
        </h3>

        <p className="font-instrument italic text-base sm:text-lg text-warm-ivory/85 leading-snug max-w-sm mb-1">
          Sunset rings, cocktail glam, and dancing until twilight.
        </p>

        <p className="font-satoshi text-[10px] sm:text-[11px] tracking-[0.16em] uppercase text-warm-ivory/70 font-medium">
          5:30 PM onwards · Palace Amphitheatre · Indo-Western Glam
        </p>
      </motion.header>

      {/* Visual Centerpiece: Gujarati Royal Peacock Jharokha Arch */}
      <main className="relative z-10 w-full flex flex-col items-center justify-center">
        <GujaratiPeacockJharokhaArch>
          <Image
            src="/images/sunset-sparkles-bg.jpg"
            alt="Palace terrace lit with candles and fairy lights at twilight"
            fill
            sizes="(max-width: 640px) 94vw, 350px"
            className="object-cover object-center select-none"
          />
        </GujaratiPeacockJharokhaArch>

        {/* Script Reflection */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="font-script text-2xl sm:text-[28px] text-butter-yellow mt-3.5 text-center leading-snug px-3"
        >
          &ldquo;Two rings, loud music, and dancing until midnight.&rdquo;
        </motion.p>
      </main>
    </section>
  );
}
