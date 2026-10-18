'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { ArrowUpRight, X, PhoneCall, Search } from 'lucide-react';
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
        className={`fixed top-0 left-0 right-0 z-[70] transition-all duration-500 ${
          scrolled
            ? 'bg-[#141414]/95 backdrop-blur-md py-3.5 sm:py-4 border-b border-white/10 shadow-2xl'
            : 'bg-[#141414] py-4 sm:py-5'
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12 flex items-center justify-between">
          {/* Dual-Tone Serif Lockup for RENOV8 + Vertical Divider + 3-Line Subtitle (Fitted for Mobile) */}
          <Link href="/" className="flex items-center gap-2.5 sm:gap-4 group shrink-0 select-none">
            <div className="text-2xl sm:text-3xl md:text-4xl font-serif tracking-tight leading-none flex items-baseline">
              <span className="text-[#A8201A] font-normal">RENOV</span>
              <span className="text-white font-normal ml-0.5 lining-nums">8</span>
            </div>
            <div className="h-6 sm:h-8 w-[1px] bg-white/25" />
            <div className="flex flex-col text-[8px] sm:text-[9px] md:text-[10px] tracking-[0.18em] sm:tracking-[0.26em] text-white/80 font-light leading-[1.3] uppercase">
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

          {/* Right CTAs + Search Trigger + Original 3x3 Architectural Grid Button */}
          <div className="flex items-center gap-1.5 sm:gap-4">
            {/* Search Trigger Button */}
            <button
              type="button"
              onClick={() => setIsSearchOpen(true)}
              aria-label="Search studio archive (Cmd+K)"
              className="flex items-center gap-1.5 sm:gap-2 text-white/70 hover:text-white px-2.5 sm:px-3 py-1.5 border border-white/15 hover:border-white/40 transition-colors text-xs font-mono group bg-white/[0.03] touch-manipulation cursor-pointer"
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

            {/* Original 3x3 Architectural Grid Button (Smooth X Morph with 44px touch target) */}
            <button
              type="button"
              onClick={() => setIsOpen((prev) => !prev)}
              aria-label={isOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              aria-expanded={isOpen}
              className="w-11 h-11 flex items-center justify-center text-white hover:text-[#A8201A] transition-colors focus:outline-none cursor-pointer touch-manipulation select-none"
            >
              {isOpen ? (
                <X className="w-6 h-6 sm:w-7 sm:h-7 text-white pointer-events-none" />
              ) : (
                <div className="grid grid-cols-3 gap-[4px] w-6 h-6 pointer-events-none items-center justify-center">
                  {Array.from({ length: 9 }).map((_, i) => (
                    <span
                      key={i}
                      className="w-[4.5px] h-[4.5px] bg-white rounded-[0.5px] transition-transform duration-300"
                    />
                  ))}
                </div>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Global Architectural Search Command Palette */}
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />

      {/* Fullscreen Architectural Curtain Drawer */}
      <div
        className={`fixed inset-0 z-[60] bg-[#141414] text-white pt-24 sm:pt-28 pb-10 sm:pb-12 px-5 sm:px-8 md:px-16 overflow-y-auto flex-col justify-between ${
          isOpen ? 'flex' : 'hidden'
        }`}
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
              className="w-full text-left p-3 sm:p-3.5 mb-2 sm:mb-3 bg-white/5 border border-white/15 hover:border-[#A8201A] text-white/80 hover:text-white flex items-center justify-between text-xs font-mono uppercase tracking-wider transition-colors group touch-manipulation cursor-pointer"
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
            {NAV_LINKS.map((item) => (
              <div key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="group flex items-baseline gap-4 sm:gap-6 py-2 sm:py-2.5 border-b border-white/10 hover:border-white/40 transition-colors touch-manipulation cursor-pointer"
                >
                  <span className="text-xs font-mono text-[#A8201A]">{item.index}</span>
                  <span className="text-xl sm:text-2xl md:text-5xl font-light uppercase tracking-tight group-hover:translate-x-3 transition-transform duration-300">
                    {item.label}
                  </span>
                  <ArrowUpRight className="ml-auto w-4 h-4 sm:w-6 sm:h-6 opacity-60 sm:opacity-0 group-hover:opacity-100 transition-opacity text-[#A8201A]" />
                </Link>
              </div>
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
          </div>
        </>
      );
    }
