'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronDown,
  Compass,
  FileCheck2,
  ShieldCheck,
  ArrowUpRight,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Layers,
  Wrench,
  CheckCircle2,
} from 'lucide-react';
import { RENO_SERVICES, ServiceCategory } from '@/data/renoData';

const SERVICE_STANDARDS: Record<string, string[]> = {
  'construction-civil-works': [
    'ASTM A615 Grade-60 Deformed Steel Rebar with certified tensile mill testing',
    '3,000 PSI to 4,000 PSI ready-mix or on-site monitored concrete cylinder compression tests',
    'CDA & DHA Compulsory Open Space (COS) and Setback clearance inspection',
    'Multi-barrier anti-termite chemical ground soil treatment with 10-year warranty'
  ],
  'home-renovation-remodeling': [
    'Laser level architectural survey and 3D point cloud scan before demolition',
    'Negative-side basement damp-proofing and sub-slab capillary moisture breaks',
    'Negative-pressure dust containment partitions and acoustic working hour compliance',
    'Structural steel beam retrofits for open-plan kitchen and living expansions'
  ],
  'office-commercial-fit-out': [
    'High-traffic commercial floor loading and acoustic STC-rated drywall partitions',
    'Fire safety compliance (sprinklers, smoke dampers, emergency exit hardware)',
    'Structured CAT6A / Fibre data cablings and dedicated server room cooling',
    'Fast-track delivery schedules to minimize commercial rent downtime'
  ],
  'interior-design-space-planning': [
    'Complete BIM 3D spatial models with natural light solar orientation studies',
    'Bespoke architectural lighting design (2700K warm CCT, high CRI > 95)',
    'Curated physical sample moodboards (honed marble, fluted oak, brass)',
    'Full joinery working drawings and production-ready detailing'
  ],
  'kitchen-bathroom-renovation': [
    'Concealed Grohe/Kohler thermostatic valves pressure-tested to 150 PSI',
    'Dual-coat Sika or Ardex wet-area waterproofing under all shower trays and floors',
    'Blum / Häfele soft-close hardware rated for 200,000 duty cycles',
    'Antibacterial quartz or granite countertops with seamless mitred aprons'
  ],
  'electrical-plumbing-hvac': [
    'Pakistan Cables / Pioneer pure copper wiring with Schneider Electric miniature breakers',
    'PEX / PPR-C hot & cold plumbing manifold circuits with zero hidden sub-floor joints',
    'Concealed ducted VRF inverter air conditioning with linear slot diffusers',
    'Dedicated grounding earthing pits (< 5 Ohms resistance test)'
  ],
  'flooring-painting-decorating': [
    'Self-leveling underlayment screeds guaranteeing < 2mm floor deviation',
    'Imported 120x240cm porcelain slabs or 100% rigid-core waterproof SPC flooring',
    'Jotun Fenomastic or Dulux architectural emulsion with anti-fungal formulation',
    'Precision shadow-gap skirting and recessed metal baseboard reveals'
  ],
  'carpentry-cabinetry-joinery': [
    'Moisture-resistant (MR) MDF cores veneered in quarter-sawn American oak or walnut',
    'Blumotion soft-close drawer runners and integrated concealed LED profile grooves',
    'Solid wood interior door jambs with magnetic latch mortise locks',
    'Full-height architectural wall paneling and custom acoustic slat features'
  ],
  'glass-aluminium-metal-doors-windows': [
    'Thermal-break structural aluminium profiles (Chawla / Alcop certified sections)',
    'Double-glazed argon-gas filled tempered glass units for thermal & acoustic barrier',
    'Multipoint perimeter security locking mechanisms with EPDM weather gaskets',
    'Architectural laser-cut steel pergolas, staircases, and privacy louvers'
  ],
  'ceilings-partitions-acoustic-works': [
    'Elephant / Knauf moisture-resistant gypsum boards with galvanized metal furring grid',
    'Concealed architectural cove lighting troughs and shadow-bead perimeter gaps',
    'Rockwool acoustic insulation infill for bedrooms, media rooms, and home offices',
    'Monolithic micro-perforated acoustic ceiling tiles for sound dampening'
  ],
  'exterior-facade-roofing-waterproofing': [
    'Multi-ply elastomeric polymer waterproofing membranes over reinforced slope screeds',
    'Monsoon rainwater drainage calculations with oversized concealed gargoyles and downpipes',
    'Weatherproof exterior rockwall or textured plaster coatings with UV UV-inhibitors',
    'Margalla stone, travertine, or ventilated composite facade cladding'
  ],
  'landscaping-outdoor-living': [
    'Honed travertine or local slate paving laid on reinforced concrete sub-bases',
    'Integrated subsurface irrigation and low-voltage 24V landscape lighting paths',
    'Architectural water features with concealed recirculating filtration pumps',
    'Custom metal/wood outdoor BBQ kitchens and motorized pergola structures'
  ],
  'property-maintenance-repairs': [
    'Scheduled bi-annual roof drainage and waterproofing integrity audits',
    'Electrical switchboard thermal imaging scans to detect hot spots',
    'HVAC filter cleaning, coil descaling, and refrigerant pressure checks',
    'Rapid-response resident maintenance care for completed residential estates'
  ],
  'project-management-turnkey-solutions': [
    'Dedicated full-time on-site resident engineer assigned to your project',
    'Milestone-linked transparent draw schedules with zero upfront deposit exposure',
    'Bi-weekly 4K drone aerial progress and high-definition site video records',
    '100-point snagging inspection and formal 12-Month Workmanship Warranty'
  ]
};

export default function ServicesPage() {
  const [selectedPillar, setSelectedPillar] = useState<string>('All');
  const [openServiceId, setOpenServiceId] = useState<string>('construction-civil-works');
  const [mediaMode, setMediaMode] = useState<Record<string, 'video' | 'render'>>({});
  const [mutedStates, setMutedStates] = useState<Record<string, boolean>>({});

  const pillars = [
    'All',
    'Build & Transform',
    'Design & Finish',
    'Specialist Systems & Care',
  ];

  const filteredServices =
    selectedPillar === 'All'
      ? RENO_SERVICES
      : RENO_SERVICES.filter((s) => s.pillar === selectedPillar);

  const toggleMediaMode = (id: string, mode: 'video' | 'render') => {
    setMediaMode((prev) => ({ ...prev, [id]: mode }));
  };

  const toggleMute = (id: string) => {
    setMutedStates((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <main className="bg-[#F6F5F2] min-h-screen pt-32 pb-24 px-6 md:px-12 text-[#141414]">
      <div className="max-w-[1440px] mx-auto">
        {/* Header */}
        <div className="max-w-4xl mb-12">
          <span className="text-xs uppercase tracking-[0.3em] text-[#A8201A] block mb-3 font-semibold">
            01 — 14 Specialist In-House Divisions
          </span>
          <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-tight mb-6 leading-[0.95]">
            COMPLETE EXPERTISE. <br />
            <span className="font-serif italic font-normal text-black/80">One accountable standard.</span>
          </h1>
          <p className="text-lg md:text-xl text-black/70 font-light leading-relaxed">
            From ground-up structural construction to fine oak joinery, concealed MEP engineering, and
            access-controlled delivery across Islamabad, explore all 14 in-house disciplines brought
            together under one single contract.
          </p>
        </div>

        {/* Pillar Filter Bar */}
        <div className="flex flex-wrap gap-2 pb-8 border-b border-black/15 mb-12">
          {pillars.map((pil) => (
            <button
              key={pil}
              onClick={() => setSelectedPillar(pil)}
              className={`px-5 py-2.5 text-xs uppercase tracking-[0.2em] transition-all border cursor-pointer ${
                selectedPillar === pil
                  ? 'bg-[#141414] text-white border-[#141414]'
                  : 'bg-white text-black/70 border-black/15 hover:border-black'
              }`}
            >
              {pil} {pil === 'All' ? `(${RENO_SERVICES.length})` : `(${RENO_SERVICES.filter(s => s.pillar === pil).length})`}
            </button>
          ))}
        </div>

        {/* 14 Services Matrix with Technical Telemetry Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-6">
            <div className="sticky top-28 space-y-6">
              <div>
                <span className="text-xs uppercase tracking-[0.25em] text-[#A8201A] font-semibold block mb-2">
                  In-House Capabilities
                </span>
                <h2 className="text-3xl font-bold uppercase tracking-tight leading-none mb-3">
                  ONE TEAM. <br />
                  <span className="font-serif italic font-normal">Every transformation.</span>
                </h2>
                <p className="text-sm text-black/65 leading-relaxed font-light">
                  Fewer handoffs, tighter cost control, and single-point project accountability across
                  CDA sectors, DHA Phases, and Bahria Town.
                </p>
              </div>

              <div className="bg-white border border-black/10 p-6 space-y-5">
                <div className="flex items-start gap-3.5">
                  <Compass className="w-5 h-5 text-[#A8201A] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-black/45 block">
                      Islamabad HQ Coordinates
                    </span>
                    <strong className="text-xs uppercase tracking-wider block">
                      33.7272° N · 73.0877° E (Blue Area)
                    </strong>
                    <span className="text-[11px] text-black/60">Dedicated resident site engineers</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 border-t border-black/10 pt-4">
                  <FileCheck2 className="w-5 h-5 text-[#A8201A] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-black/45 block">
                      Regulatory &amp; Contracts
                    </span>
                    <strong className="text-xs uppercase tracking-wider block">
                      CDA · DHA Regulatory &amp; Itemized BOQ
                    </strong>
                    <span className="text-[11px] text-black/60">Guaranteed fixed-scope contracts</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 border-t border-black/10 pt-4">
                  <ShieldCheck className="w-5 h-5 text-[#A8201A] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-black/45 block">
                      Turnkey Assurance
                    </span>
                    <strong className="text-xs uppercase tracking-wider block">
                      12-Month Guarantee &amp; Defect Audits
                    </strong>
                    <span className="text-[11px] text-black/60">Scheduled post-handover care</span>
                  </div>
                </div>
              </div>

              {/* Instant WhatsApp BOQ Inquiry Box */}
              <div className="p-6 bg-[#141414] text-white space-y-3">
                <span className="text-[10px] uppercase font-mono tracking-widest text-[#A8201A] block">
                  Turnkey Consultation
                </span>
                <h3 className="text-base font-bold uppercase tracking-wider">
                  Request a Division BOQ
                </h3>
                <p className="text-xs text-white/70 leading-relaxed font-light">
                  Need an itemized quotation for one of our 14 divisions? Speak directly with our resident quantity surveyor.
                </p>
                <a
                  href="https://wa.me/923335251768?text=Hi%20Renov8,%20I%20would%20like%20to%20request%20an%20itemized%20BOQ%20consultation."
                  target="_blank"
                  rel="noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#A8201A] text-white py-3 text-xs uppercase tracking-[0.2em] font-semibold hover:bg-white hover:text-[#141414] transition-colors"
                >
                  <span>WhatsApp Survey Desk</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </aside>

          {/* 14 Expandable Services List */}
          <div className="lg:col-span-8 divide-y divide-black/15 border-y border-black/15">
            {filteredServices.map((service) => {
              const isOpen = openServiceId === service.id;
              const currentMode = mediaMode[service.id] || (service.videoUrl ? 'video' : 'render');
              const isMuted = mutedStates[service.id] !== undefined ? mutedStates[service.id] : true;
              const standards = SERVICE_STANDARDS[service.id] || [];

              return (
                <div key={service.id} className="bg-transparent">
                  <button
                    onClick={() => setOpenServiceId(isOpen ? '' : service.id)}
                    className="w-full py-6 px-4 flex items-center justify-between text-left hover:bg-white/60 transition-colors group cursor-pointer"
                  >
                    <div className="flex items-baseline gap-6">
                      <span className="font-mono text-sm text-[#A8201A] font-semibold">
                        /{service.index}
                      </span>
                      <div>
                        <h3 className="text-xl md:text-2xl font-bold uppercase tracking-tight group-hover:text-[#A8201A] transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-xs text-black/55 mt-0.5">{service.tagline}</p>
                      </div>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 transition-transform duration-300 shrink-0 ${
                        isOpen ? 'rotate-180 text-[#A8201A]' : 'text-black/40'
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35 }}
                        className="overflow-hidden bg-white px-6 pb-10 pt-4"
                      >
                        <div className="space-y-8 border-t border-black/10 pt-6">
                          {/* Media Header & Viewport (Video Reel or Render) */}
                          <div className="space-y-3">
                            <div className="flex items-center justify-between">
                              <span className="text-[10px] font-mono uppercase tracking-[0.2em] bg-[#F6F5F2] px-2.5 py-1 text-black/70">
                                {service.index} / {service.pillar}
                              </span>

                              {service.videoUrl && (
                                <div className="flex items-center gap-2">
                                  <button
                                    onClick={() => toggleMediaMode(service.id, 'video')}
                                    className={`px-2.5 py-1 text-[10px] uppercase font-mono tracking-wider transition-colors cursor-pointer ${
                                      currentMode === 'video'
                                        ? 'bg-[#141414] text-white'
                                        : 'bg-[#F6F5F2] text-black/60 hover:text-black'
                                    }`}
                                  >
                                    Craft Reel (4K)
                                  </button>
                                  <button
                                    onClick={() => toggleMediaMode(service.id, 'render')}
                                    className={`px-2.5 py-1 text-[10px] uppercase font-mono tracking-wider transition-colors cursor-pointer ${
                                      currentMode === 'render'
                                        ? 'bg-[#141414] text-white'
                                        : 'bg-[#F6F5F2] text-black/60 hover:text-black'
                                    }`}
                                  >
                                    Architectural Spec
                                  </button>
                                </div>
                              )}
                            </div>

                            <div className="relative aspect-[16/9] md:aspect-[16/8] overflow-hidden bg-black group">
                              {currentMode === 'video' && service.videoUrl ? (
                                <>
                                  <video
                                    src={service.videoUrl}
                                    autoPlay
                                    loop
                                    playsInline
                                    muted={isMuted}
                                    className="w-full h-full object-cover"
                                  />
                                  <div className="absolute top-3 left-3 bg-[#141414]/90 backdrop-blur-md px-2.5 py-1 text-[9px] font-mono uppercase text-white tracking-widest border border-white/15">
                                    ON-SITE CRAFT · ISLAMABAD
                                  </div>
                                  <button
                                    onClick={() => toggleMute(service.id)}
                                    className="absolute bottom-3 right-3 p-2 bg-[#141414]/80 text-white backdrop-blur-md hover:bg-[#A8201A] transition-colors cursor-pointer"
                                    aria-label="Toggle Mute"
                                  >
                                    {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
                                  </button>
                                </>
                              ) : (
                                <img
                                  src={service.image}
                                  alt={service.title}
                                  className="w-full h-full object-cover"
                                />
                              )}
                            </div>
                          </div>

                          {/* Description & Deliverables */}
                          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                            <div className="md:col-span-7 space-y-4">
                              <h4 className="text-lg font-bold uppercase tracking-tight">
                                Scope of Execution &amp; Methodology
                              </h4>
                              <p className="text-sm text-black/75 leading-relaxed font-light">
                                {service.description}
                              </p>

                              <div className="pt-2">
                                <span className="text-[10px] uppercase font-mono tracking-widest text-[#A8201A] block mb-3 font-semibold">
                                  Standard Deliverables ({service.deliverables.length})
                                </span>
                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                                  {service.deliverables.map((item) => (
                                    <li
                                      key={item}
                                      className="text-xs text-black/80 flex items-start gap-2"
                                    >
                                      <span className="w-1.5 h-1.5 bg-[#A8201A] shrink-0 mt-1.5" />
                                      <span>{item}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>

                              <div className="pt-4 flex flex-wrap gap-4">
                                <a
                                  href={`https://wa.me/923335251768?text=Hi%20Renov8,%20I%20would%20like%20to%20request%20an%20itemized%20BOQ%20for%20${encodeURIComponent(
                                    service.title
                                  )}`}
                                  target="_blank"
                                  rel="noreferrer"
                                  className="inline-flex items-center gap-2 bg-[#141414] text-white text-xs uppercase tracking-[0.2em] px-5 py-3 hover:bg-[#A8201A] transition-colors"
                                >
                                  <span>Request BOQ via WhatsApp</span>
                                  <ArrowUpRight className="w-3.5 h-3.5" />
                                </a>
                              </div>
                            </div>

                            {/* Technical Standards Box */}
                            <div className="md:col-span-5 bg-[#F6F5F2] border border-black/10 p-5 space-y-3">
                              <span className="text-[10px] uppercase font-mono tracking-widest text-[#A8201A] font-semibold block">
                                Engineering Standards &amp; QA
                              </span>
                              <h5 className="text-xs font-bold uppercase tracking-wider">
                                Compliance Checklist
                              </h5>
                              <ul className="space-y-2.5 text-xs text-black/75">
                                {standards.map((std, i) => (
                                  <li key={i} className="flex items-start gap-2">
                                    <CheckCircle2 className="w-3.5 h-3.5 text-[#A8201A] shrink-0 mt-0.5" />
                                    <span className="leading-snug">{std}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Turnkey Delivery Matrix Banner */}
        <section className="mt-24 p-8 md:p-12 bg-[#141414] text-white border border-white/10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <span className="text-xs uppercase font-mono tracking-[0.25em] text-[#A8201A]">
                The Turnkey Advantage
              </span>
              <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tight text-white">
                WHY 14 IN-HOUSE DISCIPLINES MATTER.
              </h2>
              <p className="text-sm text-white/70 leading-relaxed font-light max-w-2xl">
                When trades are subcontracted separately, responsibility is fragmented: the architect blames
                the contractor, the plumber blames the tiler, and the electrician blames the carpenter. Renov8
                manages every junction, conduit, and joint with single-point accountability.
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-4">
              <a
                href="/planner"
                className="inline-flex items-center justify-center gap-2 bg-white text-[#141414] py-3.5 px-6 text-xs uppercase tracking-[0.2em] font-semibold hover:bg-[#A8201A] hover:text-white transition-colors text-center"
              >
                <span>Calculate Preliminary BOQ</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 border border-white/20 text-white py-3.5 px-6 text-xs uppercase tracking-[0.2em] font-medium hover:border-white transition-colors text-center"
              >
                <span>Book Site Survey</span>
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
