import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useReveal } from '../hooks/useReveal';
import type { ServiceStat } from '../lib/content/types';

interface ServiceDetailProps {
  sectionId: string;
  eyebrow: string;
  heading: string;
  intro: string;
  body: string;
  stats: ServiceStat[];
  tools: string[];
  ctaTitle: string;
  ctaBody: string;
  ctaButton: string;
  imageUrl: string;
  label: string;
}

export function ServiceDetail({
  sectionId,
  eyebrow,
  heading,
  intro,
  body,
  stats,
  tools,
  ctaTitle,
  ctaBody,
  ctaButton,
  imageUrl,
  label,
}: ServiceDetailProps) {
  const { ref, inView } = useReveal();

  return (
    <section
      id={sectionId}
      className="bg-[#fbfbfb] py-16 lg:py-24"
    >
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="flex overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm">
          {/* Gradient Rail */}
          <div
            className="w-1 shrink-0"
            style={{
              background:
                'linear-gradient(to bottom, #A91E2D 33%, #F5A623 66%, #4A4A4A 100%)',
            }}
          />

          <div className="flex-1 p-6 sm:p-8 lg:p-12">
            {/* Intro */}
            <div
              ref={ref}
              className={`grid gap-8 lg:grid-cols-2 lg:gap-12 ${
                inView ? 'animate-fade-up' : 'opacity-0'
              }`}
            >
              <div>
                <span className="mb-3 inline-block font-mono text-xs uppercase tracking-[0.14em] text-[#A91E2D]">
                  {eyebrow}
                </span>

                <h3 className="font-display text-2xl font-semibold leading-tight text-neutral-900 lg:text-3xl">
                  {heading}
                </h3>
              </div>

              <div>
                <p className="text-sm leading-relaxed text-neutral-600 lg:text-base">
                  {intro}
                </p>

                <p className="mt-4 text-sm leading-relaxed text-neutral-600 lg:text-base">
                  {body}
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-neutral-200 bg-neutral-200 lg:grid-cols-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="bg-neutral-50 p-5"
                >
                  <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-neutral-500">
                    {stat.label}
                  </span>

                  <div className="mt-2 font-display text-2xl font-extrabold tracking-tight text-[#A91E2D]">
                    {stat.value}
                  </div>

                  <p className="mt-2 text-xs leading-snug text-neutral-500">
                    {stat.note}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mt-10 overflow-hidden rounded-xl border border-neutral-200"
            >
              <img
                src={imageUrl}
                alt={label}
                loading="lazy"
                decoding="async"
                className="h-56 w-full object-cover sm:h-72 lg:h-80"
              />
            </motion.div>

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
                    className="rounded-lg border border-neutral-200 bg-white px-3.5 py-2 font-mono text-xs text-neutral-700 transition-all duration-300 hover:border-[#A91E2D] hover:bg-[#A91E2D]/5 hover:text-[#A91E2D]"
                  >
                    {tool}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mt-12 flex flex-col items-start justify-between gap-5 rounded-xl border border-neutral-200 bg-neutral-50 p-7 sm:flex-row sm:items-center lg:p-8"
            >
              <div>
                <h4 className="font-display text-lg font-bold text-neutral-900">
                  {ctaTitle}
                </h4>

                <p className="mt-2 text-sm text-neutral-600">
                  {ctaBody}
                </p>
              </div>

              <a
                href="#contact"
                className="group inline-flex shrink-0 items-center gap-2 rounded-lg bg-[#A91E2D] px-6 py-3 font-display text-sm font-semibold text-white transition-all duration-300 hover:bg-[#F5A623] hover:text-neutral-900"
              >
                {ctaButton}

                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
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
      <span className="font-mono text-xs uppercase tracking-[0.14em] text-neutral-500">
        {text}
      </span>

      <span className="h-px flex-1 bg-neutral-200" />
    </div>
  );
}
