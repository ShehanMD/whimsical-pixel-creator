
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Sparkles, Wand2 } from 'lucide-react';

const HeroSection = () => {
  const navigate = useNavigate();
  const containerRef = useRef<HTMLDivElement>(null);
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
            <motion.div 
              className="flex items-center justify-center gap-2 text-sm font-medium tracking-wider text-primary mb-2"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Sparkles className="h-4 w-4" />
              <span>AI-POWERED 3D IMAGERY</span>
              <Sparkles className="h-4 w-4" />
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight">
              Transform your <span className="text-gradient relative">
                imagination
                <motion.div 
                  className="absolute -inset-1 bg-primary/20 blur-lg rounded-full -z-10"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0.8, 0.5]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
              </span><br />
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
              className="relative rounded-2xl overflow-hidden shadow-2xl shadow-primary/20 border border-white/10"
              style={{ transform: 'translateZ(40px)' }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 z-0"></div>
              <img 
                src="/lovable-uploads/70606e90-8bbd-477d-8b0d-9b15132ddc63.png"
                alt="Fantasy Elf in Magical Forest" 
                className="object-cover w-full aspect-[16/9] z-10 transition-transform duration-700 ease-out hover:scale-105"
              />
              <motion.div 
                className="absolute inset-0 border-4 border-white/10 z-30 pointer-events-none"
                style={{ transform: 'translateZ(10px)' }}
                animate={{ 
                  boxShadow: ['0 0 0px rgba(59, 130, 246, 0)', '0 0 15px rgba(59, 130, 246, 0.5)', '0 0 0px rgba(59, 130, 246, 0)'] 
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <div 
                className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-20 flex items-end p-8"
                style={{ transform: 'translateZ(20px)' }}
              >
                <div className="text-white text-left">
                  <div className="text-sm font-medium mb-2 opacity-80">AI GENERATED</div>
                  <div className="text-xl font-medium">Enchanted Forest Guardian</div>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.98 }}
            className="button-primary text-lg font-medium flex items-center gap-2 overflow-hidden relative group"
            onClick={() => navigate('/generate')}
          >
            <span className="relative z-10">Start Creating</span>
            <Wand2 className="w-5 h-5 relative z-10" />
            <motion.div 
              className="absolute inset-0 bg-primary/80 -z-0"
              initial={{ x: '-100%' }}
              whileHover={{ x: '0%' }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
