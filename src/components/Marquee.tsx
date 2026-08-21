import type { MarqueeTerm } from '../lib/content/types';

interface MarqueeProps {
  terms: MarqueeTerm[];
}

export function Marquee({ terms }: MarqueeProps) {
  return (
    <section className="overflow-hidden border-y border-ink-200 bg-ink-100 py-4">
      <div className="flex w-max animate-marquee whitespace-nowrap">
        {[...terms, ...terms].map((s, i) => (
          <span key={i} className="px-5 font-display text-base font-medium text-ink-400">
            {s.label} <span className="text-brand-red">/</span>
          </span>
        ))}
      </div>
    </section>
  );
}
