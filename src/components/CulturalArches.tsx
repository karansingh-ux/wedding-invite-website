'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface ArchFrameProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * 1. GUJARATI FESTIVE HAVELI ARCH (10th Morning: Haldi)
 * - 5-cusped scalloped archway with marigold toran festoons,
 *   geometric bandhani dot embroidery accents, and hanging brass jhumka latkans.
 */
export function GujaratiHaveliArch({ children, className = '' }: ArchFrameProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.95, ease: [0.16, 1, 0.3, 1] }}
      className={`relative w-full max-w-[350px] mx-auto will-change-transform ${className}`}
    >
      <div className="relative w-full aspect-[4/5] max-h-[440px]">
        {/* SVG Defs for ClipPath */}
        <svg className="absolute w-0 h-0" aria-hidden="true" focusable="false">
          <defs>
            <clipPath id="gujarati-haveli-clip" clipPathUnits="objectBoundingBox">
              <path d="
                M 0.04,1
                L 0.04,0.36
                C 0.04,0.28 0.12,0.24 0.18,0.24
                C 0.22,0.18 0.30,0.14 0.36,0.14
                C 0.42,0.07 0.47,0.02 0.50,0
                C 0.53,0.02 0.58,0.07 0.64,0.14
                C 0.70,0.14 0.78,0.18 0.82,0.24
                C 0.88,0.24 0.96,0.28 0.96,0.36
                L 0.96,1
                Z
              " />
            </clipPath>
          </defs>
        </svg>

        {/* Clipped Artwork Container with subtle Ken Burns breath */}
        <div
          className="relative w-full h-full overflow-hidden shadow-2xl bg-soft-cream"
          style={{ clipPath: 'url(#gujarati-haveli-clip)' }}
        >
          <motion.div
            initial={{ scale: 1.08 }}
            whileInView={{ scale: 1.0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full h-full"
          >
            {children}
          </motion.div>

          {/* Warm turmeric & terracotta inner ambient tint */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#B45309]/30 via-transparent to-[#F59E0B]/10 pointer-events-none" />
        </div>

        {/* Vector Decorative Overlay: Cusped Border, Marigold Toran & Jhumkas */}
        <svg
          viewBox="0 0 350 438"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-0 w-full h-full pointer-events-none select-none z-20"
        >
          {/* Outer Ornamental Arch Border (Gold Filigree) */}
          <path
            d="
              M 14,438
              L 14,158
              C 14,122 42,105 63,105
              C 77,79 105,61 126,61
              C 147,31 165,9 175,0
              C 185,9 203,31 224,61
              C 245,61 273,79 287,105
              C 308,105 336,122 336,158
              L 336,438
            "
            stroke="#D4AF37"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Inner Bandhani Dotted Accent Stitch Line */}
          <path
            d="
              M 22,438
              L 22,164
              C 22,130 48,114 67,114
              C 80,90 106,73 125,73
              C 144,45 163,22 175,12
              C 187,22 206,45 225,73
              C 244,73 270,90 283,114
              C 302,114 328,130 328,164
              L 328,438
            "
            stroke="#F59E0B"
            strokeWidth="1.5"
            strokeDasharray="3 4"
            opacity="0.85"
          />

          {/* Marigold Toran Flower Garlands */}
          {[
            { cx: 65, cy: 110, r: 6 },
            { cx: 95, cy: 92, r: 6 },
            { cx: 126, cy: 68, r: 6.5 },
            { cx: 153, cy: 38, r: 6.5 },
            { cx: 175, cy: 15, r: 7.5 },
            { cx: 197, cy: 38, r: 6.5 },
            { cx: 224, cy: 68, r: 6.5 },
            { cx: 255, cy: 92, r: 6 },
            { cx: 285, cy: 110, r: 6 },
          ].map((flower, i) => (
            <g key={i}>
              <circle cx={flower.cx} cy={flower.cy} r={flower.r + 2} fill="#F59E0B" opacity="0.9" />
              <circle cx={flower.cx} cy={flower.cy} r={flower.r} fill="#EA580C" />
              <circle cx={flower.cx} cy={flower.cy} r={flower.r * 0.4} fill="#FEF08A" />
            </g>
          ))}

          {/* Left Hanging Brass Jhumka with Gentle Pendulum Sway */}
          <motion.g
            transform="translate(18, 175)"
            animate={{ rotate: [-2.5, 2.5, -2.5] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
            style={{ transformOrigin: '30px 175px' }}
          >
            <line x1="12" y1="0" x2="12" y2="18" stroke="#D4AF37" strokeWidth="1.5" />
            <path d="M 4,18 C 4,12 20,12 20,18 Z" fill="#D4AF37" stroke="#92400E" strokeWidth="1" />
            <circle cx="7" cy="22" r="1.5" fill="#D4AF37" />
            <circle cx="12" cy="23" r="1.8" fill="#F59E0B" />
            <circle cx="17" cy="22" r="1.5" fill="#D4AF37" />
          </motion.g>

          {/* Right Hanging Brass Jhumka with Counter-Sway */}
          <motion.g
            transform="translate(308, 175)"
            animate={{ rotate: [2.5, -2.5, 2.5] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
            style={{ transformOrigin: '320px 175px' }}
          >
            <line x1="12" y1="0" x2="12" y2="18" stroke="#D4AF37" strokeWidth="1.5" />
            <path d="M 4,18 C 4,12 20,12 20,18 Z" fill="#D4AF37" stroke="#92400E" strokeWidth="1" />
            <circle cx="7" cy="22" r="1.5" fill="#D4AF37" />
            <circle cx="12" cy="23" r="1.8" fill="#F59E0B" />
            <circle cx="17" cy="22" r="1.5" fill="#D4AF37" />
          </motion.g>

          {/* Base Ornamental Pedestal Sill */}
          <rect x="8" y="430" width="334" height="8" rx="3" fill="#D4AF37" />
          <line x1="10" y1="434" x2="340" y2="434" stroke="#78350F" strokeWidth="1" strokeDasharray="4 4" />
        </svg>
      </div>
    </motion.div>
  );
}

/**
 * 2. GUJARATI ROYAL PEACOCK JHAROKHA ARCH (10th Evening: Sangeet)
 * - Deep 7-foil cusped scalloped arch with royal peacock (Mor) spandrels,
 *   rich twilight magenta & burnished gold zari embroidery borders.
 */
export function GujaratiPeacockJharokhaArch({ children, className = '' }: ArchFrameProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.95, ease: [0.16, 1, 0.3, 1] }}
      className={`relative w-full max-w-[350px] mx-auto will-change-transform ${className}`}
    >
      <div className="relative w-full aspect-[4/5] max-h-[440px]">
        {/* SVG ClipPath for 7-Foil Multi-Cusped Royal Arch */}
        <svg className="absolute w-0 h-0" aria-hidden="true" focusable="false">
          <defs>
            <clipPath id="gujarati-peacock-clip" clipPathUnits="objectBoundingBox">
              <path d="
                M 0.05,1
                L 0.05,0.42
                C 0.05,0.36 0.10,0.32 0.14,0.30
                C 0.17,0.25 0.23,0.22 0.27,0.19
                C 0.32,0.15 0.39,0.12 0.43,0.08
                C 0.47,0.04 0.49,0.01 0.50,0
                C 0.51,0.01 0.53,0.04 0.57,0.08
                C 0.61,0.12 0.68,0.15 0.73,0.19
                C 0.77,0.22 0.83,0.25 0.86,0.30
                C 0.90,0.32 0.95,0.36 0.95,0.42
                L 0.95,1
                Z
              " />
            </clipPath>
          </defs>
        </svg>

        {/* Clipped Content Container with Ken Burns breath */}
        <div
          className="relative w-full h-full overflow-hidden shadow-2xl bg-[#1C0D18]"
          style={{ clipPath: 'url(#gujarati-peacock-clip)' }}
        >
          <motion.div
            initial={{ scale: 1.08 }}
            whileInView={{ scale: 1.0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full h-full"
          >
            {children}
          </motion.div>

          {/* Evening Twilight Plum & Gold Royal Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#2A1622]/40 via-transparent to-[#F43F5E]/15 pointer-events-none" />
        </div>

        {/* Ornate Embroidered Stone/Textile Frame Overlay */}
        <svg
          viewBox="0 0 350 438"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-0 w-full h-full pointer-events-none select-none z-20"
        >
          {/* Main 7-Cusp Scalloped Arch Outline */}
          <path
            d="
              M 17,438
              L 17,184
              C 17,158 35,140 49,131
              C 59,109 80,96 94,83
              C 112,66 136,52 150,35
              C 164,17 171,4 175,0
              C 179,4 186,17 200,35
              C 214,52 238,66 256,83
              C 270,96 291,109 301,131
              C 315,140 333,158 333,184
              L 333,438
            "
            stroke="#D4AF37"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Secondary Magenta Zari Stitch Line */}
          <path
            d="
              M 25,438
              L 25,190
              C 25,166 41,150 54,142
              C 64,122 83,110 97,97
              C 114,81 136,68 149,52
              C 162,35 168,22 175,12
              C 182,22 188,35 201,52
              C 214,68 236,81 253,97
              C 267,110 286,122 296,142
              C 309,150 325,166 325,190
              L 325,438
            "
            stroke="#BE185D"
            strokeWidth="2"
            strokeDasharray="4 3"
          />

          {/* Left Royal Peacock (Mor) Spandrel Silhouette */}
          <g transform="translate(32, 45)">
            <path
              d="M 28,48 C 22,36 24,20 34,14 C 38,11 44,12 47,16 C 49,20 45,26 42,32 C 38,38 36,44 38,50 Z"
              fill="#D4AF37"
            />
            {/* Peacock Crown Kalgi with Shimmer */}
            <motion.circle
              cx="35"
              cy="8"
              r="2"
              fill="#BE185D"
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
            />
            <line x1="35" y1="10" x2="35" y2="14" stroke="#D4AF37" strokeWidth="1" />
            <path
              d="M 28,48 C 18,52 6,66 2,82 C 12,76 22,70 30,58 Z"
              fill="#BE185D"
              opacity="0.8"
            />
            <circle cx="10" cy="74" r="2.5" fill="#D4AF37" />
          </g>

          {/* Right Royal Peacock (Mor) Spandrel Silhouette (Mirrored) */}
          <g transform="translate(268, 45)">
            <path
              d="M 22,48 C 28,36 26,20 16,14 C 12,11 6,12 3,16 C 1,20 5,26 8,32 C 12,38 14,44 12,50 Z"
              fill="#D4AF37"
            />
            <motion.circle
              cx="15"
              cy="8"
              r="2"
              fill="#BE185D"
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
            />
            <line x1="15" y1="10" x2="15" y2="14" stroke="#D4AF37" strokeWidth="1" />
            <path
              d="M 22,48 C 32,52 44,66 48,82 C 38,76 28,70 20,58 Z"
              fill="#BE185D"
              opacity="0.8"
            />
            <circle cx="40" cy="74" r="2.5" fill="#D4AF37" />
          </g>

          {/* Top Crown Floral Jali Rosette */}
          <circle cx="175" cy="22" r="5" fill="#BE185D" />
          <circle cx="175" cy="22" r="2.5" fill="#D4AF37" />

          {/* Bottom Royal Arch Base Sill with Pearl Beads */}
          <rect x="10" y="430" width="330" height="8" rx="2" fill="#BE185D" />
          {Array.from({ length: 15 }).map((_, i) => (
            <circle key={i} cx={22 + i * 21.8} cy="434" r="2" fill="#D4AF37" />
          ))}
        </svg>
      </div>
    </motion.div>
  );
}

/**
 * 3. TAMIL TEMPLE MANDAPAM ARCH (11th Day: The Sacred Wedding)
 * - Dravidian Makara Toranam temple archway with fluted stone pillars,
 *   carved sacred royal elephants (Yaanai), hanging brass temple bells (Mani),
 *   and cascading white mogra/mallipoo garlands.
 */
export function TamilMandapamArch({ children, className = '' }: ArchFrameProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.95, ease: [0.16, 1, 0.3, 1] }}
      className={`relative w-full max-w-[350px] mx-auto will-change-transform ${className}`}
    >
      <div className="relative w-full aspect-[4/5] max-h-[440px]">
        {/* SVG ClipPath for Dravidian Temple Arch */}
        <svg className="absolute w-0 h-0" aria-hidden="true" focusable="false">
          <defs>
            <clipPath id="tamil-mandapam-clip" clipPathUnits="objectBoundingBox">
              <path d="
                M 0.08,1
                L 0.08,0.40
                C 0.08,0.22 0.24,0.06 0.44,0.02
                C 0.47,0.01 0.49,0 0.50,0
                C 0.51,0 0.53,0.01 0.56,0.02
                C 0.76,0.06 0.92,0.22 0.92,0.40
                L 0.92,1
                Z
              " />
            </clipPath>
          </defs>
        </svg>

        {/* Clipped Sacred Mandap Content with Ken Burns breath */}
        <div
          className="relative w-full h-full overflow-hidden shadow-2xl bg-[#FFFBF0]"
          style={{ clipPath: 'url(#tamil-mandapam-clip)' }}
        >
          <motion.div
            initial={{ scale: 1.08 }}
            whileInView={{ scale: 1.0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full h-full"
          >
            {children}
          </motion.div>

          {/* Deep Sacred Kumkum Crimson & Temple Gold Ambient Tint */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#641F27]/30 via-transparent to-[#F6DFA0]/20 pointer-events-none" />
        </div>

        {/* Vector Dravidian Temple Architecture & Elephant Overlay */}
        <svg
          viewBox="0 0 350 438"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-0 w-full h-full pointer-events-none select-none z-20"
        >
          {/* Main Dravidian Temple Toranam Arch Outline */}
          <path
            d="
              M 28,438
              L 28,175
              C 28,96 84,26 154,9
              C 165,4 171,0 175,0
              C 179,0 185,4 196,9
              C 266,26 322,96 322,175
              L 322,438
            "
            stroke="#C5A059"
            strokeWidth="4"
            strokeLinecap="round"
          />

          {/* Inner Kanjeevaram Gold Zari Border */}
          <path
            d="
              M 36,438
              L 36,180
              C 36,106 88,40 156,22
              C 165,18 171,15 175,15
              C 179,15 185,18 194,22
              C 262,40 314,106 314,180
              L 314,438
            "
            stroke="#641F27"
            strokeWidth="2"
            strokeDasharray="4 4"
          />

          {/* Hanging Brass Temple Bell (Mani) - Left with Gentle Sway */}
          <motion.g
            transform="translate(56, 120)"
            animate={{ rotate: [-2.5, 2.5, -2.5] }}
            transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
            style={{ transformOrigin: '68px 120px' }}
          >
            <line x1="12" y1="0" x2="12" y2="22" stroke="#C5A059" strokeWidth="2" />
            <path d="M 6,22 C 6,16 18,16 18,22 L 20,30 L 4,30 Z" fill="#D4AF37" stroke="#641F27" strokeWidth="1" />
            <circle cx="12" cy="33" r="2.5" fill="#641F27" />
          </motion.g>

          {/* Hanging Brass Temple Bell (Mani) - Right with Counter Sway */}
          <motion.g
            transform="translate(268, 120)"
            animate={{ rotate: [2.5, -2.5, 2.5] }}
            transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
            style={{ transformOrigin: '280px 120px' }}
          >
            <line x1="12" y1="0" x2="12" y2="22" stroke="#C5A059" strokeWidth="2" />
            <path d="M 6,22 C 6,16 18,16 18,22 L 20,30 L 4,30 Z" fill="#D4AF37" stroke="#641F27" strokeWidth="1" />
            <circle cx="12" cy="33" r="2.5" fill="#641F27" />
          </motion.g>

          {/* Fragrant Cascading White Mogra (Mallipoo) Floral Garland Beads along the Pillar */}
          {Array.from({ length: 8 }).map((_, i) => (
            <React.Fragment key={i}>
              <circle cx="32" cy={195 + i * 22} r="4.5" fill="#FFFFFF" stroke="#D4AF37" strokeWidth="0.8" />
              <circle cx="32" cy={195 + i * 22} r="2" fill="#FEF08A" />
              <circle cx="318" cy={195 + i * 22} r="4.5" fill="#FFFFFF" stroke="#D4AF37" strokeWidth="0.8" />
              <circle cx="318" cy={195 + i * 22} r="2" fill="#FEF08A" />
            </React.Fragment>
          ))}

          {/* Sacred Temple Royal Elephant (Yaanai) - Left Base */}
          <g transform="translate(10, 375)">
            <path
              d="
                M 8,45
                L 8,30
                C 8,24 14,18 22,18
                C 30,18 36,22 38,28
                C 42,26 48,27 50,30
                C 52,32 50,38 46,40
                C 48,43 46,48 42,50
                C 38,51 34,48 34,45
                L 34,58 L 28,58 L 28,45
                L 18,45 L 18,58 L 12,58
                L 12,45 Z
              "
              fill="#641F27"
              stroke="#D4AF37"
              strokeWidth="1.2"
            />
            <circle cx="34" cy="24" r="2.5" fill="#D4AF37" />
            <path d="M 38,28 C 44,28 48,34 46,38" stroke="#D4AF37" strokeWidth="1" fill="none" />
          </g>

          {/* Sacred Temple Royal Elephant (Yaanai) - Right Base (Mirrored) */}
          <g transform="translate(285, 375)">
            <path
              d="
                M 46,45
                L 46,30
                C 46,24 40,18 32,18
                C 24,18 18,22 16,28
                C 12,26 6,27 4,30
                C 2,32 4,38 8,40
                C 6,43 8,48 12,50
                C 16,51 20,48 20,45
                L 20,58 L 26,58 L 26,45
                L 36,45 L 36,58 L 42,58
                L 42,45 Z
              "
              fill="#641F27"
              stroke="#D4AF37"
              strokeWidth="1.2"
            />
            <circle cx="20" cy="24" r="2.5" fill="#D4AF37" />
            <path d="M 16,28 C 10,28 6,34 8,38" stroke="#D4AF37" strokeWidth="1" fill="none" />
          </g>

          {/* Base Temple Granite Tier Sill */}
          <rect x="20" y="430" width="310" height="8" rx="2" fill="#641F27" />
          <line x1="22" y1="434" x2="328" y2="434" stroke="#D4AF37" strokeWidth="1.5" />
        </svg>
      </div>
    </motion.div>
  );
}

/**
 * 4. TAMIL COURTYARD STARLIT ARCH (11th Night: Chill Party)
 * - Chettinad carved teakwood courtyard arch with hanging brass diya lanterns,
 *   climbing night jasmine flora, and starlit constellations.
 */
export function TamilCourtyardArch({ children, className = '' }: ArchFrameProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.95, ease: [0.16, 1, 0.3, 1] }}
      className={`relative w-full max-w-[350px] mx-auto will-change-transform ${className}`}
    >
      <div className="relative w-full aspect-[4/5] max-h-[440px]">
        {/* SVG ClipPath for Open Courtyard Arch */}
        <svg className="absolute w-0 h-0" aria-hidden="true" focusable="false">
          <defs>
            <clipPath id="tamil-courtyard-clip" clipPathUnits="objectBoundingBox">
              <path d="
                M 0.06,1
                L 0.06,0.36
                C 0.06,0.22 0.18,0.12 0.34,0.06
                C 0.44,0.02 0.48,0 0.50,0
                C 0.52,0 0.56,0.02 0.66,0.06
                C 0.82,0.12 0.94,0.22 0.94,0.36
                L 0.94,1
                Z
              " />
            </clipPath>
          </defs>
        </svg>

        {/* Clipped Night Party Content with Ken Burns breath */}
        <div
          className="relative w-full h-full overflow-hidden shadow-2xl bg-[#120B10]"
          style={{ clipPath: 'url(#tamil-courtyard-clip)' }}
        >
          <motion.div
            initial={{ scale: 1.08 }}
            whileInView={{ scale: 1.0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full h-full"
          >
            {children}
          </motion.div>

          {/* Celestial Midnight Violet & Warm Fireside Glow Tint */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#181116]/50 via-transparent to-[#FBBF24]/10 pointer-events-none" />
        </div>

        {/* Vector Carved Teakwood & Hanging Diya Overlay */}
        <svg
          viewBox="0 0 350 438"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-0 w-full h-full pointer-events-none select-none z-20"
        >
          {/* Main Chettinad Teakwood Arch Contour */}
          <path
            d="
              M 21,438
              L 21,158
              C 21,96 63,52 119,26
              C 154,9 168,0 175,0
              C 182,0 196,9 231,26
              C 287,52 329,96 329,158
              L 329,438
            "
            stroke="#92400E"
            strokeWidth="4"
            strokeLinecap="round"
          />

          {/* Warm Burnished Gold Inner Glow Line */}
          <path
            d="
              M 28,438
              L 28,162
              C 28,104 68,62 121,38
              C 154,22 168,14 175,14
              C 182,14 196,22 229,38
              C 282,62 322,104 322,162
              L 322,438
            "
            stroke="#F59E0B"
            strokeWidth="1.5"
            strokeDasharray="6 4"
            opacity="0.8"
          />

          {/* Center Hanging Brass Diya Lantern (Thoonda Vilakku) */}
          <g transform="translate(163, 0)">
            <line x1="12" y1="0" x2="12" y2="40" stroke="#F59E0B" strokeWidth="1.5" />
            <path d="M 4,40 C 4,34 20,34 20,40 L 16,46 L 8,46 Z" fill="#D4AF37" stroke="#92400E" strokeWidth="1" />
            {/* Warm flame droplet with breathing flicker animation */}
            <motion.path
              d="M 12,28 C 9,33 10,36 12,36 C 14,36 15,33 12,28 Z"
              fill="#FEF08A"
              animate={{ scale: [1, 1.15, 0.95, 1], opacity: [0.9, 1, 0.85, 0.9] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
              style={{ transformOrigin: '12px 34px' }}
            />
            <circle cx="12" cy="33" r="4" fill="#F59E0B" opacity="0.4" />
          </g>

          {/* Starry Constellation Twinkle Dots */}
          {[
            { cx: 80, cy: 50 },
            { cx: 110, cy: 35 },
            { cx: 240, cy: 35 },
            { cx: 270, cy: 50 },
            { cx: 50, cy: 95 },
            { cx: 300, cy: 95 },
          ].map((star, i) => (
            <motion.g
              key={i}
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 2.5 + (i % 3) * 0.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <circle cx={star.cx} cy={star.cy} r="1.8" fill="#FDE68A" />
              <line x1={star.cx - 3} y1={star.cy} x2={star.cx + 3} y2={star.cy} stroke="#FDE68A" strokeWidth="0.6" />
              <line x1={star.cx} y1={star.cy - 3} x2={star.cx} y2={star.cy + 3} stroke="#FDE68A" strokeWidth="0.6" />
            </motion.g>
          ))}

          {/* Base Chettinad Veranda Sill */}
          <rect x="14" y="430" width="322" height="8" rx="2" fill="#92400E" />
          <line x1="16" y1="434" x2="334" y2="434" stroke="#F59E0B" strokeWidth="1.2" />
        </svg>
      </div>
    </motion.div>
  );
}
