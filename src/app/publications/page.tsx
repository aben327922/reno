'use client';

import React, { useState } from 'react';
import { ArrowUpRight, Search } from 'lucide-react';
import { JOURNAL_ARTICLES, JournalArticle } from '@/data/renoData';

export default function PublicationsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [search, setSearch] = useState<string>('');

  const categories = [
    'All',
    'Bylaws & Municipal',
    'Cost & BOQ Planning',
    'Material Architecture',
    'MEP & Building Science',
  ];

  const filteredArticles = JOURNAL_ARTICLES.filter((art) => {
    const matchesCat =
      selectedCategory === 'All' || art.category === selectedCategory;
    const matchesQuery =
      art.title.toLowerCase().includes(search.toLowerCase()) ||
      art.summary.toLowerCase().includes(search.toLowerCase());
    return matchesCat && matchesQuery;
  });

  return (
    <main className="bg-[#F6F5F2] min-h-screen pt-32 pb-24 px-6 md:px-12">
      <div className="max-w-[1440px] mx-auto">
        <div className="max-w-4xl mb-12">
          <span className="text-xs uppercase tracking-[0.3em] text-[#A8201A] block mb-3 font-semibold">
            Renov8 Editorial &amp; Field Notes
          </span>
          <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-tight mb-6">
            PUBLICATIONS &amp; GUIDES
          </h1>
          <p className="text-lg md:text-xl text-black/70 font-light leading-relaxed">
            Practical thinking before the dust begins. Authoritative guides on renovation costs,
            CDA and DHA building bylaws, monsoon waterproofing, and enduring material specifications
            in Islamabad.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="flex flex-col md:flex-row justify-between gap-6 pb-8 border-b border-black/15 mb-10">
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

          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-black/40" />
            <input
              type="text"
              placeholder="Search guides, bylaws, costs..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-white border border-black/20 text-xs focus:outline-none focus:border-[#141414]"
            />
          </div>
        </div>

        {/* 19 Articles List */}
        <div className="divide-y divide-black/15 border-y border-black/15">
          {filteredArticles.map((art) => (
            <article
              key={art.slug}
              className="py-10 flex flex-col md:flex-row md:items-baseline justify-between gap-6 group hover:bg-white/60 px-4 transition-colors"
            >
              <div className="space-y-3 max-w-3xl">
                <div className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-black/50">
                  <span className="text-[#A8201A] font-mono font-semibold">{art.date}</span>
                  <span>•</span>
                  <span>{art.category}</span>
                  <span>•</span>
                  <span className="font-mono text-black/40">{art.readTime}</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-tight group-hover:text-[#A8201A] transition-colors">
                  {art.title}
                </h2>
                <p className="text-sm text-black/65 leading-relaxed font-light">
                  {art.summary}
                </p>
              </div>

              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-black/50 group-hover:text-[#A8201A] transition-colors shrink-0">
                <a
                  href={`https://wa.me/923335251768?text=Hi%20Renov8,%20I%20have%20a%20question%20regarding:%20${encodeURIComponent(
                    art.title
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5"
                >
                  <span>Discuss With Engineer</span>
                  <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
