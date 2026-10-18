import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import {
  ArrowRight,
  ArrowUpRight,
  ShieldCheck,
  MapPin,
  Compass,
  Lock,
  CheckCircle2,
  Award,
  Layers,
  Ruler,
  Building2,
  Users,
  Sparkles
} from 'lucide-react';
import { RENO_STATS } from '@/data/renoData';

export const metadata: Metadata = {
  title: 'The Studio | Renov8 Architecture & Renovation Syndicate Islamabad',
  description:
    'Founded in 2013 by alumni of NUST & University of Sydney. Explore Renov8’s studio history, founders Ar. Arsalan Alvie & Ar. Rao Umair Afzaal, multidisciplinary atelier team, and turnkey delivery standards.',
};

export default function StudioPage() {
  const founders = [
    {
      name: 'AR. Arsalan Alvie',
      role: 'Co-Founder & Principal Architect',
      education: 'Alumni of University of Sydney & NUST',
      image: '/images/studio/founder-arsalan-alvie.jpg',
      bio: 'Alumni of University of Sydney and NUST, Arsalan has been shaping residential, commercial, and civic architecture for over a decade. His expertise spans conceptual design, spatial geometry, and urban scale planning across Pakistan, Australia, the UAE, and Japan.',
      quote:
        '“No matter how old or mundane a spatial program might sound, there is always room for tectonic discovery, creative clarity, and enduring elegance.”',
      specialties: [
        'Spatial Morphology & Massing',
        'Executive Residences & Enclave Villas',
        'CDA & Municipal Directorate Approvals',
        'Material Curation & Illumination'
      ]
    },
    {
      name: 'AR. Rao Umair Afzaal',
      role: 'Co-Founder & Principal Turnkey Director',
      education: 'Alumni of NUST · Architecture & Structural Engineering',
      image: '/images/studio/founder-rao-umair.jpg',
      bio: 'A graduate of NUST with a decade-long track record in architectural execution, Rao leads Renov8’s engineering operations and 14 in-house specialist divisions. He bridges creative schematics with structural reality, ensuring zero variance between digital BIM models and on-site delivery.',
      quote:
        '“Architecture only truly exists when the physical junction stands the test of time, monsoon downpours, and structural load. Precision is not an aspiration; it is an itemized engineering deliverable.”',
      specialties: [
        'Turnkey Site Execution & Supervision',
        '14 Specialist In-House Trades Coordination',
        '100% Itemized BOQ & Cost Engineering',
        'Diplomatic & Access-Controlled Protocol'
      ]
    }
  ];

  const teamMembers = [
    {
      name: 'Hamza Tariq',
      title: 'Senior Project Architect',
      credential: 'B.Arch, NUST',
      specialty: 'Spatial Modeling, CDA Bylaws & Heritage Retrofits',
      image: '/images/studio/team-01.jpg',
      id: '01'
    },
    {
      name: 'Zainab Shah',
      title: 'Lead Interior Architect',
      credential: 'M.Des, Interior Architecture',
      specialty: 'Bespoke Joinery, Architectural Lighting & Palette Direction',
      image: '/images/studio/team-02.jpg',
      id: '02'
    },
    {
      name: 'Engr. Bilal Masood',
      title: 'Principal MEP Engineer',
      credential: 'B.Sc Electrical Engineering',
      specialty: 'HVAC Concealment, Smart Home Automation & Conduit Layouts',
      image: '/images/studio/team-03.jpg',
      id: '03'
    },
    {
      name: 'Taimoor Khan',
      title: 'Master Craftsman & Joinery Lead',
      credential: 'Atelier Millwork Director',
      specialty: 'Solid Teak, European White Oak & CNC Precision Veneering',
      image: '/images/studio/team-04.jpg',
      id: '04'
    },
    {
      name: 'Saad Munir',
      title: 'Principal Quantity Surveyor',
      credential: 'RICS Accredited / Cost Engineering',
      specialty: 'Itemized 100% BOQ Formulation & Draw Schedule Audits',
      image: '/images/studio/team-05.jpg',
      id: '05'
    },
    {
      name: 'Ayesha Rehman',
      title: 'Computational Designer & Visualizer',
      credential: 'B.Arch, Parametric Design',
      specialty: 'Revit Point Clouds, Lumion Ray-Tracing & Material Studies',
      image: '/images/studio/team-06.jpg',
      id: '06'
    },
    {
      name: 'Engr. Farhan Abbasi',
      title: 'Resident Site Engineer',
      credential: 'B.Sc Civil Engineering, PEC',
      specialty: 'Seismic Reinforcement, Concrete Core QA & Hydrostatic Testing',
      image: '/images/studio/team-07.jpg',
      id: '07'
    },
    {
      name: 'Khurram Shahzad',
      title: 'Diplomatic Enclave & Sector Logistics Lead',
      credential: 'Site Operations & Security Clearance',
      specialty: 'Police Vetting, CDA Passes & Access-Controlled Movement',
      image: '/images/studio/team-08.jpg',
      id: '08'
    }
  ];

  const workingPrinciples = [
    {
      index: '01',
      title: 'Make It Clear',
      subtitle: 'Complete BOQ Itemization',
      desc: 'Scope, decisions, exact unit rates, material specifications, and drawdown milestones are permanently documented in a transparent written BOQ—never left to casual on-site verbal agreements.'
    },
    {
      index: '02',
      title: 'Design The Junctions',
      subtitle: 'Where Trades & Materials Meet',
      desc: 'Architectural refinement is won or lost where materials touch: Greek Thassos marble meeting European smoked oak, shadowline aluminium reveals, or concealed AC grills. Every joint has an assigned owner.'
    },
    {
      index: '03',
      title: 'Build For Real Life',
      subtitle: 'Islamabad Climate & Monsoons',
      desc: 'Spaces must withstand Islamabad’s seasonal thermal swings (+45°C dry heat to near-freezing winters) and monsoon cloudbursts. We engineer multi-tier damp proof membranes and thermal breaks that endure.'
    },
    {
      index: '04',
      title: 'Finish Completely',
      subtitle: 'Audit, Snagging & 12-Month Care',
      desc: 'Hydrostatic pressure tests on concealed plumbing, thermal imaging of electrical distribution boards, a 100-point physical snagging checklist, and a formal 12-month defect liability warranty come standard.'
    }
  ];

  return (
    <main className="bg-[#F6F5F2] text-[#141414] min-h-screen selection:bg-[#A8201A] selection:text-white">
      {/* =========================================================
          SECTION 1: HERO (FULL-BLEED ARCHITECTURAL ATELIER BANNER)
          ========================================================= */}
      <section className="relative w-full min-h-[85vh] lg:min-h-[92vh] flex items-end justify-start bg-[#141414] overflow-hidden pt-36 pb-16 md:pb-24 px-6 md:px-12 border-b border-white/10">
        {/* Background Image with Cinematic Dark/Sepia Tonal Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/studio/arsyn-studio-hero.jpg"
            alt="Renov8 & ARSYN Studio Architecture Workspace and Physical Scale Models"
            className="w-full h-full object-cover object-center filter grayscale contrast-[1.15] brightness-[0.4] scale-105 transform motion-safe:animate-subtle-zoom"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-[#141414]/70 to-black/40" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(168,32,26,0.18),transparent_60%)]" />
        </div>

        {/* Content Shell */}
        <div className="relative z-10 max-w-[1440px] w-full mx-auto space-y-8">
          {/* Top Eyebrow Lockup */}
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 px-3 py-1 bg-[#A8201A] text-white text-[10px] uppercase font-mono tracking-[0.25em] font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              Established 2013
            </span>
            <span className="text-[11px] uppercase font-mono tracking-[0.2em] text-white/60">
              Alvie &amp; Rao Architects Syndicate · Islamabad HQ
            </span>
          </div>

          {/* Headline Typography */}
          <div className="max-w-5xl space-y-4">
            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold uppercase tracking-tight text-white leading-[0.9]">
              THE STUDIO. <br />
              <span className="font-serif italic font-normal text-white/85 text-4xl sm:text-6xl md:text-7xl lg:text-8xl block mt-2">
                One accountable direction.
              </span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl font-light text-white/75 leading-relaxed max-w-3xl pt-2">
              Started off as an architecture studio in 2013. Over a decade of deliberate practice,
              Renov8 has evolved into Islamabad’s foremost turnkey architectural syndicate—uniting
              conceptual spatial design, itemized BOQ engineering, and 14 in-house specialist trades
              under a single contract.
            </p>
          </div>

          {/* Bottom Fast Meta Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-white/15 text-white/70">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#A8201A] block">Pedigree</span>
              <p className="text-xs font-medium text-white mt-0.5">NUST &amp; Univ. of Sydney Alumni</p>
            </div>
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#A8201A] block">Turnkey Model</span>
              <p className="text-xs font-medium text-white mt-0.5">14 In-House Specialist Trades</p>
            </div>
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#A8201A] block">Jurisdiction</span>
              <p className="text-xs font-medium text-white mt-0.5">Islamabad CDA, DHA &amp; Enclaves</p>
            </div>
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#A8201A] block">Studio Location</span>
              <p className="text-xs font-medium text-white mt-0.5">33.7272° N · 73.0877° E (Blue Area)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Container */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-24 space-y-32">
        {/* =========================================================
            SECTION 2: WHO WE ARE (ASYMMETRICAL TWO-COLUMN EDITORIAL)
            ========================================================= */}
        <section className="space-y-12">
          <div className="flex items-center gap-4">
            <span className="text-xs uppercase font-mono tracking-[0.3em] text-[#A8201A] font-bold">
              01 / Atelier History &amp; Identity
            </span>
            <div className="h-px bg-black/15 flex-1" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Narrative */}
            <div className="lg:col-span-7 space-y-8">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold uppercase tracking-tight text-[#141414] leading-[0.95]">
                A DECADE-LONG EFFORT <br />
                <span className="font-serif italic font-normal text-black/75">
                  toward architectural perfection.
                </span>
              </h2>

              <div className="space-y-6 text-base sm:text-lg text-black/80 font-light leading-relaxed">
                <p>
                  <strong className="font-semibold text-black">ARSYN &amp; Renov8</strong> started off as a
                  dedicated, student-led architecture studio in 2013. Ever since, we have been growing continuously
                  and have established ourselves as an acclaimed multidisciplinary firm after a decade-long
                  effort delivering bespoke homes, institutional spaces, and commercial landmarks.
                </p>
                <p>
                  We are a syndicate of qualified, licensed architects, structural engineers, and master craftsmen
                  who strive to achieve perfection in each detail of our work. Each team member brings their own
                  honest style and architectural worldview that uniquely adds to the beauty and endurance of
                  our finished spaces—while abiding strictly by the studio’s foundational principles and rigorous work ethic.
                </p>
                <p className="text-sm text-black/70 border-l-2 border-[#A8201A] pl-4 italic">
                  Unlike traditional construction models where architects disclaim site responsibility and
                  contractors alter drawings on a whim, Renov8 controls both sides of the coin. Design decisions,
                  itemized BOQs, and resident site management remain under one single, accountable leadership.
                </p>
              </div>

              {/* Core Tenets Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                {[
                  'Single-Contract Financial & Delivery Liability',
                  '100% Itemized BOQ with Zero Concealed Markups',
                  'Direct Factory-to-Site Timber & Joinery Millwork',
                  'CDA Directorate & DHA Building Control Liaison'
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 bg-white p-4 border border-black/10">
                    <CheckCircle2 className="w-4 h-4 text-[#A8201A] shrink-0 mt-0.5" />
                    <span className="text-xs font-semibold uppercase tracking-wider text-black/85">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Photographic Spread */}
            <div className="lg:col-span-5 space-y-6">
              <div className="relative aspect-[4/3] overflow-hidden bg-black shadow-xl border border-black/15 group">
                <img
                  src="/images/studio/arsyn-studio-interior.jpg"
                  alt="Renov8 Material Archives and Architectural Studio Interior"
                  className="w-full h-full object-cover grayscale contrast-110 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between text-white">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#A8201A] block">
                      Physical Atelier Archive
                    </span>
                    <p className="text-xs font-mono uppercase tracking-wider text-white/90">
                      Blue Area Studio · Islamabad
                    </p>
                  </div>
                  <span className="text-[10px] font-mono uppercase text-white/60">
                    Est. 2013
                  </span>
                </div>
              </div>

              {/* Quote Card in Obsidian */}
              <div className="bg-[#141414] text-white p-8 space-y-4 border border-white/10">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#A8201A] block">
                  The Studio Credo
                </span>
                <p className="text-xl md:text-2xl font-serif italic text-white/95 leading-snug">
                  &ldquo;Renovation should feel considered, not chaotic. Every junction between marble,
                  timber, steel, and illumination must have an accountable owner.&rdquo;
                </p>
                <div className="pt-2 border-t border-white/10 flex items-center justify-between text-xs text-white/60 font-mono uppercase">
                  <span>Alvie &amp; Rao Architects</span>
                  <span>Islamabad, PK</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            SECTION 3: MEET THE FOUNDERS (HIGH-CONTRAST EDITORIAL CARDS)
            ========================================================= */}
        <section className="space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-black/15 pb-8">
            <div>
              <span className="text-xs uppercase font-mono tracking-[0.3em] text-[#A8201A] font-bold block mb-2">
                02 / Studio Principals
              </span>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold uppercase tracking-tight">
                MEET THE FOUNDERS.
              </h2>
            </div>
            <p className="text-xs md:text-sm text-black/60 max-w-md font-mono uppercase tracking-wider">
              A decade-long architectural partnership uniting spatial imagination with turnkey engineering discipline.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {founders.map((founder, idx) => (
              <div
                key={founder.name}
                className="bg-white border border-black/15 overflow-hidden flex flex-col justify-between hover:border-[#A8201A] transition-colors duration-300 shadow-sm"
              >
                <div>
                  {/* Portrait Image Frame */}
                  <div className="relative aspect-[16/11] overflow-hidden bg-[#141414]">
                    <img
                      src={founder.image}
                      alt={founder.name}
                      className="w-full h-full object-cover object-top filter grayscale contrast-115 hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    
                    <div className="absolute top-4 left-4 bg-[#141414]/90 backdrop-blur-md px-3 py-1.5 text-white text-[10px] font-mono uppercase tracking-widest border border-white/15">
                      Partner /{idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                    </div>

                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="text-xs uppercase font-mono tracking-widest text-[#A8201A] font-bold block">
                        {founder.role}
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-bold uppercase tracking-tight text-white">
                        {founder.name}
                      </h3>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-8 space-y-6">
                    <div className="inline-block px-3 py-1 bg-[#F6F5F2] border border-black/10 text-xs font-mono uppercase tracking-wider text-black/80">
                      {founder.education}
                    </div>

                    <blockquote className="text-base sm:text-lg font-serif italic text-black/90 leading-relaxed border-l-2 border-[#A8201A] pl-4">
                      {founder.quote}
                    </blockquote>

                    <p className="text-sm text-black/75 leading-relaxed font-light">
                      {founder.bio}
                    </p>

                    <div className="space-y-3 pt-2">
                      <span className="text-[11px] uppercase font-mono tracking-widest text-[#A8201A] font-bold block">
                        Core Practice Areas:
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {founder.specialties.map((spec) => (
                          <span
                            key={spec}
                            className="text-xs px-2.5 py-1 bg-[#141414] text-white/90 font-mono uppercase tracking-wider"
                          >
                            {spec}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-[#EAE8E3]/60 border-t border-black/10 flex items-center justify-between text-xs font-mono uppercase tracking-wider text-black/70">
                  <span>Renov8 Syndicate Partner</span>
                  <span className="text-[#A8201A] font-bold">13+ Years Active</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* =========================================================
            SECTION 4: MEET THE TEAM (ATELIER MULTIDISCIPLINARY GRID)
            ========================================================= */}
        <section className="space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-black/15 pb-8">
            <div>
              <span className="text-xs uppercase font-mono tracking-[0.3em] text-[#A8201A] font-bold block mb-2">
                03 / Multidisciplinary Atelier
              </span>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold uppercase tracking-tight">
                MEET THE TEAM.
              </h2>
            </div>
            <p className="text-xs md:text-sm text-black/60 max-w-md font-mono uppercase tracking-wider">
              The architects, BIM computational designers, MEP engineers, and master joiners driving each project.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="group bg-white border border-black/10 hover:border-[#A8201A] transition-all duration-300 flex flex-col overflow-hidden shadow-sm"
              >
                {/* Monochrome Portrait */}
                <div className="relative aspect-[3/4] overflow-hidden bg-[#141414]">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover filter grayscale contrast-110 group-hover:scale-105 group-hover:filter-none transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  
                  <span className="absolute top-3 left-3 bg-[#141414]/90 backdrop-blur-sm text-white text-[10px] font-mono px-2 py-0.5 border border-white/10">
                    /{member.id}
                  </span>

                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#A8201A] block font-bold">
                      {member.credential}
                    </span>
                    <h4 className="text-lg font-bold uppercase tracking-tight text-white leading-tight">
                      {member.name}
                    </h4>
                  </div>
                </div>

                {/* Details */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-black block mb-1">
                      {member.title}
                    </span>
                    <p className="text-xs text-black/65 font-light leading-relaxed">
                      {member.specialty}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-black/10 flex items-center justify-between text-[10px] font-mono uppercase text-black/45">
                    <span>Atelier Islamabad</span>
                    <span className="text-[#A8201A] font-bold">In-House</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* =========================================================
            SECTION 5: WORKING PRINCIPLES & TECTONIC STANDARDS
            ========================================================= */}
        <section className="space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-black/15 pb-8">
            <div>
              <span className="text-xs uppercase font-mono tracking-[0.3em] text-[#A8201A] font-bold block mb-2">
                04 / Working Principles
              </span>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold uppercase tracking-tight">
                STANDARDS THAT SHAPE EVERY SPACE.
              </h2>
            </div>
            <p className="text-xs md:text-sm text-black/60 max-w-sm font-mono uppercase tracking-wider">
              Discipline before demolition · Zero variation surprises · Single accountability
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {workingPrinciples.map((p) => (
              <div
                key={p.index}
                className="bg-white p-8 border border-black/10 hover:border-[#A8201A] transition-colors flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-black/10 pb-3">
                    <span className="font-mono text-xs font-bold text-[#A8201A]">/{p.index}</span>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-black/40">
                      Standard
                    </span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold uppercase tracking-tight text-[#141414]">
                      {p.title}
                    </h3>
                    <span className="text-xs font-serif italic text-black/60 block mt-0.5">
                      {p.subtitle}
                    </span>
                  </div>
                  <p className="text-xs text-black/75 leading-relaxed font-light">
                    {p.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-black/10 text-[10px] font-mono uppercase tracking-widest text-[#A8201A] font-semibold">
                  Guaranteed Deliverable
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* =========================================================
            SECTION 6: CONFIDENTIALITY & DIPLOMATIC ENCLAVE PROTOCOL
            ========================================================= */}
        <section className="bg-[#141414] text-white p-8 md:p-14 border border-white/10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#A8201A]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3 text-xs uppercase font-mono tracking-widest text-[#A8201A] font-bold">
                <Lock className="w-4 h-4" />
                <span>Discretion, Vetting &amp; Security Protocol</span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight text-white leading-tight">
                CONFIDENTIALITY &amp; <br />
                <span className="font-serif italic font-normal text-white/90">
                  Access-controlled delivery in Islamabad.
                </span>
              </h2>

              <p className="text-sm md:text-base text-white/75 leading-relaxed font-light">
                Renov8 has extensive experience delivering turnkey architectural renovations across Islamabad,
                including high-security and diplomatic environments where discretion, non-disclosure terms,
                and police-vetted personnel are strictly mandatory.
              </p>

              <p className="text-xs sm:text-sm text-white/60 leading-relaxed font-light">
                All 3D laser point-cloud scans, architectural drawings, and client identity details are stored
                under strict NDA encryption. Our operational track record spans residences in and around the
                Diplomatic Enclave, VIP estates in Sector E-7, F-6, F-7, and corporate executive suites.
              </p>
            </div>

            <div className="lg:col-span-5 bg-[#1f1f1f] border border-white/15 p-8 space-y-6">
              <span className="text-[10px] uppercase font-mono tracking-widest text-white/50 block">
                Municipal &amp; Security Compliance Checklist
              </span>

              <ul className="space-y-3.5 text-xs text-white/85">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#A8201A] shrink-0 mt-0.5" />
                  <span>CDA Directorate Form A1 &amp; Form A2 approval processing</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#A8201A] shrink-0 mt-0.5" />
                  <span>DHA Islamabad &amp; Rawalpindi Building Control liaison</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#A8201A] shrink-0 mt-0.5" />
                  <span>Police-vetted resident site engineers with Special Branch verification</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#A8201A] shrink-0 mt-0.5" />
                  <span>Diplomatic Enclave security pass and vehicle entry management</span>
                </li>
              </ul>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <a
                  href="https://share.google/rxzJz24oNNs7Gnnw8"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-xs uppercase font-mono tracking-wider text-[#A8201A] hover:text-white transition-colors"
                >
                  <span>Verify Renov8 on Google Profile</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
                <span className="text-[10px] font-mono text-white/40">Verified Business</span>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            SECTION 7: STUDIO METRICS & BY THE NUMBERS
            ========================================================= */}
        <section className="bg-white border border-black/15 p-8 md:p-14">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-6 border-b border-black/10">
            <div>
              <span className="text-xs uppercase font-mono tracking-[0.3em] text-[#A8201A] font-bold block mb-1">
                05 / Verified Track Record
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold uppercase tracking-tight">
                STUDIO IN NUMBERS.
              </h3>
            </div>
            <p className="text-xs text-black/55 font-mono uppercase tracking-wider">
              13+ Years of Continuous Practice in Pakistan &amp; International Projects
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 divide-y sm:divide-y-0 sm:divide-x divide-black/10">
            {RENO_STATS.map((s, idx) => (
              <div key={s.label} className={idx > 0 ? 'sm:pl-8 pt-6 sm:pt-0' : ''}>
                <div className="text-4xl md:text-6xl font-serif italic text-[#141414] mb-2 tracking-tight">
                  {s.value}
                  <span className="text-[#A8201A]">{s.suffix}</span>
                </div>
                <div className="text-xs uppercase tracking-[0.2em] text-[#A8201A] font-bold mb-1">
                  {s.label}
                </div>
                <p className="text-xs text-black/65 leading-relaxed font-light">{s.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* =========================================================
            SECTION 8: INITIATE BRIEF & STUDIO CONSULTATION CTA
            ========================================================= */}
        <section className="bg-[#141414] text-white p-10 md:p-16 border border-white/10 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs uppercase font-mono tracking-[0.25em] text-[#A8201A] font-bold block">
              Consultation &amp; Architectural Brief
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight text-white leading-tight">
              Ready to reimagine your space?
            </h2>
            <p className="text-sm sm:text-base text-white/70 font-light leading-relaxed">
              Visit our Blue Area Islamabad atelier for a physical material review, or initiate your itemized
              5-step BOQ study online.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0 w-full lg:w-auto">
            <Link
              href="/planner"
              className="w-full sm:w-auto text-center px-8 py-4 bg-white/10 border border-white/20 text-white text-xs uppercase tracking-[0.2em] font-mono hover:bg-white hover:text-black transition-colors"
            >
              Interactive BOQ Planner
            </Link>
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#A8201A] text-white px-8 py-4 text-xs uppercase tracking-[0.25em] font-semibold hover:bg-white hover:text-black transition-colors"
            >
              <span>Initiate Studio Brief</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
