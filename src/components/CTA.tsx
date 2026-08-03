import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useReveal } from '../hooks/useReveal';

export function CTA() {
  const { ref, inView } = useReveal();

  return (
    <section id="contact" className="relative overflow-hidden bg-brand-red py-20 lg:py-28">
      {/* Decorative glow */}
      <div className="absolute inset-0 bg-gradient-to-t from-ink-800/30 to-transparent" />
      <div className="absolute -bottom-32 left-1/2 h-64 w-[600px] -translate-x-1/2 rounded-full bg-amber/20 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-[1400px] px-6 lg:px-10">
        <div
          ref={ref}
          className={`grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center ${inView ? 'animate-fade-up' : 'opacity-0'}`}
        >
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="font-display text-4xl font-bold uppercase leading-[0.95] tracking-tight text-white sm:text-5xl lg:text-7xl"
            >
              Got a BIM project
              <br />
              in mind?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mt-6 max-w-xl text-lg text-white/85"
            >
              Send us a drawing set. We'll return a free BIM pilot within 72
              hours — no commitment, no retainer, no catch.
            </motion.p>
          </div>

          <motion.a
            href="mailto:hello@jes-ai.com"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-ink-800 px-10 py-5 text-lg font-bold text-white transition-colors duration-300 hover:bg-white hover:text-ink-800 lg:self-center"
          >
            Start free pilot
            <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </motion.a>
        </div>
      </div>
    </section>
  );
}
