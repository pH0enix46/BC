"use client";

import React from "react";
import Image from "next/image";

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Complying Development",
      highlight: "Certificates",
      description:
        "Complying Development Certificates are a fast-track way of obtaining an approval, quickly and efficiently, without the need for a Development Application through Council.",
      image:
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      imageAlt: "Modern kitchen interior design",
      layout: "left",
    },
    {
      id: 2,
      title: "Construction",
      highlight: "Certificates",
      description:
        "A construction certificate is required after a Development Consent is issued by Local Council and before any building work can commence. Phoenix Building Approvals can issue Construction Certificates under Part 4A of the EP&A Act within their accredited Authority (BCA) and Local Principal on Sustainable PCA's for any development projects.",
      image:
        "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      imageAlt: "Modern building construction",
      layout: "right",
    },
    {
      id: 3,
      title: "Occupation",
      highlight: "Certificates",
      description:
        "An occupation certificate is issued by the appointed Principal Certifying Authority (PCA) under the Environmental Planning and Development Act 1979 (EP & A Act) allowing a person to occupy a/or use a new building or change the use of an existing building.\n\nPhoenix Building Approvals can issue Occupation Certificates for residential buildings - including single dwellings, dual occupancies and multi-unit residential buildings (SEPP 65) that they have been appointed to provide for the construction and completion phases of building compliance works - safely and securely.",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      imageAlt: "Modern office building",
      layout: "left",
    },
    {
      id: 4,
      title: "Building",
      highlight: "Inspections",
      description:
        "Mandatory Critical Stage Inspections as well as all Development approvals.\n\nAnd by July 2019, it is mandatory for Council projects listed in the Building Professionals Board's List that need to be scheduled throughout the development process during planning stages and during construction within a 48 hour timeframe. These mandatory inspections play from building the foundations right through to the completion of the building.",
      image:
        "https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      imageAlt: "Building inspection and construction",
      layout: "right",
    },
  ];

  return (
    <section className="w-full py-20 bg-gray-50">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-10 xl:px-18">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Building Approvals <span className="text-primary">Services</span>{" "}
            Include:
          </h2>
        </div>

        {/* Services Grid */}
        <div className="space-y-20">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`flex flex-col ${
                service.layout === "right"
                  ? "lg:flex-row-reverse"
                  : "lg:flex-row"
              } items-center gap-8 lg:gap-16`}
            >
              {/* Image Section */}
              <div className="w-full lg:w-1/2">
                <div className="relative h-[300px] md:h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl outline-2 outline-primary/20 outline-offset-2">
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700 "
                  />
                </div>
              </div>

              {/* Content Section */}
              <div className="w-full lg:w-1/2 space-y-6">
                <div className="space-y-4">
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
