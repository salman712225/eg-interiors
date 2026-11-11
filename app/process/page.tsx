import type { Metadata } from "next";
import ProcessSection from "@/components/sections/ProcessSection";
import WhyUsSection from "@/components/sections/WhyUsSection";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Our Design Process",
  description:
    "Discover how E.G. Interiors works — from initial consultation and concept development through 3D visualization, execution, and final handover.",
};

export default function ProcessPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-20 bg-theme-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="label-sm text-theme-surface mb-6 tracking-widest">How We Work</p>
            <h1 className="heading-display text-theme-bg mb-6">
              Our Design{" "}
              <em className="italic text-theme-surface">Process.</em>
            </h1>
            <p className="body-lg text-theme-bg/80 max-w-xl">
              A transparent, collaborative journey from your first conversation to the moment we hand over your finished space.
            </p>
          </div>
        </div>
      </section>

      <ProcessSection />
      <WhyUsSection />
      <CTASection />
    </>
  );
}
