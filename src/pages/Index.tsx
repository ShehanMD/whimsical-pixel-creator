
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';

const Index = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen relative"
    >
      {/* Blurred background image */}
      <div className="fixed inset-0 z-[-1] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: 'url(/lovable-uploads/a845dc3d-8fa9-42f8-815e-e2388af4937a.png)', 
            filter: 'blur(10px) brightness(0.3)',
            transform: 'scale(1.1)' // Slightly scale up to avoid blur edges
          }}
        />
      </div>

      <Navbar />
      <HeroSection />

      <section className="py-20 px-8 bg-gradient-to-b from-background/80 to-secondary/30 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-4">How It Works</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Creating stunning 3D AI-generated images has never been easier
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                title: "Describe",
                description: "Type a detailed description of the image you want to create"
              },
              {
                title: "Generate",
                description: "Our advanced AI transforms your words into a stunning visual"
              },
              {
                title: "Download",
                description: "Save your creation in high resolution for any use"
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true }}
                className="glass rounded-2xl p-8 text-center card-hover neon-border"
              >
                <div className="w-12 h-12 rounded-full bg-primary/20 text-primary flex items-center justify-center text-xl font-bold mx-auto mb-6">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-20 px-8 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-4">Featured Creations</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Explore what others have created with our platform
              </p>
            </motion.div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "/lovable-uploads/70606e90-8bbd-477d-8b0d-9b15132ddc63.png",
              "/lovable-uploads/98ca3f66-e608-4c5e-8f6a-26e76f940ef1.png",
              "/lovable-uploads/95247fce-543d-49fe-9c4e-b0012cf6db79.png",
              "/lovable-uploads/96e6fc3b-af2f-4182-826f-0c7f8433f22c.png",
              "/lovable-uploads/2af667d7-d46e-46b8-beab-265ba08b9020.png",
              "/lovable-uploads/a1492563-e12d-4f1e-bfff-64e78c68fac8.png",
              "/lovable-uploads/a845dc3d-8fa9-42f8-815e-e2388af4937a.png"
            ].map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true }}
                className="card-3d rounded-2xl shadow-lg overflow-hidden neon-border"
                whileHover={{ scale: 1.02 }}
              >
                <div className="card-3d-content">
                  <img 
                    src={img}
                    alt={`Featured creation ${index + 1}`}
                    className="w-full aspect-square object-cover"
                  />
                  <div className="card-3d-shine"></div>
                </div>
                <div className="absolute inset-0 pointer-events-none rounded-2xl shadow-[0_0_15px_rgba(33,150,243,0.2)]"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      <footer className="py-12 px-8 border-t border-white/10 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-muted-foreground">© 2025 Vizora. All rights reserved.</p>
        </div>
      </footer>
    </motion.div>
  );
};

export default Index;
