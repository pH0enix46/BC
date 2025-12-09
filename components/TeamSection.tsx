"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Users,
  ChevronLeft,
  ChevronRight,
  TrendingUp,
  Cpu,
  Layers,
  Share2,
  PenTool,
  Terminal,
  CheckCircle2,
} from "lucide-react";

// Team Data
const teamMembers = [
  {
    name: "John Alvarez",
    role: "Growth Lead",
    image:
      "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=800&q=80&auto=format&fit=crop",
    icon: TrendingUp,
    description: "Driving user acquisition & market expansion",
    featured: false,
  },
  {
    name: "Jackson Mitchel",
    role: "AI Lead",
    image:
      "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=800&q=80&auto=format&fit=crop",
    icon: Cpu,
    description: "Building the core neural architectures",
    featured: false,
  },
  {
    name: "Jenny Doe",
    role: "Product Head",
    image:
      "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=800&q=80&auto=format&fit=crop",
    icon: Layers,
    description: "Leading product vision & strategy",
    featured: true, // This one has the "Featured" badge in the design
  },
  {
    name: "Armenia Sean",
    role: "Social Media Head",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&q=80&auto=format&fit=crop",
    icon: Share2,
    description: "Crafting our digital voice & community",
    featured: false,
  },
  {
    name: "Maya Patel",
    role: "Design Lead",
    image:
      "https://images.unsplash.com/photo-1541534401786-2077eed87a2d?w=800&q=80&auto=format&fit=crop",
    icon: PenTool,
    description: "Shaping the visual identity & UX",
    featured: false,
  },
  {
    name: "Liam Becker",
    role: "Platform Engineer",
    image:
      "https://images.unsplash.com/photo-1544005316-04d7f94c1d27?w=800&q=80&auto=format&fit=crop",
    icon: Terminal,
    description: "Ensuring scalability & reliability",
    featured: false,
  },
];

export default function TeamSection() {
  const [activeIndex, setActiveIndex] = useState(2); // Start with Jenny (index 2)

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % teamMembers.length);
  };

  const prevSlide = () => {
    setActiveIndex(
      (prev) => (prev - 1 + teamMembers.length) % teamMembers.length
    );
  };

  // Helper to calculate the 3D transforms based on position relative to active index
  const getCardStyle = (index: number) => {
    const total = teamMembers.length;

    // Calculate distance accounting for circular wrap
    let offset = index - activeIndex;
    if (offset > total / 2) offset -= total;
    if (offset < -total / 2) offset += total;

    // Default hidden state
    let style = {
      transform: `translateX(${offset * 180}px) scale(0.75) rotateY(${
        -offset * 15
      }deg)`,
      opacity: 0,
      filter: "brightness(0.5)",
      zIndex: 0,
      boxShadow: "none",
    };

    if (offset === 0) {
      // CENTER CARD
      style = {
        transform: "translateX(0) scale(1) rotateY(0deg)",
        opacity: 1,
        filter: "brightness(1)",
        zIndex: 10,
        boxShadow: "0 20px 60px rgba(163, 230, 53, 0.3)", // Lime shadow
      };
    } else if (offset === -1 || offset === 1) {
      // IMMEDIATE NEIGHBORS
      style = {
        transform: `translateX(${offset * 180}px) scale(0.9) rotateY(${
          offset * -10
        }deg)`,
        opacity: 0.6,
        filter: "brightness(0.75)",
        zIndex: 5,
        boxShadow: "none",
      };
    } else if (offset === -2 || offset === 2) {
      // FAR NEIGHBORS
      style = {
        transform: `translateX(${offset * 180}px) scale(0.85) rotateY(${
          offset * -20
        }deg)`,
        opacity: 0.4,
        filter: "brightness(0.6)",
        zIndex: 2,
        boxShadow: "none",
      };
    }

    return style;
  };

  return (
    <section
      className="relative py-24 bg-neutral-950 overflow-hidden text-white"
      id="why"
    >
      {/* Background Gradients/Grid simulation */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-lime-400 opacity-20 blur-[100px]"></div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Content */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <span className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] ring-1 uppercase tracking-tight bg-lime-400/10 text-lime-300 ring-lime-300/20 font-medium">
            <Users size={12} />
            Team
          </span>

          <h2 className="mt-4 text-4xl sm:text-5xl font-semibold tracking-tight text-white">
            Meet the team that talks to AI like it&lsquo;s a pet
          </h2>

          <p className="mt-4 max-w-2xl mx-auto text-neutral-400 text-lg">
            The humans behind the models: builders, dreamers, and delightful
            nerds.
          </p>
        </div>

        {/* Carousel Container */}
        <div
          className="relative flex items-center justify-center h-[500px]"
          style={{ perspective: "1200px" }}
        >
          {/* Previous Button */}
          <button
            onClick={prevSlide}
            className="absolute left-4 z-20 hidden md:inline-flex h-12 w-12 items-center justify-center rounded-full bg-black/50 ring-1 ring-white/10 transition hover:bg-white/10 text-white"
            aria-label="Previous"
          >
            <ChevronLeft size={24} />
          </button>

          {/* 3D Track */}
          <div className="relative w-full max-w-md h-full flex items-center justify-center preserve-3d">
            {teamMembers.map((member, index) => {
              const style = getCardStyle(index);
              const isCenter = index === activeIndex;

              return (
                <div
                  key={index}
                  className={`absolute w-80 h-[460px] rounded-2xl overflow-hidden transition-all duration-500 ease-out border ${
                    isCenter
                      ? "border-lime-300/40 bg-lime-400/10"
                      : "border-white/10 bg-neutral-900"
                  }`}
                  style={style}
                >
                  {/* Image */}
                  <div className="relative h-full w-full">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 320px"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>

                    {/* Featured Badge (Only for center/featured card) */}
                    {member.featured && (
                      <div className="absolute top-6 right-6">
                        <div className="inline-flex items-center gap-1 rounded-full px-3 py-1.5 text-xs font-semibold bg-lime-400 text-neutral-950">
                          <CheckCircle2 size={12} />
                          Featured
                        </div>
                      </div>
                    )}

                    {/* Content */}
                    <div className="absolute bottom-6 left-6 right-6">
                      {/* Role Badge */}
                      <div
                        className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs ring-1 mb-3 backdrop-blur-md ${
                          isCenter
                            ? "bg-white/10 ring-white/20"
                            : "bg-white/10 ring-white/20"
                        }`}
                      >
                        <member.icon size={12} className="text-lime-300" />
                        <span className="text-white font-medium">
                          {member.role}
                        </span>
                      </div>

                      <p
                        className={`font-bold tracking-tight text-white mb-1 ${
                          isCenter ? "text-3xl" : "text-xl"
                        }`}
                      >
                        {member.name}
                      </p>

                      {/* Description only shows for center card */}
                      <div
                        className={`overflow-hidden transition-all duration-500 ${
                          isCenter
                            ? "max-h-20 opacity-100 mt-2"
                            : "max-h-0 opacity-0"
                        }`}
                      >
                        <p className="text-sm text-neutral-300 leading-relaxed">
                          {member.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Next Button */}
          <button
            onClick={nextSlide}
            className="absolute right-4 z-20 hidden md:inline-flex h-12 w-12 items-center justify-center rounded-full bg-black/50 ring-1 ring-white/10 transition hover:bg-white/10 text-white"
            aria-label="Next"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Mobile Navigation Dots (Optional) */}
        <div className="flex justify-center gap-2 mt-8 md:hidden">
          {teamMembers.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`w-2 h-2 rounded-full transition-colors ${
                i === activeIndex ? "bg-lime-400" : "bg-neutral-800"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
