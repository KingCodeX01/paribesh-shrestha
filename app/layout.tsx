import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { SmoothCursor } from "@/components/ui/smooth-cursor";
import { Footer } from "@/components/layout/Footer";
import { SimpleLoadingScreen } from "@/components/SimpleLoadingScreen";
import { StructuredData } from "@/components/seo/StructuredData";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Paribesh Shrestha - Full Stack Developer | Portfolio",
    template: "%s | Paribesh Shrestha"
  },
  description: "Paribesh Shrestha - Full Stack Developer specializing in ASP.NET, React, Next.js, TypeScript, and modern web technologies. Building innovative digital solutions with clean code and exceptional user experiences.",
  keywords: [
    "Paribesh Shrestha",
    "Full Stack Developer",
    "Web Developer",
    "React Developer",
    "Next.js Developer",
    "ASP.NET Developer",
    "Laravel Developer",
    "C# Developer",
    "Python Developer",
    "TypeScript Developer",
    "Frontend Developer",
    "Backend Developer",
    "SQL",
    "JavaScript Developer",
    "Portfolio",
    "Web Development",
    "Software Engineer",
    "KingCodeX01",
    "Nepal Developer"
  ],
  authors: [{ name: "Paribesh Shrestha" }],
  creator: "Paribesh Shrestha",
  publisher: "Paribesh Shrestha",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://paribeshshrestha.com.np"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://paribeshshrestha.com.np",
    title: "Paribesh Shrestha - Full Stack Developer | Portfolio",
    description: "Paribesh Shrestha - Full Stack Developer specializing in React, Next.js, TypeScript, and modern web technologies. Building innovative digital solutions.",
    siteName: "Paribesh Shrestha Portfolio",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Paribesh Shrestha - Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Paribesh Shrestha - Full Stack Developer",
    description: "Full Stack Developer specializing in React, Next.js, TypeScript. Building innovative digital solutions.",
    images: ["/images/twitter-image.jpg"],
    creator: "@KingCodeX01",
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
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <StructuredData />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SimpleLoadingScreen>
          <Navbar />
          <SmoothCursor />
          {children}
          <Footer />
        </SimpleLoadingScreen>
      </body>
    </html>
  );
}
