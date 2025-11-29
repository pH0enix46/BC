import React from "react";
import Image from "next/image";

export default function WorkSteps() {
  const steps = [
    {
      id: 1,
      title: "Request Fee Proposal",
      description:
        "Upload your plans and relevant documents for a detailed fee proposal from our team.",
      alternative: "Or",
      contact: "Speak to our experienced team on (02) 9639 8809",
    },
    {
      id: 2,
      title: "Start Certification Process",
      description:
        "Submit signed application forms with required documents. We review everything and issue your approval.",
    },
    {
      id: 3,
      title: "Complete Site Inspections",
      description:
        "Notify us 48 hours before inspections. We conduct all mandatory checks and email reports.",
    },
    {
      id: 4,
      title: "Issue Your Certification",
      description:
        "Final inspection completed and all certificates reviewed. Your occupation certificate is then issued.",
    },
  ];

  return (
    <section className="w-full py-28 px-4 md:px-8 lg:px-16">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-10 xl:px-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-4">
            Building Approvals easy{" "}
            <span className="text-primary">four step</span> process
          </h2>
        </div>
        {/* Steps Timeline */}
        <div className="relative">
          {/* Steps Container */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
            {steps.map((step, index) => (
              <div
                key={step.id}
                className="bg-gray-50 rounded-2xl p-6 shadow hover:shadow-lg border border-gray-100 transition-all duration-300 relative"
              >
                {/* Step Content */}
                <div className="text-center mb-4">
                  <div className="flex justify-center mb-4 mt-2">
                    <Image
                      src="/badge.jpeg"
                      alt="Badge"
                      width={60}
                      height={60}
                      className="rounded-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {step.description}
                  </p>

                  {/* Special content for first step */}
                  {step.alternative && (
                    <div className="mt-4">
                      <p className="text-primary font-semibold mb-2">
                        {step.alternative}
                      </p>
                      <p className="text-gray-600 text-sm">{step.contact}</p>
                    </div>
                  )}
                </div>

                {/* Step Number Badge */}
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center shadow">
                    <span className="text-white font-bold text-sm">
                      {step.id}
                    </span>
                  </div>
                </div>

                {/* Connecting Line - Hidden on mobile, visible on larger screens */}
                {index < steps.length - 1 && (
                  <div
                    className="hidden lg:block absolute -top-[1%] left-1/2 h-[2px] bg-gray-300 z-20 transform translate-x-4"
                    style={{ width: "calc(100% - 1rem)" }}
                  ></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
