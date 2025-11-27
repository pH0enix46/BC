"use client";

import React from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import {
  Building2,
  Search,
  FileText,
  ClipboardCheck,
  ShieldAlert,
  Home,
  CheckCircle,
} from "lucide-react";
import { useRef, useEffect } from "react";
import WhyChooseUs2 from "@/components/WhyCooseUs2";

interface StatItem {
  id: number;
  icon: React.ElementType;
  value: number;
  suffix: string;
  label: string;
}

const StatsSection = () => {
  const stats: StatItem[] = [
    {
      id: 1,
      icon: Building2,
      value: 0,
      suffix: "",
      label: "Structural Engineering Inspections",
    },
    {
      id: 2,
      icon: Search,
      value: 0,
      suffix: "",
      label: "Site Inspections",
    },
    {
      id: 3,
      icon: FileText,
      value: 0,
      suffix: "",
      label: "BCA Reports",
    },
    {
      id: 4,
      icon: ClipboardCheck,
      value: 0,
      suffix: "",
      label: "Structural Reports",
    },
    {
      id: 5,
      icon: ShieldAlert,
      value: 0,
      suffix: "",
      label: "Unauthorized Construction Inspection",
    },
    {
      id: 6,
      icon: Home,
      value: 0,
      suffix: "",
      label: "Building Reports",
    },
    {
      id: 7,
      icon: CheckCircle,
      value: 0,
      suffix: "",
      label: "Compliances Reports",
    },
  ];

  return (
    <>
      <div className="p-20">
        <div className="relative max-w-8xl h-[500px] lg:h-96 overflow-hidden rounded-[32px] shadow">
          {/* Perfect Gradient Background */}
          <div className="absolute inset-0 z-0 bg-gradient-to-br from-blue-700 via-primary/90 to-primary/80" />

          {/* Content Container */}
          <div className="relative z-10 max-w-8xl mx-auto h-full sm:px-6 md:px-12 ">
            <div className="h-full flex flex-col items-center justify-center">
              {/* Header Section */}
              <motion.div
                className="text-center mb-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-2">
                  Consulting and Reports
                </h2>
              </motion.div>

              {/* One Line Services Layout */}
              <div className="flex justify-center items-center gap-2 sm:gap-4 lg:gap-6 xl:gap-8 overflow-x-auto w-full">
                {stats.map((stat, index) => (
                  <StatCard key={stat.id} stat={stat} index={index} />
                ))}
              </div>
            </div>
          </div>
        </div>
        <WhyChooseUs2 />
      </div>
    </>
  );
};

// Animated Counter Component
const AnimatedCounter = ({
  value,
  suffix,
}: {
  value: number;
  suffix: string;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 50,
    stiffness: 100,
  });
  const [displayValue, setDisplayValue] = React.useState(0);

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, motionValue, value]);

  useEffect(() => {
    springValue.on("change", (latest: number) => {
      setDisplayValue(Math.floor(latest));
    });
  }, [springValue]);

  return (
    <span ref={ref}>
      {displayValue}
      {suffix}
    </span>
  );
};

// Individual Service Card Component - Large One Line Style
const StatCard = ({ stat, index }: { stat: StatItem; index: number }) => {
  const Icon = stat.icon;

  return (
    <motion.div
      className="group flex flex-col items-center justify-center min-w-[140px] max-w-[160px] p-4 hover:bg-white/3 rounded-3xl transition-all duration-300 flex-shrink-0"
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.7,
        delay: index * 0.1,
        ease: [0.34, 1.56, 0.64, 1],
      }}
    >
      {/* Modern Icon Container with Simple Hover */}
      <motion.div
        className="relative w-20 h-20 mb-4 bg-white/10 backdrop-blur-sm rounded-3xl flex items-center justify-center group-hover:bg-white/15 transition-all duration-300 border border-white/20 shadow-lg"
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.6,
          delay: index * 0.1,
          ease: [0.34, 1.56, 0.64, 1],
        }}
      >
        {/* Smooth Up/Down Icon Animation */}
        <motion.div
          animate={{
            y: [0, -4, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 0.2,
          }}
          className="relative z-10"
        >
          <Icon
            className="w-10 h-10 text-white group-hover:text-white transition-colors duration-300 drop-shadow-lg"
            strokeWidth={1.5}
          />
        </motion.div>
      </motion.div>

      {/* Simple Title */}
      <motion.h3
        className="text-sm font-medium text-white/85 text-center leading-tight group-hover:text-white transition-colors duration-300 max-w-[130px]"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: index * 0.1 + 0.3,
          duration: 0.5,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
      >
        {stat.label}
      </motion.h3>
    </motion.div>
  );
};

export default StatsSection;
