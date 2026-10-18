'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, ArrowUp, ArrowUpRight, Star, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#141414] text-white pt-20 md:pt-28 pb-14 border-t border-white/10 overflow-hidden">
      {/* Giant Faded White Watermark Lettering from Original Renov8 Blueprint (.site-footer::before) */}
      <div
        aria-hidden="true"
        className="absolute left-1/2 -translate-x-1/2 bottom-8 sm:bottom-12 md:bottom-14 pointer-events-none select-none text-[84px] sm:text-[160px] md:text-[230px] lg:text-[310px] font-bold font-sans tracking-tight text-white/[0.045] leading-none whitespace-nowrap z-0"
      >
        RENOV8
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12">
        {/* Pre-Footer Callout Banner (Matching Original Renov8: "Your space is next / Make room for something better.") */}
        <div className="pb-16 mb-16 border-b border-white/10 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.3em] text-[#A8201A] font-semibold flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#A8201A]" />
              <span>Your space is next</span>
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold uppercase tracking-tight text-white leading-tight">
              MAKE ROOM FOR <br className="hidden sm:inline" />
              <span className="font-serif italic font-normal text-white/90">something better.</span>
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-4 border border-[#A8201A] rounded-full px-7 py-3.5 text-xs sm:text-sm text-white hover:bg-[#A8201A] transition-all duration-300"
            >
              <span className="tracking-widest uppercase font-semibold text-[11px]">Start a Project</span>
              <span className="w-6 h-6 rounded-full bg-white text-[#141414] flex items-center justify-center group-hover:translate-x-1 transition-transform">
                <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
              </span>
            </Link>
            <Link
              href="/planner"
              className="inline-flex items-center gap-2 border border-white/20 hover:border-white px-6 py-3.5 rounded-full text-xs sm:text-sm text-white/80 hover:text-white transition-all uppercase tracking-widest font-semibold text-[11px]"
            >
              <span>Launch Cost Planner</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Multi-Column Comprehensive Architectural Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-16 border-b border-white/10">
          {/* Column 1: Brand Identity & Monograph Statement (4 Cols) */}
          <div className="lg:col-span-4 space-y-6">
            <Link href="/" className="flex items-center gap-4">
              <div className="text-3xl sm:text-4xl font-serif tracking-tight leading-none flex items-baseline">
                <span className="text-[#A8201A]">RENOV</span>
                <span className="text-white ml-0.5 lining-nums">8</span>
              </div>
              <div className="h-8 w-[1px] bg-white/25" />
              <div className="flex flex-col text-[9px] tracking-[0.26em] text-white/75 uppercase leading-[1.35]">
                <span>Architecture</span>
                <span>Renovation</span>
                <span>Studio</span>
              </div>
            </Link>

            <p className="text-xs sm:text-sm text-white/75 leading-relaxed font-light max-w-sm">
              Founded in 2013, Renov8 unites architectural design thinking, itemized BOQ engineering,
              and 14 specialist trades under single-contract accountability from first survey to final handover.
            </p>

            {/* Google Public Trust Badge in Footer */}
            <div className="p-4 bg-white/[0.04] border border-white/10 space-y-2.5 max-w-sm">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-[#FBBC05]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-current" />
                  ))}
                </div>
                <span className="text-[10px] font-mono text-[#34A853] bg-[#34A853]/10 px-2 py-0.5 rounded-full flex items-center gap-1">
                  <CheckCircle2 className="w-2.5 h-2.5" />
                  <span>Google Verified</span>
                </span>
              </div>
              <a
                href="https://share.google/rxzJz24oNNs7Gnnw8"
                target="_blank"
                rel="noopener noreferrer"
                data-google-profile
                className="flex items-center justify-between text-xs text-white/85 hover:text-white group pt-1 border-t border-white/10"
              >
                <span>5.0 Rating on Google Business Profile</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#A8201A] group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>

            {/* Turnkey Assurance */}
            <div className="flex items-center gap-2 text-[11px] font-mono text-white/55">
              <ShieldCheck className="w-3.5 h-3.5 text-[#A8201A]" />
              <span>12-Month Workmanship Defect Warranty</span>
            </div>
          </div>

          {/* Column 2: 14 In-House Specialist Services (3 Cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs font-mono uppercase tracking-[0.25em] text-[#A8201A] font-semibold">
              14 Specialist Trades
            </h3>
            <ul className="space-y-2 text-xs text-white/70 font-light">
              {[
                { label: '01 Construction & Civil Works', href: '/services#construction-civil-works' },
                { label: '02 Home Renovation & Remodeling', href: '/services#home-renovation-remodeling' },
                { label: '03 Office & Commercial Fit-Out', href: '/services#office-commercial-fit-out' },
                { label: '04 Interior Design & Space Planning', href: '/services#interior-design-space-planning' },
                { label: '05 Kitchen & Bathroom Renovation', href: '/services#kitchen-bathroom-renovation' },
                { label: '06 Electrical, Plumbing & Ducted VRF', href: '/services#electrical-plumbing-hvac' },
                { label: '07 Flooring, Painting & Surfaces', href: '/services#flooring-painting-decorating' },
                { label: '08 Custom Joinery & Fine Cabinetry', href: '/services#carpentry-cabinetry-joinery' },
                { label: '09 Glass, Aluminium & Steel Apertures', href: '/services#glass-aluminium-metal-doors-windows' },
                { label: '10 False Ceilings & Acoustic Works', href: '/services#ceilings-partitions-acoustic-works' },
                { label: '11 Façade & Torch-On Waterproofing', href: '/services#exterior-facade-roofing-waterproofing' },
                { label: '12 Landscaping & Outdoor Living', href: '/services#landscaping-outdoor-living' },
                { label: '13 Turnkey Project Management', href: '/services#project-management-turnkey-solutions' },
                { label: '14 Property Maintenance & AMC', href: '/services#property-maintenance-repairs' },
              ].map((svc) => (
                <li key={svc.label}>
                  <Link
                    href={svc.href}
                    className="hover:text-white hover:translate-x-1 inline-block transition-all"
                  >
                    {svc.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Portfolio & Field Intelligence (2 Cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-xs font-mono uppercase tracking-[0.25em] text-[#A8201A] font-semibold">
              Atelier &amp; Portfolio
            </h3>
            <ul className="space-y-2.5 text-xs text-white/70 font-light">
              {[
                { label: 'Courtyard House (F-6)', href: '/work/courtyard-house' },
                { label: 'Quiet House (E-7)', href: '/work/quiet-house' },
                { label: 'Studio Nine Duplex', href: '/work/studio-nine' },
                { label: 'Margalla Ridge Estate', href: '/work' },
                { label: 'All Selected Works', href: '/work' },
                { label: 'The Studio & Founders', href: '/studio' },
                { label: 'CDA Bylaws Guide', href: '/publications' },
                { label: 'DHA Building Codes', href: '/publications' },
                { label: 'Monsoon Waterproofing', href: '/publications' },
                { label: 'House Renovation Cost', href: '/publications' },
              ].map((link) => (
                <li key={link.label}>
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

          {/* Column 4: Studio Contact & Location Coordinates (3 Cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs font-mono uppercase tracking-[0.25em] text-[#A8201A] font-semibold">
              Studio &amp; Contact
            </h3>
            <div className="space-y-3 text-xs text-white/75 font-light">
              <div>
                <p className="font-medium text-white">Islamabad Headquarters</p>
                <p className="text-white/65 leading-relaxed mt-0.5">
                  Blue Area, Islamabad · Pakistan
                </p>
                <p className="text-[10px] font-mono text-[#A8201A] mt-0.5">
                  33.7272° N · 73.0877° E (Twin Cities Atelier)
                </p>
              </div>

              <div className="pt-2 border-t border-white/10 space-y-1.5">
                <a
                  href="https://wa.me/923335251768"
                  target="_blank"
                  rel="noreferrer"
                  className="block text-white/80 hover:text-white transition-colors"
                >
                  <span className="text-white/50">WhatsApp: </span>
                  +92 333 525 1768
                </a>
                <a
                  href="tel:+923335251768"
                  className="block text-white/80 hover:text-white transition-colors"
                >
                  <span className="text-white/50">Direct Tel: </span>
                  +92 333 525 1768
                </a>
                <a
                  href="mailto:info@renov8.com.pk"
                  className="block text-white/80 hover:text-white transition-colors"
                >
                  <span className="text-white/50">Email: </span>
                  info@renov8.com.pk
                </a>
              </div>

              <div className="pt-2 border-t border-white/10 text-[11px] text-white/60 space-y-1">
                <p>Monday – Saturday: 09:00 – 18:00 PKT</p>
                <p className="text-[10px] text-white/45">Expat Digital Consultations Available 24/7</p>
              </div>

              {/* Social Channels */}
              <div className="flex items-center gap-2.5 pt-2">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="p-2 border border-white/15 hover:border-[#A8201A] text-white/75 hover:text-white transition-colors"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="p-2 border border-white/15 hover:border-[#A8201A] text-white/75 hover:text-white transition-colors"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook"
                  className="p-2 border border-white/15 hover:border-[#A8201A] text-white/75 hover:text-white transition-colors"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                  </svg>
                </a>
                <a
                  href="https://share.google/rxzJz24oNNs7Gnnw8"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-google-profile
                  aria-label="Google Business Profile"
                  className="p-2 border border-white/15 hover:border-[#A8201A] text-white/75 hover:text-white transition-colors"
                >
                  <span className="text-[10px] font-bold font-mono">G</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Base (Copyright, Monograph Stamp, Legal Links) */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-white/50 gap-4">
          <p>© 2026 Renov8 Architecture &amp; Renovation Studio. All Rights Reserved.</p>
          <p className="uppercase tracking-[0.25em] text-[10px] text-white/60 font-mono">
            Stone · Oak · Steel — Islamabad, Pakistan
          </p>
          <div className="flex items-center gap-6 text-[11px]">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Engagement
            </Link>
            <a
              href="https://share.google/rxzJz24oNNs7Gnnw8"
              target="_blank"
              rel="noopener noreferrer"
              data-google-profile
              className="hover:text-white transition-colors text-[#EA4335]/90 inline-flex items-center gap-1"
            >
              <span>Google Profile</span>
              <span className="text-[10px]">↗</span>
            </a>
          </div>
        </div>
      </div>

      {/* Crimson Square Scroll-To-Top Button on Bottom Right */}
      <button
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className="fixed bottom-6 right-6 z-40 w-11 h-11 bg-[#A8201A] hover:bg-[#8B1914] text-white flex items-center justify-center shadow-lg transition-colors focus:outline-none cursor-pointer"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </footer>
  );
}
