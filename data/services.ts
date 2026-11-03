export type Service = {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  approach: string;
  deliverables: string[];
  image: string;
  icon: string;
  featured: boolean;
};

export const services: Service[] = [
  {
    slug: "residential-interiors",
    title: "Residential Interior Design",
    shortDescription:
      "Complete home interior design tailored to your lifestyle and personality.",
    description:
      "We design beautiful, functional living spaces for apartments, villas, and independent homes. Every project is a reflection of you — your tastes, habits, and aspirations — designed with precision and care.",
    approach:
      "We begin with a thorough understanding of your lifestyle and preferences before developing a design concept that balances aesthetics, functionality, and budget. Every detail is thoughtfully considered.",
    deliverables: [
      "Concept presentation and mood boards",
      "Space planning and layout",
      "3D visualizations",
      "Material and finish selection",
      "Complete interior execution",
      "Quality checks and final handover",
    ],
    image: "/images/projects/project-1.jpg",
    icon: "Home",
    featured: true,
  },
  {
    slug: "living-room-interiors",
    title: "Living Room Interiors",
    shortDescription:
      "Elegant living room designs that invite comfort and conversation.",
    description:
      "Your living room is the heart of your home. We design living spaces that are welcoming, visually stunning, and perfectly suited to how you live and entertain.",
    approach:
      "We focus on spatial balance, furniture selection, lighting layers, and material textures to create a living room that feels both curated and comfortable.",
    deliverables: [
      "Layout planning",
      "Furniture design and selection",
      "Lighting design",
      "Soft furnishings and décor",
      "Feature wall design",
      "3D visualization",
    ],
    image: "/images/projects/project-2.jpg",
    icon: "Sofa",
    featured: true,
  },
  {
    slug: "bedroom-interiors",
    title: "Bedroom Interiors",
    shortDescription:
      "Serene, personalized bedrooms designed for rest and rejuvenation.",
    description:
      "We create bedrooms that feel like a personal retreat — calm, beautiful, and designed around your daily routines and preferences.",
    approach:
      "Thoughtful space planning, mood-enhancing colour palettes, storage solutions, and quality finishes come together to create your ideal bedroom sanctuary.",
    deliverables: [
      "Bedroom layout and space planning",
      "Wardrobe and storage design",
      "Bed and furniture selection",
      "Lighting plan",
      "Décor and upholstery",
      "3D visualization",
    ],
    image: "/images/projects/project-3.jpg",
    icon: "BedDouble",
    featured: true,
  },
  {
    slug: "modular-kitchens",
    title: "Modular Kitchen Design",
    shortDescription:
      "Smart, stylish modular kitchens engineered for comfort and efficiency.",
    description:
      "We design kitchens that are as functional as they are beautiful. From layouts to finishes, every element is selected to make your kitchen a pleasure to cook and live in.",
    approach:
      "Ergonomic planning, premium materials, smart storage, and a design language that connects seamlessly with your home.",
    deliverables: [
      "Kitchen layout planning",
      "Cabinet and storage design",
      "Counter and material selection",
      "Appliance placement",
      "3D visualization",
      "Complete installation",
    ],
    image: "/images/projects/project-4.jpg",
    icon: "ChefHat",
    featured: true,
  },
  {
    slug: "wardrobes",
    title: "Wardrobe & Storage Solutions",
    shortDescription:
      "Custom wardrobes and storage systems designed for your space.",
    description:
      "We design bespoke wardrobes and storage solutions that maximize your space while maintaining a clean, elegant appearance.",
    approach:
      "From sliding wardrobes to walk-in closets, we plan every compartment, shelf, and drawer around your actual storage needs.",
    deliverables: [
      "Storage needs assessment",
      "Custom wardrobe design",
      "Internal organization planning",
      "Material and finish selection",
      "3D visualization",
      "Installation",
    ],
    image: "/images/projects/project-5.jpg",
    icon: "LayoutGrid",
    featured: false,
  },
  {
    slug: "commercial-interiors",
    title: "Commercial Interior Design",
    shortDescription:
      "Professional commercial spaces that reflect your brand and inspire productivity.",
    description:
      "We design offices, retail spaces, and commercial environments that communicate professionalism, support workflow, and leave lasting impressions.",
    approach:
      "Understanding your brand, team dynamics, and operational requirements guides every decision — from spatial planning to furniture and finishes.",
    deliverables: [
      "Space analysis and planning",
      "Brand-aligned design concept",
      "Furniture and fixture selection",
      "Lighting design",
      "3D visualization",
      "Full project execution",
    ],
    image: "/images/projects/project-6.jpg",
    icon: "Building2",
    featured: true,
  },
  {
    slug: "3d-visualization",
    title: "3D Interior Visualization",
    shortDescription:
      "Photorealistic 3D renders that bring your design to life before execution.",
    description:
      "See your interiors before they are built. Our detailed 3D visualizations give you a realistic preview of your finished space so you can make confident decisions.",
    approach:
      "We create accurate, photorealistic renders of every room, capturing materials, lighting, and furniture placement with precision.",
    deliverables: [
      "Room-by-room 3D renders",
      "Multiple camera angles",
      "Material and finish visualization",
      "Lighting simulation",
      "Design revision walkthrough",
    ],
    image: "/images/projects/project-7.jpg",
    icon: "Layers",
    featured: false,
  },
  {
    slug: "interior-execution",
    title: "Complete Interior Execution",
    shortDescription:
      "End-to-end project management from concept to final handover.",
    description:
      "We manage the complete execution of your interior project — coordinating contractors, materials, timelines, and quality — so you don't have to.",
    approach:
      "A dedicated project manager oversees every stage of the process, ensuring quality workmanship, timely completion, and adherence to the agreed design.",
    deliverables: [
      "Project planning and scheduling",
      "Contractor coordination",
      "Material procurement",
      "Quality supervision",
      "Progress updates",
      "Final inspection and handover",
    ],
    image: "/images/projects/project-1.jpg",
    icon: "Hammer",
    featured: false,
  },
];

export const featuredServices = services.filter((s) => s.featured);

