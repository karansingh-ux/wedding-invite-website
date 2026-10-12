'use client';

import React, { useRef, useState, useEffect, useCallback } from 'react';
import confetti from 'canvas-confetti';
import { Sparkles, Check, Hand } from 'lucide-react';
import { getSoundEngine } from '@/utils/audio';

interface ScratchCardProps {
  onRevealed?: () => void;
}

export function ScratchCard({ onRevealed }: ScratchCardProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isRevealed, setIsRevealed] = useState(false);
  const [hasStartedScratching, setHasStartedScratching] = useState(false);
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
      getSoundEngine().playTempleBell();
    } catch {
      // Audio fallback
    }

    try {
      confetti({
        particleCount: 50,
        spread: 65,
        origin: { y: 0.65 },
        colors: ['#D4AF37', '#F6DFA0', '#EFA6B5', '#F2B08A', '#641F27'],
      });
    } catch {
      // Confetti fallback
    }

    onRevealed?.();
  }, [onRevealed]);

  // Canvas drawing for interactive gold foil scratching
  useEffect(() => {
    if (isRevealed) return;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);

    const w = rect.width;
    const h = rect.height;

    // 1. Rich multi-stop metallic gold foil gradient
    const goldGrad = ctx.createLinearGradient(0, 0, w, h);
    goldGrad.addColorStop(0, '#D4AF37');
    goldGrad.addColorStop(0.18, '#FBF0BE');
    goldGrad.addColorStop(0.38, '#DFB752');
    goldGrad.addColorStop(0.62, '#F4E3A1');
    goldGrad.addColorStop(0.82, '#C59B27');
    goldGrad.addColorStop(1, '#9E7412');
    ctx.fillStyle = goldGrad;
    ctx.fillRect(0, 0, w, h);

    // 2. Realistic metallic foil brushed noise & gold dust flecks
    for (let i = 0; i < 450; i++) {
      const rx = Math.random() * w;
      const ry = Math.random() * h;
      ctx.fillStyle = Math.random() > 0.45 ? 'rgba(255, 255, 255, 0.4)' : 'rgba(120, 78, 15, 0.22)';
      ctx.fillRect(rx, ry, 1.5, 1.5);
    }

    // 3. Ornate double gold-leaf letterpress border
    ctx.strokeStyle = 'rgba(100, 31, 39, 0.35)';
    ctx.lineWidth = 1;
    ctx.strokeRect(10, 10, w - 20, h - 20);

    ctx.strokeStyle = 'rgba(212, 175, 55, 0.8)';
    ctx.lineWidth = 1.5;
    ctx.strokeRect(14, 14, w - 28, h - 28);

    // Corner decorative diamond marks
    const corners = [
      [14, 14],
      [w - 14, 14],
      [14, h - 14],
      [w - 14, h - 14],
    ];
    ctx.fillStyle = '#641F27';
    corners.forEach(([cx, cy]) => {
      ctx.beginPath();
      ctx.arc(cx, cy, 3, 0, Math.PI * 2);
      ctx.fill();
    });

    // 4. Central embossed gold foil coin / seal badge
    const midX = w / 2;
    const midY = h / 2 - 8;

    ctx.save();
    ctx.shadowColor = 'rgba(0, 0, 0, 0.15)';
    ctx.shadowBlur = 4;
    ctx.shadowOffsetY = 2;

    // Seal outer ring
    ctx.beginPath();
    ctx.arc(midX, midY, 26, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(255, 248, 234, 0.85)';
    ctx.fill();
    ctx.strokeStyle = '#AA7C11';
    ctx.lineWidth = 2;
    ctx.stroke();

    // Seal inner ring
    ctx.beginPath();
    ctx.arc(midX, midY, 22, 0, Math.PI * 2);
    ctx.strokeStyle = '#D4AF37';
    ctx.lineWidth = 1;
    ctx.stroke();
    ctx.restore();

    // Central coin sparkle / star symbol
    ctx.fillStyle = '#641F27';
    ctx.font = 'bold 18px system-ui, sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('✦', midX, midY);

    // 5. Card text prompt on foil
    ctx.fillStyle = '#641F27';
    ctx.font = '700 13px system-ui, -apple-system, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('SECRET EVENT PASS', midX, midY + 42);

    ctx.fillStyle = '#4A2A18';
    ctx.font = 'italic 12px Georgia, serif';
    ctx.fillText('Rub & scratch gold foil with finger to reveal', midX, midY + 59);

    let clearedCount = 0;

    const scratch = (clientX: number, clientY: number) => {
      setHasStartedScratching(true);
      const cRect = canvas.getBoundingClientRect();
      const x = clientX - cRect.left;
      const y = clientY - cRect.top;

      ctx.globalCompositeOperation = 'destination-out';
      ctx.beginPath();
      ctx.arc(x, y, 26, 0, Math.PI * 2);
      ctx.fill();

      clearedCount += 1;
      // Auto-reveal after enough interactive scratch strokes
      if (clearedCount > 28 && !isRevealedRef.current) {
        handleReveal();
      }
    };

    const onMouseDown = () => setIsScratching(true);
    const onMouseUp = () => setIsScratching(false);
    const onMouseMove = (e: MouseEvent) => {
      if (isScratching) scratch(e.clientX, e.clientY);
    };

    const onTouchStart = () => {
      setIsScratching(true);
      setHasStartedScratching(true);
    };
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
      className="relative w-full max-w-[420px] mx-auto rounded-3xl p-[3px] bg-gradient-to-br from-amber-300 via-amber-500 to-amber-700 shadow-2xl shadow-amber-950/20 select-none"
    >
      {/* Outer Card Shell with Letterpress Border */}
      <div className="relative w-full rounded-[21px] overflow-hidden bg-[#FFFDF7] border border-amber-200/60 min-h-[220px] flex flex-col justify-between">
        
        {/* Revealed Content underneath */}
        <div className="p-6 sm:p-7 flex flex-col items-center text-center bg-gradient-to-b from-[#FFFDF7] via-[#FFF9ED] to-[#FBF2E0]">
          <span className="text-[10px] font-satoshi font-semibold uppercase tracking-[0.2em] text-deep-maroon/70 mb-2">
            The Invitation
          </span>

          <h4 className="font-instrument font-normal text-3xl sm:text-4xl text-deep-maroon tracking-[-0.02em] leading-tight mb-1">
            The Sunshine Soirée
          </h4>

          <p className="font-satoshi font-medium text-warm-brown text-xs tracking-wider uppercase mb-1">
            Saturday, 22 Nov · 10:30 AM
          </p>

          <p className="font-instrument italic text-warm-brown/85 text-sm sm:text-base leading-relaxed max-w-xs mb-3">
            Poolside Lawn · Wear bright yellows &amp; florals · Prepare for petals &amp; turmeric.
          </p>

          {isRevealed && (
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-300/60 text-emerald-800 text-[11px] font-satoshi font-medium mt-1">
              <Check className="w-3.5 h-3.5 text-emerald-700" />
              <span>Invitation Unlocked</span>
            </div>
          )}
        </div>

        {/* Interactive Scratch Foil Canvas Layer */}
        {!isRevealed && (
          <>
            <canvas
              ref={canvasRef}
              className="absolute inset-0 w-full h-full cursor-pointer z-10 touch-none"
            />

            {/* Diagonal metallic light sheen gleam sweep */}
            <div className="pointer-events-none absolute inset-0 z-15 overflow-hidden">
              <div className="w-1/2 h-full bg-gradient-to-r from-transparent via-white/40 to-transparent animate-foil-shimmer" />
            </div>

            {/* Interactive scratch guidance pill (fades out on first touch) */}
            {!hasStartedScratching && (
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 pointer-events-none">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-deep-maroon/90 text-warm-ivory text-[10px] font-sans font-medium tracking-wider uppercase shadow-md backdrop-blur-sm animate-hand-swipe">
                  <Hand className="w-3.5 h-3.5 text-amber-300 animate-bounce" />
                  <span>Swipe finger to scratch</span>
                </div>
              </div>
            )}

            {/* Discreet instant reveal button */}
            <div className="absolute top-3 right-3 z-20">
              <button
                onClick={handleReveal}
                className="text-[9px] font-sans font-bold uppercase tracking-wider text-deep-maroon/90 px-2.5 py-1 rounded-full bg-warm-ivory/90 border border-amber-300/80 shadow-sm hover:bg-white active:scale-95 transition-transform"
                title="Quick reveal"
              >
                Reveal ✦
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
