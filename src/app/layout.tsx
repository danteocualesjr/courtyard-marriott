import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site/site-header";
import { SiteFooter } from "@/components/site/site-footer";
import { Toaster } from "@/components/ui/toaster";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-display",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://thecourtyard.example.com"),
  title: {
    default: "The Courtyard — A Five-Star Sanctuary",
    template: "%s · The Courtyard",
  },
  description:
    "An iconic five-star urban hotel where heritage, design, and service converge. Discover signature suites, world-class dining, and a sanctuary spa at The Courtyard.",
  keywords: [
    "luxury hotel",
    "five-star hotel",
    "The Courtyard",
    "boutique hotel",
    "spa",
    "fine dining",
    "weddings",
  ],
  openGraph: {
    title: "The Courtyard — A Five-Star Sanctuary",
    description:
      "Heritage, design, and service converge at The Courtyard, an iconic five-star urban hotel.",
    type: "website",
    siteName: "The Courtyard",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Courtyard",
    description:
      "An iconic five-star urban hotel. Heritage. Design. Service.",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

const hotelJsonLd = {
  "@context": "https://schema.org",
  "@type": "Hotel",
  name: "The Courtyard",
  url: "https://thecourtyard.example.com",
  telephone: "+1 555 555 0100",
  email: "stay@thecourtyard.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "14 Garden Lane",
    addressLocality: "The Old Quarter",
  },
  amenityFeature: [
    { "@type": "LocationFeatureSpecification", name: "Spa", value: true },
    { "@type": "LocationFeatureSpecification", name: "Fine dining", value: true },
    { "@type": "LocationFeatureSpecification", name: "Private events", value: true },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="min-h-screen bg-ivory text-charcoal antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-charcoal focus:text-ivory focus:px-4 focus:py-2 focus:text-xs focus:tracking-widest focus:uppercase"
        >
          Skip to content
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(hotelJsonLd) }}
        />
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
        <Toaster />
      </body>
    </html>
  );
}
