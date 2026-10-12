'use client';

import React, { useMemo } from 'react';

export function PetalAtmosphere() {
  // Sparse, delicate ambient drifting petals with restrained opacity
  const petals = useMemo(() => {
    return Array.from({ length: 7 }).map((_, i) => ({
      id: i,
      left: `${(i * 15 + 6) % 94}%`,
      delay: `${(i * 2.2) % 10}s`,
      duration: `${11 + (i % 4) * 3}s`,
      size: 8 + (i % 3) * 3,
      rotation: (i * 53) % 360,
      opacity: 0.22 + (i % 3) * 0.08,
      color: i % 2 === 0 ? '#EFA6B5' : '#F2B08A',
    }));
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 overflow-hidden z-10"
    >
      {petals.map((p) => (
        <span
          key={p.id}
          className="petal-drift absolute top-0"
          style={{
            left: p.left,
            animationDelay: p.delay,
            animationDuration: p.duration,
            opacity: p.opacity,
            transform: `rotate(${p.rotation}deg)`,
          }}
        >
          <svg
            width={p.size}
            height={p.size * 1.3}
            viewBox="0 0 24 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 2 C6 7 2 15 4 23 C6 28 13 31 18 27 C23 23 24 16 21 10 C18 5 15 2 12 2 Z"
              fill={p.color}
            />
          </svg>
        </span>
      ))}
    </div>
  );
}
