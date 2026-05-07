"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll effect for navbar styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Catalog", href: "/catalog" },
    { name: "About", href: "/about" },
    { name: "Gallery", href: "#" },
  ];

  return (
    <div className="fixed top-0 w-full z-50 px-margin-mobile md:px-margin-desktop pt-6 pointer-events-none">
      <header 
        className={`mx-auto max-w-container-max w-full transition-all duration-500 pointer-events-auto
          bg-surface/60 backdrop-blur-3xl py-3 px-6 rounded-full shadow-2xl border border-primary/20
          ${isScrolled ? "scale-[0.98]" : "scale-100"}`}
      >
        <nav className="flex justify-between items-center gap-4">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center gap-2 group shrink-0"
          >
            <img 
              src="/assets/logo-ekraf.png" 
              alt="Ekraf Nganjuk Logo" 
              className="h-10 md:h-12 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
            />
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-2 p-1 rounded-full">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-6 py-2 rounded-full font-label-caps text-label-caps transition-all duration-300 relative group
                    ${isActive
                      ? "text-primary"
                      : "text-on-surface-variant hover:text-on-surface"
                    }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-1 left-1/2 w-4 h-0.5 bg-primary -translate-x-1/2 rounded-full"></span>
                  )}
                </Link>
              );
            })}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <Link 
              href="/login" 
              className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-full font-label-caps text-label-caps text-on-surface-variant hover:text-primary hover:bg-primary/10 transition-all duration-300"
            >
              <span className="material-symbols-outlined text-[20px]">login</span>
              Login
            </Link>
            <Link
              href="/register"
              className="hidden lg:flex bg-gradient-to-r from-primary to-secondary text-primary-container px-7 py-2.5 rounded-full font-label-caps text-label-caps font-bold hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg shadow-primary/20"
            >
              Join Hub
            </Link>
            
            {/* Mobile Menu Toggle */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden w-10 h-10 flex items-center justify-center rounded-xl bg-surface-container-high text-on-surface hover:bg-primary hover:text-primary-container transition-all"
            >
              <span className="material-symbols-outlined">
                {isMobileMenuOpen ? "close" : "menu"}
              </span>
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Navigation Menu */}
      <div 
        className={`lg:hidden fixed inset-x-margin-mobile top-24 pointer-events-auto transition-all duration-500 ease-out
          ${isMobileMenuOpen 
            ? "opacity-100 translate-y-0 visible" 
            : "opacity-0 -translate-y-4 invisible"
          }`}
      >
        <div className="bg-surface/80 backdrop-blur-xl rounded-3xl p-6 shadow-2xl border border-primary/20 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-3xl rounded-full"></div>
          <div className="flex flex-col gap-2 relative z-10">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center justify-between p-4 rounded-2xl transition-all duration-300
                    ${isActive 
                      ? "bg-primary/20 text-primary border-l-4 border-primary" 
                      : "hover:bg-surface-container-highest text-on-surface-variant"
                    }`}
                >
                  <span className="font-label-caps text-label-caps font-bold tracking-wider">{link.name}</span>
                  <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
                </Link>
              );
            })}
            <div className="mt-4 pt-4 border-t border-outline-variant/20 grid grid-cols-2 gap-3">
              <Link
                href="/login"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 p-4 rounded-2xl bg-surface-container text-on-surface-variant font-label-caps text-label-caps"
              >
                <span className="material-symbols-outlined text-[18px]">login</span>
                Login
              </Link>
              <Link
                href="/register"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 p-4 rounded-2xl bg-primary text-primary-container font-label-caps text-label-caps font-bold"
              >
                Join Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
