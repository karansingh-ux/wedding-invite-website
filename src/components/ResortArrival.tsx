'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { HangingLanternMotif, FloralDividerMotif } from '@/components/Motifs';

interface ResortArrivalProps {
  isEntered?: boolean;
  hasStartedExit?: boolean;
}

export function ResortArrival({ isEntered = false, hasStartedExit = false }: ResortArrivalProps) {
  const isRevealed = hasStartedExit || isEntered;

  return (
    <section
      id="resort-arrival"
      className="relative w-full bg-warm-ivory text-warm-brown flex flex-col items-center overflow-hidden px-4 pt-4 pb-6 sm:px-6 sm:pt-6 sm:pb-8"
      aria-label="Wedding Invitation Scene"
    >
      {/* Subtle organic paper background texture */}
      <div className="absolute inset-0 paper-texture pointer-events-none opacity-40" />

      {/* 1. Hanging Brass Lantern with Bougainvillea Accent */}
      <div className="relative z-20 -mb-3">
        <HangingLanternMotif className="w-16 h-24 sm:w-20 sm:h-28" />
      </div>

      {/* 2. Editorial Masthead matching Column 1 of Reference */}
      <header className="relative z-20 flex flex-col items-center text-center max-w-lg mx-auto mb-3.5 px-2">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={isRevealed ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="font-satoshi text-[9px] sm:text-[10px] tracking-[0.24em] uppercase text-deep-maroon/75 font-semibold mb-1"
        >
          TOGETHER WITH OUR FAMILIES
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 22 }}
          animate={isRevealed ? { opacity: 1, y: 0 } : { opacity: 0, y: 22 }}
          transition={{ duration: 0.95, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="font-instrument font-normal text-3xl xs:text-4xl sm:text-5xl text-deep-maroon tracking-[-0.01em] leading-[1.05] mb-1"
        >
          Prashant &amp; Delliah
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={isRevealed ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          className="font-satoshi text-[8.5px] sm:text-[9.5px] tracking-[0.22em] uppercase text-warm-brown/75 mb-1 font-medium"
        >
          INVITE YOU TO OUR WEDDING CELEBRATION
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={isRevealed ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
          className="font-satoshi text-[10.5px] sm:text-[11.5px] tracking-[0.16em] uppercase text-deep-maroon/90 font-semibold"
        >
          10 – 11 NOV 2026 · MALSHEJ GHAT
        </motion.p>
      </header>

      {/* 3. Visual Centerpiece: Couple in Malshej Ghat Framed Watercolor */}
      <main className="relative z-10 w-full max-w-[420px] flex-1 flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 28 }}
          animate={isRevealed ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.92, y: 28 }}
          transition={{ duration: 1.15, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          className="relative w-full h-[52vh] max-h-[480px] rounded-3xl overflow-hidden shadow-2xl border border-muted-gold/30 bg-soft-cream will-change-transform"
        >
          <motion.div
            initial={{ scale: 1.1 }}
            animate={isRevealed ? { scale: 1.0 } : { scale: 1.1 }}
            transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full h-full"
          >
            <Image
              src="/images/couple-arrival.png"
              alt="Prashant and Delliah amidst the mist of Malshej Ghat"
              fill
              priority
              sizes="(max-width: 640px) 94vw, 420px"
              className="object-cover object-center select-none"
            />
          </motion.div>

          {/* Soft natural watercolor lighting gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-deep-maroon/40 via-transparent to-transparent pointer-events-none" />
        </motion.div>

        {/* 4. Delicate Handwritten Script Quote from Reference */}
        <p className="font-script text-2xl xs:text-3xl sm:text-[30px] text-deep-maroon mt-3.5 text-center leading-snug px-3">
          &ldquo;Mountains, mist, magic and a lifetime together.&rdquo;
        </p>

        {/* 5. Editorial Passage */}
        <p className="font-instrument italic text-xs xs:text-sm sm:text-base text-warm-brown/85 max-w-sm text-center mt-1.5 leading-relaxed px-4">
          Join us for three days of love, laughter and meaningful celebrations amidst the lush hills of Malshej Ghat.
        </p>

        {/* 6. Floral Divider & Scroll Invitation */}
        <div className="flex flex-col items-center mt-3">
          <FloralDividerMotif className="w-28 h-5" />
          <span className="font-satoshi text-[8.5px] tracking-[0.24em] uppercase text-deep-maroon/70 font-semibold mt-0.5">
            SCROLL TO BEGIN OUR JOURNEY
          </span>
        </div>
      </main>
    </section>
  );
}
