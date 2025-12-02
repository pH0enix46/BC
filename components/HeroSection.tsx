"use client";

import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const [isVisible, setIsVisible] = useState(true);
  const heroRef = React.useRef<HTMLDivElement>(null);
  const totalSlides = 3;

  // Array of background images
  const backgroundImages = [
    "/landing/hero/h-1.avif",
    "/landing/hero/h2.avif",
    "/landing/hero/h3.avif",
  ];

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-out",
      once: true,
      offset: 50,
    });
  }, []);

  // Scroll-based visibility detection
  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        const isInView = rect.top < window.innerHeight && rect.bottom > 0;
        setIsVisible(isInView);
      }
    };

    // Initial check
    handleScroll();

    // Add scroll listener
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Auto-slide functionality
  useEffect(() => {
    if (isTransitioning || !isVisible) return;

    const autoSlideInterval = setInterval(() => {
      setIsTransitioning(true);
      setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(autoSlideInterval);
  }, [isTransitioning, isVisible, totalSlides]);

  const goToSlide = (index: number) => {
    if (isTransitioning || index === currentSlide) return;
    setIsTransitioning(true);
    setCurrentSlide(index);
  };

  // Reset transition state after animation completes
  useEffect(() => {
    if (isTransitioning) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [isTransitioning]);

  return (
    <div className="w-full py-4">
      <div
        ref={heroRef}
        className="relative w-[98%] mx-auto h-[calc(100vh-2rem)] sm:h-[calc(100vh-3rem)] md:h-[calc(100vh-4rem)] overflow-hidden rounded-t-[24px] rounded-b-[24px] bg-[#055ea1] shadow-xl"
      >
        {/* Background Images with Advanced Animations */}
        {backgroundImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-[#333] bg-cover bg-center transition-all duration-[800ms] ease-in-out transform ${
              index === currentSlide
                ? "opacity-100 scale-100 rotate-0"
                : index === (currentSlide - 1 + totalSlides) % totalSlides
                ? "opacity-0 scale-110 -rotate-1 translate-x-[-100px]"
                : index === (currentSlide + 1) % totalSlides
                ? "opacity-0 scale-110 rotate-1 translate-x-[100px]"
                : "opacity-0 scale-95 translate-y-[50px]"
            }`}
            style={{
              backgroundImage: `url('${image}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              filter:
                index === currentSlide
                  ? "brightness(0.8) contrast(1.05)"
                  : "brightness(0.8) blur(2px)",
              transition:
                "all 800ms cubic-bezier(0.4, 0, 0.2, 1), filter 600ms ease-out",
            }}
          >
            {/* Animated Gradient Overlay */}
            <div
              className={`absolute inset-0 bg-gradient-to-r from-black/90 to-black transition-all duration-700 ${
                index === currentSlide ? "opacity-70" : "opacity-80"
              }`}
              style={{
                background:
                  index === currentSlide
                    ? "linear-gradient(135deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.6) 100%)"
                    : "linear-gradient(135deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.6) 100%)",
              }}
            ></div>

            {/* Animated Particles Effect */}
            {index === currentSlide && (
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1 h-1 bg-white/20 rounded-full animate-pulse"
                    style={{
                      left: `${20 + i * 15}%`,
                      top: `${30 + (i % 3) * 20}%`,
                      animationDelay: `${i * 0.5}s`,
                      animationDuration: "3s",
                    }}
                  ></div>
                ))}
              </div>
            )}
          </div>
        ))}

        {/* Slide Transition Overlay */}
        <div
          className={`absolute inset-0 bg-black/20 transition-opacity duration-300 pointer-events-none ${
            isTransitioning ? "opacity-100" : "opacity-0"
          }`}
        ></div>

        {/* Hero Content with Animations */}
        <div className="relative z-10 flex flex-col h-full">
          {/* Top Content - Heading and Paragraph */}
          <div
            className="max-w-8xl mx-auto flex flex-col items-center justify-center space-y-4 sm:space-y-5 md:space-y-6 px-4 sm:px-6 md:px-8 flex-1"
            data-aos="fade-down"
            data-aos-duration="1200"
            data-aos-delay="200"
          >
            <h1
              className="text-white/90 text-5xl lg:text-6xl xl:text-7xl font-bold text-center leading-tight sm:leading-tight md:leading-tight tracking-[-0.4px] font-anek"
              style={{
                textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
              }}
            >
              Shaping Skylines, Defining Progress
            </h1>

            <p
              className="text-white/80 text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-center font-anek max-w-5xl"
              style={{
                textShadow: "1px 1px 3px rgba(0,0,0,0.5)",
              }}
            >
              Trusted Contractor partner across Australia and beyond
            </p>
          </div>

          {/* Enhanced Slider Dots */}
          <div
            className="absolute bottom-8 sm:bottom-12 md:bottom-16 lg:bottom-20 left-1/2 transform -translate-x-1/2 flex space-x-3 z-30"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                disabled={isTransitioning}
                className={`h-2.5 sm:h-3 rounded-full transition-all duration-500 cursor-pointer transform hover:scale-125 active:scale-90 ${
                  currentSlide === index
                    ? "bg-primary w-6 sm:w-8 shadow-lg"
                    : "bg-indigo-50 hover:bg-indigo-100 w-2.5 sm:w-3"
                } ${isTransitioning ? "opacity-50 cursor-not-allowed" : ""}`}
                style={{
                  boxShadow:
                    currentSlide === index
                      ? "0 2px 8px rgba(188,43,43,0.4), 0 0 0 2px rgba(255,255,255,0.2)"
                      : "0 1px 3px rgba(0,0,0,0.2)",
                }}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
