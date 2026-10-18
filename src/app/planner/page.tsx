'use client';

import React, { useState } from 'react';
import { ArrowRight, ArrowLeft, Check, Send, Calculator, Clock, ShieldCheck, FileText } from 'lucide-react';

interface ProjectTypeOption {
  id: string;
  label: string;
  factor: number;
  desc: string;
}

const PROJECT_TYPES: ProjectTypeOption[] = [
  { id: 'home', label: 'Full Home Renovation', factor: 1.0, desc: 'Complete structural, layout, and finish overhaul across all living zones' },
  { id: 'kitchen', label: 'Kitchen Renovation', factor: 0.42, desc: 'Modular joinery, quartz waterfall counters, MEP rough-ins, and appliances' },
  { id: 'bathroom', label: 'Bathroom Remodel', factor: 0.24, desc: 'Concealed thermostatic systems, microtopping, wet-room waterproofing' },
  { id: 'interior', label: 'Interior Space Upgrade', factor: 0.74, desc: 'Surfaces, custom wardrobes, architectural lighting, ceilings, and flooring' },
  { id: 'commercial', label: 'Commercial Fit-Out', factor: 0.92, desc: 'Office workspaces, executive suites, retail showrooms, and acoustic STC partitions' },
];

interface PropertySizeOption {
  id: string;
  label: string;
  coveredArea: number;
  sqftLabel: string;
}

const PROPERTY_SIZES: PropertySizeOption[] = [
  { id: '3-marla', label: '3 Marla Villa', coveredArea: 1300, sqftLabel: 'Approx. 1,300 sq.ft' },
  { id: '5-marla', label: '5 Marla Villa', coveredArea: 2000, sqftLabel: 'Approx. 2,000 sq.ft' },
  { id: '10-marla', label: '10 Marla Villa', coveredArea: 3500, sqftLabel: 'Approx. 3,500 sq.ft' },
  { id: '1-kanal', label: '1 Kanal Residence', coveredArea: 6000, sqftLabel: 'Approx. 6,000 sq.ft' },
  { id: 'custom', label: 'Custom Covered Area', coveredArea: 4500, sqftLabel: 'Enter your custom square footage' },
];

interface ScopeOption {
  id: string;
  label: string;
  rates: [number, number];
  timeline: string;
  desc: string;
}

const SCOPES: ScopeOption[] = [
  {
    id: 'refresh',
    label: 'Cosmetic Refresh',
    rates: [520, 780],
    timeline: '5 — 9 Weeks',
    desc: 'Surfaces, Jotun emulsion, architectural lighting, floor polishing, and minor joinery repairs'
  },
  {
    id: 'remodel',
    label: 'Complete Remodel',
    rates: [1250, 1700],
    timeline: '10 — 18 Weeks',
    desc: 'New bathrooms, designer kitchen, full rewiring, plumbing manifolds, SPC flooring, and false ceilings'
  },
  {
    id: 'transformation',
    label: 'Full Turnkey Transformation',
    rates: [1950, 2850],
    timeline: '18 — 32 Weeks',
    desc: 'Structural reconfiguration, concealed VRF ducting, imported porcelain, custom oak millwork, and facade elevation'
  },
];

interface FinishTierOption {
  id: string;
  label: string;
  factor: number;
  spec: string;
}

const FINISH_TIERS: FinishTierOption[] = [
  {
    id: 'standard',
    label: 'Essential Contemporary',
    factor: 0.82,
    spec: 'Pakistani premium porcelain, ash veneer cabinetry, Pioneer pure copper wiring, local sanitary fixtures'
  },
  {
    id: 'premium',
    label: 'Signature Architectural',
    factor: 1.0,
    spec: 'Stone · Oak · Steel palette, Blum soft-close tandembox, Grohe/Kohler concealed mixers, Beyond Floor SPC'
  },
  {
    id: 'luxury',
    label: 'Bespoke Estate Luxury',
    factor: 1.42,
    spec: 'Imported Greek/Turkish marble, full-height quarter-sawn oak joinery, concealed ducted VRF AC, smart automation'
  },
];

const INCLUSIONS = [
  { id: 'kitchen', label: 'Show & Prep Kitchen Joinery', weight: 0.15 },
  { id: 'bathrooms', label: 'Bathrooms & Waterproofing', weight: 0.14 },
  { id: 'flooring', label: 'Flooring (Porcelain / SPC / Travertine)', weight: 0.12 },
  { id: 'painting', label: 'Architectural Emulsion & Finishes', weight: 0.08 },
  { id: 'ceiling', label: 'Gypsum Ceilings & Shadow Gaps', weight: 0.07 },
  { id: 'electrical', label: 'Full Rewiring & 2700K Architectural Lighting', weight: 0.09 },
  { id: 'plumbing', label: 'PPR-C & PEX Manifold Piping', weight: 0.08 },
  { id: 'wardrobes', label: 'Custom Walk-in Wardrobes & Doors', weight: 0.07 },
  { id: 'doors', label: 'Solid Core Architectural Doors & Jambs', weight: 0.05 },
  { id: 'hvac', label: 'Concealed Ducted VRF / Inverter AC Loops', weight: 0.06 },
  { id: 'exterior', label: 'Exterior Facade & Monsoon Roofing', weight: 0.05 },
  { id: 'landscaping', label: 'Courtyard Slate & Garden Lighting', weight: 0.04 },
];

export default function RenovationPlannerPage() {
  const [step, setStep] = useState<number>(1);
  const [projectType, setProjectType] = useState<ProjectTypeOption>(PROJECT_TYPES[0]);
  const [propertySize, setPropertySize] = useState<PropertySizeOption>(PROPERTY_SIZES[2]); // 10 Marla
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

  // Determine active covered area
  const activeArea = propertySize.id === 'custom' ? customSqft : propertySize.coveredArea;

  // Calculation Engine
  const baseLowRate = scope.rates[0];
  const baseHighRate = scope.rates[1];

  // Inclusion Weight multiplier
  const totalWeight = INCLUSIONS.filter((inc) => selectedInclusions.includes(inc.id)).reduce(
    (acc, curr) => acc + curr.weight,
    0
  );
  const weightFactor = totalWeight > 0 ? (totalWeight / 0.85) : 0.4;

  const lowEstimate = Math.round(activeArea * baseLowRate * projectType.factor * finishTier.factor * weightFactor);
  const highEstimate = Math.round(activeArea * baseHighRate * projectType.factor * finishTier.factor * weightFactor);

  const lowMillion = (lowEstimate / 1000000).toFixed(2);
  const highMillion = (highEstimate / 1000000).toFixed(2);

  const whatsappMessage = `Hi Renov8 Studio, I generated an architectural BOQ estimate on your planner:%0A- Project: ${projectType.label}%0A- Size: ${propertySize.id === 'custom' ? `${customSqft} sq.ft` : propertySize.label} (${activeArea} sq.ft)%0A- Scope: ${scope.label}%0A- Finish: ${finishTier.label}%0A- Inclusions: ${selectedInclusions.length} Divisions Selected%0A- Estimated Range: PKR ${lowMillion}M to PKR ${highMillion}M%0A- Est. Duration: ${scope.timeline}%0APlease connect me with a project engineer for a formal site survey.`;

  return (
    <main className="bg-[#F6F5F2] min-h-screen pt-32 pb-24 px-6 md:px-12 text-[#141414]">
      <div className="max-w-[1140px] mx-auto space-y-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-black/15 pb-8 gap-6">
          <div>
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#A8201A] block mb-2 font-semibold">
              R8 / PLAN — Architectural BOQ Studio
            </span>
            <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-tight leading-none">
              INVESTMENT ESTIMATOR.
            </h1>
            <p className="text-sm md:text-base text-black/65 font-light mt-2 max-w-xl">
              Calculate a realistic preliminary budget range for residential or commercial renovations
              across Islamabad and Rawalpindi. Zero hidden variations.
            </p>
          </div>
          <div className="bg-[#141414] text-white p-4 font-mono text-xs flex items-center gap-3">
            <Calculator className="w-5 h-5 text-[#A8201A]" />
            <span>2026 PKR BOQ BENCHMARKS</span>
          </div>
        </div>

        {/* 5-Step Stepper Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 border-b border-black/10 pb-4">
          {[
            { stepNum: 1, label: '01 / Typology' },
            { stepNum: 2, label: '02 / Footprint' },
            { stepNum: 3, label: '03 / Scope' },
            { stepNum: 4, label: '04 / Finish Tier' },
            { stepNum: 5, label: '05 / Deliverables' },
          ].map((item) => (
            <button
              key={item.stepNum}
              onClick={() => setStep(item.stepNum)}
              className={`py-3 px-3 text-left border-t-2 transition-all cursor-pointer ${
                step >= item.stepNum
                  ? 'border-[#A8201A] text-black font-bold'
                  : 'border-black/15 text-black/40 hover:text-black/70'
              }`}
            >
              <span className="text-[11px] font-mono uppercase tracking-wider block">
                {item.label}
              </span>
            </button>
          ))}
        </div>

        {/* Step Container Box */}
        <div className="bg-white border border-black/10 p-8 md:p-12 shadow-sm">
          {/* STEP 1: Project Typology */}
          {step === 1 && (
            <div className="space-y-6">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-[#A8201A] block mb-1">
                  Step 01 of 05
                </span>
                <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-tight">
                  Select Project Typology
                </h2>
                <p className="text-xs text-black/60 font-light mt-1">
                  Different property types require tailored structural reinforcement, MEP capacity, and dust isolation.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                {PROJECT_TYPES.map((type) => {
                  const selected = projectType.id === type.id;
                  return (
                    <button
                      key={type.id}
                      onClick={() => setProjectType(type)}
                      className={`p-6 text-left border transition-all cursor-pointer ${
                        selected
                          ? 'border-[#141414] bg-[#141414] text-white'
                          : 'border-black/15 hover:border-black bg-white text-black'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <strong className="text-base uppercase tracking-wider block font-bold">
                          {type.label}
                        </strong>
                        {selected && <Check className="w-5 h-5 text-[#A8201A]" />}
                      </div>
                      <p className={`text-xs leading-relaxed font-light ${selected ? 'text-white/70' : 'text-black/60'}`}>
                        {type.desc}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* STEP 2: Property Size / Covered Area */}
          {step === 2 && (
            <div className="space-y-6">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-[#A8201A] block mb-1">
                  Step 02 of 05
                </span>
                <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-tight">
                  Select Property Footprint
                </h2>
                <p className="text-xs text-black/60 font-light mt-1">
                  Standard CDA/DHA residential covered area baselines or enter exact verified square footage.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
                {PROPERTY_SIZES.map((size) => {
                  const selected = propertySize.id === size.id;
                  return (
                    <button
                      key={size.id}
                      onClick={() => setPropertySize(size)}
                      className={`p-6 text-left border transition-all cursor-pointer ${
                        selected
                          ? 'border-[#141414] bg-[#141414] text-white'
                          : 'border-black/15 hover:border-black bg-white text-black'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <strong className="text-base uppercase tracking-wider block font-bold">
                          {size.label}
                        </strong>
                        {selected && <Check className="w-4 h-4 text-[#A8201A]" />}
                      </div>
                      <p className={`text-xs font-mono ${selected ? 'text-[#A8201A]' : 'text-black/50'}`}>
                        {size.sqftLabel}
                      </p>
                    </button>
                  );
                })}
              </div>

              {propertySize.id === 'custom' && (
                <div className="pt-4 p-6 bg-[#F6F5F2] border border-black/10 space-y-3">
                  <label className="block text-xs uppercase font-mono tracking-wider font-semibold">
                    Enter Exact Covered Area (Sq.Ft):
                  </label>
                  <input
                    type="number"
                    value={customSqft}
                    onChange={(e) => setCustomSqft(Math.max(200, Number(e.target.value)))}
                    className="w-full max-w-sm px-4 py-3 bg-white border border-black/20 text-sm font-mono focus:outline-none focus:border-[#A8201A]"
                    placeholder="e.g. 5200"
                  />
                  <p className="text-[11px] text-black/55 font-mono">
                    Calculated for approximately {customSqft.toLocaleString('en-PK')} square feet of interior and covered area.
                  </p>
                </div>
              )}
            </div>
          )}

          {/* STEP 3: Renovation Scope */}
          {step === 3 && (
            <div className="space-y-6">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-[#A8201A] block mb-1">
                  Step 03 of 05
                </span>
                <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-tight">
                  Choose Architectural Scope
                </h2>
                <p className="text-xs text-black/60 font-light mt-1">
                  How deep does the transformation reach? From surface refinishing to gut architectural remodeling.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
                {SCOPES.map((sc) => {
                  const selected = scope.id === sc.id;
                  return (
                    <button
                      key={sc.id}
                      onClick={() => setScope(sc)}
                      className={`p-6 text-left border transition-all flex flex-col justify-between cursor-pointer ${
                        selected
                          ? 'border-[#141414] bg-[#141414] text-white'
                          : 'border-black/15 hover:border-black bg-white text-black'
                      }`}
                    >
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <strong className="text-base uppercase tracking-wider block font-bold">
                            {sc.label}
                          </strong>
                          {selected && <Check className="w-4 h-4 text-[#A8201A]" />}
                        </div>
                        <p className={`text-xs leading-relaxed font-light mb-4 ${selected ? 'text-white/70' : 'text-black/65'}`}>
                          {sc.desc}
                        </p>
                      </div>

                      <div className="pt-4 border-t border-black/10 flex items-center justify-between">
                        <span className={`text-[10px] font-mono uppercase tracking-widest flex items-center gap-1.5 ${selected ? 'text-[#A8201A]' : 'text-black/50'}`}>
                          <Clock className="w-3.5 h-3.5" />
                          <span>{sc.timeline}</span>
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* STEP 4: Finish Level */}
          {step === 4 && (
            <div className="space-y-6">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-[#A8201A] block mb-1">
                  Step 04 of 05
                </span>
                <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-tight">
                  Select Finish &amp; Material Tier
                </h2>
                <p className="text-xs text-black/60 font-light mt-1">
                  Material provenance dictates tactile quality, longevity, and overall investment level.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
                {FINISH_TIERS.map((tier) => {
                  const selected = finishTier.id === tier.id;
                  return (
                    <button
                      key={tier.id}
                      onClick={() => setFinishTier(tier)}
                      className={`p-6 text-left border transition-all flex flex-col justify-between cursor-pointer ${
                        selected
                          ? 'border-[#141414] bg-[#141414] text-white'
                          : 'border-black/15 hover:border-black bg-white text-black'
                      }`}
                    >
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <strong className="text-base uppercase tracking-wider block font-bold">
                            {tier.label}
                          </strong>
                          {selected && <Check className="w-4 h-4 text-[#A8201A]" />}
                        </div>
                        <p className={`text-xs leading-relaxed font-light ${selected ? 'text-white/70' : 'text-black/65'}`}>
                          {tier.spec}
                        </p>
                      </div>
                      <div className="pt-4 mt-4 border-t border-black/10">
                        <span className={`text-[10px] font-mono uppercase tracking-wider ${selected ? 'text-[#A8201A]' : 'text-black/45'}`}>
                          {tier.id === 'standard' ? 'Cost-Effective Standard' : tier.id === 'premium' ? 'Architectural Benchmark' : 'Collector Grade'}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* STEP 5: Included Disciplines & Calculation Result */}
          {step === 5 && (
            <div className="space-y-8">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-[#A8201A] block mb-1">
                  Step 05 of 05 · Final Calculation
                </span>
                <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-tight">
                  Included Divisions &amp; Preliminary BOQ Range
                </h2>
                <p className="text-xs text-black/60 font-light mt-1">
                  Check or uncheck specific disciplines to customize your estimated turnkey package.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {INCLUSIONS.map((inc) => {
                  const checked = selectedInclusions.includes(inc.id);
                  return (
                    <button
                      key={inc.id}
                      onClick={() => toggleInclusion(inc.id)}
                      className={`p-4 text-left border text-xs uppercase tracking-wider flex items-center justify-between transition-colors cursor-pointer ${
                        checked
                          ? 'bg-[#141414] text-white border-[#141414]'
                          : 'bg-white border-black/15 text-black/70 hover:border-black'
                      }`}
                    >
                      <span className="truncate pr-2 font-medium">{inc.label}</span>
                      {checked ? (
                        <Check className="w-4 h-4 text-[#A8201A] shrink-0" />
                      ) : (
                        <span className="w-4 h-4 border border-black/30 rounded-full shrink-0" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Comprehensive Result Box */}
              <div className="bg-[#141414] text-white p-8 md:p-10 border-l-4 border-[#A8201A] space-y-6">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-white/10">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#A8201A] block mb-1">
                      Preliminary 2026 BOQ Valuation
                    </span>
                    <div className="text-3xl sm:text-5xl font-serif italic text-white tracking-tight">
                      PKR {lowMillion}M — {highMillion}M
                    </div>
                    <p className="text-xs text-white/60 mt-1 font-mono">
                      Calculated for {activeArea.toLocaleString('en-PK')} sq.ft · {projectType.label} · {scope.label}
                    </p>
                  </div>

                  <div className="bg-white/5 border border-white/10 p-4 space-y-2 lg:text-right">
                    <span className="text-[10px] uppercase font-mono tracking-widest text-[#A8201A] block">
                      Estimated Duration
                    </span>
                    <strong className="text-xl font-bold uppercase tracking-wider block text-white">
                      {scope.timeline}
                    </strong>
                    <span className="text-[11px] text-white/50 block font-light">
                      From site mobilization to handover
                    </span>
                  </div>
                </div>

                {/* Scope Assurance Badges */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-white/75 font-light">
                  <div className="flex items-start gap-2.5">
                    <ShieldCheck className="w-4 h-4 text-[#A8201A] shrink-0 mt-0.5" />
                    <span>Includes 12-Month Workmanship Warranty</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <FileText className="w-4 h-4 text-[#A8201A] shrink-0 mt-0.5" />
                    <span>Full-time on-site resident engineer supervision</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#A8201A] shrink-0 mt-0.5" />
                    <span>CDA / DHA compliance and bylaw liaison included</span>
                  </div>
                </div>

                {/* Action Row */}
                <div className="pt-4 flex flex-col sm:flex-row gap-4 items-center justify-between">
                  <p className="text-xs text-white/50 max-w-md">
                    * This is a preliminary architectural model. A formal binding BOQ is engineered post-site laser survey.
                  </p>
                  <a
                    href={`https://wa.me/923335251768?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#A8201A] text-white px-8 py-4 text-xs uppercase tracking-[0.22em] font-bold hover:bg-white hover:text-[#141414] transition-colors shrink-0"
                  >
                    <span>Send Brief to Engineer</span>
                    <Send className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          )}

          {/* Stepper Navigation Buttons */}
          <div className="flex items-center justify-between mt-10 pt-6 border-t border-black/10">
            <button
              disabled={step === 1}
              onClick={() => setStep((s) => Math.max(1, s - 1))}
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold disabled:opacity-30 cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" /> Previous Step
            </button>

            {step < 5 && (
              <button
                onClick={() => setStep((s) => Math.min(5, s + 1))}
                className="inline-flex items-center gap-2 bg-[#141414] text-white px-8 py-3.5 text-xs uppercase tracking-[0.2em] font-semibold hover:bg-[#A8201A] transition-colors cursor-pointer"
              >
                Next Step <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
