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
      title: "Unmatched Expertise",
      description:
        "With years of experience across residential, commercial, and industrial projects, we bring proven knowledge and innovative techniques to every build.",
    },
    {
      id: 2,
      title: "Commitment to Quality",
      description:
        "From materials to craftsmanship, we follow international standards to ensure long-lasting durability and top-tier finishing.",
    },
    {
      id: 3,
      title: "On-Time Delivery",
      description:
        "We value your time. Our structured planning and efficient project management guarantee deadlines are met without compromise.",
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
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
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
                {/* Green Badge */}
                <div className="absolute top-4 left-4 z-10 bg-green-600 text-white px-4 py-2 rounded-lg font-bold text-sm">
                  Trusted Since
                  <br />
                  2015
                </div>

                {/* Auto-sliding Image Container - Height matches right side */}
                <div className="relative w-full h-[500px] sm:h-[600px] lg:h-[650px] rounded-2xl overflow-hidden bg-gray-200">
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
              className="flex-1 lg:max-w-[50%] space-y-6 min-h-[500px] sm:min-h-[600px] lg:min-h-[650px] flex flex-col justify-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={containerVariants}
            >
              {/* Title */}
              <motion.div variants={featureVariants}>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-800 mb-4">
                  Why Choose <span className="text-green-600">Esscence</span>
                </h2>
                <p className="text-gray-600 text-base sm:text-lg mb-8">
                  Your trusted partner for premium construction services and
                  exceptional quality in the UAE. We deliver reliability,
                  craftsmanship, and expertise that keeps your projects running
                  at their best.
                </p>
              </motion.div>

              {/* Features Grid */}
              <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 gap-6"
                variants={containerVariants}
              >
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.id}
                    className="space-y-3"
                    variants={featureVariants}
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Icon and Title */}
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        {index === 0 && (
                          <svg
                            className="w-4 h-4 text-white"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        )}
                        {index === 1 && (
                          <svg
                            className="w-4 h-4 text-white"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                          </svg>
                        )}
                        {index === 2 && (
                          <svg
                            className="w-4 h-4 text-white"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                          </svg>
                        )}
                      </div>
                      <div>
                        <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">
                          {feature.title}
                        </h3>
                        <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* CTA Button */}
              <motion.div
                variants={featureVariants}
                className="pt-6 flex flex-col items-end"
              >
                <Link href="/about-us">
                  <motion.button
                    className="px-8 py-3 bg-green-600 hover:bg-green-700 rounded-full text-white text-lg font-bold transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Explore More
                  </motion.button>
                </Link>
                <p className="text-gray-500 text-sm mt-4 text-right">
                  Join thousands of satisfied customers who trust Esscence for
                  their construction needs.
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
                className="absolute -top-12 -right-2 z-10 w-10 h-10 bg-primary/90 hover:bg-primary/70 rounded-full flex items-center justify-center text-white text-xl font-bold transition-all duration-200 cursor-pointer"
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
