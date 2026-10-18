'use client';

import React, { useState } from 'react';
import { ArrowRight, ArrowLeft, Check, Send, Calculator } from 'lucide-react';

const PROJECT_TYPES = [
  'Full Villa Renovation',
  'New Grey + Turnkey Build',
  'Kitchen & Bath Remodel',
  'Commercial / Office Fit-Out',
];

const PROPERTY_SIZES = [
  { label: '5 — 7 Marla (Approx. 1,800 - 2,400 sq.ft)', baseSqft: 2100 },
  { label: '10 — 14 Marla (Approx. 3,200 - 4,200 sq.ft)', baseSqft: 3600 },
  { label: '1 Kanal (Approx. 4,500 - 5,500 sq.ft)', baseSqft: 5000 },
  { label: '2 Kanal+ Estate (Approx. 8,500+ sq.ft)', baseSqft: 9000 },
];

const SCOPES = [
  { label: 'Cosmetic Refresh (Surfaces, Paint, Lighting, Joinery)', multiplier: 0.45 },
  { label: 'Full Interior + MEP Upgrade (Plumbing, Wiring, Tile, Kitchens)', multiplier: 0.85 },
  { label: 'Structural Gut Remodel / Turnkey A—Z Execution', multiplier: 1.25 },
];

const FINISH_TIERS = [
  {
    label: 'Essential Contemporary (Local Porcelain, Ash Veneer, Standard MEP)',
    ratePerSqft: 3800,
  },
  {
    label: 'Signature Architectural (Stone · Oak · Steel, Grohe/Kohler, Blum)',
    ratePerSqft: 6200,
  },
  {
    label: 'Bespoke Estate Luxury (Imported Marble, VRF HVAC, Smart Automation)',
    ratePerSqft: 9500,
  },
];

const INCLUDED_TRADES = [
  '01 Civil & Structural Modifications',
  '04 3D Interior Design & Space Planning',
  '05 Designer Kitchen & Wet-Area Waterproofing',
  '06 Full MEP (Rewiring, PPR Plumbing, HVAC)',
  '08 Custom Oak/Walnut Wardrobes & Doors',
  '09 Double-Glazed Thermal Aluminium Windows',
  '12 Courtyard Landscaping & Pergola',
];

export default function RenovationPlannerPage() {
  const [step, setStep] = useState(1);
  const [projectType, setProjectType] = useState(PROJECT_TYPES[0]);
  const [propertySize, setPropertySize] = useState(PROPERTY_SIZES[2]);
  const [scope, setScope] = useState(SCOPES[1]);
  const [finishTier, setFinishTier] = useState(FINISH_TIERS[1]);
  const [selectedTrades, setSelectedTrades] = useState<string[]>([
    INCLUDED_TRADES[1],
    INCLUDED_TRADES[2],
    INCLUDED_TRADES[3],
    INCLUDED_TRADES[4],
  ]);

  const toggleTrade = (trade: string) => {
    setSelectedTrades((prev) =>
      prev.includes(trade) ? prev.filter((t) => t !== trade) : [...prev, trade]
    );
  };

  // Calculate PKR Range
  const estimatedMid =
    propertySize.baseSqft * finishTier.ratePerSqft * scope.multiplier +
    selectedTrades.length * 350000;
  const lowRangeM = ((estimatedMid * 0.9) / 1000000).toFixed(1);
  const highRangeM = ((estimatedMid * 1.12) / 1000000).toFixed(1);

  const whatsappSummary = `Hi RENO Studio, I completed a preliminary BOQ study:%0A- Project: ${projectType}%0A- Size: ${propertySize.label}%0A- Scope: ${scope.label}%0A- Finish: ${finishTier.label}%0A- Estimated Range: PKR ${lowRangeM}M to ${highRangeM}M`;

  return (
    <main className="bg-[#F6F5F2] min-h-screen pt-32 pb-24 px-6 md:px-12">
      <div className="max-w-[1100px] mx-auto">
        <div className="flex items-center justify-between border-b border-black/15 pb-6 mb-10">
          <div>
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#A8201A] block mb-2">
              R8 / PLAN — Interactive BOQ Studio
            </span>
            <h1 className="text-3xl md:text-5xl font-bold uppercase tracking-tight">
              PRELIMINARY INVESTMENT PLANNER
            </h1>
          </div>
          <Calculator className="w-10 h-10 text-[#A8201A] hidden sm:block" />
        </div>

        {/* 5 Step Progress Bar */}
        <div className="grid grid-cols-5 gap-2 mb-12">
          {['01 Project', '02 Property', '03 Scope', '04 Finish', '05 Included'].map(
            (label, idx) => {
              const sNum = idx + 1;
              const active = step >= sNum;
              return (
                <button
                  key={label}
                  onClick={() => setStep(sNum)}
                  className={`py-3 px-2 text-left border-t-4 transition-colors ${
                    active
                      ? 'border-[#A8201A] text-black font-bold'
                      : 'border-black/15 text-black/40'
                  }`}
                >
                  <span className="text-[11px] font-mono uppercase tracking-wider block">
                    {label}
                  </span>
                </button>
              );
            }
          )}
        </div>

        {/* Step Content Box */}
        <div className="bg-white border border-black/10 p-8 md:p-12 shadow-sm">
          {step === 1 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold uppercase">01 / Select Project Direction</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {PROJECT_TYPES.map((type) => (
                  <button
                    key={type}
                    onClick={() => setProjectType(type)}
                    className={`p-6 text-left border transition-all ${
                      projectType === type
                        ? 'bg-[#141414] text-white border-[#141414]'
                        : 'border-black/15 hover:border-black'
                    }`}
                  >
                    <strong className="text-base uppercase tracking-wider block">{type}</strong>
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold uppercase">
                02 / Property Scale (Islamabad / Rawalpindi)
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {PROPERTY_SIZES.map((size) => (
                  <button
                    key={size.label}
                    onClick={() => setPropertySize(size)}
                    className={`p-6 text-left border transition-all ${
                      propertySize.label === size.label
                        ? 'bg-[#141414] text-white border-[#141414]'
                        : 'border-black/15 hover:border-black'
                    }`}
                  >
                    <strong className="text-base block">{size.label}</strong>
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold uppercase">03 / Depth of Intervention</h2>
              <div className="space-y-4">
                {SCOPES.map((s) => (
                  <button
                    key={s.label}
                    onClick={() => setScope(s)}
                    className={`w-full p-6 text-left border transition-all ${
                      scope.label === s.label
                        ? 'bg-[#141414] text-white border-[#141414]'
                        : 'border-black/15 hover:border-black'
                    }`}
                  >
                    <strong className="text-base block">{s.label}</strong>
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold uppercase">04 / Material &amp; Specification Tier</h2>
              <div className="space-y-4">
                {FINISH_TIERS.map((tier) => (
                  <button
                    key={tier.label}
                    onClick={() => setFinishTier(tier)}
                    className={`w-full p-6 text-left border transition-all ${
                      finishTier.label === tier.label
                        ? 'bg-[#141414] text-white border-[#141414]'
                        : 'border-black/15 hover:border-black'
                    }`}
                  >
                    <strong className="text-base block">{tier.label}</strong>
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 5 && (
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold uppercase mb-2">
                  05 / Included Specialist Categories &amp; PKR Estimate
                </h2>
                <p className="text-sm text-black/60">
                  Toggle specialist trades to refine your preliminary turnkey allocation.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {INCLUDED_TRADES.map((trade) => {
                  const checked = selectedTrades.includes(trade);
                  return (
                    <button
                      key={trade}
                      onClick={() => toggleTrade(trade)}
                      className={`p-4 text-left border text-xs uppercase tracking-wider flex items-center justify-between ${
                        checked
                          ? 'bg-[#141414] text-white border-[#141414]'
                          : 'border-black/15 text-black/70'
                      }`}
                    >
                      <span>{trade}</span>
                      {checked && <Check className="w-4 h-4 text-[#A8201A]" />}
                    </button>
                  );
                })}
              </div>

              {/* Resulting PKR Investment Box */}
              <div className="bg-[#141414] text-white p-8 border-l-4 border-[#A8201A] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <div>
                  <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#A8201A] block mb-1">
                    Estimated Preliminary Investment Range
                  </span>
                  <div className="text-3xl md:text-5xl font-serif italic text-white">
                    PKR {lowRangeM} Million — {highRangeM} Million
                  </div>
                  <p className="text-xs text-white/60 mt-2">
                    Includes itemized BOQ supervision, CDA/DHA coordination &amp; 12-month warranty.
                  </p>
                </div>

                <a
                  href={`https://wa.me/923335251768?text=${whatsappSummary}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-3 bg-[#A8201A] text-white px-7 py-4 text-xs uppercase tracking-[0.22em] font-bold hover:bg-white hover:text-[#141414] transition-colors shrink-0"
                >
                  <span>Book Site Visit with Brief</span>
                  <Send className="w-4 h-4" />
                </a>
              </div>
            </div>
          )}

          {/* Step Navigation Buttons */}
          <div className="flex items-center justify-between mt-10 pt-6 border-t border-black/10">
            <button
              disabled={step === 1}
              onClick={() => setStep((s) => Math.max(1, s - 1))}
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] disabled:opacity-30"
            >
              <ArrowLeft className="w-4 h-4" /> Previous Step
            </button>

            {step < 5 && (
              <button
                onClick={() => setStep((s) => Math.min(5, s + 1))}
                className="inline-flex items-center gap-2 bg-[#141414] text-white px-7 py-3.5 text-xs uppercase tracking-[0.2em] hover:bg-[#A8201A] transition-colors"
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
