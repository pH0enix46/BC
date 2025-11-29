"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const langRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle escape key and outside click
  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
      if (event.key === "Escape" && isLangDropdownOpen) {
        setIsLangDropdownOpen(false);
      }
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (
        isMobileMenuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        setIsMobileMenuOpen(false);
      }
      if (
        isLangDropdownOpen &&
        langRef.current &&
        !langRef.current.contains(event.target as Node)
      ) {
        setIsLangDropdownOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener("keydown", handleEscapeKey);
      document.addEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    if (isLangDropdownOpen) {
      document.addEventListener("keydown", handleEscapeKey);
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen, isLangDropdownOpen]);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMobileMenuOpen]);

  // Determine navbar background and text colors - all pages follow home page style
  const getNavbarStyles = () => {
    return {
      navBg: isScrolled ? "bg-black/20 backdrop-blur-md" : "bg-transparent",
      textColor: "text-white/80 group-hover:text-primary",
      hoverColor: "hover:text-primary",
      activeColor: "text-primary",
    };
  };

  const styles = getNavbarStyles();

  return (
    <nav
      className="fixed top-2 left-0 right-0 transition-all duration-300 py-4"
      style={{ zIndex: 9998 }}
    >
      <div className="max-w-[1400px] mx-auto px-3 sm:px-4 lg:px-6 xl:px-8">
        {/* Rounded Navbar Container */}
        <div className="">
          <div
            className={`flex items-center transition-all duration-500 ${
              isScrolled ? "justify-center" : "justify-between"
            }`}
          >
            {/* Logo - Left Side */}
            <div
              className={`flex-shrink-0 transition-all duration-700 ease-in-out transform ${
                isScrolled
                  ? "opacity-0 scale-75 -translate-x-8"
                  : "opacity-100 scale-100 translate-x-0"
              }`}
              style={{
                maxWidth: isScrolled ? "0px" : "160px",
                overflow: "hidden",
                transition: "all 0.7s ease-in-out",
              }}
            >
              <Link href="/">
                <Image
                  src="/Essence-logo.png"
                  alt="Company Logo"
                  width={160}
                  height={60}
                  className="h-10 sm:h-12 w-auto"
                />
              </Link>
            </div>

            {/* Navigation Links - Center with Rounded Box */}
            <div
              className={`hidden lg:flex items-center justify-center transition-all duration-500 ${
                isScrolled ? "flex-none" : "flex-1 mx-8"
              }`}
            >
              <div className="bg-gradient-to-r from-gray-50 to-gray-50 backdrop-blur-md rounded-full px-4 sm:px-6 lg:px-8 py-3 lg:py-3 shadow-4xl border border-gray-200/30">
                <div className="flex items-center space-x-6 xl:space-x-8">
                  <Link
                    href="/services"
                    className={`${
                      pathname === "/services"
                        ? "text-primary bg-gradient-to-r from-primary/10 to-transparent"
                        : "text-primary/80"
                    } hover:text-primary hover:bg-gradient-to-r hover:from-primary/5 hover:to-transparent px-3 py-1.5 rounded-full transition-all duration-300 text-lg lg:text-xl font-medium`}
                  >
                    Services
                  </Link>
                  <Link
                    href="/project"
                    className={`${
                      pathname === "/project"
                        ? "text-primary bg-gradient-to-r from-primary/10 to-transparent"
                        : "text-primary/80"
                    } hover:text-primary hover:bg-gradient-to-r hover:from-primary/5 hover:to-transparent px-3 py-1.5 rounded-full transition-all duration-300 text-lg lg:text-xl font-medium`}
                  >
                    Project
                  </Link>
                  <Link
                    href="/blogs"
                    className={`${
                      pathname === "/blogs"
                        ? "text-primary bg-gradient-to-r from-primary/10 to-transparent"
                        : "text-primary/80"
                    } hover:text-primary hover:bg-gradient-to-r hover:from-primary/5 hover:to-transparent px-3 py-1.5 rounded-full transition-all duration-300 text-lg lg:text-xl font-medium`}
                  >
                    Blogs
                  </Link>
                  <Link
                    href="/about-us"
                    className={`${
                      pathname === "/about-us"
                        ? "text-primary bg-gradient-to-r from-primary/10 to-transparent"
                        : "text-primary/80"
                    } hover:text-primary hover:bg-gradient-to-r hover:from-primary/5 hover:to-transparent px-3 py-1.5 rounded-full transition-all duration-300 text-lg lg:text-xl font-medium`}
                  >
                    About
                  </Link>
                </div>
              </div>
            </div>

            {/* Contact Button - Right Side */}
            <div
              ref={buttonRef}
              className={`hidden lg:block relative group flex-shrink-0 transition-all duration-700 ease-in-out transform ${
                isScrolled
                  ? "opacity-0 scale-75 translate-x-8"
                  : "opacity-100 scale-100 translate-x-0"
              }`}
              style={{
                maxWidth: isScrolled ? "0px" : "200px",
                overflow: "hidden",
                transition: "all 0.7s ease-in-out",
              }}
            >
              {/* Button */}
              <Link
                href="/contact"
                className="relative bg-gradient-to-r from-primary to-[#22229e] hover:from-primary/90 hover:to-primary/70 text-white px-8 py-3 rounded-full text-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl block whitespace-nowrap"
              >
                Get Quote
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="relative w-8 h-8 text-gray-700 hover:text-primary transition-colors flex items-center justify-center cursor-pointer"
                aria-expanded={isMobileMenuOpen}
                aria-label="Toggle mobile menu"
              >
                <div className="w-5 h-5 relative">
                  <span
                    className={`absolute left-0 top-1 w-5 h-0.5 bg-current transform transition-all duration-300 ${
                      isMobileMenuOpen ? "rotate-45 translate-y-1.5" : ""
                    }`}
                  ></span>
                  <span
                    className={`absolute left-0 top-2.5 w-5 h-0.5 bg-current transition-all duration-300 ${
                      isMobileMenuOpen ? "opacity-0" : ""
                    }`}
                  ></span>
                  <span
                    className={`absolute left-0 top-4 w-5 h-0.5 bg-current transform transition-all duration-300 ${
                      isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
                    }`}
                  ></span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
          style={{
            zIndex: 2147483646,
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
          }}
        />
      )}

      {/* Mobile Menu Panel - Modern Design */}
      <div
        ref={menuRef}
        className={`fixed top-0 right-0 h-full w-80 max-w-full bg-gradient-to-br from-white/20 via-gray-50/40 to-gray-100/60 backdrop-blur-xl border-l border-gray-200/50 shadow-2xl transform transition-all duration-500 ease-out lg:hidden ${
          isMobileMenuOpen
            ? "translate-x-0 opacity-100"
            : "translate-x-full opacity-0"
        }`}
        style={{
          zIndex: 2147483647,
          position: "fixed",
          top: 0,
          right: 0,
          height: "100vh",
          isolation: "isolate",
        }}
      >
        {/* Decorative gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-primary/10 pointer-events-none" />

        {/* Close Button - Modern Style */}
        <div className="absolute top-6 right-6 z-10">
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="w-11 h-11 bg-gray-100/80 hover:bg-primary/10 text-gray-700 hover:text-primary transition-all duration-300 flex items-center justify-center rounded-2xl shadow hover:shadow-lg hover:scale-110 cursor-pointer group"
            aria-label="Close mobile menu"
          >
            <svg
              className="w-5 h-5 transition-transform duration-300 group-hover:rotate-90"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Logo Section */}
        <div className="pt-8 px-6 pb-6 border-b border-gray-200/50">
          <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
            <Image
              src="/Essence-logo.png"
              alt="Company Logo"
              width={140}
              height={50}
              className="h-10 w-auto"
            />
          </Link>
        </div>

        <div className="flex flex-col h-full pt-8 px-6 pb-8 overflow-y-auto">
          {/* Mobile Navigation Links - Modern Cards */}
          <div className="flex flex-col space-y-3">
            <Link
              href="/services"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`group relative px-5 py-4 rounded-2xl transition-all duration-300 ${
                pathname === "/services"
                  ? "bg-gradient-to-r from-primary/10 to-primary/5 shadow"
                  : "bg-white/50 hover:bg-white/80 hover:shadow-md"
              }`}
            >
              <div className="flex items-center justify-between">
                <span
                  className={`text-lg font-semibold transition-colors ${
                    pathname === "/services"
                      ? "text-primary"
                      : "text-gray-700 group-hover:text-primary"
                  }`}
                >
                  Services
                </span>
                <svg
                  className={`w-5 h-5 transition-all duration-300 ${
                    pathname === "/services"
                      ? "text-primary translate-x-0"
                      : "text-gray-400 -translate-x-1 group-hover:translate-x-0 group-hover:text-primary"
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </Link>

            <Link
              href="/project"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`group relative px-5 py-4 rounded-2xl transition-all duration-300 ${
                pathname === "/project"
                  ? "bg-gradient-to-r from-primary/10 to-primary/5 shadow"
                  : "bg-white/50 hover:bg-white/80 hover:shadow-md"
              }`}
            >
              <div className="flex items-center justify-between">
                <span
                  className={`text-lg font-semibold transition-colors ${
                    pathname === "/project"
                      ? "text-primary"
                      : "text-gray-700 group-hover:text-primary"
                  }`}
                >
                  Project
                </span>
                <svg
                  className={`w-5 h-5 transition-all duration-300 ${
                    pathname === "/project"
                      ? "text-primary translate-x-0"
                      : "text-gray-400 -translate-x-1 group-hover:translate-x-0 group-hover:text-primary"
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </Link>

            <Link
              href="/about-us"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`group relative px-5 py-4 rounded-2xl transition-all duration-300 ${
                pathname === "/about-us"
                  ? "bg-gradient-to-r from-primary/10 to-primary/5 shadow"
                  : "bg-white/50 hover:bg-white/80 hover:shadow-md"
              }`}
            >
              <div className="flex items-center justify-between">
                <span
                  className={`text-lg font-semibold transition-colors ${
                    pathname === "/about-us"
                      ? "text-primary"
                      : "text-gray-700 group-hover:text-primary"
                  }`}
                >
                  About
                </span>
                <svg
                  className={`w-5 h-5 transition-all duration-300 ${
                    pathname === "/about-us"
                      ? "text-primary translate-x-0"
                      : "text-gray-400 -translate-x-1 group-hover:translate-x-0 group-hover:text-primary"
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </Link>

            <Link
              href="/blogs"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`group relative px-5 py-4 rounded-2xl transition-all duration-300 ${
                pathname === "/blogs"
                  ? "bg-gradient-to-r from-primary/10 to-primary/5 shadow"
                  : "bg-white/50 hover:bg-white/80 hover:shadow-md"
              }`}
            >
              <div className="flex items-center justify-between">
                <span
                  className={`text-lg font-semibold transition-colors ${
                    pathname === "/blogs"
                      ? "text-primary"
                      : "text-gray-700 group-hover:text-primary"
                  }`}
                >
                  Blogs
                </span>
                <svg
                  className={`w-5 h-5 transition-all duration-300 ${
                    pathname === "/blogs"
                      ? "text-primary translate-x-0"
                      : "text-gray-400 -translate-x-1 group-hover:translate-x-0 group-hover:text-primary"
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </Link>
          </div>

          {/* Mobile Contact Button - Modern Style */}
          <div className="mt-8 pt-6 border-t border-gray-200/50">
            <Link
              href="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full px-6 py-4 bg-gradient-to-r from-primary to-[#22229e] hover:from-primary/90 hover:to-primary/70 rounded-2xl flex items-center justify-center gap-3 transition-all duration-300 shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_12px_40px_rgb(0,0,0,0.18)] transform hover:scale-[1.02] group"
            >
              <span className="text-white text-lg font-bold">Get Quote</span>
              <svg
                className="w-5 h-5 text-white transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
