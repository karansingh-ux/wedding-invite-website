'use client';

import React, { useRef, useState, useEffect, useCallback } from 'react';
import confetti from 'canvas-confetti';
import { Sparkles, Check } from 'lucide-react';

interface ScratchCardProps {
  onRevealed?: () => void;
}

export function ScratchCard({ onRevealed }: ScratchCardProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isRevealed, setIsRevealed] = useState(false);
  const [isScratching, setIsScratching] = useState(false);
  const isRevealedRef = useRef(false);

  // Check persisted state in localStorage
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('wedding_scratch_revealed');
      if (saved === 'true') {
        setIsRevealed(true);
        isRevealedRef.current = true;
        onRevealed?.();
      }
    }
  }, [onRevealed]);

  const handleReveal = useCallback(() => {
    if (isRevealedRef.current) return;
    isRevealedRef.current = true;
    setIsRevealed(true);
    if (typeof window !== 'undefined') {
      localStorage.setItem('wedding_scratch_revealed', 'true');
    }

    try {
      confetti({
        particleCount: 45,
        spread: 60,
        origin: { y: 0.7 },
        colors: ['#F6DFA0', '#EFA6B5', '#F2B08A', '#641F27'],
      });
    } catch {
      // Confetti fallback
    }

    onRevealed?.();
  }, [onRevealed]);

  // Canvas drawing for interactive scratching
  useEffect(() => {
    if (isRevealed) return;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * window.devicePixelRatio;
    canvas.height = rect.height * window.devicePixelRatio;
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio);

    // Fill with letterpress gold foil/butter-yellow textured scratch surface
    ctx.fillStyle = '#E8D494';
    ctx.fillRect(0, 0, rect.width, rect.height);

    // Decorative patterned dots on scratch surface
    ctx.fillStyle = '#C7A85A';
    for (let x = 12; x < rect.width; x += 20) {
      for (let y = 12; y < rect.height; y += 20) {
        ctx.beginPath();
        ctx.arc(x, y, 1.2, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Centered foil prompt text
    ctx.fillStyle = '#641F27';
    ctx.font = '600 13px system-ui, -apple-system, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('A little secret for you.', rect.width / 2, rect.height / 2 - 8);

    ctx.fillStyle = '#784E33';
    ctx.font = 'italic 12px Georgia, serif';
    ctx.fillText("Scratch it. Don't overthink it.", rect.width / 2, rect.height / 2 + 14);

    let clearedPixels = 0;
    const totalPixels = rect.width * rect.height;

    const scratch = (clientX: number, clientY: number) => {
      const cRect = canvas.getBoundingClientRect();
      const x = clientX - cRect.left;
      const y = clientY - cRect.top;

      ctx.globalCompositeOperation = 'destination-out';
      ctx.beginPath();
      ctx.arc(x, y, 22, 0, Math.PI * 2);
      ctx.fill();

      clearedPixels += 1;
      if (clearedPixels > 25 && !isRevealedRef.current) {
        handleReveal();
      }
    };

    const onMouseDown = () => setIsScratching(true);
    const onMouseUp = () => setIsScratching(false);
    const onMouseMove = (e: MouseEvent) => {
      if (isScratching) scratch(e.clientX, e.clientY);
    };

    const onTouchStart = () => setIsScratching(true);
    const onTouchEnd = () => setIsScratching(false);
    const onTouchMove = (e: TouchEvent) => {
      if (e.touches[0]) scratch(e.touches[0].clientX, e.touches[0].clientY);
    };

    canvas.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    canvas.addEventListener('mousemove', onMouseMove);

    canvas.addEventListener('touchstart', onTouchStart, { passive: true });
    window.addEventListener('touchend', onTouchEnd);
    canvas.addEventListener('touchmove', onTouchMove, { passive: true });

    return () => {
      canvas.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      canvas.removeEventListener('mousemove', onMouseMove);

      canvas.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchend', onTouchEnd);
      canvas.removeEventListener('touchmove', onTouchMove);
    };
  }, [isRevealed, isScratching, handleReveal]);

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-sm mx-auto rounded-2xl overflow-hidden shadow-lg border border-muted-gold/30 bg-warm-ivory select-none"
    >
      {/* Revealed Content underneath */}
      <div className="p-6 flex flex-col items-center text-center bg-gradient-to-b from-warm-ivory to-soft-cream">
        <span className="text-[10px] font-sans font-semibold uppercase tracking-[0.25em] text-deep-maroon/70 mb-1">
          SUNSHINE SOIRÉE
        </span>
        <h4 className="font-sans font-bold text-deep-maroon text-lg sm:text-xl mb-1">
          Saturday, 22 Nov · 10:30 AM
        </h4>
        <p className="font-editorial italic text-warm-brown text-sm sm:text-base mb-3">
          Dress for sunshine. Expect colour.
        </p>

        {isRevealed && (
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-butter-yellow/60 text-deep-maroon text-xs font-sans font-medium animate-soft-pulse">
            <Check className="w-3.5 h-3.5 text-deep-maroon" />
            <span>You found it. Now go get ready.</span>
          </div>
        )}
      </div>

      {/* Interactive Scratch Foil Canvas Layer */}
      {!isRevealed && (
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full cursor-pointer z-10 touch-none"
        />
      )}

      {/* Manual reveal button fallback for quick discoverability */}
      {!isRevealed && (
        <div className="absolute bottom-2 right-2 z-20">
          <button
            onClick={handleReveal}
            className="text-[9px] font-sans font-semibold uppercase tracking-wider text-deep-maroon/80 px-2 py-1 rounded bg-warm-ivory/80 backdrop-blur-sm hover:bg-warm-ivory"
          >
            Reveal
          </button>
        </div>
      )}
    </div>
  );
}
