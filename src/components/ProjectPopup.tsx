import { useState, useEffect } from 'react';
import { X, ArrowRight, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function ProjectPopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setOpen(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            className="absolute inset-0 bg-ink-800/60 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 w-full max-w-lg overflow-hidden rounded-2xl bg-ink-50 shadow-2xl"
          >
            <div className="h-1.5 w-full bg-brand-red" />

            <button
              onClick={() => setOpen(false)}
              className="absolute right-4 top-5 z-20 flex h-8 w-8 items-center justify-center rounded-full text-ink-400 transition-colors hover:bg-ink-100 hover:text-ink-800"
              aria-label="Close popup"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="relative h-44 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80"
                alt="BIM modeling project"
                className="h-full w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-800/80 to-transparent" />
              <div className="absolute bottom-4 left-5">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-red px-3 py-1 text-xs font-semibold text-white">
                  {/* <Sparkles className="h-3 w-3" /> */}
                  New BIM Project
                </span>
              </div>
            </div>

            <div className="p-6">
              <h3 className="font-display text-xl font-bold text-ink-800">
                Free BIM Modeling Pilot — 72 Hour Delivery
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-500">
                Send us one drawing. We'll return a fully coordinated, clash-free
                Revit MEP model at your target LOD — completely free, no
                commitment required.
              </p>

              <div className="mt-4 grid grid-cols-3 gap-3">
                {[
                  { label: 'Turnaround', value: '72hrs' },
                  { label: 'LOD Range', value: '100–500' },
                  { label: 'Cost', value: 'Free' },
                ].map((s) => (
                  <div key={s.label} className="rounded-lg bg-ink-100 p-3 text-center">
                    <div className="font-display text-lg font-bold text-brand-red">{s.value}</div>
                    <div className="text-xs text-ink-400">{s.label}</div>
                  </div>
                ))}
              </div>

              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="group mt-5 flex w-full items-center justify-center gap-2 rounded-lg bg-brand-red px-6 py-3 font-display text-sm font-semibold text-white transition-colors hover:bg-ink-800"
              >
                Start your free BIM pilot
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <button
                onClick={() => setOpen(false)}
                className="mt-2 w-full text-center text-xs text-ink-400 transition-colors hover:text-ink-600"
              >
                Maybe later
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
