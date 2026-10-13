'use client';

import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import gsap from 'gsap';

import { useSmoothScroll } from '@/components/SmoothScroll';

interface GanpatiOpeningProps {
  onEnter: () => void;
  isEntered: boolean;
  onExitStart?: () => void;
}

export function GanpatiOpening({ onEnter, isEntered, onExitStart }: GanpatiOpeningProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageWrapperRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);
  const { stopScroll, startScroll } = useSmoothScroll();

  // Keep latest callback references safe from re-render closures
  const onEnterRef = useRef(onEnter);
  onEnterRef.current = onEnter;
  const onExitStartRef = useRef(onExitStart);
  onExitStartRef.current = onExitStart;

  useEffect(() => {
    if (isEntered) return;

    // Lock scroll during sacred blessing
    stopScroll();

    // Safety fallback: guarantee website is always revealed even if animation is interrupted
    const fallbackTimer = setTimeout(() => {
      startScroll();
      onExitStartRef.current?.();
      onEnterRef.current();
    }, 4200);

    const ctx = gsap.context(() => {
      if (!containerRef.current || !imageWrapperRef.current) {
        startScroll();
        onEnterRef.current();
        return;
      }

      const tl = gsap.timeline({
        onComplete: () => {
          startScroll();
          onEnterRef.current();
        },
      });

      timelineRef.current = tl;

      // 1. Initial gentle entrance of Lord Ganesha
      tl.fromTo(
        imageWrapperRef.current,
        { scale: 1.05, opacity: 0, filter: 'blur(6px)' },
        { scale: 1.0, opacity: 1, filter: 'blur(0px)', duration: 0.9, ease: 'power2.out' }
      );

      // 2. Calm reverent contemplation hold
      tl.to({}, { duration: 1.2 });

      // 3. Coordinated exit milestone (wakes up ResortArrival behind preloader)
      tl.addLabel('exit');
      tl.call(() => {
        startScroll();
        onExitStartRef.current?.();
      });

      // 4. Cinematic dissolve: gentle upward float, subtle zoom and blur into the atmosphere
      tl.to(imageWrapperRef.current, {
        y: -40,
        scale: 1.05,
        opacity: 0,
        filter: 'blur(8px)',
        duration: 0.95,
        ease: 'power2.inOut',
      });

      tl.to(
        containerRef.current,
        {
          opacity: 0,
          duration: 0.95,
          ease: 'power2.inOut',
        },
        '<'
      );
    }, containerRef);

    return () => {
      clearTimeout(fallbackTimer);
      startScroll();
      ctx.revert();
    };
  }, [isEntered, stopScroll, startScroll]);

  // Tap/click skips directly to exit
  const handleUserTap = () => {
    if (!timelineRef.current) {
      onExitStartRef.current?.();
      onEnterRef.current();
      return;
    }
    const tl = timelineRef.current;
    const exitTime = tl.labels['exit'] ?? 2.1;
    if (tl.time() < exitTime) {
      tl.seek(exitTime);
    }
  };

  if (isEntered) return null;

  return (
    <div
      ref={containerRef}
      onClick={handleUserTap}
      className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-warm-ivory cursor-pointer select-none"
      aria-label="Ganpati Devotional Opening"
    >
      {/* Dominant Master Ganpati Image (Responsive canvas) */}
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
          className="object-cover object-center select-none pointer-events-none"
        />
      </div>
    </div>
  );
}
