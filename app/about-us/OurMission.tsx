import Image from "next/image";

const OurMission = () => {
  return (
    <div className="bg-white py-16 md:py-24">
      <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-16">
        <div className="relative flex flex-col lg:flex-row items-center">
          {/* Image Section - Left side */}
          <div
            className="w-full lg:w-[60%] relative z-10 h-full"
            data-aos="fade-right"
          >
            <div className="relative w-full h-full aspect-[4/3] overflow-hidden">
              <Image
                src="/about-us/our-mission.png"
                alt="Our Mission - Construction Worker"
                height={800}
                width={800}
                className="object-cover"
              />
            </div>
          </div>

          {/* Content Card - Overlapping on the right */}
          <div
            className="w-full lg:w-[50%] lg:-ml-[15%] relative z-20 mt-8 lg:mt-0"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <div className="bg-white/90 p-8 lg:p-12 rounded-[30px] shadow-xl outline-1 outline-offset-[-1px] outline-primary">
              <div className="flex flex-col gap-6">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary">
                  Our mission and Vision
                </h2>

                <div className="text-black text-sm sm:text-base space-y-4 leading-snug tracking-tight text-shadow-2xs">
                  <p>
                    <span className="text-primary font-bold">Mission</span>{" "}
                    <br />
                    To deliver accurate, impartial, and timely certification
                    services that ensure compliance with Australian legislation,
                    promote public safety, and support sustainable development.
                  </p>

                  <p>
                    <span className="text-primary font-bold">Vision</span>{" "}
                    <br /> To be a trusted leader in certification services
                    across Australia, recognised for integrity, technical
                    excellence, and commitment to regulatory best practice.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurMission;
