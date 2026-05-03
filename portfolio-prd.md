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

| File name | Figma node | Role in animation |
|---|---|---|
| `hero-initial.png` | node-id `273-31` | **State 1** — page load, static hero layout |
| `hero-desktop-zoom.png` | node-id `458-46` | **State 2** — desktop mockup scaled up (GSAP end state reference) |
| `hero-letter-p.png` | node-id `458-93` | **State 3** — zoomed into round of letter "p" (GSAP end state reference) |
| `work-initial.png` | node-id `458-140` | **Work initial state** — 3 columns, titles only, no hover |
| `work-hover-reveal.png` | node-id `848-1667` | Work hover state — reference for column expand end state |
| `about-initial.png` | node-id `707-16514` | About initial state — text visible, no portrait |
| `about-portrait-split.png` | node-id `713-16765` | Portrait popped up, text split apart |
| `about-portrait-anchored.png` | node-id `953-14453` | Portrait bottom-left, rectangle expanded |
| `about-info-swap.png` | node-id `953-14527` | Info content swapped, portrait stays |
| `sayhello.png` | node-id `953-14585` | Say Hi / Contact section |
| `arvo-cta.png` | node-id `952-14418` | Work card CTA thumbnail |
| `seletar-cta.png` | node-id `952-14422` | Work card CTA thumbnail |
| `pethaus-cta.png` | node-id `952-14428` | Work card CTA thumbnail |
| `arvo-hero.png` | node-id `736-105` | ARVO case study hero |
| `seletar-hero.png` | node-id `767-7971` | Seletar case study hero |
| `pethaus-hero.png` | node-id `791-1661` | PetHaus case study hero |

> **Note on State 2 + 3 exports:** These are reference images only — export them so Claude Code can see what the zoomed states look like. The actual zoom is built in GSAP code, not image swaps. You do not need to export node `458-140` (Work section) — that section is built as its own HTML block.

**Figma export steps:**
1. Select node → right panel → Export → `2×` → Format: `WebP`
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
│   ├── (all webp exports from §2)
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
- `hero-initial.webp` centered, ~60% viewport width
- Headline: *"making complex things stupidly simple."* — `--font-display`, 80px, `--ink`
- Each word in its own `<span class="word">`. The word `complex` is `<span class="word-complex">`. Inside it, the letter `p` is rendered as an SVG (see State 4 note below).
- Nav bar top: Work / About / Say Hi

**State 2 — Desktop zoom (scrub 0 → 0.35):**
```
GSAP pins #hero for the entire sequence (no CSS position:sticky on #hero).
- #hero-img: scale 1 → 1.8, transformOrigin "center center"
- All .word spans: opacity 1 → 0
```

**State 3 — "complex" + letter p zoom (scrub 0.35 → 0.75):**
```
- #hero-img: opacity 1 → 0
- .word-complex: opacity 0 → 1, scale 1 → 6, position moves to viewport centre
- All other .word spans: remain opacity 0
- Background: --bg transitions to --ink

scrub 0.55 → 0.75:
- #letter-p-svg: scale 1 → 20, transformOrigin "50% 55%" (centre of the round of the p)
- Other letters in .word-complex: opacity 1 → 0
- Background fully --ink
```

**State 4 — p becomes the Work section background (scrub 0.75 → 1.0):**

The p does NOT fade out. It keeps scaling until its thick Fraunces strokes overflow the viewport on all sides. The counter-form — the round hole inside the p — stays transparent. The Work section sits behind the SVG and is visible through that hole as it expands. When the unpin fires at scrub 1.0, the user is already looking at Work.

```
scrub 0.75 → 1.0:
- #letter-p-svg: scale continues 20 → 80+, strokes bleed off all edges
- Work section (#work) is visible through the counter-form hole the entire time
- At scrub 1.0: unpin fires, normal scroll resumes into Work section
```

**SVG approach for the p counter-form cutout:**
```html
<!-- Place inside #hero, z-index above #work -->
<svg id="letter-p-svg" viewBox="0 0 300 400" 
     xmlns="http://www.w3.org/2000/svg"
     style="position:fixed;top:0;left:0;width:100vw;height:100vh;pointer-events:none;z-index:10;">
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
/* Work section sits behind the p SVG */
#work { position: relative; z-index: 0; }

/* GSAP conflict rule: no CSS transform on #letter-p-svg — GSAP owns it */
```

```js
// GSAP owns all transforms. scrub:1 throughout.
const tl = gsap.timeline({
  scrollTrigger: {
    trigger: "#hero",
    start: "top top",
    end: "+=400%",
    scrub: 1,
    pin: true
  }
});

tl.to("#hero-img",      { scale: 1.8, duration: 0.35 })
  .to("#hero-img",      { opacity: 0, duration: 0.1 }, 0.35)
  .to(".word-complex",  { opacity: 1, scale: 6, xPercent: -50, yPercent: -50,
                          left: "50%", top: "50%", position: "absolute",
                          duration: 0.2 }, 0.35)
  .to(".word",          { opacity: 0, duration: 0.1 }, 0.35)
  .to("body",           { backgroundColor: "#0A0A0A", duration: 0.2 }, 0.45)
  .to(".word-complex .other-letters", { opacity: 0, duration: 0.1 }, 0.55)
  .to("#letter-p-svg",  { scale: 20, duration: 0.2 }, 0.55)
  // p fills viewport — Work visible through counter-form hole
  .to("#letter-p-svg",  { scale: 80, duration: 0.25 }, 0.75);
  // unpin fires at end, Work section takes over
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

**Initial state layout (node `458-140`):**

This is what the user lands on when the p's unpin fires. Build this exactly before adding any hover behaviour.

- Full viewport width, min-height 100vh
- Background: `--ink` (continuous from hero transition — no seam)
- Three equal vertical columns side by side (`33.3%` each), full viewport height
- Each column contains only: project title in `--font-display`, large, `--bg` colour, vertically centred
- No thumbnails visible, no descriptors visible, no CTA arrows visible
- Thin 1px `--muted` divider lines between columns
- Section label "Work" small caps top-left in `--muted`

**Hover state (node `848-1667`):**

Triggered on `mouseenter` per column. CSS transitions, no GSAP needed here.

```
On mouseenter column:
  - Hovered column: flex-basis 33.3% → 50%
  - Other two columns: flex-basis 33.3% → 25% each
  - Transition: 400ms ease
  - cta thumbnail (e.g. arvo-cta.png): opacity 0 → 1, 300ms
  - Short role descriptor slides up: translateY 20px → 0, opacity 0 → 1, 300ms
  - CTA arrow appears bottom-right of column
  - Column background: subtle tint using case study accent colour at 10% opacity

On mouseleave:
  - All reverse, 300ms ease
```

**Column content (per project):**

| Column | Title | Role label | Accent tint | CTA image |
|---|---|---|---|---|
| ARVO | *Arvo* | B2B SaaS · PM + UX Lead | `--arvo` (#2a4a6b) | `arvo-cta.png` |
| Seletar Airport | *Seletar Airport* | Lead UX Researcher | `--seletar` (#2b5e3a) | `seletar-cta.png` |
| PetHaus | *PetHaus* | Solo Product Designer | `--pethaus` (#7b3f6e) | `pethaus-cta.png` |

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

- Background: `--bg` (cream — first light section since hero)
- Full viewport, centred text layout
- Large headline: *"Andrea Lee"* — `--font-display`, `--ink`
- Subline: role descriptor e.g. *"UX Designer · Singapore"*
- Portrait: NOT visible yet — opacity 0, scale 0, positioned at vertical centre
- Section label "About" small caps top-left in `--muted`

---

**State 2 — Portrait pops up, text splits (scrub: node `713-16765`):**

GSAP ScrollTrigger pins the About section for states 2–4.

```
On scrub 0 → 0.3:
  - about-portrait.png: scale 0 → 1, opacity 0 → 1
    transformOrigin "bottom center" (rises up from below)
  - Headline left half (.text-left): x: 0 → -12vw
  - Headline right half (.text-right): x: 0 → +12vw
  - Both halves stay at same y — text tears apart horizontally, portrait rises through the gap
```

**HTML structure for the split:**
```html
<div class="about-headline">
  <span class="text-left">Andrea</span>
  <span class="text-right">Lee</span>
</div>
<img id="about-portrait" src="assets/about-portrait.png" alt="Andrea Lee">
```

---

**State 3 — Portrait anchors, rectangle expands (scrub 0.3 → 0.65, node `953-14453`):**

```
- #about-portrait: y moves downward to bottom-left quadrant of screen
- .about-name: slides in from left, locks beside portrait
- #about-rect: height 0 → 50vh, expands upward from bottom of screen
  background: --ink, sits behind portrait
  contains: bio copy, skills grid (initially hidden)
- Bio copy and skills: fade in as rect reaches full height
```

**Bio copy (use exactly):**
> "So the way this started was — I kept finding myself redesigning every process I touched. At LaSalle I built an internal resource interface before I even knew what IA was. Running Magnolia & Pine taught me that every event is just a service blueprint in disguise. The bootcamp gave me the vocabulary for what I'd already been doing."

---

**State 4 — Info swap (scrub 0.65 → 1.0, node `953-14527`):**

Portrait stays. Layout stays. Only the content inside `#about-rect` changes.

```
- Bio copy: opacity 1 → 0
- Skills grid fades out
- New content fades in: experience timeline / tools list / what I'm looking for
  (match whatever is visible in node 953-14527)
- #about-rect background can shift subtly: --ink → slightly lighter dark tone
- At scrub 1.0: unpin fires, Say Hi section enters
```

**Skills to include (from resume):**
User Research · Information Architecture · Usability Testing · Service Blueprinting · Prototyping · Stakeholder Management · Agile · KPI Tracking

---

**Sub-section C — Bottom half change (node `953-14527`):**

- Skills grid fades in below the bio (User Research / IA / Prototyping / Stakeholder Management / Service Design / ResearchOps)
- Each skill tag: `--font-body`, pill shape, 1px border `--ink`, background transparent → hover fills `--accent`

---

### 5.4 Section: CONTACT ("Say Hi")

**Source screen:** `node-id 953-14585`

**Layout:**
- Full-viewport dark section, background `--ink`
- Large centered headline: *"Say Hi."* — `--font-display`, 120px, `--bg` colour
- Below: email link `andreeyahlee@gmail.com` + LinkedIn icon + subtle footer copyright
- Entrance: headline does a slow scale-up from 0.8 → 1.0 with opacity 0 → 1 as it enters viewport (standard ScrollTrigger, no pin, no scrub — just a one-shot `gsap.from`)

---

## 6. Case Study Page Template

All three case study pages share the same HTML structure. Only the accent colour variable and content differ.

```html
<!-- Set per case study: -->
<style>
  :root { --case-accent: #2a4a6b; } /* ARVO = navy, Seletar = #2b5e3a, PetHaus = #7b3f6e */
</style>
```

**Page sections (in order):**
1. **Nav** — "← Back" link returns to `index.html#work`
2. **Hero** — Full-width `[project]-hero.webp`, project title in `--font-display`, role label, year
3. **Problem** — 2–3 sentence problem statement (concise, hirer-scanner view)
4. **Research** — Key method + participant data (XX% format for ratios)
5. **Insight → Decision** — The pivotal moment (Seletar: kill hypothesis; ARVO: scope down to 2/6; PetHaus: reframe to check-first)
6. **Solution** — Figma prototype CTA button (opens in new tab)
7. **Outcomes** — Metric callouts (Likert scores, task success rates)
8. **Reflection** — 1–2 honest lessons (Seletar mobile context; ARVO scope communication)
9. **Speaking Notes toggle** — `<details>` element, hidden by default, for interview prep

**Prototype CTA links:**
- ARVO: `https://www.figma.com/make/1VklSkodi8LYoZ755bvRfi/Arvo-B--Final-copy---Copy-`
- Seletar: `https://www.figma.com/make/VX9LWSLRU1wf0NH2pPaJbv/Version-3--Use-This--`
- PetHaus: styled placeholder CTA (link TBC)

---

## 7. Navigation

Single sticky nav bar at top of `index.html`:

```
[AL monogram]    Work    About    Say Hi
```

- On light backgrounds: `--ink` text
- On dark backgrounds (Work section, Contact section): `--bg` text
- JS detects current section via IntersectionObserver, swaps class `nav--light` / `nav--dark`
- Mobile: hamburger → full-screen overlay with same links

---

## 8. Responsive Rules

| Breakpoint | Behaviour |
|---|---|
| Desktop ≥ 1280px | All GSAP scroll animations active |
| Tablet 768–1279px | Scroll animations active, Work columns stack to 2-up grid |
| Mobile < 768px | **All GSAP scroll animations disabled** — replace with simple fade-in reveals. Work section becomes vertical card stack. Hero desktop mockup hidden, tagline only. |

**Mobile disable pattern:**
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
| All images | WebP, lazy-loaded (`loading="lazy"`) except hero |
| Hero image | `fetchpriority="high"`, no lazy |
| GSAP | Loaded from CDN, defer non-critical JS |

---

## 10. Build Order for Claude Code Sessions

Run these as separate sessions, each with this PRD attached:

| Session | Deliverable | Assets needed before starting |
|---|---|---|
| **1** | `index.html` skeleton: tokens, nav, section scaffolding, font imports | None |
| **2** | Hero section: static layout + GSAP Phase 1 (desktop zoom) | `hero-desktop.webp` |
| **3** | Hero scroll Phase 2+3: "complex" zoom + letter-p zoom + bg transition | Same |
| **4** | Work section: 3-column layout + hover reveal interaction | `arvo-cta.webp`, `seletar-cta.webp`, `pethaus-cta.webp` |
| **5** | About section: rectangle split + bio + skills grid | `about-portrait.webp`, `about-split-closed.webp`, `about-split-open.webp` |
| **6** | Contact section + mobile responsive pass | None |
| **7** | `case-studies/arvo.html` | `arvo-hero.webp` + any ARVO screens |
| **8** | `case-studies/seletar.html` | `seletar-hero.webp` + any Seletar screens |
| **9** | `case-studies/pethaus.html` | `pethaus-hero.webp` + any PetHaus screens |
| **10** | Final QA pass: Lighthouse, GSAP conflict check, mobile test | All assets |

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
