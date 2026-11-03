import { Sparkles, Lightbulb, Layers, ShieldCheck, Eye, Heart } from "lucide-react";
import { whyChooseUs } from "@/data/process";

const iconMap: Record<string, React.ElementType> = {
  Sparkles,
  Lightbulb,
  Layers,
  ShieldCheck,
  Eye,
  Heart,
};

export default function WhyUsSection() {
  return (
    <section className="bg-[#392F29] py-20 lg:py-32" aria-label="Why Choose E.G. Interiors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="max-w-2xl mb-16">
          <p className="label-sm text-[#CFAB93] mb-4">Our Difference</p>
          <h2 className="heading-xl text-[#FEF0E5] mb-6">
            Why Choose{" "}
            <em className="italic text-[#CFAB93]">E.G. Interiors?</em>
          </h2>
          <p className="body-lg text-[#FEF0E5]/60">
            We are committed to delivering exceptional design experiences — from the first conversation to the final handover.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {whyChooseUs.map((item) => {
            const Icon = iconMap[item.icon] || Sparkles;
            return (
              <div
                key={item.title}
                className="border border-[#FEF0E5]/10 p-8 hover:border-[#CFAB93]/40 transition-all duration-300 group"
              >
                <div className="w-12 h-12 flex items-center justify-center bg-[#FEF0E5]/5 mb-6 group-hover:bg-[#CFAB93]/10 transition-colors">
                  <Icon size={22} className="text-[#CFAB93]" />
                </div>
                <h3 className="font-cormorant text-xl text-[#FEF0E5] font-semibold mb-3">
                  {item.title}
                </h3>
                <p className="font-inter text-sm text-[#FEF0E5]/60 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

