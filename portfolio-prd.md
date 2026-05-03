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

Export every asset as **WebP** at **2×**, named exactly as listed. Drop into `/assets/` in the repo root.

| File name | Figma node | Notes |
|---|---|---|
| `hero-desktop.webp` | node-id `458-46` | Full desktop mockup, homepage hero |
| `work-grid-reveal.webp` | node-id `848-1667` | Work section — all 3 columns visible, used as static fallback |
| `about-portrait.webp` | node-id `953-14453` | Andrea portrait photo |
| `about-split-closed.webp` | node-id `707-16514` | Rectangle before split |
| `about-split-open.webp` | node-id `713-16765` | Rectangle post-split (portrait visible) |
| `arvo-cta.webp` | node-id `952-14418` | Work card CTA thumbnail |
| `seletar-cta.webp` | node-id `952-14422` | Work card CTA thumbnail |
| `pethaus-cta.webp` | node-id `952-14428` | Work card CTA thumbnail |
| `arvo-hero.webp` | node-id `736-105` | ARVO case study hero |
| `seletar-hero.webp` | node-id `767-7971` | Seletar case study hero |
| `pethaus-hero.webp` | node-id `791-1661` | PetHaus case study hero |

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

**Source screens:** `node-id 458-46` (initial) → `node-id 458-93` (zoom to "complex")

**Layout (static):**
- Full viewport (`100vw × 100vh`)
- Background: `--bg`
- Center: `hero-desktop.webp` at ~60% viewport width
- Headline below image: *"making complex things stupidly simple."* — `--font-display`, 80px, `--ink`
- Nav bar top: links — Work / About / Say Hi

**Scroll animation — Phase 1 (trigger: scroll starts):**
```
ScrollTrigger pin the hero section.
On scrub 0→0.4:
  - hero-desktop.webp: scale 1 → 1.6, transformOrigin "center center"
  - Headline opacity: 1 → 0
```
This creates the "camera zooming into the desktop" effect.

**Scroll animation — Phase 2 (scrub 0.4→0.7):**
- Desktop image fades out (`opacity 1 → 0`)
- Word *"complex"* scales up from ~80px → ~400px, moves to viewport center
- All other headline words fade out
- This is a pure CSS text scale on `<span class="word-complex">`, driven by GSAP

**Scroll animation — Phase 3 (scrub 0.7→1.0):**
- The letter "p" in *"complex"* is a separate `<span>`. Scale it from 1 → 20, with `transformOrigin "50% 55%"` (center of the round of the p).
- Background transitions from `--bg` to `--ink` as scale hits max.
- At scrub 1.0, unpin hero → Work section snaps into view.

**Implementation note for Claude Code:**
```js
// Correct pattern — GSAP owns all transforms, no CSS translate on spans
const tl = gsap.timeline({
  scrollTrigger: {
    trigger: "#hero",
    start: "top top",
    end: "+=300%",
    scrub: 1,
    pin: true   // GSAP pins — no CSS position:sticky on #hero
  }
});
tl.to("#hero-desktop", { scale: 1.6, duration: 0.4 })
  .to("#hero-desktop", { opacity: 0, duration: 0.1 }, 0.4)
  .to(".word-complex", { scale: 5, x: "...", y: "...", duration: 0.3 }, 0.4)
  // phase 3 — zoom into the p
  .to(".letter-p", { scale: 20, duration: 0.3 }, 0.7)
  .to("body", { backgroundColor: "#0A0A0A", duration: 0.1 }, 0.85);
```

---

### 5.2 Section: WORK

**Source screens:** `node-id 458-140` (base) + `node-id 848-1667` (hover reveals)

**Layout:**
- Full viewport width, min-height 100vh
- Background: `--ink` (carried over from hero transition)
- Three equal vertical columns: ARVO / Seletar Airport / PetHaus
- Default state: columns show only the project title in `--font-display` white, reversed
- Each column has its `cta.webp` thumbnail hidden underneath

**Interaction — Column Hover:**
```
On mouseenter column:
  - Column width expands from 33.3% → 50%, other two compress to 25% each (CSS flex transition 400ms ease)
  - Thumbnail fades in (opacity 0 → 1, 300ms)
  - Short descriptor text slides up from bottom (translateY 20px → 0, 300ms)
  - CTA arrow appears

On mouseleave:
  - Reverse all transitions
```

**CTA links:**
- ARVO column CTA → `case-studies/arvo.html`
- Seletar column CTA → `case-studies/seletar.html`
- PetHaus column CTA → `case-studies/pethaus.html`

**Scroll exit:** Standard scroll, no pin needed. Work section ends, About section begins.

---

### 5.3 Section: ABOUT

**Source screens:** `node-id 707-16514` → `713-16765` → `953-14453` → `953-14527`

**Sub-section A — The Rectangle Split (node `707-16514` → `713-16765`):**

Layout: White/cream full-width rectangle, centered, ~70% viewport width × ~40vh.  
Text "Andrea Lee — UX Designer" split into two halves (left / right).

```
ScrollTrigger scrub:
  - rect-left: x: 0 → -15vw
  - rect-right: x: 0 → +15vw
  - about-portrait.webp: scale 0 → 1 (portrait pops up from center as rect splits)
  - Portrait: transformOrigin "bottom center"
```

**Sub-section B — Text + Photo Shift (node `953-14453`):**

On next scroll milestone:
- Portrait `about-portrait.webp` shifts right
- Body copy block (3–4 sentences, Andrea's background, warm voice) slides in from left
- Use `ScrollTrigger` with `start: "top 60%"` — no pin, standard scroll reveal
- `gsap.from(".about-body", { x: -40, opacity: 0, duration: 0.6 })`

**Copy (use exactly):**
> "So the way this started was — I kept finding myself redesigning every process I touched. At LaSalle I built an internal resource interface before I even knew what IA was. Running Magnolia & Pine taught me that every event is just a service blueprint in disguise. The bootcamp gave me the vocabulary for what I'd already been doing."

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
