import { processSteps } from "@/data/process";

export default function ProcessSection() {
  return (
    <section className="bg-[#E8D2B5]/25 py-20 lg:py-32" aria-label="Our Design Process">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="max-w-2xl mb-16 lg:mb-20">
          <p className="label-sm text-[#590907] mb-4 tracking-widest">How We Work</p>
          <h2 className="heading-xl text-[#2A1616] mb-6">
            Our Design{" "}
            <em className="italic text-[#590907]">Process.</em>
          </h2>
          <p className="body-lg text-[#6B665E]">
            A transparent, collaborative journey from your first conversation to the moment we hand over your dream space.
          </p>
        </div>

        {/* Steps — horizontal on desktop, vertical on mobile */}
        <div className="relative">
          {/* Connector line in Champagne — desktop only */}
          <div className="hidden lg:block absolute top-7 left-0 right-0 h-0.5 bg-[#E8D2B5] z-0" />

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-4">
            {processSteps.map((step, idx) => (
              <div key={step.number} className="relative flex lg:flex-col gap-6 lg:gap-0">
                {/* Vertical connector line — mobile only */}
                {idx < processSteps.length - 1 && (
                  <div className="lg:hidden absolute left-7 top-14 bottom-0 w-0.5 bg-[#E8D2B5]" />
                )}

                {/* Step Number Badge in Oxblood */}
                <div className="relative z-10 flex-shrink-0">
                  <div className="w-14 h-14 flex items-center justify-center bg-[#590907] text-[#E8D2B5] shadow-sm">
                    <span className="font-cormorant text-xl font-medium">{step.number}</span>
                  </div>
                </div>

                {/* Step Content */}
                <div className="lg:pt-8 flex-1">
                  <h3 className="font-cormorant text-xl font-semibold text-[#2A1616] mb-2">
                    {step.title}
                  </h3>
                  <p className="font-inter text-sm text-[#6B665E] leading-relaxed">
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
