import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, MapPin } from "lucide-react";
import { projects } from "@/data/projects";
import { whatsappUrl } from "@/data/site-config";
import CTASection from "@/components/sections/CTASection";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return { title: "Project Not Found" };
  return {
    title: project.title,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const related = projects.filter((p) => p.slug !== project.slug && p.category === project.category).slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-0 pb-0 bg-[#392F29]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-12">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 font-manrope text-xs text-[#CFAB93] mb-8 hover:text-[#FEF0E5] transition-colors"
          >
            <ArrowLeft size={14} /> Back to Projects
          </Link>
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <p className="label-sm text-[#CFAB93] mb-3">{project.category}</p>
              <h1 className="heading-display text-[#FEF0E5]">{project.title}</h1>
            </div>
            <div className="flex items-center gap-2 text-[#FEF0E5]/60 mt-2">
              <MapPin size={15} className="text-[#CFAB93]" />
              <span className="font-inter text-sm">{project.location}</span>
            </div>
          </div>
        </div>
        <div className="relative aspect-[21/9] lg:aspect-[21/8] overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
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
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="heading-md text-[#392F29] mb-5">About This Project</h2>
              <p className="body-lg text-[#8A817A] mb-8 leading-relaxed">{project.description}</p>

              <h3 className="font-cormorant text-2xl text-[#392F29] font-semibold mb-4">Design Concept</h3>
              <p className="body-md text-[#8A817A] mb-10 leading-relaxed">{project.concept}</p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#392F29] text-[#FEF0E5] font-manrope font-semibold text-sm hover:bg-[#8B6E5C] transition-colors duration-300 group"
                >
                  Enquire About a Similar Project
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-3.5 border border-[#8B6E5C] text-[#8B6E5C] font-manrope font-semibold text-sm hover:bg-[#8B6E5C] hover:text-[#FEF0E5] transition-colors"
                >
                  Chat on WhatsApp
                </a>
              </div>
            </div>

            {/* Sidebar */}
            <div>
              <div className="bg-[#F7F3EE] p-8 sticky top-28">
                <h3 className="font-cormorant text-xl text-[#392F29] font-semibold mb-6">Project Details</h3>
                <dl className="space-y-4">
                  {[
                    { label: "Category", value: project.category },
                    { label: "Location", value: project.location },
                  ].map((d) => (
                    <div key={d.label}>
                      <dt className="font-manrope text-xs uppercase tracking-wider text-[#8A817A] mb-1">{d.label}</dt>
                      <dd className="font-cormorant text-lg text-[#392F29]">{d.value}</dd>
                    </div>
                  ))}
                  <div>
                    <dt className="font-manrope text-xs uppercase tracking-wider text-[#8A817A] mb-2">Tags</dt>
                    <dd className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className="px-3 py-1 bg-[#E8D9CC] font-inter text-xs text-[#8A817A]">{tag}</span>
                      ))}
                    </dd>
                  </div>
                </dl>
                <hr className="border-[#E8D9CC] my-6" />
                <Link
                  href="/contact"
                  className="block text-center py-3.5 bg-[#392F29] text-[#FEF0E5] font-manrope font-semibold text-sm hover:bg-[#8B6E5C] transition-colors"
                >
                  Request a Similar Design
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related projects */}
      {related.length > 0 && (
        <section className="bg-[#F7F3EE] py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="heading-lg text-[#392F29] mb-10">Related Projects</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {related.map((p) => (
                <Link key={p.id} href={`/projects/${p.slug}`} className="group block">
                  <div className="relative aspect-[4/3] overflow-hidden mb-4">
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="33vw"
                    />
                  </div>
                  <p className="label-sm text-[#8B6E5C] mb-1">{p.category}</p>
                  <h3 className="font-cormorant text-xl text-[#392F29] font-semibold group-hover:text-[#8B6E5C] transition-colors">{p.title}</h3>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection />
    </>
  );
}

