import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { siteConfig } from "@/data/site-config";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for E.G. Interiors website visitors and clients.",
};

export default function PrivacyPolicyPage() {
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
        <h1 className="heading-lg text-[#2A1616] mb-8">Privacy Policy</h1>

        <div className="space-y-6 font-inter text-sm text-[#6B665E] leading-relaxed">
          <p>
            At <strong className="text-[#2A1616]">{siteConfig.name}</strong>, we respect your privacy and are committed to protecting any personal information you share with us. This policy describes how we collect, use, and protect your information when you visit our website or submit an enquiry.
          </p>

          <h2 className="font-cormorant text-xl text-[#2A1616] font-semibold pt-4">1. Information We Collect</h2>
          <p>
            When you submit an enquiry form or contact us via WhatsApp/Phone, we may collect:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Your full name</li>
            <li>Email address</li>
            <li>Phone number / WhatsApp contact</li>
            <li>Project location, property details, and budget preferences</li>
            <li>Any project notes or messages you submit</li>
          </ul>

          <h2 className="font-cormorant text-xl text-[#2A1616] font-semibold pt-4">2. How We Use Your Information</h2>
          <p>
            We use your contact details solely to:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Respond to your interior design consultations and quotation requests</li>
            <li>Schedule site visits or 3D visualization discussions</li>
            <li>Coordinate and manage active interior design projects</li>
          </ul>
          <p>
            We do not sell, rent, or trade your personal data to third parties.
          </p>

          <h2 className="font-cormorant text-xl text-[#2A1616] font-semibold pt-4">3. Contact & Inquiries</h2>
          <p>
            If you have questions regarding this Privacy Policy or wish to update your details, please reach out to us at:
          </p>
          <p className="text-[#2A1616] font-medium bg-[#E8D2B5]/30 p-4 border border-[#E8D2B5]">
            {siteConfig.name}<br />
            {siteConfig.address.full}<br />
            Phone: {siteConfig.contact.phone1Display} / {siteConfig.contact.phone2Display}
          </p>
        </div>
      </div>
    </div>
  );
}
