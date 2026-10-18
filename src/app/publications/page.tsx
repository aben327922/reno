import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function PublicationsPage() {
  const articles = [
    {
      date: 'OCTOBER 2026',
      title: '1 Kanal House Renovation Cost Guide in Islamabad (CDA Sectors vs DHA)',
      journal: 'Renovation Economics & BOQ Planning',
      summary:
        'A comprehensive cost breakdown analyzing civil structural interventions, imported vs local finish tiers, and concealed MEP contingencies.',
    },
    {
      date: 'SEPTEMBER 2026',
      title: 'Stone, Oak & Steel: Selecting Materials That Endure Islamabad’s Monsoon & Summer',
      journal: 'Material Architecture & Climate Resilience',
      summary:
        'Practical field guide on selecting natural travertine, engineered oak herringbone, and thermal-break aluminium profiles built for extreme seasonal temperature deltas.',
    },
    {
      date: 'AUGUST 2026',
      title: 'Why Concealed MEP & Waterproofing Audits Matter More Than Surface Cosmetics',
      journal: 'Technical Building Systems',
      summary:
        'Thermal imaging diagnostics, manifold PPR plumbing runs, and multi-coat elastomeric waterproofing protocols for high-value residential properties.',
    },
    {
      date: 'JULY 2026',
      title: 'CDA Building By-Laws for Residential Additions & Basement Excavation',
      journal: 'Regulatory Compliance & Municipal Submission',
      summary:
        'Navigating Forms A1 & A2, covered area ratios, boundary setback rules, and seismic structural requirements in Islamabad.',
    },
  ];

  return (
    <main className="bg-[#F6F5F2] min-h-screen pt-32 pb-24 px-6 md:px-12">
      <div className="max-w-[1440px] mx-auto">
        <div className="max-w-4xl mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-[#A8201A] block mb-3">
            Renov8 Editorial &amp; Field Notes
          </span>
          <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-tight mb-6">
            PUBLICATIONS &amp; GUIDES
          </h1>
          <p className="text-lg md:text-xl text-black/70 font-light leading-relaxed">
            Practical thinking before the dust begins. Guides on renovation costs, material
            performance, and municipal building bylaws in Islamabad.
          </p>
        </div>

        <div className="divide-y divide-black/15 border-y border-black/15">
          {articles.map((art, idx) => (
            <article
              key={idx}
              className="py-10 flex flex-col md:flex-row md:items-baseline justify-between gap-6 group cursor-pointer hover:bg-white/60 px-4 transition-colors"
            >
              <div className="space-y-3 max-w-3xl">
                <div className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-black/50">
                  <span className="text-[#A8201A] font-mono font-semibold">{art.date}</span>
                  <span>•</span>
                  <span>{art.journal}</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-tight group-hover:text-[#A8201A] transition-colors">
                  {art.title}
                </h2>
                <p className="text-sm text-black/65 leading-relaxed font-light">
                  {art.summary}
                </p>
              </div>

              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-black/50 group-hover:text-[#A8201A] transition-colors shrink-0">
                <span>Read Field Note</span>
                <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
