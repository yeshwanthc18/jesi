import { motion } from 'framer-motion';
import { useReveal } from '../hooks/useReveal';

const steps = [
  { number: '01', title: 'You send 2D', description: 'Upload PDF, DWG, or RFP — we receive and acknowledge within hours.' },
  { number: '02', title: 'Scope & LOD review', description: 'We agree on LOD level, timeline, and BIM standards before modeling begins.' },
  { number: '03', title: 'BIM modeling', description: 'Revit MEP modeling with full coordination across mechanical, electrical, and plumbing.' },
  { number: '04', title: 'Clash check', description: 'Navisworks clash detection — every conflict documented and resolved before delivery.' },
  { number: '05', title: 'QC sign-off', description: 'Senior engineer reviews the model, drawings, and schedules before release.' },
  { number: '06', title: 'Delivery', description: 'RVT + DWG + PDF delivered on BIM 360 or ACC — ready for construction.' },
];

export function Process() {
  const { ref, inView } = useReveal();

  return (
    <section id="process" className="bg-ink-50 py-16 lg:py-24">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div ref={ref} className={`reveal ${inView ? 'in-view' : ''} mb-12`}>
          <p className="mb-4 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.14em] text-brand-red">
            <span className="block h-px w-8 bg-brand-red" />
            How it works
          </p>
          <h2 className="font-display text-3xl font-bold uppercase leading-tight tracking-tight text-ink-800 sm:text-4xl lg:text-5xl">
            From 2D drawings to
            <br />
            <span className="text-ink-400">coordinated BIM models.</span>
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, i) => (
            <ProcessCard key={step.number} step={step} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

type StepData = (typeof steps)[number];

function ProcessCard({ step, index }: { step: StepData; index: number }) {
  const { ref, inView } = useReveal<HTMLDivElement>();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6 }}
      className="group relative overflow-hidden rounded-2xl border border-ink-200 bg-white p-7 transition-shadow duration-500 hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)]"
    >
      <div className="flex items-center justify-between">
        <span className="font-display text-4xl font-bold text-ink-200 transition-colors group-hover:text-brand-red/30">
          {step.number}
        </span>
        <div className="h-2 w-2 rounded-full bg-brand-red transition-transform duration-500 group-hover:scale-150" />
      </div>
      <h3 className="mt-5 font-display text-lg font-bold uppercase tracking-tight text-ink-800">{step.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-ink-500">{step.description}</p>
      <div className="mt-6 h-0.5 w-0 bg-brand-red transition-all duration-500 group-hover:w-full" />
    </motion.div>
  );
}
