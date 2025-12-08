"use client";

import React from "react";
import Image from "next/image";

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Construction",
      highlight: "Certificates",
      description:
        "Required after Development Consent and before building work begins. We issue Construction Certificates under Part 4A of the EP&A Act for residential and commercial projects. Our accredited team ensures your plans meet all regulatory requirements and building codes for a smooth construction start.",
      image:
        "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      imageAlt: "Modern building construction",
      layout: "right",
    },
    {
      id: 2,
      title: "Occupation",
      highlight: "Certificates",
      description:
        "Issued by the Principal Certifying Authority under the EP&A Act, allowing legal occupation of new or modified buildings. We provide Occupation Certificates for residential buildings including single dwellings, dual occupancies, and multi-unit developments. Our comprehensive service covers all construction and completion phases of building compliance.",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      imageAlt: "Modern office building",
      layout: "left",
    },
    {
      id: 3,
      title: "Building",
      highlight: "Inspections",
      description:
        "Mandatory Critical Stage Inspections throughout your development process. We conduct all required inspections from foundations to completion, scheduled within 48 hours notice. Our thorough inspection service ensures compliance with Building Professionals Board requirements and maintains the highest standards of safety and quality throughout construction.",
      image:
        "https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      imageAlt: "Building inspection and construction",
      layout: "right",
    },
    {
      id: "cdc",
      title: "Complying Development",
      highlight: "Certificates",
      // Added per your request
      description: `We issue The complying Development Certificate approval under Part 4 of the Environmental Planning and Assessment Act 1979 Section 4.28 for residential and commercial projects. 
      
      Our expertise team will ensures your plans meet all regulatory compliance and requirements and Australian Building Codes for a perfect starts.`,
    },
    {
      id: "cc",
      title: "Construction",
      highlight: "Certificates",
      description: `We issue construction certificates (CC) for building works after development consent is granted. 
      
      This ensures your detailed construction plans and specifications are consistent with the development consent and comply with the Building Code of Australia (BCA).`,
    },
  ];
  return (
    <section className="w-full py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Building Approvals <span className="text-primary">Services</span>{" "}
            Include:
          </h2>
        </div>

        {/* Services List (Text Only) */}
        <div className="space-y-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
            >
              <div className="space-y-4">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                  {service.title}{" "}
                  <span className="text-primary">{service.highlight}</span>
                </h3>

                <div className="prose prose-lg max-w-none">
                  {service.description.split("\n\n").map((paragraph, idx) => (
                    <p
                      key={idx}
                      className="text-gray-600 leading-relaxed text-lg"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
