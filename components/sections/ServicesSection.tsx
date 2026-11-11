import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { featuredServices } from "@/data/services";

export default function ServicesSection() {
  return (
    <section className="bg-theme-surface/20 py-20 lg:py-32" aria-label="Our Services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="max-w-2xl mb-16">
          <p className="label-sm text-theme-primary mb-4 tracking-widest">What We Offer</p>
          <h2 className="heading-xl text-theme-dark mb-6">
            Design Services{" "}
            <em className="italic text-theme-primary">Crafted</em>{" "}
            for Every Space.
          </h2>
          <p className="body-lg text-theme-muted">
            From concept to execution, we provide comprehensive interior design services tailored to residential and commercial spaces across Chennai.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {featuredServices.map((service, idx) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className={`group relative overflow-hidden block shadow-sm ${
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
                <div className="absolute inset-0 bg-gradient-to-t from-theme-primary/90 via-theme-primary/30 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="label-sm text-theme-surface mb-2 tracking-widest">Interior Design</p>
                <h3 className="heading-md text-theme-bg mb-2">{service.title}</h3>
                <p className="font-inter text-sm text-theme-bg/80 leading-relaxed line-clamp-2 mb-4 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  {service.shortDescription}
                </p>
                <span className="inline-flex items-center gap-1.5 font-manrope text-xs font-semibold text-theme-surface group-hover:gap-3 transition-all duration-300">
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
            className="inline-flex items-center gap-2 px-8 py-3.5 border-2 border-theme-primary text-theme-primary font-manrope font-semibold text-sm hover:bg-theme-primary hover:text-theme-bg transition-all duration-300 group"
          >
            View All Services
            <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
