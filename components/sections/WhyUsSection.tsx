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
    <section className="bg-theme-primary py-20 lg:py-32" aria-label="Why Choose E.G. Interiors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="max-w-2xl mb-16">
          <p className="label-sm text-theme-surface mb-4 tracking-widest">Our Difference</p>
          <h2 className="heading-xl text-theme-bg mb-6">
            Why Choose{" "}
            <em className="italic text-theme-surface">E.G. Interiors?</em>
          </h2>
          <p className="body-lg text-theme-bg/75">
            We are committed to delivering exceptional design experiences — from the first conversation to the final handover.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {whyChooseUs.map((item) => {
            const Icon = iconMap[item.icon] || Sparkles;
            return (
              <div
                key={item.title}
                className="border border-theme-surface/25 p-8 hover:border-theme-surface transition-all duration-300 group bg-theme-dark/30 backdrop-blur-xs"
              >
                <div className="w-12 h-12 flex items-center justify-center bg-theme-bg/10 mb-6 group-hover:bg-theme-surface transition-colors rounded-xs">
                  <Icon size={22} className="text-theme-surface group-hover:text-theme-primary transition-colors" />
                </div>
                <h3 className="font-cormorant text-xl text-theme-bg font-semibold mb-3">
                  {item.title}
                </h3>
                <p className="font-inter text-sm text-theme-bg/75 leading-relaxed">
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
