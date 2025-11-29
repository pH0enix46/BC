"use client";
import React, { useState } from "react";
import { Mail, Phone, MapPin, ChevronDown } from "lucide-react";
import toast, { Toaster } from "react-hot-toast";
import Image from "next/image";

interface FormData {
  fullName: string;
  phone: string;
  email: string;
  service: string;
  message: string;
  plans: File | null;
  daConsent: File | null;
}

const GetStarted = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    phone: "",
    email: "",
    service: "",
    message: "",
    plans: null,
    daConsent: null,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const services = [
    "Contracting",
    "Testing",
    "Calibration",
    "Inspection",
    "Trading",
    "Hotel",
  ];

  const handleServiceSelect = (service: string) => {
    setFormData({ ...formData, service });
    setIsDropdownOpen(false);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    fieldName: "plans" | "daConsent"
  ) => {
    const file = e.target.files?.[0] || null;
    setFormData({ ...formData, [fieldName]: file });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validation
    if (!formData.service) {
      toast.error("Please select a service", {
        duration: 3000,
        style: {
          background: "#ef4444",
          color: "#fff",
          padding: "16px",
          borderRadius: "8px",
        },
        iconTheme: {
          primary: "#fff",
          secondary: "#ef4444",
        },
      });
      setIsSubmitting(false);
      return;
    }

    // Show loading toast
    const loadingToast = toast.loading("Sending your message...");

    try {
      // Map formData to match API expectations
      const apiData = {
        fullName: formData.fullName,
        phone: formData.phone,
        email: formData.email,
        description: formData.service, // Service goes to description field
        message: formData.message,
      };

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(apiData),
      });

      const data = await response.json();

      // Dismiss loading toast
      toast.dismiss(loadingToast);

      if (response.ok) {
        // Show success toast
        toast.success(
          "Thank you! Your message has been sent successfully. We'll get back to you soon.",
          {
            duration: 5000,
            style: {
              background: "#10b981",
              color: "#fff",
              padding: "16px",
              borderRadius: "8px",
            },
            iconTheme: {
              primary: "#fff",
              secondary: "#10b981",
            },
          }
        );

        // Reset form
        setFormData({
          fullName: "",
          phone: "",
          email: "",
          service: "",
          message: "",
          plans: null,
          daConsent: null,
        });
      } else {
        // Show error toast
        toast.error(data.error || "Failed to send message. Please try again.", {
          duration: 4000,
          style: {
            background: "#ef4444",
            color: "#fff",
            padding: "16px",
            borderRadius: "8px",
          },
          iconTheme: {
            primary: "#fff",
            secondary: "#ef4444",
          },
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);

      // Dismiss loading toast
      toast.dismiss(loadingToast);

      // Show error toast
      toast.error("An error occurred. Please try again later.", {
        duration: 4000,
        style: {
          background: "#ef4444",
          color: "#fff",
          padding: "16px",
          borderRadius: "8px",
        },
        iconTheme: {
          primary: "#fff",
          secondary: "#ef4444",
        },
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Toast Container */}
      <Toaster
        position="top-right"
        reverseOrder={false}
        gutter={8}
        toastOptions={{
          duration: 4000,
          style: {
            fontSize: "14px",
            maxWidth: "500px",
          },
        }}
      />

      <div className="relative w-full min-h-[676px] overflow-hidden bg-white">
        <div className="max-w-8xl mx-auto px-2 lg:px-20 py-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 tracking-[-0.4px] text-center">
            Ready To Get Started?{" "}
            <span className="text-primary">Contact Us</span> Today!
          </h2>

          {/* Content */}
          <div className="relative z-10 flex flex-col lg:flex-row justify-between items-start gap-12 border border-primary/20 shadow p-4 md:p-6 py-10 rounded-xl">
            {/* Left Content - Image */}
            <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
              <div className="relative h-[600px] lg:h-[720px] rounded-[20px] overflow-hidden shadow outline-2 outline-offset-2 outline-primary/30">
                <Image
                  src="/get-start.jpeg"
                  alt="Get Started"
                  fill
                  className="object-cover shadow hover:scale-105 transition-all duration-300"
                />
              </div>
            </div>

            {/* Right Content - Contact Info and Form */}
            <div className="w-full lg:w-1/2 flex flex-col">
              {/* Contact Information - Horizontal Layout */}
              <div className="mb-8">
                <div className="flex flex-wrap justify-center lg:justify-around gap-6 mb-8">
                  {/* Email */}
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex flex-col">
                      <h4 className="text-sm lg:text-xl font-medium text-gray-600">
                        Email
                      </h4>
                      <a
                        href="mailto:info@majokaengineering.com"
                        className="text-sm lg:text-[15px] font-medium text-primary hover:underline"
                      >
                        info@majokaengineering.com
                      </a>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex flex-col">
                      <h4 className="text-sm lg:text-xl font-medium text-gray-600">
                        Phone
                      </h4>
                      <a
                        href="tel:+9660503010184"
                        className="text-sm lg:text-[15px] font-medium text-primary hover:underline"
                      >
                        +966-0503010184
                      </a>
                    </div>
                  </div>

                  {/* Office */}
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex flex-col">
                      <h4 className="text-sm lg:text-xl font-medium text-gray-600">
                        Office
                      </h4>
                      <p className="text-sm lg:text-[15px] font-medium text-primary">
                        Mecca, Saudi Arabia
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-gray-50 rounded-[20px] p-8 border border-gray-200">
                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col space-y-10"
                >
                  <div className="flex flex-col space-y-6">
                    {/* Name Input */}
                    <div className="relative">
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField("fullName")}
                        onBlur={() => setFocusedField(null)}
                        placeholder=" "
                        required
                        disabled={isSubmitting}
                        className="w-full h-[50px] px-4 py-3 bg-white border border-gray-300 rounded-xl text-gray-900 text-lg font-normal font-['Anek_Malayalam'] focus:outline-none focus:border-primary transition-all peer placeholder-transparent disabled:opacity-50 disabled:cursor-not-allowed"
                      />
                      <label
                        className={`absolute left-3 top-0 px-1 transition-all duration-200 pointer-events-none font-['Anek_Malayalam'] ${
                          formData.fullName || focusedField === "fullName"
                            ? "-translate-y-1/2 text-xs text-primary bg-white rounded"
                            : "translate-y-3 text-lg text-gray-500 bg-transparent"
                        }`}
                      >
                        Name
                      </label>
                    </div>

                    {/* Phone Input */}
                    <div className="relative">
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField("phone")}
                        onBlur={() => setFocusedField(null)}
                        placeholder=" "
                        required
                        disabled={isSubmitting}
                        className="w-full h-[50px] px-4 py-3 bg-white border border-gray-300 rounded-xl text-gray-900 text-lg font-normal font-['Anek_Malayalam'] focus:outline-none focus:border-primary transition-all peer placeholder-transparent disabled:opacity-50 disabled:cursor-not-allowed"
                      />
                      <label
                        className={`absolute left-3 top-0 px-1 transition-all duration-200 pointer-events-none font-['Anek_Malayalam'] ${
                          formData.phone || focusedField === "phone"
                            ? "-translate-y-1/2 text-xs text-primary bg-white rounded"
                            : "translate-y-3 text-lg text-gray-500 bg-transparent"
                        }`}
                      >
                        Phone Number
                      </label>
                    </div>

                    {/* Email Input */}
                    <div className="relative">
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField("email")}
                        onBlur={() => setFocusedField(null)}
                        placeholder=" "
                        required
                        disabled={isSubmitting}
                        className="w-full h-[50px] px-4 py-3 bg-white border border-gray-300 rounded-xl text-gray-900 text-lg font-normal font-['Anek_Malayalam'] focus:outline-none focus:border-primary transition-all peer placeholder-transparent disabled:opacity-50 disabled:cursor-not-allowed"
                      />
                      <label
                        className={`absolute left-3 top-0 px-1 transition-all duration-200 pointer-events-none font-['Anek_Malayalam'] ${
                          formData.email || focusedField === "email"
                            ? "-translate-y-1/2 text-xs text-primary bg-white rounded"
                            : "translate-y-3 text-lg text-gray-500 bg-transparent"
                        }`}
                      >
                        Email Address
                      </label>
                    </div>

                    {/* Services Dropdown */}
                    <div className="relative">
                      <div
                        className={`w-full h-[50px] border border-gray-300 rounded-xl px-4 py-4 flex items-center justify-between bg-white ${
                          isSubmitting
                            ? "opacity-50 cursor-not-allowed"
                            : "cursor-pointer"
                        }`}
                        onClick={() =>
                          !isSubmitting && setIsDropdownOpen(!isDropdownOpen)
                        }
                      >
                        <span className="text-gray-900 text-lg">
                          {formData.service || "Select Service"}
                        </span>
                        <ChevronDown
                          className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${
                            isDropdownOpen ? "rotate-180" : ""
                          }`}
                        />
                      </div>

                      {/* Dropdown Menu */}
                      {isDropdownOpen && !isSubmitting && (
                        <div className="absolute top-full left-0 right-0 mt-1 bg-white/90 backdrop-blur-md border border-gray-300 rounded-xl shadow-lg z-50 max-h-48 overflow-y-auto">
                          {services.map((service, index) => (
                            <div
                              key={index}
                              className="px-4 py-3 text-gray-800 hover:bg-gray-100/50 cursor-pointer transition-colors duration-150 first:rounded-t-xl last:rounded-b-xl"
                              onClick={() => handleServiceSelect(service)}
                            >
                              {service}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Message Input */}
                    <div className="relative">
                      <input
                        type="text"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField("message")}
                        onBlur={() => setFocusedField(null)}
                        placeholder=" "
                        required
                        disabled={isSubmitting}
                        className="w-full h-[50px] px-4 py-3 bg-white border border-gray-300 rounded-xl text-gray-900 text-lg font-normal font-['Anek_Malayalam'] focus:outline-none focus:border-primary transition-all peer placeholder-transparent disabled:opacity-50 disabled:cursor-not-allowed"
                      />
                      <label
                        className={`absolute left-3 top-0 px-1 transition-all duration-200 pointer-events-none font-['Anek_Malayalam'] ${
                          formData.message || focusedField === "message"
                            ? "-translate-y-1/2 text-xs text-primary bg-white rounded"
                            : "translate-y-3 text-lg text-gray-500 bg-transparent"
                        }`}
                      >
                        Message
                      </label>
                    </div>

                    {/* File Uploads Row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* Plans File Upload */}
                      <div className="flex flex-col space-y-1">
                        <label className="text-gray-900 text-base font-semibold">
                          Plans
                        </label>
                        <p className="text-gray-500 text-xs">
                          (20mb max, jpg,gif,png,bmp,pdf)
                        </p>
                        <div className="relative">
                          <input
                            type="file"
                            name="plans"
                            accept=".jpg,.jpeg,.gif,.png,.bmp,.pdf"
                            onChange={(e) => handleFileChange(e, "plans")}
                            disabled={isSubmitting}
                            className="w-full h-[45px] px-3 py-2 bg-white border-2 border-dashed border-gray-300 rounded-xl text-gray-900 text-sm font-normal focus:outline-none focus:border-primary transition-all file:mr-2 file:py-1 file:px-3 file:rounded-full file:border-0 file:text-xs file:font-semibold file:bg-primary file:text-white hover:file:bg-primary/80 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                          />
                          {formData.plans && (
                            <p className="mt-1 text-xs text-gray-600 truncate">
                              {formData.plans.name}
                            </p>
                          )}
                        </div>
                      </div>

                      {/* DA Consent File Upload */}
                      <div className="flex flex-col space-y-1">
                        <label className="text-gray-900 text-base font-semibold">
                          DA Consent
                        </label>
                        <p className="text-gray-500 text-xs">
                          (20mb max, jpg,gif,png,bmp,pdf)
                        </p>
                        <div className="relative">
                          <input
                            type="file"
                            name="daConsent"
                            accept=".jpg,.jpeg,.gif,.png,.bmp,.pdf"
                            onChange={(e) => handleFileChange(e, "daConsent")}
                            disabled={isSubmitting}
                            className="w-full h-[45px] px-3 py-2 bg-white border-2 border-dashed border-gray-300 rounded-xl text-gray-900 text-sm font-normal focus:outline-none focus:border-primary transition-all file:mr-2 file:py-1 file:px-3 file:rounded-full file:border-0 file:text-xs file:font-semibold file:bg-primary file:text-white hover:file:bg-primary/80 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                          />
                          {formData.daConsent && (
                            <p className="mt-1 text-xs text-gray-600 truncate">
                              {formData.daConsent.name}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full h-[50px] bg-primary hover:bg-primary/80 text-white font-bold text-xl rounded-full flex items-center justify-center shadow transition-all duration-300 ${
                      isSubmitting
                        ? "opacity-50 cursor-not-allowed"
                        : "cursor-pointer"
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                        Sending...
                      </>
                    ) : (
                      "Contact Us"
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GetStarted;
