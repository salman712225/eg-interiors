export interface ColorTheme {
  id: string;
  number: string;
  name: string;
  vibe: string;
  colors: {
    primary: string;
    surface: string;
    secondary: string;
    bg: string;
    dark: string;
    muted: string;
    onDark: string;
    onDarkAccent: string;
  };
  rgb: {
    primary: string;
    surface: string;
    secondary: string;
    bg: string;
    dark: string;
    muted: string;
    onDark: string;
    onDarkAccent: string;
  };
}

function hexToRgb(hex: string): string {
  const clean = hex.replace("#", "");
  const r = parseInt(clean.substring(0, 2), 16);
  const g = parseInt(clean.substring(2, 4), 16);
  const b = parseInt(clean.substring(4, 6), 16);
  return `${r} ${g} ${b}`;
}

function createTheme(
  id: string,
  number: string,
  name: string,
  vibe: string,
  colors: ColorTheme["colors"]
): ColorTheme {
  return {
    id,
    number,
    name,
    vibe,
    colors,
    rgb: {
      primary: hexToRgb(colors.primary),
      surface: hexToRgb(colors.surface),
      secondary: hexToRgb(colors.secondary),
      bg: hexToRgb(colors.bg),
      dark: hexToRgb(colors.dark),
      muted: hexToRgb(colors.muted),
      onDark: hexToRgb(colors.onDark),
      onDarkAccent: hexToRgb(colors.onDarkAccent),
    },
  };
}

export const colorThemes: ColorTheme[] = [
  createTheme("1", "01", "Oxblood & Champagne", "Bold Italian Luxury", {
    primary: "#590907",
    surface: "#E8D2B5",
    secondary: "#A5A79B",
    bg: "#FAF6F0",
    dark: "#2A1616",
    muted: "#6B665E",
    onDark: "#FAF6F0",
    onDarkAccent: "#E8D2B5",
  }),
  createTheme("2", "02", "Emerald & Brushed Gold", "Lush Botanical Luxury", {
    primary: "#0D4A3A",
    surface: "#F0D9A8",
    secondary: "#7FA896",
    bg: "#F8FAF7",
    dark: "#0B2820",
    muted: "#536961",
    onDark: "#F8FAF7",
    onDarkAccent: "#F0D9A8",
  }),
  createTheme("3", "03", "Sapphire & Warm Amber", "Crisp Coastal Prestige", {
    primary: "#123462",
    surface: "#F4D3A1",
    secondary: "#7D9BB8",
    bg: "#F7F9FC",
    dark: "#0D1F3C",
    muted: "#52637A",
    onDark: "#F7F9FC",
    onDarkAccent: "#F4D3A1",
  }),
  createTheme("4", "04", "Terracotta & Warm Ivory", "Sun-Baked Mediterranean", {
    primary: "#9E3B24",
    surface: "#F2D6BE",
    secondary: "#8E9B87",
    bg: "#FCF7F2",
    dark: "#381810",
    muted: "#6E5A52",
    onDark: "#FCF7F2",
    onDarkAccent: "#F2D6BE",
  }),
  createTheme("5", "05", "Peacock Teal & Copper", "Vibrant Jewel Modern", {
    primary: "#0C545E",
    surface: "#F3CBB6",
    secondary: "#87A9A8",
    bg: "#F6FAFA",
    dark: "#0B2E33",
    muted: "#506B6E",
    onDark: "#F6FAFA",
    onDarkAccent: "#F3CBB6",
  }),
  createTheme("6", "06", "Royal Plum & Rose Silk", "Opulent Boutique Hotel", {
    primary: "#541B46",
    surface: "#F0D8C8",
    secondary: "#A895A4",
    bg: "#FBF7FA",
    dark: "#290D22",
    muted: "#6A5665",
    onDark: "#FBF7FA",
    onDarkAccent: "#F0D8C8",
  }),
  createTheme("7", "07", "Forest Olive & Bronze", "Organic Architectural", {
    primary: "#354A21",
    surface: "#ECD4AE",
    secondary: "#A2A68E",
    bg: "#F9FAF5",
    dark: "#1B2611",
    muted: "#5B6350",
    onDark: "#F9FAF5",
    onDarkAccent: "#ECD4AE",
  }),
  createTheme("8", "08", "Cobalt Indigo & Saffron", "Vibrant Art Gallery", {
    primary: "#242B6E",
    surface: "#F6DBA6",
    secondary: "#8D94B8",
    bg: "#F8F9FD",
    dark: "#141840",
    muted: "#555B7A",
    onDark: "#F8F9FD",
    onDarkAccent: "#F6DBA6",
  }),
  createTheme("9", "09", "Ruby Garnet & Blush Pearl", "Statement Luxury", {
    primary: "#8B152B",
    surface: "#F5D8CE",
    secondary: "#A49899",
    bg: "#FCF8F7",
    dark: "#380812",
    muted: "#6E585C",
    onDark: "#FCF8F7",
    onDarkAccent: "#F5D8CE",
  }),
  createTheme("10", "10", "Obsidian & Vibrant Brass", "Modern Monochrome Gold", {
    primary: "#1F2428",
    surface: "#E9C98B",
    secondary: "#8A9298",
    bg: "#FAFAFA",
    dark: "#14171A",
    muted: "#5A6066",
    onDark: "#FAFAFA",
    onDarkAccent: "#E9C98B",
  }),
];

