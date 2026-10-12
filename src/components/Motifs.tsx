import React from 'react';

// Delicate Botanical Center Divider from the Reference
export function FloralDividerMotif({ className = "w-36 h-6 my-4 text-deep-maroon/70" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center select-none ${className}`}>
      <svg viewBox="0 0 160 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        {/* Left scroll hairline */}
        <path d="M10 14 H55 M25 14 Q35 9 45 14 Q35 19 25 14" stroke="#C5A059" strokeWidth="1" strokeLinecap="round" opacity="0.75" />
        <circle cx="20" cy="14" r="1.5" fill="#C5A059" opacity="0.8" />
        
        {/* Left leaves */}
        <path d="M58 13 C54 10 52 7 54 5 C57 6 60 9 58 13 Z" fill="#5A6B52" opacity="0.85" />
        <path d="M62 16 C60 19 58 22 61 23 C63 21 64 18 62 16 Z" fill="#5A6B52" opacity="0.85" />

        {/* Center pink bougainvillea floral blossom */}
        <g transform="translate(80, 14)">
          {/* Petals */}
          <ellipse cx="0" cy="-5" rx="3.5" ry="5" fill="#C44B68" opacity="0.9" />
          <ellipse cx="-4.5" cy="-1.5" rx="3.5" ry="4.5" transform="rotate(-40 -4.5 -1.5)" fill="#D95C7A" opacity="0.9" />
          <ellipse cx="4.5" cy="-1.5" rx="3.5" ry="4.5" transform="rotate(40 4.5 -1.5)" fill="#D95C7A" opacity="0.9" />
          <ellipse cx="-3" cy="4" rx="3" ry="4" transform="rotate(-80 -3 4)" fill="#B33E59" opacity="0.9" />
          <ellipse cx="3" cy="4" rx="3" ry="4" transform="rotate(80 3 4)" fill="#B33E59" opacity="0.9" />
          {/* Pistil center gold dot */}
          <circle cx="0" cy="0" r="1.8" fill="#F6DFA0" stroke="#8E2A3E" strokeWidth="0.5" />
        </g>

        {/* Right leaves */}
        <path d="M102 13 C106 10 108 7 106 5 C103 6 100 9 102 13 Z" fill="#5A6B52" opacity="0.85" />
        <path d="M98 16 C100 19 102 22 99 23 C97 21 96 18 98 16 Z" fill="#5A6B52" opacity="0.85" />

        {/* Right scroll hairline */}
        <path d="M105 14 H150 M135 14 Q125 9 115 14 Q125 19 135 14" stroke="#C5A059" strokeWidth="1" strokeLinecap="round" opacity="0.75" />
        <circle cx="140" cy="14" r="1.5" fill="#C5A059" opacity="0.8" />
      </svg>
    </div>
  );
}

// Ornate Hanging Brass Lantern with Bougainvillea Trellis from Column 1
export function HangingLanternMotif({ className = "w-24 h-36" }: { className?: string }) {
  return (
    <div className={`relative flex flex-col items-center select-none pointer-events-none ${className}`}>
      <svg viewBox="0 0 90 140" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        {/* Top chain links */}
        <line x1="45" y1="0" x2="45" y2="42" stroke="#8A6B29" strokeWidth="1.5" strokeDasharray="3 2" />
        
        {/* Trellis vine sprig across top */}
        <path d="M10 8 Q35 14 55 6 Q75 14 88 8" stroke="#485842" strokeWidth="2" strokeLinecap="round" fill="none" />
        {/* Tiny bougainvillea petals on vine */}
        <circle cx="22" cy="11" r="3" fill="#C44B68" />
        <circle cx="26" cy="13" r="2.5" fill="#D95C7A" />
        <circle cx="68" cy="11" r="3" fill="#C44B68" />
        <circle cx="73" cy="9" r="2.5" fill="#EFA6B5" />
        
        {/* Lantern Top Loop & Cap */}
        <circle cx="45" cy="45" r="4.5" stroke="#9E7412" strokeWidth="1.5" fill="none" />
        <path d="M36 51 H54 L51 55 H39 Z" fill="#B3861B" stroke="#7A560B" strokeWidth="0.8" />
        
        {/* Dome roof */}
        <path d="M37 55 Q45 49 53 55 L57 65 H33 Z" fill="#C59B27" stroke="#7A560B" strokeWidth="1" />
        
        {/* Glass body cage */}
        <path d="M35 65 L37 100 H53 L55 65 Z" fill="#FFF6DC" fillOpacity="0.85" stroke="#7A560B" strokeWidth="1.2" />
        
        {/* Internal warm candlelight glow */}
        <ellipse cx="45" cy="85" rx="6" ry="10" fill="#FDE08A" opacity="0.9" />
        <circle cx="45" cy="84" r="3.5" fill="#F59E0B" />
        <circle cx="45" cy="82" r="1.5" fill="#FFF" />
        
        {/* Cage struts */}
        <line x1="45" y1="65" x2="45" y2="100" stroke="#7A560B" strokeWidth="1" />
        <line x1="40" y1="65" x2="41.5" y2="100" stroke="#7A560B" strokeWidth="0.8" opacity="0.7" />
        <line x1="50" y1="65" x2="48.5" y2="100" stroke="#7A560B" strokeWidth="0.8" opacity="0.7" />
        
        {/* Lantern Base & Finial */}
        <path d="M34 100 H56 L53 105 H37 Z" fill="#B3861B" stroke="#7A560B" strokeWidth="1" />
        <path d="M45 105 L45 114" stroke="#7A560B" strokeWidth="1.5" />
        <circle cx="45" cy="116" r="2.5" fill="#C59B27" stroke="#7A560B" strokeWidth="0.8" />
      </svg>
    </div>
  );
}

// Bougainvillea Garland Archway Accent
export function BougainvilleaHeaderMotif({ className = "w-full max-w-sm h-14" }: { className?: string }) {
  return (
    <div className={`relative select-none pointer-events-none flex justify-center ${className}`}>
      <svg viewBox="0 0 320 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        {/* Natural arched vine branches */}
        <path d="M10 10 Q80 28 160 16 Q240 28 310 10" stroke="#485842" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M30 14 Q90 38 150 24 Q220 38 290 14" stroke="#384634" strokeWidth="1.2" strokeLinecap="round" opacity="0.6" />

        {/* Left flower cluster */}
        <circle cx="45" cy="18" r="4.5" fill="#B83856" />
        <circle cx="51" cy="15" r="4" fill="#D95C7A" />
        <circle cx="48" cy="22" r="3.5" fill="#EFA6B5" />
        <circle cx="75" cy="24" r="4" fill="#B83856" />
        <circle cx="81" cy="26" r="3.5" fill="#C44B68" />

        {/* Center garland drape */}
        <circle cx="140" cy="22" r="4" fill="#C44B68" />
        <circle cx="146" cy="24" r="3.5" fill="#EFA6B5" />
        <circle cx="160" cy="20" r="5" fill="#B83856" />
        <circle cx="166" cy="22" r="4" fill="#D95C7A" />
        <circle cx="174" cy="24" r="3.5" fill="#C44B68" />

        {/* Right flower cluster */}
        <circle cx="235" cy="26" r="4" fill="#B83856" />
        <circle cx="241" cy="24" r="3.5" fill="#D95C7A" />
        <circle cx="265" cy="18" r="4.5" fill="#C44B68" />
        <circle cx="271" cy="21" r="3.5" fill="#EFA6B5" />
      </svg>
    </div>
  );
}

// Subtle South Indian Kolam line motif
export function KolamMotif({ className = "w-12 h-12 text-warm-brown/20" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <circle cx="50" cy="50" r="44" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" />
      <circle cx="50" cy="50" r="32" stroke="currentColor" strokeWidth="1" />
      <path d="M50 6 L50 94 M6 50 L94 50" stroke="currentColor" strokeWidth="1" opacity="0.6" />
      <path d="M50 18 Q65 35 82 50 Q65 65 50 82 Q35 65 18 50 Q35 35 50 18 Z" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="50" cy="50" r="4" fill="currentColor" />
    </svg>
  );
}

// Subtle geometric diamond dots motif
export function BandhaniMotif({ className = "w-10 h-10 text-deep-maroon/20" }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <g transform="rotate(45 30 30)">
        <rect x="18" y="18" width="24" height="24" rx="2" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
        <circle cx="30" cy="30" r="3" fill="currentColor" />
        <circle cx="22" cy="22" r="1.5" fill="currentColor" opacity="0.7" />
        <circle cx="38" cy="22" r="1.5" fill="currentColor" opacity="0.7" />
        <circle cx="22" cy="38" r="1.5" fill="currentColor" opacity="0.7" />
        <circle cx="38" cy="38" r="1.5" fill="currentColor" opacity="0.7" />
      </g>
    </svg>
  );
}
