# DATA DICTIONARY & SCHEMAS: RENO

## 1. ServiceCategory Interface
```typescript
export interface ServiceCategory {
  id: string;
  index: string; // '01' through '14'
  title: string;
  shortTitle: string;
  pillar: 'Build & Transform' | 'Design & Finish' | 'Specialist Systems & Care';
  tagline: string;
  description: string;
  image: string;
  deliverables: string[];
}
```

## 2. PillarGroup Interface
```typescript
export interface PillarGroup {
  id: string;
  title: string;
  description: string;
  subDisciplines: string[];
  linkText: string;
  image: string;
}
```

## 3. Project Interface
```typescript
export interface Project {
  id: string;
  index: string;
  title: string;
  category: 'Build & Transform' | 'Design & Finish' | 'Specialist Systems & Care';
  materialEdit: string;
  location: string;
  year: string;
  image: string;
  summary: string;
}
```

## 4. StudioStat Interface
```typescript
export interface StudioStat {
  value: number;
  suffix: string;
  label: string;
  description: string;
}
```

## 5. R8 / PLAN Renovation Calculator Matrix
- **Property Size Presets:**
  - `5 — 7 Marla`: 2,100 sq.ft base
  - `10 — 14 Marla`: 3,600 sq.ft base
  - `1 Kanal`: 5,000 sq.ft base
  - `2 Kanal+ Estate`: 9,000 sq.ft base
- **Scope Multipliers:**
  - Cosmetic Refresh: `0.45`
  - Full Interior + MEP: `0.85`
  - Structural Gut Remodel: `1.25`
- **Specification Rates (PKR/sq.ft):**
  - Essential Contemporary: `3,800`
  - Signature Architectural (Stone · Oak · Steel): `6,200`
  - Bespoke Estate Luxury: `9,500`
- **Specialist Trades Surcharge:** `PKR 350,000` per selected discipline
- **WhatsApp Dispatch Format:** Pre-formatted query string with property parameters, estimated PKR range, and direct dispatch to `+92 333 525 1768`.
