import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { config } from "@/data/config";

import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import Script from "next/script";
import AppOverlays from "@/components/app-overlays";
import { Providers } from "@/components/providers";
import { GoogleAnalytics } from "@next/third-parties/google";

export const metadata: Metadata = {
  metadataBase: new URL(config.site),
  title: {
    default: config.title,
    template: `%s | Meet Brahmbhatt`,
  },
  description: config.description.long,
  keywords: config.keywords,
  authors: [{ name: config.author }],
  creator: config.author,
  openGraph: {
    title: config.title,
    description: config.description.short,
    url: config.site,
    siteName: "Meet Brahmbhatt — Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: config.title,
    description: config.description.short,
    creator: "@meetbrahmbhatt",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  category: "technology",
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-display",
});

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: config.author,
  url: config.site,
  email: config.email,
  image: config.ogImg,
  jobTitle: "AI/ML Engineer & Data Scientist",
  description: config.description.short,
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Stony Brook University",
  },
  sameAs: [config.social.linkedin, config.social.github].filter(Boolean),
  knowsAbout: [
    "Machine Learning",
    "Large Language Models",
    "Data Science",
    "Natural Language Processing",
    "Retrieval-Augmented Generation",
    "LangChain",
    "PyTorch",
    "Next.js",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={[inter.variable, spaceGrotesk.variable, "font-display"].join(" ")} suppressHydrationWarning>
      <head>
        <Script
          id="json-ld-person"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Script
          defer
          src={process.env.UMAMI_DOMAIN}
          data-website-id={process.env.UMAMI_SITE_ID}
        ></Script>
      </head>
      <body>
        <Providers>
          <Header />
          {children}
          <Footer />
          <AppOverlays />
        </Providers>
        {process.env.NEXT_PUBLIC_GA_ID && (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
        )}
      </body>
    </html>
  );
}
