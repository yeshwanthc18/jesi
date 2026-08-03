import { Layers, Search, FileText, ClipboardList, HelpCircle, Home, ArrowRight, ArrowRightCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { useReveal } from '../hooks/useReveal';


const lodRows = [
  { lod: '100', stage: 'Conceptual', delivers: 'Generic system massing, approximate sizes, spatial allocation', use: 'Feasibility, early cost estimates' },
  { lod: '200', stage: 'Schematic', delivers: 'Approximate geometry, system routing, equipment placement', use: 'Design development, owner review' },
  { lod: '300', stage: 'Coordinated', delivers: 'Precise geometry, fully coordinated with structure and arch, clash-free', use: 'Permit set, subcontractor coordination' },
  { lod: '400', stage: 'Fabrication', delivers: 'Fabrication-level detail, connection types, hanger locations, spool drawings', use: 'Shop drawings, prefab, installation' },
  { lod: '500', stage: 'As-built', delivers: 'Site-verified geometry and data, O&M information embedded', use: 'FM handover, digital twin' },
];

const tools = ['Autodesk Revit MEP', 'Navisworks Manage', 'AutoCAD MEP', 'BIM 360 / ACC', 'Autodesk Tandem', 'Dynamo', 'Bluebeam Revu', 'Microsoft Teams'];



const stats = [
  { label: 'Range', value: '100–500', note: 'Full span from conceptual massing to as-built FM handover' },
  { label: 'Turnaround', value: '72hr', note: 'Standard single-floor coordination model, start to delivery' },
  { label: 'Unresolved clashes', value: '0', note: 'Guaranteed clash-free before a model ever reaches you' },
  { label: 'Disciplines', value: '3', note: 'Mechanical, electrical, and plumbing in one federated model' },
];

export function BIMServiceDetail() {
  const { ref, inView } = useReveal();

  return (
    <section id="bim-detail" className="bg-ink-800 py-16 lg:py-24">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="flex overflow-hidden rounded-2xl border border-ink-600/30">
          {/* Gradient rail bar using only approved colors */}
          <div
            className="w-1 shrink-0"
            style={{ background: 'linear-gradient(to bottom, #A91E2D 33%, #F5A623 66%, #4A4A4A 100%)' }}
          />

          <div className="flex-1 p-6 sm:p-8 lg:p-12">
            {/* Intro block */}
            <div ref={ref} className={`grid gap-8 lg:grid-cols-2 lg:gap-12 ${inView ? 'animate-fade-up' : 'opacity-0'}`}>
              <div>
                <span className="mb-3 inline-block font-mono text-xs uppercase tracking-[0.14em] text-amber">BIM &amp; Revit modeling</span>
                <h3 className="font-display text-2xl font-semibold leading-tight text-white lg:text-3xl">
                  From schematic massing to fabrication-ready models — at the exact LOD your project demands.
                </h3>
              </div>
              <div>
                <p className="text-sm leading-relaxed text-ink-300 lg:text-base">
                  We build federated MEP BIM models that combine mechanical, electrical, and plumbing systems into a single, coordinated Revit environment — mapped to your company's BIM standards and delivered cloud-ready on BIM 360 or ACC.
                </p>
                <p className="mt-4 text-sm leading-relaxed text-ink-300 lg:text-base">
                  Our teams work in your time zone, use your templates, and integrate directly into your project workflow. Every model is clash-checked before delivery. No surprises on site.
                </p>
              </div>
            </div>

            {/* Stat strip */}
            <div className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-ink-600/30 lg:grid-cols-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="bg-ink-900 p-5"
                >
                  <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-ink-400">{stat.label}</span>
                  <div className="mt-1.5 font-display text-2xl font-extrabold tracking-tight text-brand-red">
                    {stat.value}
                  </div>
                  <p className="mt-1.5 text-xs leading-snug text-ink-400">{stat.note}</p>
                </motion.div>
              ))}
            </div>

         
            {/* LOD Table */}
            {/* <div className="mt-12">
              <SectionLabel text="Level of detail breakdown" />

              <div className="hidden overflow-hidden rounded-lg border border-ink-600/30 md:block">
                <div className="grid grid-cols-[64px_120px_1fr_200px] bg-ink-700">
                  {['LOD', 'Stage', 'What JES delivers', 'Common use'].map((h) => (
                    <div key={h} className="px-4 py-3 font-display text-xs font-semibold text-white">{h}</div>
                  ))}
                </div>
                {lodRows.map((row, i) => (
                  <motion.div
                    key={row.lod}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="grid grid-cols-[64px_120px_1fr_200px] border-t border-ink-600/30"
                  >
                    <div className="px-4 py-3 font-mono text-xs text-amber">{row.lod}</div>
                    <div className="px-4 py-3 text-xs text-ink-200">{row.stage}</div>
                    <div className="px-4 py-3 text-xs leading-relaxed text-ink-400">{row.delivers}</div>
                    <div className="px-4 py-3 text-xs leading-relaxed text-ink-400">{row.use}</div>
                  </motion.div>
                ))}
              </div>

              <div className="flex flex-col gap-3 md:hidden">
                {lodRows.map((row, i) => (
                  <motion.div
                    key={row.lod}
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="rounded-lg border border-ink-600/30 bg-ink-900 p-4"
                  >
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs font-semibold text-amber">LOD {row.lod}</span>
                      <span className="h-1 w-1 rounded-full bg-ink-600" />
                      <span className="text-xs font-medium text-ink-200">{row.stage}</span>
                    </div>
                    <p className="mt-2 text-xs leading-relaxed text-ink-400">{row.delivers}</p>
                    <p className="mt-2 text-[11px] uppercase tracking-wide text-ink-500">{row.use}</p>
                  </motion.div>
                ))}
              </div>
            </div> */}

            {/* Tools */}
            <div className="mt-12">
              <SectionLabel text="Tools we work in" />
              <div className="flex flex-wrap gap-2">
                {tools.map((tool, i) => (
                  <motion.span
                    key={tool}
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.03 }}
                    className="rounded border border-ink-600/40 bg-ink-700 px-3.5 py-1.5 font-mono text-xs text-ink-300 transition-colors hover:border-amber hover:text-amber"
                  >
                    {tool}
                  </motion.span>
                ))}
              </div>
            </div>

        

            {/* CTA strip */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mt-12 flex flex-col items-start justify-between gap-4 rounded-lg border border-ink-600/30 bg-ink-700 p-7 sm:flex-row sm:items-center lg:p-8"
            >
              <div>
                <h4 className="font-display text-lg font-bold text-white">Try BIM modeling at zero risk</h4>
                <p className="mt-1 text-sm text-ink-300">
                  Send us one drawing. We'll return a fully coordinated BIM model in 72 hours — completely free, no commitment required.
                </p>
              </div>
              <a
                href="#contact"
                className="group inline-flex shrink-0 items-center gap-2 rounded bg-brand-red px-6 py-3 font-display text-sm font-semibold text-white transition-colors hover:bg-amber hover:text-ink-800"
              >
                Start free pilot
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionLabel({ text }: { text: string }) {
  return (
    <div className="mb-5 flex items-center gap-3">
      <span className="font-mono text-xs uppercase tracking-[0.14em] text-ink-400">{text}</span>
      <span className="h-px flex-1 bg-ink-600/30" />
    </div>
  );
}