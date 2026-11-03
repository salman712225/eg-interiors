import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { featuredServices } from "@/data/services";

export default function ServicesSection() {
  return (
    <section className="bg-[#F7F3EE] py-20 lg:py-32" aria-label="Our Services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="max-w-2xl mb-16">
          <p className="label-sm text-[#8B6E5C] mb-4">What We Offer</p>
          <h2 className="heading-xl text-[#392F29] mb-6">
            Design Services{" "}
            <em className="italic text-[#8B6E5C]">Crafted</em>{" "}
            for Every Space.
          </h2>
          <p className="body-lg text-[#8A817A]">
            From concept to execution, we provide comprehensive interior design services tailored to residential and commercial spaces across Chennai.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {featuredServices.map((service, idx) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className={`group relative overflow-hidden block ${
                idx === 0 ? "sm:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#392F29]/80 via-[#392F29]/20 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="label-sm text-[#CFAB93] mb-2">Interior Design</p>
                <h3 className="heading-md text-[#FEF0E5] mb-2">{service.title}</h3>
                <p className="font-inter text-sm text-[#FEF0E5]/70 leading-relaxed line-clamp-2 mb-4 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  {service.shortDescription}
                </p>
                <span className="inline-flex items-center gap-1.5 font-manrope text-xs font-semibold text-[#CFAB93] group-hover:gap-3 transition-all duration-300">
                  Explore Service <ArrowRight size={13} />
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* View All */}
        <div className="mt-12 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-8 py-3.5 border border-[#8B6E5C] text-[#8B6E5C] font-manrope font-semibold text-sm hover:bg-[#8B6E5C] hover:text-[#FEF0E5] transition-all duration-300 group"
          >
            View All Services
            <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}

