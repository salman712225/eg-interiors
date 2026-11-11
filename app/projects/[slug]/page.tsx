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
      <section className="relative pt-0 pb-0 bg-theme-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 pb-12">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 font-manrope text-xs text-theme-surface mb-8 hover:text-theme-bg transition-colors"
          >
            <ArrowLeft size={14} /> Back to Projects
          </Link>
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <p className="label-sm text-theme-surface mb-3 tracking-widest">{project.category}</p>
              <h1 className="heading-display text-theme-bg">{project.title}</h1>
            </div>
            <div className="flex items-center gap-2 text-theme-surface mt-2">
              <MapPin size={15} className="text-theme-surface" />
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
      <section className="bg-theme-bg py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="heading-md text-theme-dark mb-5">About This Project</h2>
              <p className="body-lg text-theme-muted mb-8 leading-relaxed">{project.description}</p>

              <h3 className="font-cormorant text-2xl text-theme-dark font-semibold mb-4">Design Concept</h3>
              <p className="body-md text-theme-muted mb-10 leading-relaxed">{project.concept}</p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-theme-primary text-theme-bg font-manrope font-semibold text-sm hover:bg-theme-dark transition-colors duration-300 group shadow-sm"
                >
                  Enquire About a Similar Project
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-3.5 border-2 border-theme-primary text-theme-primary font-manrope font-semibold text-sm hover:bg-theme-primary hover:text-theme-bg transition-colors"
                >
                  Chat on WhatsApp
                </a>
              </div>
            </div>

            {/* Sidebar */}
            <div>
              <div className="bg-theme-surface/25 border border-theme-surface p-8 sticky top-28 shadow-xs">
                <h3 className="font-cormorant text-xl text-theme-dark font-semibold mb-6">Project Details</h3>
                <dl className="space-y-4">
                  {[
                    { label: "Category", value: project.category },
                    { label: "Location", value: project.location },
                  ].map((d) => (
                    <div key={d.label}>
                      <dt className="font-manrope text-xs uppercase tracking-wider text-theme-primary mb-1 font-semibold">{d.label}</dt>
                      <dd className="font-cormorant text-lg text-theme-dark">{d.value}</dd>
                    </div>
                  ))}
                  <div>
                    <dt className="font-manrope text-xs uppercase tracking-wider text-theme-primary mb-2 font-semibold">Tags</dt>
                    <dd className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className="px-3 py-1 bg-theme-secondary/20 border border-theme-secondary/40 font-inter text-xs text-theme-dark">{tag}</span>
                      ))}
                    </dd>
                  </div>
                </dl>
                <hr className="border-theme-surface my-6" />
                <Link
                  href="/contact"
                  className="block text-center py-3.5 bg-theme-primary text-theme-bg font-manrope font-semibold text-sm hover:bg-theme-dark transition-colors shadow-sm"
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
        <section className="bg-theme-surface/20 py-20 border-t border-theme-surface">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="heading-lg text-theme-dark mb-10">Related Projects</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {related.map((p) => (
                <Link key={p.id} href={`/projects/${p.slug}`} className="group block bg-theme-bg p-4 shadow-sm border border-theme-surface/40 hover:border-theme-primary transition-all">
                  <div className="relative aspect-[4/3] overflow-hidden mb-4">
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="33vw"
                    />
                  </div>
                  <p className="label-sm text-theme-primary mb-1 tracking-widest">{p.category}</p>
                  <h3 className="font-cormorant text-xl text-theme-dark font-semibold group-hover:text-theme-primary transition-colors">{p.title}</h3>
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
