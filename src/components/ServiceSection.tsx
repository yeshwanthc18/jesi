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
import { ArrowRight } from "lucide-react";

interface StepData {
  lod: string; // step number, e.g. "01"
  stage: string; // short eyebrow, e.g. "Planning"
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

// Five services, one per stage of the BIM delivery pipeline.
// Every card shares the same 4-up grid shape so alignment stays identical
// across the whole stack.
const stepsData: StepData[] = [
  {
    lod: "01",
    stage: "Planning",
    title: "Planning & Design",
    bgColor: "bg-[#0B2545]",
    textColor: "text-white",
    features: [
      "Coordinated 3D Models (Arch / Struct / MEP)",
      "Clash Detection & Coordination Reports",
      "LOD 100 to LOD 500 Models",
    ],
    description:
      "We establish a single source of truth for your project. Working from accurate site context, our architectural, structural and MEP teams author intelligent 3D models in tools such as Revit, then coordinate them so every discipline aligns before a single drawing is issued.",
    bgImageUrl: img1,
    cta: "Start a Coordination Review",
    gridItems: [
      {
        id: 1,
        name: "Capture the Site",
        tag: "Survey conditions with reality capture & GIS",
        img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=500&q=80",
      },
      {
        id: 2,
        name: "Explore Options",
        tag: "Test massing & design alternatives in 3D",
        img: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=500&q=80",
      },
      {
        id: 3,
        name: "Build the Models",
        tag: "Architecture, structure & MEP in BIM",
        img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=500&q=80",
      },
      {
        id: 4,
        name: "Coordinate & Document",
        tag: "Detect clashes, review, and issue drawing sets",
        img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=500&q=80",
      },
    ],
  },
    {
    lod: "02",
    stage: "Fabrication",
    title: "Construction & Fabrication",
    bgColor: "bg-[#6A1B1B]",
    textColor: "text-white",
    features: [
      "Fabrication-Level Model Geometry & Metadata",
      "Shop & Fabrication Drawings",
      "BOM Linkage & As-Built Status Updates",
    ],
    description:
      "We bridge design and the factory floor. From the fully coordinated model we extract fabrication-level detail and generate the precise drawings and machine files your fabricators need — keeping every output linked back to the model and your bill of materials.",
    bgImageUrl: img3,
    cta: "Request Shop Drawings",
    gridItems: [
      {
        id: 1,
        name: "Start Coordinated",
        tag: "Begin from a clash-free, coordinated model",
        img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=500&q=80",
      },
      {
        id: 2,
        name: "Extract for Fabrication",
        tag: "Pull manufacturing-level geometry & data",
        img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=500&q=80",
      },
      {
        id: 3,
        name: "Produce Outputs",
        tag: "Shop drawings, CNC files & material lists",
        img: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=500&q=80",
      },
      {
        id: 4,
        name: "Track As-Built",
        tag: "Feed fabrication progress back into the model",
        img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=500&q=80",
      },
    ],
  },
    {
    lod: "03",
    stage: "Simulation",
    title: "Construction Simulation & Quantification",
    bgColor: "bg-[#0D5C4A]",
    textColor: "text-white",
    features: [
      "Phased / Sequenced 4D Model",
      "Site Logistics & Sequencing Analysis",
      "Quantity Take-Offs (5D) for Estimating",
    ],
    description:
      "Using 4D sequencing and automated takeoffs, we simulate construction schedules and produce accurate material and cost quantities to optimize logistics and cashflow. Visual simulations and quantified model data help stakeholders validate sequencing, reduce site conflicts, and make informed procurement decisions.",
    bgImageUrl: img4,
    cta: "Simulate Your Schedule",
    gridItems: [
      {
        id: 1,
        name: "Phase the Model",
        tag: "Tag elements by construction stage",
        img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=500&q=80",
      },
      {
        id: 2,
        name: "Link to Schedule",
        tag: "Connect elements to the programme (4D)",
        img: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=500&q=80",
      },
      {
        id: 3,
        name: "Simulate the Build",
        tag: "Test sequences & spot bottlenecks",
        img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=500&q=80",
      },
      {
        id: 4,
        name: "Quantify",
        tag: "Accurate quantities for estimating (5D)",
        img: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=500&q=80",
      },
    ],
  },

  {
    lod: "04",
    stage: "Modeling",
    title: "Parametric Revit Family Creation",
    bgColor: "bg-gradient-to-b from-[#103B4A] to-[#071B28]",
    textColor: "text-white",
    features: [
      "Custom Parametric Revit Families",
      "Type & Instance Parameter Sets",
      "MEP Connectors & Embedded Data",
    ],
    description:
      "We produce flexible, performance-driven Revit families that capture manufacturer details, parameter sets, and BIM data for seamless project integration. These parametric components improve model accuracy, speed design iterations, and support downstream scheduling, costing, and facilities management.",
    bgImageUrl: img2,
    cta: "Request a Custom Family",
    gridItems: [
      {
        id: 1,
        name: "Pick the Template",
        tag: "Start from the right family type",
        img: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=500&q=80",
      },
      {
        id: 2,
        name: "Set the Framework",
        tag: "Reference planes & driving dimensions",
        img: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=500&q=80",
      },
      {
        id: 3,
        name: "Build & Parameterise",
        tag: "Add geometry, parameters & connectors",
        img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=500&q=80",
      },
      {
        id: 4,
        name: "Test & Deploy",
        tag: "Flex the component, then load it into projects",
        img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=500&q=80",
      },
    ],
  },





  {
    lod: "05",
    stage: "Operations",
    title: "Operation & Maintenance",
    bgColor: "bg-gradient-to-b from-[#2B2140] to-[#120C1F]",
    textColor: "text-white",
    features: [
      "Verified As-Built / Handover Model",
      "COBie / Structured Data Deliverables",
      "FM / CAFM-Ready Model Publication",
    ],
    description:
      "We transform as-built BIM into an asset management tool with embedded O&M manuals, lifecycle data, and tag-based asset schedules for efficient facility operations. Centralized model information supports preventive maintenance, faster troubleshooting, and extended asset life while reducing operational costs.",
    bgImageUrl: img5,
    cta: "Plan Your FM Handover",
    gridItems: [
      {
        id: 1,
        name: "Capture As-Built",
        tag: "Record true handover conditions & markups",
        img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=500&q=80",
      },
      {
        id: 2,
        name: "Attach Asset Data",
        tag: "Manuals, spare parts & maintenance intervals",
        img: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=500&q=80",
      },
      {
        id: 3,
        name: "Publish to FM",
        tag: "Deliver into your facilities (CAFM) platform",
        img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=500&q=80",
      },
      {
        id: 4,
        name: "Ready for Operations",
        tag: "Digital twin & lifecycle-ready model",
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
              {/* <span className="text-base text-white/50">✦</span> */}
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