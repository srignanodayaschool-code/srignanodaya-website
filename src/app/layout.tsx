import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import JsonLd from "@/components/JsonLd";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Sri Gnanodaya Schools",
    default: "Sri Gnanodaya Schools | Best School in Kanuru, Vijayawada",
  },
  description: "Sri Gnanodaya Schools (Little Soldiers & Concept School) offers quality education with a strong commitment towards academics. Providing computer education and A.V. aids at low cost in Kanuru, Vijayawada.",
  keywords: ["Best School in Kanuru", "Sri Gnanodaya", "Little Soldiers", "Low cost computer education", "No donation school", "Vijayawada schools", "Concept School"],
  authors: [{ name: "Sri Gnanodaya Management" }],
  creator: "Sri Gnanodaya Schools",
  publisher: "Sri Gnanodaya Schools",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://srignanodaya.in",
    title: "Sri Gnanodaya Schools - Excellence in Education",
    description: "Join the best concept school in Kanuru with 16+ years of excellence. Strong academics, digital classrooms, and safe environment.",
    siteName: "Sri Gnanodaya Schools",
    images: [
      {
        url: "https://srignanodaya.in/media/photos/school/playground-children.webp",
        width: 1600,
        height: 900,
        alt: "Sri Gnanodaya Schools Campus",
      },
    ],
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${outfit.variable} ${sourceSans.variable}`}>
      <body className="antialiased bg-white text-charcoal overflow-x-hidden">
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
