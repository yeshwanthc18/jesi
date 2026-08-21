import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useReveal } from '../hooks/useReveal';
import type { ServiceContent } from '../lib/content';

interface HeroProps {
  content: ServiceContent;
}

export function Hero({ content }: HeroProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '40%']);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const opacity = useTransform(scrollYProgress, [0, 0.6, 1], [1, 0.6, 0]);
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);

  const { ref: revealRef, inView } = useReveal();

  const { hero } = content;

  return (
    <section
      ref={ref}
      className="relative min-h-screen min-h-[640px] w-full overflow-hidden bg-ink-800"
    >
      {/* Parallax Background Video */}
      <motion.div className="absolute inset-0 z-0 overflow-hidden" style={{ y, scale }}>
        <video
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source src="/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Dark overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-ink-900/85 via-ink-900/55 to-ink-900/95" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-900/75 via-ink-900/40 to-transparent" />
      </motion.div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 z-[1] opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />

      {/* Content */}
      <motion.div
        style={{ y: contentY, opacity }}
        className="relative z-10 mx-auto flex min-h-screen max-w-[1400px] flex-col justify-center px-6 py-20 lg:justify-end lg:px-10 lg:pb-14 lg:pt-16 xl:pb-16 xl:pt-20 2xl:pb-24 2xl:pt-28"
      >
        <div ref={revealRef} className={inView ? 'animate-fade-up' : 'opacity-0'}>
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-4 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.14em] text-brand-red lg:mb-5"
          >
            <span className="block h-px w-8 bg-brand-red" />
            {hero.eyebrowText}
          </motion.div>

          {/* Headline */}
          <h1 className="font-display text-[2.5rem] font-extrabold uppercase leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-[4.25rem] xl:text-[5rem] 2xl:text-[6.5rem]">
            {hero.headlineLine1.split('').map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
                transition={{ duration: 0.4, delay: 0.2 + i * 0.02 }}
                className="inline-block"
              >
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
            <br />
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="text-brand-red inline-block"
            >
              {hero.headlineLine2}
            </motion.span>
          </h1>

          {/* Sub copy */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 15 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="mt-5 max-w-xl text-base leading-relaxed text-ink-200 lg:mt-4 lg:text-base xl:text-lg"
          >
            {hero.subcopy}
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            className="mt-8 flex flex-col gap-6 sm:flex-row sm:gap-10 lg:mt-6 xl:gap-12"
          >
            {hero.stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.9 }}
                transition={{ duration: 0.4, delay: 1.3 + i * 0.1 }}
              >
                <div className="font-display text-3xl font-extrabold tracking-tight text-white xl:text-4xl">
                  {stat.n}{" "}
                  <span className="text-brand-red">{stat.suffix}</span>
                </div>
                <p className="mt-1 max-w-[160px] text-xs leading-snug text-ink-300">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
            transition={{ duration: 0.5, delay: 1.6 }}
            className="mt-8 flex flex-wrap gap-3 lg:mt-6"
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded bg-brand-red px-7 py-3 font-display text-sm font-semibold text-white transition-all duration-300 hover:bg-ink-700 hover:shadow-2xl"
            >
              {hero.primaryCtaLabel}
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
            <a
              href={hero.secondaryCtaHref}
              className="group inline-flex items-center gap-2 rounded border border-ink-300/30 px-7 py-3 font-display text-sm font-medium text-ink-200 transition-all duration-300 hover:border-white hover:text-white"
            >
              {hero.secondaryCtaLabel}
            </a>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 lg:flex"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-ink-300/50">
          Scroll to explore
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          className="h-8 w-px bg-gradient-to-b from-ink-300/50 to-transparent"
        />
      </motion.div>
    </section>
  );
}
