"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "الرئيسية" },
    { href: "/about", label: "من نحن" },
    { href: "/invest", label: "استثمر" },
    { href: "/roadmap", label: "خارطة الطريق" },
    { href: "/contact", label: "تواصل معنا" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "glass-effect border-b border-white/10 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 bg-gradient-to-br from-axom-gold to-axom-gold-dark rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-axom-gold/20">
              <span className="font-playfair text-axom-black font-bold text-xl">
                A
              </span>
            </div>
            <div className="hidden sm:block">
              <span className="font-playfair text-2xl font-bold text-gradient">
                AXOM
              </span>
              <p className="text-xs text-gray-400 -mt-1">
                بروتوكول القارة السمراء
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-gray-300 hover:text-axom-gold transition-colors duration-300 relative group py-2"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-axom-gold group-hover:w-full transition-all duration-300" />
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <button className="text-gray-300 hover:text-axom-gold transition-colors px-4 py-2">
              تسجيل الدخول
            </button>
            <button className="px-6 py-2.5 bg-gradient-to-r from-axom-gold to-axom-gold-light text-axom-black font-semibold rounded-lg hover:scale-105 transition-transform duration-300 shadow-md shadow-axom-gold/20">
              ابدأ الآن
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-axom-gold"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 glass-effect rounded-2xl border border-white/10 p-6 animate-fade-in">
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block text-gray-300 hover:text-axom-gold transition-colors py-2 text-lg"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6 pt-6 border-t border-white/10 space-y-3">
              <button className="w-full py-3 text-gray-300 hover:text-axom-gold transition-colors">
                تسجيل الدخول
              </button>
              <button className="w-full py-3 bg-gradient-to-r from-axom-gold to-axom-gold-light text-axom-black font-semibold rounded-lg">
                ابدأ الآن
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
