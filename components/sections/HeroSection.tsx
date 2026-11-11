"use client";

import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import { whatsappUrl } from "@/data/site-config";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden" aria-label="Hero">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/projects/project-1.jpg"
          alt="Luxury interior by E.G. Interiors"
          className="w-full h-full object-cover eg-hero-zoom"
          fetchPriority="high"
        />
        {/* Luxury Oxblood & Deep Wine overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-theme-primary/85 via-theme-primary/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-theme-dark/70 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-32 sm:pt-40 pb-20">
        <div className="max-w-2xl">
          {/* Eyebrow */}
          <p className="label-sm text-theme-surface mb-6 eg-fade-up eg-delay-1 tracking-widest">
            E.G. Interiors — Chennai
          </p>

          {/* Main headline */}
          <h1 className="heading-display text-theme-bg mb-4 eg-fade-up eg-delay-2">
            Dreams in
            <br />
            <em className="italic text-theme-surface">Reality.</em>
          </h1>

          {/* Supporting headline */}
          <p className="font-cormorant text-2xl sm:text-3xl font-light text-theme-surface/90 mb-6 eg-fade-up eg-delay-3">
            Transforming Spaces Into Experiences.
          </p>

          {/* Description */}
          <p className="body-lg text-theme-bg/80 mb-10 max-w-lg eg-fade-up eg-delay-4">
            Thoughtfully designed interiors that reflect your lifestyle, elevate your everyday living, and bring your vision to life.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 eg-fade-up eg-delay-5">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-theme-surface text-theme-primary font-manrope font-semibold text-sm hover:bg-theme-bg hover:text-theme-primary transition-all duration-300 group shadow-sm"
            >
              Explore Our Projects
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 border border-theme-surface/80 text-theme-bg font-manrope font-semibold text-sm hover:bg-theme-surface/15 transition-all duration-300"
            >
              Get a Free Consultation
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 animate-bounce">
        <span className="label-sm text-theme-surface/70">Scroll</span>
        <ChevronDown size={18} className="text-theme-surface/70" />
      </div>
    </section>
  );
}
