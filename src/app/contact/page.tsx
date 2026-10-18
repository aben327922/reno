'use client';

import React, { useState } from 'react';
import { Send, PhoneCall, MapPin, CheckCircle2 } from 'lucide-react';
import { RENO_SERVICES } from '@/data/renoData';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="bg-[#F6F5F2] min-h-screen pt-32 pb-24 px-6 md:px-12">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* Left Studio Details */}
        <div className="lg:col-span-5 space-y-8">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-[#A8201A] block mb-3 font-semibold">
              Initiate a Project
            </span>
            <h1 className="text-5xl md:text-6xl font-bold uppercase tracking-tight leading-none">
              PLAN YOUR SPACE.
            </h1>
          </div>

          <p className="text-base text-black/70 leading-relaxed font-light">
            Whether commissioning a full villa renovation in Sector F-7, a commercial fit-out in
            Blue Area, or a ground-up turnkey build in DHA, our Islamabad studio is ready to
            collaborate.
          </p>

          <div className="space-y-6 pt-6 border-t border-black/15 text-sm">
            <div>
              <h3 className="text-xs uppercase tracking-[0.2em] text-[#A8201A] font-semibold mb-2">
                Islamabad Studio (HQ)
              </h3>
              <p className="text-black/80 flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#A8201A] shrink-0 mt-0.5" />
                <span>Blue Area, Islamabad · Pakistan</span>
              </p>
              <p className="font-mono text-xs text-black/50 mt-1 pl-6">
                33.7272° N · 73.0877° E (CDA &amp; DHA Compliant)
              </p>
            </div>

            <div>
              <h3 className="text-xs uppercase tracking-[0.2em] text-[#A8201A] font-semibold mb-2">
                Direct Consultation Line &amp; WhatsApp
              </h3>
              <p className="flex items-center gap-2 font-mono text-black/80">
                <PhoneCall className="w-4 h-4 text-[#A8201A] shrink-0" />
                <a
                  href="https://wa.me/923335251768"
                  target="_blank"
                  rel="noreferrer"
                  className="underline hover:text-[#A8201A] transition-colors"
                >
                  +92 333 525 1768
                </a>
              </p>
              <p className="text-xs text-black/50 mt-1 pl-6">
                Mon — Sat: 9:00 AM — 6:30 PM PKT
              </p>
            </div>

            <div>
              <h3 className="text-xs uppercase tracking-[0.2em] text-[#A8201A] font-semibold mb-2">
                Email
              </h3>
              <p className="text-black/75 pl-6">
                <a
                  href="mailto:info@renov8.com.pk"
                  className="underline hover:text-[#A8201A] transition-colors"
                >
                  info@renov8.com.pk
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Right Form */}
        <div className="lg:col-span-7 bg-white p-8 md:p-12 border border-black/10">
          {submitted ? (
            <div className="py-16 text-center space-y-4">
              <CheckCircle2 className="w-12 h-12 text-[#A8201A] mx-auto" />
              <h3 className="text-2xl font-bold uppercase">Project Brief Received</h3>
              <p className="text-sm text-black/65 max-w-md mx-auto leading-relaxed">
                Thank you for contacting RENO. One of our senior architects will review your
                project parameters and reach out within 24 business hours to arrange an initial site
                assessment.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-[0.2em] mb-2 font-semibold">
                    Full Name *
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="Your Full Name"
                    className="w-full border-b border-black/30 py-3 text-sm focus:outline-none focus:border-[#A8201A] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-[0.2em] mb-2 font-semibold">
                    Phone / WhatsApp *
                  </label>
                  <input
                    required
                    type="tel"
                    placeholder="+92 3..."
                    className="w-full border-b border-black/30 py-3 text-sm focus:outline-none focus:border-[#A8201A] transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-[0.2em] mb-2 font-semibold">
                    Primary Service Category *
                  </label>
                  <select
                    required
                    className="w-full border-b border-black/30 py-3 text-sm bg-transparent focus:outline-none focus:border-[#A8201A] transition-colors"
                  >
                    <option value="turnkey">Full Turnkey Delivery (14 Categories)</option>
                    {RENO_SERVICES.map((s) => (
                      <option key={s.id} value={s.id}>
                        {s.index} — {s.title}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-[0.2em] mb-2 font-semibold">
                    Project Location / Sector *
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="e.g. F-7/2, E-7, DHA Phase 2, Blue Area"
                    className="w-full border-b border-black/30 py-3 text-sm focus:outline-none focus:border-[#A8201A] transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-[0.2em] mb-2 font-semibold">
                  Project Scope &amp; Plot Size
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Share details regarding plot size (e.g., 1 Kanal, 10 Marla), desired finish level, and target timeline..."
                  className="w-full border border-black/20 p-4 text-sm focus:outline-none focus:border-[#A8201A] transition-colors"
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center gap-3 bg-[#141414] text-white px-8 py-4 text-xs uppercase tracking-[0.25em] font-semibold hover:bg-[#A8201A] transition-colors"
              >
                <span>Submit Project Brief</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          )}
        </div>
      </div>
    </main>
  );
}
