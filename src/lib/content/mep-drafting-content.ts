import type { ServiceContent } from './types';

export const mepDraftingContent: ServiceContent = {
  id: 'mep-drafting',
  label: 'MEP Drafting',
  slug: 'mep-drafting',
  navHref: '/services/mep-drafting',
  eyebrow: 'MEP Drafting Services',

  hero: {
    eyebrowText: 'MEP Drafting Services — Construction, Shop & As-built Drawings',
    headlineLine1: 'MEP drawings,',
    headlineLine2: 'delivered.',
    subcopy:
      'We produce the full spectrum of MEP drawings — construction, shop, coordination, as-built, and schematic — using your templates, title blocks, and layer standards so every sheet looks like it came from your own office.',
    stats: [
      { n: '500', suffix: '+/mo', label: 'Sheets per month across active drafting projects' },
      { n: '48', suffix: 'hrs', label: 'Standard turnaround for a construction drawing set' },
      { n: '99.5', suffix: '%', label: 'First-time-right rate measured at QA review' },
    ],
    primaryCtaLabel: 'Request a sample draft',
    secondaryCtaLabel: 'Explore MEP drafting',
    secondaryCtaHref: '#mep-detail',
  },

  marquee: [
    { label: 'Construction Drawings' },
    { label: 'Shop Drawings' },
    { label: 'Coordination Drawings' },
    { label: 'As-built Drawings' },
    { label: 'Schematic Drawings' },
    { label: 'AutoCAD MEP' },
    { label: 'Autodesk Revit' },
    { label: 'Bluebeam Revu' },
    { label: 'BIM 360 / ACC' },
    { label: 'MicroStation' },
    { label: 'Navisworks Manage' },
    { label: 'Title Block Standards' },
  ],

  pipeline: {
    sectionId: 'pipeline',
    steps: [
      {
        lod: '01',
        stage: 'Input',
        title: 'Intake & Standards Setup',
        bgColor: 'bg-[#A91E2D]',
        textColor: 'text-white',
        features: [
          'Your Templates, Layers & Title Blocks',
          'Design Basis & Drawing Set Review',
          'Discipline Scope Confirmation',
        ],
        description:
          'We start by adopting your exact CAD standards — templates, layer conventions, blocks, and title blocks. Every sheet we produce looks like it came from your own office, because it follows your office standards.',
        bgImageUrl: '/images/img1.png',
        cta: 'Start a Drafting Review',
        gridItems: [
          { id: 1, name: 'Receive Input', tag: 'Drawings, markups & design basis', img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=500&q=80' },
          { id: 2, name: 'Load Standards', tag: 'Templates, layers, blocks & title blocks', img: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=500&q=80' },
          { id: 3, name: 'Confirm Scope', tag: 'Disciplines, sheet count & turnaround', img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=500&q=80' },
          { id: 4, name: 'Set Up Project', tag: 'File structure, xrefs & sheet set', img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=500&q=80' },
        ],
      },
      {
        lod: '02',
        stage: 'Drafting',
        title: 'Construction Drawings',
        bgColor: 'bg-[#1F2020]',
        textColor: 'text-white',
        features: [
          'Mechanical, Electrical & Plumbing Sheets',
          'Routing, Sizing & Tagging to Standards',
          'Cross-Reference & Sheet Index QA',
        ],
        description:
          'We draft construction-ready MEP sheets — plans, sections, risers, and schedules — with accurate routing, sizing, and tagging. Every sheet is checked for line weights, tagging, and cross-references before it leaves our desk.',
        bgImageUrl: '/images/img3.png',
        cta: 'Request Construction Drawings',
        gridItems: [
          { id: 1, name: 'Lay Out Systems', tag: 'Route M, E & P on plan', img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=500&q=80' },
          { id: 2, name: 'Size & Tag', tag: 'Ducts, pipes, conduits & labels', img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=500&q=80' },
          { id: 3, name: 'Add Schedules', tag: 'Equipment, diffuser & valve schedules', img: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=500&q=80' },
          { id: 4, name: 'Cross-Check', tag: 'References, callouts & sheet index', img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=500&q=80' },
        ],
      },
      {
        lod: '03',
        stage: 'Shop',
        title: 'Shop & Fabrication Drawings',
        bgColor: 'bg-[#4A4A4A]',
        textColor: 'text-white',
        features: [
          'Fabrication-Level Detail & Spool Sheets',
          'Hanger Locations & Connection Details',
          'Manufacturer-Specific Component Data',
        ],
        description:
          'From the coordinated model we extract fabrication-level shop drawings — spool sheets, hanger locations, and connection details — ready for your fabricators and installers to build from directly.',
        bgImageUrl: '/images/img4.png',
        cta: 'Request Shop Drawings',
        gridItems: [
          { id: 1, name: 'Extract Detail', tag: 'Pull fabrication-level geometry', img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=500&q=80' },
          { id: 2, name: 'Add Spool Sheets', tag: 'Segment & number for fabrication', img: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=500&q=80' },
          { id: 3, name: 'Hangers & Details', tag: 'Support locations & connections', img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=500&q=80' },
          { id: 4, name: 'Issue for Fabrication', tag: 'Stamped, numbered & ready', img: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=500&q=80' },
        ],
      },
      {
        lod: '04',
        stage: 'Coordination',
        title: 'Coordination Drawings',
        bgColor: 'bg-gradient-to-b from-[#003267] to-[#0d4e95]',
        textColor: 'text-white',
        features: [
          'Multi-Discipline Overlay Sheets',
          'Clash Markups & Resolution Notes',
          'Coordination Meeting Record Drawings',
        ],
        description:
          'We produce coordination drawings that overlay mechanical, electrical, plumbing, and structural — highlighting conflicts, clearance issues, and resolution notes so your coordination meetings stay focused and productive.',
        bgImageUrl: '/images/img2.png',
        cta: 'Request Coordination Set',
        gridItems: [
          { id: 1, name: 'Overlay Disciplines', tag: 'M, E, P & S on one plan', img: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=500&q=80' },
          { id: 2, name: 'Mark Clashes', tag: 'Conflicts & clearance issues', img: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=500&q=80' },
          { id: 3, name: 'Add Notes', tag: 'Resolution notes & action items', img: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=500&q=80' },
          { id: 4, name: 'Issue for Meeting', tag: 'Ready for coordination review', img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=500&q=80' },
        ],
      },
      {
        lod: '05',
        stage: 'As-built',
        title: 'As-built & Schematic Drawings',
        bgColor: 'bg-gradient-to-b from-[#A91E2D] to-[#c94350]',
        textColor: 'text-white',
        features: [
          'Field-Verified As-built Record Sets',
          'Redline Incorporation & QA',
          'Schematic Diagrams for Submittal',
        ],
        description:
          'We update drawings with field redlines to produce accurate as-built record sets, and create clean schematic diagrams — single lines, risers, and control diagrams — for submittal and O&M handover.',
        bgImageUrl: '/images/img5.png',
        cta: 'Request As-built Set',
        gridItems: [
          { id: 1, name: 'Receive Redlines', tag: 'Field markups & verified changes', img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=500&q=80' },
          { id: 2, name: 'Update Drawings', tag: 'Incorporate as-built conditions', img: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=500&q=80' },
          { id: 3, name: 'Create Schematics', tag: 'Single lines, risers & controls', img: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=500&q=80' },
          { id: 4, name: 'Issue Record Set', tag: 'QA-checked & handover ready', img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=500&q=80' },
        ],
      },
    ],
  },

  serviceDetail: {
    sectionId: 'mep-detail',
    eyebrow: 'MEP drafting & drawings',
    heading: 'Construction-ready MEP drawings produced to your exact standards — accurate, coordinated, and on time.',
    intro:
      'We produce the full spectrum of MEP drawings — construction, shop, coordination, as-built, and schematic — using your templates, title blocks, and layer standards so every sheet looks like it came from your own office.',
    body:
      'Drafting is done in AutoCAD MEP and Revit, with QA checks for line weights, tagging, and cross-references on every sheet. Turnaround is typically 48–72 hours per discipline per floor.',
    stats: [
      { label: 'Sheet volume', value: '500+', note: 'Sheets per month across active projects' },
      { label: 'Accuracy', value: '99.5%', note: 'First-time-right rate measured at QA review' },
      { label: 'Turnaround', value: '48hr', note: 'Standard construction drawing set per floor' },
      { label: 'Standards', value: 'Yours', note: 'Your templates, layers, blocks, and title blocks' },
    ],
    tools: ['AutoCAD MEP', 'Autodesk Revit', 'Bluebeam Revu', 'BIM 360 / ACC', 'MicroStation', 'Navisworks Manage'],
    ctaTitle: 'Outsource your MEP drafting',
    ctaBody: 'Send us a sample sheet and your CAD standards. We\'ll return a fully drafted set in 48 hours — no commitment, no cost.',
    ctaButton: 'Request sample draft',
    imageUrl: 'https://images.pexels.com/photos/5505103/pexels-photo-5505103.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },

  process: {
    sectionId: 'process',
    eyebrow: 'How it works',
    titleLine1: 'From markups to',
    titleLine2: 'construction-ready sheets.',
    steps: [
      { number: '01', title: 'You send input', description: 'Upload drawings, markups, or design basis — we confirm scope within hours.' },
      { number: '02', title: 'Standards setup', description: 'We load your templates, layers, blocks, and title blocks into the project.' },
      { number: '03', title: 'Drafting', description: 'MEP sheets drafted in AutoCAD MEP or Revit with accurate routing and tagging.' },
      { number: '04', title: 'QA check', description: 'Line weights, tagging, cross-references, and sheet index reviewed on every sheet.' },
      { number: '05', title: 'Revision cycles', description: 'We incorporate your comments and issue revised sets until you sign off.' },
      { number: '06', title: 'Delivery', description: 'DWG + PDF delivered on BIM 360, ACC, or your preferred platform — ready for issue.' },
    ],
  },

  testimonials: {
    sectionId: 'clients',
    eyebrow: 'Client results',
    titleLine1: 'What drafting clients are',
    titleLine2: 'saying about us',
    items: [
      { quote: "JES drafted 120 MEP sheets for a hospital project in under a week. Every sheet matched our title block and layer standards perfectly — our reviewers couldn't tell they were outsourced.", author: 'Premier MEP, TX', role: 'Drafting Manager', photo: 1181686 },
      { quote: "Their shop drawings are the best we've received. Spool sheets, hanger locations, connection details — all extracted from the model and fabrication-ready.", author: 'John Merrell', role: 'MEP Foreman, Chicago', photo: 1222271 },
      { quote: "We send JES redlines on Monday and get clean as-built record sets by Wednesday. They've become an extension of our drafting team.", author: 'Summit Building Services', role: 'Project Engineer, FL', photo: 3763188 },
      { quote: "The coordination drawings JES produced caught clashes that would have cost us thousands on site. Clear overlays, clear notes, zero ambiguity.", author: 'Apex Engineering', role: 'Coordination Lead, OH', photo: 2379004 },
    ],
  },

  faq: {
    sectionId: 'faq',
    eyebrow: 'MEP Drafting FAQ',
    titleLine1: 'Frequently asked',
    titleLine2: 'questions.',
    image: '/images/img1.png',
    items: [
      { q: "What drawing types do you produce?", a: "We produce the full spectrum: construction drawings, shop drawings, coordination drawings, as-built drawings, schematic drawings, and mechanical room drawings — all in MEP disciplines (mechanical, electrical, plumbing)." },
      { q: "Do you work in our CAD standards?", a: "Yes. We adopt your templates, layer conventions, blocks, title blocks, and annotation standards. Every sheet looks like it came from your own office because it follows your office standards." },
      { q: "How fast can you deliver a drawing set?", a: "Standard construction drawing sets are delivered within 48 hours per discipline per floor. Larger sets are scoped with a clear timeline during intake. Rush delivery is available." },
      { q: "What software do you draft in?", a: "We draft in AutoCAD MEP and Autodesk Revit, with QA in Bluebeam Revu. We can also work in MicroStation if your project requires it." },
      { q: "Can you produce shop drawings from our model?", a: "Absolutely. From a coordinated Revit model we extract fabrication-level shop drawings — spool sheets, hanger locations, and connection details — ready for your fabricators." },
      { q: "How do you handle revisions?", a: "Revision cycles are included. You send comments or redlines, we incorporate them and issue a revised set. We continue until you sign off — no extra charge for reasonable revision rounds." },
    ],
  },

  cta: {
    sectionId: 'contact',
    titleLine1: 'Got an MEP drafting',
    titleLine2: 'project?',
    body: "Send us a sample sheet and your CAD standards. We'll return a fully drafted set in 48 hours — no commitment, no cost.",
    buttonLabel: 'Request sample draft',
    buttonHref: 'mailto:hello@jes-ai.com',
  },

  subServices: [
    { label: 'Construction Drawings', href: '/services/mep-drafting#pipeline' },
    { label: 'Shop Drawings', href: '/services/mep-drafting#pipeline' },
    { label: 'Coordination Drawings', href: '/services/mep-drafting#pipeline' },
    { label: 'As-built Drawings', href: '/services/mep-drafting#pipeline' },
    { label: 'Schematic Drawings', href: '/services/mep-drafting#pipeline' },
    { label: 'Mechanical Room Drawings', href: '/services/mep-drafting#pipeline' },
  ],
};
