
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Sparkles } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-apple py-4 px-8',
        scrolled ? 'glass shadow-lg backdrop-blur-md' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link 
          to="/" 
          className="flex items-center gap-2 text-2xl font-bold tracking-tight transition-all duration-300 transform hover:scale-105"
        >
          <Sparkles className="h-6 w-6 text-primary animate-pulse" />
          <span className="text-gradient">Vizora</span>
        </Link>
        
        <nav className="flex space-x-8">
          <Link 
            to="/" 
            className={cn(
              "text-sm font-medium transition-all duration-300 hover:text-primary relative py-2 overflow-hidden",
              location.pathname === '/' ? "after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-primary after:rounded-full" : 
              "after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-primary after:rounded-full after:transform after:scale-x-0 after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
            )}
          >
            Home
          </Link>
          <Link 
            to="/generate" 
            className={cn(
              "text-sm font-medium transition-all duration-300 hover:text-primary relative py-2 overflow-hidden",
              location.pathname === '/generate' ? "after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-primary after:rounded-full" : 
              "after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-primary after:rounded-full after:transform after:scale-x-0 after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
            )}
          >
            Generate
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
