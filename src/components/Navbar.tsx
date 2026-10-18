'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, X, PhoneCall, Search, Menu } from 'lucide-react';
import SearchModal from '@/components/SearchModal';

const NAV_LINKS = [
  { label: 'Home', href: '/', index: '01' },
  { label: 'Services', href: '/services', index: '02' },
  { label: 'Our Work', href: '/work', index: '03' },
  { label: 'R8 / Cost Planner', href: '/planner', index: '04' },
  { label: 'Studio', href: '/studio', index: '05' },
  { label: 'Publications & Guides', href: '/publications', index: '06' },
  { label: "Let's Connect", href: '/contact', index: '07' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Prevent background scroll when mobile curtain is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Global Keyboard Shortcut: Cmd+K / Ctrl+K or '/'
  useEffect(() => {
    const handleGlobalKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsSearchOpen((prev) => !prev);
      } else if (
        e.key === '/' &&
        document.activeElement?.tagName !== 'INPUT' &&
        document.activeElement?.tagName !== 'TEXTAREA'
      ) {
        e.preventDefault();
        setIsSearchOpen(true);
      }
    };
    window.addEventListener('keydown', handleGlobalKeyDown);
    return () => window.removeEventListener('keydown', handleGlobalKeyDown);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[#141414]/95 backdrop-blur-md py-3.5 sm:py-4 border-b border-white/10 shadow-2xl'
            : 'bg-[#141414] py-4 sm:py-5'
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12 flex items-center justify-between">
          {/* Dual-Tone Serif Lockup for RENOV8 + Vertical Divider + 3-Line Subtitle */}
          <Link href="/" className="flex items-center gap-3 sm:gap-4 group shrink-0 select-none">
            <div className="text-2xl sm:text-3xl md:text-4xl font-serif tracking-tight leading-none flex items-baseline">
              <span className="text-[#A8201A] font-normal">RENOV</span>
              <span className="text-white font-normal ml-0.5 lining-nums">8</span>
            </div>
            <div className="hidden sm:block h-7 md:h-8 w-[1px] bg-white/25" />
            <div className="hidden sm:flex flex-col text-[9px] md:text-[10px] tracking-[0.26em] text-white/80 font-light leading-[1.35] uppercase">
              <span>Architecture</span>
              <span>Renovation</span>
              <span>Studio</span>
            </div>
          </Link>

          {/* Desktop Quick Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.slice(1, 6).map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-xs uppercase tracking-[0.2em] transition-colors relative py-1 ${
                    active ? 'text-white font-medium' : 'text-white/60 hover:text-white'
                  }`}
                >
                  {item.label}
                  {active && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#A8201A]"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right CTAs + Search Trigger + Clear Mobile Menu Button */}
          <div className="flex items-center gap-2.5 sm:gap-4">
            {/* Search Trigger Button */}
            <button
              type="button"
              onClick={() => setIsSearchOpen(true)}
              aria-label="Search studio archive (Cmd+K)"
              className="flex items-center gap-2 text-white/70 hover:text-white px-2.5 sm:px-3 py-1.5 border border-white/15 hover:border-white/40 transition-colors text-xs font-mono group bg-white/[0.03] touch-manipulation"
            >
              <Search className="w-3.5 h-3.5 text-[#A8201A] group-hover:scale-110 transition-transform" />
              <span className="hidden md:inline uppercase tracking-widest text-[10px]">Search</span>
              <kbd className="hidden lg:inline-flex items-center px-1.5 py-0.5 text-[9px] bg-white/10 text-white/50 border border-white/10 rounded">
                ⌘K
              </kbd>
            </button>

            <Link
              href="/planner"
              className="hidden sm:inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-white border border-[#A8201A] rounded-full px-4 sm:px-5 py-1.5 sm:py-2 hover:bg-[#A8201A] transition-all duration-300"
            >
              <span>PKR Planner</span>
            </Link>

            {/* High-Affordance Architectural Menu Button (Crystal Clear on Mobile & Desktop) */}
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              aria-expanded={isOpen}
              className="flex items-center gap-2 px-3 py-1.5 sm:py-2 border border-white/25 hover:border-[#A8201A] bg-white/[0.04] hover:bg-white/10 text-white transition-all text-xs font-mono tracking-wider touch-manipulation select-none"
            >
              {isOpen ? (
                <>
                  <X className="w-4 h-4 text-[#A8201A]" />
                  <span className="text-[11px] font-sans font-medium tracking-widest text-white">CLOSE</span>
                </>
              ) : (
                <>
                  <Menu className="w-4 h-4 text-[#A8201A]" />
                  <span className="text-[11px] font-sans font-medium tracking-widest text-white">MENU</span>
                </>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Global Architectural Search Command Palette */}
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />

      {/* Fullscreen Architectural Curtain Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-[#141414] text-white pt-24 sm:pt-28 pb-10 sm:pb-12 px-5 sm:px-8 md:px-16 overflow-y-auto flex flex-col justify-between"
          >
            <div className="max-w-[1440px] w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 my-auto">
              {/* Directory Navigation Links */}
              <div className="lg:col-span-7 flex flex-col justify-center space-y-2 sm:space-y-3">
                {/* Search Quick Launcher inside drawer */}
                <button
                  type="button"
                  onClick={() => {
                    setIsOpen(false);
                    setIsSearchOpen(true);
                  }}
                  className="w-full text-left p-3 sm:p-3.5 mb-2 sm:mb-3 bg-white/5 border border-white/15 hover:border-[#A8201A] text-white/80 hover:text-white flex items-center justify-between text-xs font-mono uppercase tracking-wider transition-colors group touch-manipulation"
                >
                  <span className="flex items-center gap-2.5 sm:gap-3 truncate">
                    <Search className="w-4 h-4 text-[#A8201A] shrink-0 group-hover:scale-110 transition-transform" />
                    <span className="truncate text-[11px] sm:text-xs">Search Services, Projects, Bylaws...</span>
                  </span>
                  <kbd className="hidden sm:inline px-2 py-0.5 bg-white/10 text-white/60 text-[10px] rounded font-mono shrink-0">
                    ⌘K
                  </kbd>
                </button>

                <p className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-white/40 mb-1 sm:mb-2">
                  Navigation Directory
                </p>
                {NAV_LINKS.map((item, idx) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + idx * 0.04 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="group flex items-baseline gap-4 sm:gap-6 py-2 sm:py-2.5 border-b border-white/10 hover:border-white/40 transition-colors touch-manipulation"
                    >
                      <span className="text-xs font-mono text-[#A8201A]">{item.index}</span>
                      <span className="text-xl sm:text-2xl md:text-5xl font-light uppercase tracking-tight group-hover:translate-x-3 transition-transform duration-300">
                        {item.label}
                      </span>
                      <ArrowUpRight className="ml-auto w-4 h-4 sm:w-6 sm:h-6 opacity-60 sm:opacity-0 group-hover:opacity-100 transition-opacity text-[#A8201A]" />
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Studio Coordinates & Standards */}
              <div className="lg:col-span-5 flex flex-col justify-end lg:pl-12 lg:border-l border-white/10 space-y-6 sm:space-y-8 pt-4 lg:pt-0">
                <div>
                  <h4 className="text-xs uppercase tracking-[0.25em] text-[#A8201A] mb-2 sm:mb-3">
                    Islamabad Studio (HQ)
                  </h4>
                  <p className="text-sm text-white/85 leading-relaxed">
                    Blue Area, Islamabad · Pakistan
                  </p>
                  <p className="text-xs font-mono text-white/50 mt-1">
                    33.7272° N · 73.0877° E · CDA &amp; DHA Compliant
                  </p>
                </div>

                <div>
                  <h4 className="text-xs uppercase tracking-[0.25em] text-[#A8201A] mb-2 sm:mb-3">
                    Direct Consultation Line
                  </h4>
                  <a
                    href="https://wa.me/923335251768"
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => setIsOpen(false)}
                    className="inline-flex items-center gap-2 text-sm sm:text-base text-white hover:text-[#A8201A] transition-colors font-mono"
                  >
                    <PhoneCall className="w-4 h-4 text-[#A8201A]" />
                    <span>+92 333 525 1768</span>
                  </a>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <p className="text-xs text-white/50 italic font-serif leading-relaxed">
                    &ldquo;We don&apos;t just renovate. We reimagine. Thoughtful interiors, precise
                    construction and beautiful finishes under one roof.&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
