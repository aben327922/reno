'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import {
  ArrowRight,
  ArrowUpRight,
  Play,
  Pause,
  Volume2,
  VolumeX,
  ShieldCheck,
  Camera,
  MessageSquare,
  FileCheck,
  ChevronDown,
} from 'lucide-react';
import {
  RENO_PILLARS,
  RENO_PROJECTS,
  RENO_STATS,
  MARQUEE_ROW_1,
  MARQUEE_ROW_2,
  APPROACH_PILLARS,
  REEL_CONCEPTS,
  SURFACE_BRANDS,
  RENOV8_STAGES,
  REMOTE_MANAGEMENT_PILLARS,
  RENOV8_FAQS,
  JOURNAL_ARTICLES,
  ReelConcept,
} from '@/data/renoData';
import ClientExperiences from '@/components/ClientExperiences';

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

  // Video Reel Showcase State
  const [activeReel, setActiveReel] = useState<ReelConcept>(REEL_CONCEPTS[0]);
  const [isReelMuted, setIsReelMuted] = useState<boolean>(true);
  const [isReelPlaying, setIsReelPlaying] = useState<boolean>(true);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // FAQ Accordion State
  const [openFaqId, setOpenFaqId] = useState<string>('faq-01');

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

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isReelPlaying) {
      videoRef.current.pause();
      setIsReelPlaying(false);
    } else {
      videoRef.current.play();
      setIsReelPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isReelMuted;
    setIsReelMuted(!isReelMuted);
  };

  return (
    <main className="bg-[#F6F5F2] text-[#141414] overflow-x-hidden">
      {/* 1. HERO SECTION (Full-viewport with smooth photo fade and 3 background video cards) */}
      <section className="relative h-screen min-h-[720px] w-full flex items-end overflow-hidden bg-[#141414]">
        {/* Layer 1: Initial Architectural Photo that dissolves smoothly */}
        <motion.div
          initial={{ opacity: 1, scale: 1.04 }}
          animate={{ opacity: 0, scale: 1 }}
          transition={{ duration: 2.0, delay: 0.8, ease: 'easeInOut' }}
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: "url('/images/hero/renov8-home-hero.webp')",
            filter: 'sepia(8%) contrast(98%) brightness(82%)',
          }}
        />

        {/* Layer 2: 3 Architectural Video Cards in the Background (1 down, 1 up, 1 down) */}
        <div className="absolute inset-0 z-[1] overflow-hidden flex items-center justify-center pointer-events-none p-4 md:p-8 lg:p-12">
          <div className="w-full h-full max-w-[1560px] mx-auto grid grid-cols-3 gap-3 md:gap-6 lg:gap-8 items-stretch py-6 md:py-10">
            {/* Background Card 1: Coming DOWN from top */}
            <motion.div
              initial={{ y: -160, opacity: 0 }}
              animate={{ y: 24, opacity: 1 }}
              transition={{ duration: 1.4, delay: 1.0, ease: [0.22, 1, 0.36, 1] }}
              className="relative h-full w-full overflow-hidden border border-white/20 bg-black/50 shadow-2xl"
            >
              <video
                src="/videos/services/home-reno-remodeling/home-reno-remodeling-1.mp4"
                autoPlay
                loop
                playsInline
                muted
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Background Card 2: Going UP from bottom */}
            <motion.div
              initial={{ y: 160, opacity: 0 }}
              animate={{ y: -24, opacity: 1 }}
              transition={{ duration: 1.4, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="relative h-full w-full overflow-hidden border border-white/25 bg-black/50 shadow-2xl"
            >
              <video
                src="/videos/services/interior-space-planning/interior-space-2.mp4"
                autoPlay
                loop
                playsInline
                muted
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Background Card 3: Coming DOWN from top */}
            <motion.div
              initial={{ y: -160, opacity: 0 }}
              animate={{ y: 24, opacity: 1 }}
              transition={{ duration: 1.4, delay: 1.4, ease: [0.22, 1, 0.36, 1] }}
              className="relative h-full w-full overflow-hidden border border-white/20 bg-black/50 shadow-2xl"
            >
              <video
                src="/videos/services/cabinet-works/cabinet-joinery-1.mp4"
                autoPlay
                loop
                playsInline
                muted
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>

        {/* Layer 3: Softened Dark Overlay (reduced black shade for luminance, while keeping text readable) */}
        <div className="absolute inset-0 z-[2] bg-gradient-to-t from-[#141414]/80 via-[#141414]/30 to-[#141414]/20 pointer-events-none" />

        {/* Layer 4: Foreground Content Sitting in Front of the 3 Background Video Cards */}
        <div className="relative z-10 max-w-[1440px] w-full mx-auto px-6 md:px-12 pb-20 md:pb-28 grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-8"
          >
            <p className="text-xs uppercase tracking-[0.3em] text-white/90 mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#A8201A]" />
              <span>Islamabad · Pakistan — 14 Specialist Categories</span>
            </p>

            <h1 className="text-white text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tight leading-[0.95]">
              WE DON&apos;T JUST RENOVATE. <br />
              <span className="font-light italic font-serif text-white/95">WE REIMAGINE.</span>
            </h1>

            <p className="mt-6 text-white/90 text-base md:text-xl max-w-xl font-light leading-relaxed">
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
                className="group inline-flex items-center gap-3 text-white/90 hover:text-white text-sm md:text-base font-medium pb-2 border-b border-white/40 hover:border-[#A8201A] transition-colors"
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
            transition={{ duration: 0.9, delay: 0.4 }}
            className="lg:col-span-4 bg-[#141414]/80 backdrop-blur-md border border-white/15 p-6 text-white space-y-4"
          >
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#A8201A]">
                Material Edit
              </span>
              <span className="font-mono text-xs text-white/60">A—Z Turnkey</span>
            </div>
            <p className="text-lg font-serif italic tracking-wide text-white">Stone · Oak · Steel</p>
            <p className="text-xs text-white/70 leading-relaxed">
              Built around the way you live—combining architectural design thinking and hands-on
              civil and interior craft under one roof.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. GOOGLE BUSINESS PROFILE & VERIFIED RECORD (Right Below Hero) */}
      <ClientExperiences />

      {/* 3. WHO WE ARE SECTION ("ONE TEAM. EVERY DETAIL.") */}
      <section className="py-24 md:py-36 max-w-[1440px] mx-auto px-6 md:px-12 border-b border-black/10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          <div className="lg:col-span-4">
            <span className="text-xs uppercase tracking-[0.3em] text-[#A8201A] block mb-3">
              02 / Studio Ethos
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold uppercase tracking-tight">
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

      {/* 4. DESIGN ACROSS EVERY SCALE (Interactive 3-Pillar Switcher) */}
      <section className="py-24 md:py-36 bg-[#EAE8E3]">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-[#A8201A] block mb-3">
                03 / Multidisciplinary Practice
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold uppercase tracking-tight leading-tight">
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

      {/* 5. SELECTED WORKS / CURATED PORTFOLIO GRID */}
      <section className="py-24 md:py-36 max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-14 gap-8">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-[#A8201A] block mb-3">
              04 / Selected Directions
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold uppercase tracking-tight">
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

      {/* 6. CRAFT IN MOTION / ATMOSPHERES ENVISIONED (Interactive Cinema Reel Showcase) */}
      <section className="py-24 md:py-36 bg-[#141414] text-white border-t border-white/10">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-[#A8201A] block mb-3 font-semibold">
                05 / Visual Telemetry &amp; Spatial Studies
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold uppercase tracking-tight leading-tight text-white">
                ATMOSPHERES ENVISIONED. <br />
                <span className="font-serif italic font-normal text-white/90">Craft in motion.</span>
              </h2>
            </div>
            <p className="text-sm md:text-base text-white/65 max-w-md leading-relaxed font-light">
              Watch on-site craftsmanship, concealed MEP installation, and bespoke joinery captured
              across our active residential sites in Islamabad and Rawalpindi.
            </p>
          </div>

          {/* Interactive Cinema Viewport & Reel Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Main Video Viewport */}
            <div className="lg:col-span-7 bg-black border border-white/15 overflow-hidden flex flex-col justify-between">
              <div className="relative aspect-[16/10] bg-black overflow-hidden group">
                <video
                  ref={videoRef}
                  key={activeReel.id}
                  src={activeReel.videoUrl}
                  autoPlay
                  loop
                  playsInline
                  muted={isReelMuted}
                  className="w-full h-full object-cover"
                />

                {/* HUD Overlay Elements */}
                <div className="absolute top-4 left-4 flex items-center gap-3">
                  <span className="bg-[#141414]/90 backdrop-blur-md text-[10px] uppercase font-mono tracking-widest px-3 py-1 text-white border border-white/15">
                    {activeReel.code}
                  </span>
                  <span className="bg-[#A8201A] text-[10px] uppercase font-mono tracking-widest px-2.5 py-1 text-white flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                    <span>REC · 4K</span>
                  </span>
                </div>

                {/* Video Controls (Mute & Play/Pause) */}
                <div className="absolute bottom-4 right-4 flex items-center gap-2">
                  <button
                    onClick={togglePlay}
                    className="p-2.5 bg-[#141414]/80 hover:bg-[#A8201A] backdrop-blur-md text-white transition-colors cursor-pointer"
                    aria-label="Toggle Play"
                  >
                    {isReelPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                  </button>
                  <button
                    onClick={toggleMute}
                    className="p-2.5 bg-[#141414]/80 hover:bg-[#A8201A] backdrop-blur-md text-white transition-colors cursor-pointer"
                    aria-label="Toggle Audio"
                  >
                    {isReelMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Reel Meta Description */}
              <div className="p-6 bg-[#1a1a1a] flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-white/10">
                <div>
                  <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-[0.2em] text-[#A8201A] mb-1">
                    <span>/{activeReel.index}</span>
                    <span>•</span>
                    <span>{activeReel.category}</span>
                  </div>
                  <h3 className="text-xl font-bold uppercase tracking-tight text-white">
                    {activeReel.title}
                  </h3>
                  <p className="text-xs text-white/65 mt-1 font-light">{activeReel.aspect}</p>
                </div>

                <a
                  href={`https://wa.me/923335251768?text=Hi%20Renov8,%20I%20am%20interested%20in%20a%20project%20with%20specifications%20like%20${encodeURIComponent(
                    activeReel.title
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#A8201A] text-white text-xs uppercase tracking-[0.2em] font-semibold hover:bg-white hover:text-[#141414] transition-colors shrink-0"
                >
                  <span>Inquire Spec</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Reel Selector Strip */}
            <div className="lg:col-span-5 space-y-3">
              <span className="text-[10px] uppercase font-mono tracking-[0.25em] text-white/50 block mb-2">
                Select Architectural Reel ({REEL_CONCEPTS.length})
              </span>
              <div className="space-y-2 max-h-[520px] overflow-y-auto pr-2">
                {REEL_CONCEPTS.map((reel) => {
                  const isSelected = activeReel.id === reel.id;
                  return (
                    <button
                      key={reel.id}
                      onClick={() => {
                        setActiveReel(reel);
                        setIsReelPlaying(true);
                      }}
                      className={`w-full p-4 text-left border transition-all flex items-center justify-between cursor-pointer ${
                        isSelected
                          ? 'bg-white text-[#141414] border-white'
                          : 'bg-[#181818] text-white/70 border-white/10 hover:border-white/30 hover:text-white'
                      }`}
                    >
                      <div className="flex items-start gap-4">
                        <span
                          className={`font-mono text-xs mt-0.5 ${
                            isSelected ? 'text-[#A8201A]' : 'text-white/40'
                          }`}
                        >
                          /{reel.index}
                        </span>
                        <div>
                          <h4 className="text-sm font-bold uppercase tracking-wider">{reel.title}</h4>
                          <p
                            className={`text-[11px] line-clamp-1 mt-0.5 ${
                              isSelected ? 'text-black/60' : 'text-white/45'
                            }`}
                          >
                            {reel.aspect}
                          </p>
                        </div>
                      </div>
                      <span
                        className={`text-[9px] uppercase font-mono px-2 py-0.5 shrink-0 ${
                          isSelected ? 'bg-[#A8201A] text-white' : 'bg-white/10 text-white/60'
                        }`}
                      >
                        {reel.category}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. SURFACE MATERIALITY & BRAND ECOSYSTEM (Mill Provenance Manifest) */}
      <section className="py-24 md:py-36 bg-[#F6F5F2] border-t border-black/10">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-[#A8201A] block mb-3 font-semibold">
                06 / Global Sourcing &amp; Mill Provenance
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold uppercase tracking-tight leading-tight">
                MATERIALS THAT AGE WELL. <br />
                <span className="font-serif italic font-normal">Authorized brand ecosystem.</span>
              </h2>
            </div>
            <p className="text-sm md:text-base text-black/70 max-w-md leading-relaxed font-light">
              Renov8 bridges authorized global manufacturers and certified architectural mills
              directly to your property in Islamabad. Genuine imported rolls, factory-warranted
              hardware, and single-contract installation.
            </p>
          </div>

          {/* 6 Specimen Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SURFACE_BRANDS.map((brand) => (
              <div
                key={brand.name}
                className="bg-white border border-black/10 p-8 flex flex-col justify-between hover:border-[#A8201A] transition-colors group"
              >
                <div>
                  <div className="flex items-center justify-between border-b border-black/10 pb-4 mb-6">
                    <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#A8201A]">
                      {brand.code}
                    </span>
                    <span className="text-[9px] uppercase font-mono tracking-widest px-2.5 py-0.5 bg-[#EAE8E3] text-black/75">
                      {brand.badge}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold uppercase tracking-tight mb-1 group-hover:text-[#A8201A] transition-colors">
                    {brand.name}
                  </h3>
                  <p className="text-xs font-mono uppercase tracking-wider text-black/45 mb-4">
                    {brand.origin}
                  </p>

                  <h4 className="text-sm font-semibold uppercase tracking-wider text-black/80 mb-2">
                    {brand.type}
                  </h4>
                  <p className="text-xs text-black/65 leading-relaxed font-light">
                    {brand.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-black/10 flex items-center justify-between">
                  <span className="text-[10px] uppercase tracking-widest text-black/50 font-mono">
                    Single-Contract Fit
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-black/40 group-hover:text-[#A8201A] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Mill Protocol Bar */}
          <div className="mt-12 p-8 bg-[#EAE8E3] border border-black/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-1">
              <h4 className="text-sm font-bold uppercase tracking-wider">
                Require physical material sample swatches?
              </h4>
              <p className="text-xs text-black/65 font-light">
                We deliver curated sample boxes (honed limestone, quarter-sawn oak, Grohe PVD finishes, and Boara vinyls) for site review.
              </p>
            </div>
            <a
              href="https://wa.me/923335251768?text=Hi%20Renov8,%20I%20would%20like%20to%20request%20an%20architectural%20material%20sample%20box%20for%20my%20property."
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-[#141414] text-white px-6 py-3 text-xs uppercase tracking-[0.2em] font-semibold hover:bg-[#A8201A] transition-colors shrink-0"
            >
              <span>Request Sample Box</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>

      {/* 8. THE 4-STAGE ARCHITECTURAL PROTOCOL (Calm, Clear, Considered) */}
      <section className="py-24 md:py-36 bg-[#EAE8E3] border-t border-black/10">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-[#A8201A] block mb-3 font-semibold">
                07 / Delivery Sequence
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold uppercase tracking-tight leading-tight">
                CALM IS DESIGNED IN. <br />
                <span className="font-serif italic font-normal">Our 4-stage protocol.</span>
              </h2>
            </div>
            <p className="text-sm md:text-base text-black/70 max-w-md leading-relaxed font-light">
              A successful project is not improvised on site. It is made clearer through deliberate
              decisions, visible responsibilities, and a sequence everyone understands.
            </p>
          </div>

          {/* 4 Protocol Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {RENOV8_STAGES.map((stage, idx) => (
              <div
                key={stage.step}
                className="bg-white border border-black/10 p-8 flex flex-col justify-between hover:border-[#A8201A] transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between border-b border-black/10 pb-4 mb-6">
                    <span className="font-mono text-2xl font-bold text-[#A8201A]">
                      /{stage.step}
                    </span>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-black/50">
                      {stage.timing}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold uppercase tracking-tight mb-1">
                    {stage.phase}
                  </h3>
                  <p className="text-sm font-serif italic text-black/75 mb-4">
                    {stage.tagline}
                  </p>
                  <p className="text-xs text-black/65 leading-relaxed font-light mb-6">
                    {stage.lead}
                  </p>

                  <div className="space-y-2 border-t border-black/10 pt-4">
                    <span className="text-[10px] uppercase font-mono tracking-widest text-black/45 block mb-2">
                      Key Deliverables
                    </span>
                    {stage.deliverables.map((item, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-black/80">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#A8201A] shrink-0 mt-1.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-black/10">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-black/50">
                    Stage {idx + 1} of 4
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Decision Discipline Track */}
          <div className="mt-12 bg-white border border-black/10 p-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 mb-6 border-b border-black/10 gap-4">
              <div>
                <span className="text-xs uppercase tracking-[0.25em] text-[#A8201A] font-semibold block mb-1">
                  Decision Discipline
                </span>
                <h4 className="text-2xl font-bold uppercase tracking-tight">
                  What Changes, And When.
                </h4>
              </div>
              <p className="text-xs text-black/60 max-w-md font-light">
                Disciplined sequencing keeps construction moving and eliminates costly on-site demolition changes.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <span className="text-xs font-mono uppercase tracking-widest text-[#A8201A] font-semibold">
                  Early Stage
                </span>
                <h5 className="text-base font-bold uppercase tracking-wider">Layout &amp; Scope</h5>
                <p className="text-xs text-black/65 leading-relaxed font-light">
                  High-impact architectural decisions with low change cost. Reimagining circulation, room dimensions, and structural openings.
                </p>
              </div>

              <div className="space-y-2 border-t md:border-t-0 md:border-l border-black/10 md:pl-6 pt-4 md:pt-0">
                <span className="text-xs font-mono uppercase tracking-widest text-[#A8201A] font-semibold">
                  Before Site Groundbreaking
                </span>
                <h5 className="text-base font-bold uppercase tracking-wider">Systems &amp; Materials</h5>
                <p className="text-xs text-black/65 leading-relaxed font-light">
                  Full coordination before procurement: VRF HVAC plenum sizes, concealed plumbing routes, tile dye-lots, and custom joinery hardware.
                </p>
              </div>

              <div className="space-y-2 border-t md:border-t-0 md:border-l border-black/10 md:pl-6 pt-4 md:pt-0">
                <span className="text-xs font-mono uppercase tracking-widest text-[#A8201A] font-semibold">
                  During Delivery
                </span>
                <h5 className="text-base font-bold uppercase tracking-wider">Verified Site Details</h5>
                <p className="text-xs text-black/65 leading-relaxed font-light">
                  Precision adjustments based on what the physical structure reveals. Resident engineer signoffs at every concrete pour and lintel tie.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. PROJECTS FROM ABROAD (Overseas Client Oversight Protocol) */}
      <section className="py-24 md:py-36 bg-[#111111] text-white border-t border-white/10">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs uppercase tracking-[0.3em] text-[#A8201A] block font-semibold">
                08 / Expatriate &amp; Overseas Custodianship
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold uppercase tracking-tight text-white leading-tight">
                PROJECTS FROM ABROAD. <br />
                <span className="font-serif italic font-normal text-white/90">
                  Your project, even when you&apos;re away.
                </span>
              </h2>
              <p className="text-base md:text-lg text-white/70 max-w-2xl font-light leading-relaxed pt-2">
                For property owners in the United Kingdom, United States, Canada, and the Gulf,
                managing a residential renovation in Islamabad requires absolute transparency,
                escrow-like milestone accountability, and verified digital site telemetry.
              </p>
            </div>

            <div className="lg:col-span-4 bg-[#1a1a1a] border border-white/15 p-6 space-y-4">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#A8201A]">
                  Remote Hub
                </span>
                <span className="text-xs font-mono text-white/60">Islamabad HQ</span>
              </div>
              <p className="text-xs text-white/70 leading-relaxed font-light">
                Over 40% of our luxury residential portfolio is commissioned by expatriates. We act
                as your single accountable custodian from first survey to final key handover.
              </p>
              <a
                href="https://wa.me/923335251768?text=Hi%20Renov8,%20I%20am%20an%20overseas%20homeowner%20interested%20in%20discussing%20a%20remotely%20managed%20renovation%20in%20Islamabad."
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full py-3 bg-[#A8201A] text-white text-xs uppercase tracking-[0.2em] font-semibold hover:bg-white hover:text-[#141414] transition-colors"
              >
                <span>Discuss Remote Project</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* 4 Remote Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {REMOTE_MANAGEMENT_PILLARS.map((pillar) => (
              <div
                key={pillar.index}
                className="bg-[#181818] border border-white/10 p-8 space-y-4 hover:border-white/30 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-[#A8201A]">/{pillar.index}</span>
                  {pillar.iconName === 'Camera' && <Camera className="w-5 h-5 text-white/60" />}
                  {pillar.iconName === 'ShieldCheck' && <ShieldCheck className="w-5 h-5 text-white/60" />}
                  {pillar.iconName === 'MessageSquare' && <MessageSquare className="w-5 h-5 text-white/60" />}
                  {pillar.iconName === 'FileCheck' && <FileCheck className="w-5 h-5 text-white/60" />}
                </div>

                <h3 className="text-lg font-bold uppercase tracking-tight text-white">
                  {pillar.title}
                </h3>
                <p className="text-xs font-mono uppercase tracking-wider text-[#A8201A]">
                  {pillar.subtitle}
                </p>
                <p className="text-xs text-white/65 leading-relaxed font-light">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. FIELD INTELLIGENCE / PUBLICATIONS PREVIEW */}
      <section className="py-24 md:py-36 bg-[#F6F5F2] border-t border-black/10">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-[#A8201A] block mb-3 font-semibold">
                09 / Field Intelligence &amp; Municipal Bylaws
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold uppercase tracking-tight leading-tight">
                USEFUL THINKING. <br />
                <span className="font-serif italic font-normal">Before the dust begins.</span>
              </h2>
            </div>
            <Link
              href="/publications"
              className="group inline-flex items-center gap-3 text-xs uppercase tracking-[0.25em] font-semibold pb-2 border-b border-[#141414] hover:text-[#A8201A] hover:border-[#A8201A] transition-colors"
            >
              <span>Explore All 19 Guides</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* 3 Top Featured Editorial Articles */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {JOURNAL_ARTICLES.slice(0, 3).map((art) => (
              <article
                key={art.slug}
                className="bg-white border border-black/10 p-8 flex flex-col justify-between group hover:border-[#A8201A] transition-colors"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs font-mono uppercase tracking-widest text-[#A8201A]">
                    <span>{art.category}</span>
                    <span className="text-black/40">{art.readTime}</span>
                  </div>

                  <h3 className="text-xl font-bold uppercase tracking-tight group-hover:text-[#A8201A] transition-colors">
                    {art.title}
                  </h3>

                  <p className="text-xs text-black/65 leading-relaxed font-light">
                    {art.summary}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-black/10 flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-black/45">
                    {art.date}
                  </span>
                  <Link
                    href="/publications"
                    className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.18em] font-semibold group-hover:text-[#A8201A] transition-colors"
                  >
                    <span>Read Guide</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 11. ADVISORY & BYLAWS FAQ (Before We Begin: Planning with Clarity) */}
      <section className="py-24 md:py-36 bg-white border-y border-black/10">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 space-y-6">
              <div className="sticky top-28 space-y-6">
                <div>
                  <span className="text-xs uppercase tracking-[0.3em] text-[#A8201A] block mb-3 font-semibold">
                    10 / Advisory &amp; Transparency
                  </span>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold uppercase tracking-tight leading-tight mb-3">
                    BEFORE WE BEGIN. <br />
                    <span className="font-serif italic font-normal">Planning with clarity.</span>
                  </h2>
                  <p className="text-sm text-black/70 leading-relaxed font-light">
                    Practical answers for the foundational decisions around a Renov8 project: CDA
                    and DHA building bylaws, pricing certainty, and single-contract turnkey accountability.
                  </p>
                </div>

                <div className="p-6 bg-[#F6F5F2] border border-black/10 space-y-4">
                  <span className="text-xs uppercase tracking-[0.2em] font-mono text-[#A8201A] block">
                    Have a specific question?
                  </span>
                  <p className="text-xs text-black/70 leading-relaxed font-light">
                    Connect directly with our Islamabad resident structural engineer for preliminary site advice.
                  </p>
                  <a
                    href="https://wa.me/923335251768?text=Hi%20Renov8,%20I%20have%20a%20question%20regarding%20my%20property%20renovation%20in%20Islamabad."
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 bg-[#141414] text-white px-5 py-3 text-xs uppercase tracking-[0.2em] font-semibold hover:bg-[#A8201A] transition-colors w-full justify-center"
                  >
                    <span>Message Resident Engineer</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Accordion Questions List */}
            <div className="lg:col-span-7 divide-y divide-black/15 border-y border-black/15">
              {RENOV8_FAQS.map((faq) => {
                const isOpen = openFaqId === faq.id;
                return (
                  <div key={faq.id} className="bg-transparent">
                    <button
                      onClick={() => setOpenFaqId(isOpen ? '' : faq.id)}
                      className="w-full py-6 flex items-start justify-between text-left hover:text-[#A8201A] transition-colors group gap-6 cursor-pointer"
                    >
                      <div className="flex items-baseline gap-4">
                        <span className="font-mono text-xs text-[#A8201A] font-semibold">
                          /{faq.index}
                        </span>
                        <div>
                          <span className="text-[10px] font-mono uppercase tracking-widest text-black/45 block mb-1">
                            {faq.category}
                          </span>
                          <h3 className="text-lg md:text-xl font-bold uppercase tracking-tight group-hover:text-[#A8201A] transition-colors">
                            {faq.question}
                          </h3>
                        </div>
                      </div>
                      <ChevronDown
                        className={`w-5 h-5 shrink-0 transition-transform duration-300 mt-1 ${
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
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden pb-8 pl-10 pr-4 text-sm text-black/75 leading-relaxed font-light"
                        >
                          <p>{faq.answer}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 11. STUDIO METRICS (Hydrated IntersectionObserver Counters) */}
      <section className="py-24 bg-[#141414] text-white">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
            {RENO_STATS.map((stat, idx) => (
              <div key={stat.label} className={`${idx > 0 ? 'sm:pl-10 pt-8 sm:pt-0' : ''}`}>
                <div className="text-4xl md:text-5xl font-light tracking-tight text-white mb-3 font-serif italic">
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
          <h2 className="text-2xl sm:text-3xl md:text-4xl uppercase tracking-tight">
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
