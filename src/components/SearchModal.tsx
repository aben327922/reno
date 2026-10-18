'use client';

import React, { useState, useEffect, useRef, useMemo } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  Search,
  X,
  ArrowUpRight,
  CornerDownLeft,
  SlidersHorizontal,
  Compass,
  FileText,
  Building2,
  Layers,
  Calculator,
  ShieldCheck,
  Sparkles
} from 'lucide-react';
import { SEARCH_INDEX, SearchItem } from '@/data/searchIndex';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CATEGORIES = [
  'All',
  'Services',
  'Projects',
  'Bylaws & Guides',
  'Materials & Brands',
  'Tools & Estimator',
  'Studio & Policies'
] as const;

type CategoryFilter = (typeof CATEGORIES)[number];

const QUICK_SUGGESTIONS = [
  'CDA Form A1 & A2',
  'House Renovation Cost in Islamabad',
  'Custom Teak Joinery',
  'Diplomatic Enclave Protocol',
  'Interactive PKR Planner',
  'Monsoon Waterproofing',
  'Blum Kinetic Hardware',
  'Ducted VRF AC Planning',
  'DHA Building Bylaws',
  'Swat & Ziarat White Marble'
];

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>('All');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const resultsContainerRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  // Focus input on open
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 50);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      setQuery('');
      setSelectedCategory('All');
      setSelectedIndex(0);
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Filter items
  const filteredResults = useMemo(() => {
    const q = query.trim().toLowerCase();
    const tokens = q.split(/\s+/).filter(Boolean);

    return SEARCH_INDEX.filter((item) => {
      // Category check
      if (selectedCategory !== 'All' && item.category !== selectedCategory) {
        return false;
      }

      // If no query, return items in category
      if (tokens.length === 0) return true;

      // Match all tokens against text pool
      const pool = [
        item.title,
        item.subtitle,
        item.snippet,
        item.badge || '',
        item.metadata || '',
        ...item.keywords
      ]
        .join(' ')
        .toLowerCase();

      return tokens.every((token) => pool.includes(token));
    });
  }, [query, selectedCategory]);

  // Keep selected index in bounds
  useEffect(() => {
    setSelectedIndex(0);
  }, [filteredResults.length, selectedCategory]);

  // Scroll active item into view
  useEffect(() => {
    if (resultsContainerRef.current) {
      const activeEl = resultsContainerRef.current.querySelector(
        `[data-result-index="${selectedIndex}"]`
      ) as HTMLElement;
      if (activeEl) {
        activeEl.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
      }
    }
  }, [selectedIndex]);

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose();
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1 < filteredResults.length ? prev + 1 : 0));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 >= 0 ? prev - 1 : filteredResults.length - 1));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      const target = filteredResults[selectedIndex];
      if (target) {
        onClose();
        router.push(target.url);
      }
    }
  };

  const getCategoryIcon = (category: SearchItem['category']) => {
    switch (category) {
      case 'Services':
        return <Building2 className="w-4 h-4 text-[#A8201A]" />;
      case 'Projects':
        return <Compass className="w-4 h-4 text-[#A8201A]" />;
      case 'Bylaws & Guides':
        return <FileText className="w-4 h-4 text-[#A8201A]" />;
      case 'Materials & Brands':
        return <Layers className="w-4 h-4 text-[#A8201A]" />;
      case 'Tools & Estimator':
        return <Calculator className="w-4 h-4 text-[#A8201A]" />;
      case 'Studio & Policies':
        return <ShieldCheck className="w-4 h-4 text-[#A8201A]" />;
      default:
        return <Sparkles className="w-4 h-4 text-[#A8201A]" />;
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center pt-8 sm:pt-20 px-3 sm:px-6">
      {/* Backdrop Blur */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/85 backdrop-blur-md cursor-pointer"
      />

      {/* Modal Container */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative z-10 w-full max-w-3xl bg-[#141414] border border-white/20 shadow-2xl text-white flex flex-col max-h-[88vh] overflow-hidden"
        onKeyDown={handleKeyDown}
      >
        {/* Top Search Input Bar */}
        <div className="p-3.5 sm:p-5 border-b border-white/10 flex items-center gap-2.5 sm:gap-3 bg-[#191919]">
          <Search className="w-5 h-5 text-[#A8201A] shrink-0 pointer-events-none" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search services, projects, CDA bylaws, materials, or BOQ rates..."
            className="w-full bg-transparent text-white text-sm sm:text-lg placeholder:text-white/40 focus:outline-none font-light tracking-wide"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery('')}
              aria-label="Clear search"
              className="p-1 hover:bg-white/10 text-white/60 hover:text-white rounded transition-colors cursor-pointer"
            >
              <X className="w-4 h-4 pointer-events-none" />
            </button>
          )}
          {/* Mobile Dedicated Close Button */}
          <button
            type="button"
            onClick={onClose}
            aria-label="Close search modal"
            className="p-1.5 text-white/70 hover:text-white border border-white/15 bg-white/5 sm:hidden shrink-0 cursor-pointer text-xs font-mono"
          >
            <X className="w-4 h-4 text-[#A8201A]" />
          </button>
          <kbd className="hidden sm:inline-flex items-center px-2 py-1 text-[10px] font-mono uppercase bg-white/10 border border-white/15 text-white/60 rounded">
            ESC
          </kbd>
        </div>

            {/* Filter Tabs */}
            <div className="flex items-center gap-1 sm:gap-2 px-4 py-2.5 border-b border-white/10 bg-[#161616] overflow-x-auto no-scrollbar text-xs">
              <SlidersHorizontal className="w-3.5 h-3.5 text-white/40 shrink-0 mr-1 hidden sm:inline" />
              {CATEGORIES.map((cat) => {
                const count =
                  cat === 'All'
                    ? SEARCH_INDEX.length
                    : SEARCH_INDEX.filter((i) => i.category === cat).length;
                const isSelected = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3 py-1 rounded-sm text-[11px] uppercase tracking-wider font-mono whitespace-nowrap transition-colors flex items-center gap-1.5 ${
                      isSelected
                        ? 'bg-[#A8201A] text-white font-semibold'
                        : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    <span>{cat}</span>
                    <span className="text-[9px] opacity-60">({count})</span>
                  </button>
                );
              })}
            </div>

            {/* Content Area */}
            <div
              ref={resultsContainerRef}
              className="flex-1 overflow-y-auto divide-y divide-white/5 p-2 sm:p-3 space-y-1"
            >
              {/* If no query, show Quick Suggestions */}
              {!query && selectedCategory === 'All' && (
                <div className="p-4 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] uppercase font-mono tracking-widest text-[#A8201A] font-semibold">
                      Architectural Quick Queries
                    </span>
                    <span className="text-[10px] font-mono text-white/40">
                      Press Enter to Navigate
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {QUICK_SUGGESTIONS.map((suggestion) => (
                      <button
                        key={suggestion}
                        onClick={() => setQuery(suggestion)}
                        className="text-xs px-3 py-1.5 bg-white/5 hover:bg-[#A8201A] hover:text-white border border-white/10 text-white/80 transition-all font-mono tracking-wide"
                      >
                        {suggestion} →
                      </button>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-white/10">
                    <span className="text-[10px] uppercase font-mono tracking-widest text-white/40 block mb-3">
                      Featured Direct Indexes
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {SEARCH_INDEX.slice(0, 4).map((item) => (
                        <Link
                          key={item.id}
                          href={item.url}
                          onClick={onClose}
                          className="p-3 bg-white/[0.03] hover:bg-white/[0.08] border border-white/5 hover:border-[#A8201A] transition-all flex items-start gap-3 group"
                        >
                          <div className="p-2 bg-black/40 border border-white/10 shrink-0 mt-0.5">
                            {getCategoryIcon(item.category)}
                          </div>
                          <div className="min-w-0">
                            <h4 className="text-xs font-bold uppercase tracking-tight text-white group-hover:text-[#A8201A] transition-colors truncate">
                              {item.title}
                            </h4>
                            <p className="text-[11px] text-white/60 line-clamp-1 mt-0.5 font-light">
                              {item.subtitle}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Filtered Results List */}
              {filteredResults.length > 0 ? (
                filteredResults.map((item, index) => {
                  const isSelected = index === selectedIndex;
                  return (
                    <div
                      key={item.id}
                      data-result-index={index}
                      onMouseEnter={() => setSelectedIndex(index)}
                      onClick={() => {
                        onClose();
                        router.push(item.url);
                      }}
                      className={`group p-3 sm:p-4 rounded-sm cursor-pointer transition-all flex items-start justify-between gap-4 border ${
                        isSelected
                          ? 'bg-white/10 border-[#A8201A]'
                          : 'bg-transparent border-transparent hover:bg-white/5'
                      }`}
                    >
                      <div className="flex items-start gap-3.5 min-w-0">
                        <div
                          className={`p-2.5 rounded-sm shrink-0 mt-0.5 transition-colors ${
                            isSelected ? 'bg-[#A8201A] text-white' : 'bg-white/10 text-white/80'
                          }`}
                        >
                          {getCategoryIcon(item.category)}
                        </div>

                        <div className="min-w-0 space-y-1">
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="text-[10px] uppercase font-mono tracking-widest text-[#A8201A] font-semibold">
                              {item.category}
                            </span>
                            {item.badge && (
                              <span className="text-[9px] uppercase font-mono px-1.5 py-0.5 bg-white/10 text-white/70">
                                {item.badge}
                              </span>
                            )}
                          </div>

                          <h3
                            className={`text-sm sm:text-base font-bold uppercase tracking-tight transition-colors ${
                              isSelected ? 'text-white' : 'text-white/90 group-hover:text-white'
                            }`}
                          >
                            {item.title}
                          </h3>

                          <p className="text-xs text-white/60 font-light line-clamp-2">
                            {item.snippet}
                          </p>

                          {item.metadata && (
                            <div className="text-[10px] font-mono text-white/40 pt-1">
                              {item.metadata}
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="shrink-0 flex items-center gap-2 pt-1">
                        <span
                          className={`text-xs font-mono uppercase tracking-wider hidden sm:inline ${
                            isSelected ? 'text-[#A8201A]' : 'text-white/40'
                          }`}
                        >
                          Open
                        </span>
                        <ArrowUpRight
                          className={`w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${
                            isSelected ? 'text-[#A8201A]' : 'text-white/40'
                          }`}
                        />
                      </div>
                    </div>
                  );
                })
              ) : (
                <div className="p-8 text-center space-y-3">
                  <p className="text-sm text-white/70">
                    No architectural records found matching &ldquo;<span className="text-[#A8201A] font-semibold">{query}</span>&rdquo;.
                  </p>
                  <p className="text-xs text-white/40 max-w-md mx-auto font-light">
                    Try searching by trade keyword (e.g., &ldquo;Joinery&rdquo;, &ldquo;CDA&rdquo;, &ldquo;Waterproofing&rdquo;), location (e.g., &ldquo;E-7&rdquo;, &ldquo;Blue Area&rdquo;), or material specification.
                  </p>
                  <div className="pt-2">
                    <button
                      onClick={() => {
                        setQuery('');
                        setSelectedCategory('All');
                      }}
                      className="text-xs font-mono uppercase tracking-wider text-[#A8201A] hover:underline"
                    >
                      Reset Search Filters
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Bottom Keyboard Navigation Hints Bar */}
            <div className="px-4 py-3 bg-[#111111] border-t border-white/10 flex items-center justify-between text-[11px] text-white/50 font-mono">
              <div className="flex items-center gap-4">
                <span className="inline-flex items-center gap-1">
                  <kbd className="px-1.5 py-0.5 bg-white/10 border border-white/10 text-white/80 rounded text-[9px]">
                    ↑
                  </kbd>
                  <kbd className="px-1.5 py-0.5 bg-white/10 border border-white/10 text-white/80 rounded text-[9px]">
                    ↓
                  </kbd>{' '}
                  Navigate
                </span>
                <span className="inline-flex items-center gap-1">
                  <kbd className="px-1.5 py-0.5 bg-white/10 border border-white/10 text-white/80 rounded text-[9px]">
                    ↵
                  </kbd>{' '}
                  Select
                </span>
                <span className="inline-flex items-center gap-1 hidden sm:inline-flex">
                  <kbd className="px-1.5 py-0.5 bg-white/10 border border-white/10 text-white/80 rounded text-[9px]">
                    ESC
                  </kbd>{' '}
                  Close
                </span>
              </div>
              <div className="text-[10px] text-white/40">
                {filteredResults.length} {filteredResults.length === 1 ? 'Record' : 'Records'} Indexed
              </div>
          </div>
        </div>
      </div>
    );
  }
