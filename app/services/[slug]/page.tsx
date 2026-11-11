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
      <section className="relative pt-32 pb-0 bg-theme-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 font-manrope text-xs text-theme-surface mb-8 hover:text-theme-bg transition-colors"
          >
            <ArrowLeft size={14} /> Back to Services
          </Link>
          <p className="label-sm text-theme-surface mb-4 tracking-widest">Interior Design Service</p>
          <h1 className="heading-display text-theme-bg max-w-3xl">{service.title}</h1>
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
      <section className="bg-theme-bg py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Main */}
            <div className="lg:col-span-2">
              <p className="body-lg text-theme-muted mb-8 leading-relaxed">{service.description}</p>

              <h2 className="heading-md text-theme-dark mb-5">Our Approach</h2>
              <p className="body-md text-theme-muted mb-10 leading-relaxed">{service.approach}</p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-theme-primary text-theme-bg font-manrope font-semibold text-sm hover:bg-theme-dark transition-colors duration-300 group shadow-sm"
                >
                  Enquire About This Service
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
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

            {/* Sidebar */}
            <div>
              <div className="bg-theme-surface/25 border border-theme-surface p-8 sticky top-28 shadow-xs">
                <h3 className="font-cormorant text-xl text-theme-dark font-semibold mb-6">What&apos;s Included</h3>
                <ul className="space-y-3">
                  {service.deliverables.map((d) => (
                    <li key={d} className="flex items-start gap-3 font-inter text-sm text-theme-muted">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-theme-primary shrink-0" />
                      {d}
                    </li>
                  ))}
                </ul>
                <hr className="border-theme-surface my-8" />
                <Link
                  href="/contact"
                  className="block text-center py-3.5 bg-theme-primary text-theme-bg font-manrope font-semibold text-sm hover:bg-theme-dark transition-colors shadow-sm"
                >
                  Get a Free Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="bg-theme-surface/20 py-20 border-t border-theme-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="heading-lg text-theme-dark mb-10">Related Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {related.map((s) => (
              <Link key={s.slug} href={`/services/${s.slug}`} className="group block bg-theme-bg p-4 shadow-sm border border-theme-surface/40 hover:border-theme-primary transition-all">
                <div className="relative aspect-[4/3] overflow-hidden mb-4">
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="33vw"
                  />
                </div>
                <h3 className="font-cormorant text-xl text-theme-dark font-semibold mb-1 group-hover:text-theme-primary transition-colors">{s.title}</h3>
                <p className="font-inter text-sm text-theme-muted">{s.shortDescription}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
