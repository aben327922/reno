import React from 'react';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight, ShieldCheck, MapPin, Compass, Lock, CheckCircle2 } from 'lucide-react';
import { RENO_STATS, APPROACH_PILLARS } from '@/data/renoData';

export default function StudioPage() {
  return (
    <main className="bg-[#F6F5F2] min-h-screen pt-32 pb-24 px-6 md:px-12 text-[#141414]">
      <div className="max-w-[1440px] mx-auto space-y-28">
        {/* Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-8 space-y-6">
            <span className="text-xs uppercase tracking-[0.3em] text-[#A8201A] block mb-3 font-semibold">
              Renov8 Architecture &amp; Renovation Syndicate · Est. 2013
            </span>
            <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold uppercase tracking-tight leading-[0.93]">
              THE STUDIO. <br />
              <span className="font-serif italic font-normal text-black/80">One accountable direction.</span>
            </h1>
            <p className="text-2xl md:text-3xl font-light leading-relaxed text-[#141414] pt-2">
              Founded in 2013 in Islamabad, <span className="font-semibold">Renov8</span> was established
              to eliminate the chaos of traditional subcontracting—bringing architectural design,
              itemized BOQ engineering, and 14 specialist trades under one accountable roof.
            </p>
          </div>

          <div className="lg:col-span-4 bg-[#141414] text-white p-8 space-y-4">
            <span className="text-[10px] uppercase font-mono tracking-widest text-[#A8201A] block">
              13+ Years Serving Pakistan
            </span>
            <p className="text-lg font-serif italic text-white/90">
              &ldquo;Renovation should feel considered, not chaotic.&rdquo;
            </p>
            <p className="text-xs text-white/65 leading-relaxed font-light border-t border-white/10 pt-4">
              We connect structural engineering, fine joinery, and interior finishing into one cohesive
              handover for homes, executive workplaces, and residential estates.
            </p>
          </div>
        </div>

        {/* Visual Pair Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center border-y border-black/15 py-12">
          <div className="md:col-span-7">
            <div className="relative aspect-[16/10] overflow-hidden bg-black">
              <img
                src="/images/concepts/material-study.webp"
                alt="Architectural drawings and material samples arranged for design review"
                className="w-full h-full object-cover"
              />
              <span className="absolute bottom-4 left-4 bg-[#141414]/90 backdrop-blur-md text-white text-[10px] font-mono uppercase tracking-widest px-3 py-1.5 border border-white/10">
                Studio Archives · Islamabad
              </span>
            </div>
          </div>

          <div className="md:col-span-5 space-y-6 md:pl-6">
            <span className="text-xs uppercase tracking-[0.25em] text-[#A8201A] font-semibold block">
              Why We Exist
            </span>
            <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tight leading-snug">
              RENOVATION SHOULD FEEL CONSIDERED.
            </h2>
            <p className="text-sm md:text-base text-black/75 leading-relaxed font-light">
              That connection matters. A layout decision affects lighting. Lighting affects ceilings.
              Ceilings affect air-conditioning ducting. By resolving the junctions early through BIM
              and physical material swatches, the finished space feels intentional and the journey
              becomes transparent.
            </p>
            <div className="pt-2">
              <span className="text-xs font-mono uppercase tracking-widest text-black/45 block">
                33.7272° N · 73.0877° E (Blue Area HQ)
              </span>
            </div>
          </div>
        </div>

        {/* 4 Working Principles */}
        <section className="space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-[#A8201A] block mb-2 font-semibold">
                Working Principles
              </span>
              <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight">
                STANDARDS THAT SHAPE EVERY PROJECT.
              </h2>
            </div>
            <p className="text-xs text-black/55 max-w-sm uppercase font-mono tracking-wider">
              Discipline before demolition · Zero variation surprises
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                index: '01',
                title: 'Make It Clear',
                desc: 'Scope, decisions, itemized unit rates, and draw schedules must be visible in a written BOQ—not buried in casual site conversations.'
              },
              {
                index: '02',
                title: 'Design The Junctions',
                desc: 'Quality is decided where different trades meet: marble to wood, plaster to aluminium, MEP conduit to ceiling. Every junction has an owner.'
              },
              {
                index: '03',
                title: 'Build For Real Life',
                desc: 'Spaces must withstand Islamabad climate extremes, monsoon downpours, daily wear, and maintenance—not just look good on photoshoot day.'
              },
              {
                index: '04',
                title: 'Finish Completely',
                desc: 'Hydrostatic pressure testing, 100-point snagging audits, and a 12-month formal defect liability period are standard deliverables.'
              }
            ].map((p) => (
              <div key={p.index} className="bg-white p-8 border border-black/10 space-y-4 hover:border-[#A8201A] transition-colors">
                <span className="font-mono text-xs font-bold text-[#A8201A]">/{p.index}</span>
                <h3 className="text-xl font-bold uppercase tracking-tight">{p.title}</h3>
                <p className="text-xs text-black/65 leading-relaxed font-light">{p.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Confidentiality & Diplomatic Enclave Protocol */}
        <section className="bg-[#141414] text-white p-8 md:p-14 border border-white/10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-3 text-xs uppercase font-mono tracking-widest text-[#A8201A]">
                <Lock className="w-4 h-4" />
                <span>Discretion &amp; Trust</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight text-white leading-tight">
                CONFIDENTIALITY &amp; <br />
                <span className="font-serif italic font-normal text-white/90">
                  Access-controlled delivery.
                </span>
              </h2>
              <p className="text-sm md:text-base text-white/70 leading-relaxed font-light">
                Renov8 has extensive experience delivering turnkey architectural projects across Islamabad,
                including access-controlled and security-sensitive locations where privacy, personnel vetting,
                and strict site protocol are mandatory.
              </p>
              <p className="text-xs text-white/50 leading-relaxed font-light">
                Project drawings, 3D point cloud scans, and client personal records are handled under strict
                non-disclosure terms. Our track record spans diplomatic residences in and around the Diplomatic
                Enclave, private villas in Sector E-7 and F-6, and corporate headquarters.
              </p>
            </div>

            <div className="lg:col-span-5 bg-[#1f1f1f] border border-white/15 p-8 space-y-5">
              <span className="text-[10px] uppercase font-mono tracking-widest text-white/50 block">
                Municipal &amp; Sector Compliance
              </span>
              <ul className="space-y-3 text-xs text-white/80">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#A8201A] shrink-0 mt-0.5" />
                  <span>CDA Building Directorate Form A1 &amp; A2 approval processing</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#A8201A] shrink-0 mt-0.5" />
                  <span>DHA Islamabad &amp; Rawalpindi Building Control liaison</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#A8201A] shrink-0 mt-0.5" />
                  <span>Vetted resident engineering staff with police clearance</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#A8201A] shrink-0 mt-0.5" />
                  <span>Diplomatic Enclave security pass and vehicle entry management</span>
                </li>
              </ul>

              <div className="pt-2 border-t border-white/10">
                <a
                  href="https://share.google/rxzJz24oNNs7Gnnw8"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-xs uppercase font-mono tracking-wider text-[#A8201A] hover:text-white transition-colors"
                >
                  <span>Verify Renov8 on Google Profile</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Bar */}
        <section className="bg-white border border-black/10 p-10 md:p-14">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 divide-y sm:divide-y-0 sm:divide-x divide-black/10">
            {RENO_STATS.map((s, idx) => (
              <div key={s.label} className={idx > 0 ? 'sm:pl-8 pt-6 sm:pt-0' : ''}>
                <div className="text-4xl md:text-6xl font-serif italic text-[#141414] mb-2">
                  {s.value}
                  {s.suffix}
                </div>
                <div className="text-xs uppercase tracking-[0.22em] text-[#A8201A] font-semibold mb-1">
                  {s.label}
                </div>
                <p className="text-xs text-black/60 leading-relaxed font-light">{s.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Consultation Trigger */}
        <div className="flex flex-col sm:flex-row items-center justify-between border-t border-black/15 pt-12 gap-6">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold uppercase tracking-tight">
              Ready to discuss your property?
            </h3>
            <p className="text-sm text-black/60 mt-1 font-light">
              Visit our Blue Area Islamabad studio or request an itemized preliminary BOQ study.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 bg-[#141414] text-white px-8 py-4 text-xs uppercase tracking-[0.25em] font-semibold hover:bg-[#A8201A] transition-colors shrink-0"
          >
            <span>Initiate Studio Brief</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </main>
  );
}
