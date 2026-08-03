export interface SubService {
  label: string;
  href: string;
}

export interface Service {
  label: string;
  href: string;
  subServices?: SubService[];
}

export const services: Service[] = [
  {
    label: 'BIM',
    href: '#bim-detail',
    subServices: [
      { label: 'Planning and Designing', href: '#bim-detail' },
      { label: 'Construction and Fabrication', href: '#bim-detail' },
      { label: 'Construction Simulation and Quantification', href: '#bim-detail' },
      { label: 'Parametric Revit Family Creation', href: '#bim-detail' },
      { label: 'Operation and Maintenance', href: '#bim-detail' },
      { label: 'Reverse Engineering', href: '#bim-detail' },
      { label: 'AR & VR Modeling', href: '#bim-detail' },
    ],
  },
  {
    label: 'MEP Drafting',
    href: '#bim-detail',
    subServices: [
      { label: 'Construction Drawings', href: '#bim-detail' },
      { label: 'Shop Drawings', href: '#bim-detail' },
      { label: 'Coordination Drawings', href: '#bim-detail' },
      { label: 'As-built Drawings', href: '#bim-detail' },
      { label: 'Schematic Drawings', href: '#bim-detail' },
      { label: 'Mechanical Room Drawings', href: '#bim-detail' },
    ],
  },
  {
    label: 'Building Engineering Services',
    href: '#bim-detail',
    subServices: [
      { label: 'Quantity Take-off / BOQ Preparation', href: '#bim-detail' },
      { label: 'Thermal Load Calculation', href: '#bim-detail' },
      { label: 'Ductwork E.S.P Calculation', href: '#bim-detail' },
      { label: 'Pump Head Calculation', href: '#bim-detail' },
      { label: 'Equipment Selection', href: '#bim-detail' },
    ],
  },
  {
    label: 'CFD Analysis',
    href: '#bim-detail',
  },
  {
    label: 'Contract Manufacturing',
    href: '#bim-detail',
    subServices: [
      { label: 'Component Manufacturing', href: '#bim-detail' },
      { label: 'Private Label Manufacturing', href: '#bim-detail' },
      { label: 'End-to-end Product Manufacturing', href: '#bim-detail' },
    ],
  },
];
