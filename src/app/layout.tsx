import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Search Engine Journal - SEO News, Tips & Digital Marketing Insights",
  description: "Leading digital marketing publication providing the latest SEO news, content marketing strategies, paid media insights, and social media trends for marketing professionals.",
  keywords: "SEO, search engine optimization, digital marketing, content marketing, paid media, social media marketing, PPC, online marketing",
  authors: [{ name: "Search Engine Journal" }],
  openGraph: {
    title: "Search Engine Journal - Digital Marketing News & Insights",
    description: "Stay ahead with the latest SEO strategies, content marketing tips, and digital marketing news from industry experts.",
    url: "https://searchenginejournal.com",
    siteName: "Search Engine Journal",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Search Engine Journal",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Search Engine Journal - Digital Marketing News & Insights",
    description: "Leading digital marketing publication with the latest SEO news and marketing strategies.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-site-verification-code",
  },
  category: "Digital Marketing",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://searchenginejournal.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Structured Data Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Search Engine Journal",
              "description": "Leading digital marketing publication providing the latest SEO news, content marketing strategies, and digital marketing insights.",
              "url": "https://searchenginejournal.com",
              "potentialAction": {
                "@type": "SearchAction",
                "target": {
                  "@type": "EntryPoint",
                  "urlTemplate": "https://searchenginejournal.com/search?q={search_term_string}"
                },
                "query-input": "required name=search_term_string"
              },
              "publisher": {
                "@type": "Organization",
                "name": "Search Engine Journal",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://searchenginejournal.com/logo.png"
                }
              }
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
