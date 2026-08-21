import { Play } from 'lucide-react';
import { motion } from 'framer-motion';
import { useReveal } from '../hooks/useReveal';
import type { Testimonial } from '../lib/content/types';

interface TestimonialsProps {
  sectionId: string;
  eyebrow: string;
  titleLine1: string;
  titleLine2: string;
  items: Testimonial[];
}

export function Testimonials({ sectionId, eyebrow, titleLine1, titleLine2, items }: TestimonialsProps) {
  const { ref, inView } = useReveal();

  return (
    <section id={sectionId} className="bg-ink-800 py-16 lg:py-24">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div ref={ref} className={`reveal ${inView ? 'in-view' : ''} mb-12`}>
          <p className="mb-4 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.14em] text-brand-red">
            <span className="block h-px w-8 bg-brand-red" />
            {eyebrow}
          </p>
          <h2 className="font-display text-3xl font-bold uppercase leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
            {titleLine1}
            <br />
            <span className="text-ink-400">{titleLine2}</span>
          </h2>
        </div>

        {/* Photo grid */}
        <div className="mb-12 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {items.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative aspect-[4/3] overflow-hidden rounded-2xl"
            >
              <img
                src={`https://images.pexels.com/photos/${t.photo}/pexels-photo-${t.photo}.jpeg?auto=compress&cs=tinysrgb&w=600`}
                alt={t.author}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-800/90 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:bg-brand-red">
                  <Play className="h-5 w-5 fill-white text-white" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="text-sm font-semibold text-white">{t.author}</p>
                <p className="text-xs text-white/70">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quote columns */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
            >
              <p className="text-sm leading-relaxed text-ink-300">"{t.quote}"</p>
              <div className="mt-4 text-xs font-semibold text-brand-red">{t.author}</div>
              <div className="text-xs text-ink-400">{t.role}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
