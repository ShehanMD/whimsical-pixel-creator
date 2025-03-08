
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
      className="w-full"
    >
      <div className="relative group glass rounded-xl p-3 shadow-md">
        <div className="overflow-hidden rounded-lg">
          <img 
            src={imageUrl} 
            alt="AI Generated Image" 
            className="w-full aspect-square object-cover image-hover"
          />
        </div>
        
        <button
          onClick={handleDownload}
          className="absolute bottom-4 right-4 glass p-2 rounded-full shadow-lg 
                   text-foreground hover:bg-primary hover:text-primary-foreground
                   transition-all duration-300 transform group-hover:scale-110"
        >
          <Download className="w-4 h-4" />
        </button>
      </div>
      
      <div className="mt-3 text-center">
        <button
          onClick={handleDownload}
          className="button-primary text-sm flex items-center justify-center space-x-2 mx-auto px-4 py-2"
        >
          <Download className="w-3 h-3 mr-1" />
          <span>Download</span>
        </button>
      </div>
    </motion.div>
  );
};

export default GeneratedImage;
