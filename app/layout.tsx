import "./globals.css";

import { GoogleAnalytics } from "@next/third-parties/google";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { Navbar } from "@/components/Navbar";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "BlairHacks 2026",
  description:
    "High School Hackathon in the DMV - Join 100+ students for innovation, collaboration, and building the future",
  keywords:
    "hackathon, high school, DMV, DC, Washington, coding, programming, technology",
  openGraph: {
    title: "BlairHacks 2026",
    description: "High School Hackathon in the DMV",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <GoogleAnalytics gaId="G-T54MKE337Q" />
      <body
        className={"antialiased " + inter.className}
        suppressHydrationWarning
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
