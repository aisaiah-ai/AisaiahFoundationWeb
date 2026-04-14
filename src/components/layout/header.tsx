"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/ui/logo";
import { Button } from "@/components/ui/button";
import { mainNavItems } from "@/content/navigation";
import { cn } from "@/lib/utils";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/60"
          : "bg-transparent"
      )}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 md:h-20 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 group"
            aria-label="Aisaiah Foundation Home"
          >
            <Logo className="w-7 h-9 md:w-8 md:h-10 transition-transform group-hover:scale-105" />
            <div className="flex flex-col">
              <span
                className={cn(
                  "text-lg font-bold tracking-tight transition-colors",
                  isScrolled || pathname !== "/" ? "text-slate-900" : "text-white"
                )}
              >
                Aisaiah
              </span>
              <span
                className={cn(
                  "text-[10px] font-medium uppercase tracking-widest -mt-1 transition-colors",
                  isScrolled || pathname !== "/" ? "text-slate-500" : "text-white/70"
                )}
              >
                Foundation
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {mainNavItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200",
                  pathname === item.href
                    ? "text-primary-700 bg-primary-50"
                    : isScrolled || pathname !== "/"
                      ? "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                      : "text-white/80 hover:text-white hover:bg-white/10"
                )}
              >
                {item.label}
              </Link>
            ))}
            <div className="ml-3">
              <Button
                variant={isScrolled || pathname !== "/" ? "primary" : "outline"}
                size="sm"
                href="/contact"
                className={cn(
                  isScrolled || pathname !== "/"
                    ? ""
                    : "border-white/40 text-white hover:bg-white/10"
                )}
              >
                Partner With Us
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={cn(
              "md:hidden p-2 rounded-lg transition-colors",
              isScrolled || pathname !== "/"
                ? "text-slate-600 hover:bg-slate-100"
                : "text-white hover:bg-white/10"
            )}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-6 animate-slide-down">
            <div className="bg-white rounded-xl shadow-lg border border-slate-200/60 p-2 mt-2">
              {mainNavItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "block px-4 py-3 rounded-lg text-sm font-medium transition-colors",
                    pathname === item.href
                      ? "text-primary-700 bg-primary-50"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                  )}
                >
                  {item.label}
                </Link>
              ))}
              <div className="mt-2 px-2">
                <Button variant="primary" size="md" href="/contact" className="w-full">
                  Partner With Us
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
