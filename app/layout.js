import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { siteData } from "@/data/siteData";
import { PHProvider } from "./providers";
import TopContactBar from "@/components/TopContactBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import HashScrollHandler from "@/components/HashScrollHandler";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata = {
  title: "Al Madinah Developers | Zaamin City Projects Official Sales Partner",
  description: "Explore Al-Madina Orchard and Al-Madina Garden with Al Madinah Developers, official sales partner of Zaamin City projects.",
  keywords: "Al Madina Developers, Al Madina real estate, Zaamin City Lahore, Zaamin City plots, Real estate in Zaamin City Lahore, Property dealers in Lahore, 5 Marla plots Zaamin City, Houses for rent in Zaamin City, Commercial property Lahore, Property investment Lahore, Real estate developers Lahore, Property developers Lahore, Zaamin City property dealers",
  authors: [{ name: "Al Madinah Developers" }],
  robots: "index, follow",
  metadataBase: new URL("https://al-madina-developers.vercel.app"),
  alternates: {
    canonical: "https://al-madina-developers.vercel.app",
  },
  openGraph: {
    title: "Al Madinah Developers | Zaamin City Projects Official Sales Partner",
    description: "Explore Al-Madina Orchard and Al-Madina Garden with Al Madinah Developers, official sales partner of Zaamin City projects.",
    images: ["/assets/al-madinah/logo.jpg"],
    url: "https://al-madina-developers.vercel.app",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Al Madinah Developers | Zaamin City Projects Official Sales Partner",
    description: "Explore Al-Madina Orchard and Al-Madina Garden with Al Madinah Developers, official sales partner of Zaamin City projects.",
    images: ["/assets/al-madinah/logo.jpg"],
  },
  icons: {
    icon: "/assets/al-madinah/logo.jpg",
    apple: "/assets/al-madinah/logo.jpg",
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  "name": "Al Madina Developers",
  "image": "https://al-madina-developers.vercel.app/assets/al-madinah/logo.jpg",
  "telephone": "0300 1332279",
  "email": "almadinaaestate@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Office No. 21, C Block, Main Boulevard, Zaamin City",
    "addressLocality": "Lahore",
    "postalCode": "54000",
    "addressCountry": "PK"
  },
  "areaServed": ["Zaamin City Lahore", "Lahore", "Pakistan"],
  "sameAs": [
    "https://www.facebook.com/almadinaaestate/"
  ]
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased bg-slate-50 text-slate-900`}>
        <PHProvider>
          <HashScrollHandler />
          <div className="min-h-screen flex flex-col">
            <TopContactBar />
            <Navbar />
            <div className="flex-grow">
              {children}
            </div>
            <Footer />
            <FloatingContact />
          </div>
        </PHProvider>
      </body>
    </html>
  );
}
