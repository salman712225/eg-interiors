export const siteConfig = {
  name: "E.G. Interiors",
  tagline: "Dreams in Reality",
  description:
    "At E.G Interiors, we transform ideas into thoughtfully designed spaces that reflect your lifestyle, needs, and personality. From concept and 3D visualization to complete interior execution, we focus on quality, detail, and client satisfaction at every stage.",
  shortDescription:
    "Premium interior design studio based in Chennai, Tamil Nadu — transforming spaces into beautiful, personalized experiences.",

  contact: {
    phone1: "8838594804",
    phone2: "7397308329",
    phone1Display: "+91 88385 94804",
    phone2Display: "+91 73973 08329",
    whatsapp: "918838594804",
    whatsappMessage:
      "Hello E.G. Interiors! I visited your website and would like to know more about your interior design services. Please contact me.",
    email: "", // to be configured
    instagram: "https://www.instagram.com/e.g.interiors_1711/",
    instagramHandle: "@e.g.interiors_1711",
  },

  address: {
    street: "Mettu Street, Butt Road",
    city: "Chennai",
    state: "Tamil Nadu",
    pincode: "600016",
    country: "India",
    full: "Mettu Street, Butt Road, Chennai - 600016, Tamil Nadu, India.",
    mapsQuery: "Mettu+Street+Butt+Road+Chennai+600016",
  },

  seo: {
    titleTemplate: "%s | E.G. Interiors — Dreams in Reality",
    defaultTitle: "E.G. Interiors | Premium Interior Design in Chennai",
    defaultDescription:
      "E.G. Interiors is a premium interior design studio in Chennai offering residential & commercial design, 3D visualization, modular kitchens, and complete interior execution.",
    keywords: [
      "interior designers in Chennai",
      "interior design company Chennai",
      "residential interior designers Chennai",
      "modular kitchen design Chennai",
      "bedroom interior design Chennai",
      "commercial interior design Chennai",
      "3D interior visualization Chennai",
      "luxury interior design Chennai",
      "modern home interiors Chennai",
    ],
  },
};

export const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(
  siteConfig.contact.whatsappMessage
)}`;

