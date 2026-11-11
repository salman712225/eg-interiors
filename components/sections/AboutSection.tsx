import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="bg-theme-bg py-20 lg:py-32" aria-label="About E.G. Interiors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Image */}
          <div className="relative">
            <div className="relative aspect-[4/5] lg:aspect-[3/4] overflow-hidden shadow-md">
              <Image
                src="/images/projects/project-3.jpg"
                alt="Beautiful interior design by E.G. Interiors"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {/* Decorative elements in Champagne & Sage */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-2 border-theme-surface hidden lg:block" />
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-theme-secondary/25 hidden lg:block" />
          </div>

          {/* Text */}
          <div>
            <p className="label-sm text-theme-primary mb-4 tracking-widest">About E.G. Interiors</p>

            <h2 className="heading-xl text-theme-dark mb-8">
              Where Your Vision{" "}
              <em className="italic text-theme-primary">Meets</em>{" "}
              Our Creativity.
            </h2>

            <p className="body-lg text-theme-muted mb-6 leading-relaxed">
              At E.G Interiors, we transform ideas into thoughtfully designed spaces that reflect your lifestyle, needs, and personality. From concept and 3D visualization to complete interior execution, we focus on quality, detail, and client satisfaction at every stage.
            </p>

            <p className="body-md text-theme-muted mb-10">
              Based in Chennai, Tamil Nadu, we work with homeowners, property developers, and businesses to create interior environments that are as beautiful as they are functional — personalized to each client and executed to the highest standard.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-10">
              {[
                { label: "Design First", desc: "Concept-driven approach to every project" },
                { label: "3D Visualization", desc: "See it before we build it" },
                { label: "Quality Execution", desc: "Supervised from start to finish" },
                { label: "Client Focused", desc: "Your satisfaction, our only goal" },
              ].map((item) => (
                <div key={item.label} className="border-l-2 border-theme-primary pl-4">
                  <p className="font-manrope text-sm font-semibold text-theme-dark mb-1">{item.label}</p>
                  <p className="font-inter text-xs text-theme-muted">{item.desc}</p>
                </div>
              ))}
            </div>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 font-manrope text-sm font-semibold text-theme-primary border-b border-theme-primary pb-0.5 hover:text-theme-dark hover:border-theme-dark transition-colors duration-200 group"
            >
              Learn More About Us
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
