"use client";

import React from "react";
import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  ChevronRight,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-primary via-primary/95 to-primary/90">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

        {/* Animated Floating Orbs */}
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ transform: "translate(50%, -50%)" }}
        />

        <motion.div
          className="absolute bottom-0 left-0 w-80 h-80 bg-white/3 rounded-full blur-3xl"
          animate={{
            x: [0, -40, 0],
            y: [0, 20, 0],
            scale: [1, 0.9, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          style={{ transform: "translate(-50%, 50%)" }}
        />

        {/* Additional Floating Elements */}
        <motion.div
          className="absolute top-1/3 left-1/4 w-32 h-32 bg-white/2 rounded-full blur-2xl"
          animate={{
            x: [0, 30, -20, 0],
            y: [0, -20, 10, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 5,
          }}
        />

        <motion.div
          className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-white/3 rounded-full blur-xl"
          animate={{
            x: [0, -25, 15, 0],
            y: [0, 15, -10, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 8,
          }}
        />

        {/* Subtle Animated Grid Pattern */}
        <motion.div
          className="absolute inset-0 opacity-5"
          animate={{
            opacity: [0.05, 0.08, 0.05],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="relative max-w-8xl mx-auto px-4 sm:px-6 lg:px-16 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Company Info Section - Column 1 */}
          <div className="lg:col-span-1 flex flex-col space-y-8">
            <motion.div
              className="flex items-center mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="p-2 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                <Image
                  src="/Essence-logo.png"
                  alt="Majoka Engineering Logo"
                  width={160}
                  height={80}
                  className="h-auto w-30"
                />
              </div>
            </motion.div>

            <p className="text-white/90 text-base leading-relaxed font-light">
              Delivering innovative and sustainable engineering solutions with
              integrity and excellence.
            </p>

            {/* Social Media Icons */}
            <motion.div
              className="flex items-center gap-4 pt-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href=""
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-12 h-12 bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-full border border-white/20 hover:border-white/40 flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:shadow-white/10"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5 text-white group-hover:text-white transition-colors" />
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.1, rotate: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href=""
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-12 h-12 bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-full border border-white/20 hover:border-white/40 flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:shadow-white/10"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5 text-white group-hover:text-white transition-colors" />
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href=""
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-12 h-12 bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-full border border-white/20 hover:border-white/40 flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:shadow-white/10"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5 text-white group-hover:text-white transition-colors" />
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.1, rotate: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href=""
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-12 h-12 bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-full border border-white/20 hover:border-white/40 flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:shadow-white/10"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5 text-white group-hover:text-white transition-colors" />
                </Link>
              </motion.div>
            </motion.div>
          </div>

          {/* Quick Links - Column 2 */}
          <motion.div
            className="space-y-6 h-full flex flex-col md:ml-8 mt-8 lg:mt-0"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-white text-xl font-bold mb-4 relative">
              Quick Links
              <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-white/40 rounded-full"></div>
            </h3>
            <ul className="space-y-4 flex-grow">
              <li>
                <Link
                  href="/"
                  className="group flex items-center gap-3 text-white/80 text-base hover:text-white transition-all duration-300 hover:translate-x-1"
                >
                  <ChevronRight className="w-4 h-4 flex-shrink-0 group-hover:text-white/60 transition-colors" />
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="group flex items-center gap-3 text-white/80 text-base hover:text-white transition-all duration-300 hover:translate-x-1"
                >
                  <ChevronRight className="w-4 h-4 flex-shrink-0 group-hover:text-white/60 transition-colors" />
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="group flex items-center gap-3 text-white/80 text-base hover:text-white transition-all duration-300 hover:translate-x-1"
                >
                  <ChevronRight className="w-4 h-4 flex-shrink-0 group-hover:text-white/60 transition-colors" />
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="group flex items-center gap-3 text-white/80 text-base hover:text-white transition-all duration-300 hover:translate-x-1"
                >
                  <ChevronRight className="w-4 h-4 flex-shrink-0 group-hover:text-white/60 transition-colors" />
                  Trading
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Resources - Column 3 */}
          <motion.div
            className="space-y-6 h-full flex flex-col md:ml-6 mt-8 lg:mt-0"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-white text-xl font-bold mb-4 relative">
              Resources
              <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-white/40 rounded-full"></div>
            </h3>
            <ul className="space-y-4 flex-grow">
              <li>
                <Link
                  href=""
                  className="group flex items-center gap-3 text-white/80 text-base hover:text-white transition-all duration-300 hover:translate-x-1"
                >
                  <ChevronRight className="w-4 h-4 flex-shrink-0 group-hover:text-white/60 transition-colors" />
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href=""
                  className="group flex items-center gap-3 text-white/80 text-base hover:text-white transition-all duration-300 hover:translate-x-1"
                >
                  <ChevronRight className="w-4 h-4 flex-shrink-0 group-hover:text-white/60 transition-colors" />
                  Career
                </Link>
              </li>
              <li>
                <Link
                  href=""
                  className="group flex items-center gap-3 text-white/80 text-base hover:text-white transition-all duration-300 hover:translate-x-1"
                >
                  <ChevronRight className="w-4 h-4 flex-shrink-0 group-hover:text-white/60 transition-colors" />
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  href=""
                  className="group flex items-center gap-3 text-white/80 text-base hover:text-white transition-all duration-300 hover:translate-x-1"
                >
                  <ChevronRight className="w-4 h-4 flex-shrink-0 group-hover:text-white/60 transition-colors" />
                  Project
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Services - Column 4 */}
          <motion.div
            className="space-y-6 h-full flex flex-col md:ml-2 mt-8 lg:mt-0"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-white text-xl font-bold mb-4 relative">
              Services
              <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-white/40 rounded-full"></div>
            </h3>
            <ul className="space-y-4 flex-grow">
              <li>
                <Link
                  href=""
                  className="group flex items-center gap-3 text-white/80 text-base hover:text-white transition-all duration-300 hover:translate-x-1"
                >
                  <ChevronRight className="w-4 h-4 flex-shrink-0 group-hover:text-white/60 transition-colors" />
                  Contracting
                </Link>
              </li>
              <li>
                <Link
                  href=""
                  className="group flex items-center gap-3 text-white/80 text-base hover:text-white transition-all duration-300 hover:translate-x-1"
                >
                  <ChevronRight className="w-4 h-4 flex-shrink-0 group-hover:text-white/60 transition-colors" />
                  Testing
                </Link>
              </li>
              <li>
                <Link
                  href=""
                  className="group flex items-center gap-3 text-white/80 text-base hover:text-white transition-all duration-300 hover:translate-x-1"
                >
                  <ChevronRight className="w-4 h-4 flex-shrink-0 group-hover:text-white/60 transition-colors" />
                  Calibration
                </Link>
              </li>
              <li>
                <Link
                  // href="/services-details?service=4"
                  href=""
                  className="group flex items-center gap-3 text-white/80 text-base hover:text-white transition-all duration-300 hover:translate-x-1"
                >
                  <ChevronRight className="w-4 h-4 flex-shrink-0 group-hover:text-white/60 transition-colors" />
                  Inspection
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Contact Us - Column 5 */}
          <motion.div
            className="space-y-6 h-full flex flex-col md:ml-2 mt-8 lg:mt-0"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-white text-xl font-bold mb-4 relative">
              Contact Us
              <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-white/40 rounded-full"></div>
            </h3>
            <div className="space-y-6 flex-grow">
              <motion.div
                className="flex items-start gap-4 group"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div className="text-white/90 text-base leading-relaxed">
                  <p>Mecca, Saudi Arabia</p>
                </div>
              </motion.div>
              <motion.div
                className="flex items-center gap-4 group"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <Link
                  href="tel:+9660503010184"
                  className="text-white/90 text-base hover:text-white transition-colors"
                >
                  +966-0503010184
                </Link>
              </motion.div>
              <motion.div
                className="flex items-center gap-4 group"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <Link
                  href="mailto:info@majokaengineering.com"
                  className="text-white/90 text-base hover:text-white transition-colors break-all"
                >
                  info@majokaengineering.com
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="relative pb-8 border-t border-white/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 pt-8">
          <div className="flex items-center justify-center">
            {/* Copyright Text */}
            <p className="text-center text-white/90 text-base font-light">
              © 2025 MAJOKA ENGINEERING. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
