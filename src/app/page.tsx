'use client';

import React, { useState } from 'react';
import { GanpatiOpening } from '@/components/GanpatiOpening';
import { ResortArrival } from '@/components/ResortArrival';
import { WeekendIntro } from '@/components/WeekendIntro';
import { SunshineSoiree } from '@/components/SunshineSoiree';
import { SunsetAndSparkles } from '@/components/SunsetAndSparkles';
import { BaraatWedding } from '@/components/BaraatWedding';
import { MoonlightJam } from '@/components/MoonlightJam';
import { Memories } from '@/components/Memories';
import { BrideVsGroomGame } from '@/components/BrideVsGroomGame';
import { QuirkyFAQ } from '@/components/QuirkyFAQ';
import { RSVPSection } from '@/components/RSVPSection';
import { FinalScene } from '@/components/FinalScene';
import { AudioController } from '@/components/AudioController';
import { PetalAtmosphere } from '@/components/PetalAtmosphere';

export default function Home() {
  const [isEntered, setIsEntered] = useState(false);

  const handleEnter = () => {
    setIsEntered(true);
  };

  return (
    <main className="relative min-h-screen w-full bg-warm-ivory selection:bg-butter-yellow selection:text-deep-maroon">
      {/* 1. Discrete Circular Audio Controller */}
      <AudioController started={isEntered} />

      {/* 2. Atmospheric Drifting Bougainvillea Petals */}
      <PetalAtmosphere />

      {/* 3. Section 01: Devotional Ganpati Opening */}
      <GanpatiOpening onEnter={handleEnter} isEntered={isEntered} />

      {/* 4. Section 02: Resort Arrival (Couple Hero Visual) */}
      <ResortArrival />

      {/* 5. Section 03: Wedding Weekend Intro */}
      <WeekendIntro />

      {/* 6. Section 04 & 05: The Sunshine Soirée & Interactive Scratch Card */}
      <SunshineSoiree />

      {/* 7. Section 06 & 07: Sunset & Sparkles, Ring Exchange & Sangeet */}
      <SunsetAndSparkles />

      {/* 8. Section 08 & 09: Baraat & Cultural Fusion Wedding Mandap */}
      <BaraatWedding />

      {/* 9. Section 10: Moonlight Jam Intimate Acoustic Night */}
      <MoonlightJam />

      {/* 10. Section 11: Childhood & Early Memories */}
      <Memories />

      {/* 11. Section 12, 13 & 14: Bride vs Groom Game & Leaderboard */}
      <BrideVsGroomGame />

      {/* 12. Section 15: Quirky FAQ Accordion */}
      <QuirkyFAQ />

      {/* 13. Section 16: RSVP Form & Confirmation */}
      <RSVPSection />

      {/* 14. Section 17: Final Scene & Farewell */}
      <FinalScene />
    </main>
  );
}
