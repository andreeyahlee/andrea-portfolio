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

## Architecture
- Single-file static site: `index.html` (all CSS + HTML + JS inline)
- Assets in `Asset/` folder
- Deployed via GitHub Pages from `github.com/andreeyahlee/andrea-portfolio`, branch `main`
- Deploy: `git push origin main` (Pages rebuilds in ~1–2 min)

## Flower cursor
- Keep `#cursor-follower` div + spin keyframes + JS — user wants this preserved
- Assets: `Asset/cursor-light.png` (dark mode) / `Asset/cursor-dark.png` (light mode)
- Same art reused as the nav logo flower
