'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { finalPartyConfig } from '@/data/wedding';
import { TamilCourtyardArch } from '@/components/CulturalArches';

export function MoonlightJam() {
  const containerRef = useRef<HTMLElement>(null);

  return (
    <section
      ref={containerRef}
      id="moonlight-jam"
      className="relative w-full min-h-[100dvh] bg-[#181116] text-warm-ivory flex flex-col items-center justify-center py-16 sm:py-20 px-4 sm:px-6 overflow-hidden border-b border-muted-gold/20"
      aria-label="Night Celebration Party"
    >
      {/* Background celestial night glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(200,183,217,0.15)_0%,transparent_75%)] pointer-events-none" />

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
          {finalPartyConfig.badge}
        </span>

        <h3 className="font-instrument font-normal text-4xl xs:text-5xl sm:text-6xl text-warm-ivory tracking-[-0.01em] leading-tight mb-1">
          {finalPartyConfig.name}
        </h3>

        <p className="font-instrument italic text-base sm:text-lg text-warm-ivory/85 leading-snug max-w-sm mb-1">
          {finalPartyConfig.subTitle}
        </p>

        <p className="font-satoshi text-[10px] sm:text-[11px] tracking-[0.16em] uppercase text-warm-ivory/70 font-medium">
          {finalPartyConfig.time} · {finalPartyConfig.location} · {finalPartyConfig.attire}
        </p>
      </motion.header>

      {/* Visual Centerpiece: Tamil Courtyard Starlit Arch */}
      <main className="relative z-10 w-full flex flex-col items-center justify-center">
        <TamilCourtyardArch>
          <Image
            src="/images/moonlight-jam-bg.jpg"
            alt="Intimate acoustic stage with lanterns and rugs under a starry night"
            fill
            sizes="(max-width: 640px) 94vw, 350px"
            className="object-cover object-center select-none"
          />
        </TamilCourtyardArch>

        {/* Script Reflection */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="font-script text-2xl sm:text-[28px] text-butter-yellow mt-3.5 text-center leading-snug px-3"
        >
          {finalPartyConfig.reflectionQuote}
        </motion.p>

        {/* Tagline from Reference */}
        <p className="font-satoshi text-[9.5px] sm:text-[10px] tracking-[0.24em] uppercase text-butter-yellow/60 font-medium mt-2 text-center">
          {finalPartyConfig.tagline}
        </p>
      </main>
    </section>
  );
}
