export interface SubService {
  label: string;
  href: string;
}

export interface ServiceStat {
  label: string;
  value: string;
  note: string;
}

export interface ServiceDetail {
  id: string;
  label: string;
  eyebrow: string;
  heading: string;
  intro: string;
  body: string;
  stats: ServiceStat[];
  tools: string[];
  ctaTitle: string;
  ctaBody: string;
  ctaButton: string;
  imageUrl: string;
}

export interface Service extends ServiceDetail {
  href: string;
  subServices?: SubService[];
}

const bimImage = 'https://images.pexels.com/photos/13727724/pexels-photo-13727724.png?auto=compress&cs=tinysrgb&h=650&w=940';
const mepImage = 'https://images.pexels.com/photos/5505103/pexels-photo-5505103.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';
const engImage = 'https://images.pexels.com/photos/4458205/pexels-photo-4458205.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';
const cfdImage = 'https://images.pexels.com/photos/30018091/pexels-photo-30018091.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';
const mfgImage = 'https://images.pexels.com/photos/8973680/pexels-photo-8973680.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';

export const services: Service[] = [
  {
    id: 'bim',
    label: 'BIM',
    href: '#service-bim',
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
    imageUrl: bimImage,
    subServices: [
      { label: 'Planning and Designing', href: '#service-bim' },
      { label: 'Construction and Fabrication', href: '#service-bim' },
      { label: 'Construction Simulation and Quantification', href: '#service-bim' },
      { label: 'Parametric Revit Family Creation', href: '#service-bim' },
      { label: 'Operation and Maintenance', href: '#service-bim' },
      { label: 'Reverse Engineering', href: '#service-bim' },
      { label: 'AR & VR Modeling', href: '#service-bim' },
    ],
  },
  {
    id: 'mep-drafting',
    label: 'MEP Drafting',
    href: '#service-mep-drafting',
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
    imageUrl: mepImage,
    subServices: [
      { label: 'Construction Drawings', href: '#service-mep-drafting' },
      { label: 'Shop Drawings', href: '#service-mep-drafting' },
      { label: 'Coordination Drawings', href: '#service-mep-drafting' },
      { label: 'As-built Drawings', href: '#service-mep-drafting' },
      { label: 'Schematic Drawings', href: '#service-mep-drafting' },
      { label: 'Mechanical Room Drawings', href: '#service-mep-drafting' },
    ],
  },
  {
    id: 'building-engineering',
    label: 'Building Engineering Services',
    href: '#service-building-engineering',
    eyebrow: 'Engineering & calculations',
    heading: 'Accurate load calculations, BOQs, and equipment selection that hold up on site and in review.',
    intro:
      'Our licensed engineers deliver the numbers that drive design — thermal load calculations, ductwork E.S.P, pump head sizing, equipment selection, and quantity take-offs — documented and ready for submittal.',
    body:
      'Every calculation is traceable: assumptions, codes referenced, and safety factors are documented so your reviewer can verify every figure. We follow ASHRAE, IPC, IMC, and local amendments as required.',
    stats: [
      { label: 'Code compliance', value: 'ASHRAE', note: 'ASHRAE, IPC, IMC, and local amendments' },
      { label: 'Calculation accuracy', value: '±5%', note: 'Verified against design conditions and equipment data' },
      { label: 'BOQ detail', value: 'Line-item', note: 'Itemized quantities with unit rates ready for tender' },
      { label: 'Equipment', value: 'Curated', note: 'Selection from 20+ OEM catalogs with lead times' },
    ],
    tools: ['Carrier HAP', 'Trane TRACE 3D', 'Autodesk Revit', 'Excel BOQ Templates', 'McQuay Duct Sizer', 'Pipe Sizer Pro'],
    ctaTitle: 'Get your calculations done right',
    ctaBody: 'Send us your design basis and drawings. We\'ll return a full calculation package in 5 business days — reviewed and stamped.',
    ctaButton: 'Request calculation quote',
    imageUrl: engImage,
    subServices: [
      { label: 'Quantity Take-off / BOQ Preparation', href: '#service-building-engineering' },
      { label: 'Thermal Load Calculation', href: '#service-building-engineering' },
      { label: 'Ductwork E.S.P Calculation', href: '#service-building-engineering' },
      { label: 'Pump Head Calculation', href: '#service-building-engineering' },
      { label: 'Equipment Selection', href: '#service-building-engineering' },
    ],
  },
  {
    id: 'cfd-analysis',
    label: 'CFD Analysis',
    href: '#service-cfd-analysis',
    eyebrow: 'Computational fluid dynamics',
    heading: 'Simulate airflow, thermal comfort, and ventilation before you build — and optimize with confidence.',
    intro:
      'We run CFD simulations on your design to predict airflow patterns, temperature distribution, pressure drops, and ventilation effectiveness — giving you data to validate design decisions before construction.',
    body:
      'Typical applications include data center cooling, cleanroom airflow, large open-plan offices, atrium thermal stratification, and parking garage ventilation. Reports include contour plots, velocity vectors, and a plain-language summary of findings.',
    stats: [
      { label: 'Mesh size', value: '20M+', note: 'Cells per simulation for high-resolution results' },
      { label: 'Applications', value: '12+', note: 'Data centers, cleanrooms, offices, atria, parking' },
      { label: 'Report time', value: '7 days', note: 'From model hand-off to full analysis report' },
      { label: 'Confidence', value: 'Validated', note: 'Results benchmarked against measured field data' },
    ],
    tools: ['Ansys Fluent', 'Ansys CFX', 'OpenFOAM', 'Autodesk CFD', 'ParaView', 'SolidWorks Flow Simulation'],
    ctaTitle: 'Validate your design with simulation',
    ctaBody: 'Send us your geometry and design conditions. We\'ll run a preliminary CFD analysis and walk you through the results — no obligation.',
    ctaButton: 'Request CFD analysis',
    imageUrl: cfdImage,
  },
  {
    id: 'contract-manufacturing',
    label: 'Contract Manufacturing',
    href: '#service-contract-manufacturing',
    eyebrow: 'Contract & private label',
    heading: 'From your drawings to finished product — component, private-label, or end-to-end manufacturing.',
    intro:
      'We manufacture mechanical and sheet metal components to your drawings and specs — from single parts to full private-label product lines. Fabrication, finishing, assembly, and QC happen under one roof.',
    body:
      'Capabilities include laser cutting, CNC bending, welding (MIG/TIG/spot), powder coating, and mechanical assembly. We hold tight tolerances and provide material traceability and inspection reports with every batch.',
    stats: [
      { label: 'Tolerance', value: '±0.1mm', note: 'Held on laser-cut and CNC-bent components' },
      { label: 'Batch size', value: '1–10k', note: 'From prototype samples to full production runs' },
      { label: 'Materials', value: '6+', note: 'Mild steel, stainless, aluminum, galvanized, copper, brass' },
      { label: 'QC report', value: 'Included', note: 'Dimensional inspection and material traceability' },
    ],
    tools: ['Trumpf Laser', 'Amada CNC Press Brake', 'MIG / TIG Welding', 'Powder Coating Line', 'SolidWorks', 'ERP Production Tracking'],
    ctaTitle: 'Get your parts manufactured',
    ctaBody: 'Send us your drawings or samples. We\'ll quote the job, manufacture a first article for approval, then run production.',
    ctaButton: 'Request manufacturing quote',
    imageUrl: mfgImage,
    subServices: [
      { label: 'Component Manufacturing', href: '#service-contract-manufacturing' },
      { label: 'Private Label Manufacturing', href: '#service-contract-manufacturing' },
      { label: 'End-to-end Product Manufacturing', href: '#service-contract-manufacturing' },
    ],
  },
];

export const serviceById = (id: string): Service | undefined =>
  services.find((s) => s.id === id);
