import React from 'react';

// Subtle South Indian Kolam line motif
export function KolamMotif({ className = "w-12 h-12 text-warm-brown/20" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <circle cx="50" cy="50" r="44" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" />
      <circle cx="50" cy="50" r="32" stroke="currentColor" strokeWidth="1" />
      <path d="M50 6 L50 94 M6 50 L94 50" stroke="currentColor" strokeWidth="1" opacity="0.6" />
      <path d="M50 18 Q65 35 82 50 Q65 65 50 82 Q35 65 18 50 Q35 35 50 18 Z" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="50" cy="50" r="4" fill="currentColor" />
      <circle cx="32" cy="32" r="2.5" fill="currentColor" opacity="0.8" />
      <circle cx="68" cy="32" r="2.5" fill="currentColor" opacity="0.8" />
      <circle cx="32" cy="68" r="2.5" fill="currentColor" opacity="0.8" />
      <circle cx="68" cy="68" r="2.5" fill="currentColor" opacity="0.8" />
    </svg>
  );
}

// Subtle Gujarati Bandhani diamond dots motif
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

// Handcrafted Brass Temple Bell SVG with tactile interactive swing
export function TempleBell({
  className = "w-8 h-10 text-muted-gold",
  isRinging = false
}: {
  className?: string;
  isRinging?: boolean;
}) {
  return (
    <div className={`transition-transform duration-300 origin-top cursor-pointer ${isRinging ? 'animate-[bounce_0.6s_ease-in-out]' : 'hover:rotate-6'}`}>
      <svg viewBox="0 0 40 50" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        {/* Chain ring */}
        <circle cx="20" cy="5" r="4" stroke="currentColor" strokeWidth="1.5" />
        {/* Top connector */}
        <rect x="18" y="9" width="4" height="6" fill="currentColor" rx="1" />
        {/* Bell dome */}
        <path d="M12 15 C12 15 15 28 8 36 L32 36 C25 28 28 15 28 15 Z" fill="#C7A85A" fillOpacity="0.85" stroke="#A68738" strokeWidth="1.2" />
        {/* Rim */}
        <rect x="6" y="36" width="28" height="4" rx="2" fill="#A68738" />
        {/* Clapper / tongue */}
        <circle cx="20" cy="42" r="3" fill="#641F27" />
      </svg>
    </div>
  );
}

// Delicate falling pink bougainvillea petal
export function BougainvilleaPetal({ className = "w-4 h-4 text-soft-pink" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M12 2 C8 6 4 11 5 17 C6 21 11 23 15 20 C19 17 21 12 19 8 C17 4 14 2 12 2 Z" opacity="0.85" />
    </svg>
  );
}
