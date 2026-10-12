'use client';

import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { CheckCircle2, Heart } from 'lucide-react';
import { FloralDividerMotif } from '@/components/Motifs';

export function RSVPSection() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    attendance: 'attending',
    guests: '1',
    dietary: '',
    song: '',
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('wedding_rsvp_submitted');
      if (saved === 'true') {
        setIsSubmitted(true);
      }
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim()) return;

    setIsSubmitted(true);
    if (typeof window !== 'undefined') {
      localStorage.setItem('wedding_rsvp_submitted', 'true');
      localStorage.setItem('wedding_rsvp_data', JSON.stringify(formData));
    }

    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.65 },
        colors: ['#F6DFA0', '#641F27', '#EFA6B5', '#F2B08A'],
      });
    } catch {}
  };

  return (
    <section
      id="rsvp"
      className="relative w-full py-8 sm:py-12 px-4 sm:px-6 bg-warm-ivory text-warm-brown overflow-hidden"
      aria-label="RSVP Invitation Section"
    >
      <div className="max-w-md mx-auto flex flex-col items-center text-center">
        {/* Top Floral Ornament */}
        <FloralDividerMotif className="w-28 h-6 mb-2.5" />

        <h2 className="font-instrument font-normal text-5xl sm:text-6xl text-deep-maroon tracking-[-0.01em] leading-tight mb-1">
          RSVP
        </h2>

        {/* Script Subhead from Column 5 */}
        <p className="font-script text-3xl sm:text-4xl text-deep-maroon mb-1.5 leading-snug">
          Let us know you&rsquo;re coming!
        </p>

        <p className="font-satoshi text-[10px] sm:text-[11px] tracking-[0.22em] uppercase text-warm-brown/70 font-semibold mb-4">
          KINDLY REPLY BY 30 SEPT 2026
        </p>

        {/* Not yet submitted: RSVP Trigger or Form */}
        {!isSubmitted ? (
          !isOpen ? (
            <button
              onClick={() => setIsOpen(true)}
              className="px-8 py-3.5 rounded-full bg-deep-maroon hover:bg-[#4E171E] text-butter-yellow font-satoshi font-semibold text-xs sm:text-sm tracking-[0.2em] uppercase transition-all shadow-md active:scale-95 border border-muted-gold/40 flex items-center justify-center gap-2"
            >
              <span>SUBMIT RSVP</span>
              <span className="text-base">→</span>
            </button>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="w-full p-6 sm:p-7 rounded-3xl bg-white/95 border border-deep-maroon/15 shadow-xl text-left flex flex-col gap-4 animate-fade-in"
            >
              <div>
                <label className="block text-xs font-sans font-semibold text-deep-maroon uppercase tracking-wider mb-1">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Radhika Sharma"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-warm-ivory border border-deep-maroon/20 text-xs sm:text-sm font-sans focus:outline-none focus:border-deep-maroon"
                />
              </div>

              <div>
                <label className="block text-xs font-sans font-semibold text-deep-maroon uppercase tracking-wider mb-1.5">
                  Will You Attend?
                </label>
                <div className="grid grid-cols-2 gap-2.5">
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, attendance: 'attending' })}
                    className={`py-2 px-3 rounded-xl text-xs font-sans font-semibold border transition-all ${
                      formData.attendance === 'attending'
                        ? 'bg-deep-maroon text-butter-yellow border-deep-maroon'
                        : 'bg-warm-ivory text-warm-brown border-deep-maroon/20'
                    }`}
                  >
                    Joyfully Accept
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, attendance: 'declining' })}
                    className={`py-2 px-3 rounded-xl text-xs font-sans font-semibold border transition-all ${
                      formData.attendance === 'declining'
                        ? 'bg-deep-maroon text-butter-yellow border-deep-maroon'
                        : 'bg-warm-ivory text-warm-brown border-deep-maroon/20'
                    }`}
                  >
                    Regretfully Decline
                  </button>
                </div>
              </div>

              {formData.attendance === 'attending' && (
                <>
                  <div>
                    <label className="block text-xs font-sans font-semibold text-deep-maroon uppercase tracking-wider mb-1">
                      Number of Guests
                    </label>
                    <select
                      value={formData.guests}
                      onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-warm-ivory border border-deep-maroon/20 text-xs sm:text-sm font-sans focus:outline-none focus:border-deep-maroon"
                    >
                      <option value="1">1 Person</option>
                      <option value="2">2 People</option>
                      <option value="3">3 People</option>
                      <option value="4">4 People</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-sans font-semibold text-deep-maroon uppercase tracking-wider mb-1">
                      Song request for the DJ
                    </label>
                    <input
                      type="text"
                      value={formData.song}
                      onChange={(e) => setFormData({ ...formData, song: e.target.value })}
                      placeholder="e.g. Gallan Goodiyaan"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-warm-ivory border border-deep-maroon/20 text-xs sm:text-sm font-sans focus:outline-none focus:border-deep-maroon"
                    />
                  </div>
                </>
              )}

              <div className="flex gap-2 pt-2">
                <button
                  type="submit"
                  className="flex-1 py-3 rounded-xl bg-deep-maroon text-butter-yellow text-xs sm:text-sm font-sans font-bold uppercase tracking-wider shadow-md active:scale-95"
                >
                  Confirm RSVP
                </button>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-3 rounded-xl bg-warm-ivory border border-deep-maroon/20 text-xs font-sans font-semibold text-warm-brown"
                >
                  Cancel
                </button>
              </div>
            </form>
          )
        ) : (
          /* Submitted State */
          <div className="p-6 sm:p-8 rounded-3xl bg-white/90 border border-deep-maroon/15 shadow-xl flex flex-col items-center max-w-sm">
            <CheckCircle2 className="w-10 h-10 text-deep-green mb-2" />
            <h3 className="font-sans font-bold text-deep-maroon text-lg mb-1">
              You&apos;re in!
            </h3>
            <p className="font-editorial italic text-xs sm:text-sm text-warm-brown/80 mb-3">
              We can&apos;t wait to celebrate under the palace lights with you.
            </p>
            <span className="text-[10px] uppercase tracking-widest text-deep-maroon/60 font-semibold">
              RSVP recorded ✓
            </span>
          </div>
        )}
      </div>
    </section>
  );
}
