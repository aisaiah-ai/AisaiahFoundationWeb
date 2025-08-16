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

  const handleMenuButtonClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="liquid-header" id="navigation-header">
      {/* Liquid SVG layer (behind) */}
      <svg className="liquid-bg" viewBox="0 0 1200 120" aria-hidden="true">
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur"/>
            <feColorMatrix in="blur" mode="matrix"
              values="1 0 0 0 0
                      0 1 0 0 0
                      0 0 1 0 0
                      0 0 0 20 -10" result="goo"/>
            <feBlend in="SourceGraphic" in2="goo"/>
          </filter>
        </defs>
        <g filter="url(#goo)" opacity="0.9">
          <circle cx="90" cy="60" r="32" className="blob">
            <animate 
              attributeName="cx" 
              values="90;200;90" 
              dur="8s" 
              repeatCount="indefinite" 
            />
          </circle>
          <circle cx="170" cy="34" r="18" className="blob">
            <animate 
              attributeName="cy" 
              values="34;70;34" 
              dur="6s" 
              repeatCount="indefinite" 
            />
          </circle>
          <circle cx="260" cy="70" r="26" className="blob">
            <animate 
              attributeName="cx" 
              values="260;350;260" 
              dur="10s" 
              repeatCount="indefinite" 
            />
          </circle>
          <circle cx="340" cy="44" r="20" className="blob">
            <animate 
              attributeName="cy" 
              values="44;80;44" 
              dur="7s" 
              repeatCount="indefinite" 
            />
          </circle>
        </g>
      </svg>

      {/* Glass bar (nav content) */}
      <div className="glass-bar">
        {/* Left: Logo */}
        <div className="nav-left">
          <a href="/" className="flex items-center gap-3 px-2 py-2">
            <Logo className="h-7 w-7 icon" />
            <span className="font-semibold tracking-wide" style={{ color: 'var(--text-primary)' }}>
              AIsaiah Foundation
            </span>
          </a>
        </div>

        {/* Center: Desktop nav */}
        <nav className="nav-center hidden xl:flex">
          <ul className="flex items-center gap-6">
            <li>
              <button 
                className="nav-link" 
                onClick={() => scrollToSection("features")}
                data-testid="nav-features"
              >
                Features
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
          </ul>
        </nav>

        {/* Right: Actions (Donate + Theme toggle + mobile button) */}
        <div className="nav-right">
          <div className="hidden xl:flex items-center gap-3">
            <button 
              className="btn-donate" 
              onClick={() => scrollToSection("donate")}
              data-testid="nav-donate"
            >
              Donate
            </button>
            <button 
              className="icon-btn" 
              aria-label="Toggle theme" 
              aria-pressed={theme === 'dark'}
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
          </div>
          
          {/* Mobile controls */}
          <div className="xl:hidden flex items-center gap-2">
            <button 
              className="icon-btn" 
              aria-label="Toggle theme" 
              aria-pressed={theme === 'dark'}
              title="Toggle theme"
              onClick={toggleTheme}
              data-testid="theme-toggle-mobile"
            >
              {theme === "dark" ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
            </button>
            <button 
              className="icon-btn" 
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
        </div>
      </div>

      {/* Mobile panel */}
      {isMenuOpen && (
        <div className="xl:hidden mobile-panel" data-testid="mobile-menu-panel">
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
            className="mobile-link theme-link" 
            href="/support"
            data-testid="mobile-nav-support"
          >
            Support
          </a>
          <a 
            className="mobile-link theme-link" 
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
      )}
    </header>
  );
}