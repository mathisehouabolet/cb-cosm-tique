import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import "./globals.css";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { NewsletterModal } from "@/components/NewsletterModal";
import { StructuredData } from "@/components/StructuredData";

const siteUrl = "https://cbcosmetique.com";

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "CB COSMÉTIQUE",
      url: siteUrl,
      logo: `${siteUrl}/logo.png`,
      description: "Cosmétique naturelle de luxe pour la peau et les cheveux.",
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      name: "CB COSMÉTIQUE",
      url: siteUrl,
      publisher: { "@id": `${siteUrl}/#organization` },
      inLanguage: "fr-FR",
    },
  ],
};

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "CB COSMÉTIQUE — Beauté naturelle de luxe",
  description:
    "Beurre de karité, beurre de cacao, huile de chébé, savon noir d'Afrique — soins naturels premium par CB COSMÉTIQUE.",
  openGraph: {
    title: "CB COSMÉTIQUE",
    description: "Révélez votre beauté naturelle.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      data-theme="cbcosmétique"
      className={`${cormorant.variable} ${outfit.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <StructuredData data={structuredData} />
        {children}
        <NewsletterModal />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
