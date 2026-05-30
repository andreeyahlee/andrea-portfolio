# DESIGN.md — Studio Namma Design System
> **For AI agents.** This file encodes the complete visual language of studionamma.com.
> Reference it before generating any UI, copy, layout, or component for this brand.
> Source: Live CSS extraction from `studio-namma-2025.webflow.shared.8a2fc89da.min.css` + HTML audit.

---

## 1. BRAND IDENTITY

**Studio:** Studio Namma — creative studio based in Paris, Barcelona & London.
**Positioning:** "Bold design & clean Webflow" for "ambitious brands."
**Voice:** Confident, terse, cinematic. Never generic. Every detail matters.
**Tone keywords:** premium, obsessive, bold, French editorial, motion-forward, international.
**Tagline pattern:** Short punchy lines. No padding. e.g. "It's never just a website."

---

## 2. COLOR TOKENS

### Named CSS Variables (`:root`)

| Token | Value | Usage |
|---|---|---|
| `--dark` | `#111111` | Primary dark — text on light, bg on dark mode |
| `--light` | `#e4e4e4` | Primary light — bg on light mode, text on dark |
| `--yellow` | `#f9fe02` | Brand accent — CTAs, hover highlights, active states |
| `--black` | `#000000` | Pure black — nav bg, overlay, preloader |
| `--light-grey` | `#f5f5f5` (whitesmoke) | Secondary surface — cards, subtle dividers |
| `--transparent` | `#ffffff00` | Transparent — animation start states |

### Theme System (Dual Mode)

```css
/* Light Mode (default) */
--_theme---background: var(--light);   /* #e4e4e4 */
--_theme---text:       var(--dark);    /* #111111 */

/* Dark Mode (toggled via class) */
--_theme---background: var(--dark);   /* #111111 */
--_theme---text:       var(--light);  /* #e4e4e4 */
```

> **Agent rule:** Always respect dual-mode. Never hardcode `#000` or `#fff` — use `--_theme---text` and `--_theme---background`.

### Utility Colors (contextual, use sparingly)

| Hex | Purpose |
|---|---|
| `#2d62ff` | Link/interactive blue accent |
| `#dd23bb` | Accent magenta (highlight states) |
| `#ffe100` | Alternate yellow (form/status) |
| `#d3d3d3` | Muted/disabled text |
| `#11111121` | Dark overlay scrim (20% opacity) |
| `#666163b3` | Mid-tone overlay (70% opacity) |
| `#c8c8c8` | Border/divider grey |

---

## 3. TYPOGRAPHY

### Font Families

| Font | Weight(s) | Style | Role |
|---|---|---|---|
| **Mixtape Extra Condensed** | 800 (ExtraBold) | normal | Display — H1, H2 (all-caps, dramatic) |
| **Mixtape** | 400 (Regular), 400i (Italic), 500 (Medium), 600 (SemiBold) | normal/italic | Body, H3, H4, UI text |
| **GT Pressura Mono** | 300 (Light) | normal | Mono labels, metadata, captions, tags |
| **Neue Montreal** | 400 (Regular) | normal | Fallback / secondary prose |
| **Offbit** | — | — | Special/decorative use only |

> **Fallback stacks:**
> - Mixtape → `Verdana, sans-serif`
> - GT Pressura Mono → `Georgia, sans-serif`
> - Neue Montreal → `Arial, sans-serif`

---

### Type Scale

#### Desktop (≥ 1440px default root)

| Level | Font | Size | Line Height | Letter Spacing | Weight | Transform |
|---|---|---|---|---|---|---|
| H1 | Mixtape Extra Condensed | `13rem` | `10.5rem` | `-0.6rem` | 800 | UPPERCASE |
| H2 | Mixtape Extra Condensed | `10rem` | `8.6rem` | `-0.4rem` | 800 | UPPERCASE |
| H3 | Mixtape Extra Condensed | `3.5rem` | `3.2rem` | `-0.2rem` | 800 | — |
| H4 | Mixtape Extra Condensed | `1.9rem` | `2rem` | `-0.0625px` | 700 | UPPERCASE |
| Body | Mixtape | `1.4rem` | `1.7rem` | — | 400 | — |
| Mono | GT Pressura Mono | `0.9rem` | `1rem` | `+0.121875rem` | 300 | UPPERCASE |

#### Tablet (≤ 991px)

| Level | Size | Line Height |
|---|---|---|
| H1 | `9.5rem` | `7.75rem` |
| H2 | `7rem` | `6.25rem` |
| H3 | `3rem` | `2.9rem` |
| H4 | `1.9rem` | `2rem` |
| Body | `1.25rem` | `1.65rem` |
| Mono | `0.9rem` | `1rem` |

#### Mobile (≤ 479px)

| Level | Size | Line Height |
|---|---|---|
| H1 | `5.5rem` | `4.5rem` |
| H2 | `4rem` | `3.3rem` |
| H3 | `2.5rem` | `2.8rem` |
| H4 | `1.9rem` | `2rem` |
| Body | `1.2rem` | `1.6rem` |
| Mono | `0.9rem` | `1rem` |

> **Agent rule:** H1 and H2 are always uppercase. Letter-spacing is negative (tight) for display sizes. Mono text is always uppercase with positive tracking. Never use Arial/sans-serif as a design choice — only as a fallback.

---

## 4. SPACING SYSTEM

### Container

| Property | Value |
|---|---|
| Max-width (standard) | `78rem` |
| Max-width (wide) | `120rem` |
| Max-width (narrow) | `48rem` |
| Max-width (bleed) | `200rem` |
| Horizontal padding (desktop) | `1.25rem` |
| Horizontal padding (mobile) | `0.75rem` |
| Side gutters | `10%` (`--_responsive---container--pixel`) |
| Alignment | `margin: 0 auto` |

### Section Spacing

| Usage | Value |
|---|---|
| Section margin-bottom (default) | `15rem` |
| Section margin-bottom (large) | `15.625rem` |
| Section padding (vertical) | `8rem` top + bottom |
| Hero padding-bottom | `3vh` |
| Large gap (desktop) | `12.5rem` |
| Medium gap | `5rem` |
| Standard gap | `2.5rem` |
| Small gap | `1.25rem` |
| Micro gap | `0.5rem` |

### Padding Utility Scale

| Token | Value |
|---|---|
| `padding-custom1` | `1.5rem` |
| Base unit | `0.25rem` (4px) |
| Common padding | `1rem`, `2rem`, `3.5rem` |
| Nav padding | `1rem` |

---

## 5. BORDER RADIUS

| Context | Desktop | Tablet | Mobile |
|---|---|---|---|
| Default (`--_responsive---other--border-radius`) | `0.4rem` | `0.3rem` | `0.25rem` |
| Cards / modals | `0.5rem` | — | — |
| Micro elements | `0.125rem–0.2rem` | — | — |
| Pills / avatars | `100%` | — | — |
| Square / sharp | `0` | — | — |

---

## 6. BREAKPOINTS

| Name | Query | Approx Device |
|---|---|---|
| Mobile | `max-width: 479px` | Small phones |
| Mobile-L | `max-width: 767px` | Large phones |
| Tablet | `max-width: 991px` | Tablet portrait / landscape |
| Desktop | `min-width: 992px` | Laptop / desktop (default) |
| Large | `min-width: 1280px` | Wide desktop |
| XL | `min-width: 1440px` | Large monitor |

---

## 7. MOTION & ANIMATION

### Easing Tokens

| Name | Value | Use case |
|---|---|---|
| Default ease | `cubic-bezier(0.175, 0.885, 0.327, 1.41)` | Hover, appear, bounce-in |
| Linear | `linear` | Spinners, loaders |
| Ease-in-out | `ease-in-out` | Subtle transitions |

### Duration Tokens

| Name | Value | Use case |
|---|---|---|
| Instant | `0.1s` | Color/bg transitions |
| Fast | `0.2s` | Opacity, small moves |
| Medium | `0.3s` | Most UI transitions |
| Slow | `0.4s` | Cards, reveals |
| Infinite | `0.8s linear infinite` | Spinners |

### Interaction Patterns

```css
/* Hover scale (all visual wrappers) */
.visual_wrapper:hover { transform: scale(0.98); }
transition: all 0.4s cubic-bezier(0.175, 0.885, 0.327, 1.41);

/* Link underline reveal (overflow hidden, child slides in) */
.link { overflow: hidden; position: relative; }
.link__underline { position: absolute; inset: 120% auto auto 0%; }

/* Theme color swap */
transition: background-color 0.1s, color 0.1s;
```

### Motion Philosophy
- **GSAP** handles complex scroll-driven animations (text reveals, video parallax, section stacking)
- **Lenis** provides smooth scroll inertia across all pages
- **Hero:** `perspective: 100vw` creates cinematic 3D depth on entry
- All section entries use scroll-triggered reveals — elements start offset and fade/slide in
- Video backgrounds loop silently for ambient motion (no autoplay sound)

> **Agent rule:** Never use `transition: all` without a duration. Never animate without easing. Default to the bouncy cubic-bezier for brand-forward moments; linear only for mechanical/loader states.

---

## 8. COMPONENTS

### Navigation

```
Structure:    Horizontal flex — logo left, nav links right
Background:   #000 (always dark, regardless of page theme)
Text:         #fff
Padding:      1rem vertical
Max-width:    80rem (centered)
Position:     sticky top (scrolls with page, not fixed)
Nav item:     Mono font, uppercase, 0.9rem, letter-spacing +0.12rem
Active state: Hidden (`.text-mono.w--current { display: none }`)
```

### Containers / Wrappers

```
Standard page:   max-width 78rem, centered, 10% side gutters
Wide (hero):     max-width 120rem or 200rem (full-bleed feel)
Narrow (article): max-width 48rem
```

### Visual Wrappers (Project Cards / Media)

```
Hover:           scale(0.98)
Transition:      0.4s cubic-bezier(0.175, 0.885, 0.327, 1.41)
Border-radius:   var(--_responsive---other--border-radius)
Overflow:        hidden
Cursor:          pointer
```

### Tags / Labels

```
Font:       GT Pressura Mono, 0.9rem, uppercase, letter-spacing +0.12rem
Color:      var(--_theme---text)
Gap:        0.5–1rem between tag items
```

### Links (Animated)

```
Display:    inline-block, overflow hidden
Child text: slides up on hover (Lenis/GSAP driven)
Cursor:     pointer
Padding-right: 0.5rem
```

### Hero Section

```
Height:       100vh
Layout:       flex column, centered
Perspective:  100vw (3D cinematic entry)
Video bg:     muted loop, full cover, z-index below content
Scroll cue:   "[ Scroll ]" in mono font
```

### Sections

```
Width:         100%
Margin-bottom: 15rem (desktop), scales with viewport
Padding:       8rem vertical (standard content sections)
```

### Forms (Contact)

```
Fields: Name, Email, Phone, Interest (select), Message
Submit: "Send" — triggers success/error states
Border-radius: var(--_responsive---other--border-radius)
Validation: Webflow native + custom feedback text
```

---

## 9. DARK MODE

Toggle label: "Dark mode" (text switch in nav)
Implementation: Class-based on `<html>` or `<body>`

```css
/* Light (default) */
background: var(--light);  /* #e4e4e4 */
color: var(--dark);        /* #111111 */

/* Dark */
background: var(--dark);   /* #111111 */
color: var(--light);       /* #e4e4e4 */
```

The yellow `#f9fe02` accent is theme-agnostic — it works on both light and dark backgrounds.

---

## 10. DO / DON'T FOR AI AGENTS

### ✅ DO
- Use `Mixtape Extra Condensed` at large sizes with negative letter-spacing
- Always uppercase H1 and H2
- Use `#f9fe02` yellow for CTAs and accent moments
- Build with dual light/dark mode in mind from the start
- Add `scale(0.98)` hover on all clickable media
- Use overflow-hidden + child reveal for link animations
- Use GT Pressura Mono for all metadata, tags, dates, captions
- Apply generous section spacing (15rem+ margins)
- Default container to `max-width: 78rem` centered
- Use the bouncy cubic-bezier for all entrance animations

### ❌ DON'T
- Don't use standard web fonts (Inter, Roboto, System UI) — always use the brand stack
- Don't hardcode `#000` or `#fff` as theme colors
- Don't make H1/H2 sentence-case — they're always UPPERCASE
- Don't use tight spacing — sections breathe with 15rem gaps
- Don't animate without easing
- Don't add drop shadows (not part of this system — flat, high-contrast instead)
- Don't use gradients unless instructed — the palette is flat and bold
- Don't use more than 2–3 colors per composition
- Don't use `border-radius > 0.5rem` on content cards (keeps it editorial, not bubbly)

---

## 11. QUICK REFERENCE CHEAT SHEET

```css
/* === STUDIO NAMMA DESIGN TOKENS === */

:root {
  /* Colors */
  --dark:          #111111;
  --light:         #e4e4e4;
  --yellow:        #f9fe02;
  --black:         #000000;
  --light-grey:    #f5f5f5;
  --accent-blue:   #2d62ff;

  /* Theme (swap for dark mode) */
  --bg:            var(--light);
  --text:          var(--dark);

  /* Typography — Desktop */
  --fs-h1:         13rem;
  --lh-h1:         10.5rem;
  --ls-h1:         -0.6rem;

  --fs-h2:         10rem;
  --lh-h2:         8.6rem;
  --ls-h2:         -0.4rem;

  --fs-h3:         3.5rem;
  --lh-h3:         3.2rem;
  --ls-h3:         -0.2rem;

  --fs-h4:         1.9rem;
  --lh-h4:         2rem;

  --fs-body:       1.4rem;
  --lh-body:       1.7rem;

  --fs-mono:       0.9rem;
  --lh-mono:       1rem;
  --ls-mono:       0.121875rem;

  /* Spacing */
  --section-gap:   15rem;
  --container-max: 78rem;
  --container-pad: 1.25rem;
  --side-gutter:   10%;

  /* Border radius */
  --radius:        0.4rem;
  --radius-lg:     0.5rem;
  --radius-pill:   100%;

  /* Motion */
  --ease-bounce:   cubic-bezier(0.175, 0.885, 0.327, 1.41);
  --dur-fast:      0.2s;
  --dur-med:       0.3s;
  --dur-slow:      0.4s;
}

/* Fonts */
/* Display:  font-family: 'Mixtape Extra Condensed', Verdana, sans-serif; font-weight: 800; */
/* Body:     font-family: 'Mixtape', Verdana, sans-serif; font-weight: 400; */
/* Mono:     font-family: 'GT Pressura Mono', Georgia, sans-serif; font-weight: 300; */
```

---

*Extracted: May 2026 · Source: studionamma.com · CSS: studio-namma-2025.webflow.shared.8a2fc89da.min.css*
