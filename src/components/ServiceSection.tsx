"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";
import img1 from "/images/img1.png";
import img2 from "/images/img2.png";
import img3 from "/images/img3.png";
import img4 from "/images/img4.png";
import img5 from "/images/img5.png";
import img6 from "/images/img6.png";
import img7 from "/images/img7.png";
import img8 from "/images/img8.png";
import img9 from "/images/img9.png";
import img10 from "/images/img10.png";
import { ArrowRight } from "lucide-react";

interface StepData {
  lod: string; // "100" .. "500"
  stage: string; // short eyebrow, e.g. "Conceptual"
  title: string;
  bgColor: string;
  textColor: string;
  features: string[];
  description: string;
  bgImageUrl: any;
  gridItems: { id: number; name: string; tag: string; img: string }[];
  cta: string;
  featured?: boolean;
}

// Five steps, one per LOD tier (100 -> 500). Every card shares the same
// 4-up grid shape so alignment stays identical across the whole stack.
const stepsData: StepData[] = [
  {
    lod: "100",
    stage: "Conceptual",
    title: "LOD 100 — Massing & Feasibility",
    bgColor: "bg-[#0B2545]",
    textColor: "text-white",
    features: ["Conceptual Massing", "Early Cost Range", "Spatial Allocation"],
    description:
      "At LOD 100 we block out generic system massing and approximate equipment sizes to establish spatial allocation early — giving you a defensible feasibility study and early cost range before design commitments are made.",
    bgImageUrl: img1,
    cta: "Get a Feasibility Estimate",
    gridItems: [
      {
        id: 1,
        name: "Conceptual Volumes",
        tag: "Massing",
        img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=500&q=80",
      },
      {
        id: 2,
        name: "Early Cost Range",
        tag: "Estimate",
        img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=500&q=80",
      },
      {
        id: 3,
        name: "Space Allocation",
        tag: "Spatial",
        img: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=500&q=80",
      },
      {
        id: 4,
        name: "Owner Sign-off",
        tag: "Feasibility",
        img: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=500&q=80",
      },
    ],
  },

  {
    lod: "200",
    stage: "Schematic",
    title: "LOD 200 — Schematic Design",
    bgColor: "bg-gradient-to-b from-[#103B4A] to-[#071B28]",
    textColor: "text-white",
    features: ["System Routing", "Equipment Placement", "Owner Design Review"],
    description:
      "LOD 200 develops approximate geometry into real system routing and equipment placement, giving your design team something concrete to review and iterate on before construction documents begin.",
    bgImageUrl: img2,
    cta: "Request Schematic Review",
    gridItems: [
      {
        id: 1,
        name: "System Routing",
        tag: "Routing",
        img: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=500&q=80",
      },
      {
        id: 2,
        name: "Placement Study",
        tag: "Equipment",
        img: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=500&q=80",
      },
      {
        id: 3,
        name: "Design Development",
        tag: "Review",
        img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=500&q=80",
      },
      {
        id: 4,
        name: "Approximate Sizing",
        tag: "Geometry",
        img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=500&q=80",
      },
    ],
  },

  {
    lod: "300",
    stage: "Coordinated",
    title: "LOD 300 — Coordinated Model",
    bgColor: "bg-[#6A1B1B]",
    textColor: "text-white",
    features: [
      "Fully Coordinated Model",
      "Zero Unresolved Clashes",
      "Permit-Ready Documentation",
    ],
    description:
      "LOD 300 is where the model becomes buildable: precise, fully coordinated geometry across structure, architecture, and MEP with zero unresolved clashes — ready to submit for permit and hand to your subcontractors.",
    bgImageUrl: img3,
    cta: "Start Free Coordination Pilot",
    featured: true,
    gridItems: [
      {
        id: 1,
        name: "3D Coordination",
        tag: "Federated",
        img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=500&q=80",
      },
      {
        id: 2,
        name: "Zero Unresolved Clashes",
        tag: "Clash-Free",
        img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=500&q=80",
      },
      {
        id: 3,
        name: "Component & Assembly",
        tag: "Revit",
        img: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=500&q=80",
      },
      {
        id: 4,
        name: "Subcontractor Ready",
        tag: "Permit Set",
        img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=500&q=80",
      },
    ],
  },

  {
    lod: "400",
    stage: "Fabrication",
    title: "LOD 400 — Fabrication Detail",
    bgColor: "bg-[#0D5C4A]",
    textColor: "text-white",
    features: [
      "Fabrication-Level Detail",
      "Spool & Shop Drawings",
      "Prefab & Install Ready",
    ],
    description:
      "At LOD 400 we add fabrication-level detail — connection types, hanger locations, and spool drawings — so your shop can go straight from model to prefab and install without translation loss.",
    bgImageUrl: img4,
    cta: "Request Shop Drawings",
    gridItems: [
      {
        id: 1,
        name: "Spool Drawings",
        tag: "Spool",
        img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=500&q=80",
      },
      {
        id: 2,
        name: "Hanger & Connection Detail",
        tag: "Connections",
        img: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=500&q=80",
      },
      {
        id: 3,
        name: "Shop Drawing Set",
        tag: "Prefab",
        img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=500&q=80",
      },
      {
        id: 4,
        name: "Installation Ready",
        tag: "Install",
        img: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=500&q=80",
      },
    ],
  },

  {
    lod: "500",
    stage: "As-Built",
    title: "LOD 500 — As-Built & Handover",
    bgColor: "bg-gradient-to-b from-[#2B2140] to-[#120C1F]",
    textColor: "text-white",
    features: [
      "Site-Verified As-Built",
      "Embedded O&M Data",
      "FM & Digital Twin Ready",
    ],
    description:
      "LOD 500 captures the as-built condition: site-verified geometry with O&M data embedded directly in the model, delivered ready for FM handover and digital twin operations.",
    bgImageUrl: img5,
    cta: "Request As-Built Update",
    gridItems: [
      {
        id: 1,
        name: "Site-Verified Model",
        tag: "As-Built",
        img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=500&q=80",
      },
      {
        id: 2,
        name: "Embedded Parameters",
        tag: "O&M Data",
        img: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=500&q=80",
      },
      {
        id: 3,
        name: "Facility Management",
        tag: "FM Handover",
        img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=500&q=80",
      },
      {
        id: 4,
        name: "Ready for Operations",
        tag: "Digital Twin",
        img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=500&q=80",
      },
    ],
  },
];

export default function ServiceSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Softer spring so the handoff between cards doesn't feel abrupt.
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
        height: `${stepsData.length * 100}vh`,
        perspective: "1500px",
      }}
    >
      {stepsData.map((step, index) => (
        <CardSection
          key={step.lod}
          step={step}
          index={index}
          totalSteps={stepsData.length}
          smoothProgress={smoothProgress}
        />
      ))}
    </div>
  );
}

interface CardSectionProps {
  step: StepData;
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

  // Exit window spans 25% of the section so scale/fade/rotate happens
  // gradually instead of snapping in at the very end.
  const exitSpan = (endRange - startRange) * 0.25;
  const exitStartRange = Math.max(startRange, endRange - exitSpan);
  const exitEndRange = Math.min(endRange, 1.0);

  // The last card has nothing stacking on top of it, so it should never
  // fade/scale away — otherwise scrolling to the end leaves a blank gap.
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
              LOD {step.lod} · {step.stage}
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
          {step.features.map((feature, idx) => (
            <div key={idx} className="flex items-center gap-3">
              <span className="text-base text-white/50">✦</span>
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

      {/* Same 4-up grid shape on every card so alignment stays identical */}
      <div className="max-w-7xl w-full mx-auto pb-6 relative z-10">
        <p className="text-xs font-semibold uppercase tracking-widest opacity-75 mb-4">
          {step.title}
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
                  {item.tag}
                </div>
                <div className="font-semibold">{item.name}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
