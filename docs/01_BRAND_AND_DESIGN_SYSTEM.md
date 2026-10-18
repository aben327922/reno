# BRAND IDENTITY & DESIGN SYSTEM: RENO

## 1. Brand Identity & Lockup
- **Brand Name:** RENO (Alvie & Rao Architecture & Renovation Syndicate)
- **Primary Logo:**
  - `RE` in Architectural Crimson (`#A8201A`)
  - `NO` in Pure White (`#FFFFFF`)
  - Vertical Hairline Divider: `1px solid rgba(255, 255, 255, 0.25)`, height `32px`
  - Sub-label: 3-line stacked uppercase tracking (`0.26em`), font size `9px/10px`, line height `1.35`:
    ```
    ARCHITECTURE
    RENOVATION
    SYNDICATE
    ```
- **3x3 Menu Trigger:** 9 discrete square pixels (`5px x 5px` with `4px` gap) in pure white that morph into an `X` when open.

## 2. Strict Gallery Color Palette (Zero Amber / Yellow)
- **Primary Dark Obsidian:** `#141414` (Header, Footer, Metrics Bar, Night Panels)
- **Accent Architectural Crimson:** `#A8201A` (Logo `RE`, active tab indicators, pill button border, scroll-to-top square)
- **Warm Alabaster Stone:** `#F6F5F2` (Editorial canvas background for homepage and pages)
- **Warm Concrete Surface:** `#EAE8E3` (Section backing for 3-Pillar Switcher and alternate cards)
- **Pure White:** `#FFFFFF` (Card surfaces, crisp typographic contrasts)
- **Subtle Hairline Borders:** `rgba(0, 0, 0, 0.10)` on light surfaces; `rgba(255, 255, 255, 0.12)` on dark surfaces

## 3. Typography Architecture
- **Headings & Display:** `Oswald` / `Space Grotesk` (Condensed uppercase, bold, tracking `-0.02em` to `0.05em`)
- **Editorial Accent:** `Cormorant Garamond` (Italicized serif for artistic contrast e.g. *"We reimagine."*, *"point of view"*)
- **Body & Legibility:** `Plus Jakarta Sans` / `Inter` (Geometric sans, weights 300, 400, 500, 600)
- **Telemetry & Numbers:** `JetBrains Mono` (Coordinates, BOQ indices, financial figures)

## 4. UI Components & Micro-Interactions
- **Pill CTA:** Pill-shaped (`rounded-full`), border `1px solid #A8201A`, white text `Let's Connect`, with a solid white circle (`w-6 h-6 rounded-full bg-white text-[#141414]`) containing a right arrow (`→`).
- **Scroll-To-Top Button:** Floating bottom-right square (`w-11 h-11 bg-[#A8201A] hover:bg-[#8B1914] text-white`) with upward arrow (`↑`).
- **Interactive Switcher:** High-contrast tabs with crimson active indicator dots and AnimatePresence cross-fade.
