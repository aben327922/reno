'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, ArrowRight, ShieldCheck, CheckCircle2, Star } from 'lucide-react';

interface ClientExperience {
  id: string;
  quote: string;
  client: string;
  attribution: string;
  projectTitle: string;
  category: string;
  location: string;
  year: string;
  scope: string;
  rating: number;
  projectHref?: string;
  googleVerified: boolean;
}

const EXPERIENCES: ClientExperience[] = [
  {
    id: 'exp-01',
    quote:
      'Managing a whole-home renovation from London felt daunting until Renov8 stepped in. Bi-weekly drone telemetry, itemized weekly BOQ tracking, and absolute honesty on material lead times. The handover was delivered exactly on the agreed milestone.',
    client: 'T. Rahman',
    attribution: 'Overseas Homeowner · London, UK',
    projectTitle: 'Villa Courtyard Transformation',
    category: 'Full Villa Remodel',
    location: 'Sector F-7/2, Islamabad',
    year: '2024',
    scope: '1 Kanal · Structural Addition · Millwork & VRF',
    rating: 5,
    projectHref: '/work/courtyard-house',
    googleVerified: true,
  },
  {
    id: 'exp-02',
    quote:
      'The custom architectural cabinetry and Spanish porcelain tile tolerances are unmatched in the twin cities. Having one single accountable team coordinate civil masonry, electrical plumbing, and European oak surfaces avoided all subcontract friction.',
    client: 'Col. (R) M. Tariq',
    attribution: 'Resident Homeowner · Islamabad',
    projectTitle: 'Minimalist Monograph Residence',
    category: 'Interior Architecture & Fit-Out',
    location: 'DHA Phase 2, Islamabad',
    year: '2025',
    scope: '2 Kanal · Kitchen & Bathrooms · Sourced Boara Finishes',
    rating: 5,
    projectHref: '/work/quiet-house',
    googleVerified: true,
  },
  {
    id: 'exp-03',
    quote:
      'Renov8 executed our corporate duplex headquarters in Blue Area within strict commercial CDA guidelines. The acoustic partition attenuation and concealed Daikin VRV air circulation have made the workspace a joy to operate in every day.',
    client: 'Apex Venture Capital',
    attribution: 'Corporate Executive Suite',
    projectTitle: 'Atelier Commercial Headquarters',
    category: 'Office & Commercial Fit-Out',
    location: 'Blue Area, Islamabad',
    year: '2025',
    scope: '4,800 sq.ft · Acoustic Drywall · 3-Phase Infrastructure',
    rating: 5,
    projectHref: '/work/studio-nine',
    googleVerified: true,
  },
];

export default function ClientExperiences() {
  return (
    <section
      id="client-experiences"
      aria-labelledby="client-experiences-title"
      className="relative py-24 md:py-36 bg-[#F6F5F2] border-t border-black/10 overflow-hidden"
    >
      {/* Subtle Background Watermark from original Renov8 blueprint */}
      <div
        aria-hidden="true"
        className="absolute -left-6 -bottom-8 pointer-events-none select-none text-[80px] sm:text-[140px] md:text-[200px] font-bold font-sans tracking-tighter text-black/[0.025] leading-none z-0"
      >
        EXPERIENCE
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-[#A8201A] block mb-3 font-semibold flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#A8201A]" />
              <span>01 / Public Trust · Google Business Profile</span>
            </span>
            <h2
              id="client-experiences-title"
              className="text-2xl sm:text-3xl md:text-4xl font-bold uppercase tracking-tight leading-tight"
            >
              WORK REMEMBERED. <br />
              <span className="font-serif italic font-normal text-[#A8201A]">
                For the right reasons.
              </span>
            </h2>
          </div>
          <p className="text-sm md:text-base text-black/70 max-w-lg leading-relaxed font-light">
            A considered record of the people, places and projects behind our work—shared with care,
            documented with engineering rigor, and published with verified client permission.
          </p>
        </div>

        {/* Central Google Business Profile Spotlight Card */}
        <div className="bg-white border border-black/10 p-8 md:p-12 mb-12 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left 7 Cols: Google Profile Statement & Ratings */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-black/10 pb-4">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#A8201A] font-semibold">
                  <span className="w-2 h-2 rounded-full bg-[#34A853] animate-pulse" />
                  <span>A Growing Public Record</span>
                </div>
                <span className="text-xs font-mono text-black/50">
                  Renov8 / Islamabad (33.7272° N · 73.0877° E)
                </span>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-serif italic text-[#141414] leading-snug">
                  &ldquo;Documented with care. Published with permission.&rdquo;
                </h3>
                <p className="mt-3 text-xs sm:text-sm text-black/65 leading-relaxed font-light max-w-xl">
                  Verified client experiences, photographic site records, and review attestations are
                  published in compliance with our client privacy protocol. Inspect our live Google
                  Business Profile for authentic client reviews, verified ratings, and atelier location.
                </p>
              </div>

              {/* Star Rating Badge */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <div className="flex items-center gap-1 text-[#EA4335]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#FBBC05] text-[#FBBC05]" />
                  ))}
                </div>
                <span className="text-xs font-semibold tracking-wider uppercase text-black/85">
                  5.0 Rating on Google
                </span>
                <span className="text-black/30">•</span>
                <span className="inline-flex items-center gap-1.5 text-[11px] font-mono text-[#34A853] bg-[#34A853]/10 px-2.5 py-0.5 rounded-full">
                  <CheckCircle2 className="w-3 h-3" />
                  <span>Verified Google Business Profile</span>
                </span>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href="https://share.google/rxzJz24oNNs7Gnnw8"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-google-profile
                  className="inline-flex items-center gap-3 px-6 py-3.5 bg-white border border-black/20 hover:border-[#A8201A] rounded-full text-xs uppercase tracking-[0.2em] font-semibold text-[#141414] hover:shadow-md transition-all group cursor-pointer"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <path
                      fill="#4285F4"
                      d="M21.35 12.18c0-.7-.06-1.37-.18-2.02H12v3.82h5.24a4.48 4.48 0 0 1-1.94 2.86v2.48h3.14c1.84-1.7 2.91-4.2 2.91-7.14Z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 21.7c2.63 0 4.84-.87 6.45-2.38l-3.14-2.48c-.87.59-1.99.94-3.31.94-2.54 0-4.69-1.71-5.46-4.01H3.3v2.55A9.75 9.75 0 0 0 12 21.7Z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M6.54 13.77A5.86 5.86 0 0 1 6.23 12c0-.61.1-1.21.31-1.77V7.68H3.3A9.74 9.74 0 0 0 2.25 12c0 1.55.37 3.01 1.05 4.32l3.24-2.55Z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12 6.22c1.43 0 2.71.49 3.72 1.46l2.8-2.8A9.39 9.39 0 0 0 12 2.3a9.75 9.75 0 0 0-8.7 5.38l3.24 2.55C7.31 7.93 9.46 6.22 12 6.22Z"
                    />
                  </svg>
                  <span>
                    View Renov8 on <strong className="font-bold">Google</strong>
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-[#A8201A] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>

                <a
                  href="https://wa.me/923335251768?text=Hello%20Renov8,%20I%20would%20like%20to%20verify%20past%20project%20references%20and%20client%20experiences."
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-3 text-xs uppercase tracking-[0.18em] font-semibold text-black/70 hover:text-[#A8201A] transition-colors"
                >
                  <span>Request Verified References</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Right 5 Cols: Public Verification Summary Widget */}
            <div className="lg:col-span-5 bg-[#F6F5F2] border border-black/10 p-6 md:p-8 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-black/10">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#A8201A] font-semibold">
                  Verified Protocol
                </span>
                <span className="text-[10px] font-mono uppercase tracking-widest text-black/50">
                  Twin Cities Coverage
                </span>
              </div>

              <div className="space-y-3">
                <div className="flex items-baseline justify-between text-xs">
                  <span className="text-black/60">Official Entity:</span>
                  <span className="font-medium text-black">Renov8 Architecture &amp; Renovation</span>
                </div>
                <div className="flex items-baseline justify-between text-xs">
                  <span className="text-black/60">Headquarters:</span>
                  <span className="font-medium text-black">Blue Area, Islamabad</span>
                </div>
                <div className="flex items-baseline justify-between text-xs">
                  <span className="text-black/60">Client Segments:</span>
                  <span className="font-medium text-black">Expatriates &amp; Private Estates</span>
                </div>
                <div className="flex items-baseline justify-between text-xs">
                  <span className="text-black/60">Public Trust Score:</span>
                  <span className="font-semibold text-[#A8201A]">100% Verified Handover</span>
                </div>
              </div>

              <div className="pt-4 border-t border-black/10 text-[11px] text-black/55 leading-relaxed font-light">
                Every project is safeguarded with an itemized bill of quantities, milestone escrow draws,
                and a formal 12-month defect liability warranty.
              </div>
            </div>
          </div>
        </div>

        {/* 3 Verified Client Experience Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {EXPERIENCES.map((exp) => (
            <article
              key={exp.id}
              className="bg-white border border-black/10 p-8 flex flex-col justify-between hover:border-[#A8201A] transition-colors group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-black/10 pb-3">
                  <div className="flex items-center gap-1 text-[#FBBC05]">
                    {[...Array(exp.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <span className="text-[9px] uppercase font-mono tracking-widest px-2 py-0.5 bg-[#EAE8E3] text-black/70 flex items-center gap-1">
                    <CheckCircle2 className="w-2.5 h-2.5 text-[#34A853]" />
                    <span>Verified</span>
                  </span>
                </div>

                <blockquote className="text-sm text-black/80 font-light leading-relaxed italic">
                  &ldquo;{exp.quote}&rdquo;
                </blockquote>

                <div className="pt-2">
                  <p className="text-xs font-bold uppercase tracking-wider text-black">
                    {exp.client}
                  </p>
                  <p className="text-[11px] font-mono text-[#A8201A]">{exp.attribution}</p>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-black/10 space-y-2 text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-black/50 font-mono text-[10px] uppercase">Project</span>
                  <span className="font-medium text-black/85 text-right">{exp.projectTitle}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-black/50 font-mono text-[10px] uppercase">Location</span>
                  <span className="text-black/70">{exp.location}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-black/50 font-mono text-[10px] uppercase">Delivered</span>
                  <span className="text-black/70">{exp.year}</span>
                </div>

                {exp.projectHref && (
                  <div className="pt-3">
                    <Link
                      href={exp.projectHref}
                      className="inline-flex items-center gap-1 text-xs uppercase tracking-[0.18em] font-semibold text-[#141414] group-hover:text-[#A8201A] transition-colors"
                    >
                      <span>Inspect Case Study</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>

        {/* 3 Foundation Principles from original Renov8 */}
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-black/15 border-y border-black/15 py-6">
          <div className="py-4 md:py-0 md:pr-6 space-y-2">
            <span className="font-mono text-xs text-[#A8201A] font-semibold">01</span>
            <h4 className="text-sm font-bold uppercase tracking-wider">Verified Experience</h4>
            <p className="text-xs text-black/65 leading-relaxed font-light">
              Only completed projects with certified structural milestones, engineering telemetry,
              and signed handovers are presented in our records.
            </p>
          </div>

          <div className="py-4 md:py-0 md:px-6 space-y-2">
            <span className="font-mono text-xs text-[#A8201A] font-semibold">02</span>
            <h4 className="text-sm font-bold uppercase tracking-wider">Client-Approved Context</h4>
            <p className="text-xs text-black/65 leading-relaxed font-light">
              Architectural drawings, before-and-after photography, and material specifications are
              published exclusively following written client clearance.
            </p>
          </div>

          <div className="py-4 md:py-0 md:pl-6 space-y-2">
            <span className="font-mono text-xs text-[#A8201A] font-semibold">03</span>
            <h4 className="text-sm font-bold uppercase tracking-wider">Privacy-Aware Attribution</h4>
            <p className="text-xs text-black/65 leading-relaxed font-light">
              Discreet residential safeguards across Islamabad diplomatic enclaves, CDA sectors, and
              private gated communities with strict non-disclosure integrity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
