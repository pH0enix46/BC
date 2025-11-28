"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ChevronUp, ChevronDown } from "lucide-react";

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
    if (offset === teamMembers.length - 1) return "up-1";
    return "hidden";
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden my-20">
      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-8xl mx-auto px-6 lg:px-20">
        {/* Section Header */}
        <div className="text-center mb-10 mt-16">
          <h1 className="text-4xl md:text-5xl font-bold text-black">
            Meet Our <span className="text-primary">Team</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Passionate professionals dedicated to bringing your vision to life
            through innovation and expertise
          </p>
        </div>

        {/* Team Showcase Container */}
        <div className="bg-gray-50 backdrop-blur-xl rounded-3xl shadow border border-primary/10 p-8 md:p-0 transition-all duration-500 ease-in-out hover:shadow-primary/10 hover:shadow-3xl">
          <div className="flex w-full h-[80vh] gap-16 items-center justify-center py-8 team-showcase">
            {/* Left Side - Vertical Carousel */}
            <div className="flex-1 flex justify-center items-center">
              <div className="w-full max-w-md h-[70vh] relative flex flex-col items-center justify-center">
                {/* Carousel Track */}
                <div className="w-96 h-full flex flex-col justify-center items-center relative carousel-container">
                  {teamMembers.map((member, index) => {
                    const position = getCardPosition(index);

                    return (
                      <div
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`absolute w-96 h-72 bg-white rounded-2xl overflow-hidden shadow-2xl cursor-pointer transition-all duration-700 ease-out team-card ${
                          position === "center"
                            ? "z-10 scale-110 translate-y-0 opacity-100"
                            : position === "up-1"
                            ? "z-5 -translate-y-20 scale-95 opacity-90"
                            : position === "down-1"
                            ? "z-5 translate-y-20 scale-95 opacity-90"
                            : "opacity-0 pointer-events-none"
                        }`}
                        style={{
                          transform: `${
                            position === "center"
                              ? "scale(1.1) translateZ(0)"
                              : position === "up-1"
                              ? "translateY(-80px) scale(0.95) translateZ(-50px)"
                              : position === "down-1"
                              ? "translateY(80px) scale(0.95) translateZ(-50px)"
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
            <div className="flex-1 flex flex-col justify-center items-center gap-10 pl-10 member-info-section">
              {/* Member Info */}
              <div className="text-center max-w-lg member-info-container">
                <div
                  className="transition-all duration-300 ease-in-out transform"
                  style={{
                    opacity: isAnimating ? 0 : 1,
                    transform: isAnimating
                      ? "translateY(15px)"
                      : "translateY(0px)",
                  }}
                >
                  <h2 className="text-primary text-4xl font-bold mb-2 relative inline-block member-name">
                    {teamMembers[currentIndex].name}
                    <span className="absolute top-full left-0 w-20 h-0.5 bg-primary -translate-x-24"></span>
                    <span className="absolute top-full right-0 w-20 h-0.5 bg-primary translate-x-24"></span>
                  </h2>
                  <p className="text-gray-500 text-xl font-medium opacity-80 uppercase tracking-wider mb-6 member-role">
                    {teamMembers[currentIndex].role}
                  </p>
                  <blockquote className="text-gray-600 text-lg leading-relaxed italic border-l-4 border-primary/20 pl-6 text-left member-description">
                    &quot;{teamMembers[currentIndex].description}&quot;
                  </blockquote>
                </div>
              </div>

              {/* Navigation Arrows */}
              <div className="flex items-center gap-4 mt-8">
                <button
                  onClick={() => updateCarousel(currentIndex - 1)}
                  disabled={isAnimating}
                  className={`w-12 h-12 rounded-full bg-primary/10 hover:bg-primary/20 border border-primary/20 flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-110 ${
                    isAnimating ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                  aria-label="Previous team member"
                >
                  <ChevronUp className="w-6 h-6 text-primary" />
                </button>

                <div className="flex gap-2">
                  {teamMembers.map((_, index) => (
                    <div
                      key={index}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        currentIndex === index
                          ? "bg-primary scale-125"
                          : "bg-primary/30"
                      }`}
                    />
                  ))}
                </div>

                <button
                  onClick={() => updateCarousel(currentIndex + 1)}
                  disabled={isAnimating}
                  className={`w-12 h-12 rounded-full bg-primary/10 hover:bg-primary/20 border border-primary/20 flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-110 ${
                    isAnimating ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                  aria-label="Next team member"
                >
                  <ChevronDown className="w-6 h-6 text-primary" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Responsive Styles */}
      <style jsx>{`
        @media (min-width: 1800px) {
          .team-card {
            width: 40rem !important;
            height: 30rem !important;
          }

          .carousel-container {
            width: 28rem !important;
          }

          .team-showcase {
            gap: 2rem !important;
          }

          .member-info-section {
            padding-left: 2rem !important;
          }

          .member-info-container {
            max-width: 40rem !important;
          }

          .member-name {
            font-size: 3.5rem !important;
          }

          .member-role {
            font-size: 1.5rem !important;
          }

          .member-description {
            font-size: 1.375rem !important;
            line-height: 2rem !important;
          }
        }

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
