'use client';

import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { getSoundEngine } from '@/utils/audio';

interface AudioControllerProps {
  started: boolean;
}

export function AudioController({ started }: AudioControllerProps) {
  const [isMuted, setIsMuted] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleToggle = () => {
    const soundEngine = getSoundEngine();
    if (soundEngine) {
      const muted = soundEngine.toggleMute();
      setIsMuted(muted);
    }
  };

  if (!isMounted || !started) return null;

  return (
    <aside
      aria-label="Soundtrack Controls"
      className="fixed top-4 right-4 z-50 transition-all duration-500 ease-out"
    >
      <button
        onClick={handleToggle}
        aria-label={isMuted ? 'Unmute music' : 'Mute music'}
        className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-warm-ivory/80 backdrop-blur-md border border-deep-maroon/15 shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-center text-deep-maroon active:scale-90"
      >
        {isMuted ? (
          <VolumeX className="w-3.5 h-3.5 text-warm-brown/60" />
        ) : (
          <Volume2 className="w-3.5 h-3.5 text-deep-maroon" />
        )}
      </button>
    </aside>
  );
}
