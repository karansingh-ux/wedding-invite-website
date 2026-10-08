# Interactive Wedding Website — Design System v1.0

## 0. Purpose

This document is the source of truth for designing and building the interactive digital wedding experience.

The website is not a conventional wedding invitation. It is an interactive, illustrated, cinematic wedding story that guides guests through one continuous world.

Core journey:

Ganpati → Resort Arrival → Sunshine Soirée → Sunset & Sparkles → Wedding → Moonlight Jam → Bride vs Groom → FAQ → RSVP / Goodbye

Core principle:

> Scroll to explore. Interact to discover. Play when invited. Never feel overwhelmed.

---

# 1. Design Principles

## 1.1 Emotional Direction

The experience should feel:

- Dreamy
- Romantic
- Warm
- Playful
- Cinematic
- Premium
- Youthful
- Personal
- Indian
- Contemporary

Avoid:

- Generic wedding-template aesthetics
- Corporate UI
- Excessive traditional ornamentation
- Overly formal luxury
- Excessive animation
- Decorative overload
- Random AI-generated visual elements

## 1.2 Visual Philosophy

Combine:

**Modern editorial design + Indian wedding aesthetics + illustrated storytelling + interactive digital experience**

The result should feel closer to an illustrated fashion/editorial story than a conventional wedding website.

## 1.3 Cultural Fusion

Gujarati and Tamil visual languages should coexist rather than appear as isolated themes.

Use combinations such as:

- Kolam × Bandhani
- Jasmine × Marigold
- Temple architecture × Gujarati ornament
- Kanjeevaram × Gujarati textile
- South Indian ceremonial details × Gujarati celebration

The cultural elements should be recognizable but subtle.

North-star statement:

> Two cultures, one visual world.

## 1.4 Premium Without Being Formal

Premium comes from:

- Typography
- Composition
- Spacing
- Art direction
- Colour relationships
- Motion
- Detail

Avoid relying on:

- Excessive gold
- Black-and-gold luxury styling
- Heavy borders
- Strong shadows
- Excessive gradients

## 1.5 Gen Z Character

Contemporary character should come from:

- Unexpected compositions
- Playful copy
- Interactive moments
- Editorial typography
- Humour
- Personal storytelling
- Slight visual imperfection
- Bold type
- Modern motion

Do not force Gen Z through memes, neon, excessive stickers, or trend-chasing effects.

---

# 2. Colour System

## 2.1 Core Palette

| Token | Hex | Role |
|---|---|---|
| Butter Yellow | `#F6DFA0` | Primary expressive accent |
| Warm Ivory | `#FFF8EA` | Primary light canvas |
| Soft Cream | `#F4EBDD` | Secondary background |
| Deep Maroon | `#641F27` | Primary dark/background |
| Warm Brown | `#3D2A25` | Primary readable text |
| Soft Pink | `#EFA6B5` | Romantic accent |
| Peach | `#F2B08A` | Celebration accent |
| Sunset Orange | `#D9784B` | Event accent |
| Soft Lilac | `#C8B7D9` | Evening accent |
| Sage | `#A8B29A` | Botanical accent |
| Deep Green | `#53614D` | Dark botanical/cultural accent |
| Muted Gold | `#C7A85A` | Restrained premium detail |

## 2.2 Usage Rules

Butter Yellow is an expressive/display colour.

Use it for:

- Hero typography
- Event titles
- Decorative type
- Highlights
- Small visual accents

Do not use Butter Yellow for:

- Long body text
- Small UI text on light backgrounds
- Critical information
- Default buttons where contrast is insufficient

Warm Brown is the default light-background text colour.

Deep Maroon is the primary dark scene/background colour.

Gold should remain subtle. It should never become the dominant palette.

## 2.3 Scene Palette Mapping

### Opening
Ivory + Butter Yellow + Maroon + muted floral accents.

### Sunshine Soirée
Butter Yellow + Pink + Peach + Marigold-inspired orange + soft blue/green.

### Sunset & Sparkles
Peach + Lilac + Butter Yellow + Maroon + muted Gold.

### Wedding
Ivory + Maroon + Deep Green + Butter Yellow + restrained Gold.

### Moonlight Jam
Deep Maroon + Deep Green + Butter Yellow + soft cream + low-saturation warm accents.

## 2.4 Contrast

Always prioritize readable text contrast over aesthetic colour matching.

When Butter Yellow does not have sufficient contrast, use Warm Brown, Maroon, or Cream instead.

---

# 3. Typography

## 3.1 Typefaces

### Display: Bricolage Grotesque

Use for:

- Hero headlines
- Event names
- Large numbers
- Navigation emphasis
- Buttons
- Short statements
- Playful copy

### Editorial: Newsreader

Use for:

- Supporting headlines
- Emotional statements
- Couple story
- Quotes
- Event descriptions
- Editorial moments

Do not introduce a third primary typeface.

## 3.2 Type Scale

Use fluid typography with `clamp()`.

| Role | Desktop | Mobile |
|---|---:|---:|
| Hero | 96–160px | 52–76px |
| Display | 72–112px | 44–64px |
| H1 | 64–88px | 40–52px |
| H2 | 48–64px | 32–42px |
| H3 | 32–40px | 26–32px |
| Large body | 22–26px | 18–21px |
| Body | 16–18px | 15–17px |
| Caption | 12–14px | 12–14px |

Typography should be allowed to occupy space. Avoid compressing large headlines merely to fit content.

## 3.3 Typography Rules

- Prefer sentence case or intentional uppercase for display moments.
- Keep body copy short.
- Avoid large blocks of text.
- Use Newsreader to create emotional contrast.
- Use Bricolage for action and navigation.
- Maintain generous line-height in body copy.
- Do not use typography as decoration if it reduces readability.

---

# 4. Spacing System

Use an 8px base rhythm.

Tokens:

```text
space-1: 8px
space-2: 16px
space-3: 24px
space-4: 32px
space-5: 40px
space-6: 48px
space-7: 64px
space-8: 80px
space-9: 96px
space-10: 128px
space-11: 160px
space-12: 192px
```

Small UI elements should mostly use 8–32px spacing.

Content sections should commonly use 64–160px spacing.

Cinematic scene transitions can use 160–300px+ of visual breathing room when appropriate.

Do not use spacing values randomly. Introduce a new value only when composition genuinely requires it.

---

# 5. Grid & Layout

## Desktop

Use a flexible 12-column grid.

Recommended:

- Max content width: 1440px
- Horizontal gutter: 5vw
- Column gap: 20–32px
- Full-bleed scenes may ignore the content grid.

## Tablet

Use an 8-column system.

## Mobile

Use a 4-column conceptual grid with fluid gutters.

Recommended mobile gutter:

- 20px minimum
- 24px preferred

## Layout Philosophy

The grid is a structural tool, not a visual prison.

Allow:

- Full-bleed artwork
- Asymmetry
- Overlapping elements
- Text crossing grid boundaries
- Cropped illustrations
- Large negative space
- Layered compositions

---

# 6. Responsive Behaviour

Breakpoints:

```text
Mobile: 320–767px
Tablet: 768–1199px
Desktop: 1200px+
Large desktop: 1440px+
```

Do not simply scale desktop down.

Mobile should be recomposed.

Rules:

- Reduce decorative layers where necessary.
- Maintain the narrative sequence.
- Preserve major visual moments.
- Simplify parallax.
- Reduce simultaneous animations.
- Keep touch targets at least 44×44px.
- Never create horizontal scrolling.
- Maintain readable typography.
- Preserve important artwork through alternate crops/positions.

Use responsive assets where image composition changes materially.

---

# 7. Component System

Components should belong to this specific wedding world rather than feeling like a generic SaaS design system.

Core components:

1. StoryScene
2. SceneTransition
3. EventIntro
4. EventDetails
5. CoupleIntro
6. MemoryMoment
7. InteractiveReveal
8. ScratchCard
9. GameIntro
10. QuizQuestion
11. GameResult
12. Leaderboard
13. FAQ
14. RSVP
15. MusicController
16. SceneProgress
17. CulturalMotif
18. IllustrationLayer
19. PhotoFrame
20. PrimaryCTA
21. SecondaryCTA

Components should share:

- Typography
- Spacing
- Motion language
- Corner treatment
- Interaction behaviour
- Colour tokens

Avoid excessive card-based UI.

---

# 8. Buttons & CTAs

Buttons should feel editorial and tactile rather than like generic SaaS controls.

Primary CTA:

- Solid Maroon or Warm Brown
- Cream/Butter text as appropriate
- Rounded but not overly pill-shaped
- Minimum 44px height

Secondary CTA:

- Transparent
- Border or text-based
- Subtle hover movement

Button motion:

- 200–350ms
- Slight translation/scale
- No aggressive bounce

Use playful CTA copy where appropriate:

- Enter the celebration
- Let's go
- See what happened
- Meet them
- Test your knowledge
- See who's winning
- RSVP

---

# 9. Cards & Content Containers

Cards should be used sparingly.

Preferred:

- Editorial blocks
- Floating information panels
- Photo frames
- Layered paper/card treatments
- Full-bleed sections

Avoid:

- Repeating 3-column card grids
- Excessive shadows
- Generic rounded cards
- SaaS-style dashboard patterns

Cards should feel like physical wedding stationery translated into digital space.

---

# 10. Story Architecture

Primary journey:

```text
01 Ganpati / Opening
02 Resort Arrival
03 Sunshine Soirée
04 Sunset & Sparkles
05 Wedding
06 Moonlight Jam
07 Bride vs Groom
08 Quirky FAQ
09 RSVP / Goodbye
```

Secondary discoveries appear within this journey.

The primary story must always remain understandable without completing every interaction.

---

# 11. Interactive Features

## 11.1 Scratch Card

Place within the Sunshine Soirée event introduction.

Purpose:

Reveal event information or a playful message.

Flow:

Discover → Scratch → Reveal → Continue.

The completed state should persist locally.

After completion:

- Show revealed content.
- Do not repeatedly force the scratch interaction.

## 11.2 Bride vs Groom Game

Place late in the experience, around Moonlight Jam / closing.

Title direction:

> How well do you REALLY know them?

Flow:

1. Intro
2. 5–7 questions
3. Score
4. Team Bride / Team Groom result
5. Enter name
6. Submit score
7. Leaderboard

The game should feel lightweight and take approximately 1–2 minutes.

Questions should be personal, funny, and guest-friendly.

Examples:

- Who is more likely to be late?
- Who takes longer to get ready?
- Who said "I love you" first?
- Who is more likely to start dancing?
- Who spends more money?

## 11.3 One-Time Game State

Persist completion locally.

Example conceptual state:

```text
gameCompleted = true
gameScore = 6
team = "bride"
```

After completion, replace the playable state with:

> You scored 6/7.

and a leaderboard CTA.

If a backend is implemented, leaderboard submissions should be validated server-side.

## 11.4 Leaderboard

Show:

- Rank
- Name
- Score
- Team
- Team percentage

Optional playful summary:

> Team Bride is currently winning.

Do not require account creation.

Allow guests to enter only a display name.

---

# 12. Music & Sound

Music is part of the storytelling system, but must never become annoying.

## User Control

The opening should include an explicit user interaction such as:

> Enter the celebration

Audio can begin after that interaction to comply with browser autoplay restrictions.

Persistent music control:

- Play/Pause
- Mute
- Optional track/scene indicator

## Scene Sound Direction

Opening:
Soft instrumental.

Sunshine Soirée:
Playful percussion / bright instrumental.

Sunset & Sparkles:
Ambient transition.

Sangeet:
More energetic.

Wedding:
Indian fusion instrumental.

Moonlight Jam:
Warm acoustic / intimate.

Do not forcibly restart music whenever the user scrolls back into a section.

Prefer a continuous soundtrack or controlled crossfades.

Respect user mute state throughout the session.

---

# 13. Motion System

Motion should be:

- Cinematic
- Organic
- Soft
- Elegant
- Intentional
- Slightly playful

Avoid:

- Excessive bounce
- Constant motion
- Random particle effects
- Aggressive spring animations
- Animation purely for technical spectacle

## Timing

```text
Micro interaction: 180–300ms
UI transition: 300–600ms
Content reveal: 500–900ms
Scene transition: 800–1400ms
Major cinematic transition: 1200–2000ms
```

Timing is contextual. Do not animate every element independently.

---

# 14. Scroll System

Use:

**Lenis** for smooth scrolling.

Use:

**GSAP + ScrollTrigger** for scroll-driven choreography.

The scroll should feel like a camera moving through the wedding world.

Examples:

- Camera pullback
- Horizontal environmental movement
- Parallax layers
- Text reveal
- Scene morphing
- Day-to-night transitions
- Floral growth
- Pattern reveals
- Character movement

Do not hijack scrolling unnecessarily.

Native scroll should remain the underlying navigation model.

---

# 15. Scene Transition System

Scene transitions are a core part of the product.

Transitions should visually explain why one event becomes another.

Examples:

Ganpati → Resort:
Camera pulls back.

Haldi → Sunset:
Light and sky transition.

Sunset → Sangeet:
Fairy lights and stars emerge.

Sunrise → Baraat:
Environment brightens and expands.

Tamil → Gujarati:
Cultural motifs organically merge.

Wedding → Moonlight:
Light gradually cools and environment becomes intimate.

Transitions should avoid abrupt page-like cuts unless intentionally used as a dramatic moment.

---

# 16. Illustration & Asset Rules

Custom assets supplied by the designer are the source of truth.

Expected assets may include:

- Ganpati
- Bride
- Groom
- Resort
- Mandap
- Baraat
- Jasmine
- Marigold
- Kolam
- Bandhani
- Cultural ornaments
- Decorative textures
- Photos
- Musical-night elements

Rules:

- Do not randomly generate replacement artwork.
- Maintain consistent illustration style.
- Use foreground/midground/background layers.
- Allow intentional cropping.
- Use parallax selectively.
- Integrate illustrations into environments.
- Avoid sticker-like placement.

Illustrations should feel spatially embedded in the scene.

---

# 17. Photography

Photography should feel personal and editorial.

Prefer:

- Natural expressions
- Candid moments
- Warm lighting
- Consistent colour treatment
- Intentional cropping

Avoid:

- Generic stock wedding imagery
- Heavy filters
- Inconsistent image styles

Photos can appear as physical/digital memory objects rather than generic gallery grids.

---

# 18. FAQ

Use 3–5 questions.

The FAQ should feel like the couple speaking directly to guests.

Tone:

- Quirky
- Warm
- Slightly sarcastic
- Personal
- Short

Avoid formal FAQ language.

Example:

**What should I wear?**

Something you can dance in. We are not responsible for your heels.

**Will there be food?**

It's an Indian wedding. We thought that went without saying.

---

# 19. RSVP / Closing

The experience should end emotionally, not abruptly.

Suggested closing direction:

> See you under the lights.

Then:

- Couple
- Date
- Location
- RSVP
- Final visual scene

Music can soften here.

The closing should feel like the final frame of a film.

---

# 20. Performance

The website is animation-heavy, so performance is part of the design.

Rules:

- Lazy-load below-the-fold assets.
- Prefer AVIF/WebP.
- Use responsive image sizes.
- Avoid unnecessary high-resolution images.
- Animate transforms and opacity where possible.
- Avoid layout-triggering animations.
- Reduce animation density on mobile.
- Avoid unnecessary WebGL.
- Use GPU-heavy effects only when they materially improve the experience.
- Respect `prefers-reduced-motion`.

The site should feel smooth before it feels impressive.

---

# 21. Accessibility

Required:

- Semantic HTML
- Keyboard navigation
- Accessible focus states
- Minimum 44×44px touch targets
- Meaningful alt text
- Sufficient contrast
- Reduced-motion support
- Music controls
- No essential information conveyed only through animation
- Game controls accessible without hover

The cinematic experience should remain understandable without motion.

---

# 22. Technical Stack

Recommended foundation:

- Next.js
- React
- TypeScript
- GSAP
- GSAP ScrollTrigger
- Lenis
- CSS / Tailwind where appropriate

Optional:

- Three.js
- React Three Fiber
- Motion libraries

Use Three.js/WebGL only where a real 3D effect is valuable.

Do not add libraries simply for novelty.

---

# 23. Engineering Principles

The code should be:

- Componentized
- Reusable
- Data-driven where appropriate
- Responsive
- Performant
- Accessible
- Easy to iterate

Wedding content should be separated from presentation wherever practical.

Event information should ideally be represented as structured data so the visual components can consume it.

Animation timelines should be organized by scene rather than scattered throughout components.

---

# 24. Interaction Principle

Every interaction should follow:

**Discover → Interact → Consequence → Continue**

Examples:

Scratch card:

Discover hidden element → scratch → reveal message → continue.

Game:

Discover challenge → answer → receive score → leaderboard → continue.

Memory:

Discover photo → interact → reveal story → continue.

If an interaction does not add emotion, delight, information, or narrative value, remove it.

---

# 25. Final Design North Star

The finished experience should feel like:

> **Someone took a beautiful Gujarati × Tamil destination wedding, turned it into an illustrated cinematic world, and made it interactive.**

It should never feel like:

> **Someone made a wedding website with animations.**
