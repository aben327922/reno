import React from 'react';
import Link from 'next/link';
import { ArrowRight, ShieldCheck, MapPin, Compass } from 'lucide-react';
import { RENO_STATS, APPROACH_PILLARS } from '@/data/renoData';

export default function StudioPage() {
  return (
    <main className="bg-[#F6F5F2] min-h-screen pt-32 pb-24 px-6 md:px-12">
      <div className="max-w-[1440px] mx-auto space-y-24">
        {/* Intro */}
        <div className="max-w-4xl space-y-6">
          <span className="text-xs uppercase tracking-[0.3em] text-[#A8201A] block mb-3">
            Alvie &amp; Rao Architecture &amp; Renovation Syndicate
          </span>
          <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-tight">
            THE STUDIO
          </h1>
          <p className="text-2xl md:text-3xl font-light leading-relaxed text-[#141414]">
            Founded in 2013, <span className="font-semibold">RENO</span> was established to solve
            the fragmentation of traditional Pakistani construction—bringing architectural design,
            itemized BOQ engineering, and 14 specialist trades under one accountable roof.
          </p>
        </div>

        {/* 4 Architectural Methodologies */}
        <section className="border-t border-black/15 pt-16">
          <span className="text-xs uppercase tracking-[0.3em] text-[#A8201A] block mb-8">
            Our Architectural Methodology
          </span>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Context & Site Reading',
                desc: 'Analyzing micro-climate, sun path, local vernacular, and user rituals before drawing a single line.',
              },
              {
                step: '02',
                title: 'Spatial Tectonics',
                desc: 'Sculpting mass, void, and natural daylight through physical scale models and 3D BIM simulation.',
              },
              {
                step: '03',
                title: 'Material Honesty',
                desc: 'Selecting enduring stone, brick, timber, and architectural concrete that age gracefully with place.',
              },
              {
                step: '04',
                title: 'Precision Execution',
                desc: 'End-to-end site supervision ensuring engineering detailing matches the original design intent.',
              },
            ].map((item) => (
              <div key={item.step} className="bg-white p-8 border border-black/10 space-y-4">
                <span className="font-mono text-xs text-[#A8201A]">{item.step}</span>
                <h3 className="text-xl font-bold uppercase tracking-tight">{item.title}</h3>
                <p className="text-sm text-black/65 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Studio Commitments */}
        <section className="bg-white border border-black/10 p-8 md:p-14">
          <div className="max-w-3xl mb-12">
            <span className="text-xs uppercase tracking-[0.25em] text-[#A8201A] font-semibold block mb-2">
              Execution Standards
            </span>
            <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tight">
              BUILT FOR HOW PAKISTAN LIVES.
            </h2>
            <p className="text-base text-black/70 leading-relaxed mt-4">
              We operate across Islamabad’s established CDA sectors (F-6, F-7, E-7, G-series), DHA,
              and Bahria Town with strict adherence to local building bylaws, access protocols, and
              privacy standards.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {APPROACH_PILLARS.map((p) => (
              <div key={p.index} className="p-6 bg-[#F6F5F2] border border-black/10 space-y-3">
                <span className="font-mono text-xs text-[#A8201A]">/{p.index}</span>
                <h3 className="text-lg font-bold uppercase tracking-tight">{p.title}</h3>
                <p className="text-xs text-black/65 leading-relaxed">{p.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Stats Bar */}
        <section className="bg-[#141414] text-white p-12 md:p-16 grid grid-cols-2 lg:grid-cols-4 gap-10">
          {RENO_STATS.map((s) => (
            <div key={s.label}>
              <div className="text-4xl md:text-6xl font-serif italic text-white mb-2">
                {s.value}
                {s.suffix}
              </div>
              <div className="text-xs uppercase tracking-[0.22em] text-[#A8201A] mb-1">
                {s.label}
              </div>
              <p className="text-xs text-white/60 leading-relaxed">{s.description}</p>
            </div>
          ))}
        </section>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-between border-t border-black/15 pt-12 gap-6">
          <div>
            <h3 className="text-2xl font-bold uppercase tracking-tight">
              Ready to start your project brief?
            </h3>
            <p className="text-sm text-black/60 mt-1">
              Visit our Blue Area Islamabad studio or request an itemized preliminary BOQ.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 bg-[#141414] text-white px-8 py-4 text-xs uppercase tracking-[0.25em] font-semibold hover:bg-[#A8201A] transition-colors"
          >
            <span>Initiate Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </main>
  );
}
