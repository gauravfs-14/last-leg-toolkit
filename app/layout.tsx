import type React from "react";
import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
  weight: ["500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Last-Leg Toolkit | Preventing Impaired Driving",
  description:
    "A comprehensive framework for addressing the final miles of impaired journeys",
  viewport: "width=device-width, initial-scale=1.0, maximum-scale=5.0",
  themeColor: "#501214",
  colorScheme: "light",
  openGraph: {
    title: "Last-Leg Toolkit | Preventing Impaired Driving",
    description:
      "A comprehensive framework for addressing the final miles of impaired journeys",
    type: "website",
    url: "https://last-leg-toolkit.vercel.app/",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Last-Leg Toolkit",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable}`}>
      <body className="min-h-screen flex flex-col antialiased overflow-x-hidden">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-white focus:text-maroon-900 focus:outline-none focus:ring-2 focus:ring-maroon-500"
        >
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
