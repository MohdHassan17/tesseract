// layout.js (still a server component)
import { Jost } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import AOSInitializer from "@/ui/AOSInitializer";
import LayoutClientWrapper from "./LayoutClientWrapper";
import { Toaster } from "react-hot-toast";

const montserrat = Jost({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-montserrat',
});



export const metadata = {
  title: "Tesseract | Software & Web Development Company",
  description:
    "Tesseract is a software company that builds modern websites, scalable apps, and custom digital solutions. We help businesses grow with secure, innovative technology.",
  keywords: [
    "software company",
    "web development",
    "custom software",
    "enterprise solutions",
    "mobile apps",
    "digital transformation",
    "tesseractdev"
  ],
  openGraph: {
    title: "Tesseract | Software & Web Development Company",
    description:
      "Empowering businesses with innovative, reliable, and scalable software solutions.",
    url: "https://tesseractdev.org",
    siteName: "Tesseract",
    images: [
      {
        url: "http://tesseractdev.org/_next/image?url=%2Fassets%2Flogo%2FTesseract.png&w=256&q=75",
        width: 1200,
        height: 630,
        alt: "Tesseract Software Company",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} antialiased relative`}>
        <Toaster />
        <AOSInitializer />
        <LayoutClientWrapper>
          {children}
        </LayoutClientWrapper>
        <Footer />
      </body>
    </html>
  );
}
