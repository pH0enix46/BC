/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FileCheck,
  HardHat,
  BookOpenCheck,
  AlertTriangle,
  Building2,
  ClipboardCheck,
  ChevronDown,
  CheckCircle2,
} from "lucide-react";

// --- Data Structure with your provided text ---
const services = [
  {
    title: "Certification Approval",
    description:
      "Streamlined processing for Complying Development and Construction Certificates.",
    icon: FileCheck,
    color: "from-blue-400 to-cyan-300",
    details: {
      subtitle: "Building Certification",
      items: [
        "Construction Certificates (CC)",
        "Occupation Certificates (Interim and Final)",
        "Appointment of Principal Certifier",
        "Critical stage inspections",
      ],
    },
  },
  {
    title: "Site Inspections",
    description:
      "Comprehensive on-site evaluations to ensure construction integrity.",
    icon: HardHat,
    color: "from-amber-400 to-orange-300",
    details: {
      subtitle: "Inspections & Reporting",
      items: [
        "Mandatory critical stage inspections",
        "Final inspections prior to Occupation Certificate issue",
        "Compliance reports and certification documentation",
      ],
    },
  },
  {
    title: "BCA Reports",
    description:
      "Detailed analysis ensuring your design meets all Building Code standards.",
    icon: BookOpenCheck,
    color: "from-emerald-400 to-green-300",
    details: {
      content:
        "Detailed analysis ensuring your design meets all Building Code of Australia (BCA) standards and National Construction Code (NCC) requirements for safety and performance.",
    },
  },
  {
    title: "Unauthorized Construction",
    description:
      "Expert assessment and regularization for unapproved building works.",
    icon: AlertTriangle,
    color: "from-red-400 to-rose-300",
    details: {
      content:
        "We provide expert advice and professional support for unauthorized construction approvals, including the preparation and lodgment of Building Information Certificate (BIC) applications. Our team assesses existing structures against relevant planning controls, the National Construction Code (NCC), and applicable Australian Standards to determine compliance and identify any required rectification works.\n\nWe work closely with owners, councils, and consultants to guide clients through the approval process, minimize delays, and achieve compliant outcomes.",
    },
  },
  {
    title: "Building Reports",
    description:
      "Thorough condition reports identifying defects and maintenance needs.",
    icon: Building2,
    color: "from-purple-400 to-indigo-300",
    details: {
      sections: [
        {
          title: "Compliance & Assessment Reports",
          items: [
            "National Construction Code (NCC/BCA) compliance reports",
            "Development Consent & CC assessments",
            "Planning compliance reports",
            "Retrospective building compliance",
          ],
        },
        {
          title: "Inspection & Condition Reports",
          items: [
            "Building condition reports",
            "Final inspection reports for OC",
            "Defects and rectification reports",
          ],
        },
      ],
    },
  },
  {
    title: "Compliance Reports",
    description:
      "Verification documentation to certify that works align with requirements.",
    icon: ClipboardCheck,
    color: "from-teal-400 to-cyan-300",
    details: {
      subtitle: "Building Code & Technical Compliance",
      items: [
        "National Construction Code (NCC/BCA) compliance reports",
        "Australian Standards compliance assessments",
        "Inspection reports",
      ],
    },
  },
];

const SpotlightServices = () => {
  return (
    <section className="bg-slate-950 py-24 px-6 md:px-12 relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[128px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
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
        </div>

        {/* Grid uses items-start to allow cards to have different heights when expanded */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
          {services.map((service, index) => (
            <ExpandableCard key={index} index={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ExpandableCard = ({
  title,
  description,
  icon: Icon,
  color,
  index,
  details,
}: any) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <motion.div
      layout
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        layout: { duration: 0.4, ease: "circOut" },
        delay: index * 0.05,
      }}
      className={`relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/50 p-8 transition-colors duration-300 ${
        isExpanded ? "border-slate-600 bg-slate-900" : "hover:border-slate-700"
      }`}
    >
      {/* Spotlight effect */}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(255,255,255,.06), transparent 40%)`,
        }}
      />

      <motion.div layout="position" className="relative z-10">
        <div className="flex items-start justify-between mb-6">
          <div className="relative w-12 h-12">
            <div
              className={`absolute inset-0 bg-gradient-to-br ${color} blur-lg opacity-20`}
            />
            <div className="relative w-12 h-12 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-white">
              <Icon size={24} strokeWidth={1.5} />
            </div>
          </div>
        </div>

        <motion.h3
          layout="position"
          className="text-xl font-bold text-white mb-3"
        >
          {title}
        </motion.h3>

        <motion.p
          layout="position"
          className="text-slate-400 text-sm leading-relaxed mb-6"
        >
          {description}
        </motion.p>

        {/* Expandable Content Section */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="pt-4 pb-6 border-t border-slate-800 space-y-4">
                {details.subtitle && (
                  <h4 className="text-cyan-400 text-xs font-bold uppercase tracking-widest">
                    {details.subtitle}
                  </h4>
                )}

                {details.content && (
                  <p className="text-slate-300 text-sm leading-relaxed whitespace-pre-line">
                    {details.content}
                  </p>
                )}

                {details.items && (
                  <ul className="space-y-2">
                    {details.items.map((item: string, i: number) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-slate-300 text-sm"
                      >
                        <CheckCircle2
                          size={14}
                          className="text-cyan-500 mt-1 flex-shrink-0"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {details.sections &&
                  details.sections.map((section: any, i: number) => (
                    <div key={i} className="space-y-2">
                      <h5 className="text-white text-sm font-semibold">
                        {section.title}
                      </h5>
                      <ul className="space-y-1 ml-2">
                        {section.items.map((item: string, j: number) => (
                          <li
                            key={j}
                            className="text-slate-400 text-xs flex gap-2"
                          >
                            <span className="text-cyan-500">•</span> {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Action Button */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-white transition-colors group"
        >
          <span>{isExpanded ? "Show less" : "Learn details"}</span>
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <ChevronDown
              size={16}
              className="group-hover:translate-y-0.5 transition-transform"
            />
          </motion.div>
        </button>
      </motion.div>
    </motion.div>
  );
};

export default SpotlightServices;
