import { useState, useEffect } from 'react';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react'
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import Login from './Login';
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
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
          <div className="md:flex-col items-center space-x-4">
            <SignedOut>
              <Button asChild>
                <SignInButton className="text-sm font-medium" />
              </Button>
            </SignedOut>
            <SignedIn>
              <UserButton className="premium-button text-sm font-medium" />
            </SignedIn>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
