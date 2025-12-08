/* eslint-disable @typescript-eslint/no-explicit-any */
// "use client";

// import React from "react";
// import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
// import {
//   Search,
//   FileText,
//   ClipboardCheck,
//   ShieldAlert,
//   Home,
//   CheckCircle,
//   BadgeCheck,
// } from "lucide-react";
// import { useRef, useEffect } from "react";
// import WhyChooseUs2 from "@/components/WhyCooseUs2";

// interface StatItem {
//   id: number;
//   icon: React.ElementType;
//   value: number;
//   suffix: string;
//   label: string;
// }

// const StatsSection = () => {
//   const stats: StatItem[] = [
//     {
//       id: 1,
//       icon: BadgeCheck,
//       value: 0,
//       suffix: "",
//       label: "Certification approval",
//     },
//     {
//       id: 2,
//       icon: Search,
//       value: 0,
//       suffix: "",
//       label: "Site Inspections",
//     },
//     {
//       id: 3,
//       icon: FileText,
//       value: 0,
//       suffix: "",
//       label: "BCA Reports",
//     },
//     // {
//     //   id: 4,
//     //   icon: ClipboardCheck,
//     //   value: 0,
//     //   suffix: "",
//     //   label: "Structural Reports",
//     // },
//     {
//       id: 4,
//       icon: ShieldAlert,
//       value: 0,
//       suffix: "",
//       label: "Unauthorized Construction",
//     },
//     {
//       id: 5,
//       icon: Home,
//       value: 0,
//       suffix: "",
//       label: "Building Reports",
//     },
//     {
//       id: 6,
//       icon: CheckCircle,
//       value: 0,
//       suffix: "",
//       label: "Compliances Reports",
//     },
//   ];

//   return (
//     <>
//       <div className="py-20">
//         <div className="relative max-w-8xl overflow-hidden rounded-[32px] shadow-lg outline-2 outline-offset-2 outline-primary/30 mx-4 md:mx-12">
//           {/* Perfect Gradient Background */}
//           <div className="absolute inset-0 z-0 bg-gradient-to-br from-primary via-primary/90 to-[#1c1c84]" />

//           {/* Content Container */}
//           <div className="relative z-10 max-w-8xl mx-auto h-full sm:px-6 md:px-12 py-10 ">
//             <div className="h-full flex flex-col items-center justify-center">
//               {/* Header Section */}
//               <motion.div
//                 className="text-center mb-8"
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.8 }}
//               >
//                 <h2 className="text-3xl lg:text-4xl font-bold text-white mb-2">
//                   Consulting and Reports
//                 </h2>
//               </motion.div>

//               {/* One Line Services Layout */}
//               <div className="flex justify-evenly items-center gap-2 sm:gap-4 lg:gap-6 xl:gap-2 overflow-x-auto w-full flex-wrap">
//                 {stats.map((stat, index) => (
//                   <StatCard key={stat.id} stat={stat} index={index} />
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//         <WhyChooseUs2 />
//       </div>
//     </>
//   );
// };

// // Animated Counter Component
// const AnimatedCounter = ({
//   value,
//   suffix,
// }: {
//   value: number;
//   suffix: string;
// }) => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, margin: "-100px" });
//   const motionValue = useMotionValue(0);
//   const springValue = useSpring(motionValue, {
//     damping: 50,
//     stiffness: 100,
//   });
//   const [displayValue, setDisplayValue] = React.useState(0);

//   useEffect(() => {
//     if (isInView) {
//       motionValue.set(value);
//     }
//   }, [isInView, motionValue, value]);

//   useEffect(() => {
//     springValue.on("change", (latest: number) => {
//       setDisplayValue(Math.floor(latest));
//     });
//   }, [springValue]);

//   return (
//     <span ref={ref}>
//       {displayValue}
//       {suffix}
//     </span>
//   );
// };

// // Individual Service Card Component - Large One Line Style
// const StatCard = ({ stat, index }: { stat: StatItem; index: number }) => {
//   const Icon = stat.icon;

//   return (
//     <motion.div
//       className="group flex flex-col items-center justify-start min-w-[160px] max-w-[200px] p-4 hover:bg-white/3 rounded-3xl transition-all duration-300 flex-shrink-0"
//       initial={{ opacity: 0, y: 30, scale: 0.9 }}
//       whileInView={{ opacity: 1, y: 0, scale: 1 }}
//       viewport={{ once: true, margin: "-50px" }}
//       transition={{
//         duration: 0.7,
//         delay: index * 0.1,
//         ease: [0.34, 1.56, 0.64, 1],
//       }}
//     >
//       {/* Modern Icon Container with Simple Hover */}
//       <motion.div
//         className="relative w-20 h-20 mb-4 bg-white/10 backdrop-blur-sm rounded-3xl flex items-center justify-center group-hover:bg-white/15 transition-all duration-300 border border-white/20 shadow-lg"
//         initial={{ scale: 0.8, opacity: 0 }}
//         whileInView={{ scale: 1, opacity: 1 }}
//         viewport={{ once: true }}
//         transition={{
//           duration: 0.6,
//           delay: index * 0.1,
//           ease: [0.34, 1.56, 0.64, 1],
//         }}
//       >
//         {/* Smooth Up/Down Icon Animation */}
//         <motion.div
//           animate={{
//             y: [0, -4, 0],
//           }}
//           transition={{
//             duration: 3,
//             repeat: Infinity,
//             ease: "easeInOut",
//             delay: index * 0.2,
//           }}
//           className="relative z-10 w-full h-full flex items-center justify-center"
//         >
//           <Icon
//             className="w-12 h-12 text-white group-hover:text-white transition-colors duration-300 drop-shadow-lg flex-shrink-0"
//             strokeWidth={1.5}
//             style={{
//               display: "block",
//               margin: "auto",
//             }}
//           />
//         </motion.div>
//       </motion.div>

//       {/* Simple Title */}
//       <motion.h3
//         className="text-sm font-medium text-white/85 text-center leading-tight group-hover:text-white transition-colors duration-300 whitespace-nowrap overflow-hidden text-ellipsis px-2"
//         initial={{ opacity: 0, y: 10 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{
//           delay: index * 0.1 + 0.3,
//           duration: 0.5,
//           ease: [0.25, 0.46, 0.45, 0.94],
//         }}
//       >
//         {stat.label}
//       </motion.h3>
//     </motion.div>
//   );
// };

// export default StatsSection;

"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  FileCheck,
  HardHat,
  BookOpenCheck,
  AlertTriangle,
  Building2,
  ClipboardCheck,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    title: "Certification Approval",
    description:
      "Streamlined processing for Complying Development and Construction Certificates.",
    icon: FileCheck,
    color: "from-blue-400 to-cyan-300",
  },
  {
    title: "Site Inspections",
    description:
      "Comprehensive on-site evaluations to ensure construction integrity and plan adherence.",
    icon: HardHat,
    color: "from-amber-400 to-orange-300",
  },
  {
    title: "BCA Reports",
    description:
      "Detailed analysis ensuring your design meets all Building Code of Australia standards.",
    icon: BookOpenCheck,
    color: "from-emerald-400 to-green-300",
  },
  {
    title: "Unauthorized Construction",
    description:
      "Expert assessment and regularization strategies for unapproved building works.",
    icon: AlertTriangle,
    color: "from-red-400 to-rose-300",
  },
  {
    title: "Building Reports",
    description:
      "Thorough condition reports identifying defects, safety hazards, and maintenance needs.",
    icon: Building2,
    color: "from-purple-400 to-indigo-300",
  },
  {
    title: "Compliance Reports",
    description:
      "Verification documentation to certify that completed works align with requirements.",
    icon: ClipboardCheck,
    color: "from-teal-400 to-cyan-300",
  },
];

const SpotlightServices = () => {
  return (
    <section className="bg-slate-950 py-24 px-6 md:px-12 relative overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[128px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="mb-20 md:text-center max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight"
          >
            Consulting &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
              Reports.
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 text-lg md:text-xl"
          >
            Precision engineering reports and certification services designed
            for modern construction needs.
          </motion.p>
        </div>

        {/* Spotlight Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <SpotlightCard key={index} index={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

// Individual Card Component
const SpotlightCard = ({
  title,
  description,
  icon: Icon,
  color,
  index,
}: any) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;

    const div = divRef.current;
    const rect = div.getBoundingClientRect();

    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(1);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setOpacity(0);
  };

  return (
    <motion.div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleFocus}
      onMouseLeave={handleBlur}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="relative h-full overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/50 p-8"
    >
      {/* The Spotlight Effect Overlay */}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(255,255,255,.1), transparent 40%)`,
        }}
      />

      {/* Content Container */}
      <div className="relative z-10 flex flex-col h-full">
        {/* Icon with Glowing Background */}
        <div className="mb-6 relative w-12 h-12">
          <div
            className={`absolute inset-0 bg-gradient-to-br ${color} blur-lg opacity-20`}
          />
          <div
            className={`relative w-12 h-12 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}
          >
            <Icon size={24} strokeWidth={1.5} />
          </div>
        </div>

        <h3 className="text-xl font-bold text-white mb-3 tracking-wide">
          {title}
        </h3>

        <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
          {description}
        </p>

        {/* Bottom Action */}
        <div className="flex items-center gap-2 text-sm font-medium text-slate-500 group-hover:text-white transition-colors">
          <span>Learn details</span>
          <ArrowRight
            size={16}
            className="-ml-1 translate-x-0 group-hover:translate-x-1 transition-transform"
          />
        </div>
      </div>

      {/* Border Spotlight (The thin glowing line) */}
      <div
        className="pointer-events-none absolute inset-0 transition duration-300"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(255,255,255,.15), transparent 40%)`,
        }}
        aria-hidden="true"
      />
    </motion.div>
  );
};

export default SpotlightServices;
