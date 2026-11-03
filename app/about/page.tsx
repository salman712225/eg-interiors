import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ProcessSection from "@/components/sections/ProcessSection";
import CTASection from "@/components/sections/CTASection";
import { whatsappUrl } from "@/data/site-config";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about E.G. Interiors — a premium interior design studio in Chennai dedicated to transforming spaces that reflect your lifestyle, personality, and vision.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-[#392F29] overflow-hidden" aria-label="About page hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="label-sm text-[#CFAB93] mb-6">Our Story</p>
            <h1 className="heading-display text-[#FEF0E5] mb-6">
              Crafting Spaces{" "}
              <em className="italic text-[#CFAB93]">That Inspire.</em>
            </h1>
            <p className="body-lg text-[#FEF0E5]/60 max-w-xl">
              E.G. Interiors is a Chennai-based interior design studio committed to creating personalized, beautiful, and functional living and working spaces.
            </p>
          </div>
        </div>
      </section>

      {/* Main about content */}
      <section className="bg-[#FEF0E5] py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Left: image stack */}
            <div className="relative">
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src="/images/projects/project-4.jpg"
                  alt="E.G. Interiors design studio work"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="absolute -bottom-8 -right-4 lg:-right-8 w-1/2 aspect-square overflow-hidden border-4 border-[#FEF0E5]">
                <Image
                  src="/images/projects/project-5.jpg"
                  alt="Interior design detail"
                  fill
                  className="object-cover"
                  sizes="25vw"
                />
              </div>
            </div>

            {/* Right: text */}
            <div className="pt-8 lg:pt-4">
              <p className="label-sm text-[#8B6E5C] mb-4">About E.G. Interiors</p>
              <h2 className="heading-xl text-[#392F29] mb-8">
                Where Your Vision{" "}
                <em className="italic text-[#8B6E5C]">Meets</em>{" "}
                Our Creativity.
              </h2>
              <p className="body-lg text-[#8A817A] mb-6 leading-relaxed">
                At E.G Interiors, we transform ideas into thoughtfully designed spaces that reflect your lifestyle, needs, and personality. From concept and 3D visualization to complete interior execution, we focus on quality, detail, and client satisfaction at every stage.
              </p>
              <p className="body-md text-[#8A817A] mb-8">
                We believe that great interior design is about more than aesthetics — it is about understanding how you live, how you work, and what makes a space truly feel like yours. Every project we undertake is a deeply personal collaboration between our team and our clients.
              </p>

              <h3 className="font-cormorant text-2xl text-[#392F29] font-semibold mb-5">Our Design Philosophy</h3>
              <p className="body-md text-[#8A817A] mb-8">
                We believe in thoughtful design that is rooted in understanding — understanding your lifestyle, your daily routines, the way you entertain, the way you rest, and the way you work. Every element, from the spatial layout to the final light fitting, is selected with purpose and precision.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                {[
                  { title: "Mission", text: "To create interiors that genuinely improve the quality of life for every client we work with." },
                  { title: "Vision", text: "To be Chennai's most trusted and creative interior design studio — known for quality, integrity, and design excellence." },
                ].map((item) => (
                  <div key={item.title} className="bg-[#F7F3EE] p-6">
                    <h4 className="font-cormorant text-xl text-[#8B6E5C] font-semibold mb-3">{item.title}</h4>
                    <p className="font-inter text-sm text-[#8A817A] leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#392F29] text-[#FEF0E5] font-manrope font-semibold text-sm hover:bg-[#8B6E5C] transition-colors duration-300 group"
                >
                  Get in Touch
                  <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-3.5 border border-[#8B6E5C] text-[#8B6E5C] font-manrope font-semibold text-sm hover:bg-[#8B6E5C] hover:text-[#FEF0E5] transition-colors duration-300"
                >
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Design pillars */}
      <section className="bg-[#F7F3EE] py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-14">
            <p className="label-sm text-[#8B6E5C] mb-4">Design Pillars</p>
            <h2 className="heading-xl text-[#392F29]">
              Thoughtful Design.{" "}
              <em className="italic text-[#8B6E5C]">Timeless Spaces.</em>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { n: "01", title: "Understanding Your Lifestyle", desc: "We begin every project by deeply understanding how you live and what you need from your space." },
              { n: "02", title: "Functional Space Planning", desc: "Beautiful spaces must also work perfectly. We plan every inch with purpose." },
              { n: "03", title: "Material Quality", desc: "We recommend and source materials that offer lasting quality, beauty, and value." },
              { n: "04", title: "Aesthetic Balance", desc: "Visual harmony across all elements — colour, proportion, texture, and light." },
              { n: "05", title: "Lighting & Textures", desc: "Lighting transforms a room. We design layered lighting plans that enhance every space." },
              { n: "06", title: "Personalized Designs", desc: "No two clients are the same. Every project is uniquely yours." },
            ].map((p) => (
              <div key={p.n} className="p-8 bg-[#FEF0E5] border-t-2 border-[#CFAB93]">
                <span className="font-cormorant text-4xl font-light text-[#E8D9CC] block mb-4">{p.n}</span>
                <h3 className="font-cormorant text-xl text-[#392F29] font-semibold mb-3">{p.title}</h3>
                <p className="font-inter text-sm text-[#8A817A] leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ProcessSection />
      <CTASection />
    </>
  );
}

