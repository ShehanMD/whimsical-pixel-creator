
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import ImageGenerator from '@/components/ImageGenerator';
import { Toaster } from "@/components/ui/toaster";

const Generate = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-b from-background to-secondary/20"
    >
      <Navbar />
      <ImageGenerator />
      <Toaster />
    </motion.div>
  );
};

export default Generate;
