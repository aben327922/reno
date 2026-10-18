'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Search } from 'lucide-react';
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
    <main className="bg-[#F6F5F2] min-h-screen pt-32 pb-24 px-6 md:px-12">
      <div className="max-w-[1440px] mx-auto">
        <div className="max-w-4xl mb-12">
          <span className="text-xs uppercase tracking-[0.3em] text-[#A8201A] block mb-3">
            Archive 2013 — 2026
          </span>
          <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-tight mb-6">
            OUR WORK
          </h1>
          <p className="text-lg md:text-xl text-black/70 font-light leading-relaxed">
            Exploring how RENOV8 brings structure, materiality (Stone · Oak · Steel) and daily living
            into one cohesive architectural vision across Islamabad.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="flex flex-col md:flex-row justify-between gap-6 pb-10 border-b border-black/15 mb-12">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2.5 text-xs uppercase tracking-[0.2em] border transition-colors ${
                  filter === cat
                    ? 'bg-[#141414] text-white border-[#141414]'
                    : 'border-black/20 text-black/70 hover:border-black'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-black/40" />
            <input
              type="text"
              placeholder="Search by project, sector, material..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-black/20 text-sm focus:outline-none focus:border-[#141414]"
            />
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

                    <p className="text-xs uppercase tracking-wider text-black/50">
                      {project.location}
                    </p>

                    <p className="text-sm text-black/70 leading-relaxed pt-2 border-t border-black/10">
                      {project.summary}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </main>
  );
}
