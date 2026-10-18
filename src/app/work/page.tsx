'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Search, ArrowRight } from 'lucide-react';
import { RENO_PROJECTS } from '@/data/renoData';

export default function WorkPage() {
  const [filter, setFilter] = useState('All');
  const [search, setSearch] = useState('');

  const categories = [
    'All',
    'Build & Transform',
    'Design & Finish',
    'Specialist Systems & Care',
  ];

  const visibleProjects = RENO_PROJECTS.filter((p) => {
    const matchesCat = filter === 'All' || p.category === filter;
    const matchesQuery =
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.location.toLowerCase().includes(search.toLowerCase()) ||
      p.materialEdit.toLowerCase().includes(search.toLowerCase());
    return matchesCat && matchesQuery;
  });

  return (
    <main className="bg-[#F6F5F2] min-h-screen pt-32 pb-24 px-6 md:px-12 text-[#141414]">
      <div className="max-w-[1440px] mx-auto space-y-12">
        <div className="max-w-4xl space-y-4">
          <span className="text-xs uppercase tracking-[0.3em] text-[#A8201A] block font-semibold">
            Archive 2013 — 2026 · Selected Works
          </span>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold uppercase tracking-tight leading-[0.95]">
            SELECTED WORKS. <br />
            <span className="font-serif italic font-normal text-black/80 text-2xl sm:text-4xl md:text-5xl block mt-1">Built to endure.</span>
          </h1>
          <p className="text-lg md:text-xl text-black/70 font-light leading-relaxed">
            Exploring how Renov8 unites structure, materiality (Stone · Oak · Steel), and daily living
            into one cohesive architectural vision across Islamabad and Rawalpindi.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 pb-8 border-b border-black/15">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2.5 text-xs uppercase tracking-[0.2em] border transition-colors cursor-pointer ${
                  filter === cat
                    ? 'bg-[#141414] text-white border-[#141414]'
                    : 'bg-white border-black/20 text-black/70 hover:border-black'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-4 w-full md:w-auto">
            <span className="text-xs font-mono uppercase text-black/45 hidden sm:block">
              {visibleProjects.length} / {RENO_PROJECTS.length} Works
            </span>
            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-black/40" />
              <input
                type="text"
                placeholder="Search project, sector, material..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-white border border-black/20 text-sm focus:outline-none focus:border-[#141414]"
              />
            </div>
          </div>
        </div>

        {/* Works Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <AnimatePresence>
            {visibleProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="group bg-white border border-black/10 overflow-hidden"
              >
                <Link href={`/work/${project.id}`} className="block h-full">
                  <div className="relative aspect-[16/10] overflow-hidden bg-black">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <span className="absolute bottom-4 left-4 bg-[#141414] text-white text-[10px] uppercase tracking-[0.22em] px-3 py-1">
                      {project.category}
                    </span>
                    <span className="absolute top-4 right-4 bg-[#141414]/80 text-white font-mono text-xs px-2.5 py-1">
                      /{project.index}
                    </span>
                  </div>

                  <div className="p-8 space-y-4">
                    <div className="flex items-center justify-between text-xs font-mono uppercase tracking-[0.2em] text-[#A8201A]">
                      <span>{project.materialEdit}</span>
                      <span className="text-black/50">{project.year}</span>
                    </div>

                    <h2 className="text-2xl font-bold uppercase tracking-tight flex items-center justify-between group-hover:text-[#A8201A] transition-colors">
                      <span>{project.title}</span>
                      <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </h2>

                    <div className="flex items-center justify-between text-xs uppercase tracking-wider text-black/50 font-mono">
                      <span>{project.location}</span>
                      {project.dimensions && <span>{project.dimensions}</span>}
                    </div>

                    <p className="text-sm text-black/70 leading-relaxed pt-2 border-t border-black/10 font-light">
                      {project.summary}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Bottom Consultation Banner */}
        <section className="mt-16 p-8 md:p-12 bg-[#141414] text-white border border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-[#A8201A]">
              Commission a Project
            </span>
            <h3 className="text-2xl md:text-3xl font-bold uppercase tracking-tight text-white">
              Planning a residential or commercial build in Islamabad?
            </h3>
            <p className="text-xs text-white/65 max-w-xl font-light">
              We arrange comprehensive site reviews, 3D laser scans, and itemized preliminary BOQ studies across CDA sectors, DHA, and Bahria Town.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#A8201A] text-white px-7 py-3.5 text-xs uppercase tracking-[0.2em] font-semibold hover:bg-white hover:text-[#141414] transition-colors shrink-0"
          >
            <span>Book Site Feasibility</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </section>
      </div>
    </main>
  );
}
