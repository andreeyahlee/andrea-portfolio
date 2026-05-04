# Andrea Lee — Portfolio Site PRD
**Version:** 1.0 | **For:** Claude Code build sprint  
**Stack:** Vanilla HTML + CSS + GSAP 3 | **Deploy:** GitHub → Netlify

---

## 0. How to Use This PRD

Hand this entire file to Claude Code as your opening brief. Work section by section. Each section maps to one Claude Code session. Assets must be exported from Figma *before* that section's session begins (see §2 Asset Export Checklist).

---

## 1. Design Tokens (Non-negotiable)

```css
:root {
  /* Colour */
  --bg:        #F6F6F4;   /* cream, site background */
  --ink:       #0A0A0A;   /* primary text */
  --muted:     #8A8A86;   /* captions, labels */
  --accent:    #A64A2E;   /* red, hover/CTA highlight */

  /* Case study accent overrides */
  --arvo:      #2a4a6b;   /* navy */
  --seletar:   #2b5e3a;   /* forest green */
  --pethaus:   #7b3f6e;   /* mauve */

  /* Type */
  --font-display: 'Fraunces', serif;       /* weight 300, italic */
  --font-body:    'Inter', sans-serif;

  /* Spacing scale */
  --sp-xs: 8px;
  --sp-sm: 16px;
  --sp-md: 32px;
  --sp-lg: 64px;
  --sp-xl: 128px;
}
```

**Google Fonts import:**
```html
<link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,wght@1,300&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
```

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

The homepage is **one long scroll** that passes through four states: Hero → Work → About → Contact. Navigation tabs (Work / About / Contact) are anchors into this single scroll.

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
- ARVO → `case-studies/arvo.html`
- Seletar → `case-studies/seletar.html`
- PetHaus → `case-studies/pethaus.html`

**Scroll exit:** No pin. Work section ends, About section scrolls in normally.

---

### 5.3 Section: ABOUT

**5-state scroll sequence:**

| State | Figma node | What happens |
|---|---|---|
| Transition | Work → `707-16514` | Work columns staircase upward off screen, About initial state revealed |
| 1 — About lands | `707-16514` | Clean About page, text block visible, portrait not yet shown |
| 2 — Portrait pop + text split | `713-16765` | Profile image rises from centre, surrounding text splits apart |
| 3 — Portrait anchors, rectangle expands | `953-14453` | Portrait slides to bottom, name locks left, rectangle grows to fill bottom half with info |
| 4 — Info swap | `953-14527` | Portrait and layout stay fixed, content in rectangle changes |
| 5 — Exit | `953-14585` | Scrolls into Say Hi section |

**Exports needed (add to list):**
- `about-initial.png` — node `707-16514`
- `about-portrait-split.png` — node `713-16765`
- `about-portrait-anchored.png` — node `953-14453`
- `about-info-swap.png` — node `953-14527`
- `sayhello.png` — node `953-14585`

---

**Transition — Work columns staircase off screen:**

When user scrolls past the Work section, the three columns do not disappear together. They exit in a staggered cascade — left column first, then centre, then right — each sliding upward out of the viewport. As the last column clears, the About initial state is underneath.

```js
// No pin on Work for this — ScrollTrigger one-shot on scroll exit
// Stagger uses GSAP, triggered when Work bottom reaches viewport bottom
gsap.to(".work-col", {
  yPercent: -120,
  stagger: 0.12,       // left → centre → right, 120ms apart
  ease: "power2.inOut",
  scrollTrigger: {
    trigger: "#work",
    start: "bottom bottom",
    end: "+=300",
    scrub: 1
  }
});
```

---

**State 1 — About initial (node `707-16514`):**

Build to match `about-initial.png` exactly. All text, layout, and labels come from the exported image — do not invent copy.

- Background: `--bg` (cream — first light section since hero)
- Portrait: NOT visible yet — opacity 0, scale 0, positioned at vertical centre

---

**State 2 — Portrait pops up, text splits (scrub: node `713-16765`):**

GSAP ScrollTrigger pins the About section for states 2–4.

The portrait is embedded inside `about-portrait-split.png` — there is no separate portrait file. Claude Code must extract the portrait from the frame visually and match its position exactly. If a separate `about-portrait.png` is needed for the animation, ask Andrea to export just the portrait photo as a standalone PNG.

Match the split layout from `about-portrait-split.png` — exact words that split and portrait position are defined by that image.
```

---

**State 3 — Portrait anchors, rectangle expands (scrub 0.3 → 0.65, node `953-14453`):**

Match `about-portrait-anchored.png` for all layout, text position, and content inside the rectangle. Do not write bio copy or skill tags — use exactly what is in the image.

```
- #about-portrait: moves to position shown in about-portrait-anchored.png
- .about-name: slides in to position shown in about-portrait-anchored.png
- #about-rect: expands from bottom to height shown in about-portrait-anchored.png
  background: --ink
- All text content inside rect: read from about-portrait-anchored.png
```

---

**State 4 — Info swap (scrub 0.65 → 1.0, node `953-14527`):**

Portrait stays. Layout stays. Content inside `#about-rect` changes to match `about-info-swap.png`. Do not invent the replacement content — read it from the image.

```
- Current rect content: opacity 1 → 0
- New content from about-info-swap.png: opacity 0 → 1
- At scrub 1.0: unpin fires, Say Hi section enters
```

---

### 5.4 Section: CONTACT ("Say Hi")

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

**Page transition — ARVO only (seamless column → hero background):**

When a user clicks the ARVO column from the Work section, the navy column background must expand and fill the viewport, becoming the background of the ARVO hero section — no page flash or hard cut.

```js
// On ARVO CTA click:
// 1. Get the bounding rect of the ARVO column
// 2. Create a navy overlay div at that exact position
// 3. GSAP animate it to scale to full viewport (clip-path or transform)
// 4. Once it fills viewport, navigate to arvo.html
// arvo.html starts with navy background already showing — no flash

const arvoCol = document.querySelector('.work-col--arvo');
const rect = arvoCol.getBoundingClientRect();

const overlay = document.createElement('div');
overlay.style.cssText = `
  position: fixed;
  background: #2a4a6b;
  top: ${rect.top}px;
  left: ${rect.left}px;
  width: ${rect.width}px;
  height: ${rect.height}px;
  z-index: 1000;
`;
document.body.appendChild(overlay);

gsap.to(overlay, {
  top: 0, left: 0,
  width: '100vw', height: '100vh',
  duration: 0.6,
  ease: 'power2.inOut',
  onComplete: () => window.location.href = 'case-studies/arvo.html'
});
```

Apply same pattern for Seletar (`#2b5e3a`) and PetHaus (`#7b3f6e`). All three columns must use this seamless expand transition — no hard page loads on any case study CTA.

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

| Session | Deliverable | Assets needed before starting |
|---|---|---|
| **1** | `index.html` skeleton: tokens, nav, section scaffolding, font imports | None |
| **2** | Hero section: static layout only, no animations | `hero-initial.png` |
| **3** | Hero GSAP: desktop zoom + complex zoom + letter-p + bg transition | `hero-initial.png`, `hero-desktop-zoom.png`, `hero-letter-p.png` |
| **4** | Work section: 3-column layout + hover reveal | `work-initial.png`, `work-hover-reveal.png`, `arvo-cta.png`, `seletar-cta.png`, `pethaus-cta.png` |
| **5** | About section: staircase exit + all 4 states | `about-initial.png`, `about-portrait-split.png`, `about-portrait-anchored.png`, `about-info-swap.png` |
| **6** | Contact section | `sayhello.png` |
| **7** | `case-studies/arvo.html` | All `arvo-*.png` files |
| **8** | `case-studies/seletar.html` | All `seletar-*.png` files |
| **9** | `case-studies/pethaus.html` | All `pethaus-*.png` files |
| **10** | Final QA pass: GSAP conflict check, mobile test, Netlify deploy | All assets |

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
