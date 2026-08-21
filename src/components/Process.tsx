import { motion } from 'framer-motion';
import { useReveal } from '../hooks/useReveal';
import type { ProcessStep } from '../lib/content/types';

interface ProcessProps {
  sectionId: string;
  eyebrow: string;
  titleLine1: string;
  titleLine2: string;
  steps: ProcessStep[];
}

export function Process({ sectionId, eyebrow, titleLine1, titleLine2, steps }: ProcessProps) {
  const { ref, inView } = useReveal();

  return (
    <section id={sectionId} className="bg-ink-50 py-16 lg:py-24">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div ref={ref} className={`reveal ${inView ? 'in-view' : ''} mb-12`}>
          <p className="mb-4 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.14em] text-brand-red">
            <span className="block h-px w-8 bg-brand-red" />
            {eyebrow}
          </p>
          <h2 className="font-display text-3xl font-bold uppercase leading-tight tracking-tight text-ink-800 sm:text-4xl lg:text-5xl">
            {titleLine1}
            <br />
            <span className="text-ink-400">{titleLine2}</span>
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

function ProcessCard({ step, index }: { step: ProcessStep; index: number }) {
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
