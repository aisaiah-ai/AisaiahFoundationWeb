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
    <nav className="fixed top-0 w-full bg-background/90 dark:bg-background/90 backdrop-blur-md z-50 border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <Logo className="w-8 h-10" />
            <span className="text-xl font-semibold text-foreground">
              AIsaiah Foundation
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("about")}
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("features")}
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              App Features
            </button>
            <button
              onClick={() => scrollToSection("get-involved")}
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              Get Involved
            </button>
            <button
              onClick={() => scrollToSection("events")}
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              Events
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              Contact
            </button>

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
              className="bg-gradient-spiritual hover:shadow-lg transform hover:scale-105 transition-all duration-200"
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
        <div className="md:hidden bg-background border-t border-border">
          <div className="px-4 py-4 space-y-4">
            <button
              onClick={() => scrollToSection("about")}
              className="block text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("features")}
              className="block text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              App Features
            </button>
            <button
              onClick={() => scrollToSection("get-involved")}
              className="block text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              Get Involved
            </button>
            <button
              onClick={() => scrollToSection("events")}
              className="block text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              Events
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="block text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              Contact
            </button>
            <div className="flex items-center space-x-4 pt-4 border-t border-border">
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
                className="bg-gradient-spiritual"
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
