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
| `project/paw` | — | `#d09a94` |

### Typography — NEVER change these mappings
| Figma Variable | CSS Var | Family | Weight | Size | Line-height | Letter-spacing |
|---|---|---|---|---|---|---|
| `Display/LG` | `var(--font-display)` | **Lora** | 400 (Bold override = 700 on card titles) | 32px | 37px | -0.02em (-0.64px) |
| `Hero 2` | `var(--font-hand)` | **Gochi Hand** | 400 | 55px | 50px | 0 |
| `Body/Lead` | `var(--font-body)` | **DM Sans** | 400 | 17px | 25px | 0 |
| `UI/SectionTag` | `var(--font-mono)` | **DM Mono** | 700 | 11px | — | 0.6em |
| `UI/Button-Primary` | `var(--font-body)` | **DM Sans** | 600 | 13px | — | 0 |

### Font usage rules
- **Card case titles** (`.card__case-title`): `var(--font-display)` / Lora, weight 700
- **Project names** (`.card__project-name`, handwriting): `var(--font-hand)` / Gochi Hand
- **Meta / body copy**: `var(--font-body)` / DM Sans
- **Labels / mono**: `var(--font-mono)` / DM Mono
- **DO NOT use DM Sans for card headlines** — they are always Lora

## Dark / Light mode on case study pages
- **Dark mode** (default) = the case study's own `project/*` accent color as the page background (`project/seletar` #304c95 for seletar.html, etc.) — NOT the generic `--bg-dark`.
- **Light mode** = the shared site-wide light preset used on every other page: `--bg-light` (#f4f4eb) background, `--ink-dark` text, `#6b7a00` accent color for section labels/eyebrows, same nav/toggle treatment as index.html/about.html.
- The toggle button, cursor-flower swap, and compact tablet/mobile nav collapse (see below) are a locked cross-page component — copy the exact CSS/HTML/JS from `index.html` (source of truth), don't re-derive it. Every case study page must include the `.nav__toggle` button and a full `body.light-mode` override block; don't skip it when rebuilding a page from Figma.

## Nav bar standard (locked, all pages)
At `@media (max-width: 1024px)`: short logo (`nav__logo-text--short` "Andrea L.") replaces full logo, `.nav__links` hides in favor of the hamburger menu, and `.nav__toggle` shrinks from an 83×30 pill to a plain 40×40 circular icon-only button (`.toggle__thumb` hidden, `.toggle__icon` sized 20×20 / 27×20 in light mode). `index.html` is the reference source of truth for exact values.

## Architecture
- Single-file static site: `index.html` (all CSS + HTML + JS inline)
- Assets in `Asset/` folder
- Deployed via GitHub Pages from `github.com/andreeyahlee/andrea-portfolio`, branch `main`
- Deploy: `git push origin main` (Pages rebuilds in ~1–2 min)

## Flower cursor
- Keep `#cursor-follower` div + spin keyframes + JS — user wants this preserved
- Assets: `Asset/cursor-light.png` (dark mode) / `Asset/cursor-dark.png` (light mode)
- Same art reused as the nav logo flower
