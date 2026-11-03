import Image from "next/image";
import Link from "next/link";
import { Phone, MapPin } from "lucide-react";
import InstagramIcon from "@/components/ui/InstagramIcon";
import { siteConfig } from "@/data/site-config";

const footerNav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Our Projects" },
  { href: "/process", label: "Our Process" },
  { href: "/contact", label: "Contact" },
];

const footerServices = [
  { href: "/services/residential-interiors", label: "Residential Interiors" },
  { href: "/services/living-room-interiors", label: "Living Room Design" },
  { href: "/services/bedroom-interiors", label: "Bedroom Design" },
  { href: "/services/modular-kitchens", label: "Modular Kitchens" },
  { href: "/services/wardrobes", label: "Wardrobe Solutions" },
  { href: "/services/commercial-interiors", label: "Commercial Interiors" },
  { href: "/services/3d-visualization", label: "3D Visualization" },
  { href: "/services/interior-execution", label: "Interior Execution" },
];

export default function Footer() {
  return (
    <footer className="bg-[#392F29] text-[#FEF0E5]" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="inline-block bg-[#FEF0E5] p-3 rounded-xs mb-5 shadow-xs">
              <Image
                src="/logo/Logo-removebg-preview.png"
                alt="E.G. Interiors"
                width={260}
                height={260}
                className="h-20 sm:h-24 w-auto object-contain"
              />
            </div>
            <p className="font-cormorant text-xl font-light text-[#CFAB93] italic mb-3">
              Dreams in Reality
            </p>
            <p className="font-inter text-sm text-[#FEF0E5]/70 leading-relaxed">
              At E.G Interiors, we transform ideas into thoughtfully designed spaces that reflect your lifestyle, needs, and personality.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-manrope text-xs font-semibold tracking-widest uppercase text-[#CFAB93] mb-6">
              Navigation
            </h3>
            <ul className="space-y-3">
              {footerNav.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-inter text-sm text-[#FEF0E5]/70 hover:text-[#CFAB93] transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-manrope text-xs font-semibold tracking-widest uppercase text-[#CFAB93] mb-6">
              Our Services
            </h3>
            <ul className="space-y-3">
              {footerServices.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-inter text-sm text-[#FEF0E5]/70 hover:text-[#CFAB93] transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-manrope text-xs font-semibold tracking-widest uppercase text-[#CFAB93] mb-6">
              Get in Touch
            </h3>
            <div className="space-y-4">
              <a
                href={`tel:+91${siteConfig.contact.phone1}`}
                className="flex items-center gap-3 text-[#FEF0E5]/70 hover:text-[#CFAB93] transition-colors group"
              >
                <Phone size={15} className="shrink-0 text-[#CFAB93]" />
                <span className="font-inter text-sm">{siteConfig.contact.phone1Display}</span>
              </a>
              <a
                href={`tel:+91${siteConfig.contact.phone2}`}
                className="flex items-center gap-3 text-[#FEF0E5]/70 hover:text-[#CFAB93] transition-colors group"
              >
                <Phone size={15} className="shrink-0 text-[#CFAB93]" />
                <span className="font-inter text-sm">{siteConfig.contact.phone2Display}</span>
              </a>
              <a
                href={siteConfig.contact.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-[#FEF0E5]/70 hover:text-[#CFAB93] transition-colors"
              >
                <InstagramIcon size={15} className="shrink-0 text-[#CFAB93]" />
                <span className="font-inter text-sm">{siteConfig.contact.instagramHandle}</span>
              </a>
              <div className="flex items-start gap-3 text-[#FEF0E5]/70">
                <MapPin size={15} className="shrink-0 text-[#CFAB93] mt-0.5" />
                <span className="font-inter text-sm leading-relaxed">
                  {siteConfig.address.street},<br />
                  {siteConfig.address.city} — {siteConfig.address.pincode}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-[#FEF0E5]/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-inter text-xs text-[#FEF0E5]/40">
            © {new Date().getFullYear()} E.G. Interiors. All rights reserved.
          </p>
          <p className="font-inter text-xs text-[#FEF0E5]/40">
            Mettu Street, Butt Road, Chennai — 600016
          </p>
        </div>
      </div>
    </footer>
  );
}

