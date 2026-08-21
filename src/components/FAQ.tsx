import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useReveal } from "../hooks/useReveal";
import type { FAQItem } from "../lib/content/types";

interface FAQProps {
  sectionId: string;
  eyebrow: string;
  titleLine1: string;
  titleLine2: string;
  items: FAQItem[];
  image: string;
}

export function FAQ({ sectionId, eyebrow, titleLine1, titleLine2, items, image }: FAQProps) {
  const { ref, inView } = useReveal();
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id={sectionId} className="bg-ink-100 py-16 lg:py-24">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div
          ref={ref}
          className={`reveal ${inView ? "in-view" : ""} mb-12 max-w-2xl`}
        >
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

        <div className="grid gap-12 lg:grid-cols-[1fr_460px] lg:items-start">
          {/* FAQ */}
          <div className="space-y-3">
            {items.map((faq, i) => (
              <div
                key={i}
                className={`overflow-hidden border transition-colors duration-300 ${
                  open === i
                    ? "border-brand-red/30 bg-white"
                    : "border-ink-200 bg-white"
                }`}
              >
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="flex w-full items-center justify-between gap-4 p-5 text-left"
                >
                  <span className="font-display text-base font-medium text-ink-800">
                    {faq.q}
                  </span>

                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-brand-red transition-transform duration-300 ${
                      open === i ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {open === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        duration: 0.3,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-5 text-sm leading-relaxed text-ink-500">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Image */}
          <div className="hidden lg:block">
            <div className="sticky top-24 overflow-hidden rounded-2xl shadow-2xl">
              <img
                src={image}
                alt="Service"
                className="h-[540px] w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
