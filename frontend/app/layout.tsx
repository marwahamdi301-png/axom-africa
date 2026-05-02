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
  description: "AXOM - منصة الاستثمار الذكي في أفريقيا",
  keywords: ["AXOM", "أفريقيا", "استثمار", "بلوكتشين"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className="scroll-smooth">
      <body
        className={`${inter.variable} ${playfair.variable} font-sans antialiased bg-[#0A0A0A] text-white min-h-screen`}
      >
        <div className="fixed inset-0 africa-pattern opacity-5 pointer-events-none z-0" />
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
