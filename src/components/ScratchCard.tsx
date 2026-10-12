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
  const [hasStartedScratching, setHasStartedScratching] = useState(false);
  const [isScratching, setIsScratching] = useState(false);
  const isRevealedRef = useRef(false);

  // Check persisted state in localStorage
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('wedding_secret_note_revealed');
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
      localStorage.setItem('wedding_secret_note_revealed', 'true');
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
    const midY = h / 2 - 12;

    ctx.save();
    ctx.shadowColor = 'rgba(0, 0, 0, 0.08)';
    ctx.shadowBlur = 4;
    ctx.shadowOffsetY = 1;

    // Seal outer ring
    ctx.beginPath();
    ctx.arc(midX, midY, 24, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(255, 248, 234, 0.88)';
    ctx.fill();
    ctx.strokeStyle = '#AA7C11';
    ctx.lineWidth = 1.5;
    ctx.stroke();

    // Seal inner ring
    ctx.beginPath();
    ctx.arc(midX, midY, 20, 0, Math.PI * 2);
    ctx.strokeStyle = '#D4AF37';
    ctx.lineWidth = 1;
    ctx.stroke();
    ctx.restore();

    // Central coin sparkle / star symbol
    ctx.fillStyle = '#641F27';
    ctx.font = 'bold 15px system-ui, sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('✦', midX, midY);

    // 5. Card text prompt on foil
    ctx.fillStyle = '#641F27';
    ctx.font = '700 13px Satoshi, -apple-system, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('A NOTE FROM US', midX, midY + 38);

    ctx.fillStyle = '#4A2A18';
    ctx.font = 'italic 12.5px "Instrument Serif", Georgia, serif';
    ctx.fillText('Scratch to reveal a little message.', midX, midY + 54);

    let clearedCount = 0;

    const checkScratchedPercentage = () => {
      if (isRevealedRef.current) return;
      try {
        const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const data = imgData.data;
        const sampleCount = 500;
        const step = Math.floor(data.length / (sampleCount * 4));
        let transparentCount = 0;

        for (let i = 0; i < sampleCount; i++) {
          const alphaIndex = i * step * 4 + 3;
          if (data[alphaIndex] < 64) {
            transparentCount++;
          }
        }

        const ratio = transparentCount / sampleCount;
        if (ratio >= 0.65) {
          handleReveal();
        }
      } catch {
        if (clearedCount > 35) {
          handleReveal();
        }
      }
    };

    const scratch = (clientX: number, clientY: number) => {
      setHasStartedScratching(true);
      const cRect = canvas.getBoundingClientRect();
      const x = clientX - cRect.left;
      const y = clientY - cRect.top;

      ctx.globalCompositeOperation = 'destination-out';
      ctx.beginPath();
      ctx.arc(x, y, 28, 0, Math.PI * 2);
      ctx.fill();

      clearedCount += 1;
      if (clearedCount % 8 === 0) {
        checkScratchedPercentage();
      }
    };

    const onMouseDown = () => setIsScratching(true);
    const onMouseUp = () => {
      setIsScratching(false);
      checkScratchedPercentage();
    };
    const onMouseMove = (e: MouseEvent) => {
      if (isScratching) scratch(e.clientX, e.clientY);
    };

    const onTouchStart = () => {
      setIsScratching(true);
      setHasStartedScratching(true);
    };
    const onTouchEnd = () => {
      setIsScratching(false);
      checkScratchedPercentage();
    };
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
      className="relative w-full max-w-[430px] mx-auto rounded-2xl p-[1px] bg-gradient-to-b from-[#E6D7B8] via-[#CDB889] to-[#E2D2B0] shadow-[0_10px_35px_rgba(100,31,39,0.06),0_2px_8px_rgba(0,0,0,0.03)] border border-muted-gold/30 select-none"
    >
      {/* Outer Letter Card Shell with Inset Frame */}
      <div className="relative w-full rounded-[15px] overflow-hidden bg-[#FFFEFB] min-h-[250px] flex flex-col justify-between">
        {/* Subtle Paper Texture */}
        <div className="absolute inset-0 paper-texture pointer-events-none opacity-20" />
        
        {/* Fine Inset Gold Deckle Hairline */}
        <div className="absolute inset-2.5 rounded-[10px] border border-muted-gold/25 pointer-events-none" />

        {/* Revealed Content: Personal Letter from the Couple */}
        <div className="relative z-10 p-6 sm:p-8 flex flex-col items-center text-center bg-gradient-to-b from-[#FFFEFB] via-[#FFFDF6] to-[#FAF5EC]">
          <span className="text-[9.5px] font-satoshi font-semibold uppercase tracking-[0.24em] text-deep-maroon/70 mb-3">
            ✧ A Personal Note ✧
          </span>

          <h3 className="font-instrument italic font-normal text-2xl sm:text-[27px] text-deep-maroon tracking-[-0.01em] leading-snug mb-3.5 px-1">
            &ldquo;We&rsquo;re so glad you&rsquo;re part of our story.&rdquo;
          </h3>

          <p className="font-instrument italic text-[14.5px] sm:text-[15.5px] text-warm-brown/85 leading-relaxed max-w-sm mb-5 px-1">
            As we begin this beautiful new chapter, having our favourite people around us means more than words can say. Thank you for being part of our lives and for making our happiest moments even more special.
          </p>

          <div className="flex flex-col items-center">
            <span className="font-script text-xl sm:text-2xl text-deep-maroon leading-none mb-1">
              With all our love,
            </span>
            <span className="font-instrument text-base sm:text-lg text-deep-maroon font-normal tracking-[-0.01em]">
              Prashant &amp; Delliah
            </span>
          </div>

          {isRevealed && (
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF5EC] border border-muted-gold/35 text-deep-maroon text-[9.5px] font-satoshi font-medium tracking-wider uppercase mt-4 shadow-sm">
              <Check className="w-3 h-3 text-deep-maroon/75" />
              <span>Note Unlocked</span>
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

            {/* Minimal horizontal scratch guidance cue */}
            {!hasStartedScratching && (
              <div className="absolute bottom-3.5 left-1/2 -translate-x-1/2 z-20 pointer-events-none transition-opacity duration-300">
                <div className="flex items-center gap-1.5 text-deep-maroon/75">
                  <svg
                    className="w-3.5 h-3.5 text-deep-maroon/70 flex-shrink-0"
                    viewBox="0 0 20 20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M3 17L17 3" />
                    <path d="M7 17l10-10" opacity="0.6" />
                    <circle cx="15.5" cy="4.5" r="1.5" fill="currentColor" stroke="none" />
                  </svg>
                  <span className="font-satoshi text-[9.5px] sm:text-[10px] font-semibold tracking-[0.18em] uppercase whitespace-nowrap">
                    SCRATCH TO REVEAL
                  </span>
                </div>
              </div>
            )}

            {/* Minimal text action reveal control */}
            <div className="absolute top-3.5 right-4 z-20">
              <button
                onClick={handleReveal}
                className="font-satoshi text-[10px] sm:text-[11px] font-semibold tracking-[0.16em] uppercase text-deep-maroon/75 hover:text-deep-maroon active:scale-95 transition-all py-1 px-1.5 focus:outline-none"
                title="Quick reveal"
              >
                ✧ REVEAL
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
