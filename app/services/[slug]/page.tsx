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
      <section className="relative pt-32 pb-0 bg-[#590907]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 font-manrope text-xs text-[#E8D2B5] mb-8 hover:text-[#FAF6F0] transition-colors"
          >
            <ArrowLeft size={14} /> Back to Services
          </Link>
          <p className="label-sm text-[#E8D2B5] mb-4 tracking-widest">Interior Design Service</p>
          <h1 className="heading-display text-[#FAF6F0] max-w-3xl">{service.title}</h1>
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
      <section className="bg-[#FAF6F0] py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Main */}
            <div className="lg:col-span-2">
              <p className="body-lg text-[#6B665E] mb-8 leading-relaxed">{service.description}</p>

              <h2 className="heading-md text-[#2A1616] mb-5">Our Approach</h2>
              <p className="body-md text-[#6B665E] mb-10 leading-relaxed">{service.approach}</p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#590907] text-[#FAF6F0] font-manrope font-semibold text-sm hover:bg-[#2A1616] transition-colors duration-300 group shadow-sm"
                >
                  Enquire About This Service
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-3.5 border-2 border-[#590907] text-[#590907] font-manrope font-semibold text-sm hover:bg-[#590907] hover:text-[#FAF6F0] transition-colors duration-300"
                >
                  Chat on WhatsApp
                </a>
              </div>
            </div>

            {/* Sidebar */}
            <div>
              <div className="bg-[#E8D2B5]/25 border border-[#E8D2B5] p-8 sticky top-28 shadow-xs">
                <h3 className="font-cormorant text-xl text-[#2A1616] font-semibold mb-6">What&apos;s Included</h3>
                <ul className="space-y-3">
                  {service.deliverables.map((d) => (
                    <li key={d} className="flex items-start gap-3 font-inter text-sm text-[#6B665E]">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#590907] shrink-0" />
                      {d}
                    </li>
                  ))}
                </ul>
                <hr className="border-[#E8D2B5] my-8" />
                <Link
                  href="/contact"
                  className="block text-center py-3.5 bg-[#590907] text-[#FAF6F0] font-manrope font-semibold text-sm hover:bg-[#2A1616] transition-colors shadow-sm"
                >
                  Get a Free Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="bg-[#E8D2B5]/20 py-20 border-t border-[#E8D2B5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="heading-lg text-[#2A1616] mb-10">Related Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {related.map((s) => (
              <Link key={s.slug} href={`/services/${s.slug}`} className="group block bg-[#FAF6F0] p-4 shadow-sm border border-[#E8D2B5]/40 hover:border-[#590907] transition-all">
                <div className="relative aspect-[4/3] overflow-hidden mb-4">
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="33vw"
                  />
                </div>
                <h3 className="font-cormorant text-xl text-[#2A1616] font-semibold mb-1 group-hover:text-[#590907] transition-colors">{s.title}</h3>
                <p className="font-inter text-sm text-[#6B665E]">{s.shortDescription}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
