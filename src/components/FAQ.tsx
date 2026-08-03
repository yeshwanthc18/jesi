import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useReveal } from "../hooks/useReveal";

const faqs = [
  {
    q: "What LOD levels do you support for BIM modeling?",
    a: "We deliver models at every LOD from 100 (conceptual massing) through 500 (as-built with FM data). Most coordination projects land at LOD 300 for permit sets, or LOD 400 for fabrication-level shop drawings with hanger locations and spool sheets.",
  },
  {
    q: "How fast can you deliver a coordinated BIM model?",
    a: "Standard single-floor coordination models are delivered within 72 hours. Larger multi-discipline projects are scoped with a clear timeline during the scope review phase. Rush delivery is available — just ask.",
  },
  {
    q: "Do you work in our Revit templates and BIM standards?",
    a: "Yes. We adopt your company templates, shared parameters, view templates, and annotation standards. Your model looks like it was built in-house — because our team operates as an extension of your engineering team.",
  },
  {
    q: "What clash detection do you perform before delivery?",
    a: "Every model runs through Navisworks clash detection before delivery. We provide a full clash matrix with discipline-by-discipline counts, visual snapshots, and a resolution log. Zero unresolved clashes — guaranteed.",
  },
  {
    q: "Can you deliver on BIM 360 or Autodesk Construction Cloud?",
    a: "Absolutely. We deliver directly to your BIM 360 or ACC environment, or via your preferred cloud platform (SharePoint, Procore, etc.). No new software to install, no JES portal to log into — we come to you.",
  },
  {
    q: "What file formats do you deliver?",
    a: "Standard delivery includes native Revit (.RVT), Navisworks (.NWD), AutoCAD (.DWG), and PDF sets. We also provide quantity schedules (BOQ) in Excel or CSV, and RFI logs in your preferred format.",
  },
];

export function FAQ() {
  const { ref, inView } = useReveal();
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-ink-100 py-16 lg:py-24">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div
          ref={ref}
          className={`reveal ${inView ? "in-view" : ""} mb-12 max-w-2xl`}
        >
          <p className="mb-4 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.14em] text-brand-red">
            <span className="block h-px w-8 bg-brand-red" />
            BIM Modeling FAQ
          </p>

          <h2 className="font-display text-3xl font-bold uppercase leading-tight tracking-tight text-ink-800 sm:text-4xl lg:text-5xl">
            Frequently asked
            <br />
            <span className="text-ink-400">questions.</span>
          </h2>
        </div>

        <div className="grid gap-12 lg:grid-cols-[1fr_460px] lg:items-start">
          {/* FAQ */}
          <div className="space-y-3">
            {faqs.map((faq, i) => (
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
                src="/images/img1.png"
                alt="BIM Modeling"
                className="h-[540px] w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}