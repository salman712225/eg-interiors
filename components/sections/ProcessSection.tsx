import Image from "next/image";
import { processSteps } from "@/data/process";

export default function ProcessSection() {
  return (
    <section className="bg-[#F7F3EE] py-20 lg:py-32" aria-label="Our Design Process">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="max-w-2xl mb-16 lg:mb-20">
          <p className="label-sm text-[#8B6E5C] mb-4">How We Work</p>
          <h2 className="heading-xl text-[#392F29] mb-6">
            Our Design{" "}
            <em className="italic text-[#8B6E5C]">Process.</em>
          </h2>
          <p className="body-lg text-[#8A817A]">
            A transparent, collaborative journey from your first conversation to the moment we hand over your dream space.
          </p>
        </div>

        {/* Steps — horizontal on desktop, vertical on mobile */}
        <div className="relative">
          {/* Connector line — desktop only */}
          <div className="hidden lg:block absolute top-8 left-0 right-0 h-px bg-[#E8D9CC] z-0" />

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-4">
            {processSteps.map((step, idx) => (
              <div key={step.number} className="relative flex lg:flex-col gap-6 lg:gap-0">
                {/* Vertical connector line — mobile only */}
                {idx < processSteps.length - 1 && (
                  <div className="lg:hidden absolute left-7 top-14 bottom-0 w-px bg-[#E8D9CC]" />
                )}

                {/* Step Number */}
                <div className="relative z-10 flex-shrink-0">
                  <div className="w-14 h-14 flex items-center justify-center bg-[#392F29] text-[#FEF0E5]">
                    <span className="font-cormorant text-lg font-light">{step.number}</span>
                  </div>
                </div>

                {/* Step Content */}
                <div className="lg:pt-8 flex-1">
                  <h3 className="font-cormorant text-xl font-semibold text-[#392F29] mb-2">
                    {step.title}
                  </h3>
                  <p className="font-inter text-sm text-[#8A817A] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

