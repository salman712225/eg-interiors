import type { Metadata } from "next";
import ProjectsSection from "@/components/sections/ProjectsSection";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Our Projects",
  description:
    "Browse E.G. Interiors' portfolio of completed interior design projects in Chennai — living rooms, bedrooms, kitchens, and commercial spaces.",
};

export default function ProjectsPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-[#392F29]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="label-sm text-[#CFAB93] mb-6">Our Work</p>
            <h1 className="heading-display text-[#FEF0E5] mb-6">
              Project{" "}
              <em className="italic text-[#CFAB93]">Portfolio.</em>
            </h1>
            <p className="body-lg text-[#FEF0E5]/60 max-w-xl">
              A curated selection of interior spaces we have thoughtfully designed and executed — each one a reflection of our client&apos;s unique vision.
            </p>
          </div>
        </div>
      </section>

      <ProjectsSection showAll />
      <CTASection />
    </>
  );
}

