
import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import LoadingAnimation from './LoadingAnimation';
import GeneratedImage from './GeneratedImage';

const ImageGenerator = () => {
  const [prompt, setPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const promptInputRef = useRef<HTMLTextAreaElement>(null);

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!prompt.trim()) {
      setError('Please enter a prompt to generate an image');
      promptInputRef.current?.focus();
      return;
    }
    
    setError(null);
    setIsGenerating(true);
    setGeneratedImage(null);
    
    try {
      // Make API call to generate image
      const imageUrl = `https://stabledifffusion.com/imagen/${encodeURIComponent(prompt)}?width=1024&height=1024`;
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setGeneratedImage(imageUrl);
    } catch (err) {
      console.error('Error generating image:', err);
      setError('Failed to generate image. Please try again.');
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="min-h-screen pt-28 pb-20 px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4">Generate Your Image</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Describe the image you'd like to create in detail. The more specific your description, 
            the better the results will be.
          </p>
        </motion.div>
        
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          onSubmit={handleGenerate}
          className="mb-12"
        >
          <div className="glass rounded-2xl p-6 shadow-lg transition-all duration-300">
            <textarea
              ref={promptInputRef}
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Describe your dream image in detail (e.g., 'A fantastical 3D landscape with floating islands, vibrant colors, and crystalline structures')"
              className="w-full h-32 p-4 bg-background/50 backdrop-blur-sm border rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
              disabled={isGenerating}
            />
            
            {error && (
              <div className="text-destructive mt-2 text-sm">{error}</div>
            )}
            
            <div className="flex justify-center mt-6">
              <button
                type="submit"
                disabled={isGenerating}
                className="button-primary text-lg font-medium disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isGenerating ? 'Generating...' : 'Generate Image'}
              </button>
            </div>
          </div>
        </motion.form>
        
        <div className="flex justify-center">
          {isGenerating ? (
            <LoadingAnimation />
          ) : generatedImage ? (
            <GeneratedImage imageUrl={generatedImage} />
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default ImageGenerator;
