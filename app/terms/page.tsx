import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { siteConfig } from "@/data/site-config";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms and conditions for E.G. Interiors services.",
};

export default function TermsPage() {
  return (
    <div className="pt-36 pb-24 bg-[#FAF6F0] min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 font-manrope text-xs text-[#590907] mb-8 hover:text-[#2A1616] transition-colors font-semibold"
        >
          <ArrowLeft size={14} /> Back to Home
        </Link>
        <p className="label-sm text-[#590907] mb-2 tracking-widest">Legal</p>
        <h1 className="heading-lg text-[#2A1616] mb-8">Terms & Conditions</h1>

        <div className="space-y-6 font-inter text-sm text-[#6B665E] leading-relaxed">
          <p>
            Welcome to <strong className="text-[#2A1616]">{siteConfig.name}</strong> (&quot;Dreams in Reality&quot;). By browsing our website or requesting interior design services, you agree to these standard terms.
          </p>

          <h2 className="font-cormorant text-xl text-[#2A1616] font-semibold pt-4">1. Scope of Services</h2>
          <p>
            E.G. Interiors offers architectural concept planning, 3D visualization, modular solutions, and full interior execution. Every project scope, timeline, and material schedule is formally documented in an agreed quotation/agreement before execution.
          </p>

          <h2 className="font-cormorant text-xl text-[#2A1616] font-semibold pt-4">2. Quotations & Consultations</h2>
          <p>
            Consultation quotes provided via our website or WhatsApp are initial estimates based on customer-provided requirements. Final pricing is confirmed after detailed space measurement and material selection.
          </p>

          <h2 className="font-cormorant text-xl text-[#2A1616] font-semibold pt-4">3. Contact Information</h2>
          <p className="text-[#2A1616] font-medium bg-[#E8D2B5]/30 p-4 border border-[#E8D2B5]">
            {siteConfig.name}<br />
            {siteConfig.address.full}<br />
            Contact: {siteConfig.contact.phone1Display}
          </p>
        </div>
      </div>
    </div>
  );
}
