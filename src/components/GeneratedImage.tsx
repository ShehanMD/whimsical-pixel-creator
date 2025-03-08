
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';

interface GeneratedImageProps {
  imageUrl: string;
}

const GeneratedImage = ({ imageUrl }: GeneratedImageProps) => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = imageUrl;
    link.download = `imagen-${Date.now()}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="w-full max-w-2xl mx-auto"
    >
      <div className="relative group">
        <div className="overflow-hidden rounded-2xl shadow-xl">
          <img 
            src={imageUrl} 
            alt="AI Generated Image" 
            className="w-full object-cover image-hover"
          />
        </div>
        
        <button
          onClick={handleDownload}
          className="absolute bottom-4 right-4 glass p-3 rounded-full shadow-lg 
                   text-foreground hover:bg-primary hover:text-primary-foreground
                   transition-all duration-300 transform group-hover:scale-110"
        >
          <Download className="w-5 h-5" />
        </button>
      </div>
      
      <div className="mt-4 text-center">
        <button
          onClick={handleDownload}
          className="button-primary flex items-center justify-center space-x-2 mx-auto"
        >
          <Download className="w-4 h-4" />
          <span>Download Image</span>
        </button>
      </div>
    </motion.div>
  );
};

export default GeneratedImage;
