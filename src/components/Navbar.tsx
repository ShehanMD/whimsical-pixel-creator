
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';

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
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-apple py-4 px-8',
        scrolled ? 'glass shadow-lg backdrop-blur-md' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link 
          to="/" 
          className="text-2xl font-bold tracking-tight transition-all duration-300 hover:opacity-80"
        >
          <span className="text-gradient">Vizora</span>
        </Link>
        
        <nav className="flex space-x-8">
          <Link 
            to="/" 
            className={cn(
              "text-sm font-medium transition-all duration-300 hover:text-primary relative py-2",
              location.pathname === '/' && "after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-primary after:rounded-full after:shadow-[0_0_5px_rgba(33,150,243,0.7)]"
            )}
          >
            Home
          </Link>
          <Link 
            to="/generate" 
            className={cn(
              "text-sm font-medium transition-all duration-300 hover:text-primary relative py-2",
              location.pathname === '/generate' && "after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-primary after:rounded-full after:shadow-[0_0_5px_rgba(33,150,243,0.7)]"
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
