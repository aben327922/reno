export interface ServiceCategory {
  id: string;
  index: string;
  title: string;
  shortTitle: string;
  pillar: 'Build & Transform' | 'Design & Finish' | 'Specialist Systems & Care';
  tagline: string;
  description: string;
  image: string;
  videoUrl?: string;
  deliverables: string[];
}

export const RENO_SERVICES: ServiceCategory[] = [
  {
    id: 'construction-civil-works',
    index: '01',
    title: 'Construction & Civil Works',
    shortTitle: 'Construction',
    pillar: 'Build & Transform',
    tagline: 'New builds, extensions and structural expertise.',
    description: 'Ground-up construction and technical civil work managed with close coordination from site preparation onward across CDA and DHA sectors.',
    image: '/images/services/construction-civil-works.avif',
    videoUrl: '/videos/reels/construction.mp4',
    deliverables: [
      'New house & villa construction',
      'Office & commercial buildings',
      'Retail shops & showrooms',
      'Building extensions & additional floors',
      'Structural alterations & steel reinforcement',
      'Foundations, concrete & RCC works',
      'Block, brick masonry & plastering',
      'Boundary walls, driveways & pathways',
      'Roof slab construction & structural repair'
    ]
  },
  {
    id: 'home-renovation-remodeling',
    index: '02',
    title: 'Home Renovation & Remodeling',
    shortTitle: 'Home Renovation',
    pillar: 'Build & Transform',
    tagline: 'Complete residential transformations tailored to modern living.',
    description: 'Reconfiguring layouts, upgrading aging infrastructure, and modernizing interiors with minimal disruption and strict dust and noise control.',
    image: '/images/services/home-renovation-remodeling.avif',
    videoUrl: '/videos/reels/home-renovation.mp4',
    deliverables: [
      'Full-house structural & cosmetic remodeling',
      'Open-plan living & layout reconfiguration',
      'Basement conversion & waterproofing',
      'Facade modernization & elevation upgrades',
      'Heritage & older sector house revitalization',
      'Energy-efficient glazing & insulation retrofits'
    ]
  },
  {
    id: 'office-commercial-fit-out',
    index: '03',
    title: 'Office & Commercial Fit-Out',
    shortTitle: 'Commercial Fit-Out',
    pillar: 'Build & Transform',
    tagline: 'High-performance workspaces, retail flagships, and hospitality venues.',
    description: 'Fast-track commercial execution engineered for brand identity, acoustic privacy, ergonomic workflow, and regulatory compliance.',
    image: '/images/services/office-and-commercial-space.avif',
    videoUrl: '/videos/reels/commercial-fitout.mp4',
    deliverables: [
      'Corporate offices & executive suites',
      'Retail boutiques & culinary restaurants',
      'Medical clinics & wellness studios',
      'Co-working hubs & tech campuses',
      'Acoustic boardrooms & data cabling integration'
    ]
  },
  {
    id: 'interior-design-space-planning',
    index: '04',
    title: 'Interior Design & Space Planning',
    shortTitle: 'Interior Design',
    pillar: 'Design & Finish',
    tagline: 'Spatial clarity, curated material palettes, and lighting choreography.',
    description: 'We create interiors that balance atmosphere, movement and practical use. Stone, oak, steel, lighting and spatial details are developed together for a lasting identity.',
    image: '/images/services/interior-design-and-space-planning.avif',
    videoUrl: '/videos/reels/interior-design.mp4',
    deliverables: [
      '2D spatial planning & furniture layouts',
      'Photorealistic 3D architectural visualization',
      'Material, stone & textile boards',
      'Architectural lighting design & switching plans',
      'Custom furniture & soft furnishing curation'
    ]
  },
  {
    id: 'kitchen-bathroom-renovation',
    index: '05',
    title: 'Kitchen & Bathroom Renovation',
    shortTitle: 'Kitchens & Bathrooms',
    pillar: 'Design & Finish',
    tagline: 'Precision wet-area engineering paired with tactile luxury finishes.',
    description: 'Culinary kitchens and spa-grade bathrooms built with imported hardware, concealed cisterns, epoxy grouting, and zero-leak waterproofing.',
    image: '/images/services/Kitchen-and-bathroom-renovation.avif',
    videoUrl: '/videos/reels/kitchen.mp4',
    deliverables: [
      'Modular & chef-grade dirty/clean kitchens',
      'Quartz, sintered stone & granite countertops',
      'Soft-close Blum/Hettich hardware integration',
      'Walk-in rain showers & concealed Grohe/Kohler brassware',
      'Multi-coat cementitious & membrane waterproofing'
    ]
  },
  {
    id: 'electrical-plumbing-hvac',
    index: '06',
    title: 'Electrical, Plumbing & HVAC (MEP)',
    shortTitle: 'MEP Systems',
    pillar: 'Specialist Systems & Care',
    tagline: 'The unseen engineering backbone of safe, comfortable buildings.',
    description: 'Code-compliant electrical distribution, PPR/UPVC manifold plumbing, solar hybrid readiness, and concealed VRF/inverter climate systems.',
    image: '/images/services/electrical-plumbing-hvac.avif',
    videoUrl: '/videos/reels/mep-systems.mp4',
    deliverables: [
      'Complete rewiring, DB panels & surge protection',
      'Smart home automation & architectural dimming',
      'PPR hot/cold water supply & silent drainage',
      'Concealed ducted HVAC & inverter AC piping',
      'Solar net-metering & backup generator integration'
    ]
  },
  {
    id: 'flooring-painting-decorating',
    index: '07',
    title: 'Flooring, Painting & Surfaces',
    shortTitle: 'Surfaces & Finishes',
    pillar: 'Design & Finish',
    tagline: 'Flawless surface preparation and enduring architectural finishes.',
    description: 'From large-format porcelain slabs and engineered oak herringbone to zero-VOC matte emulsions, micro-cement, and travertine cladding.',
    image: '/images/services/flooring-painting-card.webp',
    videoUrl: '/videos/reels/flooring.mp4',
    deliverables: [
      'Large-format porcelain, marble & terrazzo installation',
      'Engineered wood, SPC & solid timber flooring',
      'Laser-leveled screeding & epoxy industrial coatings',
      'Multi-stage wall skimming, primer & luxury emulsions',
      'Textured limewash, micro-cement & feature wall finishes'
    ]
  },
  {
    id: 'carpentry-cabinetry-joinery',
    index: '08',
    title: 'Carpentry, Cabinetry & Custom Joinery',
    shortTitle: 'Custom Joinery',
    pillar: 'Design & Finish',
    tagline: 'Architectural millwork crafted in oak, walnut, and fluted veneer.',
    description: 'Bespoke walk-in wardrobes, full-height pivot doors, acoustic timber slats, and precision vanity units fabricated to millimeter tolerances.',
    image: '/images/services/cabinet-jointry.webp',
    videoUrl: '/videos/reels/cabinet-joinery.mp4',
    deliverables: [
      'Floor-to-ceiling wardrobes & dressing rooms',
      'Solid ash, oak & teak main entrance doors',
      'Architectural wall paneling & fluted media walls',
      'Custom study libraries & executive desks',
      'Staircase timber treads, handrails & balustrades'
    ]
  },
  {
    id: 'glass-aluminium-metal-doors-windows',
    index: '09',
    title: 'Glass, Aluminium & Architectural Metalwork',
    shortTitle: 'Glass & Metalwork',
    pillar: 'Specialist Systems & Care',
    tagline: 'Thermal-break glazing, slimline profiles, and custom steel fabrication.',
    description: 'Double-glazed acoustic windows, frameless shower enclosures, skylight pergolas, and laser-cut architectural steel screens.',
    image: '/images/services/glass-aluminum-metal.webp',
    videoUrl: '/videos/reels/aluminum-glass.mp4',
    deliverables: [
      'Double-glazed uPVC & thermal-break aluminium windows',
      'Slimline sliding patio doors & folding glass walls',
      'Frameless tempered glass balustrades & partitions',
      'Structural steel staircases, gates & pergolas'
    ]
  },
  {
    id: 'ceilings-partitions-acoustic-works',
    index: '10',
    title: 'Ceilings, Partitions & Acoustic Works',
    shortTitle: 'Ceilings & Partitions',
    pillar: 'Specialist Systems & Care',
    tagline: 'Shadow-gap gypsum ceilings, cove lighting, and sound isolation.',
    description: 'Clean architectural ceiling planes with recessed magnetic track channels, shadow-gap perimeters, and rockwool-insulated acoustic partitions.',
    image: '/images/services/ceilings-partitions.webp',
    videoUrl: '/videos/reels/ceilings.mp4',
    deliverables: [
      'Moisture-resistant gypsum false ceilings',
      'Architectural shadow-gap & curtain pelmet detailing',
      'Drywall partitions with rockwool acoustic insulation',
      'Perforated acoustic baffles & cinema soundproofing'
    ]
  },
  {
    id: 'exterior-facade-roofing-waterproofing',
    index: '11',
    title: 'Exterior Facade, Roofing & Waterproofing',
    shortTitle: 'Exterior Envelope',
    pillar: 'Specialist Systems & Care',
    tagline: 'Climate-resilient building envelopes built for monsoon and heat protection.',
    description: 'Architectural louvers, fair-faced concrete, stone dry-cladding, thermal roof insulation, and elastomeric membrane waterproofing.',
    image: '/images/services/roofing-facade-waterproofing.webp',
    videoUrl: '/videos/reels/exterior-waterproofing.mp4',
    deliverables: [
      'Modern elevation redesigns (stone, HPL, louvers)',
      'Roof heat-proofing, XPS insulation & screed slopes',
      'Basement, roof & water-tank membrane waterproofing',
      'Exterior weather-shield coatings & facade lighting'
    ]
  },
  {
    id: 'landscaping-outdoor-living',
    index: '12',
    title: 'Landscaping & Outdoor Living',
    shortTitle: 'Outdoor Living',
    pillar: 'Design & Finish',
    tagline: 'Courtyards, sunken fire-pits, and native ecological gardens.',
    description: 'We connect architecture with its wider environment through considered landscapes, outdoor gathering spaces, bioclimatic pergolas, and native planting.',
    image: '/images/services/landscaping-outdoor-living.webp',
    videoUrl: '/videos/reels/landscaping.mp4',
    deliverables: [
      'Courtyard & terrace garden design',
      'Outdoor kitchens, BBQ decks & bioclimatic pergolas',
      'Natural stone paving, reflection pools & water walls',
      'Automated drip/sprinkler irrigation & warm landscape lighting'
    ]
  },
  {
    id: 'property-maintenance-repairs',
    index: '13',
    title: 'Property Care & Annual Maintenance',
    shortTitle: 'Property Care',
    pillar: 'Specialist Systems & Care',
    tagline: 'Preventive diagnostics and rapid-response care for prime properties.',
    description: 'Dedicated post-handover maintenance and annual care contracts for residences, embassies, and commercial facilities in Islamabad.',
    image: '/images/services/property-maintenance-repairs.webp',
    videoUrl: '/videos/reels/property-care.mp4',
    deliverables: [
      'Annual preventive MEP & roof inspection audits',
      'Dampness, seepage & thermal imaging diagnostics',
      'Scheduled AC servicing, electrical & plumbing upkeep',
      'Discreet upkeep for diplomatic & access-controlled residences'
    ]
  },
  {
    id: 'project-management-turnkey-solutions',
    index: '14',
    title: 'Project Management & Turnkey Delivery',
    shortTitle: 'Turnkey Delivery',
    pillar: 'Build & Transform',
    tagline: 'Single-point accountability from architectural brief to white-glove handover.',
    description: 'Itemized BOQ contracts, milestone-linked schedules, in-house site engineers, and a 12-month workmanship guarantee.',
    image: '/images/services/project-management-solutions.webp',
    videoUrl: '/videos/reels/turnkey-delivery.mp4',
    deliverables: [
      'Itemized Bill of Quantities (BOQ) & cost control',
      'CDA & DHA architectural submission & regulatory compliance',
      'Dedicated full-time site engineer & weekly photo reports',
      'Handover defect audits & 12-month workmanship warranty'
    ]
  }
];

export const RENO_PILLARS = [
  {
    id: 'build-transform',
    title: 'BUILD & TRANSFORM',
    description: 'From ground-up structural construction and full-villa remodeling to commercial fit-outs and turnkey project management under a single itemized BOQ contract.',
    subDisciplines: [
      '01 Construction & Civil Works',
      '02 Home Renovation & Remodeling',
      '03 Office & Commercial Fit-Out',
      '14 Turnkey Project Delivery'
    ],
    linkText: 'View build & transform projects',
    image: '/images/services/construction-civil-works.avif',
    videoUrl: '/videos/reels/construction.mp4'
  },
  {
    id: 'design-finish',
    title: 'DESIGN & FINISH',
    description: 'We create interiors that balance atmosphere, movement and practical use. Stone, oak, steel, lighting, joinery and spatial details are developed together to create spaces with a distinct and lasting identity.',
    subDisciplines: [
      '04 Interior Design & Space Planning',
      '05 Kitchens & Luxury Bathrooms',
      '07 Flooring, Painting & Surfaces',
      '08 Custom Joinery & Millwork',
      '12 Landscaping & Outdoor Living'
    ],
    linkText: 'View interior & finish projects',
    image: '/images/services/interior-design-and-space-planning.avif',
    videoUrl: '/videos/reels/interior-design.mp4'
  },
  {
    id: 'specialist-systems',
    title: 'SPECIALIST SYSTEMS & CARE',
    description: 'High-precision MEP engineering, thermal-break glazing, shadow-gap acoustic ceilings, monsoon-proof building envelopes, and discreet ongoing property care.',
    subDisciplines: [
      '06 Electrical, Plumbing & HVAC',
      '09 Glass, Aluminium & Metalwork',
      '10 Ceilings, Partitions & Acoustics',
      '11 Exterior Facade & Waterproofing',
      '13 Property Care & Maintenance'
    ],
    linkText: 'View engineering & envelope works',
    image: '/images/services/glass-aluminum-metal.webp',
    videoUrl: '/videos/reels/aluminum-glass.mp4'
  }
];

export interface ProjectDetail {
  id: string;
  index: string;
  title: string;
  category: 'Build & Transform' | 'Design & Finish' | 'Specialist Systems & Care';
  materialEdit: string;
  location: string;
  year: string;
  image: string;
  summary: string;
  clientStory?: string;
  keyFeatures?: string[];
  dimensions?: string;
}

export const RENO_PROJECTS: ProjectDetail[] = [
  {
    id: 'courtyard-house',
    index: '01',
    title: 'COURTYARD HOUSE',
    category: 'Build & Transform',
    materialEdit: 'Travertine · Charred Cedar · Brushed Steel',
    location: 'Islamabad Foothills',
    year: '2025',
    image: '/images/concepts/courtyard-house.webp',
    summary: 'An architectural family residence in Islamabad organised around internal lightwells, natural cross-ventilation, and a sequence of sheltered private stone courtyards.',
    clientStory: 'Courtyard House studies how a generous home can feel intimate. Solid street-facing volumes give way to a planted centre, bringing filtered light deep into the plan. Rather than relying solely on mechanical conditioning, the residence uses passive building physics—integrating courtyards, thermal mass, and shaded breezeways to maintain natural indoor equilibrium.',
    keyFeatures: [
      'Thermal chimney central planted courtyard with reflection pool',
      'Deep cantilevered concrete overhangs engineered for summer sun cutoff',
      'Operable charred cedar brise-soleil screens filtering Margalla glare',
      'Integrated underfloor geothermal radiant cooling conduits'
    ],
    dimensions: '1 Kanal (4,500 sq.ft Covered Area)'
  },
  {
    id: 'quiet-house',
    index: '02',
    title: 'QUIET HOUSE',
    category: 'Design & Finish',
    materialEdit: 'Honed Limestone · White Oak · Micro-cement',
    location: 'Sector F-6, Islamabad',
    year: '2025',
    image: '/images/concepts/quiet-house.webp',
    summary: 'A warm, low-contrast residential interior shaped by natural materials, practical concealed joinery, and peaceful transitions into a shaded private garden.',
    clientStory: 'Quiet House explores a softer kind of refinement: practical circulation, concealed storage and tactile surfaces in place of decorative excess. Storage is integrated into the architecture rather than added onto it. Flush floor-to-ceiling panelling hides daily clutter while defining quiet spatial zones.',
    keyFeatures: [
      'Continuous horizontal timber grain across concealed full-height pivot doors',
      'Shadow-gap gypsum ceiling perimeter with recessed 2700K architectural wash',
      'Seamless micro-cement bathroom floors with linear concealed drains',
      'Fluted natural white oak millwork and book-matched limestone counters'
    ],
    dimensions: '10 Marla (3,400 sq.ft Remodel)'
  },
  {
    id: 'studio-nine',
    index: '03',
    title: 'STUDIO NINE',
    category: 'Build & Transform',
    materialEdit: 'Fair-Faced Concrete · Blackened Steel · Fluted Glass',
    location: 'Blue Area, Islamabad',
    year: '2025',
    image: '/images/concepts/studio-nine.webp',
    summary: 'A contemporary commercial workplace study balancing focused team spaces, client hospitality, and a distinctive deep blue and terrazzo material identity.',
    clientStory: 'Studio Nine places a sculptural reception desk at the centre of a flexible office plan, with glazed rooms and planted collaboration zones extending beyond it. The layout balances open collaboration with acoustic privacy, enabling seamless transitions between focused deep work and creative team exchanges.',
    keyFeatures: [
      'Sculptural curved cobalt blue reception monolith with integrated planters',
      'Double-glazed acoustic partitions with slim blackened steel profiles',
      'Exposed fair-faced concrete soffits with acoustic floating felt baffles',
      'Integrated underfloor high-density data and electrical grid'
    ],
    dimensions: '2,800 sq.ft Commercial Floorplate'
  },
  {
    id: 'material-study',
    index: '04',
    title: 'MATERIAL EDIT & CRAFT STUDY',
    category: 'Design & Finish',
    materialEdit: 'Stone · Oak · Steel · Micro-cement',
    location: 'Renov8 Atelier, Islamabad',
    year: '2025',
    image: '/images/concepts/material-study.webp',
    summary: 'An ongoing physical and tactile investigation into honest raw materials selected for their ability to endure Islamabad monsoon humidity and summer dry heat.',
    clientStory: 'We test and calibrate every material in real-world conditions before specifying it on client sites. Local and regional limestones, engineered oak veneers, raw steel profiles, and breathable lime plasters are subjected to moisture and heat cycling to guarantee decade-long performance.',
    keyFeatures: [
      'Locally quarried travertine and limestone seal validation',
      'Zero-VOC breathable lime emulsions resistant to efflorescence',
      'Thermal-break structural aluminium profiles with multi-point locking',
      'Moisture-cured polyurethane coatings for wet-area timber millwork'
    ],
    dimensions: 'Research & Fabrication Lab'
  },
  {
    id: 'margalla-ridge-residence',
    index: '05',
    title: 'MARGALLA RIDGE RESIDENCE',
    category: 'Build & Transform',
    materialEdit: 'Basalt Stone · Natural Teak · Thermal Glazing',
    location: 'Sector E-7, Islamabad',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85',
    summary: 'Full structural gut-renovation transforming a 1990s residence into a contemporary cantilevered villa with concealed VRF climate control.',
    clientStory: 'A landmark structural revitalization removing load-bearing partitions and inserting structural steel portal frames to unlock panoramic Margalla Hills vistas.',
    keyFeatures: [
      'Full open-plan ground floor transformation with structural steel beams',
      'Floor-to-ceiling thermal-break double glazed acoustic sliding walls',
      'Concealed ducted VRF inverter climate system with individual zone thermostats'
    ],
    dimensions: '2 Kanal Estate (7,200 sq.ft Covered Area)'
  },
  {
    id: 'f7-culinary-kitchen-suite',
    index: '06',
    title: 'F-7 RESIDENCE CHEF KITCHEN',
    category: 'Design & Finish',
    materialEdit: 'Sintered Stone · Smoked Oak · Brushed Bronze',
    location: 'Sector F-7/2, Islamabad',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=85',
    summary: 'Dual dirty-and-show culinary kitchen engineered with Blum servo-drive cabinetry, monolithic island waterfall slabs, and concealed extraction.',
    clientStory: 'Engineered specifically for South Asian culinary requirements, providing an ultra-sleek outer show kitchen connected to a heavy-duty, high-extraction preparation kitchen.',
    keyFeatures: [
      'Monolithic waterfall island clad in heat-proof sintered stone',
      'Blum Aventos electronic servo-drive lift mechanisms',
      'Commercial-grade silent 1200 CFM ducted exhaust hood'
    ],
    dimensions: '650 sq.ft Dual-Kitchen Suite'
  },
  {
    id: 'dha-bioclimatic-courtyard',
    index: '07',
    title: 'VERDANT PAVILION & GARDEN',
    category: 'Design & Finish',
    materialEdit: 'Kota Stone · Weathering Steel · Native Flora',
    location: 'DHA Phase 2, Islamabad',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1200&q=85',
    summary: 'Bioclimatic louvered pergola, sunken travertine fire-pit lounge, reflection pool, and automated native planting for year-round outdoor living.',
    clientStory: 'Extending living spaces into the private courtyard through an automated bioclimatic aluminium louver pergola that adjusts solar penetration automatically.',
    keyFeatures: [
      'Motorized weather-sensing bioclimatic aluminium louvers',
      'Sunken natural Kota stone conversation pit with gas flame feature',
      'Drip-irrigation native drought-tolerant landscaping'
    ],
    dimensions: '1,200 sq.ft Outdoor Living Pavilion'
  },
  {
    id: 'diplomatic-enclave-retrofit',
    index: '08',
    title: 'ENCLAVE RESIDENCE ENVELOPE',
    category: 'Specialist Systems & Care',
    materialEdit: 'Double-Glazed Thermal Aluminium · Elastomeric Membrane',
    location: 'Diplomatic Enclave, Islamabad',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=85',
    summary: 'Discreet high-security acoustic glazing, complete MEP manifold upgrade, and multi-layer roof waterproofing executed under strict privacy protocols.',
    clientStory: 'High-precision technical retrofit carried out under strict access-controlled conditions with zero disruption to neighboring diplomatic properties.',
    keyFeatures: [
      'Multi-coat SBS torch-on elastomeric waterproofing membrane',
      'High-security acoustic double-glazed aluminium fenestration',
      'Complete PPR manifold plumbing replacement with zero wall chasing leaks'
    ],
    dimensions: 'Access-Controlled Residence'
  }
];

export const RENO_STATS = [
  {
    value: 14,
    suffix: '',
    label: 'SPECIALIST CATEGORIES',
    description: 'Complete in-house mastery from civil works to fine joinery.'
  },
  {
    value: 100,
    suffix: '%',
    label: 'ITEMIZED BOQ CLARITY',
    description: 'Transparent scope, material specifications, and milestone schedules.'
  },
  {
    value: 12,
    suffix: '+ MO',
    label: 'WORKMANSHIP WARRANTY',
    description: 'Backed by formal handover defect audits and post-completion care.'
  },
  {
    value: 4,
    suffix: '',
    label: 'CORE COMMITMENTS',
    description: 'Clear planning, skilled execution, complete care, and discreet delivery.'
  }
];

export const MARQUEE_ROW_1 = [
  '01 Construction & Civil Works',
  '02 Home Renovation & Remodeling',
  '03 Office & Commercial Fit-Out',
  '04 Interior Design & Space Planning',
  '05 Kitchen & Bathroom Renovation',
  '06 Electrical, Plumbing & HVAC',
  '07 Flooring, Painting & Surfaces'
];

export const MARQUEE_ROW_2 = [
  '08 Custom Carpentry & Joinery',
  '09 Glass, Aluminium & Metalwork',
  '10 Ceilings, Partitions & Acoustics',
  '11 Exterior Facade & Waterproofing',
  '12 Landscaping & Outdoor Living',
  '13 Property Care & Maintenance',
  '14 Turnkey Project Management'
];

export const APPROACH_PILLARS = [
  {
    index: '01',
    title: 'Clear planning',
    description: 'Scope, timeline and material choices made visible before the first site visit.'
  },
  {
    index: '02',
    title: 'Skilled execution',
    description: 'Trusted in-house specialists for every structural, MEP and interior finish.'
  },
  {
    index: '03',
    title: 'Complete care',
    description: 'One accountable team through handover with a 12-month workmanship guarantee.'
  },
  {
    index: '04',
    title: 'Discreet execution',
    description: 'Experience in access-controlled locations with careful attention to client privacy.'
  }
];

export interface JournalArticle {
  slug: string;
  title: string;
  category: 'Bylaws & Municipal' | 'Cost & BOQ Planning' | 'Material Architecture' | 'MEP & Building Science' | 'General';
  summary: string;
  date: string;
  readTime: string;
}

export const JOURNAL_ARTICLES: JournalArticle[] = [
  {
    slug: 'journal-house-renovation-cost-islamabad',
    title: 'House Renovation Cost in Islamabad: Complete 2026 BOQ & Budget Guide',
    category: 'Cost & BOQ Planning',
    summary: 'A detailed cost breakdown for 1 Kanal, 10 Marla, and 5 Marla homes across CDA Sectors vs DHA. Covering civil modifications, luxury finishes, and MEP contingencies.',
    date: 'OCT 2026',
    readTime: '6 min read'
  },
  {
    slug: 'journal-cda-building-bylaws-islamabad',
    title: 'CDA Building By-Laws for Residential Houses in Islamabad',
    category: 'Bylaws & Municipal',
    summary: 'Essential regulations on floor area ratios (FAR), building heights, compulsory open spaces, and setback allowances for residential renovations in CDA sectors.',
    date: 'SEP 2026',
    readTime: '8 min read'
  },
  {
    slug: 'journal-dha-islamabad-rawalpindi-building-bylaws',
    title: 'DHA Islamabad & Rawalpindi Building By-Laws: Homeowner Guide',
    category: 'Bylaws & Municipal',
    summary: 'Comprehensive review of DHA building requirements, basement excavation rules, covered area limits, and submission protocols across DHA Phases 1 to 5.',
    date: 'AUG 2026',
    readTime: '7 min read'
  },
  {
    slug: 'journal-cda-building-plan-approval-islamabad',
    title: 'CDA Building Plan Approval Process: Forms A1 & A2 Explained',
    category: 'Bylaws & Municipal',
    summary: 'Step-by-step documentation workflow for architectural submission, scrutiny fees, and structural vetting required before mobilizing in Islamabad.',
    date: 'AUG 2026',
    readTime: '5 min read'
  },
  {
    slug: 'journal-cda-completion-certificate-islamabad',
    title: 'Obtaining a CDA Completion Certificate for Renovated Houses',
    category: 'Bylaws & Municipal',
    summary: 'What homeowners and engineers need to submit post-construction to obtain formal occupancy certificates and avoid municipal penalties.',
    date: 'JUL 2026',
    readTime: '5 min read'
  },
  {
    slug: 'journal-waterproofing-islamabad-monsoon-guide',
    title: 'Waterproofing for Islamabad Monsoon: Basement & Roof Protection',
    category: 'MEP & Building Science',
    summary: 'Why surface paint fails against monsoon deltas. Multi-layer elastomeric membranes, slope screeds, and negative-side basement dampness cures.',
    date: 'JUL 2026',
    readTime: '6 min read'
  },
  {
    slug: 'journal-materials-that-age-well',
    title: 'Stone, Oak & Steel: Selecting Materials That Endure Islamabad Climate',
    category: 'Material Architecture',
    summary: 'Analyzing why honed limestone, thermal-break aluminium, and quarter-sawn oak withstand Islamabad seasonal temperature extremes without warping.',
    date: 'JUN 2026',
    readTime: '5 min read'
  },
  {
    slug: 'journal-kitchen-joinery-hardware-selection',
    title: 'Kitchen Joinery & Hardware Selection: Blum, Hettich & Quartz Slabs',
    category: 'Material Architecture',
    summary: 'Engineering dual show-and-dirty kitchens with high-cycle soft-close hinges, servo-drive drawers, and heat-resistant quartz waterfall countertops.',
    date: 'MAY 2026',
    readTime: '4 min read'
  },
  {
    slug: 'journal-hvac-concealed-duct-planning',
    title: 'Concealed Ducted VRF vs Split Inverter AC Planning in Islamabad',
    category: 'MEP & Building Science',
    summary: 'How to integrate central concealed climate control with shadow-gap gypsum false ceilings without losing room height or acoustic serenity.',
    date: 'MAY 2026',
    readTime: '7 min read'
  },
  {
    slug: 'journal-lighting-design-warm-minimalism',
    title: 'Architectural Lighting Design for Warm Minimalist Living Spaces',
    category: 'Material Architecture',
    summary: 'Choreographing 2700K warm spotlighting, concealed curtain pelmet coves, and high-CRI magnetic track channels for evening intimacy.',
    date: 'APR 2026',
    readTime: '4 min read'
  },
  {
    slug: 'journal-what-turnkey-really-means',
    title: 'What Turnkey Really Means: Single-Point Accountability in Construction',
    category: 'Cost & BOQ Planning',
    summary: 'Why separating architectural design from structural civil contractors leads to budget inflation, and how itemized BOQ contracts eliminate disputes.',
    date: 'MAR 2026',
    readTime: '5 min read'
  },
  {
    slug: 'journal-planning-a-renovation-in-islamabad',
    title: 'Planning a Major Home Renovation in Islamabad: A Step-by-Step Checklist',
    category: 'Cost & BOQ Planning',
    summary: 'From initial site feasibility and MEP diagnostics to procurement timelines and dust barrier installation before the first wall comes down.',
    date: 'FEB 2026',
    readTime: '6 min read'
  },
  {
    slug: 'journal-cda-setback-far-covered-area-islamabad',
    title: 'CDA Setback & Covered Area Rules: Maximizing Residential Footprints',
    category: 'Bylaws & Municipal',
    summary: 'Understanding front, rear, and side setback requirements for residential plots in Islamabad to maximize livable square footage legally.',
    date: 'JAN 2026',
    readTime: '5 min read'
  },
  {
    slug: 'journal-cda-house-renovation-permission-islamabad',
    title: 'Do You Need CDA Permission for Interior & Elevation Renovations?',
    category: 'Bylaws & Municipal',
    summary: 'Clarifying which structural and facade modifications require formal CDA permission versus interior cosmetic works.',
    date: 'JAN 2026',
    readTime: '4 min read'
  },
  {
    slug: 'journal-cda-rainwater-harvesting-islamabad',
    title: 'CDA Rainwater Harvesting By-Laws: Underground Recharge Wells',
    category: 'MEP & Building Science',
    summary: 'Mandatory underground rainwater collection tank sizing and gravel recharge bore specifications for residential construction in Islamabad.',
    date: 'DEC 2025',
    readTime: '5 min read'
  },
  {
    slug: 'journal-cda-home-office-non-conforming-use-islamabad',
    title: 'CDA Non-Conforming Use Regulations: Home Offices & Creative Studios',
    category: 'Bylaws & Municipal',
    summary: 'Understanding legal zoning boundaries for home offices, executive consulting rooms, and residential ateliers in Islamabad.',
    date: 'NOV 2025',
    readTime: '4 min read'
  },
  {
    slug: 'journal-rda-building-bylaws-rawalpindi',
    title: 'RDA Building By-Laws: Renovation Rules in Rawalpindi Municipal Sectors',
    category: 'Bylaws & Municipal',
    summary: 'Comparative guide highlighting key differences between Rawalpindi Development Authority (RDA) and Capital Development Authority (CDA) bylaws.',
    date: 'OCT 2025',
    readTime: '6 min read'
  },
  {
    slug: 'journal-cda-dha-building-byelaws-guide',
    title: 'CDA vs DHA Islamabad: Comparative By-Law & Construction Guide',
    category: 'Bylaws & Municipal',
    summary: 'Direct comparison of basement allowances, boundary wall heights, and scrutiny fee structures across CDA and DHA jurisdictions.',
    date: 'SEP 2025',
    readTime: '7 min read'
  },
  {
    slug: 'journal-bahria-enclave-building-renovation-rules',
    title: 'Bahria Enclave Islamabad: Building & Renovation Submission Rules',
    category: 'Bylaws & Municipal',
    summary: 'Navigating design committee approvals, construction security deposits, and contractor entry protocols in Bahria Enclave.',
    date: 'AUG 2025',
    readTime: '5 min read'
  }
];
