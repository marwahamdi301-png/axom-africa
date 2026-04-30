import type { Metadata } from "next";
import "../styles/globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "AXOM — The Brown Continent Protocol | القارة السمراء",
  description: "منصة تقنية لإنهاض شمال أفريقيا والقارة السمراء عالمياً",
  keywords: "AXOM, القارة السمراء, Africa, Blockchain, AI, DeFi",
  openGraph: {
    title: "AXOM — The Brown Continent Protocol",
    description: "القارة السمراء تنهض",
    url: "https://axom.africa",
    siteName: "AXOM Protocol",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <body className="bg-darkbg text-white">
        <Navbar />
        <main className="pt-20 min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
