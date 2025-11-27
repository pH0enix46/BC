"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Services() {
  const router = useRouter();

  const handleReadMore = (serviceId: number) => {
    router.push(`/services-details?service=${serviceId}`);
  };

  const services = [
    {
      id: 1,
      title: "Contracting",
      description:
        "Majoka delivers high-quality contracting solutions, ensuring precision and reliability in every project.",
      icon: "/landing/services/6.svg",
      featured: true,
    },
    {
      id: 2,
      title: "Testing",
      description:
        "Majoka supplies high-quality materials and equipment through reliable trading services.",
      icon: "/landing/services/1.svg",
      featured: false,
    },
    {
      id: 3,
      title: "Calibration",
      description:
        "Majoka offers precise calibration services to ensure equipment accuracy and reliability.",
      icon: "/landing/services/2.svg",
      featured: false,
    },
    {
      id: 4,
      title: "Inspection",
      description:
        "Majoka conducts detailed inspections to assess structural integrity and ensure safety compliance.",
      icon: "/landing/services/3.svg",
      featured: false,
    },
    {
      id: 5,
      title: "Trading",
      description:
        "Majoka supplies high-quality materials and equipment through reliable trading services.",
      icon: "/landing/services/4.svg",
      featured: false,
    },
    {
      id: 6,
      title: "Hotel",
      description:
        "Majoka provides comfortable accommodations and exceptional service at our modern hotel.",
      icon: "/landing/services/5.svg",
      featured: false,
    },
  ];

  return (
    <section className="w-full py-16 px-4 md:px-8 lg:px-16 bg-white">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-10 xl:px-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Our Services
          </h2>
          <p className="text-lg text-stone-900 max-w-2xl mx-auto">
            Discover how we can elevate your experience.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="group rounded-2xl p-8 text-center transition-all duration-500 hover:shadow-2xl hover:scale-105 border border-stone-400 bg-white hover:bg-primary cursor-pointer"
            >
              {/* Icon */}
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-full flex items-center justify-center bg-primary/80 group-hover:bg-white/20 transition-all duration-500">
                  <Image
                    src={service.icon}
                    alt={service.title}
                    width={32}
                    height={32}
                    className="filter brightness-0 invert transition-all duration-500"
                  />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-white transition-colors duration-500">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-base leading-relaxed mb-8 text-gray-600 group-hover:text-white/90 transition-colors duration-500">
                {service.description}
              </p>

              {/* Get Started Button */}
              <button
                onClick={() => handleReadMore(service.id)}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 text-primary group-hover:text-white cursor-pointer"
              >
                Get Started
                <svg
                  className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
