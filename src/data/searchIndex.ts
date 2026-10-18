export interface SearchItem {
  id: string;
  title: string;
  category: 'Services' | 'Projects' | 'Bylaws & Guides' | 'Materials & Brands' | 'Tools & Estimator' | 'Studio & Policies';
  subtitle: string;
  snippet: string;
  url: string;
  keywords: string[];
  badge?: string;
  metadata?: string;
}

export const SEARCH_INDEX: SearchItem[] = [
  // -------------------------------------------------------------
  // SERVICES (14 SPECIALIST TRADES)
  // -------------------------------------------------------------
  {
    id: 'srv-01',
    title: '01 Construction & Civil Works',
    category: 'Services',
    subtitle: 'Turnkey Ground-Up Construction & Structural Engineering',
    snippet: 'Turnkey house construction, reinforced RCC column framing, building extensions, foundations, masonry, boundary walls, and roof slab construction across CDA and DHA sectors.',
    url: '/services#construction-civil-works',
    keywords: ['construction', 'civil works', 'rcc', 'framing', 'structure', 'foundations', 'concrete', 'extensions', 'turnkey build', 'cda sectors', 'dha', 'grey structure', 'brickwork', 'plastering'],
    badge: 'Build & Transform',
    metadata: '14 Specialist Categories · Grade-60 Steel'
  },
  {
    id: 'srv-02',
    title: '02 Home Renovation & Remodeling',
    category: 'Services',
    subtitle: 'Full Residential Transformations & Layout Modernization',
    snippet: 'Complete residential remodeling, open-plan living reconfigurations, basement damp-proofing, elevation modernizations, and energy-efficient retrofits across Islamabad.',
    url: '/services#home-renovation-remodeling',
    keywords: ['home renovation', 'house remodeling', 'remodeling', 'open plan', 'basement', 'elevation', 'facade upgrade', 'villa renovation', 'modernization', 'e-7', 'f-6', 'f-7', 'f-8'],
    badge: 'Build & Transform',
    metadata: 'Turnkey Handover · Dust & Noise Barrier'
  },
  {
    id: 'srv-03',
    title: '03 Office & Commercial Fit-Out',
    category: 'Services',
    subtitle: 'Corporate Workspaces, Retail Boutiques & Commercial Hubs',
    snippet: 'Turnkey office interiors, acoustic boardroom partitions, executive hospitality suites, and commercial clinics tailored for Islamabad business districts and Blue Area.',
    url: '/services#office-commercial-fit-out',
    keywords: ['office fit out', 'commercial fit-out', 'corporate interior', 'blue area', 'retail store', 'clinic design', 'boardroom', 'acoustic partitions', 'workplace'],
    badge: 'Build & Transform',
    metadata: 'Fast-Track Handover · Blue Area HQ'
  },
  {
    id: 'srv-04',
    title: '04 Interior Design & Space Planning',
    category: 'Services',
    subtitle: '3D Spatial Modeling, Curation & Architectural Illumination',
    snippet: 'Architectural interior design, 3D point cloud spatial planning, bespoke furniture layouts, lighting design, and tactile material curation for residences and luxury apartments.',
    url: '/services#interior-design-space-planning',
    keywords: ['interior design', 'space planning', '3d visualization', 'lighting design', 'palette', 'minimalism', 'japandi', 'curation', 'renderings', 'luxury interiors'],
    badge: 'Design & Finish',
    metadata: 'Photorealistic BIM · Warm Minimalism'
  },
  {
    id: 'srv-05',
    title: '05 Kitchen & Bathroom Renovation',
    category: 'Services',
    subtitle: 'Dual Culinary Suites, Monolithic Countertops & Sanitary Ware',
    snippet: 'Show and preparation (dirty) kitchens, Blum servo-drive drawers, monolithic sintered stone waterfall islands, Grohe/Kohler concealed thermostatic mixers, and leak-proof wet rooms.',
    url: '/services#kitchen-bathroom-renovation',
    keywords: ['kitchen renovation', 'bathroom remodel', 'dual kitchens', 'dirty kitchen', 'blum', 'quartz', 'waterfall island', 'grohe', 'kohler', 'sanitary ware', 'wet room', 'vanities'],
    badge: 'Design & Finish',
    metadata: 'Blumotion Kinetic · 100% Water-Tested'
  },
  {
    id: 'srv-06',
    title: '06 Electrical, Plumbing & HVAC Systems',
    category: 'Services',
    subtitle: 'Concealed MEP Infrastructure, Ducted VRF & Smart Controls',
    snippet: 'Concealed central ducted VRF inverter climate control, silent linear diffusers, PPR and PEX loop plumbing manifolds, automated DB electrical switchboards, and solar integration.',
    url: '/services#electrical-plumbing-hvac',
    keywords: ['mep', 'electrical rewiring', 'plumbing', 'hvac', 'ducted vrf', 'inverter ac', 'linear slot diffusers', 'pex plumbing', 'ppr pipes', 'smart home', 'solar', 'distribution board'],
    badge: 'Specialist Systems & Care',
    metadata: 'Hydrostatic Pressure Tested · Zero Chasing Leaks'
  },
  {
    id: 'srv-07',
    title: '07 Luxury Flooring, Painting & Surfaces',
    category: 'Services',
    subtitle: 'Italian Porcelain Slabs, Marble Restoration & Mineral Lime',
    snippet: 'Large-format rectified porcelain tiling, Swat and Ziarat white marble crystallization, zero-VOC lime wash emulsions, micro-cement, and rigid-core acoustic SPC planking.',
    url: '/services#flooring-painting-decorating',
    keywords: ['flooring', 'painting', 'marble polishing', 'porcelain slabs', 'micro-cement', 'lime wash', 'wall finishes', 'spc flooring', 'swat marble', 'ziarat white', 'terrazzo'],
    badge: 'Design & Finish',
    metadata: 'Laser Rectified · Dust-Free Sanding'
  },
  {
    id: 'srv-08',
    title: '08 Architectural Carpentry & Custom Joinery',
    category: 'Services',
    subtitle: 'Bespoke Wardrobes, Fluted Wall Paneling & Solid Timber Doors',
    snippet: 'Factory-precision millwork, solid European oak and Burmese teak timber doors, fluted acoustic feature walls, walk-in dressing suites, and integrated LED reveal cabinetry.',
    url: '/services#carpentry-cabinetry-joinery',
    keywords: ['carpentry', 'custom joinery', 'cabinetry', 'wardrobes', 'fluted oak', 'timber doors', 'teak', 'credenza', 'walk in closet', 'woodwork', 'millwork'],
    badge: 'Design & Finish',
    metadata: 'Direct Factory Mill · 200,000 Cycle Duty'
  },
  {
    id: 'srv-09',
    title: '09 Architectural Glass, Aluminium & Metalwork',
    category: 'Services',
    subtitle: 'Thermal-Break Double Glazing, Steel Pergolas & Showers',
    snippet: 'Thermal-break aluminium slimline sliding systems, low-E acoustic double glazing, frameless tempered glass shower enclosures, steel staircases, and custom exterior pergolas.',
    url: '/services#glass-aluminium-metal-doors-windows',
    keywords: ['glass', 'aluminium windows', 'metalwork', 'thermal break', 'double glazing', 'sliding doors', 'frameless glass', 'pergolas', 'steel staircases', 'low-e glass'],
    badge: 'Specialist Systems & Care',
    metadata: 'Acoustic Rated · Multi-Point Locking'
  },
  {
    id: 'srv-10',
    title: '10 Acoustic Ceilings, Drywall & Partitions',
    category: 'Services',
    subtitle: 'Shadow-Gap False Ceilings, Gypsum Systems & Sound Isolation',
    snippet: 'Multi-level gypsum false ceilings with perimeter shadow reveals, concealed curtain pelmets, rockwool sound dampening partitions, and acoustic baffle treatments.',
    url: '/services#ceilings-partitions-acoustic-works',
    keywords: ['ceilings', 'gypsum false ceiling', 'shadow gap', 'drywall', 'partitions', 'acoustic insulation', 'soundproofing', 'curtain pelmet', 'cove lighting'],
    badge: 'Specialist Systems & Care',
    metadata: 'Saint-Gobain Gyproc · Zero-Sag Rigging'
  },
  {
    id: 'srv-11',
    title: '11 Exterior Facades, Roofing & Waterproofing',
    category: 'Services',
    subtitle: 'Monsoon Proofing, Elastomeric Screeds & Thermal Insulation',
    snippet: 'Multi-coat SBS torch-on elastomeric roof waterproofing, negative-side basement injection, exterior rain-screen cladding, and polyurethane thermal insulation against Islamabad monsoons.',
    url: '/services#exterior-facade-roofing-waterproofing',
    keywords: ['waterproofing', 'roof waterproofing', 'facade renovation', 'monsoon proofing', 'basement dampness', 'elastomeric membrane', 'heat proofing', 'rain screen', 'drainage'],
    badge: 'Specialist Systems & Care',
    metadata: '10-Year Membrane Warranty · Flood Tested'
  },
  {
    id: 'srv-12',
    title: '12 Landscaping, Terraces & Outdoor Living',
    category: 'Services',
    subtitle: 'Travertine Stone Patios, Fire-Pits, Pergolas & Garden Illumination',
    snippet: 'Bioclimatic motorized aluminium pergolas, sunken stone conversation pits, water reflection rills, outdoor culinary stations, and automated drip-irrigated native planting.',
    url: '/services#landscaping-outdoor-living',
    keywords: ['landscaping', 'outdoor living', 'pergola', 'travertine patio', 'fire pit', 'bbq kitchen', 'swimming pool', 'garden lights', 'drip irrigation', 'native flora'],
    badge: 'Design & Finish',
    metadata: 'Drought-Tolerant · Bioclimatic Controls'
  },
  {
    id: 'srv-13',
    title: '13 Property Maintenance & Preventive Care',
    category: 'Services',
    subtitle: 'Annual Maintenance Contracts (AMC) & Emergency Engineering',
    snippet: 'Preventive property care, annual maintenance contracts (AMC), scheduled MEP diagnostics, marble re-crystallization, sealant renewal, and emergency repair call-outs across Islamabad.',
    url: '/services#property-maintenance-repairs',
    keywords: ['property maintenance', 'amc', 'repairs', 'annual maintenance', 'plumbing leaks', 'electrical repairs', 'marble crystallization', 'facility care', 'preventive inspection'],
    badge: 'Specialist Systems & Care',
    metadata: 'Rapid Response Team · Verified Techs'
  },
  {
    id: 'srv-14',
    title: '14 Turnkey Project Management & Governance',
    category: 'Services',
    subtitle: 'Single-Contract Accountability, 100% Itemized BOQ & Handover',
    snippet: 'End-to-end turnkey project management uniting all 14 trades under one accountable contract. Dedicated on-site resident engineer, milestone draw schedule, and 12-month defect warranty.',
    url: '/services#project-management-turnkey-solutions',
    keywords: ['turnkey', 'project management', 'boq', 'single contract', 'resident engineer', 'supervision', 'cost control', 'draw schedule', 'warranty', 'cda approvals', 'dha'],
    badge: 'Build & Transform',
    metadata: '100% Guaranteed BOQ · Resident Engineer'
  },

  // -------------------------------------------------------------
  // PROJECTS & PORTFOLIO CASE STUDIES
  // -------------------------------------------------------------
  {
    id: 'prj-01',
    title: 'Courtyard House Architectural Residence',
    category: 'Projects',
    subtitle: 'Sector F-6, Islamabad · 2024',
    snippet: 'A calm family sanctuary organized around a central shaded courtyard, hone-finished travertine stone colonnades, native Margalla flora, and concealed VRF climate loops.',
    url: '/work/courtyard-house',
    keywords: ['courtyard house', 'f-6', 'travertine', 'minimalism', 'residential', 'villa', 'islamabad', 'shaded court', 'water feature'],
    badge: 'Design & Finish',
    metadata: '1 Kanal Residence · 5,400 sq.ft'
  },
  {
    id: 'prj-02',
    title: 'Quiet House Minimalist Residence',
    category: 'Projects',
    subtitle: 'Sector E-7, Islamabad · 2024',
    snippet: 'A serene, low-contrast residential interior crafted with quarter-sawn ash timber, tactile micro-cement floors, floor-to-ceiling acoustic glass, and landscaped garden vistas.',
    url: '/work/quiet-house',
    keywords: ['quiet house', 'e-7', 'minimalism', 'ash timber', 'micro-cement', 'low contrast', 'japandi', 'residential', 'margalla'],
    badge: 'Design & Finish',
    metadata: '2 Kanal Residence · 8,100 sq.ft'
  },
  {
    id: 'prj-03',
    title: 'Studio Nine Commercial Workspace',
    category: 'Projects',
    subtitle: 'Blue Area, Islamabad · 2024',
    snippet: 'A corporate flagship balancing focused engineering workstations, executive client hospitality suites, acoustic glass meeting cubes, and raw industrial concrete textures.',
    url: '/work/studio-nine',
    keywords: ['studio nine', 'blue area', 'office', 'commercial', 'workspace', 'acoustic glass', 'corporate fit out', 'hospitality'],
    badge: 'Build & Transform',
    metadata: 'Commercial Suite · 3,800 sq.ft'
  },
  {
    id: 'prj-04',
    title: 'Margalla Ridge Residence',
    category: 'Projects',
    subtitle: 'Sector E-7, Islamabad · 2024',
    snippet: 'Full structural gut-renovation transforming an aging 1990s house into a contemporary cantilevered villa with structural steel portal frames and unobstructed Margalla Hills views.',
    url: '/work/margalla-ridge-residence',
    keywords: ['margalla ridge', 'e-7', 'structural renovation', 'steel portals', 'cantilever', 'hill views', 'gut renovation'],
    badge: 'Build & Transform',
    metadata: '2 Kanal Estate · 7,200 sq.ft'
  },
  {
    id: 'prj-05',
    title: 'F-7 Residence Chef Kitchen Suite',
    category: 'Projects',
    subtitle: 'Sector F-7/2, Islamabad · 2024',
    snippet: 'Dual dirty-and-show culinary kitchen engineered with Blum servo-drive drawers, heat-proof sintered stone waterfall slabs, and commercial silent 1200 CFM ducted exhaust.',
    url: '/work/f7-culinary-kitchen-suite',
    keywords: ['f-7 kitchen', 'chef kitchen', 'dirty kitchen', 'sintered stone', 'blum servo drive', 'exhaust hood', 'culinary suite'],
    badge: 'Design & Finish',
    metadata: '650 sq.ft Dual-Kitchen Suite'
  },
  {
    id: 'prj-06',
    title: 'Verdant Pavilion & Bioclimatic Garden',
    category: 'Projects',
    subtitle: 'DHA Phase 2, Islamabad · 2024',
    snippet: 'Bioclimatic motorized louver pergola, sunken natural Kota stone conversation pit with gas flame feature, reflection pool, and drought-tolerant outdoor living oasis.',
    url: '/work/dha-bioclimatic-courtyard',
    keywords: ['verdant pavilion', 'dha phase 2', 'bioclimatic pergola', 'kota stone', 'fire pit', 'outdoor living', 'reflection pool'],
    badge: 'Design & Finish',
    metadata: '1,200 sq.ft Outdoor Pavilion'
  },
  {
    id: 'prj-07',
    title: 'Enclave Residence Security & Thermal Envelope',
    category: 'Projects',
    subtitle: 'Diplomatic Enclave, Islamabad · 2024',
    snippet: 'Acoustic double-glazed fenestration, SBS elastomeric multi-layer roof waterproofing, and PPR manifold plumbing executed under strict diplomatic access and NDA protocols.',
    url: '/work/diplomatic-enclave-retrofit',
    keywords: ['diplomatic enclave', 'security envelope', 'acoustic glass', 'waterproofing', 'nda', 'embassy', 'access controlled'],
    badge: 'Specialist Systems & Care',
    metadata: 'High-Security Diplomatic Residence'
  },

  // -------------------------------------------------------------
  // BYLAWS, GUIDES & PUBLICATIONS (19 ARTICLES)
  // -------------------------------------------------------------
  {
    id: 'jrn-01',
    title: 'House Renovation Cost in Islamabad: Complete 2026 BOQ & Budget Guide',
    category: 'Bylaws & Guides',
    subtitle: 'Cost & BOQ Planning · 6 min read',
    snippet: 'Realistic PKR cost breakdown for 1 Kanal, 10 Marla, and 5 Marla home renovations in CDA Sectors vs DHA. Covers civil alterations, luxury finishes, and MEP contingencies.',
    url: '/publications#journal-house-renovation-cost-islamabad',
    keywords: ['renovation cost', 'pkr cost', 'boq estimate', 'budget guide', '1 kanal cost', '10 marla cost', 'cda cost vs dha', 'pricing', 'material rates'],
    badge: 'Cost & BOQ',
    metadata: 'OCT 2026 · Real Itemized Rates'
  },
  {
    id: 'jrn-02',
    title: 'CDA Building By-Laws for Residential Houses in Islamabad',
    category: 'Bylaws & Guides',
    subtitle: 'Bylaws & Municipal · 8 min read',
    snippet: 'Detailed regulations on floor area ratios (FAR), maximum building heights, compulsory open spaces (COS), and setback allowances for residential renovations in CDA sectors.',
    url: '/publications#journal-cda-building-bylaws-islamabad',
    keywords: ['cda bylaws', 'building bylaws', 'setbacks', 'far', 'floor area ratio', 'cos', 'compulsory open space', 'height limit', 'cda building directorate'],
    badge: 'Municipal Bylaw',
    metadata: 'SEP 2026 · Official CDA Rules'
  },
  {
    id: 'jrn-03',
    title: 'DHA Islamabad & Rawalpindi Building By-Laws: Homeowner Guide',
    category: 'Bylaws & Guides',
    subtitle: 'Bylaws & Municipal · 7 min read',
    snippet: 'Comprehensive analysis of DHA building requirements, basement excavation rules, covered area calculations, and structural submission workflows across DHA Phases 1 to 5.',
    url: '/publications#journal-dha-islamabad-rawalpindi-building-bylaws',
    keywords: ['dha bylaws', 'dha islamabad', 'dha rawalpindi', 'dha phase 2', 'dha phase 5', 'basement excavation', 'building control', 'dha permissions'],
    badge: 'Municipal Bylaw',
    metadata: 'AUG 2026 · DHA Guidelines'
  },
  {
    id: 'jrn-04',
    title: 'CDA Building Plan Approval Process: Forms A1 & A2 Explained',
    category: 'Bylaws & Guides',
    subtitle: 'Bylaws & Municipal · 5 min read',
    snippet: 'Step-by-step documentation workflow for architectural submission, scrutiny fees, and structural vetting required before mobilizing construction on Islamabad plots.',
    url: '/publications#journal-cda-building-plan-approval-islamabad',
    keywords: ['cda approval', 'form a1', 'form a2', 'scrutiny fees', 'cda building plan', 'architectural submission', 'structural vetting', 'cda clearance'],
    badge: 'Municipal Approval',
    metadata: 'AUG 2026 · Official Workflow'
  },
  {
    id: 'jrn-05',
    title: 'Obtaining a CDA Completion Certificate for Renovated Houses',
    category: 'Bylaws & Guides',
    subtitle: 'Bylaws & Municipal · 5 min read',
    snippet: 'Essential submission requirements post-construction to obtain formal CDA occupancy and completion certificates, preventing municipal fines and utility disruptions.',
    url: '/publications#journal-cda-completion-certificate-islamabad',
    keywords: ['completion certificate', 'cda completion', 'occupancy certificate', 'final inspection', 'as-built drawings', 'cda penalties'],
    badge: 'Municipal Compliance',
    metadata: 'JUL 2026 · Final Certification'
  },
  {
    id: 'jrn-06',
    title: 'Waterproofing for Islamabad Monsoon: Basement & Roof Protection',
    category: 'Bylaws & Guides',
    subtitle: 'MEP & Building Science · 6 min read',
    snippet: 'Why standard exterior paint fails against heavy monsoon deltas. Multi-layer elastomeric membranes, slope screeds, and negative-side basement dampness injection cures.',
    url: '/publications#journal-waterproofing-islamabad-monsoon-guide',
    keywords: ['waterproofing', 'monsoon guide', 'basement dampness', 'roof leaks', 'seepage cure', 'elastomeric membrane', 'injection grouting', 'islamabad rain'],
    badge: 'Building Science',
    metadata: 'JUL 2026 · Monsoon Protection'
  },
  {
    id: 'jrn-07',
    title: 'Stone, Oak & Steel: Selecting Materials That Endure Islamabad Climate',
    category: 'Bylaws & Guides',
    subtitle: 'Material Architecture · 5 min read',
    snippet: 'Why honed limestone, thermal-break aluminium, and quarter-sawn oak withstand Islamabad seasonal temperature extremes (-2°C winter to +45°C summer) without warping.',
    url: '/publications#journal-materials-that-age-well',
    keywords: ['materials', 'travertine', 'limestone', 'oak', 'timber', 'climate endurance', 'weathering', 'durability', 'material selection'],
    badge: 'Material Science',
    metadata: 'JUN 2026 · Tactical Curation'
  },
  {
    id: 'jrn-08',
    title: 'Kitchen Joinery & Hardware Selection: Blum, Hettich & Quartz Slabs',
    category: 'Bylaws & Guides',
    subtitle: 'Material Architecture · 4 min read',
    snippet: 'Designing high-traffic kitchens with soft-close Blumotion runners, Aventos lift doors, servo-drive push systems, and scratch-resistant quartz waterfall countertops.',
    url: '/publications#journal-kitchen-joinery-hardware-selection',
    keywords: ['kitchen hardware', 'blum', 'hettich', 'quartz slabs', 'servo drive', 'blumotion', 'hinges', 'waterfall counter', 'cabinets'],
    badge: 'Hardware & Joinery',
    metadata: 'MAY 2026 · Hardware Specs'
  },
  {
    id: 'jrn-09',
    title: 'Concealed Ducted VRF vs Split Inverter AC Planning in Islamabad',
    category: 'Bylaws & Guides',
    subtitle: 'MEP & Building Science · 7 min read',
    snippet: 'Integrating central concealed climate control with shadow-gap gypsum false ceilings without compromising room height or acoustic tranquility in luxury homes.',
    url: '/publications#journal-hvac-concealed-duct-planning',
    keywords: ['vrf ac', 'ducted ac', 'inverter split', 'hvac planning', 'linear diffusers', 'gypsum ceiling', 'climate control', 'acoustic quiet'],
    badge: 'MEP Systems',
    metadata: 'MAY 2026 · HVAC Optimization'
  },
  {
    id: 'jrn-10',
    title: 'Architectural Lighting Design for Warm Minimalist Living Spaces',
    category: 'Bylaws & Guides',
    subtitle: 'Material Architecture · 4 min read',
    snippet: 'Choreographing 2700K warm beam spotlighting, concealed curtain pelmet cove lights, and high-CRI magnetic track channels for evening architectural intimacy.',
    url: '/publications#journal-lighting-design-warm-minimalism',
    keywords: ['lighting design', 'warm minimalism', '2700k', 'magnetic track', 'curtain pelmet', 'cove lights', 'high cri', 'architectural lighting'],
    badge: 'Illumination',
    metadata: 'APR 2026 · 2700K Warm Light'
  },
  {
    id: 'jrn-11',
    title: 'What Turnkey Really Means: Single-Point Accountability in Construction',
    category: 'Bylaws & Guides',
    subtitle: 'Cost & BOQ Planning · 5 min read',
    snippet: 'Why separating architectural drawings from civil contractors leads to finger-pointing and budget blowouts, and how fixed itemized BOQs guarantee peace of mind.',
    url: '/publications#journal-what-turnkey-really-means',
    keywords: ['turnkey meaning', 'single accountability', 'contractor disputes', 'boq contracts', 'fixed price build', 'renov8 model'],
    badge: 'Delivery Model',
    metadata: 'MAR 2026 · Contract Ethics'
  },
  {
    id: 'jrn-12',
    title: 'Planning a Major Home Renovation in Islamabad: A Step-by-Step Checklist',
    category: 'Bylaws & Guides',
    subtitle: 'Cost & BOQ Planning · 6 min read',
    snippet: 'From initial site structural feasibility and MEP diagnostics to procurement lead times and dust containment barriers before demolition commences.',
    url: '/publications#journal-planning-a-renovation-in-islamabad',
    keywords: ['renovation checklist', 'planning renovation', 'demolition prep', 'dust barrier', 'procurement', 'structural audit'],
    badge: 'Project Planning',
    metadata: 'FEB 2026 · Practical Steps'
  },
  {
    id: 'jrn-13',
    title: 'CDA Setback & Covered Area Rules: Maximizing Residential Footprints',
    category: 'Bylaws & Guides',
    subtitle: 'Bylaws & Municipal · 5 min read',
    snippet: 'Understanding front, rear, and side setback requirements across 500 sq.yd (1 Kanal), 1000 sq.yd (2 Kanal), and 14 Marla plots in Islamabad CDA sectors.',
    url: '/publications#journal-cda-setback-far-covered-area-islamabad',
    keywords: ['cda setbacks', 'covered area', 'plot footprint', '1 kanal setback', '2 kanal setback', 'building envelope', 'cda rules'],
    badge: 'Municipal Bylaw',
    metadata: 'JAN 2026 · Sector Plot Rules'
  },
  {
    id: 'jrn-14',
    title: 'Do You Need CDA Permission for Interior & Elevation Renovations?',
    category: 'Bylaws & Guides',
    subtitle: 'Bylaws & Municipal · 4 min read',
    snippet: 'Clarifying which structural modifications and facade transformations require formal CDA Directorate approval versus cosmetic internal improvements.',
    url: '/publications#journal-cda-house-renovation-permission-islamabad',
    keywords: ['cda permission', 'renovation permission', 'facade change', 'structural alteration', 'cda notice', 'cda approval rules'],
    badge: 'Municipal Permissions',
    metadata: 'JAN 2026 · Legal Boundaries'
  },
  {
    id: 'jrn-15',
    title: 'CDA Rainwater Harvesting By-Laws: Underground Recharge Wells',
    category: 'Bylaws & Guides',
    subtitle: 'MEP & Building Science · 5 min read',
    snippet: 'Mandatory underground rainwater collection tank sizing and gravel recharge bore specifications for residential construction and remodeling in Islamabad.',
    url: '/publications#journal-cda-rainwater-harvesting-islamabad',
    keywords: ['rainwater harvesting', 'cda rainwater well', 'recharge bore', 'underground tank', 'water table', 'cda mandatory'],
    badge: 'Eco Engineering',
    metadata: 'DEC 2025 · Mandatory Bylaw'
  },
  {
    id: 'jrn-16',
    title: 'CDA Non-Conforming Use Regulations: Home Offices & Creative Studios',
    category: 'Bylaws & Guides',
    subtitle: 'Bylaws & Municipal · 4 min read',
    snippet: 'Understanding municipal zoning boundaries, residential non-conforming use penalties, and permitted home consulting offices in Islamabad sectors.',
    url: '/publications#journal-cda-home-office-non-conforming-use-islamabad',
    keywords: ['non conforming use', 'home office cda', 'commercial in residential', 'zoning laws', 'cda notices', 'consulting room'],
    badge: 'Municipal Zoning',
    metadata: 'NOV 2025 · Zoning Rules'
  },
  {
    id: 'jrn-17',
    title: 'RDA Building By-Laws: Renovation Rules in Rawalpindi Municipal Sectors',
    category: 'Bylaws & Guides',
    subtitle: 'Bylaws & Municipal · 6 min read',
    snippet: 'Key legal and structural differences between Rawalpindi Development Authority (RDA) 2020 Building Regulations and Islamabad CDA bylaws.',
    url: '/publications#journal-rda-building-bylaws-rawalpindi',
    keywords: ['rda bylaws', 'rawalpindi building', 'rda permissions', 'rawalpindi renovation', 'rda setbacks', 'rawalpindi municipal'],
    badge: 'Municipal Bylaw',
    metadata: 'OCT 2025 · Rawalpindi Jurisdiction'
  },
  {
    id: 'jrn-18',
    title: 'CDA vs DHA Islamabad: Comparative By-Law & Construction Guide',
    category: 'Bylaws & Guides',
    subtitle: 'Bylaws & Municipal · 7 min read',
    snippet: 'Direct side-by-side comparison of basement excavation rules, boundary wall heights, scrutiny fees, and completion certificates in CDA vs DHA.',
    url: '/publications#journal-cda-dha-building-byelaws-guide',
    keywords: ['cda vs dha', 'comparison', 'basement rules', 'boundary wall', 'scrutiny fees', 'dha vs cda', 'building control'],
    badge: 'Comparative Guide',
    metadata: 'SEP 2025 · Authority Comparison'
  },
  {
    id: 'jrn-19',
    title: 'Bahria Enclave Islamabad: Building & Renovation Submission Rules',
    category: 'Bylaws & Guides',
    subtitle: 'Bylaws & Municipal · 5 min read',
    snippet: 'Navigating design committee submissions, security deposits, contractor gate pass vetting, and renovation approvals in Bahria Enclave Islamabad.',
    url: '/publications#journal-bahria-enclave-building-renovation-rules',
    keywords: ['bahria enclave', 'bahria renovation', 'security deposit', 'design committee', 'gate passes', 'bahria rules'],
    badge: 'Enclave Rules',
    metadata: 'AUG 2025 · Private Enclave'
  },

  // -------------------------------------------------------------
  // MATERIALS & LUXURY BRANDS
  // -------------------------------------------------------------
  {
    id: 'mat-01',
    title: 'BOARA Wallcoverings (Seoul, South Korea)',
    category: 'Materials & Brands',
    subtitle: '1.06m Jumbo Heavy-Embossed Tactile Vinyl',
    snippet: 'Commercial-grade architectural vinyl wallcoverings engineered for humidity resistance, acoustic dampening, and seamless vertical wall applications.',
    url: '/services#flooring-painting-decorating',
    keywords: ['boara', 'wallpaper', 'korean vinyl', 'wall coverings', 'heavy embossed', 'humidity resistant', 'surfaces'],
    badge: 'Authorized Mill',
    metadata: 'Direct Import · KR-BOA-01'
  },
  {
    id: 'mat-02',
    title: 'BORÅSTAPETER (Borås, Sweden)',
    category: 'Materials & Brands',
    subtitle: 'Scandinavian Heritage Non-Woven Murals',
    snippet: 'Breathable FSC-certified non-woven decor prints made with muted mineral pigments and organic tactile grain for timeless master bedrooms and suites.',
    url: '/services#flooring-painting-decorating',
    keywords: ['borastapeter', 'swedish wallpaper', 'scandinavian decor', 'murals', 'non-woven', 'fsc certified', 'surfaces'],
    badge: 'Direct Import',
    metadata: 'Heritage Mill · SE-BOR-02'
  },
  {
    id: 'mat-03',
    title: 'BLUM & HÄFELE Kinetic Joinery (Austria / Germany)',
    category: 'Materials & Brands',
    subtitle: 'Concealed Soft-Close Runners & Servo-Drive Lift Systems',
    snippet: 'Precision concealed drawer slides, Aventos lift systems, titanium hinges, and electronic touch-to-open drawer mechanisms rated for 200,000 duty cycles.',
    url: '/services#carpentry-cabinetry-joinery',
    keywords: ['blum', 'hafele', 'blumotion', 'aventos', 'kinetic joinery', 'soft close', 'servo drive', 'german hardware', 'kitchen fittings'],
    badge: 'Lifetime Warranty',
    metadata: 'Austrian / German · DE-BLU-03'
  },
  {
    id: 'mat-04',
    title: 'GROHE & KOHLER Concealed Sanitary Ware (Germany / USA)',
    category: 'Materials & Brands',
    subtitle: 'Thermostatic Rough-In Valves & PVD Matte Fixtures',
    snippet: 'Concealed thermostatic shower mixers, pressure-balanced dual manifold circuits, wall-hung washdown closets, and scratch-resistant PVD finishes.',
    url: '/services#kitchen-bathroom-renovation',
    keywords: ['grohe', 'kohler', 'thermostatic shower', 'sanitary ware', 'pvd finish', 'concealed cistern', 'bathroom fixtures'],
    badge: 'Factory Warranted',
    metadata: 'Certified Rough-In · DE-GRO-04'
  },
  {
    id: 'mat-05',
    title: 'BEYOND FLOOR Rigid Core SPC (Germany / Belgium)',
    category: 'Materials & Brands',
    subtitle: '100% Waterproof Rigid Stone Plastic Composite Planking',
    snippet: 'Heavy-duty 0.55mm wear-layer SPC rigid core with integrated acoustic IXPE underlayment. 100% waterproof, zero-formaldehyde, and termite-proof.',
    url: '/services#flooring-painting-decorating',
    keywords: ['beyond floor', 'spc flooring', 'rigid core', 'waterproof floor', 'ixpe underlayment', 'acoustic plank', 'termite proof'],
    badge: 'Zero Formaldehyde',
    metadata: 'European Certified · EU-BYN-05'
  },
  {
    id: 'mat-06',
    title: 'VITRA & KALE Monolithic Porcelain Slabs (Istanbul, Turkey)',
    category: 'Materials & Brands',
    subtitle: '120x240cm Large-Format Rectified Wall & Floor Slabs',
    snippet: 'Monolithic porcelain slabs with laser-cut joins for near-seamless, grout-free bathroom walls, kitchen splashbacks, and luxury foyer surfaces.',
    url: '/services#flooring-painting-decorating',
    keywords: ['vitra', 'kale', 'porcelain slabs', 'large format tile', '120x240', 'grout free', 'rectified tile', 'turkish marble'],
    badge: 'Grade A Porcelain',
    metadata: '120x240cm Slabs · TR-VIT-06'
  },

  // -------------------------------------------------------------
  // TOOLS, CALCULATORS & ESTIMATOR
  // -------------------------------------------------------------
  {
    id: 'tool-01',
    title: 'R8 / Plan: Interactive PKR Renovation Cost Planner',
    category: 'Tools & Estimator',
    subtitle: '5-Step Preliminary BOQ Budget Estimator for Islamabad & Rawalpindi',
    snippet: 'Configure your property typology (1 Kanal, 2 Kanal, 10 Marla, Apartment, Office), covered area, and finish grade (Refined Standard vs Bespoke Luxury) for an instant itemized estimate.',
    url: '/planner',
    keywords: ['cost planner', 'calculator', 'boq calculator', 'renovation cost', 'pkr estimate', 'r8 plan', 'budget estimator', 'price per sqft'],
    badge: 'Interactive Calculator',
    metadata: 'Live PKR Model · Real BOQ Items'
  },
  {
    id: 'tool-02',
    title: 'Architectural AI Concierge Chatbot',
    category: 'Tools & Estimator',
    subtitle: 'Interactive Technical & Bylaw Assistant',
    snippet: '24/7 AI-assisted architectural advice on CDA bylaws, DHA regulations, material lead times, BOQ scopes, and direct synchronization with our resident engineers.',
    url: '/contact',
    keywords: ['chatbot', 'ai concierge', 'whatsapp support', 'instant consultation', 'bylaw questions', 'engineering assistant'],
    badge: 'AI Concierge',
    metadata: 'Integrated 24/7 Dock'
  },

  // -------------------------------------------------------------
  // STUDIO, LEADERSHIP & POLICIES
  // -------------------------------------------------------------
  {
    id: 'std-01',
    title: 'The Studio: Alvie & Rao Architects (Est. 2013)',
    category: 'Studio & Policies',
    subtitle: 'Founded by Alumni of NUST & University of Sydney',
    snippet: 'Explore our 13+ year trajectory from a student-led architecture studio to Islamabad’s premier turnkey design & build firm uniting design, BOQs, and 14 in-house specialist divisions.',
    url: '/studio',
    keywords: ['studio', 'about us', 'founders', 'arsalan alvie', 'rao umair', 'nust alumni', 'sydney university', 'blue area studio', 'history'],
    badge: 'Leadership',
    metadata: '13+ Years Active · Blue Area HQ'
  },
  {
    id: 'std-02',
    title: 'Ar. Arsalan Alvie — Co-Founder & Principal Architect',
    category: 'Studio & Policies',
    subtitle: 'Alumni of University of Sydney & NUST · Spatial Director',
    snippet: 'Shaping residential, commercial, and civic architecture across Pakistan, Australia, the UAE, and Japan for over a decade. Conviction that every space has room for tectonic discovery.',
    url: '/studio',
    keywords: ['arsalan alvie', 'principal architect', 'founder', 'sydney', 'nust', 'spatial design', 'luxury villas'],
    badge: 'Principal Architect',
    metadata: 'Sydney & NUST Alum'
  },
  {
    id: 'std-03',
    title: 'Ar. Rao Umair Afzaal — Co-Founder & Principal Turnkey Director',
    category: 'Studio & Policies',
    subtitle: 'Alumni of NUST · Engineering & Turnkey Operations Lead',
    snippet: 'Bridging creative architectural schematics with on-site structural reality. Overseeing Renov8’s 14 in-house trades, itemized BOQs, and resident site engineers.',
    url: '/studio',
    keywords: ['rao umair', 'turnkey director', 'founder', 'nust', 'structural engineering', 'site supervision', 'trade coordination'],
    badge: 'Turnkey Director',
    metadata: '14 Trades Governance'
  },
  {
    id: 'std-04',
    title: 'Diplomatic Enclave & High-Security Site Protocol',
    category: 'Studio & Policies',
    subtitle: 'Vetted Engineering Teams, Non-Disclosure & Access Badges',
    snippet: 'Strict NDA encryption for drawings and scans, Special Branch police-vetted resident site personnel, and managed entry protocol for access-controlled Islamabad sectors.',
    url: '/studio',
    keywords: ['diplomatic enclave', 'security clearance', 'police vetting', 'confidentiality', 'nda', 'special branch', 'enclave protocol'],
    badge: 'Security Protocol',
    metadata: 'NDA Encrypted · Vetted Personnel'
  },
  {
    id: 'std-05',
    title: '12-Month Workmanship Warranty & Handover Terms',
    category: 'Studio & Policies',
    subtitle: 'Formal Defect Liability Standard',
    snippet: 'Every completed project is protected by our formal 12-month defect liability guarantee. Hydrostatic pressure tests, 100-point snagging audits, and scheduled follow-ups.',
    url: '/studio',
    keywords: ['warranty', 'workmanship guarantee', '12 month warranty', 'defect liability', 'snagging audit', 'handover terms'],
    badge: 'Client Assurance',
    metadata: 'Formal Contractual Warranty'
  },
  {
    id: 'std-06',
    title: 'Overseas Pakistani Remote Construction Protocol',
    category: 'Studio & Policies',
    subtitle: 'Dedicated Expat Portal, 4K Drone Logs & Escrow Milestone Draws',
    snippet: 'Managing luxury renovations from the UK, USA, Canada, or Gulf. Bi-weekly 4K drone walkthroughs, synchronized WhatsApp engineering leads, and certified progress draws.',
    url: '/#remote-portal',
    keywords: ['overseas client', 'expat renovation', 'remote management', 'drone logs', 'video walkthroughs', 'uk pakistanis', 'gulf expats'],
    badge: 'Expat Services',
    metadata: '40%+ Projects Expat Managed'
  },
  {
    id: 'std-07',
    title: 'Privacy Policy & Data Confidentiality',
    category: 'Studio & Policies',
    subtitle: 'Client Privacy, NDA Terms & Non-Disclosure Governance',
    snippet: 'How Renov8 protects architectural drawings, site photography, client identities, and private residential addresses across Islamabad and Rawalpindi.',
    url: '/privacy',
    keywords: ['privacy policy', 'terms', 'confidentiality', 'data protection', 'nda'],
    badge: 'Legal',
    metadata: 'Updated 2026'
  },
  {
    id: 'std-08',
    title: 'Terms of Engagement & BOQ Milestone Policies',
    category: 'Studio & Policies',
    subtitle: 'Turnkey Contracts, Draw Milestones & CDA Liaison Terms',
    snippet: 'Governing contractual terms for turnkey residential and commercial projects, milestone-linked drawdown schedules, material escalation clauses, and handover protocols.',
    url: '/terms',
    keywords: ['terms of service', 'contract terms', 'drawdown schedule', 'boq policies', 'project agreement'],
    badge: 'Legal',
    metadata: 'Updated 2026'
  }
];
