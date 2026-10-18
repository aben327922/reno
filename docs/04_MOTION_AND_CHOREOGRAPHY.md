# MOTION AND CHOREOGRAPHY SPECIFICATION: RENO

## 1. Timing Curves & Easings
- **Signature Editorial Easing:** `cubic-bezier(0.22, 1, 0.36, 1)`
  - Used for drawer reveals, page headers, and tab transitions.
- **Spring Parameters:**
  - `stiffness: 300`
  - `damping: 30`
- **IntersectionObserver Trigger Margins:**
  - Metrics & Counter Bar: `margin: '-60px'` with `once: true`
  - Scroll Staggers: `margin: '-80px'`

## 2. Hero Ken Burns Motion
```typescript
initial={{ scale: 1.08 }}
animate={{ scale: 1.00 }}
transition={{ duration: 10, ease: 'easeOut' }}
```
Background image filter: `sepia(18%) contrast(95%) brightness(68%)`.

## 3. Fullscreen Curtain Drawer (3x3 Grid Trigger)
- **Overlay Transition:**
  ```typescript
  initial={{ opacity: 0, y: '-100%' }}
  animate={{ opacity: 1, y: 0 }}
  exit={{ opacity: 0, y: '-100%' }}
  transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
  ```
- **Staggered Link Children:**
  ```typescript
  initial={{ opacity: 0, x: -30 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ delay: 0.08 + idx * 0.05 }}
  ```

## 4. 3-Pillar Switcher Transition
- Tab content enclosed in `<AnimatePresence mode="wait">`
- Entry: `initial={{ opacity: 0, y: 18 }}`, `animate={{ opacity: 1, y: 0 }}`, `transition={{ duration: 0.4 }}`
- Exit: `exit={{ opacity: 0, y: -18 }}`

## 5. Infinite Hardware-Accelerated Marquee
- Row 1: Keyframe `translateX(0%)` to `translateX(-50%)`, duration `34s`, linear infinite.
- Row 2: Keyframe `translateX(-50%)` to `translateX(0%)`, duration `34s`, linear infinite.
- Hover state: `animation-play-state: paused`.
