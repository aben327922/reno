'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  Send,
  RotateCcw,
  Compass,
  FileText,
  Calculator,
  ShieldCheck,
  ArrowUpRight,
  PhoneCall,
  CheckCircle2,
  Clock,
  Sparkles,
  ExternalLink,
  Building2,
  Layers
} from 'lucide-react';

interface ChatCard {
  image: string;
  badge: string;
  title: string;
  metrics?: { label: string; value: string };
  deliverables?: string[];
}

interface ChatMessage {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  card?: ChatCard;
  links?: { label: string; href: string }[];
  waPrompt?: string;
  timestamp: string;
}

interface KnowledgeEntry {
  title: string;
  text: string;
  card: ChatCard;
  links: { label: string; href: string }[];
  waPrompt: string;
}

const KNOWLEDGE_RESPONSES: Record<string, KnowledgeEntry> = {
  cost: {
    title: 'Islamabad & Rawalpindi Renovation Cost Benchmarks (2026)',
    text: 'Here are the current 2026 verified unit rates across CDA sectors and DHA Islamabad. Every Renov8 project is executed under a 100% itemized Bill of Quantities (BOQ) with fixed unit rates:',
    card: {
      image: '/images/hero/renov8-home-hero.webp',
      badge: '2026 BOQ Model',
      title: 'Islamabad Residential Renovation Valuation',
      metrics: { label: 'Benchmark Rate', value: 'PKR 1,250 – 2,850/sq.ft' },
      deliverables: [
        'Standard Turnkey: PKR 3,500 – 5,500 / sq.ft (Local porcelain, ash veneer, standard MEP)',
        'Signature Architectural: PKR 6,500 – 9,500 / sq.ft (Imported slabs, Blum joinery, ducted VRF)',
        '10 Marla Full Transformation: Typical budget PKR 3.8M – 7.5M+',
        '1 Kanal Estate Overhaul: Typical budget PKR 7.5M – 16.5M+',
        'Escrow-like milestone draw schedule (20% / 30% / 30% / 20%)'
      ]
    },
    links: [
      { label: '📊 Calculate Your Exact BOQ in R8 / Plan', href: '/planner' },
      { label: '📖 Read 2026 Renovation Cost Guide', href: '/publications' },
    ],
    waPrompt: 'Hi Renov8, I would like a preliminary itemized BOQ cost estimate for my property in Islamabad.',
  },

  cda: {
    title: 'CDA Building By-Laws & Renovation Permissions',
    text: 'Navigating Capital Development Authority (CDA) regulations in Islamabad. Our resident engineering team handles all municipal approvals from initial vetting to final occupancy certificate:',
    card: {
      image: '/images/concepts/material-study.webp',
      badge: 'CDA Directorate',
      title: 'CDA Form A1 & A2 Architectural Compliance',
      metrics: { label: 'Compliance Level', value: '100% CDA Certified' },
      deliverables: [
        'Cosmetic Work: Interior painting and surface tiling do not require formal CDA notice.',
        'Structural Changes: Removing load-bearing walls or porch changes requires Form A1/A2 submission.',
        'Compulsory Open Space (COS): Front, rear, and side setbacks must be strictly maintained.',
        'Rainwater Harvesting Mandate: Recharge bore wells legally mandatory on plots 1 Kanal (500 sq.yd)+.',
        'Full representation: Scrutiny fee coordination and completion certificate procurement.'
      ]
    },
    links: [
      { label: '📜 Read CDA Bylaws Architectural Guide', href: '/publications' },
      { label: '🏛️ Read CDA Completion Certificate Rules', href: '/publications' },
    ],
    waPrompt: 'Hi Renov8, I need architectural guidance regarding CDA building bylaws and approval drawings.',
  },

  dha: {
    title: 'DHA Islamabad & Bahria Enclave By-Laws',
    text: 'Building regulations and site mobilization protocols across DHA Phases 1–5, Bahria Town, and Rawalpindi municipal sectors:',
    card: {
      image: '/images/concepts/courtyard-house.webp',
      badge: 'DHA & Bahria Town',
      title: 'DHA Building Control & Excavation Protocols',
      metrics: { label: 'Jurisdiction', value: 'DHA Phase 1–5 & Bahria' },
      deliverables: [
        'Basement Excavation: Strict retaining wall stability rules and soil testing before digging.',
        'Boundary Walls & Tanks: Regulated height caps and concealed overhead water tank screens.',
        'Bahria Enclave: Façade elevation palettes and parapets vetted by society design committee.',
        'Resident Site Engineering: Certified site supervisors handling security gate passes.'
      ]
    },
    links: [
      { label: '🏛️ DHA Islamabad & Rawalpindi Bylaws Guide', href: '/publications' },
      { label: '🏡 Bahria Enclave Renovation Submission Rules', href: '/publications' },
    ],
    waPrompt: 'Hi Renov8, I need assistance navigating DHA / Bahria Enclave renovation permissions.',
  },

  kitchen: {
    title: 'Dual Culinary Kitchen Suites & Luxury Bathrooms',
    text: 'Engineered specifically for modern living and South Asian culinary requirements with heavy-duty extraction and European kinetic joinery:',
    card: {
      image: '/images/services/Kitchen-and-bathroom-renovation.avif',
      badge: 'Culinary & Spa Suites',
      title: 'Dual Show & Prep Kitchens + Monolithic Wet Rooms',
      metrics: { label: 'Hardware Spec', value: 'Blumotion 200k Cycles' },
      deliverables: [
        'Outer Show Kitchen: Sintered stone waterfall island with concealed induction and wine cooler.',
        'Preparation Dirty Kitchen: Commercial-grade 1200 CFM ducted exhaust for heavy cooking.',
        'Kinetic Hardware: Blum Aventos electronic servo-drive lifts and soft-close tandembox drawers.',
        'Sanitary Architecture: Grohe/Kohler thermostatic mixers and wall-hung concealed cisterns.',
        '100% Flood-Tested: Polymer-modified elastomeric membrane behind all shower tiles.'
      ]
    },
    links: [
      { label: '🍳 Explore Kitchen & Bathroom Service', href: '/services#kitchen-bathroom-renovation' },
      { label: '📁 View F-7 Chef Kitchen Case Study', href: '/work/f7-culinary-kitchen-suite' },
    ],
    waPrompt: 'Hi Renov8, I want to redesign my kitchen and bathrooms with dual show/prep suites.',
  },

  joinery: {
    title: 'Architectural Carpentry & Custom Millwork',
    text: 'Direct factory-precision joinery in solid European oak, Burmese teak, and fluted paneling delivered with millimeter tolerances:',
    card: {
      image: '/images/services/cabinet-jointry.webp',
      badge: 'Bespoke Millwork',
      title: 'Solid Oak, Teak Doors & Dressing Suites',
      metrics: { label: 'Timber Source', value: 'FSC European Oak & Teak' },
      deliverables: [
        'Full-height walk-in dressing suites with concealed warm LED reveal channels.',
        'Tactile fluted wall paneling and suspended media credenzas with mitred joins.',
        'Solid-core architectural doors with Italian magnetic mortise locks and drop seals.',
        'Factory-precision CNC veneer pressing eliminating on-site saw dust and delay.'
      ]
    },
    links: [
      { label: '🪵 Explore Custom Joinery Trade', href: '/services#carpentry-cabinetry-joinery' },
      { label: '📁 View Quiet House Ash Timber Joinery', href: '/work/quiet-house' },
    ],
    waPrompt: 'Hi Renov8, I am looking for custom timber millwork, wardrobes, or architectural doors.',
  },

  waterproofing: {
    title: 'Monsoon Waterproofing & Seepage Defense',
    text: 'Multi-layer building envelope protection engineered to resist Islamabad torrential monsoon downpours and Margalla foothill moisture:',
    card: {
      image: '/images/services/roofing-facade-waterproofing.webp',
      badge: 'Envelope Defense',
      title: 'Multi-Coat SBS Elastomeric Roof & Basement Tanking',
      metrics: { label: 'Warranty', value: '10-Year Water Barrier' },
      deliverables: [
        'Roof Slab Defense: 4-layer system (bitumen primer, SBS torch-on membrane, slope screed, tiles).',
        'Basement Damp Tanking: Positive-side drainage boards with sub-slab capillary moisture breaks.',
        'Chemical Grouting: Negative-side polyurethane pressure injection for existing retaining wall seepage.',
        'Full 48-Hour Hydrostatic Water Ponding Test before final tile installation.'
      ]
    },
    links: [
      { label: '🌧️ Read Monsoon Waterproofing Guide', href: '/publications#journal-waterproofing-islamabad-monsoon-guide' },
      { label: '🛡️ Explore Exterior Envelope Service', href: '/services#exterior-facade-roofing-waterproofing' },
    ],
    waPrompt: 'Hi Renov8, I have a moisture seepage or roof leakage issue and need an engineering site inspection.',
  },

  mep: {
    title: 'Concealed MEP, VRF Air-Conditioning & Smart Grids',
    text: 'Concealed infrastructure planning uniting central ducted climate control, acoustic drainage, and pure copper electrical distribution:',
    card: {
      image: '/images/services/electrical-plumbing-hvac.avif',
      badge: 'MEP Infrastructure',
      title: 'Concealed VRF Loops & PEX Plumbing Manifolds',
      metrics: { label: 'Testing Standard', value: 'Hydrostatic 10-Bar Tested' },
      deliverables: [
        'Concealed ducted VRF inverter climate control integrated into perimeter shadow gaps.',
        'Linear slot diffusers providing silent, draft-free air distribution without ceiling drops.',
        'PEX loop manifold plumbing with continuous pipe runs and zero concealed wall joints.',
        'Pure copper rewiring with Schneider automated distribution boards and surge protectors.'
      ]
    },
    links: [
      { label: '⚡ Explore MEP & HVAC Systems', href: '/services#electrical-plumbing-hvac' },
      { label: '📖 Read Ducted VRF vs Split AC Guide', href: '/publications#journal-hvac-concealed-duct-planning' },
    ],
    waPrompt: 'Hi Renov8, I would like to integrate central concealed VRF AC and modernized MEP infrastructure.',
  },

  overseas: {
    title: 'Projects From Abroad: Expatriate Remote Protocol',
    text: 'Over 40% of our luxury residential portfolio is commissioned by overseas Pakistanis in the UK, USA, Canada, and the Gulf:',
    card: {
      image: '/images/hero/hero-isb-sky-architecture.webp',
      badge: 'Remote Oversight',
      title: '4K Drone Logs, Video Telemetry & Escrow Draws',
      metrics: { label: 'Client Base', value: '40%+ Expat Managed' },
      deliverables: [
        'Bi-Weekly 4K Drone Logs: Aerial sweeps and 360° interior walkthroughs uploaded to your portal.',
        'Escrow Milestone Draws: Zero upfront lump sum risk. Payments tied to inspected milestone signoffs.',
        'Synchronized WhatsApp Desk: Real-time coordination with Lead Architect and Site Engineer.',
        'Complete Municipal Custodianship: CDA and DHA approvals handled entirely in your absence.'
      ]
    },
    links: [
      { label: '✈️ Read Remote Oversight Protocol', href: '/#remote-portal' },
      { label: '📅 Book a Video Consultation', href: '/contact' },
    ],
    waPrompt: 'Hi Renov8, I am an overseas homeowner interested in remote project management for Islamabad.',
  },

  commercial: {
    title: 'Corporate Office & Commercial Fit-Out',
    text: 'Turnkey commercial environments, retail boutiques, and corporate headquarters tailored for Islamabad business districts and Blue Area:',
    card: {
      image: '/images/services/office-and-commercial-space.avif',
      badge: 'Commercial Studio',
      title: 'Turnkey Workplace Interiors & Boardrooms',
      metrics: { label: 'Execution', value: 'Fast-Track Turnaround' },
      deliverables: [
        'Acoustic STC double-glazed glass meeting cubes and executive boardroom suites.',
        'Open-plan ergonomic workstations with integrated underfloor power & network trunks.',
        'Executive hospitality coffee bars and brand-focused reception foyers.',
        'Night-shift and weekend construction schedules to prevent operational downtime.'
      ]
    },
    links: [
      { label: '🏢 Explore Commercial Fit-Out', href: '/services#office-commercial-fit-out' },
      { label: '📁 View Studio Nine Workspace Case Study', href: '/work/studio-nine' },
    ],
    waPrompt: 'Hi Renov8, I need a turnkey commercial or office fit-out proposal in Islamabad.',
  },

  studio: {
    title: 'The Studio: Alvie & Rao Architects (Est. 2013)',
    text: 'Founded in 2013 by alumni of NUST and the University of Sydney, Renov8 unites architectural design, itemized BOQ engineering, and 14 specialist trades under one accountable roof:',
    card: {
      image: '/images/studio/arsyn-studio-hero.jpg',
      badge: 'Est. 2013',
      title: 'Alvie & Rao Architects · Design & Build Studio',
      metrics: { label: 'Track Record', value: '13+ Years · 150+ Projects' },
      deliverables: [
        'Principal Architect: Ar. Arsalan Alvie (Alumni of University of Sydney & NUST).',
        'Principal Turnkey Director: Ar. Rao Umair Afzaal (Alumni of NUST).',
        '14 In-House Specialist Divisions eliminating subcontractor finger-pointing.',
        'Access-Controlled Delivery: Experience across Diplomatic Enclave and Sector E-7 estates.',
        'Formal 12-Month Workmanship Warranty backing every completed project.'
      ]
    },
    links: [
      { label: '🏛️ Explore Studio Monograph & Team', href: '/studio' },
      { label: '📍 Visit Blue Area Atelier', href: '/contact' },
    ],
    waPrompt: 'Hi Renov8, I would like to schedule a physical design consultation at your Blue Area studio.',
  },

  services: {
    title: '14 In-House Specialist Disciplines',
    text: 'Renov8 operates 14 dedicated trade divisions under single-contract accountability, backed by on-site resident engineers and a 12-month warranty:',
    card: {
      image: '/images/concepts/material-study.webp',
      badge: '14 Trades',
      title: 'Complete Architectural & Renovation Mastery',
      metrics: { label: 'Accountability', value: 'Single Contract' },
      deliverables: [
        '01 Construction & Civil Works | 02 Home Remodeling',
        '03 Commercial Fit-Out | 04 Interior Architecture',
        '05 Kitchen & Bathrooms | 06 Electrical & Ducted VRF',
        '07 Luxury Surfaces & Marble | 08 Custom Oak Joinery',
        '09 Thermal Aluminium & Glass | 10 Acoustic False Ceilings',
        '11 Monsoon Waterproofing | 12 Landscaping & Pergolas',
        '13 Property Care & AMC | 14 Turnkey Governance'
      ]
    },
    links: [
      { label: '🏗️ Explore All 14 In-House Services', href: '/services' },
      { label: '📁 View Curated Portfolio', href: '/work' },
    ],
    waPrompt: 'Hi Renov8, I would like to review your 14 turnkey service capabilities for my project.',
  },

  projects: {
    title: 'Curated Architectural Portfolio & Case Studies',
    text: 'Explore landmark residential transformations, minimalist villas, and executive commercial suites completed across Islamabad:',
    card: {
      image: '/images/concepts/quiet-house.webp',
      badge: 'Selected Works',
      title: 'Architectural Portfolio in Islamabad',
      metrics: { label: 'Scale', value: '1 Kanal – 2 Kanal Estates' },
      deliverables: [
        'Courtyard House (Sector F-6): Shaded travertine courts and reflection rills.',
        'Quiet House (Sector E-7): Low-contrast ash timber, micro-cement, and garden views.',
        'Studio Nine (Blue Area): Architectural commercial workplace and executive suites.',
        'Margalla Ridge (Sector E-7): 2 Kanal cantilevered structural steel villa transformation.'
      ]
    },
    links: [
      { label: '📁 Explore Selected Works Index', href: '/work' },
      { label: '📊 Model Budget in R8 / Plan', href: '/planner' },
    ],
    waPrompt: 'Hi Renov8, I saw your portfolio and would like to discuss a project inspired by your work.',
  },

  reviews: {
    title: 'Google Business Profile & Verified Client Experiences',
    text: 'Every Renov8 project is built on verified proof. Inspect our live Google Business Profile for authentic client reviews, 5.0 rating, photographic site records, and verified handovers:',
    card: {
      image: '/images/hero/renov8-home-hero.webp',
      badge: '5.0 ★ Google Verified',
      title: 'Verified Client Experiences & Public Record',
      metrics: { label: 'Trust Rating', value: '5.0 ★★★★★' },
      deliverables: [
        'Documented with care. Published with written client permission.',
        '100% Verified client experiences across F-7, E-7, DHA & Blue Area.',
        'Official Google Business Profile with location, ratings, and reviews.',
        'Formal 12-month defect liability warranty on all handovers.'
      ]
    },
    links: [
      { label: '⭐ View Renov8 on Google (5.0 ★)', href: 'https://share.google/rxzJz24oNNs7Gnnw8' },
      { label: '🏛️ Read Verified Client Experiences', href: '/#client-experiences' },
    ],
    waPrompt: 'Hi Renov8, I would like to review client references for a past project similar to mine.',
  }
};

const INITIAL_MESSAGE: ChatMessage = {
  id: 'msg-initial',
  sender: 'bot',
  text: `Welcome to Renov8 Architecture & Renovation Studio.\n\nI am your Architectural Concierge. How can I assist your residential or commercial project in Islamabad today? Select a topic below or type your inquiry.`,
  card: {
    image: '/images/hero/renov8-home-hero.webp',
    badge: 'Concierge Desk',
    title: 'Turnkey Architecture, Renovation & BOQ Planning',
    metrics: { label: 'Islamabad HQ', value: '14 In-House Trades' },
    deliverables: [
      '100% Itemized written BOQ contracts with zero variation surprises',
      'CDA Form A1/A2 & DHA Building Control liaison',
      'Dedicated on-site resident engineer with 12-month defect warranty',
      'Remote management with 4K drone logs for overseas expatriates'
    ]
  },
  links: [
    { label: '📊 Calculate Renovation Cost in R8 / Plan', href: '/planner' },
    { label: '📜 CDA & DHA Building Bylaws Guides', href: '/publications' },
    { label: '🏗️ Explore All 14 In-House Services', href: '/services' },
  ],
  waPrompt: 'Hi Renov8, I would like to consult with an architect regarding my space in Islamabad.',
  timestamp: 'Just now',
};

export default function ArchitecturalChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([INITIAL_MESSAGE]);
  const [inputVal, setInputVal] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

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

      if (q.includes('cda') || q.includes('bylaw') || q.includes('permit') || q.includes('approval') || q.includes('setback') || q.includes('far') || q.includes('form a1')) {
        matchedResponse = KNOWLEDGE_RESPONSES.cda;
      } else if (q.includes('dha') || q.includes('bahria') || q.includes('rda')) {
        matchedResponse = KNOWLEDGE_RESPONSES.dha;
      } else if (q.includes('kitchen') || q.includes('bathroom') || q.includes('bath') || q.includes('counter') || q.includes('sanitary') || q.includes('cook')) {
        matchedResponse = KNOWLEDGE_RESPONSES.kitchen;
      } else if (q.includes('joinery') || q.includes('wood') || q.includes('carpentry') || q.includes('wardrobe') || q.includes('cabinet') || q.includes('door') || q.includes('teak') || q.includes('oak')) {
        matchedResponse = KNOWLEDGE_RESPONSES.joinery;
      } else if (q.includes('waterproof') || q.includes('seepage') || q.includes('leak') || q.includes('damp') || q.includes('monsoon') || q.includes('roof')) {
        matchedResponse = KNOWLEDGE_RESPONSES.waterproofing;
      } else if (q.includes('mep') || q.includes('hvac') || q.includes('ac') || q.includes('air conditioning') || q.includes('electric') || q.includes('plumb') || q.includes('wire')) {
        matchedResponse = KNOWLEDGE_RESPONSES.mep;
      } else if (q.includes('commercial') || q.includes('office') || q.includes('corporate') || q.includes('blue area') || q.includes('clinic') || q.includes('retail')) {
        matchedResponse = KNOWLEDGE_RESPONSES.commercial;
      } else if (q.includes('overseas') || q.includes('remote') || q.includes('abroad') || q.includes('uk') || q.includes('usa') || q.includes('dubai') || q.includes('expat') || q.includes('drone')) {
        matchedResponse = KNOWLEDGE_RESPONSES.overseas;
      } else if (q.includes('studio') || q.includes('founder') || q.includes('who are you') || q.includes('about') || q.includes('team') || q.includes('arsalan') || q.includes('umair')) {
        matchedResponse = KNOWLEDGE_RESPONSES.studio;
      } else if (q.includes('project') || q.includes('work') || q.includes('portfolio') || q.includes('courtyard') || q.includes('quiet house')) {
        matchedResponse = KNOWLEDGE_RESPONSES.projects;
      } else if (q.includes('review') || q.includes('google') || q.includes('rating') || q.includes('experience') || q.includes('testimonial') || q.includes('feedback') || q.includes('star')) {
        matchedResponse = KNOWLEDGE_RESPONSES.reviews;
      } else if (q.includes('service') || q.includes('trade') || q.includes('what do you do') || q.includes('all')) {
        matchedResponse = KNOWLEDGE_RESPONSES.services;
      } else if (q.includes('cost') || q.includes('price') || q.includes('rate') || q.includes('sqft') || q.includes('budget') || q.includes('marla') || q.includes('kanal') || q.includes('kharcha') || q.includes('planner')) {
        matchedResponse = KNOWLEDGE_RESPONSES.cost;
      } else {
        matchedResponse = {
          title: 'Direct Architectural Consultation',
          text: `Thank you for sharing your inquiry. For specific requirements regarding "${query}", our Islamabad resident engineering team can provide immediate tailored guidance and arrange an on-site structural feasibility study.`,
          card: {
            image: '/images/concepts/material-study.webp',
            badge: 'Feasibility Desk',
            title: 'Tailored Architectural Inquiry',
            metrics: { label: 'Response Time', value: '< 2 Hours' },
            deliverables: [
              `Direct synchronization regarding: "${query}"`,
              'Complimentary preliminary BOQ assessment',
              'On-site laser scan & structural review available in Islamabad & Rawalpindi'
            ]
          },
          links: [
            { label: '📊 Calculate Preliminary BOQ in R8 / Plan', href: '/planner' },
            { label: '📁 Explore Selected Works', href: '/work' },
          ],
          waPrompt: `Hi Renov8, I have a specific project inquiry: "${query}". Please connect me with a project engineer.`,
        };
      }

      const botMsg: ChatMessage = {
        id: `bot-${Date.now()}`,
        sender: 'bot',
        text: matchedResponse.text,
        card: matchedResponse.card,
        links: matchedResponse.links,
        waPrompt: matchedResponse.waPrompt,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 600);
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
            className="w-[94vw] sm:w-[460px] h-[640px] max-h-[88vh] bg-[#F6F5F2] border border-black/20 shadow-2xl flex flex-col justify-between overflow-hidden mb-4"
          >
            {/* Header */}
            <div className="bg-[#141414] text-white p-3.5 sm:p-4 flex items-center justify-between border-b border-white/10">
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
                    Islamabad Architecture &amp; BOQ AI Desk
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-1.5">
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
            <div className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-4 text-xs">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
                >
                  <div
                    className={`max-w-[94%] sm:max-w-[88%] p-3.5 leading-relaxed space-y-3 ${
                      msg.sender === 'user'
                        ? 'bg-[#141414] text-white'
                        : 'bg-white border border-black/15 text-black shadow-sm'
                    }`}
                  >
                    <p className="whitespace-pre-line font-light leading-relaxed">{msg.text}</p>

                    {/* PICTORIAL CARD WITH IMAGE THUMBNAIL & METRICS */}
                    {msg.card && (
                      <div className="border border-black/10 overflow-hidden bg-[#F6F5F2] mt-2">
                        {/* Image Thumbnail */}
                        <div className="relative aspect-[16/9] w-full overflow-hidden bg-black/30">
                          <img
                            src={msg.card.image}
                            alt={msg.card.title}
                            className="w-full h-full object-cover filter contrast-[1.05]"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />
                          <span className="absolute top-2 left-2 px-2 py-0.5 bg-[#141414]/90 text-white text-[9px] font-mono uppercase tracking-wider border border-white/10 font-bold">
                            {msg.card.badge}
                          </span>
                          {msg.card.metrics && (
                            <span className="absolute bottom-2 right-2 px-2 py-0.5 bg-[#A8201A] text-white text-[9px] font-mono uppercase font-bold tracking-wider">
                              {msg.card.metrics.value}
                            </span>
                          )}
                        </div>

                        {/* Card Details */}
                        <div className="p-3 space-y-2">
                          <h4 className="text-xs font-bold uppercase tracking-tight text-[#141414]">
                            {msg.card.title}
                          </h4>

                          {msg.card.deliverables && (
                            <ul className="space-y-1 pt-1 border-t border-black/10 text-[11px] text-black/75">
                              {msg.card.deliverables.map((item, idx) => (
                                <li key={idx} className="flex items-start gap-1.5 font-light">
                                  <span className="text-[#A8201A] font-bold shrink-0 mt-0.5">•</span>
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      </div>
                    )}

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
                          className="inline-flex items-center justify-between w-full bg-[#141414] text-white px-3 py-2 text-[10px] uppercase font-mono tracking-wider font-semibold hover:bg-[#A8201A] transition-colors"
                        >
                          <span>Connect on WhatsApp</span>
                          <ArrowUpRight className="w-3.5 h-3.5 text-[#A8201A]" />
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
            <div className="px-3 sm:px-4 py-2 bg-white/80 border-t border-black/10 flex gap-1.5 overflow-x-auto whitespace-nowrap scrollbar-none">
              {[
                'Renovation Cost',
                'Google Reviews (5.0 ★)',
                'CDA Bylaws',
                'Kitchen & Bath',
                'Custom Joinery',
                'Monsoon Waterproofing',
                'Ducted VRF MEP',
                'Commercial Fit-Out',
                'Overseas Expat',
                'Our Studio',
                'All 14 Services'
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
                placeholder="Ask about costs, CDA bylaws, joinery, or scope..."
                className="flex-1 bg-transparent text-xs px-3 py-2 border border-black/20 focus:outline-none focus:border-[#141414] font-light"
              />
              <button
                type="submit"
                disabled={!inputVal.trim()}
                className="bg-[#141414] disabled:opacity-30 text-white p-2.5 hover:bg-[#A8201A] transition-colors cursor-pointer shrink-0"
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
            <span>Chat AI · Architectural Concierge</span>
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
