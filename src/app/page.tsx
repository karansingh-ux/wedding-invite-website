'use client';

import React, { useState, useCallback } from 'react';
import { GanpatiOpening } from '@/components/GanpatiOpening';
import { ResortArrival } from '@/components/ResortArrival';
import { WeekendIntro } from '@/components/WeekendIntro';
import { SunshineSoiree } from '@/components/SunshineSoiree';
import { SunsetAndSparkles } from '@/components/SunsetAndSparkles';
import { BaraatWedding } from '@/components/BaraatWedding';
import { MoonlightJam } from '@/components/MoonlightJam';
import { BrideVsGroomGame } from '@/components/BrideVsGroomGame';
import { QuirkyFAQ } from '@/components/QuirkyFAQ';
import { RSVPSection } from '@/components/RSVPSection';
import { FinalScene } from '@/components/FinalScene';
import { PetalAtmosphere } from '@/components/PetalAtmosphere';

export default function Home() {
  const [isEntered, setIsEntered] = useState(false);
  const [hasStartedExit, setHasStartedExit] = useState(false);

  const handleExitStart = useCallback(() => {
    setHasStartedExit(true);
  }, []);

  const handleEnter = useCallback(() => {
    setIsEntered(true);
  }, []);

  return (
    <main className="relative min-h-screen w-full bg-warm-ivory selection:bg-butter-yellow selection:text-deep-maroon">
      {/* 1. Atmospheric Drifting Bougainvillea Petals */}
      <PetalAtmosphere />

      {/* 3. Section 01: Devotional Ganpati Opening */}
      <GanpatiOpening
        onEnter={handleEnter}
        onExitStart={handleExitStart}
        isEntered={isEntered}
      />

      {/* 4. Section 02: Resort Arrival (Couple Hero Visual & Framer Motion Entrance) */}
      <ResortArrival
        isEntered={isEntered}
        hasStartedExit={hasStartedExit}
      />

      {/* 5. Section 03: Wedding Weekend Intro */}
      <WeekendIntro />

      {/* 6. Section 04: The Sunshine Soirée (Haldi) */}
      <SunshineSoiree />

      {/* 7. Section 05: Sunset & Sparkles (Sangeet) */}
      <SunsetAndSparkles />

      {/* 8. Section 06: The Wedding (Sacred Mandap) */}
      <BaraatWedding />

      {/* 9. Section 07: Moonlight Jam (Acoustic Night) */}
      <MoonlightJam />

      {/* 12. Section 10: Bride vs Groom Game */}
      <BrideVsGroomGame />

      {/* 13. Section 11: Important Details & FAQs */}
      <QuirkyFAQ />

      {/* 13. Section 16: RSVP Form & Confirmation */}
      <RSVPSection />

      {/* 14. Section 17: Final Scene & Farewell */}
      <FinalScene />
    </main>
  );
}
