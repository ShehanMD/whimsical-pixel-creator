
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const navigate = useNavigate();
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      
      const { left, top, width, height } = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - left - width / 2) / 25;
      const y = (e.clientY - top - height / 2) / 25;
      
      setMousePosition({ x, y });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const handleImageMouseMove = (e: MouseEvent) => {
      if (!imageRef.current) return;

      const { left, top, width, height } = imageRef.current.getBoundingClientRect();
      
      // Calculate mouse position relative to the image center
      const centerX = left + width / 2;
      const centerY = top + height / 2;
      
      // Calculate rotation based on mouse distance from center
      const rotateY = ((e.clientX - centerX) / width) * 15; // Max 15 degrees
      const rotateX = -((e.clientY - centerY) / height) * 15; // Max 15 degrees
      
      // Apply 3D transform
      imageRef.current.style.transform = `
        perspective(1000px) 
        rotateX(${rotateX}deg) 
        rotateY(${rotateY}deg) 
        scale3d(1.05, 1.05, 1.05)
      `;
    };
    
    const handleImageMouseLeave = () => {
      if (!imageRef.current) return;
      
      // Reset transform on mouse leave with transition
      imageRef.current.style.transform = `
        perspective(1000px) 
        rotateX(0deg) 
        rotateY(0deg) 
        scale3d(1, 1, 1)
      `;
    };
    
    const element = imageRef.current;
    if (element) {
      element.addEventListener('mousemove', handleImageMouseMove);
      element.addEventListener('mouseleave', handleImageMouseLeave);
      
      return () => {
        element.removeEventListener('mousemove', handleImageMouseMove);
        element.removeEventListener('mouseleave', handleImageMouseLeave);
      };
    }
  }, []);
  
  return (
    <div className="min-h-screen flex items-center justify-center pt-20 px-8" ref={containerRef}>
      <div className="max-w-6xl mx-auto w-full perspective-container">
        <div className="flex flex-col items-center text-center space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col space-y-2"
          >
            <span className="text-sm font-medium tracking-wider text-primary neon-text">AI-POWERED 3D IMAGERY</span>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight">
              Transform your <span className="text-gradient neon-text">imagination</span><br />
              into stunning 3D art
            </h1>
            <p className="max-w-xl mx-auto text-lg text-muted-foreground mt-6">
              Create breathtaking 3D images with our cutting-edge AI technology. Simply describe what you want to see, and watch it come to life.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            style={{ 
              transform: `rotateX(${-mousePosition.y}deg) rotateY(${mousePosition.x}deg)`,
              transformStyle: 'preserve-3d' 
            }}
            className="transform-3d w-full max-w-xl transition-transform duration-200 ease-out"
          >
            <div 
              ref={imageRef}
              className="hero-image-3d relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 neon-border transition-all duration-300"
              style={{ transform: 'translateZ(40px)' }}
            >
              <div className="hero-image-inner">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 z-0"></div>
                <img 
                  src="/lovable-uploads/70606e90-8bbd-477d-8b0d-9b15132ddc63.png"
                  alt="Fantasy Elf in Magical Forest" 
                  className="object-cover w-full aspect-[16/9] z-10 transition-transform duration-700 ease-out"
                />
                <div 
                  className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-20 flex items-end p-8"
                  style={{ transform: 'translateZ(20px)' }}
                >
                  <div className="text-white text-left">
                    <div className="text-sm font-medium mb-2 opacity-80">AI GENERATED</div>
                    <div className="text-xl font-medium neon-text">Enchanted Forest Guardian</div>
                  </div>
                </div>
                <div className="hero-image-glow"></div>
              </div>
            </div>
          </motion.div>
          
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="button-primary text-lg font-medium neon-pulse"
            onClick={() => navigate('/generate')}
          >
            Start Creating
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
