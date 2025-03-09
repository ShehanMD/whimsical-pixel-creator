
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
      className="min-h-screen"
    >
      <Navbar />
      <HeroSection />

      <section className="py-20 px-8 bg-gradient-to-b from-background to-secondary/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-4 neon-text">How It Works</h2>
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
                <div className="w-12 h-12 rounded-full bg-primary/20 text-primary flex items-center justify-center text-xl font-bold mx-auto mb-6 neon-text">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold mb-3 neon-text">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-4 neon-text">Featured Creations</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Explore what others have created with our platform
              </p>
            </motion.div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "/lovable-uploads/70606e90-8bbd-477d-8b0d-9b15132ddc63.png",
              "https://images.unsplash.com/photo-1686771017120-0a129c2b0b4f?q=80&w=2670&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1681266507686-23c59f41f679?q=80&w=2670&auto=format&fit=crop"
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
                <div className="absolute inset-0 pointer-events-none rounded-2xl shadow-[0_0_15px_rgba(149,78,255,0.2)]"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      <footer className="py-12 px-8 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-muted-foreground">© 2023 Vizora. All rights reserved.</p>
        </div>
      </footer>
    </motion.div>
  );
};

export default Index;
