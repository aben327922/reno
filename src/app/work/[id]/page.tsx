import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowUpRight, Compass, ShieldCheck, FileText } from 'lucide-react';
import { RENO_PROJECTS, ProjectDetail } from '@/data/renoData';

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

  return (
    <main className="bg-[#F6F5F2] min-h-screen pt-32 pb-24 px-6 md:px-12 text-[#141414]">
      <div className="max-w-[1440px] mx-auto">
        {/* Back Link */}
        <div className="mb-8">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-black/60 hover:text-[#A8201A] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Selected Works
          </Link>
        </div>

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end mb-16 pb-12 border-b border-black/15">
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

        {/* Main Render Image */}
        <div className="relative aspect-[16/10] overflow-hidden bg-black mb-16">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Architectural Narrative & Technical Specs */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-7 space-y-8">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-[#A8201A] block mb-3 font-semibold">
                Architectural Intent &amp; Spatial Philosophy
              </span>
              <h2 className="text-3xl font-bold uppercase tracking-tight mb-6">
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
      </div>
    </main>
  );
}
