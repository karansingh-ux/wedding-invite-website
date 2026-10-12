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
    title: 'Delliah Growing Up',
    year: '2004',
    caption: 'Refusing to leave the beach before sunset.',
    placeholderBg: 'from-[#F5E6D3] to-[#E8D4BE]',
  },
  {
    id: 'm2',
    title: 'Prashant Growing Up',
    year: '2006',
    caption: 'Proudly holding his very first championship medal.',
    placeholderBg: 'from-[#EBE0D0] to-[#DECBB4]',
  },
  {
    id: 'm3',
    title: 'First Coffee Date',
    year: '2019',
    caption: 'A quick coffee that somehow turned into hours of talking.',
    placeholderBg: 'from-[#F2DFCE] to-[#E2CCB7]',
  },
  {
    id: 'm4',
    title: 'First Trip to Udaipur',
    year: '2023',
    caption: 'The moment we whispered: "Imagine getting married here."',
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
          <h2 className="font-instrument font-normal text-3xl sm:text-4xl text-deep-maroon tracking-[-0.02em] leading-tight mb-2">
            Growing Up
          </h2>

          <p className="font-instrument italic text-base text-warm-brown/80 leading-relaxed max-w-sm mx-auto">
            A few quiet moments before this chapter began.
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
                className={`w-full aspect-[4/3] rounded-xl bg-gradient-to-br ${mem.placeholderBg} border border-warm-brown/10 flex flex-col items-center justify-center p-4 text-center relative overflow-hidden mb-3`}
              >
                <div className="w-9 h-9 rounded-full bg-warm-ivory/70 flex items-center justify-center text-deep-maroon/80 text-xs font-mono font-bold mb-1 shadow-inner">
                  {mem.year}
                </div>
                <span className="font-instrument font-normal text-base text-deep-maroon">
                  {mem.title}
                </span>
              </div>

              {/* Caption */}
              <p className="font-instrument italic text-xs xs:text-sm text-warm-brown/80 leading-snug text-center">
                &ldquo;{mem.caption}&rdquo;
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
