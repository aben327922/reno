'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  ArrowLeft,
  Check,
  Send,
  Calculator,
  Clock,
  ShieldCheck,
  FileText,
  Building2,
  Layers,
  Sparkles,
  CheckCircle2,
  Sliders,
  Printer,
  ChevronRight,
  Maximize2
} from 'lucide-react';

interface ProjectTypeOption {
  id: string;
  label: string;
  factor: number;
  desc: string;
  image: string;
  tag: string;
}

const PROJECT_TYPES: ProjectTypeOption[] = [
  {
    id: 'home',
    label: 'Full Residence Transformation',
    factor: 1.0,
    desc: 'Complete architectural gut-renovation across ground, first floor and living pavilions.',
    image: '/images/hero/renov8-home-hero.webp',
    tag: 'Turnkey Residential'
  },
  {
    id: 'interior',
    label: 'Interior Architecture & Fit-Out',
    factor: 0.76,
    desc: 'Spatial reconfiguration, custom joinery, shadowline ceilings, and tactile curation.',
    image: '/images/services/interior-design-and-space-planning.avif',
    tag: 'Interior & Millwork'
  },
  {
    id: 'kitchen-bath',
    label: 'Dual Kitchen & Spa Suites',
    factor: 0.52,
    desc: 'Show and prep kitchens, sintered stone waterfall slabs, and concealed thermostatic baths.',
    image: '/images/services/Kitchen-and-bathroom-renovation.avif',
    tag: 'Culinary & Sanitary'
  },
  {
    id: 'commercial',
    label: 'Executive Commercial Fit-Out',
    factor: 0.92,
    desc: 'Corporate offices, executive hospitality suites, retail clinics, and acoustic STC dividers.',
    image: '/images/services/office-and-commercial-space.avif',
    tag: 'Corporate & Retail'
  },
  {
    id: 'facade-outdoor',
    label: 'Exterior Facade & Outdoor Living',
    factor: 0.58,
    desc: 'Elevation revitalization, bioclimatic pergolas, travertine patios, and monsoon roofing.',
    image: '/images/services/landscaping-outdoor-living.webp',
    tag: 'Envelope & Landscape'
  }
];

interface PropertySizeOption {
  id: string;
  label: string;
  coveredArea: number;
  dimensions: string;
  typicalSectors: string;
  footprintDesc: string;
}

const PROPERTY_SIZES: PropertySizeOption[] = [
  {
    id: '5-marla',
    label: '5 Marla Villa',
    coveredArea: 2000,
    dimensions: '25′ × 45′ Plot',
    typicalSectors: 'DHA Phase 2, Bahria, G-13',
    footprintDesc: 'Compact double-storey layout with 3 bedrooms, open lounge, and single garage.'
  },
  {
    id: '10-marla',
    label: '10 Marla Residence',
    coveredArea: 3500,
    dimensions: '35′ × 70′ Plot',
    typicalSectors: 'F-10, F-11, I-8, DHA-2',
    footprintDesc: 'Spacious 4-5 bedroom family residence with dual lounges and maid’s quarters.'
  },
  {
    id: '1-kanal',
    label: '1 Kanal Estate',
    coveredArea: 6000,
    dimensions: '50′ × 90′ Plot',
    typicalSectors: 'Sector F-6, F-7, F-8, E-7, DHA',
    footprintDesc: 'Substantial 5-6 bedroom estate with double-height lobby, lawn, and prep kitchen.'
  },
  {
    id: '2-kanal',
    label: '2 Kanal Landmark Estate',
    coveredArea: 10000,
    dimensions: '75′ × 120′ Plot',
    typicalSectors: 'Sector E-7, F-6/2, Diplomatic Enclave',
    footprintDesc: 'Expansive private compound with basement spa, swimming courtyard, and security lodge.'
  },
  {
    id: 'custom',
    label: 'Custom Footprint',
    coveredArea: 4500,
    dimensions: 'Variable Area',
    typicalSectors: 'Commercial Floors, Apartments, Penthouses',
    footprintDesc: 'Manually specify your interior covered area for exact mathematical modeling.'
  }
];

interface ScopeOption {
  id: string;
  label: string;
  rates: [number, number];
  timeline: string;
  desc: string;
  depth: string;
  badge: string;
  image: string;
}

const SCOPES: ScopeOption[] = [
  {
    id: 'refresh',
    label: 'Cosmetic Refresh',
    rates: [520, 780],
    timeline: '5 — 8 Weeks',
    depth: 'Non-Structural Renewal',
    badge: 'Surface Optimization',
    desc: 'Jotun architectural emulsion, surface marble crystallization, 2700K lighting upgrades, and joinery hardware tune-ups.',
    image: '/images/services/flooring-painting-card.webp'
  },
  {
    id: 'remodel',
    label: 'Complete Architectural Remodel',
    rates: [1250, 1700],
    timeline: '10 — 18 Weeks',
    depth: 'Layout & Infrastructure',
    badge: 'Benchmark Turnkey',
    desc: 'Internal layout reconfiguration, designer kitchens, new bathrooms, full rewiring, PEX plumbing loops, and shadow-gap ceilings.',
    image: '/images/services/construction-civil-works.avif'
  },
  {
    id: 'transformation',
    label: 'Full Turnkey Transformation',
    rates: [1950, 2850],
    timeline: '18 — 32 Weeks',
    depth: 'Structural & Complete Gut',
    badge: 'Monograph Grade',
    desc: 'Cantilevered structural steel framing, concealed central VRF ducted AC, imported monolithic porcelain, custom oak millwork, and facade revitalization.',
    image: '/images/hero/hero-isb-sky-architecture.webp'
  }
];

interface FinishTierOption {
  id: string;
  label: string;
  factor: number;
  tagline: string;
  spec: string;
  materials: string[];
  swatchName: string;
}

const FINISH_TIERS: FinishTierOption[] = [
  {
    id: 'standard',
    label: 'Essential Contemporary',
    factor: 0.85,
    tagline: 'Refined local craftsmanship with certified engineering',
    spec: 'Pakistani Grade-A porcelain tiles, ash veneer millwork, Pioneer pure copper electrical cables, and local designer sanitary ware.',
    materials: ['Swat/Ziarat White Marble', 'Ash Veneer Joinery', 'Pioneer Pure Copper', 'Jotun Fenomastic Emulsion'],
    swatchName: 'Ash & Local Marble'
  },
  {
    id: 'premium',
    label: 'Signature Architectural',
    factor: 1.0,
    tagline: 'European tactile materials and kinetic hardware',
    spec: 'Stone · Oak · Steel palette, Blum soft-close tandembox drawers, Grohe/Kohler concealed mixers, Beyond Floor rigid-core SPC planking.',
    materials: ['Travertine & Quartz Slabs', 'European Smoked Oak', 'Blumotion Kinetic Runners', 'Grohe Thermostatic Fixtures'],
    swatchName: 'Travertine & Smoked Oak'
  },
  {
    id: 'luxury',
    label: 'Bespoke Sovereign Luxury',
    factor: 1.45,
    tagline: 'Collector-grade imported stones, VRF climate & full automation',
    spec: 'Bookmatched Greek Thassos marble, full-height quarter-sawn Burmese teak, concealed ducted VRF inverter AC, and smart home automation.',
    materials: ['Greek Thassos Bookmatched', 'Burmese Solid Teak Millwork', 'Daikin Concealed VRF', 'Lutron Smart Lighting'],
    swatchName: 'Thassos & Teak Monolith'
  }
];

const INCLUSIONS = [
  { id: 'kitchen', label: 'Show & Prep Kitchen Joinery', category: 'Joinery', weight: 0.15 },
  { id: 'bathrooms', label: 'Bathrooms & Wet Area Waterproofing', category: 'Sanitary', weight: 0.14 },
  { id: 'flooring', label: 'Flooring (Porcelain / Travertine / SPC)', category: 'Surfaces', weight: 0.12 },
  { id: 'painting', label: 'Architectural Emulsion & Mineral Wash', category: 'Finishes', weight: 0.08 },
  { id: 'ceiling', label: 'Gypsum False Ceilings & Shadow Gaps', category: 'Ceilings', weight: 0.07 },
  { id: 'electrical', label: 'Rewiring & 2700K Architectural Lighting', category: 'MEP', weight: 0.09 },
  { id: 'plumbing', label: 'PPR-C & PEX Manifold Loop Plumbing', category: 'MEP', weight: 0.08 },
  { id: 'wardrobes', label: 'Custom Walk-In Dressing Suites', category: 'Joinery', weight: 0.07 },
  { id: 'doors', label: 'Solid Core Architectural Timber Doors', category: 'Joinery', weight: 0.05 },
  { id: 'hvac', label: 'Concealed Ducted VRF / Inverter AC', category: 'MEP', weight: 0.06 },
  { id: 'exterior', label: 'Exterior Facade & Monsoon Roof Screed', category: 'Exterior', weight: 0.05 },
  { id: 'landscaping', label: 'Courtyard Slate & Garden Illumination', category: 'Outdoor', weight: 0.04 }
];

export default function RenovationPlannerPage() {
  const [step, setStep] = useState<number>(1);
  const [projectType, setProjectType] = useState<ProjectTypeOption>(PROJECT_TYPES[0]);
  const [propertySize, setPropertySize] = useState<PropertySizeOption>(PROPERTY_SIZES[1]); // 10 Marla
  const [customSqft, setCustomSqft] = useState<number>(4500);
  const [scope, setScope] = useState<ScopeOption>(SCOPES[1]); // Complete Remodel
  const [finishTier, setFinishTier] = useState<FinishTierOption>(FINISH_TIERS[1]); // Signature
  const [selectedInclusions, setSelectedInclusions] = useState<string[]>([
    'kitchen',
    'bathrooms',
    'flooring',
    'painting',
    'ceiling',
    'electrical',
    'plumbing',
    'wardrobes'
  ]);

  const toggleInclusion = (id: string) => {
    setSelectedInclusions((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const activeArea = propertySize.id === 'custom' ? customSqft : propertySize.coveredArea;

  // Calculation Engine
  const baseLowRate = scope.rates[0];
  const baseHighRate = scope.rates[1];

  const totalWeight = INCLUSIONS.filter((inc) => selectedInclusions.includes(inc.id)).reduce(
    (acc, curr) => acc + curr.weight,
    0
  );
  const weightFactor = totalWeight > 0 ? totalWeight / 0.85 : 0.4;

  const lowEstimate = Math.round(activeArea * baseLowRate * projectType.factor * finishTier.factor * weightFactor);
  const highEstimate = Math.round(activeArea * baseHighRate * projectType.factor * finishTier.factor * weightFactor);

  const lowMillion = (lowEstimate / 1000000).toFixed(2);
  const highMillion = (highEstimate / 1000000).toFixed(2);

  // Category breakdown ledger (proportional percentages)
  const breakdownLedger = [
    { title: 'Civil Works & Structural Alterations', pct: 24, low: Math.round(lowEstimate * 0.24), high: Math.round(highEstimate * 0.24) },
    { title: 'Custom Joinery, Wardrobes & Kitchens', pct: 26, low: Math.round(lowEstimate * 0.26), high: Math.round(highEstimate * 0.26) },
    { title: 'Concealed MEP, VRF & Electrical Systems', pct: 20, low: Math.round(lowEstimate * 0.20), high: Math.round(highEstimate * 0.20) },
    { title: 'Surfaces, Porcelain Slabs & Bathrooms', pct: 20, low: Math.round(lowEstimate * 0.20), high: Math.round(highEstimate * 0.20) },
    { title: 'Resident Engineering & Handover Protocol', pct: 10, low: Math.round(lowEstimate * 0.10), high: Math.round(highEstimate * 0.10) },
  ];

  const whatsappMessage = `Hi Renov8 Studio, I generated an architectural BOQ model on your planner:%0A- Typology: ${projectType.label}%0A- Scale: ${propertySize.id === 'custom' ? `${customSqft} sq.ft` : propertySize.label} (${activeArea} sq.ft)%0A- Scope: ${scope.label}%0A- Finish Tier: ${finishTier.label}%0A- Active Divisions: ${selectedInclusions.length} Selected%0A- Preliminary Valuation: PKR ${lowMillion}M to PKR ${highMillion}M%0A- Est. Timeline: ${scope.timeline}%0APlease connect me with a project engineer for site feasibility.`;

  return (
    <main className="bg-[#F6F5F2] min-h-screen pt-28 pb-20 px-4 sm:px-8 md:px-12 text-[#141414] selection:bg-[#A8201A] selection:text-white">
      <div className="max-w-[1240px] mx-auto space-y-8">
        {/* =========================================================
            HEADER (REFINED ARCHITECTURAL TYPOGRAPHY & HIERARCHY)
            ========================================================= */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-black/15 pb-6 gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#A8201A] rounded-full" />
              <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#A8201A] font-semibold">
                R8 / PLAN · Preliminary BOQ Estimator
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight text-[#141414] leading-[0.95]">
              INVESTMENT PLANNER.
            </h1>
            <p className="text-xs sm:text-sm text-black/65 font-light max-w-xl leading-relaxed">
              Model a realistic, itemized budget range for residential or commercial renovations in Islamabad &amp; Rawalpindi.
              Zero hidden variation surprises.
            </p>
          </div>

          <div className="bg-[#141414] text-white px-4 py-3 font-mono text-[11px] flex items-center gap-3 border border-white/10 shrink-0 self-start md:self-auto">
            <Calculator className="w-4 h-4 text-[#A8201A]" />
            <span className="tracking-wider">2026 PKR BOQ BENCHMARKS</span>
          </div>
        </div>

        {/* =========================================================
            5-STEP INTERACTIVE PILL BAR
            ========================================================= */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 border-b border-black/10 pb-4">
          {[
            { stepNum: 1, label: '01 / Typology', hint: projectType.tag },
            { stepNum: 2, label: '02 / Footprint', hint: propertySize.label.split(' ')[0] },
            { stepNum: 3, label: '03 / Scope', hint: scope.label.split(' ')[0] },
            { stepNum: 4, label: '04 / Materials', hint: finishTier.label.split(' ')[0] },
            { stepNum: 5, label: '05 / Valuation', hint: `PKR ${lowMillion}M+` },
          ].map((item) => (
            <button
              key={item.stepNum}
              onClick={() => setStep(item.stepNum)}
              className={`p-3 text-left border-t-2 transition-all cursor-pointer ${
                step === item.stepNum
                  ? 'border-[#A8201A] bg-white shadow-sm'
                  : step > item.stepNum
                  ? 'border-black/50 text-black/80 hover:bg-white/50'
                  : 'border-black/15 text-black/40 hover:text-black/70'
              }`}
            >
              <span className="text-[10px] font-mono uppercase tracking-wider block font-bold text-[#A8201A]">
                {item.label}
              </span>
              <span className="text-xs font-semibold uppercase tracking-tight block truncate mt-0.5">
                {item.hint}
              </span>
            </button>
          ))}
        </div>

        {/* =========================================================
            STEP CONTENT BOX
            ========================================================= */}
        <div className="bg-white border border-black/15 p-6 sm:p-10 shadow-sm">
          {/* STEP 1: Project Typology (PICTORIAL) */}
          {step === 1 && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 border-b border-black/10 pb-3">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#A8201A] block font-bold">
                    Step 01 of 05 · Program Selection
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold uppercase tracking-tight">
                    Select Project Typology
                  </h2>
                </div>
                <span className="text-xs text-black/55 font-light">
                  Tailored structural reinforcement and MEP specifications
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-1">
                {PROJECT_TYPES.map((type) => {
                  const selected = projectType.id === type.id;
                  return (
                    <button
                      key={type.id}
                      onClick={() => setProjectType(type)}
                      className={`group text-left border transition-all overflow-hidden flex flex-col justify-between cursor-pointer ${
                        selected
                          ? 'border-[#A8201A] ring-1 ring-[#A8201A] bg-[#141414] text-white shadow-md'
                          : 'border-black/15 hover:border-black/50 bg-white text-black'
                      }`}
                    >
                      {/* Image Thumbnail */}
                      <div className="relative aspect-[16/10] w-full overflow-hidden bg-black/20">
                        <img
                          src={type.image}
                          alt={type.label}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter contrast-[1.05]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                        <span className="absolute top-2.5 left-2.5 px-2 py-0.5 bg-[#141414]/90 text-white text-[9px] font-mono uppercase tracking-wider border border-white/10">
                          {type.tag}
                        </span>
                        {selected && (
                          <div className="absolute top-2.5 right-2.5 p-1 bg-[#A8201A] text-white rounded-full">
                            <Check className="w-3.5 h-3.5" />
                          </div>
                        )}
                      </div>

                      {/* Content */}
                      <div className="p-4 space-y-1.5 flex-1 flex flex-col justify-between">
                        <div>
                          <h3 className="text-sm font-bold uppercase tracking-wider block">
                            {type.label}
                          </h3>
                          <p className={`text-xs leading-relaxed font-light mt-1 ${selected ? 'text-white/70' : 'text-black/60'}`}>
                            {type.desc}
                          </p>
                        </div>
                        <div className="pt-3 border-t border-black/10 flex items-center justify-between text-[10px] font-mono uppercase">
                          <span className={selected ? 'text-[#A8201A]' : 'text-black/45'}>
                            {selected ? 'Active Selection' : 'Select Typology'}
                          </span>
                          <span className={selected ? 'text-white/60' : 'text-black/40'}>
                            Factor {type.factor}×
                          </span>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* STEP 2: Property Size / Footprint (ARCHITECTURAL SCHEMATICS) */}
          {step === 2 && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 border-b border-black/10 pb-3">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#A8201A] block font-bold">
                    Step 02 of 05 · Spatial Scale
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold uppercase tracking-tight">
                    Select Property Footprint
                  </h2>
                </div>
                <span className="text-xs text-black/55 font-light">
                  Standard CDA/DHA plot configurations or exact custom area
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-1">
                {PROPERTY_SIZES.map((size) => {
                  const selected = propertySize.id === size.id;
                  return (
                    <button
                      key={size.id}
                      onClick={() => setPropertySize(size)}
                      className={`p-5 text-left border transition-all flex flex-col justify-between cursor-pointer ${
                        selected
                          ? 'border-[#A8201A] ring-1 ring-[#A8201A] bg-[#141414] text-white shadow-md'
                          : 'border-black/15 hover:border-black/50 bg-white text-black'
                      }`}
                    >
                      <div>
                        <div className="flex items-center justify-between mb-1">
                          <span className={`text-[10px] font-mono uppercase tracking-wider ${selected ? 'text-[#A8201A]' : 'text-black/50'}`}>
                            {size.dimensions}
                          </span>
                          {selected && <Check className="w-4 h-4 text-[#A8201A]" />}
                        </div>

                        <h3 className="text-base font-bold uppercase tracking-tight">
                          {size.label}
                        </h3>

                        <div className="text-xs font-mono font-semibold text-[#A8201A] my-1">
                          ~{size.coveredArea.toLocaleString('en-PK')} Sq.Ft Covered Area
                        </div>

                        <p className={`text-xs leading-relaxed font-light mt-2 ${selected ? 'text-white/70' : 'text-black/60'}`}>
                          {size.footprintDesc}
                        </p>
                      </div>

                      <div className="pt-3 mt-4 border-t border-black/10 text-[10px] font-mono text-black/45 flex items-center justify-between">
                        <span className={selected ? 'text-white/60' : 'text-black/40 truncate'}>
                          {size.typicalSectors}
                        </span>
                        <ChevronRight className="w-3.5 h-3.5 text-[#A8201A] shrink-0" />
                      </div>
                    </button>
                  );
                })}
              </div>

              {propertySize.id === 'custom' && (
                <div className="pt-2 p-5 bg-[#F6F5F2] border border-black/10 space-y-3">
                  <div className="flex items-center justify-between">
                    <label className="text-xs uppercase font-mono tracking-wider font-semibold text-black">
                      Specify Exact Interior Covered Area (Sq.Ft):
                    </label>
                    <span className="text-xs font-mono font-bold text-[#A8201A]">
                      {customSqft.toLocaleString('en-PK')} Sq.Ft
                    </span>
                  </div>

                  <input
                    type="range"
                    min="500"
                    max="20000"
                    step="100"
                    value={customSqft}
                    onChange={(e) => setCustomSqft(Number(e.target.value))}
                    className="w-full accent-[#A8201A] cursor-pointer"
                  />

                  <div className="flex items-center gap-3 pt-1">
                    <input
                      type="number"
                      value={customSqft}
                      onChange={(e) => setCustomSqft(Math.max(200, Number(e.target.value)))}
                      className="px-3 py-2 bg-white border border-black/20 text-sm font-mono w-36 focus:outline-none focus:border-[#A8201A]"
                      placeholder="e.g. 5200"
                    />
                    <span className="text-xs text-black/55 font-mono">
                      Calculated at exact unit parameters across all 14 trades.
                    </span>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* STEP 3: Renovation Scope (PICTORIAL DEPTH) */}
          {step === 3 && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 border-b border-black/10 pb-3">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#A8201A] block font-bold">
                    Step 03 of 05 · Transformation Depth
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold uppercase tracking-tight">
                    Select Architectural Scope
                  </h2>
                </div>
                <span className="text-xs text-black/55 font-light">
                  From cosmetic surface renewal to complete structural re-engineering
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-1">
                {SCOPES.map((sc) => {
                  const selected = scope.id === sc.id;
                  return (
                    <button
                      key={sc.id}
                      onClick={() => setScope(sc)}
                      className={`text-left border transition-all overflow-hidden flex flex-col justify-between cursor-pointer ${
                        selected
                          ? 'border-[#A8201A] ring-1 ring-[#A8201A] bg-[#141414] text-white shadow-md'
                          : 'border-black/15 hover:border-black/50 bg-white text-black'
                      }`}
                    >
                      {/* Image Preview */}
                      <div className="relative aspect-[16/9] w-full overflow-hidden bg-black/20">
                        <img
                          src={sc.image}
                          alt={sc.label}
                          className="w-full h-full object-cover filter contrast-[1.05]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />
                        <span className="absolute top-2.5 left-2.5 px-2 py-0.5 bg-[#141414]/90 text-white text-[9px] font-mono uppercase tracking-wider border border-white/10">
                          {sc.badge}
                        </span>
                        {selected && (
                          <div className="absolute top-2.5 right-2.5 p-1 bg-[#A8201A] text-white rounded-full">
                            <Check className="w-3.5 h-3.5" />
                          </div>
                        )}
                        <span className="absolute bottom-2.5 left-2.5 text-xs font-mono uppercase text-white/90">
                          {sc.depth}
                        </span>
                      </div>

                      <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
                        <div>
                          <h3 className="text-base font-bold uppercase tracking-tight">
                            {sc.label}
                          </h3>
                          <p className={`text-xs leading-relaxed font-light mt-1.5 ${selected ? 'text-white/75' : 'text-black/65'}`}>
                            {sc.desc}
                          </p>
                        </div>

                        <div className="pt-3 border-t border-black/10 flex items-center justify-between text-xs font-mono">
                          <span className={`flex items-center gap-1.5 text-[11px] ${selected ? 'text-[#A8201A]' : 'text-black/60'}`}>
                            <Clock className="w-3.5 h-3.5" />
                            <span>{sc.timeline}</span>
                          </span>
                          <span className={selected ? 'text-white/80' : 'text-black/60'}>
                            PKR {sc.rates[0]}–{sc.rates[1]}/sq.ft
                          </span>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* STEP 4: Finish Level (TACTILE MATERIAL SWATCHES) */}
          {step === 4 && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 border-b border-black/10 pb-3">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#A8201A] block font-bold">
                    Step 04 of 05 · Material Palette
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold uppercase tracking-tight">
                    Select Material &amp; Finish Tier
                  </h2>
                </div>
                <span className="text-xs text-black/55 font-light">
                  Material provenance dictates tactile quality and long-term durability
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-1">
                {FINISH_TIERS.map((tier) => {
                  const selected = finishTier.id === tier.id;
                  return (
                    <button
                      key={tier.id}
                      onClick={() => setFinishTier(tier)}
                      className={`p-5 text-left border transition-all flex flex-col justify-between cursor-pointer ${
                        selected
                          ? 'border-[#A8201A] ring-1 ring-[#A8201A] bg-[#141414] text-white shadow-md'
                          : 'border-black/15 hover:border-black/50 bg-white text-black'
                      }`}
                    >
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] font-mono uppercase tracking-wider text-[#A8201A] font-bold">
                            {tier.swatchName}
                          </span>
                          {selected && <Check className="w-4 h-4 text-[#A8201A]" />}
                        </div>

                        <div>
                          <h3 className="text-base font-bold uppercase tracking-tight">
                            {tier.label}
                          </h3>
                          <span className={`text-[11px] font-serif italic block mt-0.5 ${selected ? 'text-white/70' : 'text-black/50'}`}>
                            {tier.tagline}
                          </span>
                        </div>

                        <p className={`text-xs leading-relaxed font-light ${selected ? 'text-white/75' : 'text-black/65'}`}>
                          {tier.spec}
                        </p>

                        <div className="pt-2">
                          <span className="text-[10px] uppercase font-mono tracking-wider text-black/45 block mb-1.5 font-semibold">
                            Specified Materials:
                          </span>
                          <div className="flex flex-wrap gap-1.5">
                            {tier.materials.map((m) => (
                              <span
                                key={m}
                                className={`text-[10px] font-mono px-2 py-0.5 ${
                                  selected ? 'bg-white/10 text-white/90' : 'bg-black/5 text-black/75'
                                }`}
                              >
                                {m}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="pt-3 mt-4 border-t border-black/10 flex items-center justify-between text-[10px] font-mono">
                        <span className={selected ? 'text-[#A8201A]' : 'text-black/45'}>
                          {tier.id === 'standard' ? 'Contemporary Standard' : tier.id === 'premium' ? 'Architectural Standard' : 'Sovereign Grade'}
                        </span>
                        <span className={selected ? 'text-white/60' : 'text-black/40'}>
                          Index {tier.factor}×
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* STEP 5: Included Disciplines & Calculation Result (ADVANCED BOQ LEDGER) */}
          {step === 5 && (
            <div className="space-y-8">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 border-b border-black/10 pb-3">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#A8201A] block font-bold">
                    Step 05 of 05 · Itemized BOQ Valuation
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold uppercase tracking-tight">
                    Scope Customization &amp; Investment Ledger
                  </h2>
                </div>
                <span className="text-xs text-black/55 font-light">
                  Toggle specific trade divisions to recalculate your package in real-time
                </span>
              </div>

              {/* Inclusions Toggle Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2.5">
                {INCLUSIONS.map((inc) => {
                  const checked = selectedInclusions.includes(inc.id);
                  return (
                    <button
                      key={inc.id}
                      onClick={() => toggleInclusion(inc.id)}
                      className={`p-3 text-left border text-[11px] uppercase tracking-wider flex items-center justify-between transition-colors cursor-pointer ${
                        checked
                          ? 'bg-[#141414] text-white border-[#141414]'
                          : 'bg-white border-black/15 text-black/65 hover:border-black'
                      }`}
                    >
                      <span className="truncate pr-1 font-medium">{inc.label}</span>
                      {checked ? (
                        <Check className="w-3.5 h-3.5 text-[#A8201A] shrink-0" />
                      ) : (
                        <span className="w-3.5 h-3.5 border border-black/30 rounded-full shrink-0" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Comprehensive Result Box */}
              <div className="bg-[#141414] text-white p-6 sm:p-10 border-l-4 border-[#A8201A] space-y-8">
                {/* Top Metrics Row */}
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-white/10">
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#A8201A] block font-bold">
                      Preliminary 2026 BOQ Valuation
                    </span>
                    <div className="text-3xl sm:text-5xl font-serif italic text-white tracking-tight">
                      PKR {lowMillion}M — {highMillion}M
                    </div>
                    <p className="text-xs text-white/60 font-mono pt-1">
                      Calculated for {activeArea.toLocaleString('en-PK')} Sq.Ft · {projectType.label} · {scope.label}
                    </p>
                  </div>

                  <div className="bg-white/5 border border-white/10 p-4 space-y-1 lg:text-right shrink-0">
                    <span className="text-[10px] uppercase font-mono tracking-widest text-[#A8201A] block">
                      Target Duration
                    </span>
                    <strong className="text-xl font-bold uppercase tracking-wider block text-white font-mono">
                      {scope.timeline}
                    </strong>
                    <span className="text-[11px] text-white/50 block font-light">
                      Mobilization to Handover
                    </span>
                  </div>
                </div>

                {/* Category Cost Distribution Ledger */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono uppercase text-white/60">
                    <span>Itemized Trade Allocation</span>
                    <span>Estimated PKR Range</span>
                  </div>

                  <div className="space-y-2">
                    {breakdownLedger.map((item) => (
                      <div key={item.title} className="p-3 bg-white/5 border border-white/5 text-xs font-mono space-y-1.5">
                        <div className="flex items-center justify-between text-white/90">
                          <span className="font-medium text-[11px]">{item.title} ({item.pct}%)</span>
                          <span className="text-[#A8201A] font-bold">
                            PKR {(item.low / 1000000).toFixed(2)}M – {(item.high / 1000000).toFixed(2)}M
                          </span>
                        </div>
                        <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                          <div className="h-full bg-[#A8201A]" style={{ width: `${item.pct * 3.5}%` }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Scope Assurance Badges */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs text-white/75 font-light">
                  <div className="flex items-start gap-2 bg-white/5 p-3 border border-white/5">
                    <ShieldCheck className="w-4 h-4 text-[#A8201A] shrink-0 mt-0.5" />
                    <span>Formal 12-Month Workmanship Warranty</span>
                  </div>
                  <div className="flex items-start gap-2 bg-white/5 p-3 border border-white/5">
                    <FileText className="w-4 h-4 text-[#A8201A] shrink-0 mt-0.5" />
                    <span>Dedicated Full-Time On-Site Resident Engineer</span>
                  </div>
                  <div className="flex items-start gap-2 bg-white/5 p-3 border border-white/5">
                    <CheckCircle2 className="w-4 h-4 text-[#A8201A] shrink-0 mt-0.5" />
                    <span>CDA / DHA Building Control &amp; Bylaw Representation</span>
                  </div>
                </div>

                {/* Action Row */}
                <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row gap-4 items-center justify-between">
                  <p className="text-[11px] text-white/45 max-w-md font-light leading-relaxed">
                    * This model reflects 2026 verified unit rates in Islamabad &amp; Rawalpindi. Binding contract BOQs are formulated post-site laser survey.
                  </p>
                  <a
                    href={`https://wa.me/923335251768?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#A8201A] text-white px-7 py-3.5 text-xs uppercase tracking-[0.2em] font-bold hover:bg-white hover:text-[#141414] transition-colors shrink-0"
                  >
                    <span>Connect with Engineer on WhatsApp</span>
                    <Send className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          )}

          {/* Stepper Navigation Buttons */}
          <div className="flex items-center justify-between mt-8 pt-5 border-t border-black/10">
            <button
              disabled={step === 1}
              onClick={() => setStep((s) => Math.max(1, s - 1))}
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] font-semibold disabled:opacity-25 cursor-pointer text-black hover:text-[#A8201A] transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> Previous Step
            </button>

            {step < 5 ? (
              <button
                onClick={() => setStep((s) => Math.min(5, s + 1))}
                className="inline-flex items-center gap-2 bg-[#141414] text-white px-7 py-3 text-xs uppercase tracking-[0.18em] font-semibold hover:bg-[#A8201A] transition-colors cursor-pointer"
              >
                Next Step <ArrowRight className="w-3.5 h-3.5" />
              </button>
            ) : (
              <button
                onClick={() => setStep(1)}
                className="inline-flex items-center gap-2 border border-black/30 px-6 py-3 text-xs uppercase tracking-[0.18em] font-semibold hover:bg-[#141414] hover:text-white transition-colors cursor-pointer"
              >
                Reset Planner
              </button>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
