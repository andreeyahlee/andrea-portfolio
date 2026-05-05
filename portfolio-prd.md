# Andrea Lee — Portfolio Site PRD
**Version:** 1.0 | **For:** Claude Code build sprint  
**Stack:** Vanilla HTML + CSS + GSAP 3 | **Deploy:** GitHub → Netlify

---

## 0. How to Use This PRD

Hand this entire file to Claude Code as your opening brief. Work section by section. Each section maps to one Claude Code session. Assets must be exported from Figma *before* that section's session begins (see §2 Asset Export Checklist).

---

## 1. Design Tokens (Non-negotiable)

> ⚠️ **Use these exact values — they are live in index.html. Do not revert to any earlier version.**

```css
:root {
  /* Colour */
  --bg:        #f3f2ec;   /* cream, site background */
  --bg-warm:   #eae8e0;   /* warm cream, used for About slot framing */
  --ink:       #0A0A0A;   /* primary text */
  --muted:     #8A8A86;   /* captions, labels */
  --accent:    #a1ad49;   /* lime-green, hover/CTA highlight */
  --lime:      #dce888;

  /* Case study accent overrides */
  --arvo:      #2a4a6b;   /* navy */
  --seletar:   #2b5e3a;   /* forest green */
  --pethaus:   #7b3f6e;   /* mauve */
  --work-bg:   #1f2b1f;   /* dark green — Work section background */

  /* Type */
  --font-display: 'DM Sans', sans-serif;        /* headlines, nav */
  --font-body:    'Plus Jakarta Sans', sans-serif; /* body text */
  --font-mono:    'JetBrains Mono', monospace;  /* labels */

  /* Spacing scale */
  --sp-xs: 8px;
  --sp-sm: 16px;
  --sp-md: 32px;
  --sp-lg: 64px;
  --sp-xl: 128px;
}
```

**Google Fonts import (all four families — do not remove any):**
```html
<link href="https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,100..1000&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@200..800&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@100..800&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@1,9..144,300&display=swap" rel="stylesheet">
```

> Note: `Fraunces` (italic, weight 300) is used for accent/italic copy inside the About overlay panel only. `DM Sans` and `Plus Jakarta Sans` are the primary display and body fonts.

---

## 2. Asset Export Checklist (Do this in Figma first)

Export every asset as **PNG at 2×**, named exactly as listed. Drop into `/assets/` in the repo root. Run all through TinyPNG before committing to keep file sizes down.

> ⚠️ **Duplicate files to delete from assets folder before starting:**
> `hero-desktop-zoom.png.png`, `hero-letter-p.png.png`, `work-hover-reveal.png.png`, `work-initial.png.png`
> Run in Terminal: `cd ~/Desktop/andrea-portfolio/assets && rm hero-desktop-zoom.png.png hero-letter-p.png.png work-hover-reveal.png.png work-initial.png.png`

| File name | Figma node | Role |
|---|---|---|
| `hero-initial.png` | node-id `273-31` | State 1 — page load, full hero graphic including headline inside mockup |
| `hero-desktop-zoom.png` | node-id `458-46` | State 2 — desktop mockup scaled up (GSAP reference) |
| `hero-letter-p.png` | node-id `458-93` | State 3 — letter p zoomed (GSAP reference) |
| `work-initial.png` | node-id `458-140` | Work initial state — 3 columns, no hover |
| `work-hover-reveal.png` | node-id `848-1667` | Work hover state — column expand reference |
| `about-initial.png` | node-id `707-16514` | About initial state |
| `about-portrait-split.png` | node-id `713-16765` | Portrait visible, text split — portrait is embedded in this frame |
| `about-portrait-anchored.png` | node-id `953-14453` | Portrait anchored bottom, rectangle expanded |
| `about-info-swap.png` | node-id `953-14527` | Info content swapped, portrait stays |
| `about-singapore.png` | — | Singapore island silhouette watermark (warm beige, transparent bg) — State 3 left column |
| `icon-geopin.png` | — | Location pin icon (black line-art) — State 3 left column |
| `sayhello.png` | node-id `953-14585` | Say Hi / Contact section |
| `arvo-cta.png` | node-id `952-14418` | Work card CTA thumbnail — ARVO |
| `seletar-cta.png` | node-id `952-14422` | Work card CTA thumbnail — Seletar |
| `pethaus-cta.png` | node-id `952-14428` | Work card CTA thumbnail — PetHaus |
| `arvo-hero.png` | node-id `869-255` | ARVO case study hero |
| `seletar-hero.png` | node-id `780-10685` | Seletar case study hero |
| `pethaus-hero.png` | node-id `799-149` | PetHaus case study hero |
| `nav-light.png` | — | Nav bar on light/cream backgrounds |
| `nav-dark.png` | — | Nav bar on dark/ink backgrounds |
| `logo-light.png` | — | Flower logo for light backgrounds |
| `logo-dark.png` | — | Flower logo for dark backgrounds |
| `cursor-light.png` | — | Custom flower cursor for light backgrounds |
| `cursor-dark.png` | — | Custom flower cursor for dark backgrounds |

**Figma export steps:**
1. Select node → right panel → Export → `2×` → Format: `PNG`
2. Rename to match table above before saving
3. Run all through TinyPNG before committing

---

## 3. File Structure

```
andrea-portfolio/
├── index.html              ← single-page site (Homepage + Work + About + Contact)
├── case-studies/
│   ├── arvo.html
│   ├── seletar.html
│   └── pethaus.html
├── assets/
│   ├── (all PNG exports from §2)
│   └── favicon.svg
├── css/
│   └── (DO NOT use — all CSS must be inlined in each HTML file)
└── README.md
```

> ⚠️ **No separate CSS files.** Every HTML file must be fully self-contained with `<style>` inlined. Splitting CSS breaks standalone rendering and Netlify previews.

---

## 4. GSAP Setup

**CDN (add to every `<head>`):**
```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"></script>
<script>gsap.registerPlugin(ScrollTrigger);</script>
```

**GSAP conflict rules (enforce in every session):**
1. Never use CSS `position: sticky` on any element that GSAP `pin: true` also targets — GSAP owns pinning.
2. Never set CSS `transform: translate(-50%, -50%)` on any element GSAP will scale/move — GSAP must be sole owner of transforms.
3. Never apply both an entrance animation (`y: 40 → 0`) and a parallax animation (`y`) to the same element in the same timeline — they will fight.
4. All scroll animations use `scrub: 1` unless specified otherwise.

---

## 5. Homepage — Scroll Sequence Spec

> ⚠️ **ARCHITECTURE — read before touching anything:**
>
> **Scroll ends at Work.** The scroll sequence is: Hero → Work. That's it. Work is the terminal scroll destination.
>
> **About and Contact are overlay panels**, not scroll sections. They are opened by clicking their nav buttons. They must NOT be added to the scroll flow. The existing `#about-overlay` and `#contact-overlay` `<div>` elements (outside the scroll sections) are the correct implementation.
>
> **Nav behaviour (locked):**
> - Flower logo → smooth scroll to top of page
> - "Work" link → smooth scroll to `#work`
> - "About" button → opens `#about-overlay` dialog
> - "Say Hi!" button → opens `#contact-overlay` dialog

### 5.1 Section: HERO

**4-state scroll sequence:**

| State | Figma node | What happens |
|---|---|---|
| 1 — Page load | `273-31` | Initial hero: full layout, cream bg, desktop mockup, headline |
| 2 — First scroll | `458-46` | Desktop mockup scales up, fills frame |
| 3 — Second scroll | `458-93` | "complex" surfaces, letter p zooms to fill viewport |
| 4 — Exit | `458-140` | p strokes fill screen edge to edge, round hole reveals Work section beneath |

---

**State 1 — Static layout:**
- Full viewport (`100vw × 100vh`), background `--bg`
- Display `hero-initial.png` centred — this is the full graphic including the desktop mockup with the headline text rendered inside it
- Nav bar sits above using `nav-light.png`
- No separate HTML headline text visible in State 1 — the text lives inside the graphic

**Critical note on headline text for animation:**
The headline `"making complex things stupidly simple."` is rendered inside the desktop mockup graphic in `hero-initial.png`. GSAP cannot animate letters inside an image. Therefore:

1. In State 1: show `hero-initial.png` as-is
2. At the transition to State 3: fade out the image entirely and crossfade to an **HTML text overlay** that matches the exact typography, size, position and colour of the headline as it appears in `hero-initial.png`
3. The HTML overlay is what GSAP animates — the word `complex` as `<span class="word-complex">`, and the letter `p` as an SVG

Claude Code must match the font size, weight, colour, and position of the HTML overlay text to `hero-initial.png` as closely as possible before animating.

**State 2 — Desktop zoom (scrub 0 → 0.35):**
```
GSAP pins #hero for the entire sequence. No CSS position:sticky on #hero.
- #hero-img (hero-initial.png): scale 1 → 1.8, transformOrigin "center center"
- HTML text overlay: opacity 0 (hidden during zoom)
```

**State 3 — "complex" + letter p zoom (scrub 0.35 → 0.75):**
```
- #hero-img: opacity 1 → 0 (image fades out)
- HTML text overlay: opacity 0 → 1 (crossfades in, matching image typography)
- .word-complex: scale 1 → 6, moves to viewport centre
- All other .word spans: opacity 1 → 0
- Background: --bg transitions to --ink

scrub 0.55 → 0.75:
- #letter-p-svg: scale 1 → 20, transformOrigin "50% 55%"
- Other letters in .word-complex: opacity 1 → 0
- Background fully --ink
```

**State 4 — p becomes the Work section background (scrub 0.75 → 1.0):**

The p keeps scaling until its strokes fill the viewport. The round counter-form stays transparent — Work section is visible through it. At scrub 1.0 unpin fires.

```
scrub 0.75 → 1.0:
- #letter-p-svg: scale continues 20 → 80+
- Work section visible through counter-form hole
- At scrub 1.0: unpin fires
```

**SVG for the p counter-form:**
```html
<svg id="letter-p-svg" viewBox="0 0 300 400"
     xmlns="http://www.w3.org/2000/svg"
     style="position:fixed;top:0;left:0;width:100vw;height:100vh;pointer-events:none;z-index:10;opacity:0;">
  <text x="50%" y="72%"
        text-anchor="middle"
        font-family="Fraunces, serif"
        font-weight="300"
        font-style="italic"
        font-size="380"
        fill="#0A0A0A">p</text>
</svg>
```
```css
#work { position: relative; z-index: 0; }
/* GSAP is sole owner of all transforms on #letter-p-svg and .word-complex */
```

---

### 5.2 Section: WORK

**Two states:**

| State | Figma node | What the user sees |
|---|---|---|
| Initial | `458-140` | Work section as it first appears after the p unpin — no hover yet |
| Hover | `848-1667` | A column is active — expanded width, thumbnail and text revealed |

**Export needed:**
- `work-initial.png` — node `458-140` (add this to your Figma export list)
- `work-hover-reveal.png` — node `848-1667` (reference for hover end state)

---

**Work section entrance — when p unpin fires:**

The columns do not just snap into place. As the p's counter-form expands to reveal Work, the three columns animate in from below, staggered:

```js
gsap.from(".work-col", {
  yPercent: 30,
  opacity: 0,
  stagger: 0.1,
  duration: 0.6,
  ease: "power2.out",
  scrollTrigger: {
    trigger: "#work",
    start: "top 90%",
    toggleActions: "play none none none"
  }
});
```

Match column count, proportions, and content to `work-initial.png`.

- Background: `--ink` (continuous from hero transition — no seam)
- Three equal vertical columns, full viewport height
- Section label, column titles, dividers: match `work-initial.png`

**Hover state (node `848-1667`):**

Build hover behaviour to match `work-hover-reveal.png`. Do not invent descriptors, CTA copy, or thumbnail positions — read from the exported image.

```
On mouseenter column:
  - Hovered column expands, others compress — match proportions in work-hover-reveal.png
  - Thumbnail fades in: opacity 0 → 1, 300ms
  - Text content revealed: match work-hover-reveal.png for position and copy
  - Transition: 400ms ease

On mouseleave:
  - All reverse, 300ms ease
```

**Column accent tints (hover only):**
- ARVO column: `--arvo` (#2a4a6b) at 10% opacity
- Seletar column: `--seletar` (#2b5e3a) at 10% opacity
- PetHaus column: `--pethaus` (#7b3f6e) at 10% opacity

**CTA links:**
- ARVO → `arvo.html`
- Seletar → `seletar.html`
- PetHaus → `pethaus.html`

---

### CTA Card Implementation

The CTA card images (`arvo-cta.png`, `seletar-cta.png`, `pethaus-cta.png`) fill the full column using `inset: 0` + `object-fit: cover`. The previous `aspect-ratio` + `contain` approach left gaps at top/bottom — fixed by user request.

```css
.work-col-bottom {
  position: absolute;
  inset: 0;
  overflow: hidden;
  z-index: 1;
}

.work-card-img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  display: block;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.35s ease 0.06s;
}
.work-col:hover .work-card-img {
  opacity: 1;
  pointer-events: auto;
}
```

**Why:** `inset: 0` fills the column completely. `cover` ensures no gaps at any viewport size — minimal cropping at edges, imperceptible given the image content.

**Work section is the scroll end point. There is no scroll exit from Work.**

---

### 5.3 Section: ABOUT (Overlay Panel)

> ⚠️ **About is NOT a scroll section. It is an overlay panel (`#about-overlay`) opened by the "About" nav button. Do not add it to the scroll flow.**

**Architecture:** `#about-overlay` is `position: fixed; inset: 0; overflow-y: auto`. Inside it, `#about` is `height: 340vh` with a `position: sticky; top: 0; height: 100vh` child (`.about-sticky`). A GSAP paused timeline (`aboutSplitTl`) is scrubbed by the overlay's `scrollTop`. `progress = scrollTop / (aboutEl.offsetHeight - innerHeight)`.

**4-state animation sequence (scroll-driven inside the overlay):**

| State | Figma node | Status | Scroll range |
|---|---|---|---|
| 1 — Overlay opens | `707-16514` | ✅ Built | Static (scrollTop = 0) |
| 2 — Portrait pop + text split | `713-16765` | ✅ Built | 0% → 50% of scroll |
| 3 — Portrait anchors, rectangle expands | `953-14453` | ✅ Built | 50% → 100% of scroll |
| 4 — Info swap | `953-14527` | 🔲 Pending | — |

---

**State 1 — Overlay opens (static):**
- `#about-overlay` fades in (opacity transition on `.is-open`)
- Headline `"Hi! I'm Andrea"` centred in viewport — `"Hi! I'm"` on one line, `"Andrea"` with portrait slot inline
- Portrait slot (`.about-portrait-slot`) is a warm-tinted placeholder matching the `a` descender width
- Portrait photo (`.about-portrait-img`) hidden below viewport at `yPercent: 110`
- Scroll hint visible at bottom
- Nav switches to dark mode: `body:has(#about-overlay.is-open) #nav { background: var(--work-bg) }`
- Logo swaps to `logo-dark.png` on open; restores via `updateNavTheme()` on close

---

**State 2 — Portrait pop + text split (scrub 0 → ~0.53):**

GSAP timeline positions (built in `buildAboutSplitTl()`, called on first overlay scroll):
```
0.0  scroll hint fades out
0.1  portrait rises: yPercent 110 → 0
0.15 "Andrea" wrap centres: x += centerDeltaX
0.15 "Hi! I'm" slides left: x = (viewCenter - halfSlot - P) - hiRect.right
0.15 "Andrea" text slides right: x = (viewCenter + halfSlot + P) - andreaRect.left
0.15 portrait slot + img widen: width → max(15vw, 120px)
1.1  clip-path removed from .about-andrea-wrap (allows portrait to escape bounds)
1.1  portrait slot fades out
1.1  "Hi! I'm" fades out
1.1  "Andrea" text fades out
```

---

**State 3 — Portrait anchors, warm rect expands (scrub ~0.53 → 1.0):**

```
1.1  warm panel expands: height 0 → 50vh (bottom half of viewport)
1.1  portrait moves down: y += s3PortraitDeltaY, sized to 28vw × (28vw / naturalRatio)
     naturalRatio = naturalWidth / naturalHeight of about-portrait.png (986×884 = 1.115)
     Result: portrait ~403×361px, bottom edge = viewport bottom
1.25 stacked "Hi! I'm / Andrea" head fades in (top-left, above warm rect)
1.25 two-column content grid fades in (inside warm rect)
```

**State 3 content grid layout:**
```css
.about-s3-content {
  position: absolute; bottom: 0; left: 0; right: 0; height: 50%;
  display: grid;
  grid-template-columns: 1fr 30vw 1fr;  /* left col | portrait space | right col */
  align-items: stretch;
  padding: 0 clamp(32px, 5vw, 80px);
}
/* Left col: bottom-aligned */
.about-s3-col:first-child { justify-content: flex-end; padding-bottom: clamp(28px, 4.5vh, 56px); }
/* Right col: top-aligned */
.about-s3-col:last-child  { justify-content: flex-start; padding-top: clamp(28px, 4.5vh, 56px); }
```

**Left column (Location — Singapore):**
- Geo pin icon: `<img src="assets/icon-geopin.png">` 24×24px, black line-art
- Title: `"Raised in a land of 'maximum'"` — DM Sans italic, `clamp(18px, 2vw, 32px)`
- Body: copy about Singapore minimalism, `Plus Jakarta Sans`, `clamp(12px, 1vw, 15px)`, opacity 0.75
- Background: Singapore island silhouette (`assets/about-singapore.png`) as `::before` pseudo-element
  - `position: absolute; right: 0; width: 48vw; height: 120%` — right edge anchors at portrait column start, left bleeds off-screen
  - `background: url(...) right center / contain no-repeat; opacity: 0.5; z-index: -1`

**Right column (Philosophy — Pilates):**
- Title: `"Designing 🧘‍♀️ is like practicing Pilates"` — DM Sans italic, same size as left title
- Emoji wrapped in `.about-s3-emoji` with `font-family: 'Apple Color Emoji', 'Segoe UI Emoji', 'Noto Color Emoji'`
- Body: copy about invisible design decisions, same body style as left col
- `"The invisible adjustments are usually the whole job."` — `font-weight: 600`

---

**State 4 — Info swap (🔲 PENDING):**

Reference: `about-info-swap.png` (node `953-14527`). Portrait stays anchored. Content inside warm rect swaps. Read all copy and layout from the image — do not invent.

---

**Exports needed:**
- `about-initial.png` — node `707-16514`
- `about-portrait-split.png` — node `713-16765`
- `about-portrait-anchored.png` — node `953-14453` ← primary State 3 reference
- `about-info-swap.png` — node `953-14527`
- `about-singapore.png` — Singapore island silhouette, warm beige on transparent bg
- `icon-geopin.png` — location pin icon, black line-art

All text copy comes from the exported PNGs. Do not invent copy.

---

### 5.4 Section: CONTACT ("Say Hi" — Overlay Panel)

> ⚠️ **Contact is also an overlay panel (`#contact-overlay`), opened by the "Say Hi!" nav button. Do not add it to the scroll flow.**

**Source screen:** `node-id 953-14585` → export as `sayhello.png`

Build this section to match `sayhello.png` exactly. All text, layout, links, and elements come from that image — do not invent copy, email addresses, icons, or footer content.

**Entrance animation (one-shot, no pin, no scrub):**
```js
// Elements animate in as section enters viewport
// Match which elements exist to sayhello.png
// Apply: y: 40 → 0, opacity 0 → 1, staggered by element, ease "power2.out"
```

---

## 6. Case Study Pages — Animation Specs

> ⚠️ **CONTENT RULE — applies to every section below:**
> All text copy, labels, headings, stats, annotations, and layout details come from the exported PNG for that section. Claude Code must not write, invent, or assume any content. If text is not legible in the image, flag it and ask — do not fill in the gap.

### Base pattern (all three case studies)

Every section on every case study page uses this as the default entrance — no exceptions unless a signature moment overrides it.

```js
// Apply to every .cs-section on page load
gsap.utils.toArray(".cs-section").forEach(section => {
  gsap.from(section, {
    y: 40,
    opacity: 0,
    duration: 0.7,
    ease: "power2.out",
    scrollTrigger: {
      trigger: section,
      start: "top 80%",
      toggleActions: "play none none none"
    }
  });
});
```

Images and screen mockups within sections get a slight extra offset:
```js
gsap.from(".cs-screen", { y: 60, opacity: 0, duration: 0.9, ease: "power3.out", ... })
```

Multi-item rows (cards, stat blocks, findings lists) stagger:
```js
gsap.from(".cs-card", { y: 30, opacity: 0, stagger: 0.1, duration: 0.6, ... })
```

---

### Shared page structure (all three)

```html
<style>:root { --case-accent: [colour]; }</style>
```

| Element | Value per project |
|---|---|
| `--case-accent` | ARVO `#2a4a6b` · Seletar `#2b5e3a` · PetHaus `#7b3f6e` |
| Back link | `← Back` → `index.html#work` |
| Prototype CTA | ARVO: figma.com/make/1VklSkodi8LYoZ755bvRfi · Seletar: figma.com/make/VX9LWSLRU1wf0NH2pPaJbv · PetHaus: placeholder |
| Speaking notes | `<details>` toggle, hidden by default |

**Page transition — all three case studies (image expand):**

When a user clicks a Work column CTA, the case study thumbnail image (`arvo-cta.png`, `seletar-cta.png`, `pethaus-cta.png`) expands from its position in the column to fill the entire viewport, and seamlessly becomes the hero image of the case study page. No solid colour overlay. No flash.

```js
// On CTA click:
// 1. Get bounding rect of the thumbnail image inside the clicked column
// 2. GSAP animate that image from its current size/position to full viewport
// 3. Once it fills viewport, navigate to the case study page
// 4. Case study hero opens with its hero image already filling screen — no flash

const cta = document.querySelector('.work-col--arvo .cta-img');
const rect = cta.getBoundingClientRect();

// Clone image and position it fixed at exact same spot
const clone = cta.cloneNode();
clone.style.cssText = `
  position: fixed;
  top: ${rect.top}px;
  left: ${rect.left}px;
  width: ${rect.width}px;
  height: ${rect.height}px;
  z-index: 1000;
  object-fit: cover;
`;
document.body.appendChild(clone);

// Expand clone to fill viewport
gsap.to(clone, {
  top: 0, left: 0,
  width: '100vw', height: '100vh',
  duration: 0.7,
  ease: 'power2.inOut',
  onComplete: () => window.location.href = 'case-studies/arvo.html'
});

// arvo.html hero opens with arvo-hero.png already full screen — matches the expanded clone
```

Apply same pattern for Seletar (`seletar-cta.png` → `seletar-hero.png`) and PetHaus (`pethaus-cta.png` → `pethaus-hero.png`). All three must use this image-expand transition — no hard page loads, no solid colour overlays.

---

### 6.1 ARVO — `case-studies/arvo.html`

**Accent:** `#2a4a6b` navy | **12 sections**

**Exports needed:**

| File | Node |
|---|---|
| `arvo-hero.png` | `869-255` |
| `arvo-tldr.png` | `737-247` |
| `arvo-research.png` | `858-1810` |
| `arvo-brightspots.png` | `898-456` |
| `arvo-pivot.png` | `894-116` |
| `arvo-results2.png` | `899-903` |
| `arvo-designfixes.png` | `755-200` |
| `arvo-strategic.png` | `763-3884` |
| `arvo-finalsolution.png` | `908-108` |
| `arvo-outcome.png` | `755-1121` |
| `arvo-testimony.png` | `765-7912` |
| `arvo-retro.png` | `765-7946` |

**Section-by-section animation:**

**Hero (`869-255`)** — Full bleed navy, page load entrance:
```
- Project title: y: 60 → 0, opacity 0 → 1, 0.8s, delay 0.2s
- Role + year tag: y: 20 → 0, opacity 0 → 1, delay 0.5s
- Hero image: scale 1.05 → 1.0, opacity 0 → 1, 1s (subtle zoom-in on load)
- Prototype CTA button: fades in last, delay 0.8s
```

**TLDR (`737-247`)** — Stat cards stagger in:
```
- Section label slides in from left
- Each TLDR card: stagger 0.12s, y: 30 → 0, opacity 0 → 1
```

**Initial Research (`858-1810`)** — Base scroll reveal. Match layout and content to `arvo-research.png` exactly.

**Bright Spots (`898-456`)** — Items reveal one by one left to right:
```
- Each bright spot item: stagger 0.15s, x: -20 → 0, opacity 0 → 1
```

**⭐ SIGNATURE MOMENT — The Pivot / Co-creation (`894-116`):**

Pin this section. Build the scoping diagram on scroll. All labels, card titles, and annotation text come from `arvo-pivot.png` — do not invent them.

```
ScrollTrigger pin: true, end: "+=500", scrub: 1

scrub 0: All problem cards fade in together — match layout to arvo-pivot.png
scrub 0.3 → 0.6: Cards that were scoped OUT dim to 20% opacity
scrub 0.6 → 0.8: Cards that were scoped IN scale slightly (1.0 → 1.05), border glows --arvo
scrub 0.8 → 1.0: Annotation text fades in — read text from arvo-pivot.png
Unpin at scrub 1.0
```

**Second Round Results (`899-903`)** — Results cards stagger in with slight scale:
```
- Each result: scale 0.95 → 1.0, opacity 0 → 1, stagger 0.1s
```

**Design Fixes (`755-200`)** — Screen mockups slide in from right:
```
- .cs-screen elements: x: 40 → 0, opacity 0 → 1, stagger 0.15s
```

**Strategic Deliverable (`763-3884`)** — Base scroll reveal. Match layout and content to `arvo-strategic.png` exactly.

**Final Solution (`908-108`)** — Prototype mockup enters with slow zoom:
```
- Main screen: scale 0.92 → 1.0, opacity 0 → 1, duration 1.0s
- Prototype CTA button pulses once after entrance (scale 1.0 → 1.03 → 1.0, 600ms)
```

**The Outcome (`755-1121`)** — ⭐ Metric numbers count up on scroll enter. Read all metric values, labels, and layout from `arvo-outcome.png` — do not hardcode any numbers.

**Client Testimony (`765-7912`)** — Quote reveal:
```
- Quote marks scale in: scale 0 → 1, 0.4s
- Quote text: opacity 0 → 1, y: 20 → 0, 0.7s, delay 0.3s
- Attribution: fades in last, delay 0.8s
```

**Retrospective (`765-7946`)** — Base scroll reveal. Match layout and content to `arvo-retro.png` exactly.

---

### 6.2 Seletar Airport — `case-studies/seletar.html`

**Accent:** `#2b5e3a` forest green | **10 sections**

**Exports needed:**

| File | Node |
|---|---|
| `seletar-hero.png` | `780-10685` |
| `seletar-tldr.png` | `780-10686` |
| `seletar-problem.png` | `781-10873` |
| `seletar-found.png` | `782-11152` |
| `seletar-design.png` | `922-230` |
| `seletar-validation.png` | `783-11728` |
| `seletar-outcome.png` | `785-11746` |
| `seletar-retro.png` | `791-686` |
| `seletar-last.png` | `791-1662` |

**Section-by-section animation:**

**Hero (`780-10685`)** — Same load pattern as ARVO, green accent.

**TLDR (`780-10686`)** — Stagger cards, same as ARVO TLDR.

**The Problem (`781-10873`)** — Base scroll reveal. Match layout and content to `seletar-problem.png` exactly.

**What We Found (`782-11152`)** — Base scroll reveal. Match layout and content to `seletar-found.png` exactly.

**Turning Research into Design (`922-230`)** — Base scroll reveal. Match layout and content to `seletar-design.png` exactly.

**⭐ SIGNATURE MOMENT — Validation (`783-11728`):**

Pin this section. The two score states animate on scroll. All scores, labels, and annotation text come from `seletar-validation.png` — do not invent them.

```
Pin section, scrub 1, end: "+=400"

Two score states shown (Round 1 and Round 2) — match layout to seletar-validation.png

scrub 0 → 0.4:
- Round 1 score counts up from 0 to the value shown in seletar-validation.png (CountUp, 1s)
- Round 1 label fades in — read text from image
- Round 1 card: subtle shake (keyframes, x ±3px, 3 times)

scrub 0.4 → 1.0:
- Round 2 card scales in: scale 0.8 → 1.0, opacity 0 → 1
- Round 2 score counts up to value shown in seletar-validation.png
- Round 2 annotation fades in — read text from image

Unpin at scrub 1.0
```

**Outcome (`785-11746`)** — Metrics count up on scroll enter. Read all values and layout from `seletar-outcome.png` exactly.

**Retrospective (`791-686`)** — Base scroll reveal. Match layout and content to `seletar-retro.png` exactly.

**Last but not least (`791-1662`)** — Match layout and content to `seletar-last.png` exactly. If a prototype CTA is visible, apply pulse animation (scale 1.0 → 1.03 → 1.0, 600ms). Do not assume content — read from image.

---

### 6.3 PetHaus — `case-studies/pethaus.html`

**Accent:** `#7b3f6e` mauve | **9 sections**

**Exports needed:**

| File | Node |
|---|---|
| `pethaus-hero.png` | `799-149` |
| `pethaus-tldr.png` | `799-893` |
| `pethaus-sitch.png` | `803-1689` |
| `pethaus-research.png` | `804-1734` |
| `pethaus-design.png` | `804-1757` |
| `pethaus-hifi.png` | `806-1798` |
| `pethaus-testing.png` | `950-8212` |
| `pethaus-results.png` | `950-12042` |
| `pethaus-reflection.png` | `806-1862` |

**Section-by-section animation:**

**Hero (`799-149`)** — Same load pattern, mauve accent.

**TLDR (`799-893`)** — Stagger cards.

**Sitch on the Ground (`803-1689`)** — Base scroll reveal. Match layout and content to `pethaus-sitch.png` exactly.

**Research (`804-1734`)** — Base scroll reveal. Match layout and content to `pethaus-research.png` exactly.

**The Design (`804-1757`)** — Base scroll reveal. Match layout and content to `pethaus-design.png` exactly.

**Hi-Fi Screens (`806-1798`)** — Base scroll reveal. Match layout and screen arrangement to `pethaus-hifi.png` exactly. Do not add rotation or stacking not shown in the image.

**⭐ SIGNATURE MOMENT — Usability Testing & Iteration (`950-8212`):**

Pin this section. The wrong → right placement animation plays on scroll. All UI states, labels, and annotation text come from `pethaus-testing.png` — do not invent them.

```
Pin section, scrub 1, end: "+=400"

Two UI states shown — match layout to pethaus-testing.png

scrub 0 → 0.3:
- Wrong placement screen slides in from left
- Label and indicator fades in — read from pethaus-testing.png

scrub 0.3 → 0.6:
- Wrong screen: opacity 1 → 0.2, filter: blur(2px)
- Correct placement screen slides in from right
- Label and indicator fades in — read from pethaus-testing.png

scrub 0.6 → 1.0:
- Correct screen scales up slightly (1.0 → 1.04)
- Annotation text fades in — read from pethaus-testing.png

Unpin at scrub 1.0
```

**Results (`950-12042`)** — Metrics count up on enter. Read metric values and labels from `pethaus-results.png` — do not hardcode numbers. Each metric gets a thin progress bar that fills left → right as the number counts up.

**Reflection (`806-1862`)** — Base scroll reveal. Match layout and content to `pethaus-reflection.png` exactly.

---

## 7. Navigation, Logo & Cursor

**⚠️ All nav layout, logo placement, link labels, spacing and typography must match `nav-light.png` and `nav-dark.png` exactly. Do not invent any nav elements.**

### Nav bar
- Stays fixed/sticky at top of page on all scroll positions
- Switches between two states based on section background:
  - **Light sections** (Hero State 1, About): use `nav-light.png` — match exactly
  - **Dark sections** (Hero States 2–4, Work, Contact): use `nav-dark.png` — match exactly
- Colour swap is triggered by IntersectionObserver watching section backgrounds
- The flower logo is embedded in the nav bar — match position to nav PNGs
- Use `logo-light.png` when nav is in light mode, `logo-dark.png` when nav is in dark mode

### Custom cursor
- Replace default browser cursor site-wide with custom flower cursor
- **Light backgrounds**: use `cursor-light.png`
- **Dark backgrounds**: use `cursor-dark.png`
- Switch cursor image when background changes (same trigger as nav colour switch)
- Implementation:
```css
body { cursor: none; }
#custom-cursor {
  position: fixed;
  pointer-events: none;
  z-index: 9999;
  width: 32px;
  height: 32px;
  transform: translate(-50%, -50%);
}
```
```js
const cursor = document.getElementById('custom-cursor');
document.addEventListener('mousemove', e => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
});
// Swap cursor src when dark/light mode switches — match same trigger as nav
```

### Typography
**⚠️ Do not set any font sizes, weights, letter-spacing or line-height from this PRD. Read all typography from the PNG exports for each section. The only locked values are:**
- Display font family: `Fraunces` — weight 300, italic
- Body font family: `Inter`
- All sizing: match from PNGs

---

## 8. Responsive Rules

Desktop (≥ 1280px): All GSAP scroll animations active — match Figma designs exactly.

Mobile (< 768px): Disable all GSAP scroll animations. Layout falls back to static. Do not invent a mobile layout — only implement what is shown in your Figma mobile exports if they exist. If no mobile Figma frame exists for a section, stack content vertically and preserve all text and images.

```js
const mm = gsap.matchMedia();
mm.add("(min-width: 768px)", () => {
  // all ScrollTrigger scroll animations here
});
```

---

## 9. Performance Targets

| Metric | Target |
|---|---|
| Lighthouse Performance | ≥ 90 |
| LCP | < 2.5s |
| CLS | < 0.1 |
| All images | PNG, lazy-loaded (`loading="lazy"`) except hero |
| Hero image | `fetchpriority="high"`, no lazy |
| GSAP | Loaded from CDN, defer non-critical JS |

---

## 10. Build Order for Claude Code Sessions

Run these as separate sessions, each with this PRD attached:

| Session | Deliverable | Status | Assets needed before starting |
|---|---|---|---|
| **1** | `index.html` skeleton: tokens, nav, section scaffolding, font imports | ✅ Done | None |
| **2** | Hero section: static layout only, no animations | ✅ Done | `hero-initial.png` |
| **3** | Hero GSAP: desktop zoom + complex zoom + letter-p + bg transition | ✅ Done | `hero-initial.png`, `hero-desktop-zoom.png`, `hero-letter-p.png` |
| **4** | Work section: 3-column layout + hover reveal + CTA cards | ✅ Done | `work-initial.png`, `work-hover-reveal.png`, `arvo-cta.png`, `seletar-cta.png`, `pethaus-cta.png` |
| **5a** | About overlay: States 1, 2, 3 (scroll-driven GSAP, portrait split + anchor, warm rect, two-column layout) | ✅ Done | `about-portrait.png`, `about-portrait-anchored.png`, `about-singapore.png`, `icon-geopin.png` |
| **5b** | About overlay: State 4 — info swap | 🔲 Next | `about-info-swap.png` |
| **6** | Contact section | ✅ Done | `sayhello.png` |
| **7** | `case-studies/arvo.html` | 🔲 Pending | All `arvo-*.png` files |
| **8** | `case-studies/seletar.html` | 🔲 Pending | All `seletar-*.png` files |
| **9** | `case-studies/pethaus.html` | 🔲 Pending | All `pethaus-*.png` files |
| **10** | Custom cursor + final QA: GSAP conflict check, mobile test, Netlify deploy | 🔲 Pending | `cursor-light.png`, `cursor-dark.png` |

---

## 11. Deployment

```bash
# From repo root
git add .
git commit -m "feat: [section name]"
git push origin main
# Netlify auto-deploys on push to main
```

Preview URL pattern: `https://andrea-portfolio.netlify.app`

---

## 12. QA Checklist (run before each Netlify push)

- [ ] Open file standalone (double-click) — does it render without a server? (self-contained HTML check)
- [ ] Resize to 375px mobile — animations disabled, layout readable
- [ ] Resize to 1440px desktop — all GSAP scroll sequences fire correctly
- [ ] Tab through all interactive elements — focus states visible
- [ ] Hover each Work column — expand/contract smooth, no layout shift
- [ ] All CTA links open correct destinations
- [ ] Prototype links open in new tab
- [ ] Lighthouse score ≥ 90 Performance, ≥ 85 Accessibility

---

*Portfolio motto: "making complex things stupidly simple." — the complexity moved from the user to the design.*
