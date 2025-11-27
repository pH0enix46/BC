"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

interface Feature {
  id: number;
  title: string;
  description: string;
}

const WhyChooseUsSection = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto-sliding images related to expertise, quality, and delivery
  const images = [
    "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=800&fit=crop&crop=center", // Construction expertise
    "https://images.unsplash.com/photo-1616618315347-f573ab590156?q=80&w=1042&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Quality construction
    "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&h=800&fit=crop&crop=center", // On-time delivery
  ];

  // Auto-slide effect with perfect timing
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // 5 second interval for perfect viewing time

    return () => clearInterval(interval);
  }, [images.length]);

  const features: Feature[] = [
    {
      id: 1,
      title: "Complying Development Certificate Application",
      description:
        "Fast-track your development with our complying development certificate services. Get approvals quickly for standard residential and commercial projects.",
    },
    {
      id: 2,
      title: "Construction Certificate Application",
      description:
        "Secure your construction certificate with our expert guidance. We ensure all building plans meet regulatory requirements and safety standards.",
    },
    {
      id: 3,
      title: "Occupation Certificate Application",
      description:
        "Complete your project with our occupation certificate services. We handle all inspections and documentation for final occupancy approval.",
    },
    {
      id: 4,
      title: "PCA Replacement Application",
      description:
        "Need a new Principal Certifying Authority? We provide seamless PCA replacement services to keep your project on track.",
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const featureVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
      },
    },
  };

  return (
    <div className="w-full py-16 lg:py-20">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-2">
        <div className="bg-gray-50 rounded-3xl p-8 lg:p-12 shadow">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
            {/* Left Section - Auto-sliding Images */}
            <motion.div
              className="flex-1 lg:max-w-[50%]"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={imageVariants}
            >
              <div className="relative">
                {/* Primary Badge */}
                <div className="absolute top-4 left-4 z-10 bg-primary text-white px-4 py-2 rounded-lg font-bold text-sm">
                  Trusted Since
                  <br />
                  2015
                </div>

                {/* Auto-sliding Image Container - Height matches right side */}
                <div className="relative w-full h-[400px] sm:h-[450px] lg:h-[500px] rounded-2xl overflow-hidden bg-gray-200">
                  <AnimatePresence mode="popLayout">
                    <motion.div
                      key={currentImageIndex}
                      initial={{ opacity: 0, x: 60, scale: 1.02 }}
                      animate={{ opacity: 1, x: 0, scale: 1 }}
                      exit={{ opacity: 0, x: -60, scale: 0.98 }}
                      transition={{
                        duration: 1.2,
                        ease: [0.16, 1, 0.3, 1],
                        delay: 0.1,
                      }}
                      className="absolute inset-0"
                    >
                      <Image
                        src={images[currentImageIndex]}
                        alt={`Construction Image ${currentImageIndex + 1}`}
                        fill
                        className="object-cover"
                        priority
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>

            {/* Right Section - Why Choose Us Content */}
            <motion.div
              className="flex-1 lg:max-w-[50%] space-y-6 min-h-[400px] sm:min-h-[450px] lg:min-h-[500px] flex flex-col justify-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={containerVariants}
            >
              {/* Title */}
              <motion.div variants={featureVariants}>
                <h2 className="text-3xl sm:text-4xl lg:text-4xl font-black text-gray-800 mb-4">
                  Highly Experienced Building certifiers
                </h2>
                <p className="text-gray-600 text-base sm:text-lg mb-8">
                  Bcaa Certifiers are Sydney based specialized In Residential
                  and commercial Approvals .
                </p>
              </motion.div>

              {/* Certificate Applications Grid */}
              <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 gap-6"
                variants={containerVariants}
              >
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.id}
                    className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
                    variants={featureVariants}
                    whileHover={{ y: -5, scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Certificate Title */}
                    <div className="text-center">
                      <h3 className="text-lg font-bold text-gray-800 mb-4 leading-tight">
                        {feature.title}
                      </h3>

                      {/* Apply Button */}
                      <motion.button
                        className="w-full px-6 py-3 bg-primary hover:bg-primary/90 rounded-full text-white font-semibold transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Apply
                      </motion.button>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* CTA Button */}
              <motion.div
                variants={featureVariants}
                className="pt-6 flex flex-col items-center"
              >
                <Link href="/contact">
                  <motion.button
                    className="px-8 py-3 bg-primary hover:bg-primary/90 rounded-full text-white text-lg font-bold transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Book Now
                  </motion.button>
                </Link>
                <p className="text-gray-500 text-sm mt-4 text-center">
                  Join thousands of satisfied customers who trust us for their
                  certification needs.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {isVideoOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsVideoOpen(false)}
          >
            {/* Video Container */}
            <motion.div
              className="relative w-full max-w-5xl aspect-video"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button - positioned relative to video */}
              <button
                onClick={() => setIsVideoOpen(false)}
                className="absolute -top-12 -right-2 z-10 w-10 h-10 bg-primary hover:bg-primary/80 rounded-full flex items-center justify-center text-white text-xl font-bold transition-all duration-200 cursor-pointer"
              >
                ×
              </button>
              <iframe
                className="w-full h-full rounded-lg"
                src="https://www.youtube.com/embed/l55HVcMhVsE?autoplay=1"
                title="Company Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default WhyChooseUsSection;
