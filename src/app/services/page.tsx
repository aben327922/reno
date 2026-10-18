'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Compass, FileCheck2, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { RENO_SERVICES } from '@/data/renoData';

export default function ServicesPage() {
  const [openServiceId, setOpenServiceId] = useState<string>('construction-civil-works');

  return (
    <main className="bg-[#F6F5F2] min-h-screen pt-32 pb-24 px-6 md:px-12">
      <div className="max-w-[1440px] mx-auto">
        {/* Header */}
        <div className="max-w-4xl mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-[#A8201A] block mb-3">
            01 — 14 Specialist Categories
          </span>
          <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-tight mb-6">
            COMPLETE EXPERTISE.
          </h1>
          <p className="text-lg md:text-xl text-black/70 font-light leading-relaxed">
            From ground-up structural construction to fine oak joinery and concealed MEP engineering,
            explore all 14 in-house divisions brought together under one accountable standard.
          </p>
        </div>

        {/* 14 Services Matrix with Technical Telemetry Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 border-t border-black/15 pt-12">
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
                <p className="text-sm text-black/65 leading-relaxed">
                  Fewer handoffs, tighter cost control, and single-point project accountability across
                  Islamabad and Rawalpindi.
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
                  </div>
                </div>

                <div className="flex items-start gap-3.5 border-t border-black/10 pt-4">
                  <FileCheck2 className="w-5 h-5 text-[#A8201A] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-black/45 block">
                      Regulatory &amp; Contracts
                    </span>
                    <strong className="text-xs uppercase tracking-wider block">
                      CDA · DHA Regulatory &amp; Itemized BOQ Contracts
                    </strong>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 border-t border-black/10 pt-4">
                  <ShieldCheck className="w-5 h-5 text-[#A8201A] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-black/45 block">
                      Turnkey Assurance
                    </span>
                    <strong className="text-xs uppercase tracking-wider block">
                      12-Month Guarantee &amp; Handover Defect Audits
                    </strong>
                  </div>
                </div>
              </div>
            </div>
          </aside>

          {/* 14 Expandable Services List */}
          <div className="lg:col-span-8 divide-y divide-black/15 border-y border-black/15">
            {RENO_SERVICES.map((service) => {
              const isOpen = openServiceId === service.id;
              return (
                <div key={service.id} className="bg-transparent">
                  <button
                    onClick={() => setOpenServiceId(isOpen ? '' : service.id)}
                    className="w-full py-6 px-4 flex items-center justify-between text-left hover:bg-white/60 transition-colors group"
                  >
                    <div className="flex items-baseline gap-6">
                      <span className="font-mono text-sm text-[#A8201A] font-semibold">
                        {service.index}
                      </span>
                      <div>
                        <h3 className="text-xl md:text-2xl font-bold uppercase tracking-tight group-hover:text-[#A8201A] transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-xs text-black/55 mt-0.5">{service.tagline}</p>
                      </div>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 transition-transform duration-300 ${
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
                        className="overflow-hidden bg-white px-6 pb-8 pt-2"
                      >
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center pt-4 border-t border-black/10">
                          <div className="md:col-span-7 space-y-4">
                            <span className="text-[10px] font-mono uppercase tracking-[0.2em] bg-[#F6F5F2] px-2.5 py-1 text-black/70">
                              {service.index} / {service.pillar}
                            </span>
                            <p className="text-sm text-black/75 leading-relaxed">
                              {service.description}
                            </p>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
                              {service.deliverables.map((item) => (
                                <li
                                  key={item}
                                  className="text-xs text-black/80 flex items-center gap-2"
                                >
                                  <span className="w-1.5 h-1.5 bg-[#A8201A] shrink-0" />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                            <div className="pt-4 flex flex-wrap gap-4">
                              <a
                                href={`https://wa.me/923335251768?text=Hi%20RENO,%20I%20would%20like%20to%20request%20an%20itemized%20BOQ%20for%20${encodeURIComponent(
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

                          <div className="md:col-span-5">
                            <div className="relative aspect-[4/3] overflow-hidden bg-black">
                              <img
                                src={service.image}
                                alt={service.title}
                                className="w-full h-full object-cover"
                              />
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
      </div>
    </main>
  );
}
