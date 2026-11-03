export type ProcessStep = {
  number: string;
  title: string;
  description: string;
  detail: string;
};

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Initial Consultation",
    description: "Understanding your vision, requirements, and budget.",
    detail:
      "We begin with a detailed consultation to understand your requirements, expectations, property type, and budget. This helps us align our design direction with your vision from the very start.",
  },
  {
    number: "02",
    title: "Concept & Planning",
    description: "Developing design direction, layouts, and mood boards.",
    detail:
      "We develop a comprehensive design concept including space layouts, mood boards, material references, and a clear design direction that reflects your lifestyle and preferences.",
  },
  {
    number: "03",
    title: "3D Visualization",
    description: "Realistic visual previews of your proposed interiors.",
    detail:
      "Before any work begins, we present photorealistic 3D visualizations of every space. You see exactly what your finished interior will look like — giving you confidence and the opportunity to refine the design.",
  },
  {
    number: "04",
    title: "Execution",
    description: "Coordinating and supervising the interior execution.",
    detail:
      "Our experienced team coordinates all trades, materials, and timelines to execute the agreed design to the highest standard. We maintain transparent communication throughout the entire process.",
  },
  {
    number: "05",
    title: "Final Handover",
    description: "Completing the inspection and delivering your dream space.",
    detail:
      "We conduct a thorough final inspection of every detail before handing over your completed interior. Your complete satisfaction is our only benchmark for success.",
  },
];

export const whyChooseUs = [
  {
    title: "Personalized Design Solutions",
    description:
      "Every project is unique. We design specifically around your lifestyle, preferences, and vision — never generic, always personal.",
    icon: "Sparkles",
  },
  {
    title: "Creative Concepts",
    description:
      "Thoughtful, original design concepts that balance beauty with function and bring fresh ideas to every space.",
    icon: "Lightbulb",
  },
  {
    title: "Detailed 3D Visualization",
    description:
      "See your space before we build it. Photorealistic renders give you full confidence in every design decision.",
    icon: "Layers",
  },
  {
    title: "Quality-Focused Execution",
    description:
      "Careful supervision at every stage ensures your interiors are executed to the highest standard of craftsmanship.",
    icon: "ShieldCheck",
  },
  {
    title: "Attention to Every Detail",
    description:
      "From the overall concept to the smallest finishing touch, no detail is overlooked in our design process.",
    icon: "Eye",
  },
  {
    title: "Customer-Centric Approach",
    description:
      "Your satisfaction is our priority. We listen, adapt, and keep you informed throughout your design journey.",
    icon: "Heart",
  },
];

