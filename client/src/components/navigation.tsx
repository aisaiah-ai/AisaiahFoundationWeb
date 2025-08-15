import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/logo";
import { useTheme } from "@/components/theme-provider";
import { Sun, Moon, Menu, X } from "lucide-react";

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 w-full backdrop-blur-md z-50 border-b" style={{ backgroundColor: 'var(--bg-1)', borderColor: 'var(--muted)' }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <Logo className="w-8 h-10" />
            <span className="text-xl font-semibold" style={{ color: 'var(--text)' }}>
              AIsaiah Foundation
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("features")}
              className="hover:opacity-80 transition-opacity duration-200"
              style={{ color: 'var(--muted)' }}
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection("mission")}
              className="hover:opacity-80 transition-opacity duration-200"
              style={{ color: 'var(--muted)' }}
            >
              Mission
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="hover:opacity-80 transition-opacity duration-200"
              style={{ color: 'var(--muted)' }}
            >
              FAQ
            </button>
            <button
              onClick={() => scrollToSection("waitlist")}
              className="hover:opacity-80 transition-opacity duration-200"
              style={{ color: 'var(--muted)' }}
            >
              Waitlist
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="hover:opacity-80 transition-opacity duration-200"
              style={{ color: 'var(--muted)' }}
            >
              Contact
            </button>
            <a
              href="/support"
              className="hover:opacity-80 transition-opacity duration-200"
              style={{ color: 'var(--muted)' }}
            >
              Support
            </a>
            <a
              href="/privacy"
              className="hover:opacity-80 transition-opacity duration-200"
              style={{ color: 'var(--muted)' }}
            >
              Privacy
            </a>

            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="h-9 w-9"
            >
              {theme === "dark" ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
              <span className="sr-only">Toggle theme</span>
            </Button>

            <Button
              onClick={() => scrollToSection("donate")}
              className="hover:shadow-lg transform hover:scale-105 transition-all duration-200"
              style={{ backgroundColor: 'var(--teal)', color: 'var(--bg-1)' }}
            >
              Donate
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="h-9 w-9"
            >
              {isMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t" style={{ backgroundColor: 'var(--bg-1)', borderColor: 'var(--muted)' }}>
          <div className="px-4 py-4 space-y-4">
            <button
              onClick={() => scrollToSection("features")}
              className="block hover:opacity-80 transition-opacity duration-200"
              style={{ color: 'var(--muted)' }}
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection("mission")}
              className="block hover:opacity-80 transition-opacity duration-200"
              style={{ color: 'var(--muted)' }}
            >
              Mission
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="block hover:opacity-80 transition-opacity duration-200"
              style={{ color: 'var(--muted)' }}
            >
              FAQ
            </button>
            <button
              onClick={() => scrollToSection("waitlist")}
              className="block hover:opacity-80 transition-opacity duration-200"
              style={{ color: 'var(--muted)' }}
            >
              Waitlist
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="block hover:opacity-80 transition-opacity duration-200"
              style={{ color: 'var(--muted)' }}
            >
              Contact
            </button>
            <a
              href="/support"
              className="block hover:opacity-80 transition-opacity duration-200"
              style={{ color: 'var(--muted)' }}
            >
              Support
            </a>
            <a
              href="/privacy"
              className="block hover:opacity-80 transition-opacity duration-200"
              style={{ color: 'var(--muted)' }}
            >
              Privacy
            </a>
            <div className="flex items-center space-x-4 pt-4 border-t" style={{ borderColor: 'var(--muted)' }}>
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="h-9 w-9"
              >
                {theme === "dark" ? (
                  <Sun className="h-4 w-4" />
                ) : (
                  <Moon className="h-4 w-4" />
                )}
              </Button>
              <Button
                onClick={() => scrollToSection("donate")}
                style={{ backgroundColor: 'var(--teal)', color: 'var(--bg-1)' }}
              >
                Donate
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
