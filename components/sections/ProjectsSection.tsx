"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, X } from "lucide-react";
import { projects, featuredProjects, projectCategories } from "@/data/projects";

export default function ProjectsSection({ showAll = false }: { showAll?: boolean }) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);

  const displayProjects = showAll ? projects : featuredProjects;
  const filtered =
    activeCategory === "All"
      ? displayProjects
      : displayProjects.filter((p) => p.category === activeCategory);

  return (
    <section className="bg-[#FAF6F0] py-20 lg:py-32" aria-label="Our Projects">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12">
          <div className="max-w-xl">
            <p className="label-sm text-[#590907] mb-4 tracking-widest">Our Portfolio</p>
            <h2 className="heading-xl text-[#2A1616]">
              Spaces We Have{" "}
              <em className="italic text-[#590907]">Transformed.</em>
            </h2>
          </div>
          {!showAll && (
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 font-manrope text-sm font-semibold text-[#590907] border-b-2 border-[#590907] pb-0.5 hover:text-[#2A1616] hover:border-[#2A1616] transition-colors group self-start lg:self-auto"
            >
              View All Projects
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          )}
        </div>

        {/* Category Filter */}
        {showAll && (
          <div className="flex flex-wrap gap-2 mb-10" role="tablist" aria-label="Project categories">
            {projectCategories.map((cat) => (
              <button
                key={cat}
                role="tab"
                aria-selected={activeCategory === cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 font-manrope text-xs font-semibold tracking-wide uppercase transition-all duration-200 ${
                  activeCategory === cat
                    ? "bg-[#590907] text-[#FAF6F0] shadow-xs"
                    : "bg-[#E8D2B5] text-[#2A1616] hover:bg-[#A5A79B] hover:text-[#FAF6F0]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        )}

        {/* Masonry-style Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {filtered.map((project, idx) => (
            <div
              key={project.id}
              className={`group relative overflow-hidden cursor-pointer shadow-sm ${
                idx % 5 === 0 ? "sm:col-span-2 lg:col-span-1" : ""
              }`}
              onClick={() => setLightboxImg(project.image)}
            >
              <div className={`relative overflow-hidden ${idx % 3 === 1 ? "aspect-[3/4]" : "aspect-[4/3]"}`}>
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-[#590907]/0 group-hover:bg-[#590907]/75 transition-all duration-500" />
                <div className="absolute inset-0 p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-all duration-400 translate-y-4 group-hover:translate-y-0">
                  <p className="label-sm text-[#E8D2B5] mb-1 tracking-widest">{project.category}</p>
                  <h3 className="font-cormorant text-xl text-[#FAF6F0] font-light mb-1">{project.title}</h3>
                  <p className="font-inter text-xs text-[#E8D2B5]/85">{project.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {lightboxImg && (
          <div
            className="fixed inset-0 z-[100] bg-[#2A1616]/95 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setLightboxImg(null)}
            role="dialog"
            aria-modal="true"
            aria-label="Project image lightbox"
          >
            <button
              className="absolute top-4 right-4 text-[#FAF6F0] p-2 hover:text-[#E8D2B5] transition-colors"
              onClick={() => setLightboxImg(null)}
              aria-label="Close lightbox"
            >
              <X size={32} />
            </button>
            <div
              className="relative max-w-4xl max-h-[85vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={lightboxImg}
                alt="Project detail"
                className="w-full h-full object-contain max-h-[85vh] rounded-xs shadow-2xl"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
