import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight, ArrowUpRight, Compass, ShieldCheck, FileText, SunMedium, Sparkles } from 'lucide-react';
import { RENO_PROJECTS } from '@/data/renoData';

// Generate static params for all known projects
export function generateStaticParams() {
  return RENO_PROJECTS.map((project) => ({
    id: project.id,
  }));
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = RENO_PROJECTS.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  const currentIndex = RENO_PROJECTS.findIndex((p) => p.id === id);
  const prevProject = RENO_PROJECTS[(currentIndex - 1 + RENO_PROJECTS.length) % RENO_PROJECTS.length];
  const nextProject = RENO_PROJECTS[(currentIndex + 1) % RENO_PROJECTS.length];

  return (
    <main className="bg-[#F6F5F2] min-h-screen pt-32 pb-24 px-6 md:px-12 text-[#141414]">
      <div className="max-w-[1440px] mx-auto space-y-16">
        {/* Back Link */}
        <div>
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-black/60 hover:text-[#A8201A] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Selected Works
          </Link>
        </div>

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end pb-12 border-b border-black/15">
          <div className="lg:col-span-8 space-y-4">
            <div className="flex items-center gap-4 text-xs font-mono uppercase tracking-[0.2em] text-[#A8201A]">
              <span>/{project.index}</span>
              <span>•</span>
              <span>{project.category}</span>
              <span>•</span>
              <span className="text-black/50">{project.year}</span>
            </div>
            <h1 className="text-5xl sm:text-7xl font-bold uppercase tracking-tight leading-[0.95]">
              {project.title}
            </h1>
            <p className="text-sm font-mono uppercase tracking-[0.2em] text-black/60">
              {project.location}
            </p>
          </div>

          <div className="lg:col-span-4 bg-[#141414] text-white p-6 space-y-2">
            <span className="text-[10px] uppercase font-mono tracking-widest text-[#A8201A] block">
              Material Palette Edit
            </span>
            <p className="text-lg font-serif italic">{project.materialEdit}</p>
            {project.dimensions && (
              <p className="text-xs text-white/60 pt-2 border-t border-white/10 font-mono">
                {project.dimensions}
              </p>
            )}
          </div>
        </div>

        {/* Primary Project Imagery & Collage */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
          <div className="md:col-span-8">
            <div className="relative aspect-[16/10] overflow-hidden bg-black">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <span className="absolute bottom-4 left-4 bg-[#141414]/90 backdrop-blur-md text-white text-[10px] font-mono uppercase tracking-widest px-3 py-1.5 border border-white/10">
                01 / Primary Concept Elevation · {project.location}
              </span>
            </div>
          </div>

          <div className="md:col-span-4 space-y-6">
            <div className="relative aspect-[4/3] overflow-hidden bg-black">
              <img
                src="/images/concepts/material-study.webp"
                alt="Tactile stone, oak and mineral material palette study"
                className="w-full h-full object-cover"
              />
              <span className="absolute bottom-4 left-4 bg-[#141414]/90 backdrop-blur-md text-white text-[10px] font-mono uppercase tracking-widest px-3 py-1.5 border border-white/10">
                02 / Materiality · Honest Specimen Study
              </span>
            </div>

            <div className="p-6 bg-white border border-black/10 space-y-2">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#A8201A] block">
                Turnkey Execution Desk
              </span>
              <h3 className="text-base font-bold uppercase tracking-wider">
                Full Scope Responsibility
              </h3>
              <p className="text-xs text-black/65 leading-relaxed font-light">
                Executed under single-contract accountability, including structural civil works, bespoke oak joinery,
                and concealed MEP infrastructure.
              </p>
            </div>
          </div>
        </div>

        {/* Architectural Narrative & Technical Specs */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 border-t border-black/15 pt-16">
          <div className="lg:col-span-7 space-y-10">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-[#A8201A] block mb-3 font-semibold">
                Architectural Intent &amp; Spatial Philosophy
              </span>
              <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tight mb-6">
                DESIGN ROOTED IN CONTEXT.
              </h2>
              <p className="text-xl font-light text-black/85 leading-relaxed mb-6">
                {project.summary}
              </p>
              {project.clientStory && (
                <p className="text-base text-black/70 leading-relaxed font-light">
                  {project.clientStory}
                </p>
              )}
            </div>

            {/* Spatial Strategy & Climate Architecture Pillars */}
            <div className="bg-[#EAE8E3] p-8 border border-black/10 space-y-6">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#A8201A] block mb-1 font-semibold">
                  Spatial Strategy
                </span>
                <h3 className="text-xl font-bold uppercase tracking-tight">
                  Passive Climate &amp; Acoustic Engineering
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="space-y-1.5 bg-white p-4 border border-black/10">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-black/50 block">
                    01 / Microclimate
                  </span>
                  <strong className="text-xs uppercase tracking-wider block font-bold">
                    Natural Equilibrium
                  </strong>
                  <p className="text-[11px] text-black/65 font-light leading-snug">
                    Cross-ventilation breezeways &amp; thermal mass optimization.
                  </p>
                </div>

                <div className="space-y-1.5 bg-white p-4 border border-black/10">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-black/50 block">
                    02 / Acoustic Shield
                  </span>
                  <strong className="text-xs uppercase tracking-wider block font-bold">
                    STC-Rated Envelope
                  </strong>
                  <p className="text-[11px] text-black/65 font-light leading-snug">
                    Insulated cavity walls dampening neighborhood decibels.
                  </p>
                </div>

                <div className="space-y-1.5 bg-white p-4 border border-black/10">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-black/50 block">
                    03 / Daylight
                  </span>
                  <strong className="text-xs uppercase tracking-wider block font-bold">
                    Indirect Solar Flow
                  </strong>
                  <p className="text-[11px] text-black/65 font-light leading-snug">
                    Shaded deep reveals eliminating radiant afternoon glare.
                  </p>
                </div>
              </div>
            </div>

            {/* Key Engineering Features */}
            {project.keyFeatures && (
              <div className="pt-8 border-t border-black/10">
                <h3 className="text-xs uppercase tracking-[0.25em] text-[#A8201A] font-semibold mb-6">
                  Key Architectural &amp; Engineering Deliverables
                </h3>
                <ul className="space-y-4">
                  {project.keyFeatures.map((feat, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-black/80">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#A8201A] shrink-0 mt-2" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Right Sidebar: Execution Standards & Consultation */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-white border border-black/10 p-8 space-y-6">
              <span className="text-xs uppercase tracking-[0.25em] text-[#A8201A] font-semibold block">
                Turnkey Standards
              </span>

              <div className="space-y-4 text-xs text-black/75">
                <div className="flex items-start gap-3">
                  <Compass className="w-4 h-4 text-[#A8201A] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-black uppercase tracking-wider">
                      Islamabad Studio Supervision
                    </strong>
                    Full-time resident site engineer assigned from groundbreaking to handover.
                  </div>
                </div>

                <div className="flex items-start gap-3 border-t border-black/10 pt-4">
                  <FileText className="w-4 h-4 text-[#A8201A] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-black uppercase tracking-wider">
                      Itemized BOQ Contract
                    </strong>
                    Zero unexpected cost escalations with milestone-linked draw schedules.
                  </div>
                </div>

                <div className="flex items-start gap-3 border-t border-black/10 pt-4">
                  <ShieldCheck className="w-4 h-4 text-[#A8201A] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-black uppercase tracking-wider">
                      12-Month Workmanship Warranty
                    </strong>
                    Formal defect liability audits and ongoing property maintenance care.
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-black/10 space-y-3">
                <a
                  href={`https://wa.me/923335251768?text=Hi%20Renov8,%20I%20am%20interested%20in%20discussing%20a%20project%20similar%20to%20${encodeURIComponent(
                    project.title
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#141414] text-white py-4 text-xs uppercase tracking-[0.2em] font-semibold hover:bg-[#A8201A] transition-colors"
                >
                  <span>Inquire on WhatsApp</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>

                <Link
                  href="/planner"
                  className="w-full inline-flex items-center justify-center gap-2 border border-black/20 py-3.5 text-xs uppercase tracking-[0.2em] font-medium hover:border-black transition-colors"
                >
                  <span>Estimate BOQ Range</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Project Pagination Navigator */}
        <div className="border-t border-black/15 pt-10 flex items-center justify-between">
          <Link
            href={`/work/${prevProject.id}`}
            className="group inline-flex items-center gap-3 text-xs uppercase tracking-[0.2em] font-semibold hover:text-[#A8201A] transition-colors"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <div>
              <span className="text-[10px] text-black/40 block font-mono">Previous Project</span>
              <span>{prevProject.title}</span>
            </div>
          </Link>

          <Link
            href={`/work/${nextProject.id}`}
            className="group inline-flex items-center gap-3 text-xs uppercase tracking-[0.2em] font-semibold hover:text-[#A8201A] transition-colors text-right"
          >
            <div>
              <span className="text-[10px] text-black/40 block font-mono">Next Project</span>
              <span>{nextProject.title}</span>
            </div>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </main>
  );
}
