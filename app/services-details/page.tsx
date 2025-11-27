"use client";
import { useState, useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import CommonHeader from "@/components/Common/CommonHeader";
import MeetOurTeam from "@/components/Common/MeetOurTeam";
import ClientTestimonials from "@/components/ClientTestimonials";
import Question from "@/components/Question";

interface Service {
  id: number;
  name: string;
  title: string;
  description: string;
  highlights: string[];
  services: string[];
}

const ServicesContent = () => {
  const [activeService, setActiveService] = useState(1);
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });

    // Get service ID from URL parameters
    const serviceId = searchParams.get("service");
    if (serviceId) {
      const id = parseInt(serviceId);
      if (id >= 1 && id <= 6) {
        setActiveService(id);
      }
    }
  }, [searchParams]);

  const servicesData: Service[] = [
    {
      id: 1,
      name: "Contracting",
      title: "Contracting",
      description:
        "Majoka Engineering provides extensive contracting services, executing top-notch construction and infrastructure projects across industrial, commercial, and residential sectors. Our expert engineers and project managers ensure accuracy, dependability, and compliance with safety regulations—fulfilling every client's vision on time and within budget.",
      highlights: [
        "Expert Construction: Roads, bridges, and high-rise buildings built with precision.",
        "Green Innovations: Using eco-friendly materials and sustainable practices.",
        "Smart Infrastructure: Integrating advanced technologies for safer, efficient cities.",
      ],
      services: [
        "Civil Work",
        "Electrical Work",
        "Mechanical Work",
        "Surveying",
        "Scaffolding Services",
        "Scaffolding Rental",
        "Manpower Supply Services",
        "Equipment Rental",
      ],
    },
    {
      id: 2,
      name: "Testing",
      title: "Testing",
      description:
        "Majoka Testing Division ensures that all materials, structures, and components meet the highest international quality standards. Our advanced testing facilities and expert technicians help identify potential issues before they become costly problems.",
      highlights: [
        "Material Testing: Concrete, steel, and soil strength verification.",
        "Non-Destructive Testing (NDT): Ensuring durability without damaging structures.",
        "Quality Assurance: Strict adherence to ISO and ASTM standards.",
      ],
      services: [
        "Concrete & Soil Testing",
        "Steel Quality Tests",
        "Welding Inspection",
        "NDT Services",
      ],
    },
    {
      id: 3,
      name: "Calibration",
      title: "Calibration",
      description:
        "Majoka Calibration Services provides accurate calibration for industrial and laboratory equipment. With our certified experts and modern tools, we help businesses maintain precision, reliability, and compliance with regulatory standards.",
      highlights: [
        "Precision Calibration: For electrical, mechanical, and pressure instruments.",
        "Certified Procedures: ISO/IEC 17025-compliant calibration.",
        "Regular Maintenance: Scheduled calibration programs to ensure accuracy.",
      ],
      services: [
        "Pressure Gauge Calibration",
        "Electrical Instrument Calibration",
        "Temperature & Humidity Calibration",
        "Flow & Dimensional Calibration",
      ],
    },
    {
      id: 4,
      name: "Inspection",
      title: "Inspection",
      description:
        "Majoka Inspection Services specializes in technical inspection and quality assurance across various industries. We ensure every project meets safety, performance, and compliance requirements through detailed assessments and expert reports.",
      highlights: [
        "Comprehensive Inspections: From construction sites to industrial plants.",
        "Safety Compliance: Adhering to local and international regulations.",
        "Advanced Tools: Modern inspection technology for precise results.",
      ],
      services: [
        "Structural Inspection",
        "Welding & Pipeline Inspection",
        "Safety Audit & Compliance",
        "Equipment Inspection",
      ],
    },
    {
      id: 5,
      name: "Trading",
      title: "Trading",
      description:
        "Majoka Trading Division supplies high-quality materials and equipment that meet international standards. We maintain long-term relationships with trusted suppliers to ensure timely delivery and reliability in every order.",
      highlights: [
        "Premium Quality Materials: Certified and durable.",
        "Wide Range: Electrical, mechanical, and civil construction materials.",
        "On-Time Supply: Efficient logistics across all regions.",
      ],
      services: [
        "Construction Materials",
        "Safety Equipment",
        "Electrical & Mechanical Components",
        "Tools and Hardware",
      ],
    },
    {
      id: 6,
      name: "Hotel",
      title: "Hotel",
      description:
        "Majoka Hotel & Hospitality offers a relaxing environment with top-notch service, designed to make every guest's stay memorable. From luxurious rooms to fine dining and business facilities, we combine comfort with convenience for both leisure and corporate travelers.",
      highlights: [
        "Modern Facilities: Stylish rooms, Wi-Fi, and 24/7 support.",
        "Exceptional Service: Professional staff ensuring comfort and care.",
        "Prime Location: Easy access to business and tourist hubs.",
      ],
      services: [
        "Room Booking & Event Hosting",
        "Corporate Packages",
        "Dining & Catering Services",
      ],
    },
  ];

  const currentService = servicesData.find((s) => s.id === activeService);

  return (
    <>
      <CommonHeader
        title={currentService?.title || "Services"}
        breadcrumb={`Services / ${currentService?.name || "Service Details"}`}
        imagePath="/about-us/about-us-1.png"
      />
      <div className="w-full min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-10 xl:px-16">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            {/* Sidebar */}
            <div className="w-full lg:w-96 flex flex-col gap-6">
              {/* Service Categories */}
              <div
                className="bg-white rounded-3xl shadow-[0px_0px_6px_0px_rgba(0,0,0,0.15)] overflow-hidden"
                data-aos="fade-right"
              >
                <div className="p-6 bg-stone-900 rounded-tl-3xl rounded-tr-3xl">
                  <h2 className="text-white text-xl sm:text-2xl font-bold leading-7">
                    Service Category
                  </h2>
                </div>
                <div className="p-4 pb-2">
                  {servicesData.map((service) => (
                    <button
                      key={service.id}
                      onClick={() => setActiveService(service.id)}
                      className={`w-full px-4 py-5 flex justify-between items-center transition-all duration-300 mb-2 rounded-2xl outline outline-1 outline-offset-[-1px] outline-pink-950 cursor-pointer ${
                        activeService === service.id
                          ? "bg-pink-950"
                          : "hover:bg-pink-950/10"
                      }`}
                    >
                      <span
                        className={`text-lg leading-7 ${
                          activeService === service.id
                            ? "text-white font-bold"
                            : "text-stone-900 font-medium"
                        }`}
                      >
                        0{service.id}. {service.name}
                      </span>
                      <div
                        className={`w-8 h-8 rounded-full flex justify-center items-center transition-all duration-300 flex-shrink-0 ${
                          activeService === service.id
                            ? "bg-gray-200"
                            : "bg-pink-950"
                        }`}
                      >
                        <span
                          className={`text-lg font-medium leading-7 ${
                            activeService === service.id
                              ? "text-pink-950"
                              : "text-gray-200"
                          }`}
                        >
                          ➜
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Explore Documents */}
              <div
                className="bg-gray-200 rounded-3xl shadow-[0px_0px_6px_0px_rgba(0,0,0,0.15)] p-6"
                data-aos="fade-right"
                data-aos-delay="200"
              >
                <div className="flex flex-col items-center gap-10">
                  <div className="flex flex-col items-center gap-4">
                    <div className="p-3 bg-pink-950 rounded-2xl">
                      <div className="w-9 h-9 relative">
                        <Image
                          src="/csv/csv.svg"
                          alt="PDF Icon"
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                    <h3 className="text-stone-900 text-xl font-bold text-center">
                      Explore Our Documents
                    </h3>
                  </div>
                  <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6">
                    <button className="px-4 py-2 bg-pink-950 rounded-[50px] shadow-[2px_3px_4px_0px_rgba(0,0,0,0.15)] outline outline-1 outline-offset-[-1px] outline-pink-950 hover:bg-pink-900 transition-colors duration-300 cursor-pointer">
                      <span className="text-white text-base font-bold leading-normal">
                        Download PDF
                      </span>
                    </button>
                    <button className="px-4 py-2 bg-white rounded-[50px] shadow-[2px_3px_4px_0px_rgba(0,0,0,0.15)] outline outline-1 outline-offset-[-1px] outline-pink-950 hover:bg-pink-950 transition-all duration-300 group cursor-pointer">
                      <span className="text-pink-950 text-base font-bold leading-normal group-hover:text-white">
                        Preview PDF
                      </span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Contact Card */}
              <div
                className="bg-gray-200 rounded-3xl shadow-[0px_0px_6px_0px_rgba(0,0,0,0.15)] p-6"
                data-aos="fade-right"
                data-aos-delay="300"
              >
                <div className="flex flex-col items-center gap-6">
                  <div className="p-3 bg-pink-950 rounded-2xl">
                    <div className="w-9 h-9 relative">
                      <Image
                        src="/csv/SVG.svg"
                        alt="Contact Icon"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <p className="text-black text-base font-bold text-center">
                    We are always available to discuss with you
                  </p>
                  <a
                    href="mailto:info@majokaengineering.com"
                    className="text-black text-lg font-medium hover:text-pink-950 transition-colors duration-300 break-all text-center"
                  >
                    info@majokaengineering.com
                  </a>
                  <button
                    className="px-6 py-3 bg-pink-950 rounded-[50px] shadow-[2px_3px_4px_0px_rgba(0,0,0,0.15)] outline outline-1 outline-offset-[-1px] outline-pink-950 hover:bg-pink-900 transition-all duration-300 flex items-center gap-3 cursor-pointer"
                    onClick={() => router.push("/contact")}
                  >
                    <span className="text-white text-base font-bold leading-normal">
                      Contact Us
                    </span>
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 flex flex-col gap-8">
              {/* Hero Image */}
              <div
                className="w-full h-64 sm:h-80 md:h-96 lg:h-[500px] 2xl:h-[600px] rounded-[40px] overflow-hidden relative"
                data-aos="fade-left"
              >
                <Image
                  fill
                  className="w-full h-full object-cover"
                  src={`/Cetagory/${currentService?.name}.png`}
                  alt={currentService?.title || "Service"}
                />
              </div>

              {/* Service Title */}
              <h1
                className="text-stone-900 text-3xl sm:text-4xl font-bold"
                data-aos="fade-up"
              >
                {currentService?.title}
              </h1>

              {/* Service Description */}
              <div
                className="bg-gray-200/50 rounded-[20px] shadow-[0px_0px_8px_0px_rgba(0,0,0,0.12)] px-6 sm:px-8 py-6"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <p className="text-stone-900/80 text-lg sm:text-xl lg:text-2xl font-normal text-justify mb-6">
                  {currentService?.description}
                </p>
                <div className="flex flex-col gap-4">
                  {currentService?.highlights.map((highlight, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3"
                      data-aos="fade-right"
                      data-aos-delay={index * 100}
                    >
                      <div className="w-6 h-6 bg-green-600 rounded-full flex-shrink-0 mt-1 flex items-center justify-center">
                        <svg
                          className="w-4 h-4 text-white"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                      <p className="text-stone-900 text-lg sm:text-xl font-medium flex-1">
                        {highlight}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Services List */}
              <div data-aos="fade-up" data-aos-delay="200">
                <h2 className="text-stone-900 text-3xl sm:text-4xl font-medium mb-6">
                  Services
                </h2>
                <div className="bg-gray-200/50 rounded-[20px] shadow-[0px_0px_8px_0px_rgba(0,0,0,0.12)] px-6 sm:px-8 py-6">
                  <div className="flex flex-col gap-4">
                    {currentService?.services.map((service, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-3"
                        data-aos="fade-left"
                        data-aos-delay={index * 50}
                      >
                        <div className="w-6 h-6 bg-green-600 rounded-full flex-shrink-0 mt-1 flex items-center justify-center">
                          <svg
                            className="w-4 h-4 text-white"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path d="M5 13l4 4L19 7"></path>
                          </svg>
                        </div>
                        <p className="text-stone-900 text-lg sm:text-xl font-medium flex-1">
                          {service}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Question />
      <MeetOurTeam />
      <ClientTestimonials />
    </>
  );
};

const Services = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ServicesContent />
    </Suspense>
  );
};

export default Services;
