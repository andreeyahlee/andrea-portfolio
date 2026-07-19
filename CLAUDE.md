# Andrea Lee Portfolio — Design System

## Design Tokens (from Figma file `pwzfoD3dTKLHGScT4Kom1k`)

### Colors
| Figma Variable | CSS Var | Value |
|---|---|---|
| `accent/lime` | `var(--lime)` | `#dee895` |
| `ink/light` | `var(--ink-light)` | `#f4f4eb` |
| `ink/dark` | `var(--ink-dark)` | `#21281a` |
| `bg/dark` | `var(--bg-dark)` | `#1a1c16` |
| `project/arvo` | — | `#31332a` |
| `project/seletar` | — | `#304c95` |
| `project/paw` | — | `#8c4d00` (dark rust — updated 2026-07-19; the older `#d09a94` dusty pink is no longer used anywhere, see notes below) |

### Typography — NEVER change these mappings
| Figma Variable | CSS Var | Family | Weight | Size | Line-height | Letter-spacing |
|---|---|---|---|---|---|---|
| `Display/LG` | `var(--font-display)` | **Lora** (about.html / works.html / case studies) | 400 (Bold override = 700 on card titles) | 32px | 37px | -0.02em (-0.64px) |
| `Hero 2` | `var(--font-hand)` | **Gochi Hand** | 400 | 55px | 50px | 0 |
| `Body/Lead` | `var(--font-body)` | **DM Sans** | 400 | 17px | 25px | 0 |
| `UI/SectionTag` | `var(--font-mono)` | **DM Mono** | 700 | 11px | — | 0.6em |
| `UI/Button-Primary` | `var(--font-body)` | **DM Sans** | 600 | 13px | — | 0 |

**index.html (homepage) card-color note, 2026-07-19:** the Figma "Homepage" frame shows the PawHaus work-card swatch as `#8c4d00` (dark rust), not the older `project/paw` `#d09a94`. The homepage's `.card--pawhaus` background was updated to match, and (same day, follow-up) `pethaus.html`'s own `--paw` token was also moved to `#8c4d00` when that page was fixed to default to dark mode — see the dark-mode note under "Dark / Light mode on case study pages" below. `#d09a94` is now fully retired.

**index.html (homepage) exception, 2026-07-19:** the Figma "Homepage" frame (node `68:103`) redefines `--font-display` as **Poiret One**, Regular only (no bold face loaded) — used for the hero heading ("Hi, I'm Andrea Lee"), hero tagline, card headlines (`.card__case-headline`), and the footer heading (`.contact__heading`). This applies to `index.html` only; `about.html`, `works.html`, and the case-study pages still use Lora per the table above until/unless they're rebuilt from the same Figma update. Each page carries its own inline `<style>` block (single-file-per-page architecture), so this is a per-file override, not a global token change.

### Font usage rules
- **Card case titles** (`.card__case-title` / `.card__case-headline`): `var(--font-display)` — Lora weight 700 everywhere except the homepage, where it's Poiret One weight 400 (see exception above)
- **Project names** (`.card__project-name`, handwriting): `var(--font-hand)` / Gochi Hand
- **Meta / body copy**: `var(--font-body)` / DM Sans
- **Labels / mono**: `var(--font-mono)` / DM Mono, except the homepage's "MY RECENT WORK" works-section tag (`.t-label--sans`), which the Figma file defines as DM Sans Bold 12px/0.6em instead — the homepage's Contact-section tag still uses DM Mono, matching Figma
- **DO NOT use DM Sans for card headlines** on non-homepage pages — they are always Lora there

## Dark / Light mode on case study pages
- **Dark mode** (default) = the case study's own `project/*` accent color as the page background (`project/seletar` #304c95 for seletar.html, etc.) — NOT the generic `--bg-dark`.
- **Light mode** = the shared site-wide light preset used on every other page: `--bg-light` (#f4f4eb) background, `--ink-dark` text, `#6b7a00` accent color for section labels/eyebrows, same nav/toggle treatment as index.html/about.html.
- The toggle button, cursor-flower swap, and compact tablet/mobile nav collapse (see below) are a locked cross-page component — copy the exact CSS/HTML/JS from `index.html` (source of truth), don't re-derive it. Every case study page must include the `.nav__toggle` button and a full `body.light-mode` override block; don't skip it when rebuilding a page from Figma.

**pethaus.html dark-mode fix, 2026-07-19:** this page was originally built entirely in a single light cream palette (`--paw: #ebeae0`) with text hardcoded to `var(--ink-dark)` everywhere — `body.light-mode` only swapped to an almost-identical `--bg-light` cream, so the page never actually had a working dark mode, unlike arvo.html/seletar.html. Fixed to conform to the standard above: `--paw` is now `#8c4d00` (dark rust, matching the homepage card color) and is the default page/nav/loader background; body copy now uses new adaptive tokens — `--text` (→ `ink-light` by default, `ink-dark` in `body.light-mode`) plus alpha variants `--text-75/-70/-60/-50` and border/hover tokens `--border`/`--hover-wash` — all flipped by `body.light-mode` reassigning the custom properties in one place, so don't add per-element `body.light-mode` overrides for body copy; use the `--text*` tokens instead.
  - **Do NOT blanket-replace `var(--ink-dark)`** in this file — many components (`.ph-pattern-card__inner`, `.ph-visual-type__card`, `.ph-visual-swatch`, `.ph-visual-kit__inner`, `.ph-comp-card__inner`, `.ph-tag`, `.ph-dark-card`, `.ph-landscape`, `.ph-persona__question`, `.ph-solution-move__card--dark`, `.ph-test-card-base`, `.ph-macbook`, `.ph-reflection-next__card`, all `.ph-vbtn--*`/`.ph-vtag--*` swatches) have their own fixed light or dark background baked into the case-study content design itself (independent of the page theme) and correctly keep hardcoded `ink-dark`/`ink-light` text — only text sitting directly on the adaptive `.section`/`--paw` background should use `--text*`. `.ph-visual-label` is reused in both contexts; the in-card instances carry an added `.ph-visual-label--fixed` modifier to force `ink-dark` — check for that pattern before assuming a class is uniformly adaptive.

## Nav bar standard (locked, all pages)
At `@media (max-width: 1024px)`: short logo (`nav__logo-text--short` "Andrea L.") replaces full logo, `.nav__links` hides in favor of the hamburger menu, and `.nav__toggle` shrinks from an 83×30 pill to a plain 40×40 circular icon-only button (`.toggle__thumb` hidden, `.toggle__icon` sized 20×20 / 27×20 in light mode). `index.html` is the reference source of truth for exact values.

**Desktop nav content, updated 2026-07-19 (Figma node `784:30853` "Nav_bar_dark"):** logo text is Gochi Hand 36px/40px (was 26px/700/uppercase letter-spacing) at `≥1025px` — the compact `≤1024px` breakpoint keeps the old 26px/700/-0.04em short-logo sizing via an explicit override, don't drop it. Nav links (`.nav__links a`) are Gochi Hand 32px/36px, letter-spacing 0 (was 24px/33px/-0.02em). The link set is now **Work / About / Contact** — no "Testimonials" link, and "Contact Me" is shortened to "Contact" (mobile menu and desktop both). "Work" is no longer a direct link to `works.html` — it's a click-toggled dropdown button (`.nav__work-trigger` + `.nav__work-menu`, JS-driven, closes on outside-click/Escape) listing the three case studies (Figma node `1394:58596` "Menu - Work"): ARVO / Seletar Airport / Paw Haus, each in Poiret One 22px/28px linking to `case-studies/{arvo,seletar,pethaus}.html`. This dropdown is now present on all 6 pages (index, about, works, and the 3 case studies) with matching HTML ids (`nav-work-item`, `nav-work-trigger`, `nav-work-menu`) and JS.
- Poiret One is now loaded on **every** page's Google Fonts link (needed for the dropdown text), not just index.html.
- `pethaus.html`'s nav now uses the same adaptive-token pattern as the rest of its page (see the dark-mode fix note under "Dark / Light mode on case study pages"): `.nav__work-trigger`/`.nav__work-menu a`/`.nav__logo-text`/`.nav__links a` all use `var(--text)`, the dropdown border/hover use `var(--border)`/`var(--hover-wash)`, and hover color is `var(--lime)` by default with a `body.light-mode` override back to `#6b7a00` — matching the other 5 pages' hover convention. This was previously documented as a permanent exception (fixed cream nav, always-dark text) — that was the bug that got fixed 2026-07-19, not an intentional design difference. Don't reintroduce it.

## Architecture
- Single-file static site: `index.html` (all CSS + HTML + JS inline)
- Assets in `Asset/` folder
- Deployed via GitHub Pages from `github.com/andreeyahlee/andrea-portfolio`, branch `main`
- Deploy: `git push origin main` (Pages rebuilds in ~1–2 min)

## Flower cursor
- Keep `#cursor-follower` div + spin keyframes + JS — user wants this preserved
- Assets: `Asset/cursor-light.png` (dark mode) / `Asset/cursor-dark.png` (light mode)
- Same art reused as the nav logo flower
