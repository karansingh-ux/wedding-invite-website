'use client';

import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface MemoryItem {
  id: string;
  title: string;
  year: string;
  caption: string;
  placeholderBg: string;
}

const memories: MemoryItem[] = [
  {
    id: 'm1',
    title: 'Ananya at Marina Beach',
    year: '2004',
    caption: 'Refusing to leave the waves before sunset.',
    placeholderBg: 'from-[#F5E6D3] to-[#E8D4BE]',
  },
  {
    id: 'm2',
    title: 'Dhruv in Ahmedabad',
    year: '2006',
    caption: 'Proudly holding his very first cricket medal.',
    placeholderBg: 'from-[#EBE0D0] to-[#DECBB4]',
  },
  {
    id: 'm3',
    title: 'First Coffee in Mumbai',
    year: '2019',
    caption: 'A 20-minute coffee that somehow turned into four hours.',
    placeholderBg: 'from-[#F2DFCE] to-[#E2CCB7]',
  },
  {
    id: 'm4',
    title: 'First Udaipur Trip',
    year: '2023',
    caption: 'The exact weekend we whispered: "Imagine getting married here."',
    placeholderBg: 'from-[#F4E3D7] to-[#E4CFBF]',
  },
];

export function Memories() {
  const containerRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 80%',
          },
        }
      );

      gsap.fromTo(
        '.memory-card',
        { y: 35, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.18,
          duration: 1.0,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.memories-grid',
            start: 'top 85%',
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      id="memories"
      className="relative w-full py-20 px-4 sm:px-6 bg-[#FAF4EA] text-warm-brown overflow-hidden"
      aria-label="Childhood and Early Memories"
    >
      <div className="max-w-md sm:max-w-2xl mx-auto flex flex-col items-center">
        {/* Header */}
        <header ref={headerRef} className="text-center mb-10 max-w-md">
          <span className="text-[10px] sm:text-[11px] font-sans font-semibold uppercase tracking-[0.25em] text-deep-maroon/70 mb-2 block">
            BEFORE ALL OF THIS
          </span>

          <h2 className="font-display-title text-2xl xs:text-3xl sm:text-4xl font-bold text-deep-maroon tracking-tight leading-tight mb-3">
            A FEW THINGS WE GREW UP WITH.
          </h2>

          <p className="font-editorial italic text-xs xs:text-sm sm:text-base text-warm-brown/85 leading-relaxed">
            Before the wedding, before the outfits, before everyone started asking about the date — there were these two.
          </p>
        </header>

        {/* 2-Column Responsive Memory Cards Grid */}
        <div className="memories-grid grid grid-cols-1 sm:grid-cols-2 gap-5 w-full">
          {memories.map((mem) => (
            <div
              key={mem.id}
              className="memory-card p-4 sm:p-5 rounded-2xl bg-white/80 border border-muted-gold/25 shadow-sm hover:shadow-md transition-shadow flex flex-col"
            >
              {/* Photo Frame Container */}
              <div
                className={`w-full aspect-[4/3] rounded-xl bg-gradient-to-br ${mem.placeholderBg} border border-warm-brown/10 flex flex-col items-center justify-center p-4 text-center relative overflow-hidden mb-3.5`}
              >
                <div className="w-10 h-10 rounded-full bg-warm-ivory/60 flex items-center justify-center text-deep-maroon/70 text-xs font-serif font-bold mb-1 shadow-inner">
                  {mem.year}
                </div>
                <span className="font-sans font-semibold text-deep-maroon text-xs sm:text-sm">
                  {mem.title}
                </span>
                <span className="text-[10px] uppercase tracking-widest text-warm-brown/60 font-medium mt-0.5">
                  Archival Memory
                </span>
              </div>

              {/* Caption */}
              <p className="font-editorial italic text-xs xs:text-sm text-warm-brown/85 leading-snug">
                &ldquo;{mem.caption}&rdquo;
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
