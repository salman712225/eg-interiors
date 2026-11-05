import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // User requested core palette:
        oxblood: "#590907",
        champagne: "#E8D2B5",
        sage: "#A5A79B",

        // Supporting luxury tones:
        linen: "#FAF6F0",
        cream: "#F4ECE1",
        "dark-espresso": "#2A1616",
        "muted-charcoal": "#6B665E",

        // Palette mapping aliases:
        ivory: "#FAF6F0",
        taupe: "#590907",
        "dusty-beige": "#E8D2B5",
        "dark-brown": "#590907",
        "soft-cream": "#F4ECE1",
        "warm-grey": "#A5A79B",
        "light-beige": "#E8D2B5",
      },
      fontFamily: {
        cormorant: ["var(--font-cormorant)", "Georgia", "serif"],
        playfair: ["var(--font-playfair)", "Georgia", "serif"],
        inter: ["var(--font-inter)", "system-ui", "sans-serif"],
        manrope: ["var(--font-manrope)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
