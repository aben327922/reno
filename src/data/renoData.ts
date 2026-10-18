export interface ServiceCategory {
  id: string;
  index: string;
  title: string;
  shortTitle: string;
  pillar: 'Build & Transform' | 'Design & Finish' | 'Specialist Systems & Care';
  tagline: string;
  description: string;
  image: string;
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
    image: 'https://images.unsplash.com/photo-1541888946425-d09bb18086f6?auto=format&fit=crop&w=1200&q=85',
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
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85',
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
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=85',
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
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=85',
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
    image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=85',
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
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=85',
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
    image: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=85',
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
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=85',
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
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85',
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
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=85',
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
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=85',
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
    image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1200&q=85',
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
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=85',
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
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=85',
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
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85'
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
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=85'
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
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85'
  }
];

export const RENO_PROJECTS = [
  {
    id: 'courtyard-house',
    index: '01',
    title: 'COURTYARD HOUSE',
    category: 'Build & Transform' as const,
    materialEdit: 'Travertine · Charred Cedar · Brushed Steel',
    location: 'Islamabad Foothills',
    year: '2025',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=85',
    summary: 'An inward-looking sanctuary organized around a shaded water courtyard, filtering summer glare through deep structural overhangs and operable timber screens.'
  },
  {
    id: 'quiet-house',
    index: '02',
    title: 'QUIET HOUSE',
    category: 'Design & Finish' as const,
    materialEdit: 'Honed Limestone · White Oak · Micro-cement',
    location: 'Sector F-6, Islamabad',
    year: '2025',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85',
    summary: 'Acoustic serenity and monolithic minimalism designed for high-privacy urban plots, featuring shadow-gap ceilings and concealed floor-to-ceiling joinery.'
  },
  {
    id: 'studio-nine',
    index: '03',
    title: 'STUDIO NINE',
    category: 'Build & Transform' as const,
    materialEdit: 'Fair-Faced Concrete · Blackened Steel · Fluted Glass',
    location: 'Blue Area, Islamabad',
    year: '2025',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=85',
    summary: 'Next-generation executive workspace and design atelier blending gallery-grade lighting, modular acoustic partitions, and tactile stone reception monoliths.'
  },
  {
    id: 'margalla-ridge-residence',
    index: '04',
    title: 'MARGALLA RIDGE RESIDENCE',
    category: 'Build & Transform' as const,
    materialEdit: 'Basalt Stone · Natural Teak · Thermal Glazing',
    location: 'Sector E-7, Islamabad',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85',
    summary: 'Full structural gut-renovation transforming a 1990s residence into a contemporary cantilevered villa with concealed VRF climate control.'
  },
  {
    id: 'f7-culinary-kitchen-suite',
    index: '05',
    title: 'F-7 RESIDENCE CHEF KITCHEN',
    category: 'Design & Finish' as const,
    materialEdit: 'Sintered Stone · Smoked Oak · Brushed Bronze',
    location: 'Sector F-7/2, Islamabad',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=85',
    summary: 'Dual dirty-and-show culinary kitchen engineered with Blum servo-drive cabinetry, monolithic island waterfall slabs, and concealed extraction.'
  },
  {
    id: 'kohsar-atelier-flagship',
    index: '06',
    title: 'ATELIER ROASTERY & BAKERY',
    category: 'Design & Finish' as const,
    materialEdit: 'Fluted Terracotta · Brass · Poured Terrazzo',
    location: 'Sector F-6, Islamabad',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=85',
    summary: 'Boutique hospitality interior crafted with acoustic timber ceiling baffles, bespoke pastry display monoliths, and warm architectural spotlighting.'
  },
  {
    id: 'dha-bioclimatic-courtyard',
    index: '07',
    title: 'VERDANT PAVILION & GARDEN',
    category: 'Design & Finish' as const,
    materialEdit: 'Kota Stone · Weathering Steel · Native Flora',
    location: 'DHA Phase 2, Islamabad',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1200&q=85',
    summary: 'Bioclimatic louvered pergola, sunken travertine fire-pit lounge, reflection pool, and automated native planting for year-round outdoor living.'
  },
  {
    id: 'diplomatic-enclave-retrofit',
    index: '08',
    title: 'ENCLAVE RESIDENCE ENVELOPE',
    category: 'Specialist Systems & Care' as const,
    materialEdit: 'Double-Glazed Thermal Aluminium · Elastomeric Membrane',
    location: 'Islamabad',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=85',
    summary: 'Discreet high-security acoustic glazing, complete MEP manifold upgrade, and multi-layer roof waterproofing executed under strict privacy protocols.'
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
