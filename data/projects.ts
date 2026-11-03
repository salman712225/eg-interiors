export type ProjectCategory =
  | "Residential"
  | "Living Room"
  | "Bedroom"
  | "Kitchen"
  | "Commercial"
  | "Office";

export type Project = {
  id: string;
  slug: string;
  title: string;
  location: string;
  category: ProjectCategory;
  description: string;
  concept: string;
  image: string;
  gallery: string[];
  featured: boolean;
  tags: string[];
};

export const projects: Project[] = [
  {
    id: "1",
    slug: "contemporary-living-room-chennai",
    title: "Contemporary Living Room",
    location: "Chennai, Tamil Nadu",
    category: "Living Room",
    description:
      "A warm, contemporary living space designed with layered textures, ambient lighting, and bespoke furniture.",
    concept:
      "The design concept centres on warm neutrals, natural materials, and carefully curated lighting to create an inviting, timeless living environment.",
    image: "/images/projects/project-1.jpg",
    gallery: ["/images/projects/project-1.jpg"],
    featured: true,
    tags: ["Living Room", "Residential", "Contemporary"],
  },
  {
    id: "2",
    slug: "elegant-bedroom-design",
    title: "Elegant Master Bedroom",
    location: "Chennai, Tamil Nadu",
    category: "Bedroom",
    description:
      "A serene master bedroom retreat with custom headboard, built-in wardrobes, and a refined neutral palette.",
    concept:
      "Calming tones, soft textures, and a clutter-free layout create a bedroom that feels like a true sanctuary.",
    image: "/images/projects/project-2.jpg",
    gallery: ["/images/projects/project-2.jpg"],
    featured: true,
    tags: ["Bedroom", "Residential", "Elegant"],
  },
  {
    id: "3",
    slug: "modern-apartment-interior",
    title: "Modern Apartment Interior",
    location: "Chennai, Tamil Nadu",
    category: "Residential",
    description:
      "A complete apartment interior with cohesive design language, smart storage, and warm material choices.",
    concept:
      "A unified palette and flowing spatial planning create a home that feels both spacious and intimate.",
    image: "/images/projects/project-3.jpg",
    gallery: ["/images/projects/project-3.jpg"],
    featured: true,
    tags: ["Residential", "Apartment", "Modern"],
  },
  {
    id: "4",
    slug: "modular-kitchen-design",
    title: "Contemporary Modular Kitchen",
    location: "Chennai, Tamil Nadu",
    category: "Kitchen",
    description:
      "A functional, stylish modular kitchen with premium finishes, smart storage, and ergonomic design.",
    concept:
      "Clean lines, integrated storage, and premium materials make this kitchen both beautiful and a joy to cook in.",
    image: "/images/projects/project-4.jpg",
    gallery: ["/images/projects/project-4.jpg"],
    featured: true,
    tags: ["Kitchen", "Modular", "Residential"],
  },
  {
    id: "5",
    slug: "warm-living-space",
    title: "Warm & Inviting Living Space",
    location: "Chennai, Tamil Nadu",
    category: "Living Room",
    description:
      "A thoughtfully designed living room balancing warmth, comfort, and an elevated sense of style.",
    concept:
      "Earthy tones, layered textiles, and considered furniture placement come together to create an irresistibly comfortable home.",
    image: "/images/projects/project-5.jpg",
    gallery: ["/images/projects/project-5.jpg"],
    featured: false,
    tags: ["Living Room", "Warm", "Residential"],
  },
  {
    id: "6",
    slug: "contemporary-bedroom-retreat",
    title: "Contemporary Bedroom Retreat",
    location: "Chennai, Tamil Nadu",
    category: "Bedroom",
    description:
      "A beautifully proportioned bedroom with custom joinery, accent lighting, and a restrained material palette.",
    concept:
      "Quiet luxury defined by texture, proportion, and carefully selected materials.",
    image: "/images/projects/project-6.jpg",
    gallery: ["/images/projects/project-6.jpg"],
    featured: false,
    tags: ["Bedroom", "Contemporary", "Residential"],
  },
  {
    id: "7",
    slug: "refined-residential-interior",
    title: "Refined Residential Interior",
    location: "Chennai, Tamil Nadu",
    category: "Residential",
    description:
      "A complete home transformation with cohesive design across living, dining, and bedroom spaces.",
    concept:
      "Consistency of palette and material creates a seamless, sophisticated living environment throughout the home.",
    image: "/images/projects/project-7.jpg",
    gallery: ["/images/projects/project-7.jpg"],
    featured: false,
    tags: ["Residential", "Complete", "Sophisticated"],
  },
];

export const projectCategories = [
  "All",
  "Residential",
  "Living Room",
  "Bedroom",
  "Kitchen",
  "Commercial",
  "Office",
] as const;

export const featuredProjects = projects.filter((p) => p.featured);

