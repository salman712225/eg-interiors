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
      <section className="relative pt-36 pb-20 bg-theme-primary overflow-hidden" aria-label="About page hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="label-sm text-theme-surface mb-6 tracking-widest">Our Story</p>
            <h1 className="heading-display text-theme-bg mb-6">
              Crafting Spaces{" "}
              <em className="italic text-theme-surface">That Inspire.</em>
            </h1>
            <p className="body-lg text-theme-bg/80 max-w-xl">
              E.G. Interiors is a Chennai-based interior design studio committed to creating personalized, beautiful, and functional living and working spaces.
            </p>
          </div>
        </div>
      </section>

      {/* Main about content */}
      <section className="bg-theme-bg py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Left: image stack */}
            <div className="relative">
              <div className="relative aspect-[3/4] overflow-hidden shadow-lg">
                <Image
                  src="/images/projects/project-4.jpg"
                  alt="E.G. Interiors design studio work"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="absolute -bottom-8 -right-4 lg:-right-8 w-1/2 aspect-square overflow-hidden border-4 border-theme-bg shadow-xl">
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
              <p className="label-sm text-theme-primary mb-4 tracking-widest">About E.G. Interiors</p>
              <h2 className="heading-xl text-theme-dark mb-8">
                Where Your Vision{" "}
                <em className="italic text-theme-primary">Meets</em>{" "}
                Our Creativity.
              </h2>
              <p className="body-lg text-theme-muted mb-6 leading-relaxed">
                At E.G Interiors, we transform ideas into thoughtfully designed spaces that reflect your lifestyle, needs, and personality. From concept and 3D visualization to complete interior execution, we focus on quality, detail, and client satisfaction at every stage.
              </p>
              <p className="body-md text-theme-muted mb-8">
                We believe that great interior design is about more than aesthetics — it is about understanding how you live, how you work, and what makes a space truly feel like yours. Every project we undertake is a deeply personal collaboration between our team and our clients.
              </p>

              <h3 className="font-cormorant text-2xl text-theme-dark font-semibold mb-5">Our Design Philosophy</h3>
              <p className="body-md text-theme-muted mb-8">
                We believe in thoughtful design that is rooted in understanding — understanding your lifestyle, your daily routines, the way you entertain, the way you rest, and the way you work. Every element, from the spatial layout to the final light fitting, is selected with purpose and precision.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                {[
                  { title: "Mission", text: "To create interiors that genuinely improve the quality of life for every client we work with." },
                  { title: "Vision", text: "To be Chennai's most trusted and creative interior design studio — known for quality, integrity, and design excellence." },
                ].map((item) => (
                  <div key={item.title} className="bg-theme-surface/25 border border-theme-surface p-6">
                    <h4 className="font-cormorant text-xl text-theme-primary font-semibold mb-3">{item.title}</h4>
                    <p className="font-inter text-sm text-theme-muted leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-theme-primary text-theme-bg font-manrope font-semibold text-sm hover:bg-theme-dark transition-colors duration-300 group shadow-sm"
                >
                  Get in Touch
                  <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-3.5 border-2 border-theme-primary text-theme-primary font-manrope font-semibold text-sm hover:bg-theme-primary hover:text-theme-bg transition-colors duration-300"
                >
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Design pillars */}
      <section className="bg-theme-surface/20 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-14">
            <p className="label-sm text-theme-primary mb-4 tracking-widest">Design Pillars</p>
            <h2 className="heading-xl text-theme-dark">
              Thoughtful Design.{" "}
              <em className="italic text-theme-primary">Timeless Spaces.</em>
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
              <div key={p.n} className="p-8 bg-theme-bg border-t-2 border-theme-primary shadow-xs">
                <span className="font-cormorant text-4xl font-light text-theme-surface block mb-4">{p.n}</span>
                <h3 className="font-cormorant text-xl text-theme-dark font-semibold mb-3">{p.title}</h3>
                <p className="font-inter text-sm text-theme-muted leading-relaxed">{p.desc}</p>
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
