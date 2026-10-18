'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#141414] text-white pt-20 pb-14 border-t border-white/10">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 pb-16 border-b border-white/10">
          {/* Column 1: Exact Lockup + Editorial Statement + Crimson Pill Button */}
          <div className="lg:col-span-5 space-y-8">
            <Link href="/" className="flex items-center gap-4">
              <div className="text-4xl font-serif tracking-tighter leading-none">
                <span className="text-[#A8201A]">RENOV</span>
                <span className="text-white">8</span>
              </div>
              <div className="h-8 w-[1px] bg-white/25" />
              <div className="flex flex-col text-[9px] tracking-[0.26em] text-white/75 uppercase leading-[1.35]">
                <span>Architecture</span>
                <span>Renovation</span>
                <span>Studio</span>
              </div>
            </Link>

            <p className="text-sm md:text-base text-white/80 leading-relaxed max-w-md font-light">
              RENOV8, Design spaces where form meets function, context informs design, and every
              project resonates with people and place to create meaningful experiences.
            </p>

            {/* Exact Pill-Shaped Crimson Border Button with Solid White Circle Arrow */}
            <div>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-4 border border-[#A8201A] rounded-full px-7 py-3.5 text-sm text-white hover:bg-[#A8201A] transition-all duration-300"
              >
                <span className="tracking-wide">Let&apos;s Connect</span>
                <span className="w-6 h-6 rounded-full bg-white text-[#141414] flex items-center justify-center group-hover:translate-x-1 transition-transform">
                  <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
                </span>
              </Link>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-3 space-y-5">
            <h3 className="text-base font-medium text-white tracking-wide">Quick Links</h3>
            <ul className="space-y-3.5 text-sm text-white/75 font-light">
              {[
                { label: 'Home', href: '/' },
                { label: 'Services', href: '/services' },
                { label: 'Our Work', href: '/work' },
                { label: 'R8 / Cost Planner', href: '/planner' },
                { label: 'Studio', href: '/studio' },
                { label: 'Publications & Guides', href: '/publications' },
                { label: "Let's Connect", href: '/contact' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-white hover:translate-x-1 inline-block transition-all"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact & Standards */}
          <div className="lg:col-span-4 space-y-6">
            <h3 className="text-base font-medium text-white tracking-wide">Contact</h3>
            <div className="space-y-2 text-sm">
              <p className="text-base font-medium text-white">Pakistan</p>
              <p className="text-white/75 leading-relaxed">
                Blue Area, Islamabad · Pakistan (33.7272° N · 73.0877° E)
              </p>
              <a
                href="https://wa.me/923335251768"
                target="_blank"
                rel="noreferrer"
                className="block text-white/75 hover:text-white transition-colors"
              >
                +92 333 525 1768 (WhatsApp &amp; Direct)
              </a>
              <a
                href="mailto:info@renov8.com.pk"
                className="block text-white/75 hover:text-white transition-colors"
              >
                info@renov8.com.pk
              </a>
            </div>

            <div className="space-y-2 text-sm pt-2">
              <p className="text-base font-medium text-white">Turnkey Standards</p>
              <p className="text-white/70 text-xs leading-relaxed">
                14 Specialist Categories · Itemized BOQ Contracts · 12-Month Workmanship Warranty
              </p>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="p-2.5 border border-white/15 hover:border-[#A8201A] text-white/75 hover:text-white transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="p-2.5 border border-white/15 hover:border-[#A8201A] text-white/75 hover:text-white transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="p-2.5 border border-white/15 hover:border-[#A8201A] text-white/75 hover:text-white transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-white/45 gap-4">
          <p>© 2026 Renov8 Architecture &amp; Renovation Studio, All Rights Reserved.</p>
          <p className="uppercase tracking-[0.2em] text-[11px]">
            Stone · Oak · Steel — Islamabad, Pakistan
          </p>
        </div>
      </div>

      {/* Exact Crimson Square Scroll-To-Top Button on Bottom Right */}
      <button
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className="fixed bottom-6 right-6 z-40 w-11 h-11 bg-[#A8201A] hover:bg-[#8B1914] text-white flex items-center justify-center shadow-lg transition-colors focus:outline-none"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </footer>
  );
}
