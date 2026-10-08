'use client';

import React, { useMemo } from 'react';

export function PetalAtmosphere() {
  // Precompute 14 organic petal positions with varied timing and sizes
  const petals = useMemo(() => {
    return Array.from({ length: 14 }).map((_, i) => ({
      id: i,
      left: `${(i * 7 + (i % 3) * 11) % 96}%`,
      delay: `${(i * 1.4) % 9}s`,
      duration: `${9 + (i % 5) * 2.5}s`,
      size: 10 + (i % 4) * 4,
      rotation: (i * 47) % 360,
      opacity: 0.45 + (i % 3) * 0.15,
      color: i % 3 === 0 ? '#EFA6B5' : i % 3 === 1 ? '#F2B08A' : '#D94875',
    }));
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 overflow-hidden z-20"
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
