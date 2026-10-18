'use client';

import React, { useState } from 'react';
import { Send, PhoneCall, MapPin, CheckCircle2, ArrowUpRight, Globe, Lock, ShieldCheck } from 'lucide-react';
import { RENO_SERVICES } from '@/data/renoData';

const ISLAMABAD_SECTORS = [
  'CDA Sector (E-7, F-6, F-7, F-8, F-10, F-11)',
  'DHA Islamabad & Rawalpindi (Phases 1 — 5)',
  'Diplomatic Enclave (Access-Controlled Delivery)',
  'Bahria Town / Bahria Enclave',
  'Gulberg Greens / Chak Shahzad Farmhouses',
  'Blue Area / Commercial District',
  'Rawalpindi / Cantt / RDA Sectors',
  'Other / Nationwide Pakistan'
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [isOverseas, setIsOverseas] = useState(false);
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [serviceCategory, setServiceCategory] = useState('turnkey');
  const [sector, setSector] = useState(ISLAMABAD_SECTORS[0]);
  const [brief, setBrief] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const whatsappInquiry = `Hi Renov8 Studio, I would like to initiate an architectural consultation:%0A- Name: ${encodeURIComponent(fullName || 'Client')}%0A- Location: ${encodeURIComponent(sector)}%0A- Overseas Client: ${isOverseas ? 'Yes (Remote Management Required)' : 'No (Local)'}%0A- Scope: ${encodeURIComponent(brief || 'Turnkey inquiry')}`;

  return (
    <main className="bg-[#F6F5F2] min-h-screen pt-32 pb-24 px-6 md:px-12 text-[#141414]">
      <div className="max-w-[1440px] mx-auto space-y-16">
        {/* Header */}
        <div className="max-w-4xl space-y-4">
          <span className="text-xs uppercase tracking-[0.3em] text-[#A8201A] block font-semibold">
            Renov8 Studio Headquarters · Islamabad
          </span>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold uppercase tracking-tight leading-[0.95]">
            LET&apos;S CONNECT. <br />
            <span className="font-serif italic font-normal text-black/80 text-2xl sm:text-4xl md:text-5xl block mt-1">Start your space.</span>
          </h1>
          <p className="text-base md:text-xl text-black/70 font-light leading-relaxed max-w-2xl">
            Whether commissioning a full villa transformation in Sector F-7, an executive fit-out in
            Blue Area, or managing a residence remotely from abroad, our resident team is ready to
            assist.
          </p>
        </div>

        {/* Main 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start border-t border-black/15 pt-12">
          {/* Left Column: Studio Information & Coordinates */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-white border border-black/10 p-8 space-y-6">
              <span className="text-xs uppercase font-mono tracking-widest text-[#A8201A] block font-semibold">
                Studio Telemetry
              </span>

              <div className="space-y-6 text-xs text-black/80">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 font-bold uppercase tracking-wider text-black text-sm">
                    <MapPin className="w-4 h-4 text-[#A8201A]" />
                    <span>Islamabad Studio HQ</span>
                  </div>
                  <p className="pl-6 text-black/65 font-light">
                    Blue Area, Islamabad Capital Territory · Pakistan
                  </p>
                  <p className="pl-6 font-mono text-[11px] text-black/45">
                    33.7272° N · 73.0877° E (CDA &amp; DHA Compliance Desk)
                  </p>
                </div>

                <div className="space-y-1 border-t border-black/10 pt-4">
                  <div className="flex items-center gap-2 font-bold uppercase tracking-wider text-black text-sm">
                    <PhoneCall className="w-4 h-4 text-[#A8201A]" />
                    <span>Direct Consultation &amp; WhatsApp</span>
                  </div>
                  <p className="pl-6">
                    <a
                      href="https://wa.me/923335251768"
                      target="_blank"
                      rel="noreferrer"
                      className="font-mono text-sm underline hover:text-[#A8201A] transition-colors"
                    >
                      +92 333 525 1768
                    </a>
                  </p>
                  <p className="pl-6 text-[11px] text-black/50">
                    Mon — Sat: 9:00 AM — 6:30 PM PKT
                  </p>
                </div>

                <div className="space-y-1 border-t border-black/10 pt-4">
                  <div className="flex items-center gap-2 font-bold uppercase tracking-wider text-black text-sm">
                    <Globe className="w-4 h-4 text-[#A8201A]" />
                    <span>Direct Email Desk</span>
                  </div>
                  <p className="pl-6">
                    <a
                      href="mailto:info@renov8.com.pk"
                      className="underline hover:text-[#A8201A] transition-colors"
                    >
                      info@renov8.com.pk
                    </a>
                  </p>
                </div>
              </div>

              {/* Instant WhatsApp Quick Button */}
              <div className="pt-2 border-t border-black/10">
                <a
                  href="https://wa.me/923335251768?text=Hi%20Renov8,%20I%20would%20like%20to%20discuss%20a%20property%20renovation%20in%20Islamabad."
                  target="_blank"
                  rel="noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#141414] text-white py-3.5 text-xs uppercase tracking-[0.2em] font-semibold hover:bg-[#A8201A] transition-colors"
                >
                  <span>Chat on WhatsApp</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Confidentiality & Security Assurance Card */}
            <div className="p-6 bg-[#EAE8E3] border border-black/10 space-y-3">
              <div className="flex items-center gap-2 text-xs uppercase font-mono tracking-wider font-semibold text-[#A8201A]">
                <Lock className="w-4 h-4" />
                <span>Confidentiality &amp; Access Protocol</span>
              </div>
              <p className="text-xs text-black/70 leading-relaxed font-light">
                We handle Diplomatic Enclave entry, high-security clearance documentation, and private
                residential NDAs. All drawings, budgets, and site photographs are held in strict privacy.
              </p>
            </div>
          </div>

          {/* Right Column: Project Brief Inquiry Form */}
          <div className="lg:col-span-7 bg-white p-8 md:p-12 border border-black/10 shadow-sm">
            {submitted ? (
              <div className="py-16 text-center space-y-4">
                <CheckCircle2 className="w-14 h-14 text-[#A8201A] mx-auto" />
                <h3 className="text-3xl font-bold uppercase tracking-tight">Project Brief Received</h3>
                <p className="text-sm text-black/65 max-w-md mx-auto leading-relaxed font-light">
                  Thank you for contacting <strong className="text-black">Renov8</strong>. One of our senior
                  architectural engineers will review your project parameters and contact you within 24 business
                  hours to arrange an initial on-site feasibility survey.
                </p>
                <div className="pt-6">
                  <a
                    href={`https://wa.me/923335251768?text=${whatsappInquiry}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 bg-[#A8201A] text-white px-6 py-3 text-xs uppercase tracking-[0.2em] font-semibold hover:bg-[#141414] transition-colors"
                  >
                    <span>Send Immediate WhatsApp Copy</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold uppercase tracking-tight mb-1">
                    Submit Project Parameters
                  </h2>
                  <p className="text-xs text-black/60 font-light">
                    Fill out the preliminary details below so we can assign the relevant resident engineer.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                  <div>
                    <label className="block text-xs uppercase tracking-[0.2em] mb-2 font-semibold">
                      Full Name *
                    </label>
                    <input
                      required
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. Tariq Alvi"
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
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+92 3... or international"
                      className="w-full border-b border-black/30 py-3 text-sm focus:outline-none focus:border-[#A8201A] transition-colors font-mono"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs uppercase tracking-[0.2em] mb-2 font-semibold">
                      Primary Service Category *
                    </label>
                    <select
                      value={serviceCategory}
                      onChange={(e) => setServiceCategory(e.target.value)}
                      className="w-full border-b border-black/30 py-3 text-sm bg-transparent focus:outline-none focus:border-[#A8201A] transition-colors cursor-pointer"
                    >
                      <option value="turnkey">Full Turnkey Delivery (14 Divisions)</option>
                      {RENO_SERVICES.map((s) => (
                        <option key={s.id} value={s.id}>
                          {s.index} — {s.title}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-[0.2em] mb-2 font-semibold">
                      Location / Municipal Sector *
                    </label>
                    <select
                      value={sector}
                      onChange={(e) => setSector(e.target.value)}
                      className="w-full border-b border-black/30 py-3 text-sm bg-transparent focus:outline-none focus:border-[#A8201A] transition-colors cursor-pointer"
                    >
                      {ISLAMABAD_SECTORS.map((sec) => (
                        <option key={sec} value={sec}>
                          {sec}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Overseas Expat Checkbox */}
                <div className="p-4 bg-[#F6F5F2] border border-black/10 flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="overseasCheckbox"
                    checked={isOverseas}
                    onChange={(e) => setIsOverseas(e.target.checked)}
                    className="mt-1 cursor-pointer accent-[#A8201A]"
                  />
                  <label htmlFor="overseasCheckbox" className="text-xs text-black/80 cursor-pointer">
                    <strong className="block text-black uppercase tracking-wider">
                      Are you an overseas homeowner (UK, USA, Gulf)?
                    </strong>
                    Check here to enable our Remote Oversight protocol: 4K bi-weekly drone logs, escrow milestone draws, and synchronized WhatsApp video conferences.
                  </label>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-[0.2em] mb-2 font-semibold">
                    Scope Details &amp; Target Timeline
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={brief}
                    onChange={(e) => setBrief(e.target.value)}
                    placeholder="Share plot size (e.g. 1 Kanal, 10 Marla), current property condition, architectural preferences, and target handover month..."
                    className="w-full border border-black/20 p-4 text-sm focus:outline-none focus:border-[#A8201A] transition-colors"
                  />
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#141414] text-white px-9 py-4 text-xs uppercase tracking-[0.25em] font-semibold hover:bg-[#A8201A] transition-colors cursor-pointer"
                  >
                    <span>Submit Project Brief</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>

                  <a
                    href={`https://wa.me/923335251768?text=${whatsappInquiry}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-mono text-black/60 hover:text-[#A8201A] transition-colors"
                  >
                    <span>Or WhatsApp Direct</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
