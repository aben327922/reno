export interface ServiceVideoItem {
  id: string;
  title: string;
  description: string;
  videoUrl: string;
  badge: string;
}

export const SERVICE_VIDEOS: Record<string, ServiceVideoItem[]> = {
  'construction-civil-works': [
    {
      id: 'ccw-1',
      title: 'Groundwork & Foundations',
      description: 'Excavation, earth retention, and reinforced sub-structure engineering across CDA/DHA sectors.',
      videoUrl: '/videos/services/construction/construction-1.mp4',
      badge: 'CDA Grade-60 RCC',
    },
    {
      id: 'ccw-2',
      title: 'Structural RCC Framing',
      description: 'Columns, beams, and suspended slabs built to rigorous structural tolerances and curing cycles.',
      videoUrl: '/videos/services/construction/construction-2.mp4',
      badge: '4000 PSI Monitored',
    },
    {
      id: 'ccw-3',
      title: 'Masonry & Building Envelope',
      description: 'Precision brickwork, blockwork, lintels, and weatherproof exterior barriers.',
      videoUrl: '/videos/services/construction/construction-3.mp4',
      badge: 'Laser-Aligned Envelope',
    },
  ],
  'home-renovation-remodeling': [
    {
      id: 'hrr-1',
      title: 'Living & Layout Flow',
      description: 'Reimagining circulation, light penetration, and everyday family routines in existing footprints.',
      videoUrl: '/videos/services/home-reno-remodeling/home-reno-remodeling-1.mp4',
      badge: 'Spatial Replan',
    },
    {
      id: 'hrr-2',
      title: 'Structural Transformation',
      description: 'Load-bearing wall removals, opened steel spans, and integrated structural coordination.',
      videoUrl: '/videos/services/home-reno-remodeling/home-reno-remodeling-2.mp4',
      badge: 'RSJ Steel Load',
    },
    {
      id: 'hrr-3',
      title: 'Surface & Material Detail',
      description: 'Flooring, wall treatments, and textures united in one cohesive architectural visual direction.',
      videoUrl: '/videos/services/home-reno-remodeling/home-reno-remodeling-3.mp4',
      badge: 'Tactile Finishes',
    },
  ],
  'office-commercial-fit-out': [
    {
      id: 'ocf-1',
      title: 'Workplace Layout & Flow',
      description: 'Operational zones, circulation, and collaborative spaces planned before construction.',
      videoUrl: '/videos/services/office-commercial-fitout/office-commercial-fitout-1.mp4',
      badge: 'Ergonomic Zoning',
    },
    {
      id: 'ocf-2',
      title: 'Custom Joinery & Partitions',
      description: 'Architectural glazing, acoustic walls, and tailored reception cabinetry.',
      videoUrl: '/videos/services/office-commercial-fitout/office-commercial-fitout-2.mp4',
      badge: 'Acoustic STC Spec',
    },
    {
      id: 'ocf-3',
      title: 'Brand-Led Finishes',
      description: 'Coordinated lighting, durable commercial surfaces, and practical identity detailing.',
      videoUrl: '/videos/services/office-commercial-fitout/office-commercial-fitout-3.mp4',
      badge: 'Turnkey Corporate',
    },
  ],
  'interior-design-space-planning': [
    {
      id: 'ids-1',
      title: 'Spatial Planning & Circulation',
      description: 'Functional zoning, movement paths, and dimensional balance tailored to architecture.',
      videoUrl: '/videos/services/interior-space-planning/interior-space-1.mp4',
      badge: 'Proportion & Flow',
    },
    {
      id: 'ids-2',
      title: 'Material Palette & Mood',
      description: 'Textures, tones, and tactile surface finishes curated for cohesive harmony.',
      videoUrl: '/videos/services/interior-space-planning/interior-space-2.mp4',
      badge: 'Palette Curation',
    },
    {
      id: 'ids-3',
      title: 'Architectural Joinery & Lighting',
      description: 'Bespoke cabinetry and layered lighting scheme integration (2700K Warm CCT).',
      videoUrl: '/videos/services/interior-space-planning/interior-space-3.mp4',
      badge: 'Atelier Detailing',
    },
  ],
  'kitchen-bathroom-renovation': [
    {
      id: 'kbr-1',
      title: 'Layout in Motion',
      description: 'Workflows, kitchen triangles, and wet-area ergonomics resolved before fabrication begins.',
      videoUrl: '/videos/services/kitchen/kitchen-1.mp4',
      badge: 'Culinary Ergonomics',
    },
    {
      id: 'kbr-2',
      title: 'Cabinetry Craft & Hardware',
      description: 'Bespoke joinery built around storage, soft-close Blum mechanisms, and daily use.',
      videoUrl: '/videos/services/kitchen/kitchen-2.mp4',
      badge: 'Blum Precision',
    },
    {
      id: 'kbr-3',
      title: 'Spa-Grade Bathrooms & Wet Areas',
      description: 'Surfaces and textures layered for depth, concealed drainage, and zero-leak waterproofing.',
      videoUrl: '/videos/services/bathroom/bathroom-1.mp4',
      badge: 'Zero-Leak Tested',
    },
  ],
  'electrical-plumbing-hvac': [
    {
      id: 'eph-1',
      title: 'Electrical & Distribution',
      description: 'Concealed conduits, distribution panels, surge suppression, and smart home provisions.',
      videoUrl: '/videos/services/hvac-elec-plumbing/electrical-1.mp4',
      badge: 'Smart Distribution',
    },
    {
      id: 'eph-2',
      title: 'Sanitary Plumbing & Drainage',
      description: 'Pressure-tested PPRC/UPVC piping, acoustic insulation, and gravity drainage manifolds.',
      videoUrl: '/videos/services/hvac-elec-plumbing/plumbing-1.mp4',
      badge: '150 PSI Tested',
    },
    {
      id: 'eph-3',
      title: 'HVAC & Climate Control',
      description: 'Concealed ducting, VRF split routing, and calibrated air balancing for silent comfort.',
      videoUrl: '/videos/services/hvac-elec-plumbing/hvac-1.mp4',
      badge: 'Concealed VRF',
    },
  ],
  'flooring-painting-decorating': [
    {
      id: 'fpd-1',
      title: 'Substrate Preparation & Precision Flooring',
      description: 'Laser-aligned subfloor levelling, moisture barriers, and precision installation of hardwood & large-format tiles.',
      videoUrl: '/videos/services/flooring-painting-decor/flooring-1.mp4',
      badge: 'Laser-Leveled',
    },
    {
      id: 'fpd-2',
      title: 'Multi-Coat Architectural Painting',
      description: 'Dustless surface preparation, primer adhesion, and flawless uniform spray & roller coat finishing across interiors.',
      videoUrl: '/videos/services/flooring-painting-decor/painting.mp4',
      badge: 'Zero-VOC Matte',
    },
    {
      id: 'fpd-3',
      title: 'Specialist Wallcraft & Decorative Finishes',
      description: 'Textured microcement, artisanal wall coverings, and seamless feature surfaces crafted with precision.',
      videoUrl: '/videos/services/flooring-painting-decor/decorating-1.mp4',
      badge: 'Artisanal Textures',
    },
  ],
  'carpentry-cabinetry-joinery': [
    {
      id: 'ccj-1',
      title: 'Custom Cabinetry & Carcass Fabrication',
      description: 'Precision millwork, moisture-resistant core boards, and rigid concealed joinery assembly.',
      videoUrl: '/videos/services/cabinet-works/cabinet-joinery-1.mp4',
      badge: 'Moisture-Resistant',
    },
    {
      id: 'ccj-2',
      title: 'Bespoke Wardrobes & Precision Joinery',
      description: 'Premium soft-close hardware, architectural veneer alignment, and custom internal storage organizers.',
      videoUrl: '/videos/services/cabinet-works/cabinet-joinery-2.mp4',
      badge: 'Veneer Matched',
    },
    {
      id: 'ccj-3',
      title: 'Architectural Timber Carpentry & Panelling',
      description: 'Solid hardwood crafting, precision shadow gap reveals, and acoustic timber wall panelling installations.',
      videoUrl: '/videos/services/cabinet-works/carpentary-1.mp4',
      badge: 'Shadow-Gap Detailing',
    },
  ],
  'glass-aluminium-metal-doors-windows': [
    {
      id: 'gam-1',
      title: 'Aluminium Glazing & Slim Profiles',
      description: 'Thermal-break frames, slim architectural sightlines, and double-glazed acoustic performance.',
      videoUrl: '/videos/services/aluminum-glass-works/alumimun-glass-1.mp4',
      badge: 'Thermal-Break 24mm',
    },
    {
      id: 'gam-2',
      title: 'Sliding & Folding Door Systems',
      description: 'Seamless indoor-outdoor transitions, multi-track sliding, and precision roller hardware.',
      videoUrl: '/videos/services/aluminum-glass-works/alumimun-glass-2.mp4',
      badge: 'Heavy-Duty Rollers',
    },
    {
      id: 'gam-3',
      title: 'Frameless Glass & Shower Enclosures',
      description: 'Toughened safety glass, concealed floor springs, and bespoke minimalist enclosures.',
      videoUrl: '/videos/services/aluminum-glass-works/alumimun-glass-3.mp4',
      badge: '12mm Tempered Glass',
    },
  ],
  'ceilings-partitions-acoustic-works': [
    {
      id: 'cpa-1',
      title: 'Suspended Gypsum & False Ceilings',
      description: 'Concealed grid suspension, laser-levelled drywall planes, and seamless shadow gap perimeter reveals.',
      videoUrl: '/videos/services/ceilings-partitions/ceilings-1.mp4',
      badge: 'Laser-Levelled Planes',
    },
    {
      id: 'cpa-2',
      title: 'Integrated Linear Lighting & Details',
      description: 'Coordinated cutouts, flush architectural cove lighting profiles, and linear diffuser integration.',
      videoUrl: '/videos/services/ceilings-partitions/ceilings-2.mp4',
      badge: 'Recessed Tracks',
    },
    {
      id: 'cpa-3',
      title: 'Metal Stud Framing & Drywall Zoning',
      description: 'Precision track alignment, heavy-gauge stud framing, and structurally braced spatial partitioning.',
      videoUrl: '/videos/services/ceilings-partitions/partition-1.mp4',
      badge: 'Rockwool Sound-Damped',
    },
  ],
  'exterior-facade-roofing-waterproofing': [
    {
      id: 'efr-1',
      title: 'SBS Bitumen & Liquid Membrane Waterproofing',
      description: 'Torch-on multi-layer waterproofing, fillet edge dressing, and 48-hour electronic flood testing.',
      videoUrl: '/videos/services/exterior-waterproofing/waterproofing.mp4',
      badge: '48hr Flood Tested',
    },
    {
      id: 'efr-2',
      title: 'Thermal Roof Insulation & Screed Slope Falls',
      description: 'High-density extruded polystyrene (XPS) boards, vapour barriers, and precision drainage screeds.',
      videoUrl: '/videos/services/exterior-waterproofing/roofing.mp4',
      badge: 'XPS High-Density',
    },
    {
      id: 'efr-3',
      title: 'Architectural Facade Cladding & Rainscreen',
      description: 'Weather-resistant exterior panels, ventilated rainscreen systems, and exterior solar shading fins.',
      videoUrl: '/videos/services/exterior-waterproofing/exterior-1.mp4',
      badge: 'Monsoon Proof',
    },
  ],
  'landscaping-outdoor-living': [
    {
      id: 'lol-1',
      title: 'Hard Landscaping, Stone Paving & Lawn Design',
      description: 'Reinforced sub-base preparation, precision slope falls, porcelain outdoor paving, and architectural garden beds.',
      videoUrl: '/videos/services/outdoorliving-landscaping/landscaping.mp4',
      badge: 'Porcelain Paving',
    },
    {
      id: 'lol-2',
      title: 'Bespoke Outdoor Living & Patio Terraces',
      description: 'Open-air lounge spaces, sheltered seating pavilions, travertine terraces, and seamless indoor-outdoor transitions.',
      videoUrl: '/videos/services/outdoorliving-landscaping/outdoor-living-1.mp4',
      badge: 'Travertine Terraces',
    },
    {
      id: 'lol-3',
      title: 'Pergolas, Shade Structures & Ambient Lighting',
      description: 'Custom architectural timber pergolas, warm evening lighting, fire features, and weather-treated outdoor finishes.',
      videoUrl: '/videos/services/outdoorliving-landscaping/outdoor-living2.mp4',
      badge: 'Bioclimatic Shade',
    },
  ],
  'property-maintenance-repairs': [
    {
      id: 'pmr-1',
      title: 'Diagnostic Inspection & Preventive Upkeep',
      description: 'Thermal leak detection, circuit load analysis, and scheduled preventative mechanical servicing.',
      videoUrl: '/videos/services/property-maintenance/property-maintenance-1.mp4',
      badge: 'Thermal Diagnostics',
    },
    {
      id: 'pmr-2',
      title: 'Emergency Plumbing & Water Ingress Repair',
      description: 'Rapid pipe leak repair, high-pressure line unclogging, and moisture-barrier renewal.',
      videoUrl: '/videos/services/property-maintenance/property-maintenance-2.mp4',
      badge: 'Rapid Response',
    },
    {
      id: 'pmr-3',
      title: 'Architectural Surface Touch-Ups & Carpentry',
      description: 'Precision skim-coat patch repairs, hardware realignment, and seamless wood touch-ups.',
      videoUrl: '/videos/services/property-maintenance/property-maintenance-3.mp4',
      badge: 'SLA Guaranteed',
    },
  ],
  'project-management-turnkey-solutions': [
    {
      id: 'pmt-1',
      title: 'Site Setup & Project Inception',
      description: 'Authority permissions, site access management, milestone scheduling, and foundational site protection.',
      videoUrl: '/videos/services/turnkey-delivery/turnkey-delivery-1.mp4',
      badge: 'CDA/DHA Approvals',
    },
    {
      id: 'pmt-2',
      title: 'Turnkey Site Execution & Trade Supervision',
      description: 'Coordinated trade workflows, daily site supervision, and rigorous quality audit checksheets.',
      videoUrl: '/videos/services/turnkey-delivery/turnkey-delivery-2.mp4',
      badge: 'Daily Site Telemetry',
    },
    {
      id: 'pmt-3',
      title: 'Material Procurement & Quality Control',
      description: 'Specification compliance, factory batch sampling, and structured on-site inspection protocols.',
      videoUrl: '/videos/services/turnkey-delivery/turnkey-delivery-3.mp4',
      badge: 'ISO-Grade QA/QC',
    },
  ],
};
