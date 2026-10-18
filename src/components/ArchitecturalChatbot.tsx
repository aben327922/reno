'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MessageSquare,
  X,
  Send,
  Sparkles,
  RotateCcw,
  Compass,
  FileText,
  Calculator,
  ShieldCheck,
  ArrowUpRight,
  Minimize2,
  ChevronRight,
  Bot,
  PhoneCall,
  CheckCircle2,
} from 'lucide-react';
import { RENO_SERVICES, ServiceCategory } from '@/data/renoData';

interface ChatMessage {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  links?: { label: string; href: string }[];
  waPrompt?: string;
  timestamp: string;
}

const KNOWLEDGE_RESPONSES: Record<
  string,
  {
    title: string;
    text: string;
    links?: { label: string; href: string }[];
    waPrompt: string;
  }
> = {
  cost: {
    title: 'Islamabad & Rawalpindi Renovation Cost Benchmarks (2026)',
    text: `Based on current 2026 material unit rates across Islamabad:\n
• Standard Turnkey Renovation: PKR 3,500 – 5,500 / sq.ft (quality local porcelain, ash veneer cabinetry, standard MEP upgrades).\n
• Signature Architectural Finish: PKR 6,500 – 9,500 / sq.ft (imported European porcelain, Blum soft-close joinery, quartz waterfall counters, VRF HVAC).\n
• 10 Marla Full Transformation: Typically PKR 3.8M – 7.5M+ depending on wet area and kitchen modifications.\n
• 1 Kanal Residence Overhaul: Typically PKR 7.5M – 16.5M+ for complete layout reconfiguration, facade restyling, and MEP loops.\n
Every Renov8 project is executed under a 100% itemized Bill of Quantities (BOQ) with fixed unit rates.`,
    links: [
      { label: '📊 Open Interactive BOQ Planner', href: '/planner' },
      { label: '📖 Read 2026 Renovation Cost Guide', href: '/publications' },
    ],
    waPrompt: 'Hi Renov8, I would like a preliminary BOQ cost estimation for my property in Islamabad.',
  },
  cda: {
    title: 'CDA Building By-Laws & Renovation Permissions',
    text: `Key Capital Development Authority (CDA) regulations for Islamabad:\n
• Renovation Permissions: Minor interior cosmetic work does not require CDA clearance. However, removing load-bearing walls, porch extensions, or altering facade elevations requires formal drawing submission (Form A1/A2).\n
• Setbacks & FAR: Compulsory open space (COS) front, rear, and side setbacks must be strictly maintained to qualify for a CDA Completion Certificate.\n
• Rainwater Harvesting Mandate: Underground recharge bore pits and collection tanks are legally mandatory for plots of 1 Kanal (500 sq.yds) and above in Islamabad.\n
Renov8 handles the complete municipal liaison process, including structural vetting and drawing clearance.`,
    links: [
      { label: '📜 Read CDA Bylaws Architectural Guide', href: '/publications' },
      { label: '🏛️ Read CDA Completion Certificate Rules', href: '/publications' },
    ],
    waPrompt: 'Hi Renov8, I need architectural guidance regarding CDA building bylaws and approval drawings.',
  },
  dha: {
    title: 'DHA Islamabad & Bahria Enclave By-Laws',
    text: `DHA & Bahria Town building codes for residential properties:\n
• DHA Islamabad/Rawalpindi (Phases 1–5): Strict regulations govern boundary wall heights, overhead water tank placement, and basement excavation retaining walls.\n
• Bahria Enclave: Façade color palettes and architectural parapets require society design committee vetting prior to mobilization.\n
Our resident engineering staff is certified to manage DHA, Bahria, and RDA site compliance from groundbreaking to handover.`,
    links: [
      { label: '🏛️ DHA Islamabad-Rawalpindi Bylaws Guide', href: '/publications' },
      { label: '🏡 Bahria Enclave Renovation Submission Rules', href: '/publications' },
    ],
    waPrompt: 'Hi Renov8, I need assistance navigating DHA / Bahria Enclave renovation permissions.',
  },
  waterproofing: {
    title: 'Monsoon Waterproofing & Seepage Defense Protocol',
    text: `Our multi-ply building envelope protection against Islamabad monsoon humidity:\n
• Roof Slab Protection: 4-layer system including primer, SBS torch-on elastomeric polymer membrane, slope screed, and protective tiles.\n
• Basement Damp Tanking: Positive-side drainage boards with sub-slab capillary barriers resisting hydrostatic groundwater pressure from the Margalla foothills.\n
• Wet Areas (Bathrooms & Kitchens): Dual-coat polymer-modified cementitious waterproof membranes applied behind all tiles and shower thresholds.\n
All waterproofing treatments carry a formal written performance warranty.`,
    links: [
      { label: '🌧️ Read Monsoon Waterproofing Guide', href: '/publications' },
      { label: '🛡️ Explore Exterior Envelope Service', href: '/services' },
    ],
    waPrompt: 'Hi Renov8, I have a moisture seepage or roof leakage issue and need an engineering site inspection.',
  },
  overseas: {
    title: 'Projects From Abroad: Overseas Client Protocol',
    text: `Over 40% of our luxury residential portfolio is commissioned by overseas Pakistanis residing in the UK, USA, Canada, and the Gulf:\n
• Bi-Weekly 4K Drone Logs: High-definition aerial site footage and interior walk-through scans uploaded to your cloud folder.\n
• Escrow Milestone Draws: Zero upfront lump sum risk. Disbursements are unlocked strictly upon verified engineering milestone signoffs.\n
• Dedicated WhatsApp Engineering Desk: Daily synchronized communication with the Lead Architect, Project Engineer, and Procurement Manager.\n
• CDA/DHA Custodianship: Complete authority representation handled on your behalf.`,
    links: [
      { label: '✈️ Read Remote Oversight Protocol', href: '/#remote-oversight' },
      { label: '📅 Book Video Consultation', href: '/contact' },
    ],
    waPrompt: 'Hi Renov8, I am an overseas homeowner interested in remote project management for Islamabad.',
  },
  services: {
    title: '14 In-House Specialist Disciplines',
    text: `Renov8 unites 14 specialized trades under single-contract accountability:\n
1. Construction & Civil Works\n
2. Home Renovation & Remodeling\n
3. Office & Commercial Fit-Out\n
4. Interior Design & Space Planning\n
5. Kitchens & Luxury Bathrooms\n
6. Electrical, Plumbing & HVAC\n
7. Flooring, Painting & Finishes\n
8. Custom Carpentry & Joinery\n
9. Glass, Aluminium & Metalwork\n
10. Ceilings, Partitions & Acoustics\n
11. Exterior Facade & Waterproofing\n
12. Landscaping & Outdoor Living\n
13. Property Care & Annual Maintenance\n
14. Project Management & Turnkey Delivery\n
Every discipline is managed with an on-site resident engineer and a 12-month workmanship guarantee.`,
    links: [
      { label: '🏗️ Explore All 14 In-House Services', href: '/services' },
      { label: '📁 View Curated Portfolio', href: '/work' },
    ],
    waPrompt: 'Hi Renov8, I would like to review your 14 turnkey service capabilities for my project.',
  },
};

const INITIAL_MESSAGE: ChatMessage = {
  id: 'msg-initial',
  sender: 'bot',
  text: `Welcome to Renov8. I am your Architectural Concierge.\n
How can I assist your residential or commercial project in Islamabad today? You can select a quick advisory topic below or type your inquiry.`,
  links: [
    { label: '📊 Calculate Renovation Cost', href: '/planner' },
    { label: '📜 CDA & DHA Building Bylaws', href: '/publications' },
    { label: '🏗️ Explore 14 In-House Services', href: '/services' },
  ],
  waPrompt: 'Hi Renov8, I would like to consult with an architect regarding my space.',
  timestamp: 'Just now',
};

export default function ArchitecturalChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([INITIAL_MESSAGE]);
  const [inputVal, setInputVal] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  // Auto-scroll to bottom of chat
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen, isTyping]);

  const handleSend = (textToSend?: string) => {
    const query = (textToSend || inputVal).trim();
    if (!query) return;

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInputVal('');
    setIsTyping(true);

    // Keyword matching response
    setTimeout(() => {
      const q = query.toLowerCase();
      let matchedResponse = KNOWLEDGE_RESPONSES.cost;

      if (q.includes('cda') || q.includes('bylaw') || q.includes('permit') || q.includes('approval') || q.includes('setback') || q.includes('far')) {
        matchedResponse = KNOWLEDGE_RESPONSES.cda;
      } else if (q.includes('dha') || q.includes('bahria') || q.includes('rda')) {
        matchedResponse = KNOWLEDGE_RESPONSES.dha;
      } else if (q.includes('waterproof') || q.includes('seepage') || q.includes('leak') || q.includes('damp') || q.includes('monsoon')) {
        matchedResponse = KNOWLEDGE_RESPONSES.waterproofing;
      } else if (q.includes('overseas') || q.includes('remote') || q.includes('abroad') || q.includes('uk') || q.includes('usa') || q.includes('dubai') || q.includes('expat')) {
        matchedResponse = KNOWLEDGE_RESPONSES.overseas;
      } else if (q.includes('service') || q.includes('trade') || q.includes('what do you do') || q.includes('all')) {
        matchedResponse = KNOWLEDGE_RESPONSES.services;
      } else if (q.includes('cost') || q.includes('price') || q.includes('rate') || q.includes('sqft') || q.includes('budget') || q.includes('marla') || q.includes('kanal') || q.includes('kharcha')) {
        matchedResponse = KNOWLEDGE_RESPONSES.cost;
      } else {
        matchedResponse = {
          title: 'Direct Architectural Consultation',
          text: `Thank you for sharing your inquiry. For specific requirements regarding "${query}", our Islamabad resident engineering team can provide immediate tailored guidance and arrange an on-site feasibility review.`,
          links: [
            { label: '📊 Calculate Preliminary BOQ', href: '/planner' },
            { label: '📁 Explore Selected Works', href: '/work' },
          ],
          waPrompt: `Hi Renov8, I have a specific project inquiry: "${query}". Please connect me with a project engineer.`,
        };
      }

      const botMsg: ChatMessage = {
        id: `bot-${Date.now()}`,
        sender: 'bot',
        text: matchedResponse.text,
        links: matchedResponse.links,
        waPrompt: matchedResponse.waPrompt,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 700);
  };

  const resetChat = () => {
    setMessages([INITIAL_MESSAGE]);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* CHAT WINDOW MODAL */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 25, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 25, scale: 0.95 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="w-[92vw] sm:w-[420px] h-[580px] max-h-[85vh] bg-[#F6F5F2] border border-black/20 shadow-2xl flex flex-col justify-between overflow-hidden mb-4"
          >
            {/* Header */}
            <div className="bg-[#141414] text-white p-4 flex items-center justify-between border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-none bg-[#A8201A] text-white flex items-center justify-center font-serif italic font-bold text-sm">
                  R8
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs uppercase font-mono tracking-widest font-bold">
                      RENOV8 CONCIERGE
                    </span>
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  </div>
                  <span className="text-[10px] text-white/50 block font-mono">
                    Islamabad Architectural AI Desk
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={resetChat}
                  title="Reset Conversation"
                  className="p-1.5 text-white/60 hover:text-white transition-colors cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  title="Close Concierge"
                  className="p-1.5 text-white/60 hover:text-white transition-colors cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Messages Body */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 text-xs">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
                >
                  <div
                    className={`max-w-[85%] p-3.5 leading-relaxed space-y-2.5 ${
                      msg.sender === 'user'
                        ? 'bg-[#141414] text-white'
                        : 'bg-white border border-black/10 text-black shadow-sm'
                    }`}
                  >
                    <p className="whitespace-pre-line font-light">{msg.text}</p>

                    {/* Interactive Action Links */}
                    {msg.links && msg.links.length > 0 && (
                      <div className="pt-2 border-t border-black/10 flex flex-col gap-1.5">
                        {msg.links.map((link, idx) => (
                          <Link
                            key={idx}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className="inline-flex items-center justify-between text-[11px] font-semibold text-[#A8201A] hover:underline"
                          >
                            <span>{link.label}</span>
                            <ArrowUpRight className="w-3 h-3" />
                          </Link>
                        ))}
                      </div>
                    )}

                    {/* WhatsApp Action Button */}
                    {msg.waPrompt && (
                      <div className="pt-2 border-t border-black/10">
                        <a
                          href={`https://wa.me/923335251768?text=${encodeURIComponent(msg.waPrompt)}`}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 bg-[#141414] text-white px-3 py-1.5 text-[10px] uppercase font-mono tracking-wider font-semibold hover:bg-[#A8201A] transition-colors"
                        >
                          <span>Speak to Resident Engineer</span>
                          <ArrowUpRight className="w-3 h-3" />
                        </a>
                      </div>
                    )}
                  </div>
                  <span className="text-[9px] text-black/40 mt-1 px-1 font-mono">{msg.timestamp}</span>
                </div>
              ))}

              {/* Typing Animation */}
              {isTyping && (
                <div className="flex items-center gap-1.5 bg-white border border-black/10 p-3 max-w-[120px]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#A8201A] animate-bounce" />
                  <span className="w-1.5 h-1.5 rounded-full bg-[#A8201A] animate-bounce [animation-delay:0.2s]" />
                  <span className="w-1.5 h-1.5 rounded-full bg-[#A8201A] animate-bounce [animation-delay:0.4s]" />
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick Prompt Suggestion Chips */}
            <div className="px-4 py-2 bg-white/70 border-t border-black/10 flex gap-1.5 overflow-x-auto whitespace-nowrap scrollbar-none">
              {[
                'Renovation Cost',
                'CDA Bylaws',
                '14 Services',
                'Overseas Expat',
                'Waterproofing',
              ].map((chip) => (
                <button
                  key={chip}
                  onClick={() => handleSend(chip)}
                  className="px-2.5 py-1 bg-[#F6F5F2] hover:bg-[#141414] hover:text-white border border-black/10 text-[10px] uppercase font-mono tracking-wider transition-colors cursor-pointer shrink-0"
                >
                  {chip}
                </button>
              ))}
            </div>

            {/* Input Bar */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="p-3 bg-white border-t border-black/15 flex items-center gap-2"
            >
              <input
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                placeholder="Ask about cost, bylaws, materials, or scope..."
                className="flex-1 bg-transparent text-xs px-3 py-2 border border-black/20 focus:outline-none focus:border-[#141414]"
              />
              <button
                type="submit"
                disabled={!inputVal.trim()}
                className="bg-[#141414] disabled:opacity-30 text-white p-2.5 hover:bg-[#A8201A] transition-colors cursor-pointer"
                aria-label="Send"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FLOATING TRIGGER BUTTON WITH ARCHITECTURAL BADGE */}
      <div className="flex items-center gap-3">
        {/* Teaser pill that shows on desktop */}
        {!isOpen && (
          <motion.button
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => setIsOpen(true)}
            className="hidden sm:flex items-center gap-2.5 bg-[#141414] text-white px-4 py-2.5 text-xs font-mono uppercase tracking-wider shadow-xl border border-white/10 hover:border-[#A8201A] transition-all cursor-pointer group"
          >
            <span className="w-2 h-2 rounded-full bg-[#A8201A] animate-ping" />
            <span>Plan Your Renovation · Chat AI</span>
          </motion.button>
        )}

        {/* Primary Floating Action Button with Custom Monogram Icon */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(!isOpen)}
          className="relative w-14 h-14 bg-[#141414] hover:bg-[#A8201A] text-white shadow-2xl flex items-center justify-center transition-colors cursor-pointer border border-white/20"
          aria-label="Open Architectural Concierge"
        >
          {isOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <div className="flex flex-col items-center justify-center">
              <span className="font-serif italic font-bold text-lg leading-none tracking-tight">
                R8
              </span>
              <span className="text-[8px] font-mono tracking-widest uppercase text-white/70 mt-0.5">
                AI
              </span>
            </div>
          )}

          {/* Live Indicator Pill */}
          {!isOpen && (
            <span className="absolute -top-1 -right-1 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#A8201A] opacity-75" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-[#A8201A]" />
            </span>
          )}
        </motion.button>
      </div>
    </div>
  );
}
