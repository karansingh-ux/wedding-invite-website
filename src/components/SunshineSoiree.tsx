'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { GujaratiHaveliArch } from '@/components/CulturalArches';

export function SunshineSoiree() {
  const containerRef = useRef<HTMLElement>(null);

  return (
    <section
      ref={containerRef}
      id="sunshine-soiree"
      className="relative w-full min-h-[100dvh] bg-[#FFFBF2] text-warm-brown flex flex-col items-center justify-center py-16 sm:py-20 px-4 sm:px-6 overflow-hidden border-b border-muted-gold/20"
      aria-label="The Sunshine Soirée Haldi Event"
    >
      {/* Background warm watercolor radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(246,223,160,0.3)_0%,transparent_70%)] pointer-events-none" />

      {/* Editorial Header */}
      <motion.header
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-20 flex flex-col items-center text-center max-w-md mx-auto mb-3.5 px-2"
      >
        <span className="font-satoshi text-[10.5px] sm:text-[11.5px] tracking-[0.2em] uppercase text-deep-maroon font-semibold mb-1 flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-deep-maroon/70" />
          10TH MORNING
        </span>

        <h3 className="font-instrument font-normal text-4xl xs:text-5xl sm:text-6xl text-deep-maroon tracking-[-0.01em] leading-tight mb-1">
          The Sunshine Soirée
        </h3>

        <p className="font-instrument italic text-base sm:text-lg text-warm-brown/85 leading-snug max-w-sm mb-1">
          Playful, bright and full of joy.
        </p>

        <p className="font-satoshi text-[10px] sm:text-[11px] tracking-[0.16em] uppercase text-warm-brown/70 font-medium">
          10:30 AM · Poolside Lawn · Wear Bright Yellows &amp; Florals
        </p>
      </motion.header>

      {/* Visual Centerpiece: Gujarati Haveli Toran Arch */}
      <main className="relative z-10 w-full flex flex-col items-center justify-center">
        <GujaratiHaveliArch>
          <Image
            src="/images/sunshine-soiree-bg.jpg"
            alt="Sunshine Soiree Haldi Garden Setup"
            fill
            sizes="(max-width: 640px) 94vw, 350px"
            className="object-cover object-center select-none"
          />
        </GujaratiHaveliArch>

        {/* Script Reflection */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="font-script text-2xl sm:text-[28px] text-deep-maroon mt-3.5 text-center leading-snug px-3"
        >
          &ldquo;Marigold petals, turmeric smiles, and pure morning joy.&rdquo;
        </motion.p>
      </main>
    </section>
  );
}
