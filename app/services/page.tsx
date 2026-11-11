import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { services } from "@/data/services";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Interior Design Services",
  description:
    "Explore E.G. Interiors' complete range of interior design services in Chennai — residential, commercial, modular kitchens, bedrooms, 3D visualization, and complete execution.",
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-20 bg-theme-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="label-sm text-theme-surface mb-6 tracking-widest">What We Offer</p>
            <h1 className="heading-display text-theme-bg mb-6">
              Interior Design{" "}
              <em className="italic text-theme-surface">Services.</em>
            </h1>
            <p className="body-lg text-theme-bg/80 max-w-xl">
              From concept to complete execution — we offer a comprehensive range of interior design services for homes, apartments, and commercial spaces in Chennai.
            </p>
          </div>
        </div>
      </section>

      {/* Services list */}
      <section className="bg-theme-bg py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 lg:space-y-28">
          {services.map((service, idx) => (
            <div
              key={service.slug}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center ${
                idx % 2 === 1 ? "lg:grid-flow-col-dense" : ""
              }`}
            >
              {/* Image */}
              <div className={`relative aspect-[4/3] overflow-hidden shadow-md ${idx % 2 === 1 ? "lg:order-2" : ""}`}>
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>

              {/* Content */}
              <div className={idx % 2 === 1 ? "lg:order-1" : ""}>
                <p className="label-sm text-theme-primary mb-4 tracking-widest">Interior Design Service</p>
                <h2 className="heading-lg text-theme-dark mb-5">{service.title}</h2>
                <p className="body-lg text-theme-muted mb-6 leading-relaxed">{service.description}</p>

                <div className="mb-8">
                  <h3 className="font-manrope text-xs font-semibold uppercase tracking-wider text-theme-primary mb-4">
                    What&apos;s Included
                  </h3>
                  <ul className="space-y-2">
                    {service.deliverables.map((d) => (
                      <li key={d} className="flex items-start gap-3 font-inter text-sm text-theme-muted">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-theme-surface shrink-0" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-3">
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-theme-primary text-theme-bg font-manrope font-semibold text-sm hover:bg-theme-dark transition-colors duration-300 group shadow-sm"
                  >
                    Learn More
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3 border-2 border-theme-primary text-theme-primary font-manrope font-semibold text-sm hover:bg-theme-primary hover:text-theme-bg transition-colors duration-300"
                  >
                    Get a Quote
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
