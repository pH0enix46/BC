"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { Settings, FolderOpen, FileText, Users } from "lucide-react";
import NormalButton from "./AnimatedButton";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const buttonRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const viewportHeight = window.innerHeight;
      const scrollThreshold = viewportHeight * 0.2; // 20vh

      setIsScrolled(scrollTop > scrollThreshold);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth < 1000);
    };

    // Initial check
    handleResize();

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {/* Top Navbar - Always present with logo and button */}
      <nav
        className="fixed top-2 left-0 right-0 transition-all duration-300 py-4"
        style={{ zIndex: 99999 }}
      >
        <div className="max-w-[1400px] mx-auto px-3 sm:px-4 lg:px-6 xl:px-8">
          <div
            className={`flex items-center transition-all duration-500 ${
              isScrolled ? "justify-between" : "justify-between"
            }`}
          >
            {/* Logo - Left Side */}
            <div
              className={`flex-shrink-0 transition-all duration-1000 ease-out transform ${
                isScrolled ? "opacity-0" : "opacity-100"
              }`}
            >
              <Link href="/">
                <Image
                  src="/Essence-logo.png"
                  alt="Company Logo"
                  width={160}
                  height={60}
                  className="h-14 sm:h-16 w-auto"
                />
              </Link>
            </div>

            {/* Navigation Links - Center with Rounded Box - Only show on desktop */}
            {!isMobile && (
              <div
                className={`flex items-center justify-center transition-all duration-500 ${
                  isScrolled ? "flex-none" : "flex-1 mx-8"
                }`}
              >
                <div className="bg-gradient-to-r from-gray-50 to-gray-50 backdrop-blur-md rounded-full px-8 py-0 shadow border border-gray-200/30 outline-2 outline-offset-1 outline-gray-300">
                  <div className="flex items-center space-x-6 xl:space-x-8 my-1">
                    <Link
                      href="/services"
                      className={`${
                        pathname === "/services"
                          ? "text-primary bg-gradient-to-r from-primary/10 to-transparent"
                          : "text-primary/80"
                      } hover:text-primary hover:bg-gradient-to-r hover:from-primary/20 hover:to-transparent px-3 py-1 rounded-full transition-all duration-300 text-xl font-medium`}
                    >
                      Services
                    </Link>
                    <Link
                      href="/project"
                      className={`${
                        pathname === "/project"
                          ? "text-primary bg-gradient-to-r from-primary/10 to-transparent"
                          : "text-primary/80"
                      } hover:text-primary hover:bg-gradient-to-r hover:from-primary/20 hover:to-transparent px-3 py-1 rounded-full transition-all duration-300 text-xl font-medium`}
                    >
                      Project
                    </Link>
                    <Link
                      href="/blogs"
                      className={`${
                        pathname === "/blogs"
                          ? "text-primary bg-gradient-to-r from-primary/10 to-transparent"
                          : "text-primary/80"
                      } hover:text-primary hover:bg-gradient-to-r hover:from-primary/20 hover:to-transparent px-3 py-1 rounded-full transition-all duration-300 text-xl font-medium`}
                    >
                      Blogs
                    </Link>
                    <Link
                      href="/about-us"
                      className={`${
                        pathname === "/about-us"
                          ? "text-primary bg-gradient-to-r from-primary/10 to-transparent"
                          : "text-primary/80"
                      } hover:text-primary hover:bg-gradient-to-r hover:from-primary/20 hover:to-transparent px-3 py-1 rounded-full transition-all duration-300 text-xl font-medium`}
                    >
                      About
                    </Link>
                  </div>
                </div>
              </div>
            )}

            {/* Contact Button - Right Side */}
            <div
              ref={buttonRef}
              className={`relative group flex-shrink-0 transition-opacity duration-1000 ease-out ${
                isScrolled ? "opacity-0" : "opacity-100"
              }`}
            >
              <a href="/contact">
                <NormalButton>Get Quote</NormalButton>
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Bottom Navigation - Only show on mobile */}
      {isMobile && (
        <nav
          className="fixed -bottom-1 left-0 right-0 transition-all duration-500 py-4"
          style={{ zIndex: 99999 }}
        >
          <div className="max-w-[1400px] mx-auto px-3 sm:px-4 lg:px-6 xl:px-8">
            <div className="flex items-center justify-center">
              <div className="bg-gradient-to-r from-gray-50 to-gray-50 backdrop-blur-md rounded-full px-10 py-1 shadow border border-gray-200/30 outline-2 outline-offset-1 outline-gray-300">
                <div className="flex items-center space-x-6 xl:space-x-8">
                  <Link
                    href="/services"
                    className={`${
                      pathname === "/services"
                        ? "text-primary bg-gradient-to-r from-primary/10 to-transparent"
                        : "text-primary/80"
                    } hover:text-primary hover:bg-gradient-to-r hover:from-primary/20 hover:to-transparent px-3 py-2 rounded-full transition-all duration-300 text-sm font-medium flex flex-col items-center gap-1`}
                  >
                    <Settings className="w-7 h-7" />
                  </Link>
                  <Link
                    href="/project"
                    className={`${
                      pathname === "/project"
                        ? "text-primary bg-gradient-to-r from-primary/10 to-transparent"
                        : "text-primary/80"
                    } hover:text-primary hover:bg-gradient-to-r hover:from-primary/20 hover:to-transparent px-3 py-2 rounded-full transition-all duration-300 text-sm font-medium flex flex-col items-center gap-1`}
                  >
                    <FolderOpen className="w-7 h-7" />
                  </Link>
                  <Link
                    href="/blogs"
                    className={`${
                      pathname === "/blogs"
                        ? "text-primary bg-gradient-to-r from-primary/10 to-transparent"
                        : "text-primary/80"
                    } hover:text-primary hover:bg-gradient-to-r hover:from-primary/20 hover:to-transparent px-3 py-2 rounded-full transition-all duration-300 text-sm font-medium flex flex-col items-center gap-1`}
                  >
                    <FileText className="w-7 h-7" />
                  </Link>
                  <Link
                    href="/about-us"
                    className={`${
                      pathname === "/about-us"
                        ? "text-primary bg-gradient-to-r from-primary/10 to-transparent"
                        : "text-primary/80"
                    } hover:text-primary hover:bg-gradient-to-r hover:from-primary/20 hover:to-transparent px-3 py-2 rounded-full transition-all duration-300 text-sm font-medium flex flex-col items-center gap-1`}
                  >
                    <Users className="w-7 h-7" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
      )}
    </>
  );
};

export default Navbar;
