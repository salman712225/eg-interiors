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
        // Dynamic CSS-variable driven theme tokens
        theme: {
          primary: "rgb(var(--theme-primary) / <alpha-value>)",
          surface: "rgb(var(--theme-surface) / <alpha-value>)",
          secondary: "rgb(var(--theme-secondary) / <alpha-value>)",
          bg: "rgb(var(--theme-bg) / <alpha-value>)",
          dark: "rgb(var(--theme-dark) / <alpha-value>)",
          muted: "rgb(var(--theme-muted) / <alpha-value>)",
          "on-dark": "rgb(var(--theme-on-dark) / <alpha-value>)",
          "on-dark-accent": "rgb(var(--theme-on-dark-accent) / <alpha-value>)",
        },

        // Legacy static references (also mapped to active theme variables)
        oxblood: "rgb(var(--theme-primary) / <alpha-value>)",
        champagne: "rgb(var(--theme-surface) / <alpha-value>)",
        sage: "rgb(var(--theme-secondary) / <alpha-value>)",
        linen: "rgb(var(--theme-bg) / <alpha-value>)",
        ivory: "rgb(var(--theme-bg) / <alpha-value>)",
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
