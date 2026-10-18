'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import {
  RENO_PILLARS,
  RENO_PROJECTS,
  RENO_STATS,
  MARQUEE_ROW_1,
  MARQUEE_ROW_2,
  APPROACH_PILLARS,
} from '@/data/renoData';

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let current = 0;
    const duration = 1600;
    const stepTime = Math.max(Math.floor(duration / value), 20);
    const timer = setInterval(() => {
      current += Math.ceil(value / (duration / stepTime));
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(current);
      }
    }, stepTime);
    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span ref={ref} className="tabular-nums">
      {count}
      {suffix}
    </span>
  );
}

export default function HomePage() {
  const [activePillar, setActivePillar] = useState(RENO_PILLARS[1]); // Default showing Design & Finish
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = [
    'All',
    'Build & Transform',
    'Design & Finish',
    'Specialist Systems & Care',
  ];

  const filteredProjects =
    selectedCategory === 'All'
      ? RENO_PROJECTS
      : RENO_PROJECTS.filter((p) => p.category === selectedCategory);

  return (
    <main className="bg-[#F6F5F2] text-[#141414] overflow-x-hidden">
      {/* 1. HERO SECTION (Full-viewport architectural maquette aesthetic with real local hero render) */}
      <section className="relative h-screen min-h-[720px] w-full flex items-end overflow-hidden bg-[#141414]">
        {/* Architectural Background with Slow Ken Burns Scale */}
        <motion.div
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: 'easeOut' }}
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/hero/renov8-home-hero.webp')",
            filter: 'sepia(14%) contrast(96%) brightness(65%)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#141414]/90 via-[#141414]/35 to-transparent" />

        <div className="relative z-10 max-w-[1440px] w-full mx-auto px-6 md:px-12 pb-20 md:pb-28 grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-8"
          >
            <p className="text-xs uppercase tracking-[0.3em] text-white/80 mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#A8201A]" />
              <span>Islamabad · Pakistan — 14 Specialist Categories</span>
            </p>

            <h1 className="text-white text-5xl sm:text-7xl md:text-8xl font-bold uppercase tracking-tight leading-[0.94]">
              WE DON&apos;T JUST RENOVATE. <br />
              <span className="font-light italic font-serif text-white/90">WE REIMAGINE.</span>
            </h1>

            <p className="mt-6 text-white/85 text-base md:text-xl max-w-xl font-light leading-relaxed">
              Thoughtful interiors, precise construction and beautiful finishes, brought together by
              one experienced team.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-8">
              <Link
                href="/work"
                className="group inline-flex items-center gap-3 text-white text-sm md:text-base font-medium pb-2 border-b-2 border-white hover:border-[#A8201A] transition-colors"
              >
                <span>Explore our work</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform" />
              </Link>
              <Link
                href="/planner"
                className="group inline-flex items-center gap-3 text-white/85 hover:text-white text-sm md:text-base font-medium pb-2 border-b border-white/40 hover:border-[#A8201A] transition-colors"
              >
                <span>Launch PKR Cost Planner</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>

          {/* Floating Architectural Material Edit Card */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="lg:col-span-4 bg-[#141414]/85 backdrop-blur-md border border-white/15 p-6 text-white space-y-4"
          >
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#A8201A]">
                Material Edit
              </span>
              <span className="font-mono text-xs text-white/60">A—Z Turnkey</span>
            </div>
            <p className="text-lg font-serif italic tracking-wide text-white">Stone · Oak · Steel</p>
            <p className="text-xs text-white/65 leading-relaxed">
              Built around the way you live—combining architectural design thinking and hands-on
              civil and interior craft under one roof.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. WHO WE ARE SECTION ("ONE TEAM. EVERY DETAIL.") */}
      <section className="py-24 md:py-36 max-w-[1440px] mx-auto px-6 md:px-12 border-b border-black/10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          <div className="lg:col-span-4">
            <span className="text-xs uppercase tracking-[0.3em] text-[#A8201A] block mb-3">
              01 / Studio Ethos
            </span>
            <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight">
              WHO WE ARE
            </h2>
          </div>

          <div className="lg:col-span-8 space-y-8">
            <p className="text-2xl md:text-4xl font-light leading-[1.3] text-[#141414]">
              Founded in 2013, <span className="font-medium">Renov8</span> is a multidisciplinary
              architecture, renovation and turnkey build studio uniting 14 specialist trades under
              one roof.
            </p>
            <p className="text-base md:text-lg text-[#141414]/70 leading-relaxed max-w-2xl">
              Our work begins with context: the site, its people, its purpose and the way it will be
              experienced. We combine creative thinking with practical design decisions to create
              spaces that are functional, distinctive and built to endure.
            </p>
            <div>
              <Link
                href="/studio"
                className="group inline-flex items-center gap-3 text-xs uppercase tracking-[0.25em] font-semibold pb-2 border-b border-[#141414] hover:text-[#A8201A] hover:border-[#A8201A] transition-colors"
              >
                <span>Discover our studio</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>

        {/* 4 Execution Commitments Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {APPROACH_PILLARS.map((pillar) => (
            <article
              key={pillar.index}
              className="bg-white p-8 border border-black/10 hover:border-[#A8201A] transition-colors"
            >
              <span className="font-mono text-xs text-[#A8201A] block mb-4">
                /{pillar.index}
              </span>
              <h3 className="text-lg font-bold uppercase tracking-tight mb-2">
                {pillar.title}
              </h3>
              <p className="text-sm text-black/65 leading-relaxed">
                {pillar.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* 3. DESIGN ACROSS EVERY SCALE (Interactive 3-Pillar Switcher) */}
      <section className="py-24 md:py-36 bg-[#EAE8E3]">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-[#A8201A] block mb-3">
                02 / Multidisciplinary Practice
              </span>
              <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tight leading-none">
                DESIGN ACROSS EVERY SCALE.
              </h2>
            </div>
            <p className="text-sm md:text-base text-black/70 max-w-md leading-relaxed">
              From structural civil works and bespoke interiors to MEP engineering and landscape
              design, we create thoughtful spaces where form, function and context work as one.
            </p>
          </div>

          {/* 3 Pillar Selector Tabs */}
          <div className="grid grid-cols-1 md:grid-cols-3 border-y border-black/15">
            {RENO_PILLARS.map((pillar) => {
              const isActive = activePillar.id === pillar.id;
              return (
                <button
                  key={pillar.id}
                  onClick={() => setActivePillar(pillar)}
                  className={`py-6 px-6 text-left transition-all flex items-center justify-between border-b md:border-b-0 md:border-r last:border-r-0 border-black/15 ${
                    isActive
                      ? 'bg-[#141414] text-white'
                      : 'bg-transparent text-[#141414]/60 hover:text-[#141414] hover:bg-black/5'
                  }`}
                >
                  <span className="text-sm md:text-base font-semibold tracking-[0.2em] uppercase">
                    {pillar.title}
                  </span>
                  <span
                    className={`w-2 h-2 rounded-full ${
                      isActive ? 'bg-[#A8201A]' : 'bg-transparent'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Active Pillar Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activePillar.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.45 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-14 items-center"
            >
              <div className="lg:col-span-6 space-y-8">
                <h3 className="text-3xl md:text-4xl font-bold uppercase tracking-tight">
                  {activePillar.title}
                </h3>
                <p className="text-base md:text-lg text-black/75 leading-relaxed">
                  {activePillar.description}
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  {activePillar.subDisciplines.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 text-sm md:text-base font-serif italic text-black/85 border-b border-black/10 pb-3"
                    >
                      <span className="w-1.5 h-1.5 bg-[#A8201A] rounded-full shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="pt-4">
                  <Link
                    href="/services"
                    className="group inline-flex items-center gap-3 text-xs uppercase tracking-[0.25em] font-semibold py-4 px-7 bg-[#141414] text-white hover:bg-[#A8201A] transition-colors"
                  >
                    <span>{activePillar.linkText}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-6">
                <div className="relative aspect-[16/11] overflow-hidden bg-black group">
                  <img
                    src={activePillar.image}
                    alt={activePillar.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  {activePillar.videoUrl && (
                    <div className="absolute bottom-4 right-4 bg-[#141414]/90 text-white text-[10px] uppercase font-mono tracking-widest px-3 py-1 backdrop-blur-sm border border-white/10">
                      Craft in Motion
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* 4. SELECTED WORKS / CURATED PORTFOLIO GRID */}
      <section className="py-24 md:py-36 max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-14 gap-8">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-[#A8201A] block mb-3">
              03 / Selected Directions
            </span>
            <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tight">
              SPACES WITH A POINT OF VIEW.
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 text-xs uppercase tracking-[0.18em] transition-all border ${
                  selectedCategory === cat
                    ? 'bg-[#141414] text-white border-[#141414]'
                    : 'bg-transparent text-black/65 border-black/15 hover:border-black'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Bento Grid linking to /work/[id] */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.article
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.4 }}
                className="group flex flex-col justify-between bg-white border border-black/10 overflow-hidden"
              >
                <Link href={`/work/${project.id}`} className="block">
                  <div className="relative aspect-[4/3] overflow-hidden bg-[#141414]">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                    <span className="absolute top-3 left-3 bg-[#141414]/85 backdrop-blur-sm text-white text-[9px] uppercase tracking-[0.2em] px-2.5 py-1">
                      {project.category}
                    </span>
                    <span className="absolute top-3 right-3 font-mono text-xs text-white/80">
                      /{project.index}
                    </span>
                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div>
                      <p className="text-[10px] font-mono uppercase tracking-[0.18em] text-[#A8201A] mb-1">
                        {project.materialEdit}
                      </p>
                      <h3 className="text-lg font-bold uppercase tracking-tight group-hover:text-[#A8201A] transition-colors flex items-center justify-between">
                        <span>{project.title}</span>
                        <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </h3>
                    </div>

                    <p className="text-xs text-black/65 line-clamp-3 leading-relaxed">
                      {project.summary}
                    </p>
                  </div>
                </Link>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* 5. STUDIO METRICS (Hydrated IntersectionObserver Counters) */}
      <section className="py-24 bg-[#141414] text-white">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
            {RENO_STATS.map((stat, idx) => (
              <div key={stat.label} className={`${idx > 0 ? 'sm:pl-10 pt-8 sm:pt-0' : ''}`}>
                <div className="text-5xl md:text-7xl font-light tracking-tight text-white mb-4 font-serif italic">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <h3 className="text-xs uppercase tracking-[0.25em] text-[#A8201A] font-semibold mb-2">
                  {stat.label}
                </h3>
                <p className="text-sm text-white/60 leading-relaxed">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. DUAL-ROW OPPOSING INFINITE MARQUEE */}
      <section className="py-24 bg-[#F6F5F2] border-t border-black/10 overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 mb-12 flex items-baseline justify-between">
          <h2 className="text-3xl md:text-5xl uppercase tracking-tight">
            <span className="font-bold">OUR</span>{' '}
            <span className="font-serif italic font-normal text-[#A8201A]">CAPABILITIES</span>
          </h2>
          <span className="text-xs uppercase tracking-[0.25em] text-black/45">
            14 In-House Divisions · Stone · Oak · Steel
          </span>
        </div>

        {/* Row 1: Forward Marquee */}
        <div className="relative flex overflow-x-hidden border-y border-black/10 py-6 bg-white">
          <div className="animate-marquee whitespace-nowrap flex items-center gap-12 px-6">
            {[...MARQUEE_ROW_1, ...MARQUEE_ROW_1].map((item, i) => (
              <div
                key={`${item}-${i}`}
                className="inline-flex items-center gap-4 text-sm md:text-base uppercase tracking-[0.22em] font-semibold text-black/50 hover:text-[#141414] transition-colors cursor-default"
              >
                <span>{item}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#A8201A]" />
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Reverse Marquee */}
        <div className="relative flex overflow-x-hidden border-b border-black/10 py-6 bg-[#EAE8E3]/60">
          <div className="animate-marquee-reverse whitespace-nowrap flex items-center gap-12 px-6">
            {[...MARQUEE_ROW_2, ...MARQUEE_ROW_2].map((item, i) => (
              <div
                key={`${item}-${i}`}
                className="inline-flex items-center gap-4 text-sm md:text-base uppercase tracking-[0.22em] font-semibold text-black/50 hover:text-[#141414] transition-colors cursor-default"
              >
                <span>{item}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-black/30" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
