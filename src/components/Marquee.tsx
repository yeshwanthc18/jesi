const bimTerms = [
  'LOD 100–500', 'Revit MEP', 'Clash Detection', 'Navisworks',
  'BIM 360 / ACC', 'Federated Models', 'Shop Drawings', 'As-built Models',
  'Dynamo', 'Coordination', 'BOQ Schedules', 'RFI Management',
];

export function Marquee() {
  return (
    <section className="overflow-hidden border-y border-ink-200 bg-ink-100 py-4">
      <div className="flex w-max animate-marquee whitespace-nowrap">
        {[...bimTerms, ...bimTerms].map((s, i) => (
          <span key={i} className="px-5 font-display text-base font-medium text-ink-400">
            {s} <span className="text-brand-red">/</span>
          </span>
        ))}
      </div>
    </section>
  );
}
