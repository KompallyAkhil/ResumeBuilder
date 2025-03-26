
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Link } from 'react-router-dom';
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">

          <div className="flex-shrink-0">
            <Link to="/" className="text-xl md:text-2xl font-bold text-foreground">
              Resume<span className="text-primary">Builder</span>
            </Link>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
          <Link to="/features" >
              <a className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors subtle-underline">Features</a>
            </Link>
            <Link to="/template" >
              <a className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors subtle-underline">Templates</a>
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" className="text-sm font-medium">
              Sign In
            </Button>
            <Button className="premium-button">
              Get Started
            </Button>
          </div>

          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Menu"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden glass-card animate-fade-in-up">
          <div className="px-4 pt-2 pb-4 space-y-4">
            <a
              href="#features"
              className="block px-3 py-2 text-base font-medium text-foreground/80 hover:text-primary rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              Features
            </a>
            <a
              href="#templates"
              className="block px-3 py-2 text-base font-medium text-foreground/80 hover:text-primary rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              Templates
            </a>

            <div className="pt-2 space-y-2">
              <Button variant="outline" className="w-full justify-center">
                Sign In
              </Button>
              <Button className="w-full justify-center premium-button">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
