import type { Metadata } from "next";
import { Phone, MapPin, MessageCircle } from "lucide-react";
import InstagramIcon from "@/components/ui/InstagramIcon";
import ContactForm from "@/components/forms/ContactForm";
import { siteConfig, whatsappUrl } from "@/data/site-config";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with E.G. Interiors — request a consultation, get a quote, or start a conversation about your interior design project in Chennai.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-20 bg-[#590907]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="label-sm text-[#E8D2B5] mb-6 tracking-widest">Let&apos;s Connect</p>
            <h1 className="heading-display text-[#FAF6F0] mb-6">
              Start Your{" "}
              <em className="italic text-[#E8D2B5]">Design Journey.</em>
            </h1>
            <p className="body-lg text-[#FAF6F0]/80 max-w-xl">
              We&apos;d love to hear about your project. Reach out and our team will get back to you promptly.
            </p>
          </div>
        </div>
      </section>

      {/* Main contact section */}
      <section className="bg-[#FAF6F0] py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

            {/* Left: contact info */}
            <div>
              <h2 className="heading-lg text-[#2A1616] mb-4">
                Let&apos;s Discuss Your{" "}
                <em className="italic text-[#590907]">Dream Space.</em>
              </h2>
              <p className="body-md text-[#6B665E] mb-10 leading-relaxed">
                Whether you&apos;re planning a complete home interior, a single room refresh, or a commercial space — we are here to listen, advise, and create something extraordinary for you.
              </p>

              <div className="space-y-6 mb-10">
                <a
                  href={`tel:+91${siteConfig.contact.phone1}`}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 bg-[#E8D2B5] flex items-center justify-center shrink-0 group-hover:bg-[#590907] transition-colors rounded-xs">
                    <Phone size={18} className="text-[#590907] group-hover:text-[#FAF6F0] transition-colors" />
                  </div>
                  <div>
                    <p className="font-manrope text-xs uppercase tracking-wider text-[#A5A79B] mb-0.5 font-semibold">Primary Contact</p>
                    <p className="font-cormorant text-xl text-[#2A1616] font-semibold group-hover:text-[#590907] transition-colors">
                      {siteConfig.contact.phone1Display}
                    </p>
                  </div>
                </a>

                <a
                  href={`tel:+91${siteConfig.contact.phone2}`}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 bg-[#E8D2B5] flex items-center justify-center shrink-0 group-hover:bg-[#590907] transition-colors rounded-xs">
                    <Phone size={18} className="text-[#590907] group-hover:text-[#FAF6F0] transition-colors" />
                  </div>
                  <div>
                    <p className="font-manrope text-xs uppercase tracking-wider text-[#A5A79B] mb-0.5 font-semibold">Alternate Contact</p>
                    <p className="font-cormorant text-xl text-[#2A1616] font-semibold group-hover:text-[#590907] transition-colors">
                      {siteConfig.contact.phone2Display}
                    </p>
                  </div>
                </a>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 bg-[#E8D2B5] flex items-center justify-center shrink-0 group-hover:bg-[#25D366] transition-colors rounded-xs">
                    <MessageCircle size={18} className="text-[#590907] group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <p className="font-manrope text-xs uppercase tracking-wider text-[#A5A79B] mb-0.5 font-semibold">WhatsApp</p>
                    <p className="font-cormorant text-xl text-[#2A1616] font-semibold group-hover:text-[#25D366] transition-colors">
                      Chat with Us
                    </p>
                  </div>
                </a>

                <a
                  href={siteConfig.contact.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 bg-[#E8D2B5] flex items-center justify-center shrink-0 group-hover:bg-[#590907] transition-colors rounded-xs">
                    <InstagramIcon size={18} className="text-[#590907] group-hover:text-[#FAF6F0] transition-colors" />
                  </div>
                  <div>
                    <p className="font-manrope text-xs uppercase tracking-wider text-[#A5A79B] mb-0.5 font-semibold">Instagram</p>
                    <p className="font-cormorant text-xl text-[#2A1616] font-semibold group-hover:text-[#590907] transition-colors">
                      {siteConfig.contact.instagramHandle}
                    </p>
                  </div>
                </a>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#E8D2B5] flex items-center justify-center shrink-0 rounded-xs">
                    <MapPin size={18} className="text-[#590907]" />
                  </div>
                  <div>
                    <p className="font-manrope text-xs uppercase tracking-wider text-[#A5A79B] mb-0.5 font-semibold">Address</p>
                    <p className="font-cormorant text-xl text-[#2A1616] font-semibold leading-snug">
                      {siteConfig.address.street},<br />
                      {siteConfig.address.city} — {siteConfig.address.pincode}
                    </p>
                    <a
                      href={`https://maps.google.com/?q=${siteConfig.address.mapsQuery}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-manrope text-xs text-[#590907] mt-1 inline-block font-semibold hover:underline"
                    >
                      Get Directions →
                    </a>
                  </div>
                </div>
              </div>

              {/* Quick WhatsApp CTA */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-7 py-4 bg-[#25D366] text-white font-manrope font-semibold text-sm hover:bg-[#128C7E] transition-colors duration-300 shadow-md"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                Chat on WhatsApp — Instant Response
              </a>
            </div>

            {/* Right: form */}
            <div className="bg-[#E8D2B5]/25 border border-[#E8D2B5] p-8 lg:p-10 shadow-xs">
              <h2 className="font-cormorant text-2xl text-[#2A1616] font-semibold mb-2">Send Us an Enquiry</h2>
              <p className="font-inter text-sm text-[#6B665E] mb-8">
                Fill in the details below and we&apos;ll get back to you as soon as possible.
              </p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="bg-[#E8D2B5]/20 py-12 border-t border-[#E8D2B5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#FAF6F0] border border-[#E8D2B5] flex items-center justify-center h-64 lg:h-80 shadow-xs">
            <div className="text-center">
              <MapPin size={32} className="text-[#590907] mx-auto mb-3" />
              <p className="font-cormorant text-xl text-[#2A1616] font-semibold">Mettu Street, Butt Road</p>
              <p className="font-inter text-sm text-[#6B665E] mb-4">Chennai — 600016, Tamil Nadu</p>
              <a
                href={`https://maps.google.com/?q=${siteConfig.address.mapsQuery}`}
                target="_blank"
                rel="noopener noreferrer"
                className="font-manrope text-sm font-semibold text-[#590907] border-b-2 border-[#590907] hover:text-[#2A1616] hover:border-[#2A1616] transition-colors"
              >
                Open in Google Maps →
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
