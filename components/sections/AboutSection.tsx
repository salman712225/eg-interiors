import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="bg-[#FEF0E5] py-20 lg:py-32" aria-label="About E.G. Interiors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Image */}
          <div className="relative">
            <div className="relative aspect-[4/5] lg:aspect-[3/4] overflow-hidden">
              <Image
                src="/images/projects/project-3.jpg"
                alt="Beautiful interior design by E.G. Interiors"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-[#CFAB93] hidden lg:block" />
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#E8D9CC] hidden lg:block" />
          </div>

          {/* Text */}
          <div>
            <p className="label-sm text-[#8B6E5C] mb-4">About E.G. Interiors</p>

            <h2 className="heading-xl text-[#392F29] mb-8">
              Where Your Vision{" "}
              <em className="italic text-[#8B6E5C]">Meets</em>{" "}
              Our Creativity.
            </h2>

            <p className="body-lg text-[#8A817A] mb-6 leading-relaxed">
              At E.G Interiors, we transform ideas into thoughtfully designed spaces that reflect your lifestyle, needs, and personality. From concept and 3D visualization to complete interior execution, we focus on quality, detail, and client satisfaction at every stage.
            </p>

            <p className="body-md text-[#8A817A] mb-10">
              Based in Chennai, Tamil Nadu, we work with homeowners, property developers, and businesses to create interior environments that are as beautiful as they are functional — personalized to each client and executed to the highest standard.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-10">
              {[
                { label: "Design First", desc: "Concept-driven approach to every project" },
                { label: "3D Visualization", desc: "See it before we build it" },
                { label: "Quality Execution", desc: "Supervised from start to finish" },
                { label: "Client Focused", desc: "Your satisfaction, our only goal" },
              ].map((item) => (
                <div key={item.label} className="border-l-2 border-[#CFAB93] pl-4">
                  <p className="font-manrope text-sm font-semibold text-[#392F29] mb-1">{item.label}</p>
                  <p className="font-inter text-xs text-[#8A817A]">{item.desc}</p>
                </div>
              ))}
            </div>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 font-manrope text-sm font-semibold text-[#8B6E5C] border-b border-[#8B6E5C] pb-0.5 hover:text-[#392F29] hover:border-[#392F29] transition-colors duration-200 group"
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

