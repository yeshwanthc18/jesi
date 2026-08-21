import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  type MotionValue,
} from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { PipelineStep } from "../lib/content/types";

interface ServiceSectionProps {
  steps: PipelineStep[];
}

export default function ServiceSection({ steps }: ServiceSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 20,
    mass: 0.6,
    restDelta: 0.0005,
  });

  return (
    <div
      ref={containerRef}
      className="relative w-full bg-[#030d16]"
      style={{
        height: `${steps.length * 100}vh`,
        perspective: "1500px",
      }}
    >
      {steps.map((step, index) => (
        <CardSection
          key={step.lod}
          step={step}
          index={index}
          totalSteps={steps.length}
          smoothProgress={smoothProgress}
        />
      ))}
    </div>
  );
}

interface CardSectionProps {
  step: PipelineStep;
  index: number;
  totalSteps: number;
  smoothProgress: MotionValue<number>;
}

function CardSection({
  step,
  index,
  totalSteps,
  smoothProgress,
}: CardSectionProps) {
  const startRange = index / totalSteps;
  const endRange = (index + 1) / totalSteps;
  const isLast = index === totalSteps - 1;

  const exitSpan = (endRange - startRange) * 0.25;
  const exitStartRange = Math.max(startRange, endRange - exitSpan);
  const exitEndRange = Math.min(endRange, 1.0);

  const scale = useTransform(
    smoothProgress,
    [startRange, exitStartRange, exitEndRange],
    isLast ? [1, 1, 1] : [1, 1, 0.78],
  );

  const opacity = useTransform(
    smoothProgress,
    [startRange, exitStartRange, exitEndRange],
    isLast ? [1, 1, 1] : [1, 1, 0.0],
  );

  const y = useTransform(
    smoothProgress,
    [startRange, exitStartRange, exitEndRange],
    isLast ? [0, 0, 0] : [0, 0, 750],
  );

  const rotateX = useTransform(
    smoothProgress,
    [startRange, exitStartRange, exitEndRange],
    isLast ? [0, 0, 0] : [0, 0, -24],
  );

  const rotateZ = useTransform(
    smoothProgress,
    [startRange, exitStartRange, exitEndRange],
    isLast ? [0, 0, 0] : [0, 0, -6],
  );

  return (
    <motion.section
      style={{
        scale,
        opacity,
        y,
        rotateX,
        rotateZ,
        willChange: "transform, opacity",
        zIndex: index + 1,
        transformStyle: "preserve-3d",
        backfaceVisibility: "hidden",
      }}
      className={`sticky top-0 h-screen w-full ${step.bgColor} ${step.textColor} flex flex-col justify-between p-6 md:p-16 overflow-hidden border-b border-black/10 origin-center`}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 z-0 bg-cover bg-center mix-blend-overlay opacity-20 pointer-events-none"
        style={{ backgroundImage: `url(${step.bgImageUrl})` }}
      />

      <div className="max-w-7xl w-full mx-auto my-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-6 relative z-10">
        <div className="lg:col-span-5 space-y-6">
          <div className="flex items-center gap-3">
            <span className="text-xs font-semibold uppercase tracking-widest opacity-60">
              {step.lod} · {step.stage}
            </span>
            {step.featured && (
              <span className="rounded-full bg-white/15 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide">
                Most Requested
              </span>
            )}
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-3xl md:text-5xl font-bold tracking-tight leading-tight"
          >
            {step.title}
          </motion.h2>
          <div className="space-y-6">
            <p className="text-base md:text-lg opacity-85 font-normal leading-relaxed max-w-md">
              {step.description}
            </p>
            <a
              href="#contact"
              className="group inline-flex mb-4 items-center gap-2 rounded bg-brand-red px-6 py-3 font-display text-sm font-semibold text-white transition-colors hover:bg-amber hover:text-ink-800"
            >
              {step.cta}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>

        <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col gap-4 sm:gap-6 lg:gap-5 lg:pt-4">
          <p className="text-xl font-bold"> Key Deliverables </p>
          {step.features.map((feature, idx) => (
            <div key={idx} className="flex items-center gap-3">
              <span className="text-base md:text-lg font-medium opacity-90">
                {feature}
              </span>
            </div>
          ))}
        </div>

        <div className="hidden lg:block lg:col-span-2 text-right">
          <span className="text-8xl xl:text-9xl font-light tracking-tighter opacity-15 select-none block">
            {step.lod}
          </span>
        </div>
      </div>

      <div className="max-w-7xl w-full mx-auto pb-6 relative z-10">
        <p className="text-xl  font-semibold uppercase tracking-widest opacity-75 mb-4">
          How We Work
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {step.gridItems.map((item) => (
            <motion.div
              key={item.id}
              whileHover={{ scale: 1.04, y: -4 }}
              className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/20 bg-white/10"
            >
              <img
                src={item.img}
                alt={item.name}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 w-full h-full object-cover opacity-40"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-4 left-4 z-10">
                <div className="text-[10px] uppercase tracking-wider text-blue-300">
                  {item.id}
                </div>
                <div className="font-semibold">{item.name}</div>
                <div className="text-xs opacity-75 mt-1 max-w-[9rem]">
                  {item.tag}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
