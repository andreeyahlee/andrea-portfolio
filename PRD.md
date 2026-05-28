# Andrea Lee Portfolio — v1 Product Requirements Document

**Version:** 1.0  
**Last updated:** 2026-05-28  
**Status:** Live at [andrealee.co](https://andrealee.co)

---

## Overview

A single-author portfolio for Andrea Lee, Product Designer & UX Researcher based in Singapore. The site communicates craft, personality, and availability across dark/light modes with zero framework dependencies.

---

## Tech Stack

| Layer | Choice | Reason |
|---|---|---|
| Markup | Vanilla HTML | Maximum portability; no build step |
| Styling | Vanilla CSS (inline `<style>`) | All tokens, layout, and theming in one file |
| Animation | GSAP 3 + ScrollTrigger (CDN) | Industry-standard scroll animations; studionamma-quality feel |
| Fonts | Self-hosted woff2 | Loads on corporate/restricted networks (no Google Fonts dependency) |
| Hosting | GitHub Pages | Custom domain `andrealee.co` via CNAME |

---

## Pages

### `index.html` — Homepage

Sticky-section layout. Six full-viewport sections scroll-snap in sequence:

| # | Section | ID | z-index |
|---|---|---|---|
| 1 | Hero | `#hero` | 10 |
| 2 | Showreel | `#showreel` | 20 |
| 3 | Tagline + Selected Works | `#tagline` | 30 |
| 4 | Clients & Testimonials | `#testimonials` | 40 |
| 5 | After Hours | `#afterhours` | 50 |
| 6 | Contact | `#contact` | 60 |

**Key features:**
- Custom cursor (swaps light/dark based on nav hover state)
- Dark/light mode toggle — nav pill, logos, and cursor all swap simultaneously
- Logo marquee with client logos (light/dark src swap)
- Case study cards link to `case-studies/arvo.html`, `case-studies/seletar.html`, `case-studies/pethaus.html`
- "View All Works →" links to `works.html`
- GSAP scroll-triggered reveals on tagline, cards, testimonials, after hours, contact

### `works.html` — All Works

Standalone page listing all case studies past and present.

**Layout:**
1. **Page header** — Large display title "All Works" with GSAP clip-path reveal on load
2. **Featured: ARVO** — Full-bleed 82vh banner, project metadata overlay, image zoom on hover
3. **2-col row** — Seletar Airport + PawHaus at 64vh each
4. **Coming soon grid** — Pulse, Thrive, Magnolia & Pine as 3-col WIP cards with "In Construction" badge and blur overlay

**Navigation:** Links back to `/` (homepage) and `#contact` (footer on same page)

### `case-studies/` — Individual case studies

| File | Project | Status |
|---|---|---|
| `arvo.html` | ARVO — HR Analytics Platform | Live |
| `seletar.html` | Seletar Airport — Wayfinding | Live |
| `pethaus.html` | PawHaus — Pet Care App | Live |

Pulse, Thrive, and Magnolia & Pine case studies are planned for v2.

---

## Design Tokens

```css
--bg-dark:   #1a1c16   /* Primary dark background */
--bg-light:  #f4f4eb   /* Primary light background */
--lime:      #dee895   /* Accent — labels, borders, CTAs */
--ink-light: #f4f4eb   /* Text on dark */
--ink-dark:  #21281a   /* Text on light */
--ink-dim:   rgba(244,244,235,0.55)  /* Secondary text on dark */

--font-display: 'DM Serif Display'  /* Headings */
--font-body:    'DM Sans'           /* Body copy */
--font-mono:    'DM Mono'           /* Labels, tags, metadata */
```

---

## Self-hosted Fonts

All 9 woff2 files live in `Asset/fonts/`:

```
dm-mono-300.woff2
dm-mono-300-italic.woff2
dm-mono-400.woff2
dm-mono-500.woff2
dm-sans-400.woff2
dm-sans-500.woff2
dm-sans-400-italic.woff2
dm-serif-400.woff2
dm-serif-400-italic.woff2
```

---

## Key Assets

| File | Usage |
|---|---|
| `Asset/Nav_logo_light.png` | Nav logo (dark mode) |
| `Asset/Nav_logo_dark.png` | Nav logo (light mode) |
| `Asset/Nav_Dark mode CTA.png` | Theme toggle button (dark mode) |
| `Asset/Nav_Light mode CTA.png` | Theme toggle button (light mode) |
| `Asset/cursor-light.png` | Custom cursor (dark mode / over nav in light mode) |
| `Asset/cursor-dark.png` | Custom cursor (light mode / over nav in dark mode) |
| `Asset/Hero - Intro.gif` | Hero section background |
| `Asset/Hero_Vid.gif` | Showreel section |
| `Asset/Card 1 - ARVO - Default (clean).png` | ARVO card + works hero |
| `Asset/Card 2 - Seletar - Default (clean).png` | Seletar card |
| `Asset/Card 3 - PawHaus - Default (Clean).png` | PawHaus card |
| `Asset/ah-pulse.png` | Pulse WIP card background |

---

## v1 Changelog

### 2026-05-28
- Created `works.html` — All Works page with full-bleed ARVO feature, 2-col row, WIP placeholders
- Added GSAP 3 + ScrollTrigger animations to homepage and works page
- "View All Works →" on homepage now links to `works.html`
- Fixed nav logo not displaying (wrong `src` filename — `logo-light.png` → `Nav_logo_light.png`)

### Prior (Portfolio 2026 launch)
- Launched full homepage redesign at andrealee.co
- Self-hosted all Google Fonts (9 woff2 files) — removed Google Fonts CDN dependency
- Linked case study cards to `case-studies/` HTML pages
- After Hours section rebuilt with vw/vh absolute positioning matching Figma spec
- Light/dark mode toggle with image src-swapping pattern (`data-dark-src` / `data-light-src`)
- Custom cursor with nav-hover detection for correct inversion

---

## v2 Roadmap (Planned)

- [ ] New ARVO case study page (redesigned)
- [ ] New Seletar Airport case study page (redesigned)
- [ ] New PawHaus case study page (redesigned)
- [ ] Pulse case study
- [ ] Thrive case study
- [ ] Magnolia & Pine case study / brand identity
- [ ] About page
- [ ] Performance: compress Hero GIFs (currently 50MB+)
