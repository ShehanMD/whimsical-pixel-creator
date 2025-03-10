
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

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

  // Letter animation for futuristic effect
  const titleLetters = "Vizora".split("");

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
          <motion.span className="relative inline-flex">
            {titleLetters.map((letter, index) => (
              <motion.span
                key={index}
                className="text-gradient relative inline-block"
                initial={{ opacity: 0.6, y: 0 }}
                animate={{ 
                  opacity: [0.6, 1, 0.6],
                  y: [0, -2, 0],
                  textShadow: [
                    "0 0 5px rgba(33,150,243,0)",
                    "0 0 15px rgba(33,150,243,0.5)",
                    "0 0 5px rgba(33,150,243,0)"
                  ]
                }}
                transition={{
                  duration: 3,
                  delay: index * 0.1,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut"
                }}
              >
                {letter}
              </motion.span>
            ))}
            <motion.span
              className="absolute -inset-x-2 -inset-y-1 bg-gradient-to-r from-primary/0 via-primary/30 to-primary/0 rounded-lg blur-md -z-10"
              animate={{
                opacity: [0.1, 0.3, 0.1],
                scale: [0.95, 1.05, 0.95],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }}
            />
          </motion.span>
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
