"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import { Download } from "lucide-react";

const AboutUsSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out",
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <div className="bg-white py-16 md:py-24">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-10 xl:px-16">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          {/* Left Content Section */}
          <div
            className="w-full lg:w-[570px] flex flex-col gap-7"
            data-aos="fade-right"
          >
            {/* <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
              <span className="text-stone-900">
                Building a Brighter Future: Our Commitment to{" "}
              </span>
              <span className="text-red-900">Construction</span>
              <span className="text-stone-900"> Excellence</span>
            </h2> */}

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-pink-950">
              Excellence in Engineering
            </h2>
            <p className="text-justify text-stone-600 text-base sm:text-lg lg:text-2xl font-normal leading-7 sm:leading-8 lg:leading-9">
              At Majoka, our commitment to excellence extends beyond technical
              expertise to encompass exceptional customer service and unwavering
              integrity. When you choose Majoka, you’re choosing a trusted ally
              dedicated to the success of your project and the safety of your
              community
            </p>

            {/* Download Button */}
            {/* <button
              className="mt-4 h-12 sm:h-14 px-6 sm:px-10 py-3 bg-pink-950 rounded-[30px] inline-flex justify-center items-center gap-3 hover:bg-pink-900 transition-colors cursor-pointer w-full sm:w-auto"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <span className="text-indigo-50 text-base sm:text-lg lg:text-xl font-bold leading-loose">
                Download Company Profile
              </span>
              <Download className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-50" />
            </button> */}
          </div>

          {/* Right Images Section */}
          <div
            className="w-full lg:flex-1 flex justify-center"
            data-aos="fade-left"
          >
            <div className="grid grid-cols-2 gap-3 sm:gap-5 max-w-[600px] w-full">
              {/* Column 1 */}
              <div className="flex flex-col gap-3 sm:gap-5">
                {/* Expert Team Card */}
                <div
                  className="w-full aspect-square rounded-[20px] outline outline-1 outline-offset-[-1px] outline-sky-300/50 flex flex-col justify-center items-center p-4 relative overflow-hidden"
                  data-aos="zoom-in"
                  data-aos-delay="100"
                >
                  {/* Background Image */}
                  <Image
                    src="/about-us/1.png"
                    alt="Expert Team Background"
                    fill
                    className="object-cover"
                  />

                  {/* Dark Overlay */}
                  <div className="absolute inset-0 bg-black/10"></div>

                  {/* Content */}
                  {/* <div className="flex flex-col justify-center items-center gap-2 sm:gap-3 relative z-10">
                    <div className="text-center text-stone-400 text-sm sm:text-base lg:text-xl font-bold leading-tight">
                      Expert Team
                    </div>
                    <div className="text-center text-blue-50 text-xs sm:text-sm lg:text-base font-bold leading-none">
                      100% Expert Team
                    </div>
                  </div> */}
                </div>

                {/* Image 1 */}
                <div
                  className="w-full aspect-square rounded-tl rounded-tr rounded-bl-[50px] sm:rounded-bl-[100px] rounded-br border border-sky-300/50 overflow-hidden relative"
                  data-aos="zoom-in"
                  data-aos-delay="200"
                >
                  <Image
                    src="/about-us/about-us-4.png"
                    alt="About Us"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Column 2 */}
              <div className="flex flex-col gap-3 sm:gap-5">
                {/* Image 2 */}
                <div
                  className="w-full aspect-square rounded-tl rounded-tr-[50px] sm:rounded-tr-[100px] rounded-bl rounded-br border border-sky-300/50 overflow-hidden relative"
                  data-aos="zoom-in"
                  data-aos-delay="300"
                >
                  <Image
                    src="/about-us/about-us-2.png"
                    alt="About Us"
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Certified Company Card */}
                <div
                  className="w-full aspect-square bg-black/60 rounded-[20px] outline outline-1 outline-offset-[-1px] outline-sky-300/50 flex flex-col justify-center items-center p-4"
                  data-aos="zoom-in"
                  data-aos-delay="400"
                >
                  <Image
                    src="/about-us/2.png"
                    alt="Expert Team Background"
                    fill
                    className="object-cover"
                  />
                  {/* Dark Overlay */}
                  <div className="absolute inset-0 bg-black/10"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsSection;
