import type { Metadata } from "next";
import { Cormorant_Garamond, Playfair_Display, Inter, Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import ThemeSwitcher from "@/components/ui/ThemeSwitcher";
import { siteConfig } from "@/data/site-config";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.seo.defaultTitle,
    template: siteConfig.seo.titleTemplate,
  },
  description: siteConfig.seo.defaultDescription,
  keywords: siteConfig.seo.keywords,
  authors: [{ name: "E.G. Interiors" }],
  creator: "E.G. Interiors",
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "E.G. Interiors",
    title: siteConfig.seo.defaultTitle,
    description: siteConfig.seo.defaultDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.seo.defaultTitle,
    description: siteConfig.seo.defaultDescription,
  },
  metadataBase: new URL("https://eg-interiors.vercel.app"),
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-theme="1"
      suppressHydrationWarning
      className={`${cormorant.variable} ${playfair.variable} ${inter.variable} ${manrope.variable}`}
    >
      <head>
        <link rel="icon" href="/logo/Logo-removebg-preview.png" type="image/png" />
        <script
          dangerouslySetInnerHTML={{
            __html: `try{var t=localStorage.getItem('eg-interiors-theme');if(t){document.documentElement.setAttribute('data-theme',t);}}catch(e){}`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "HomeAndConstructionBusiness",
              name: "E.G. Interiors",
              description: siteConfig.seo.defaultDescription,
              url: "https://eg-interiors.vercel.app",
              telephone: ["+918838594804", "+917397308329"],
              address: {
                "@type": "PostalAddress",
                streetAddress: "Mettu Street, Butt Road",
                addressLocality: "Chennai",
                addressRegion: "Tamil Nadu",
                postalCode: "600016",
                addressCountry: "IN",
              },
              sameAs: ["https://www.instagram.com/e.g.interiors_1711/"],
              priceRange: "₹₹₹",
              areaServed: {
                "@type": "City",
                name: "Chennai",
              },
            }),
          }}
        />
      </head>
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <ThemeSwitcher />
        <WhatsAppButton />
      </body>
    </html>
  );
}
