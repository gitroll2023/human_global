import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HumanEdge Academy - International Humanities Education Platform",
  description: "Empowering professionals worldwide with humanities education for the AI era. Develop uniquely human skills through philosophy, critical thinking, leadership, and cultural intelligence.",
  keywords: "humanities education, philosophy courses, AI ethics, critical thinking, leadership training, online learning, LMS platform, digital humanities, liberal arts, professional development",
  authors: [{ name: "HumanEdge Academy" }],
  creator: "HumanEdge Academy",
  publisher: "HumanEdge Academy",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://humanedgeacademy.com",
    siteName: "HumanEdge Academy",
    title: "HumanEdge Academy - International Humanities Education Platform",
    description: "Empowering professionals worldwide with humanities education for the AI era",
    images: [
      {
        url: "https://humanedgeacademy.com/logo_symbol.png",
        width: 1200,
        height: 630,
        alt: "HumanEdge Academy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HumanEdge Academy - International Humanities Education Platform",
    description: "Empowering professionals worldwide with humanities education for the AI era",
    images: ["https://humanedgeacademy.com/logo_symbol.png"],
    creator: "@humanedgeacademy",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/logo_symbol.png", type: "image/png", sizes: "192x192" },
    ],
    apple: "/logo_symbol.png",
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "/logo_symbol.png",
    },
  },
  manifest: "/site.webmanifest",
  alternates: {
    canonical: "https://humanedgeacademy.com",
    languages: {
      "en-US": "https://humanedgeacademy.com",
      "ko-KR": "https://humanedgeacademy.com/ko",
      "es-ES": "https://humanedgeacademy.com/es",
      "fr-FR": "https://humanedgeacademy.com/fr",
      "de-DE": "https://humanedgeacademy.com/de",
      "pt-BR": "https://humanedgeacademy.com/pt",
      "th-TH": "https://humanedgeacademy.com/th",
    },
    types: {
      "application/rss+xml": "https://humanedgeacademy.com/rss.xml",
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
