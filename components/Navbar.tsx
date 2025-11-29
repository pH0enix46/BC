"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import ExpandableSearchBar from "./Common/ExpandableSearchBar";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const langRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  // Search suggestions - you can customize these
  const searchSuggestions = [
    "Services",
    "Web Development",
    "Mobile Apps",
    "UI/UX Design",
    "Digital Marketing",
    "E-commerce Solutions",
    "About Us",
    "Contact",
    "Career Opportunities",
    "Blog Posts",
    "Projects",
    "Portfolio",
  ];

  // Handle search functionality
  const handleSearch = (query: string) => {
    console.log("Searching for:", query);
    // Add your search logic here - navigate to search results, filter content, etc.
    // Example: router.push(`/search?q=${encodeURIComponent(query)}`);
  };

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
      <div className="max-w-[1024px] mx-auto px-3 sm:px-4 lg:px-6 xl:px-20">
        {/* Rounded Navbar Container */}
        <div className="bg-gradient-to-r from-gray-50 to-gray-50 backdrop-blur-md rounded-[20px] px-4 sm:px-6 lg:px-8 py-1 lg:py-1 shadow-4xl border border-gray-200/30">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex-shrink-0">
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

            {/* Navigation Links - Desktop */}
            <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              <Link
                href="/services"
                className={`${
                  pathname === "/services"
                    ? "text-primary bg-gradient-to-r from-primary/10 to-transparent px-3 py-1 rounded-full"
                    : "text-primary/80"
                } hover:text-primary hover:bg-gradient-to-r hover:from-primary/5 hover:to-transparent hover:px-3 hover:py-1 hover:rounded-full transition-all duration-300 text-lg lg:text-xl font-medium`}
              >
                Services
              </Link>
              <Link
                href="/project"
                className={`${
                  pathname === "/project"
                    ? "text-primary bg-gradient-to-r from-primary/10 to-transparent px-3 py-1 rounded-full"
                    : "text-primary/80"
                } hover:text-primary hover:bg-gradient-to-r hover:from-primary/5 hover:to-transparent hover:px-3 hover:py-1 hover:rounded-full transition-all duration-300 text-lg lg:text-xl font-medium`}
              >
                Project
              </Link>
              <Link
                href="/blogs"
                className={`${
                  pathname === "/blogs"
                    ? "text-primary bg-gradient-to-r from-primary/10 to-transparent px-3 py-1 rounded-full"
                    : "text-primary/80"
                } hover:text-primary hover:bg-gradient-to-r hover:from-primary/5 hover:to-transparent hover:px-3 hover:py-1 hover:rounded-full transition-all duration-300 text-lg lg:text-xl font-medium`}
              >
                Blogs
              </Link>
              <Link
                href="/about-us"
                className={`${
                  pathname === "/about-us"
                    ? "text-primary bg-gradient-to-r from-primary/10 to-transparent px-3 py-1 rounded-full"
                    : "text-primary/80"
                } hover:text-primary hover:bg-gradient-to-r hover:from-primary/5 hover:to-transparent hover:px-3 hover:py-1 hover:rounded-full transition-all duration-300 text-lg lg:text-xl font-medium`}
              >
                About
              </Link>
            </div>

            {/* Contact Button */}
            <div className="hidden lg:block relative group">
              {/* Animated gradient border */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary via-purple-500 to-[#22229e] rounded-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-gradient-xy blur-sm"></div>

              {/* Button */}
              <Link
                href="/contact"
                className="relative bg-gradient-to-r from-primary to-[#22229e] hover:from-primary/90 hover:to-primary/70 text-white px-4 lg:px-6 py-2 rounded-[20px] text-sm lg:text-xl font-medium transition-all duration-300 shadow-lg hover:shadow-xl transform  block"
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

      {/* Mobile Menu Panel */}
      <div
        ref={menuRef}
        className={`fixed top-0 right-0 h-full w-80 max-w-full bg-gradient-to-b from-primary/90 to-primary/70 backdrop-blur-lg border-l border-white/20 transform transition-transform duration-300 ease-out lg:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
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
        {/* Close Button */}
        <div className="absolute top-6 right-6">
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="w-10 h-10 text-white hover:text-primary transition-colors flex items-center justify-center rounded-full hover:bg-white/10 cursor-pointer"
            aria-label="Close mobile menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="flex flex-col h-full pt-20 px-6">
          {/* Mobile Navigation Links */}
          <div className="flex flex-col space-y-6">
            <Link
              href="/services"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`${
                pathname === "/services" ? "text-primary" : "text-white/80"
              } hover:text-white font-medium transition-colors text-xl py-2 font-anek`}
            >
              Services
            </Link>
            <Link
              href="/project"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`${
                pathname === "/project" ? "text-primary" : "text-white/80"
              } hover:text-white font-medium transition-colors text-xl py-2 font-anek`}
            >
              Project
            </Link>
            {/* <Link
              href="/media"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`${
                pathname === "/media" ? "text-primary" : "text-white/80"
              } hover:text-white font-semibold transition-colors text-xl py-2 font-anek`}
            >
              Media
            </Link> */}
            {/* <Link
              href="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`${
                pathname === "/contact" ? "text-primary" : "text-white/80"
              } hover:text-white font-semibold transition-colors text-xl py-2 font-anek`}
            >
              Contact
            </Link> */}
            <Link
              href="/about-us"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`${
                pathname === "/about-us" ? "text-primary" : "text-white/80"
              } hover:text-white font-medium transition-colors text-xl py-2 font-anek`}
            >
              About
            </Link>
            <Link
              href="/blogs"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`${
                pathname === "/blogs" ? "text-primary" : "text-white/80"
              } hover:text-white font-medium transition-colors text-xl py-2 font-anek`}
            >
              Blogs
            </Link>
          </div>

          {/* Mobile Search Bar */}
          <div className="mt-8 mb-6">
            <ExpandableSearchBar
              onSearch={(query) => {
                handleSearch(query);
                setIsMobileMenuOpen(false); // Close mobile menu after search
              }}
              placeholder="Search..."
              suggestions={searchSuggestions}
              iconColor="text-white/80"
              hoverIconColor="hover:text-white"
              className="w-full"
            />
          </div>

          {/* Mobile Language Selector */}
          {/* <div className="mt-8 mb-4">
            <div className="flex items-center space-x-3 px-3 py-2 bg-white/10 rounded-lg">
              <Image
                src="https://flagcdn.com/w40/us.png"
                alt="English"
                width={24}
                height={16}
                className="rounded-sm"
              />
              <span className="text-white/90 text-base font-medium">
                English
              </span>
            </div>
          </div> */}

          {/* Mobile Contact Button */}
          <div>
            <Link
              href="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-44 h-10 px-5 py-3 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 rounded-[30px] inline-flex justify-center items-center gap-2.5 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <span className="text-white text-base font-medium">Contact</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
