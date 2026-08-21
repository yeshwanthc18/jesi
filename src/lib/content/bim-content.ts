import type { ServiceContent } from './types';

export const bimContent: ServiceContent = {
  id: 'bim',
  label: 'BIM',
  slug: 'bim-modeling',
  navHref: '/services/bim-modeling',
  eyebrow: 'BIM Modeling Services',

  hero: {
    eyebrowText: 'BIM Modeling Services — LOD 100–500 · Revit MEP',
    headlineLine1: 'BIM models,',
    headlineLine2: 'delivered.',
    subcopy:
      'We build federated MEP BIM models that combine mechanical, electrical, and plumbing systems into a single, coordinated Revit environment — clash-free, mapped to your standards, and delivered cloud-ready on BIM 360 or ACC.',
    stats: [
      { n: 'LOD', suffix: '100–500', label: 'Full range from conceptual massing to as-built FM handover' },
      { n: '72', suffix: 'hrs', label: 'Average turnaround for standard BIM coordination projects' },
      { n: '0', suffix: '', label: 'Unresolved clashes in models before delivery — guaranteed' },
    ],
    primaryCtaLabel: 'Start a free BIM pilot',
    secondaryCtaLabel: 'Explore BIM services',
    secondaryCtaHref: '#bim-detail',
  },

  marquee: [
    { label: 'LOD 100–500' },
    { label: 'Revit MEP' },
    { label: 'Clash Detection' },
    { label: 'Navisworks' },
    { label: 'BIM 360 / ACC' },
    { label: 'Federated Models' },
    { label: 'Shop Drawings' },
    { label: 'As-built Models' },
    { label: 'Dynamo' },
    { label: 'Coordination' },
    { label: 'BOQ Schedules' },
    { label: 'RFI Management' },
  ],

  pipeline: {
    sectionId: 'pipeline',
    steps: [
      {
        lod: '01',
        stage: 'Planning',
        title: 'Planning & Design',
        bgColor: 'bg-[#A91E2D]',
        textColor: 'text-white',
        features: [
          'Coordinated 3D Models (Arch / Struct / MEP)',
          'Clash Detection & Coordination Reports',
          'LOD 100 to LOD 500 Models',
        ],
        description:
          'We establish a single source of truth for your project. Working from accurate site context, our architectural, structural and MEP teams author intelligent 3D models in tools such as Revit, then coordinate them so every discipline aligns before a single drawing is issued.',
        bgImageUrl: '/images/img1.png',
        cta: 'Start a Coordination Review',
        gridItems: [
          { id: 1, name: 'Capture the Site', tag: 'Survey conditions with reality capture & GIS', img: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=500&q=80' },
          { id: 2, name: 'Explore Options', tag: 'Test massing & design alternatives in 3D', img: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=500&q=80' },
          { id: 3, name: 'Build the Models', tag: 'Architecture, structure & MEP in BIM', img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=500&q=80' },
          { id: 4, name: 'Coordinate & Document', tag: 'Detect clashes, review, and issue drawing sets', img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=500&q=80' },
        ],
      },
      {
        lod: '02',
        stage: 'Fabrication',
        title: 'Construction & Fabrication',
        bgColor: 'bg-[#1F2020]',
        textColor: 'text-white',
        features: [
          'Fabrication-Level Model Geometry & Metadata',
          'Shop & Fabrication Drawings',
          'BOM Linkage & As-Built Status Updates',
        ],
        description:
          'We bridge design and the factory floor. From the fully coordinated model we extract fabrication-level detail and generate the precise drawings and machine files your fabricators need — keeping every output linked back to the model and your bill of materials.',
        bgImageUrl: '/images/img3.png',
        cta: 'Request Shop Drawings',
        gridItems: [
          { id: 1, name: 'Start Coordinated', tag: 'Begin from a clash-free, coordinated model', img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=500&q=80' },
          { id: 2, name: 'Extract for Fabrication', tag: 'Pull manufacturing-level geometry & data', img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=500&q=80' },
          { id: 3, name: 'Produce Outputs', tag: 'Shop drawings, CNC files & material lists', img: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=500&q=80' },
          { id: 4, name: 'Track As-Built', tag: 'Feed fabrication progress back into the model', img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=500&q=80' },
        ],
      },
      {
        lod: '03',
        stage: 'Simulation',
        title: 'Construction Simulation & Quantification',
        bgColor: 'bg-[#4A4A4A]',
        textColor: 'text-white',
        features: [
          'Phased / Sequenced 4D Model',
          'Site Logistics & Sequencing Analysis',
          'Quantity Take-Offs (5D) for Estimating',
        ],
        description:
          'Using 4D sequencing and automated takeoffs, we simulate construction schedules and produce accurate material and cost quantities to optimize logistics and cashflow. Visual simulations and quantified model data help stakeholders validate sequencing, reduce site conflicts, and make informed procurement decisions.',
        bgImageUrl: '/images/img4.png',
        cta: 'Simulate Your Schedule',
        gridItems: [
          { id: 1, name: 'Phase the Model', tag: 'Tag elements by construction stage', img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=500&q=80' },
          { id: 2, name: 'Link to Schedule', tag: 'Connect elements to the programme (4D)', img: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=500&q=80' },
          { id: 3, name: 'Simulate the Build', tag: 'Test sequences & spot bottlenecks', img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=500&q=80' },
          { id: 4, name: 'Quantify', tag: 'Accurate quantities for estimating (5D)', img: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=500&q=80' },
        ],
      },
      {
        lod: '04',
        stage: 'Modeling',
        title: 'Parametric Revit Family Creation',
        bgColor: 'bg-gradient-to-b from-[#003267] to-[#0d4e95]',
        textColor: 'text-white',
        features: [
          'Custom Parametric Revit Families',
          'Type & Instance Parameter Sets',
          'MEP Connectors & Embedded Data',
        ],
        description:
          'We produce flexible, performance-driven Revit families that capture manufacturer details, parameter sets, and BIM data for seamless project integration. These parametric components improve model accuracy, speed design iterations, and support downstream scheduling, costing, and facilities management.',
        bgImageUrl: '/images/img2.png',
        cta: 'Request a Custom Family',
        gridItems: [
          { id: 1, name: 'Pick the Template', tag: 'Start from the right family type', img: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=500&q=80' },
          { id: 2, name: 'Set the Framework', tag: 'Reference planes & driving dimensions', img: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=500&q=80' },
          { id: 3, name: 'Build & Parameterise', tag: 'Add geometry, parameters & connectors', img: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=500&q=80' },
          { id: 4, name: 'Test & Deploy', tag: 'Flex the component, then load it into projects', img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=500&q=80' },
        ],
      },
      {
        lod: '05',
        stage: 'Operations',
        title: 'Operation & Maintenance',
        bgColor: 'bg-gradient-to-b from-[#A91E2D] to-[#c94350]',
        textColor: 'text-white',
        features: [
          'Verified As-Built / Handover Model',
          'COBie / Structured Data Deliverables',
          'FM / CAFM-Ready Model Publication',
        ],
        description:
          'We transform as-built BIM into an asset management tool with embedded O&M manuals, lifecycle data, and tag-based asset schedules for efficient facility operations. Centralized model information supports preventive maintenance, faster troubleshooting, and extended asset life while reducing operational costs.',
        bgImageUrl: '/images/img5.png',
        cta: 'Plan Your FM Handover',
        gridItems: [
          { id: 1, name: 'Capture As-Built', tag: 'Record true handover conditions & markups', img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=500&q=80' },
          { id: 2, name: 'Attach Asset Data', tag: 'Manuals, spare parts & maintenance intervals', img: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=500&q=80' },
          { id: 3, name: 'Publish to FM', tag: 'Deliver into your facilities (CAFM) platform', img: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=500&q=80' },
          { id: 4, name: 'Ready for Operations', tag: 'Digital twin & lifecycle-ready model', img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=500&q=80' },
        ],
      },
    ],
  },

  serviceDetail: {
    sectionId: 'bim-detail',
    eyebrow: 'BIM & Revit modeling',
    heading: 'From schematic massing to fabrication-ready models — at the exact LOD your project demands.',
    intro:
      'We build federated MEP BIM models that combine mechanical, electrical, and plumbing systems into a single, coordinated Revit environment — mapped to your company\'s BIM standards and delivered cloud-ready on BIM 360 or ACC.',
    body:
      'Our teams work in your time zone, use your templates, and integrate directly into your project workflow. Every model is clash-checked before delivery. No surprises on site.',
    stats: [
      { label: 'Range', value: '100–500', note: 'Full span from conceptual massing to as-built FM handover' },
      { label: 'Turnaround', value: '72hr', note: 'Standard single-floor coordination model, start to delivery' },
      { label: 'Unresolved clashes', value: '0', note: 'Guaranteed clash-free before a model ever reaches you' },
      { label: 'Disciplines', value: '3', note: 'Mechanical, electrical, and plumbing in one federated model' },
    ],
    tools: ['Autodesk Revit MEP', 'Navisworks Manage', 'AutoCAD MEP', 'BIM 360 / ACC', 'Autodesk Tandem', 'Dynamo', 'Bluebeam Revu', 'Microsoft Teams'],
    ctaTitle: 'Try BIM modeling at zero risk',
    ctaBody: "Send us one drawing. We'll return a fully coordinated BIM model in 72 hours — completely free, no commitment required.",
    ctaButton: 'Start free pilot',
    imageUrl: 'https://images.pexels.com/photos/13727724/pexels-photo-13727724.png?auto=compress&cs=tinysrgb&h=650&w=940',
  },

  process: {
    sectionId: 'process',
    eyebrow: 'How it works',
    titleLine1: 'From 2D drawings to',
    titleLine2: 'coordinated BIM models.',
    steps: [
      { number: '01', title: 'You send 2D', description: 'Upload PDF, DWG, or RFP — we receive and acknowledge within hours.' },
      { number: '02', title: 'Scope & LOD review', description: 'We agree on LOD level, timeline, and BIM standards before modeling begins.' },
      { number: '03', title: 'BIM modeling', description: 'Revit MEP modeling with full coordination across mechanical, electrical, and plumbing.' },
      { number: '04', title: 'Clash check', description: 'Navisworks clash detection — every conflict documented and resolved before delivery.' },
      { number: '05', title: 'QC sign-off', description: 'Senior engineer reviews the model, drawings, and schedules before release.' },
      { number: '06', title: 'Delivery', description: 'RVT + DWG + PDF delivered on BIM 360 or ACC — ready for construction.' },
    ],
  },

  testimonials: {
    sectionId: 'clients',
    eyebrow: 'Client results',
    titleLine1: 'What BIM clients are',
    titleLine2: 'saying about us',
    items: [
      { quote: "JES delivered a fully coordinated federated MEP model in under 72 hours. Zero unresolved clashes on the first coordination pass — our subcontractors were stunned.", author: 'Thermosystems, IL', role: 'Senior BIM Coordinator', photo: 1181686 },
      { quote: "Their Revit models are immaculate. Every system routed, every clash resolved, every RFI documented. We've stopped doing BIM coordination in-house entirely.", author: 'Nick Colby', role: 'President, Colby Equipment', photo: 1222271 },
      { quote: "The LOD 400 fabrication-level model JES produced saved us three weeks on site. Hanger locations, spool drawings, connection details — all extracted directly from the model.", author: 'MRG Associates', role: 'MEP Project Manager, Nashville TN', photo: 3763188 },
      { quote: "We handed JES a messy set of as-built PDFs. They returned a clean LOD 500 Revit model with full FM parameter data — ready for our digital twin handover package.", author: 'D & B Building Services', role: 'BIM Lead, NJ', photo: 2379004 },
    ],
  },

  faq: {
    sectionId: 'faq',
    eyebrow: 'BIM Modeling FAQ',
    titleLine1: 'Frequently asked',
    titleLine2: 'questions.',
    image: '/images/img1.png',
    items: [
      { q: "What LOD levels do you support for BIM modeling?", a: "We deliver models at every LOD from 100 (conceptual massing) through 500 (as-built with FM data). Most coordination projects land at LOD 300 for permit sets, or LOD 400 for fabrication-level shop drawings with hanger locations and spool sheets." },
      { q: "How fast can you deliver a coordinated BIM model?", a: "Standard single-floor coordination models are delivered within 72 hours. Larger multi-discipline projects are scoped with a clear timeline during the scope review phase. Rush delivery is available — just ask." },
      { q: "Do you work in our Revit templates and BIM standards?", a: "Yes. We adopt your company templates, shared parameters, view templates, and annotation standards. Your model looks like it was built in-house — because our team operates as an extension of your engineering team." },
      { q: "What clash detection do you perform before delivery?", a: "Every model runs through Navisworks clash detection before delivery. We provide a full clash matrix with discipline-by-discipline counts, visual snapshots, and a resolution log. Zero unresolved clashes — guaranteed." },
      { q: "Can you deliver on BIM 360 or Autodesk Construction Cloud?", a: "Absolutely. We deliver directly to your BIM 360 or ACC environment, or via your preferred cloud platform (SharePoint, Procore, etc.). No new software to install, no JES portal to log into — we come to you." },
      { q: "What file formats do you deliver?", a: "Standard delivery includes native Revit (.RVT), Navisworks (.NWD), AutoCAD (.DWG), and PDF sets. We also provide quantity schedules (BOQ) in Excel or CSV, and RFI logs in your preferred format." },
    ],
  },

  cta: {
    sectionId: 'contact',
    titleLine1: 'Got a BIM project',
    titleLine2: 'in mind?',
    body: "Send us a drawing set. We'll return a free BIM pilot within 72 hours — no commitment, no retainer, no catch.",
    buttonLabel: 'Start free pilot',
    buttonHref: 'mailto:hello@jes-ai.com',
  },

  subServices: [
    { label: 'Planning and Designing', href: '/services/bim-modeling#pipeline' },
    { label: 'Construction and Fabrication', href: '/services/bim-modeling#pipeline' },
    { label: 'Construction Simulation and Quantification', href: '/services/bim-modeling#pipeline' },
    { label: 'Parametric Revit Family Creation', href: '/services/bim-modeling#pipeline' },
    { label: 'Operation and Maintenance', href: '/services/bim-modeling#pipeline' },
    { label: 'Reverse Engineering', href: '/services/bim-modeling#pipeline' },
    { label: 'AR & VR Modeling', href: '/services/bim-modeling#pipeline' },
  ],
};
