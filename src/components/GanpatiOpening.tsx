'use client';

import React, { useRef, useEffect, useCallback } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { getSoundEngine } from '@/utils/audio';

interface GanpatiOpeningProps {
  onEnter: () => void;
  isEntered: boolean;
}

export function GanpatiOpening({ onEnter, isEntered }: GanpatiOpeningProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageWrapperRef = useRef<HTMLDivElement>(null);
  const hasTriggeredRef = useRef(false);

  const startCinematicTransition = useCallback(() => {
    if (hasTriggeredRef.current) return;
    hasTriggeredRef.current = true;

    // Start ambient soundtrack upon first user interaction or auto-trigger
    try {
      const soundEngine = getSoundEngine();
      if (soundEngine) {
        soundEngine.startAmbient();
      }
    } catch {
      // Safe autoplay catch
    }

    if (!containerRef.current || !imageWrapperRef.current) {
      onEnter();
      return;
    }

    // GSAP cinematic camera transition: subtle upward movement + scale/recede + dissolve
    const tl = gsap.timeline({
      onComplete: () => {
        onEnter();
      },
    });

    tl.to(imageWrapperRef.current, {
      y: '-90%',
      scale: 1.05,
      opacity: 0,
      duration: 1.4,
      ease: 'power3.inOut',
    });

    tl.to(
      containerRef.current,
      {
        opacity: 0,
        duration: 0.6,
        ease: 'power2.out',
      },
      '-=0.4'
    );
  }, [onEnter]);

  useEffect(() => {
    if (isEntered) return;

    // 1. Initial calm presence on the master Ganpati image
    if (imageWrapperRef.current) {
      gsap.fromTo(
        imageWrapperRef.current,
        { scale: 1.03, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.6, ease: 'power2.out' }
      );
    }

    // 2. Automatic cinematic transition after 2.5 seconds of calm presence
    const timer = setTimeout(() => {
      startCinematicTransition();
    }, 2500);

    // Also transition immediately if user attempts to scroll or touch
    const handleUserInteraction = () => {
      startCinematicTransition();
    };

    window.addEventListener('wheel', handleUserInteraction, { passive: true });
    window.addEventListener('touchmove', handleUserInteraction, { passive: true });

    return () => {
      clearTimeout(timer);
      window.removeEventListener('wheel', handleUserInteraction);
      window.removeEventListener('touchmove', handleUserInteraction);
    };
  }, [isEntered, startCinematicTransition]);

  if (isEntered) return null;

  return (
    <div
      ref={containerRef}
      onClick={startCinematicTransition}
      className="fixed inset-0 z-40 flex items-center justify-center overflow-hidden bg-[#2A0D11] cursor-pointer select-none"
      aria-label="Ganpati Devotional Opening"
    >
      {/* Background radial atmosphere */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(246,223,160,0.15)_0%,rgba(100,31,39,0.85)_65%,rgba(42,13,17,1)_100%)] pointer-events-none" />

      {/* Dominant Master Ganpati Image (Responsive mobile-first canvas) */}
      <div
        ref={imageWrapperRef}
        className="relative w-full h-full max-w-[540px] mx-auto flex items-center justify-center will-change-transform"
      >
        <Image
          src="/images/ganpati-master.png"
          alt="Lord Ganesha blessing the wedding celebration"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 540px"
          className="object-cover object-center select-none"
        />

        {/* Soft edge blending vignettes */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#2A0D11]/90 via-transparent to-[#2A0D11]/50 pointer-events-none" />
      </div>
    </div>
  );
}
