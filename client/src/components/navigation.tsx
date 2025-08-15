import { useState, useEffect } from "react";
import { Logo } from "@/components/logo";
import { useTheme } from "@/components/theme-provider";
import { Moon, Sun, Menu, X } from "lucide-react";

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

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (isMenuOpen && !target.closest('#navigation-header')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMenuOpen]);

  // Handle keyboard navigation
  const handleMenuButtonClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50" id="navigation-header">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav className="flex h-16 items-center justify-between rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl supports-[backdrop-filter]:bg-white/5 shadow-[0_8px_30px_rgb(0_0_0_/_0.25)]">
          {/* Left: Logo */}
          <a href="/" className="flex items-center gap-3 px-2 py-2">
            <Logo className="h-7 w-7" />
            <span className="text-slate-100/95 font-semibold tracking-wide">AIsaiah Foundation</span>
          </a>

          {/* Desktop nav */}
          <ul className="hidden lg:flex items-center gap-6">
            <li>
              <button 
                className="nav-link" 
                onClick={() => scrollToSection("features")}
                data-testid="nav-features"
              >
                App Features
              </button>
            </li>
            <li>
              <button 
                className="nav-link" 
                onClick={() => scrollToSection("mission")}
                data-testid="nav-mission"
              >
                Mission
              </button>
            </li>
            <li>
              <button 
                className="nav-link" 
                onClick={() => scrollToSection("faq")}
                data-testid="nav-faq"
              >
                FAQ
              </button>
            </li>
            <li>
              <button 
                className="nav-link" 
                onClick={() => scrollToSection("waitlist")}
                data-testid="nav-waitlist"
              >
                Waitlist
              </button>
            </li>
            <li>
              <button 
                className="nav-link" 
                onClick={() => scrollToSection("get-involved")}
                data-testid="nav-get-involved"
              >
                Get Involved
              </button>
            </li>
            <li>
              <button 
                className="nav-link" 
                onClick={() => scrollToSection("contact")}
                data-testid="nav-contact"
              >
                Contact
              </button>
            </li>
            <li>
              <a 
                className="nav-link" 
                href="/support"
                data-testid="nav-support"
              >
                Support
              </a>
            </li>
            <li>
              <a 
                className="nav-link" 
                href="/privacy"
                data-testid="nav-privacy"
              >
                Privacy
              </a>
            </li>
            <li>
              <button 
                className="btn-donate" 
                onClick={() => scrollToSection("donate")}
                data-testid="nav-donate"
              >
                Donate
              </button>
            </li>
          </ul>

          {/* Right: Theme toggle + mobile button */}
          <div className="flex items-center gap-2">
            <button 
              className="icon-btn" 
              aria-label="Toggle theme" 
              title="Toggle theme"
              onClick={toggleTheme}
              data-testid="theme-toggle"
            >
              {theme === "dark" ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
            </button>
            <button 
              className="lg:hidden icon-btn" 
              aria-label="Open menu" 
              aria-expanded={isMenuOpen}
              onClick={handleMenuButtonClick}
              data-testid="mobile-menu-button"
            >
              {isMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile panel */}
      {isMenuOpen && (
        <div className="lg:hidden" data-testid="mobile-menu-panel">
          <div className="mx-2 mt-2 rounded-2xl border border-white/10 bg-white/8 backdrop-blur-xl p-2">
            <button 
              className="mobile-link" 
              onClick={() => scrollToSection("features")}
              data-testid="mobile-nav-features"
            >
              App Features
            </button>
            <button 
              className="mobile-link" 
              onClick={() => scrollToSection("mission")}
              data-testid="mobile-nav-mission"
            >
              Mission
            </button>
            <button 
              className="mobile-link" 
              onClick={() => scrollToSection("faq")}
              data-testid="mobile-nav-faq"
            >
              FAQ
            </button>
            <button 
              className="mobile-link" 
              onClick={() => scrollToSection("waitlist")}
              data-testid="mobile-nav-waitlist"
            >
              Waitlist
            </button>
            <button 
              className="mobile-link" 
              onClick={() => scrollToSection("get-involved")}
              data-testid="mobile-nav-get-involved"
            >
              Get Involved
            </button>
            <button 
              className="mobile-link" 
              onClick={() => scrollToSection("contact")}
              data-testid="mobile-nav-contact"
            >
              Contact
            </button>
            <a 
              className="mobile-link" 
              href="/support"
              data-testid="mobile-nav-support"
            >
              Support
            </a>
            <a 
              className="mobile-link" 
              href="/privacy"
              data-testid="mobile-nav-privacy"
            >
              Privacy
            </a>
            <button 
              className="mobile-donate" 
              onClick={() => scrollToSection("donate")}
              data-testid="mobile-nav-donate"
            >
              Donate
            </button>
          </div>
        </div>
      )}

      {/* Liquid layer (kept subtle) */}
      <svg 
        className="pointer-events-none absolute inset-0 -z-10 opacity-25" 
        aria-hidden="true"
        viewBox="0 0 100 20"
        preserveAspectRatio="none"
      >
        <defs>
          <filter id="gooey">
            <feGaussianBlur in="SourceGraphic" stdDeviation="2" result="blur" />
            <feColorMatrix 
              in="blur" 
              mode="matrix" 
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -10" 
              result="gooey" 
            />
            <feBlend in="SourceGraphic" in2="gooey" />
          </filter>
        </defs>
        <g filter="url(#gooey)">
          <circle cx="20" cy="10" r="8" fill="var(--teal)" opacity="0.3">
            <animate 
              attributeName="cx" 
              values="20;80;20" 
              dur="8s" 
              repeatCount="indefinite" 
            />
          </circle>
          <circle cx="60" cy="10" r="6" fill="var(--purple)" opacity="0.2">
            <animate 
              attributeName="cx" 
              values="60;30;60" 
              dur="6s" 
              repeatCount="indefinite" 
            />
          </circle>
          <circle cx="40" cy="10" r="4" fill="var(--gold)" opacity="0.15">
            <animate 
              attributeName="cy" 
              values="10;5;10" 
              dur="4s" 
              repeatCount="indefinite" 
            />
          </circle>
        </g>
      </svg>
    </header>
  );
}