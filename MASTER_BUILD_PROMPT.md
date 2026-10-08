# MASTER BUILD PROMPT — Interactive Gujarati × Tamil Wedding Website

You are the lead product designer, creative developer, motion designer, and frontend engineer for this project.

Build a production-quality, mobile-first interactive digital wedding invitation.

The project already contains a `DESIGN_SYSTEM.md`. Treat it as the visual and interaction source of truth. Read it completely before making design or architecture decisions.

A supplied Ganpati reference image is also included in the project assets. Treat that image as the MASTER ART-DIRECTION REFERENCE for the visual world.

Do not begin by making a generic wedding template.

---

## 1. PRODUCT VISION

Create an interactive wedding story rather than a conventional wedding website.

The experience should feel like:

> A beautiful Gujarati × Tamil destination wedding transformed into an illustrated cinematic world that guests can explore on their phones.

Primary journey:

Ganpati → Resort Arrival → Sunshine Soirée → Sunset & Sparkles → Wedding → Moonlight Jam → Bride vs Groom → Quirky FAQ → RSVP / Goodbye

The visitor should feel as though they are moving through one continuous wedding world.

The site must be:

- mobile-first
- elegant
- cinematic
- warm
- youthful
- playful
- premium
- personal
- culturally rich without becoming overly traditional
- highly interactive without becoming gimmicky

Desktop is secondary. Mobile is the primary design target.

---

## 2. NON-NEGOTIABLE DESIGN SOURCE OF TRUTH

Before writing significant UI code:

1. Read `DESIGN_SYSTEM.md`.
2. Inspect every supplied visual asset.
3. Inspect the supplied Ganpati master image.
4. Understand the existing project structure.
5. Create a short implementation plan.
6. Then implement.

Do not invent a separate design system.

Do not replace the chosen typography, colour direction, spacing system, motion language, or interaction philosophy.

If there is a conflict between generic UI conventions and `DESIGN_SYSTEM.md`, follow the design system.

---

# 3. MASTER ART DIRECTION

The supplied Ganpati image is the master visual reference.

Use it to establish:

- colour temperature
- lighting
- material quality
- illustration/rendering character
- softness
- floral richness
- Indian cultural detailing
- cinematic atmosphere
- level of realism
- premium quality
- emotional warmth

All newly generated visual assets must feel as though they belong to the same visual universe.

This includes:

- bride
- groom
- resort
- mandap
- baraat
- flowers
- jasmine
- marigold
- Kolam
- Bandhani
- cultural motifs
- musical-night environment
- decorative objects
- transition backgrounds
- supporting illustrations

Do NOT mix unrelated visual styles.

Do NOT use flat vector clip-art beside the master Ganpati.

Do NOT use generic stock wedding illustrations.

Do NOT randomly change character appearance, proportions, clothing language, rendering style, lighting, or colour treatment.

---

# 4. GANPATI OPENING — FIRST IMPLEMENTATION PRIORITY

The supplied Ganpati image is the opening visual.

This is NOT a conventional loading spinner or technical preloader.

It is an opening cinematic scene.

On first visit:

1. Show the supplied Ganpati image as the initial full-screen mobile composition.
2. Keep the image visually dominant.
3. Do not immediately expose the entire website.
4. Allow approximately 2–3 seconds of calm visual presence.
5. Begin a cinematic transition.
6. The Ganpati scene should gently move upward / recede.
7. Its visual presence should dissolve into the next scene rather than simply disappear.
8. Reveal the bride and groom / resort arrival world underneath.
9. The transition should feel like the camera is moving from the devotional opening into the wedding story.

Important:

Do NOT recreate or regenerate the supplied Ganpati for this opening.

Use the supplied image itself.

The transition can use:

- scale
- translateY
- opacity
- blur used extremely subtly
- mask/clip-path
- layered atmospheric elements
- parallax
- colour/light blending

Avoid a generic fade-to-white.

The transition should feel cinematic and continuous.

---

# 5. OPENING SCENE

After Ganpati:

Reveal the bride and groom arriving at a beautiful pastel destination resort.

The couple should be holding hands.

Bride:

- contemporary Indian bridal styling
- lehenga
- elegant
- youthful
- consistent with the master art direction

Groom:

- Indian wedding styling
- Lungi / Veshti-inspired attire
- elegant
- contemporary
- coordinated with bride

They should feel like characters from the same visual world as the Ganpati.

Camera direction:

Ganpati close/intimate view
→ visual recedes
→ couple appears
→ resort environment expands
→ camera pulls back
→ full wedding destination is revealed

The first scene should immediately communicate:

> This is not a normal wedding website.

---

# 6. MOBILE-FIRST EXPERIENCE

Design and build for mobile first.

Primary target:

390px × 844px

Also test:

- 320px
- 375px
- 393px
- 430px
- 768px

Desktop should be adapted after the mobile experience is excellent.

On mobile:

- prioritize vertical composition
- use large typography
- keep touch targets at least 44px
- minimize simultaneous animation layers
- preserve cinematic transitions
- avoid tiny decorative elements
- avoid horizontal scrolling
- keep interaction obvious
- make all critical content accessible without hover

Desktop may use:

- wider environmental compositions
- additional parallax layers
- larger negative space
- more complex spatial compositions

Do not simply shrink desktop layouts.

---

# 7. STORY SECTIONS

## SECTION 01 — GANPATI / OPENING

Purpose:
Establish the visual world and emotional tone.

Interaction:
Enter / continue after the opening.

Audio:
Do not autoplay audio before user interaction.

---

## SECTION 02 — RESORT ARRIVAL

Introduce:

- couple
- destination
- wedding atmosphere
- date / location information

Visual:
Pastel resort garden.

Interaction:
Subtle environmental discoveries are allowed.

Example:
A hanging bell can respond to a tap with a tiny sound and visual reaction.

Do not overload the scene.

---

## SECTION 03 — THE SUNSHINE SOIRÉE

This is the Haldi event.

Do not simply title it "Haldi".

Visual direction:

- butter yellow
- pink
- peach
- orange
- floral garden
- playful resort atmosphere
- youthful celebration

Add the SCRATCH CARD here.

The scratch card should feel integrated into the scene.

Example:

"A little surprise before the celebrations..."

User scratches.

Reveal:

THE SUNSHINE SOIRÉE
date
time
location
short playful message

After completion, remember the completed state.

Do not force the user to scratch it repeatedly.

---

## SECTION 04 — SUNSET & SPARKLES

Event sequence:

Sunset Puja
→ Engagement / Ring Exchange
→ Sangeet

Visual transformation:

day
→ golden hour
→ sunset
→ dusk
→ evening
→ fairy lights
→ stars
→ candles

This should be one of the most cinematic transitions on the site.

Music can evolve through the scene using crossfades or controlled track changes.

Do not restart audio abruptly when the user scrolls back.

---

## SECTION 05 — WEDDING

This is the major cultural climax.

Sequence:

Baraat
→ Tamil wedding language
→ Gujarati wedding language
→ visual fusion
→ "Two cultures, one wedding, one forever."

Do NOT create two disconnected wedding pages.

Instead visually transform one environment into another.

Potential transformations:

Kolam
→ Bandhani

Jasmine
→ Marigold

Temple details
→ Gujarati ornament

Kanjeevaram-inspired textile
→ Gujarati textile pattern

South Indian ceremonial details
→ Gujarati celebratory details

The transition should feel organic and intentional.

---

## SECTION 06 — MOONLIGHT JAM

This is NOT another Sangeet.

It should feel:

- intimate
- relaxed
- warm
- spontaneous
- musical
- late-night
- emotional

Environment:

Night resort garden
→ musicians
→ candles
→ fairy lights
→ stars
→ people sitting together

Introduce memories / childhood photographs around this portion.

Use photos as editorial memory moments, not as a generic gallery.

---

# 8. BRIDE VS GROOM GAME

Place this AFTER the major wedding story, around the late experience.

Do not put it in the first or second section.

Headline:

"How well do you REALLY know them?"

Flow:

1. Game introduction
2. Choose / answer questions
3. 5–7 questions
4. Calculate score
5. Show Team Bride / Team Groom result
6. Ask for a display name
7. Submit score
8. Show leaderboard

Questions should be:

- funny
- personal
- easy to understand
- guest-friendly
- not embarrassing or invasive

Example questions:

- Who is more likely to be late?
- Who takes longer to get ready?
- Who said "I love you" first?
- Who is more likely to start dancing?
- Who spends more money?
- Who is more likely to forget something important?

The game should take approximately 1–2 minutes.

---

# 9. ONE-TIME GAME BEHAVIOUR

The game should not become redundant after completion.

Persist:

- completion state
- score
- selected team
- display name if locally appropriate

Example:

gameCompleted = true
gameScore = 6
team = "Bride"

After completion, replace the game CTA with:

"You scored 6/7."

Then:

"See who's winning →"

Do not force the guest to replay.

If a real shared leaderboard is implemented, use a backend/database rather than pretending local storage is a global leaderboard.

For the first version, it is acceptable to implement the UI and local completion state with a clearly structured data layer ready for backend integration.

---

# 10. LEADERBOARD

Leaderboard should feel like part of the game, not a separate admin dashboard.

Show:

- Rank
- Name
- Score
- Team

Also show:

Team Bride %
Team Groom %

Optional playful copy:

"Team Bride is currently winning."

Do not require account creation.

Only ask for a display name.

Do not expose private guest information.

---

# 11. MUSIC SYSTEM

Music is part of the storytelling.

However:

- browser autoplay restrictions must be respected
- user must interact before audio begins
- always provide mute/pause control
- remember mute state
- never aggressively restart tracks
- use crossfade where appropriate

Suggested sound direction:

Opening:
soft devotional / ambient instrumental

Sunshine Soirée:
playful Indian-inspired percussion

Sunset & Sparkles:
warm ambient transition

Sangeet:
more energetic

Wedding:
Indian fusion instrumental

Moonlight Jam:
warm acoustic / intimate

Use HTML5 Audio or a clean audio abstraction.

If multiple tracks are used, preload only what is necessary and lazy-load later tracks.

---

# 12. MOTION SYSTEM

Use:

- GSAP
- GSAP ScrollTrigger
- Lenis

Use GSAP for:

- scene timelines
- entrance sequences
- scroll-linked animation
- morphing
- parallax
- typography reveals
- environmental movement
- transitions

Use Lenis for smooth scrolling.

Coordinate Lenis and GSAP correctly rather than running two competing scroll systems.

Motion should feel:

- smooth
- cinematic
- organic
- restrained
- premium

Avoid:

- excessive bounce
- random particles
- constant floating
- aggressive spring effects
- animation for decoration alone

Preferred timing:

Micro:
180–300ms

UI:
300–600ms

Reveal:
500–900ms

Scene:
800–1400ms

Major cinematic:
1200–2000ms

---

# 13. PERFORMANCE

This is a highly animated mobile experience.

Performance is a first-class requirement.

Use:

- responsive image sources
- AVIF/WebP
- lazy loading
- compressed assets
- transform/opacity-based animation
- code splitting where appropriate
- reduced animation on mobile
- lazy-loading of later scene assets
- sensible image dimensions

Do not load the entire wedding world at first paint.

The opening should load first.

Later scenes can progressively load.

Avoid unnecessary Three.js/WebGL.

Only use Three.js or React Three Fiber if a genuine 3D effect improves the story.

---

# 14. IMAGE GENERATION / NANO BANANA WORKFLOW

When new visual assets are required:

1. Use the supplied Ganpati master image as the visual reference.
2. Maintain the same rendering language.
3. Maintain the same lighting softness.
4. Maintain the same colour richness.
5. Maintain the same level of detail.
6. Maintain the same Indian cultural authenticity.
7. Maintain consistent character appearance once bride/groom are established.

If Nano Banana image generation is available in the environment, use reference-image workflows where possible.

Do not generate every asset from scratch independently.

First establish MASTER CHARACTER REFERENCES for:

- Bride
- Groom

Then reuse those references for subsequent scenes.

Generate scene backgrounds separately where possible so that code can compose:

background + characters + motifs + atmosphere + text.

This allows better animation and responsive composition.

---

# 15. ASSET GENERATION PROMPT — MASTER STYLE

Use this as the base prompt for every generated visual asset:

"Create a premium cinematic Indian wedding illustration/render in the exact visual spirit of the supplied Ganpati reference image. Match its warm sunlit atmosphere, soft painterly realism, rich but elegant Indian colours, handcrafted detail, refined materials, gentle depth of field, subtle texture, romantic destination-wedding mood, sophisticated floral styling, and high-end editorial finish. The image should feel like part of one continuous visual universe. Avoid generic wedding-template aesthetics, flat vector art, cartoon clip-art, overly glossy CGI, neon colours, excessive gold, plastic materials, or photorealistic stock photography. Keep the composition elegant, youthful, dreamy, cinematic and culturally authentic."

Add the specific scene prompt after this base prompt.

---

# 16. ASSET PROMPT — BRIDE

"Using the supplied Ganpati master image as the visual style reference, create the master bride character for this wedding world. Young Indian bride, elegant contemporary lehenga, refined Gujarati × South Indian cultural fusion, tasteful jewellery, warm expressive face, youthful and graceful posture, premium handcrafted textile detailing, soft cinematic lighting, painterly realistic 3D illustration/render, warm pastel environment, subtle Indian ornamentation. Full-body character, isolated enough to be composited into multiple scenes, consistent proportions and appearance. This is the MASTER bride reference and must remain visually consistent in every future scene."

---

# 17. ASSET PROMPT — GROOM

"Using the supplied Ganpati master image as the visual style reference, create the master groom character for this wedding world. Young Indian groom, elegant contemporary Veshti/Lungi-inspired wedding styling, subtle Gujarati × South Indian fusion, refined jewellery/details, warm expressive face, youthful and confident posture, premium fabric texture, soft cinematic lighting, painterly realistic 3D illustration/render, warm pastel environment. Full-body character, suitable for compositing into multiple scenes. This is the MASTER groom reference and must remain visually consistent in every future scene."

---

# 18. ASSET PROMPT — RESORT

"Create a dreamy premium Indian destination wedding resort environment in the exact visual language of the supplied Ganpati master image. Pastel cream architecture, warm ivory walls, lush tropical greenery, bougainvillea, jasmine, marigold accents, elegant garden paths, subtle Indian decorative details, soft sunlight, cinematic depth, romantic atmosphere, high-end editorial wedding styling. Leave intentional negative space for the bride and groom to be composited into the environment. No text, no people."

---

# 19. ASSET PROMPT — SUNSHINE SOIRÉE

"Create a joyful pastel Indian wedding garden for a Gujarati × Tamil Haldi celebration. Use butter yellow, pink, peach, orange, soft green and cream. Floral resort setting, marigold and jasmine, playful textile details, elegant seating, soft fabric canopies, flowers hanging from trees, sunlight, dreamy cinematic atmosphere. Match the exact visual rendering language of the supplied Ganpati reference. Avoid the typical heavy yellow Haldi aesthetic. Make it feel youthful, editorial and premium."

---

# 20. ASSET PROMPT — SUNSET & SPARKLES

"Create a cinematic destination wedding garden transitioning from sunset into evening. Warm peach sky, soft lilac shadows, butter-yellow highlights, fairy lights, candles, flowers, elegant Indian details, subtle gold, dreamy atmosphere. The environment should support a visual transition from Puja to engagement to Sangeet. Match the supplied Ganpati master art direction exactly."

---

# 21. ASSET PROMPT — CULTURAL FUSION WEDDING

"Create a sophisticated Gujarati × Tamil wedding environment where the two cultures visually merge rather than appear as separate themes. Combine subtle Kolam-inspired geometry with Gujarati Bandhani patterns, jasmine with marigold, South Indian temple details with Gujarati ornamental details, Kanjeevaram-inspired textiles with Gujarati textile motifs. Use warm ivory, maroon, butter yellow, deep green and restrained gold. Premium cinematic painterly 3D illustration/render. Avoid visual clutter."

---

# 22. ASSET PROMPT — MOONLIGHT JAM

"Create an intimate late-night destination wedding garden in the same visual universe as the supplied Ganpati reference. Deep maroon and green environment, warm butter-yellow fairy lights, candles, stars, lush plants, small live musicians, relaxed seating, subtle floral details, warm acoustic atmosphere, cinematic depth, intimate and spontaneous mood. This should feel completely different from a Sangeet while remaining part of the same wedding world."

---

# 23. IMPORTANT IMAGE RULES

Do not put important text inside generated images.

Do not generate UI screenshots as artwork.

Do not generate buttons inside images.

Do not use image-generation output where HTML/CSS text is more appropriate.

Use generated visuals for:

- environments
- characters
- illustrations
- decorative motifs
- atmospheric layers
- cultural objects

Use HTML/CSS for:

- text
- buttons
- navigation
- cards
- game UI
- leaderboard
- FAQ
- RSVP

---

# 24. IMPLEMENTATION ORDER

Do NOT attempt to build the entire website in one pass.

Build in this order:

### Phase 1 — Foundation
- project setup
- fonts
- design tokens
- colour variables
- responsive system
- Lenis
- GSAP
- core component architecture

### Phase 2 — Opening
- Ganpati scene
- opening transition
- bride/groom reveal
- resort reveal
- mobile-first composition

### Phase 3 — First event
- Sunshine Soirée
- scratch card
- event details
- scene transition

### Phase 4 — Evening
- Sunset & Sparkles
- music system
- sunset-to-night transition
- engagement
- Sangeet

### Phase 5 — Wedding
- Baraat
- Tamil/Gujarati fusion
- cultural transformation
- emotional climax

### Phase 6 — Moonlight
- Moonlight Jam
- memories
- intimate night environment

### Phase 7 — Game
- Bride vs Groom
- score
- persistence
- leaderboard UI

### Phase 8 — Closing
- FAQ
- RSVP
- final scene
- music fade

### Phase 9 — QA
Test:

- 320px
- 375px
- 390px
- 393px
- 430px
- tablet
- desktop
- slow network
- reduced motion
- muted audio
- first visit
- returning visit
- game completed
- game not completed

---

# 25. AGENT BEHAVIOUR

Act as a senior creative developer.

Do not ask unnecessary questions when the design system already contains the answer.

If something is ambiguous:

1. Choose the option most consistent with the design system.
2. Prefer mobile usability.
3. Prefer visual restraint.
4. Prefer performance.
5. Document the assumption.

Do not replace existing work without understanding it first.

Do not add libraries without a clear reason.

Do not use placeholder lorem ipsum.

Do not create generic wedding copy.

Do not stop after generating a static mockup.

Actually implement the interactions.

Run the project.

Open it in the browser.

Test the mobile experience.

Fix layout, animation, console and interaction issues.

Use browser verification before declaring a feature complete.

---

# 26. FIRST TASK

Start with ONLY the foundation + opening scene.

Do not build the entire website yet.

First produce:

1. Project architecture
2. Design tokens
3. Font setup
4. Lenis setup
5. GSAP + ScrollTrigger setup
6. Responsive base
7. Ganpati opening
8. 2–3 second cinematic opening state
9. Ganpati upward/dissolve transition
10. Bride + groom reveal
11. Resort reveal
12. Mobile-first polish
13. Browser verification

The first scene should be polished enough to establish the quality bar for the entire website.

After verifying the opening scene, proceed to the next section only when the implementation is stable.

---

# FINAL QUALITY BAR

The result should feel:

**editorial, cinematic, Indian, youthful, intimate, premium, playful and alive.**

It should NOT feel:

**template-like, generic, corporate, overly traditional, AI-generated, over-animated or cluttered.**

The website is a wedding story.

Every design decision should serve that story.
