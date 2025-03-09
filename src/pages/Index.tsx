
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import { Sparkles, Star, Wand2, Box } from 'lucide-react';

const Index = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);
  
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen relative overflow-hidden"
      ref={ref}
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full filter blur-3xl transform translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-blue-400/5 rounded-full filter blur-3xl transform -translate-x-1/3 translate-y-1/3" />
      </div>
      
      <Navbar />
      <HeroSection />

      <motion.section 
        style={{ opacity, scale }}
        className="py-20 px-8 bg-gradient-to-b from-background to-secondary/5"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative"
            >
              <h2 className="text-4xl font-bold mb-4 relative inline-block">
                <span className="relative z-10">How It Works</span>
                <motion.div 
                  className="absolute -inset-1 -z-10 opacity-10 blur-sm bg-primary/50 rounded-full"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
              </h2>
              <p className="text-xl text-foreground max-w-2xl mx-auto">
                Creating stunning 3D AI-generated images has never been easier
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                title: "Describe",
                description: "Type a detailed description of the image you want to create",
                icon: <Wand2 className="w-6 h-6 text-primary" />
              },
              {
                title: "Generate",
                description: "Our advanced AI transforms your words into a stunning visual",
                icon: <Sparkles className="w-6 h-6 text-primary" />
              },
              {
                title: "Download",
                description: "Save your creation in high resolution for any use",
                icon: <Star className="w-6 h-6 text-primary" />
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="bg-white dark:bg-gray-800 rounded-2xl p-8 text-center shadow-lg border border-white/20 relative overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 rounded-full transform translate-x-1/2 -translate-y-1/2" />
                
                <div className="w-16 h-16 rounded-full bg-primary/20 text-primary flex items-center justify-center mx-auto mb-6">
                  {step.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-4">{step.title}</h3>
                <p className="text-foreground text-lg">{step.description}</p>
                
                <div className="absolute -bottom-2 -left-2 w-8 h-8 text-primary/40">
                  <Box className="w-full h-full" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
      
      <section className="py-20 px-8 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-4 flex items-center justify-center gap-3">
                <Star className="w-6 h-6 text-primary" />
                <span>Featured Creations</span>
                <Star className="w-6 h-6 text-primary" />
              </h2>
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
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ 
                  y: -10, 
                  scale: 1.02,
                  transition: { duration: 0.3 } 
                }}
                className="overflow-hidden rounded-2xl shadow-lg glass border border-white/10 perspective-container"
              >
                <div className="transform-3d group">
                  <img 
                    src={img}
                    alt={`Featured creation ${index + 1}`}
                    className="w-full aspect-square object-cover transition-all duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div className="text-white">
                      <p className="text-sm font-medium">AI GENERATED</p>
                      <h3 className="text-xl font-bold">Masterpiece #{index + 1}</h3>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      <footer className="py-12 px-8 border-t">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center gap-4"
          >
            <div className="text-2xl font-bold tracking-tight">
              <Sparkles className="inline-block w-5 h-5 mr-1 text-primary" />
              <span className="text-gradient">Vizora</span>
            </div>
            <p className="text-muted-foreground">© 2023 Vizora. All rights reserved.</p>
          </motion.div>
        </div>
      </footer>
    </motion.div>
  );
};

export default Index;
