"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import { whatsappUrl, siteConfig } from "@/data/site-config";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Our Projects" },
  { href: "/process", label: "Our Process" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-theme-bg/98 backdrop-blur-md shadow-md py-2 border-b border-theme-surface"
            : "bg-theme-bg/95 backdrop-blur-md shadow-xs py-3 border-b border-theme-surface/60"
        }`}
        role="banner"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Official Logo-removebg-preview */}
          <Link
            href="/"
            className="flex items-center shrink-0 group py-1"
            aria-label="E.G. Interiors — Home"
          >
            <Image
              src="/logo/Logo-removebg-preview.png"
              alt="E.G. Interiors"
              width={300}
              height={300}
              className="h-16 sm:h-20 lg:h-24 w-auto object-contain transition-transform duration-300 group-hover:scale-105 drop-shadow-xs"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-manrope text-sm font-semibold text-theme-dark hover:text-theme-primary transition-colors duration-200 relative group py-1 tracking-wide"
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 h-0.5 w-0 bg-theme-primary transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-5">
            <a
              href={`tel:+91${siteConfig.contact.phone1}`}
              className="flex items-center gap-2 text-xs font-manrope font-semibold text-theme-primary hover:text-theme-dark transition-colors"
            >
              <Phone size={14} className="text-theme-primary" />
              <span>{siteConfig.contact.phone1Display}</span>
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-theme-primary text-theme-bg font-manrope text-sm font-semibold hover:bg-theme-dark transition-colors duration-300 shadow-sm"
            >
              Get a Quote
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 text-theme-dark hover:text-theme-primary transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-50 bg-theme-bg flex flex-col transition-transform duration-300 ease-in-out lg:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!menuOpen}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-theme-surface">
          <Image
            src="/logo/Logo-removebg-preview.png"
            alt="E.G. Interiors"
            width={200}
            height={200}
            className="h-16 w-auto object-contain"
          />
          <button
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
            className="p-2 text-theme-dark"
          >
            <X size={28} />
          </button>
        </div>

        <nav className="flex flex-col gap-1 px-6 py-8 flex-1 overflow-y-auto" aria-label="Mobile navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="font-cormorant text-2xl font-normal text-theme-dark hover:text-theme-primary transition-colors py-3.5 border-b border-theme-surface/60 flex items-center justify-between"
            >
              <span>{link.label}</span>
              <span className="text-xs font-manrope text-theme-secondary">→</span>
            </Link>
          ))}
        </nav>

        <div className="px-6 py-6 border-t border-theme-surface flex flex-col gap-3 bg-theme-surface/25">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full text-center py-3.5 bg-theme-primary text-theme-bg font-manrope font-semibold text-sm hover:bg-theme-dark transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Get a Quote via WhatsApp
          </a>
          <a
            href={`tel:+91${siteConfig.contact.phone1}`}
            className="w-full flex items-center justify-center gap-2 py-3 border border-theme-primary text-theme-primary font-manrope font-semibold text-sm hover:bg-theme-primary hover:text-theme-bg transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            <Phone size={15} />
            Call: {siteConfig.contact.phone1Display}
          </a>
        </div>
      </div>
    </>
  );
}
