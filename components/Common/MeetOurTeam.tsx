"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";

const MeetOurTeam = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const teamMembers = [
    {
      name: "Yousuf Noor",
      role: "FOUNDER",
      image: "/team-members/1.jpeg",
      description:
        "Visionary leader with 10+ years of experience building innovative solutions. I believe in turning bold ideas into reality through strategic thinking and passionate execution.",
    },
    {
      name: "Mohammed Noor",
      role: "CREATIVE DIRECTOR",
      image: "/team-members/2.jpeg",
      description:
        "Creative storyteller who transforms concepts into compelling visual experiences. Every design should tell a story and create an emotional connection with users.",
    },
    {
      name: "Ismail Noor",
      role: "LEAD DEVELOPER",
      image: "/team-members/3.jpeg",
      description:
        "Full-stack architect passionate about clean code and scalable solutions. I love solving complex problems and building technology that makes a difference.",
    },
    {
      name: "Ahmed Hassan",
      role: "UX DESIGNER",
      image: "/team-members/1.jpeg",
      description:
        "User-centered design advocate focused on creating intuitive experiences. Great design is invisible - it just works seamlessly for the people who use it.",
    },
    {
      name: "Sarah Ali",
      role: "MARKETING MANAGER",
      image: "/team-members/2.jpeg",
      description:
        "Strategic marketer who connects brands with their audience through authentic storytelling. Marketing is about building relationships, not just selling products.",
    },
    {
      name: "Omar Khan",
      role: "PRODUCT MANAGER",
      image: "/team-members/3.jpeg",
      description:
        "Product strategist who bridges the gap between user needs and business goals. The best products solve real problems in ways users didn't even know they needed.",
    },
  ];

  const updateCarousel = useCallback(
    (newIndex: number) => {
      if (isAnimating) return;

      setIsAnimating(true);

      // First phase: fade out current content
      setTimeout(() => {
        // Second phase: change content when fully faded out
        setCurrentIndex((newIndex + teamMembers.length) % teamMembers.length);
      }, 300);

      // Third phase: fade in new content
      setTimeout(() => {
        setIsAnimating(false);
      }, 700);
    },
    [isAnimating, teamMembers.length]
  );

  const goToSlide = (index: number) => {
    updateCarousel(index);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowUp") {
        updateCarousel(currentIndex - 1);
      } else if (e.key === "ArrowDown") {
        updateCarousel(currentIndex + 1);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex, updateCarousel]);

  const getCardPosition = (index: number) => {
    const offset =
      (index - currentIndex + teamMembers.length) % teamMembers.length;

    if (offset === 0) return "center";
    if (offset === 1) return "down-1";
    if (offset === 2) return "down-2";
    if (offset === teamMembers.length - 1) return "up-1";
    if (offset === teamMembers.length - 2) return "up-2";
    return "hidden";
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden py-20 bg-gradient-to-br from-primary/5 via-white to-primary/10 transition-all duration-1000 ease-in-out">
      {/* Modern Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/8 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-primary/6 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary/4 to-primary/8 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-8xl mx-auto px-6 lg:px-20">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent mb-4 transition-all duration-700 ease-in-out">
            Meet Our Team
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Passionate professionals dedicated to bringing your vision to life
            through innovation and expertise
          </p>
        </div>

        {/* Team Showcase Container */}
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow border border-primary/10 p-8 md:p-12 transition-all duration-500 ease-in-out hover:shadow-primary/10 hover:shadow-3xl">
          <div className="flex w-full h-[80vh] gap-16 items-center justify-center">
            {/* Left Side - Vertical Carousel */}
            <div className="flex-1 flex justify-center items-center">
              <div className="w-full max-w-md h-[70vh] relative flex flex-col items-center justify-center">
                {/* Carousel Track */}
                <div className="w-96 h-full flex flex-col justify-center items-center relative">
                  {teamMembers.map((member, index) => {
                    const position = getCardPosition(index);

                    return (
                      <div
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`absolute w-80 h-56 bg-white rounded-2xl overflow-hidden shadow-2xl cursor-pointer transition-all duration-700 ease-out ${
                          position === "center"
                            ? "z-10 scale-110 translate-y-0 opacity-100"
                            : position === "up-1"
                            ? "z-5 -translate-y-20 scale-95 opacity-90"
                            : position === "up-2"
                            ? "z-1 -translate-y-40 scale-85 opacity-70"
                            : position === "down-1"
                            ? "z-5 translate-y-20 scale-95 opacity-90"
                            : position === "down-2"
                            ? "z-1 translate-y-40 scale-85 opacity-70"
                            : "opacity-0 pointer-events-none"
                        }`}
                        style={{
                          transform: `${
                            position === "center"
                              ? "scale(1.1) translateZ(0)"
                              : position === "up-1"
                              ? "translateY(-80px) scale(0.95) translateZ(-50px)"
                              : position === "up-2"
                              ? "translateY(-160px) scale(0.85) translateZ(-150px)"
                              : position === "down-1"
                              ? "translateY(80px) scale(0.95) translateZ(-50px)"
                              : position === "down-2"
                              ? "translateY(160px) scale(0.85) translateZ(-150px)"
                              : "translateY(0)"
                          }`,
                        }}
                      >
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          className={`object-cover transition-all duration-700 ${
                            position === "center" ? "filter-none" : "grayscale"
                          }`}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right Side - Controls and Info */}
            <div className="flex-1 flex flex-col justify-center items-center gap-10 pl-10">
              {/* Member Info */}
              <div className="text-center max-w-lg">
                <div
                  className="transition-all duration-300 ease-in-out transform"
                  style={{
                    opacity: isAnimating ? 0 : 1,
                    transform: isAnimating
                      ? "translateY(15px)"
                      : "translateY(0px)",
                  }}
                >
                  <h2 className="text-primary text-4xl font-bold mb-2 relative inline-block">
                    {teamMembers[currentIndex].name}
                    <span className="absolute top-full left-0 w-20 h-0.5 bg-primary -translate-x-24"></span>
                    <span className="absolute top-full right-0 w-20 h-0.5 bg-primary translate-x-24"></span>
                  </h2>
                  <p className="text-gray-500 text-xl font-medium opacity-80 uppercase tracking-wider mb-6">
                    {teamMembers[currentIndex].role}
                  </p>
                  <blockquote className="text-gray-600 text-lg leading-relaxed italic border-l-4 border-primary/20 pl-6 text-left">
                    &quot;{teamMembers[currentIndex].description}&quot;
                  </blockquote>
                </div>
              </div>

              {/* Navigation Dots */}
              <div className="flex justify-center gap-3 mt-8">
                {teamMembers.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    disabled={isAnimating}
                    className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
                      currentIndex === index
                        ? "bg-primary scale-125"
                        : "bg-primary/20 hover:bg-primary/40"
                    } ${isAnimating ? "opacity-50 cursor-not-allowed" : ""}`}
                    aria-label={`Go to ${teamMembers[index].name}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Responsive Styles */}
      <style jsx>{`
        @media (max-width: 768px) {
          .flex {
            flex-direction: column;
            height: auto;
            gap: 1.25rem;
          }

          .flex-1:first-child {
            flex: none;
            width: 100%;
          }

          .flex-1:last-child {
            flex: none;
            width: 100%;
            padding-left: 0;
            gap: 1.25rem;
          }

          .w-96 {
            width: 22rem;
          }

          .w-80 {
            width: 20rem;
          }

          .h-56 {
            height: 11.25rem;
          }

          .text-4xl {
            font-size: 1.875rem;
          }

          .text-xl {
            font-size: 1rem;
          }

          .text-5xl {
            font-size: 2.5rem;
          }

          .text-6xl {
            font-size: 3rem;
          }
        }
      `}</style>
    </div>
  );
};

export default MeetOurTeam;
