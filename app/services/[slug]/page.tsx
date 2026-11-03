import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { services } from "@/data/services";
import { whatsappUrl } from "@/data/site-config";
import CTASection from "@/components/sections/CTASection";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return { title: "Service Not Found" };
  return {
    title: service.title,
    description: service.description,
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const related = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-28 pb-0 bg-[#392F29]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 font-manrope text-xs text-[#CFAB93] mb-8 hover:text-[#FEF0E5] transition-colors"
          >
            <ArrowLeft size={14} /> Back to Services
          </Link>
          <p className="label-sm text-[#CFAB93] mb-4">Interior Design Service</p>
          <h1 className="heading-display text-[#FEF0E5] max-w-3xl">{service.title}</h1>
        </div>
        <div className="relative aspect-[21/8] lg:aspect-[21/7] overflow-hidden">
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>
      </section>

      {/* Content */}
      <section className="bg-[#FEF0E5] py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Main */}
            <div className="lg:col-span-2">
              <p className="body-lg text-[#8A817A] mb-8 leading-relaxed">{service.description}</p>

              <h2 className="heading-md text-[#392F29] mb-5">Our Approach</h2>
              <p className="body-md text-[#8A817A] mb-10 leading-relaxed">{service.approach}</p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#392F29] text-[#FEF0E5] font-manrope font-semibold text-sm hover:bg-[#8B6E5C] transition-colors duration-300 group"
                >
                  Enquire About This Service
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
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

            {/* Sidebar */}
            <div>
              <div className="bg-[#F7F3EE] p-8 sticky top-28">
                <h3 className="font-cormorant text-xl text-[#392F29] font-semibold mb-6">What&apos;s Included</h3>
                <ul className="space-y-3">
                  {service.deliverables.map((d) => (
                    <li key={d} className="flex items-start gap-3 font-inter text-sm text-[#8A817A]">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#CFAB93] shrink-0" />
                      {d}
                    </li>
                  ))}
                </ul>
                <hr className="border-[#E8D9CC] my-8" />
                <Link
                  href="/contact"
                  className="block text-center py-3.5 bg-[#392F29] text-[#FEF0E5] font-manrope font-semibold text-sm hover:bg-[#8B6E5C] transition-colors"
                >
                  Get a Free Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="bg-[#F7F3EE] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="heading-lg text-[#392F29] mb-10">Related Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {related.map((s) => (
              <Link key={s.slug} href={`/services/${s.slug}`} className="group block">
                <div className="relative aspect-[4/3] overflow-hidden mb-4">
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="33vw"
                  />
                </div>
                <h3 className="font-cormorant text-xl text-[#392F29] font-semibold mb-1 group-hover:text-[#8B6E5C] transition-colors">{s.title}</h3>
                <p className="font-inter text-sm text-[#8A817A]">{s.shortDescription}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}

