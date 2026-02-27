import type { Metadata } from "next";
import { Geist, Geist_Mono, Urbanist } from "next/font/google";
import "./globals.css";


const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Tesseract - Your Ideas, Our Solutions",
  description: "Tesseract Your Ideas Our Solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${urbanist.variable}  antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
