import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "AXOM | بروتوكول القارة السمراء",
  description:
    "AXOM - منصة الاستثمار الذكي في أفريقيا. بروتوكول القارة السمراء للتمويل اللامركزي والفرص الاستثمارية المتميزة.",
  keywords: [
    "AXOM",
    "أفريقيا",
    "استثمار",
    "بلوكتشين",
    "DeFi",
    "القارة السمراء",
  ],
  authors: [{ name: "AXOM Protocol" }],
  openGraph: {
    title: "AXOM | بروتوكول القارة السمراء",
    description: "منصة الاستثمار الذكي في أفريقيا",
    type: "website",
    locale: "ar_SA",
  },
  twitter: {
    card: "summary_large_image",
    title: "AXOM Protocol",
    description: "بروتوكول القارة السمراء",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className="scroll-smooth">
      <body
        className={`${inter.variable} ${playfair.variable} font-sans antialiased bg-axom-black text-white min-h-screen`}
      >
        {/* خلفية نمط الخريطة */}
        <div className="fixed inset-0 africa-pattern opacity-5 pointer-events-none z-0" />

        {/* المحتوى الرئيسي */}
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
