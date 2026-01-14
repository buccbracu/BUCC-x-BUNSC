import { useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import FadeIn from "@/components/FadeIn";

// Import all images from assets folders
const imageModules = import.meta.glob("../assets/**/*.{jpg,jpeg,png,gif,webp}", { eager: true });

interface ImageModule {
  default: string;
}

const Media = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  // Filter and organize images by folder
  const organizedImages: { [key: string]: string[] } = {};
  
  Object.entries(imageModules).forEach(([path, module]) => {
    // Skip icon, hero-nature images, and Panel pictures folder
    if (path.includes('icon.jpg') || path.includes('hero-nature.jpg') || path.includes('Panel pictures')) {
      return;
    }
    
    // Extract folder name from path
    const pathParts = path.split('/');
    const folderIndex = pathParts.findIndex(part => part === 'assets') + 1;
    const folderName = pathParts[folderIndex] || 'Other';
    
    // Clean up folder name (remove date suffixes)
    const cleanFolderName = folderName.replace(/-\d{14}Z-1-\d{3}$/, '');
    
    if (!organizedImages[cleanFolderName]) {
      organizedImages[cleanFolderName] = [];
    }
    
    organizedImages[cleanFolderName].push((module as ImageModule).default);
  });

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/20">
      <section className="pt-32 md:pt-48 pb-16 md:pb-24 px-6 md:px-12">
        <div className="container mx-auto max-w-5xl">
          <FadeIn>
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-12">
              Moments.
            </h1>
          </FadeIn>
          <FadeIn delay={200}>
            <p className="text-2xl md:text-3xl text-muted-foreground font-light leading-relaxed max-w-3xl">
              Captured memories from our journey.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="px-6 md:px-12 pb-16 md:pb-24 border-t border-white/5">
        <div className="container mx-auto pt-16 md:pt-24">
          {Object.entries(organizedImages).map(([folderName, images], sectionIndex) => (
            <div key={folderName} className="mb-16 md:mb-32 last:mb-0">
              <FadeIn>
                <h2 className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-12">
                  {folderName}
                </h2>
              </FadeIn>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {images.map((imageSrc, index) => (
                  <FadeIn key={index} delay={(index % 4) * 50}>
                    <div
                      className="aspect-square overflow-hidden rounded-xl bg-secondary/20 cursor-pointer group relative hover-inspection"
                      onClick={() => setSelectedImage(imageSrc)}
                    >
                      <img
                        src={imageSrc}
                        alt={`${folderName} - ${index + 1}`}
                        className="w-full h-full object-cover transition-transform duration-700"
                      />
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-background/95 backdrop-blur-xl flex items-center justify-center p-4 animate-in fade-in duration-300"
          onClick={() => setSelectedImage(null)}
        >
          <Button
            size="icon"
            variant="ghost"
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 text-foreground hover:bg-white/10 rounded-full w-12 h-12"
          >
            <X className="h-6 w-6" />
          </Button>
          <img
            src={selectedImage}
            alt="Full size"
            className="max-w-full max-h-[90vh] object-contain shadow-2xl rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
};

export default Media;
