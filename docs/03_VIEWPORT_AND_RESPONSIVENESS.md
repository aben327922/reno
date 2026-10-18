# VIEWPORT AND RESPONSIVENESS SPECIFICATION: RENO

## Breakpoint Standards
- **Desktop Extra-Wide:** `>= 1440px` (Max content container `1440px`, horizontal padding `px-12`)
- **Desktop Standard:** `1025px - 1439px` (Horizontal padding `px-8` to `px-12`)
- **Tablet:** `768px - 1024px` (Navigation collapses to 3x3 curtain trigger, padding `px-6`)
- **Mobile:** `< 768px` (Fluid single-column layouts, padding `px-6` to `px-4`)

## Breakpoint Behavior Matrix

| Section / Component | Desktop (1440px) | Tablet (768-1024px) | Mobile (360-414px) |
| :--- | :--- | :--- | :--- |
| **Navbar** | Full horizontal links + Pill CTA + 3x3 grid | Condensed horizontal links or 3x3 trigger | Logo lockup + 3x3 trigger |
| **Curtain Drawer** | 2-column split (links left, coordinates right) | 2-column split with scaled typography | Single-column full-bleed takeover |
| **Hero** | Split grid (8 col content, 4 col card) | Stacked content with full-width CTA | Full-bleed text-5xl title with stacked links |
| **Who We Are** | Asymmetric 4 col title / 8 col editorial | 4 col / 8 col with 2x2 cards | Single column stacked with horizontal rules |
| **3-Pillar Switcher** | 3 horizontal tabs with right 16:11 image | 3 horizontal tabs, stacked content | 3 vertical tabs with full-width image |
| **Portfolio Grid** | 4-column bento grid with slow hover zoom | 2-column grid | 1-column cards |
| **Studio Metrics** | 4-column horizontal divide with vertical rules | 2x2 grid | 1-column stacked with horizontal rules |
| **Dual Marquee** | Dual opposing rows at 34s linear loop | Dual opposing rows at 28s loop | Dual opposing rows at 20s loop |
| **Footer** | 3-column editorial + pill button + scroll-to-top | 2-column layout | 1-column stacked layout |
