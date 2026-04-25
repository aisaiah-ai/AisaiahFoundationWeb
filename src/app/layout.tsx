import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { siteConfig } from "@/content/site";
import { JsonLd } from "@/components/seo/json-ld";
import {
  getOrganizationSchema,
  getWebsiteSchema,
} from "@/lib/structured-data";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default:
      "AIsaiah — Daily Prayer, Reflection & Service | Grow in Your Faith",
    template: "%s | Aisaiah Foundation",
  },
  description: siteConfig.description,
  manifest: "/manifest.webmanifest",
  authors: [{ name: "Aisaiah Foundation" }],
  creator: "Aisaiah Foundation",
  publisher: "Aisaiah Foundation",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: "Aisaiah Foundation",
    title: "AIsaiah — Daily Prayer, Reflection & Service",
    description: siteConfig.description,
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "AIsaiah — helping people grow in faith through prayer, reflection, and service",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AIsaiah — Daily Prayer, Reflection & Service",
    description: siteConfig.description,
    images: ["/twitter-image.png"],
  },
  robots: process.env.NEXT_PUBLIC_SITE_ENV === "production"
    ? {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
          "max-video-preview": -1,
          "max-image-preview": "large",
          "max-snippet": -1,
        },
      }
    : {
        index: false,
        follow: false,
      },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const organizationSchema = getOrganizationSchema();
  const websiteSchema = getWebsiteSchema();

  return (
    <html lang="en" className={`scroll-smooth ${playfair.variable} ${inter.variable}`}>
      <body className="min-h-screen flex flex-col font-sans">
        <JsonLd data={organizationSchema} />
        <JsonLd data={websiteSchema} />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
