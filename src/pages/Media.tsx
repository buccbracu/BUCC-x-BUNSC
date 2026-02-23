import { useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

// Import all images from assets folders
const imageModules = import.meta.glob(
  "../assets/**/*.{jpg,jpeg,png,gif,webp}",
  { eager: true },
);

interface ImageModule {
  default: string;
}

const Media = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Filter and organize images by folder
  const organizedImages: { [key: string]: string[] } = {};

  Object.entries(imageModules).forEach(([path, module]) => {
    // Skip icon, hero-nature images, and Panel pictures folder
    if (
      path.includes("icon.jpg") ||
      path.includes("hero-nature.jpg") ||
      path.includes("Panel pictures") ||
      path.includes("Dr. Mohammad Rafiqul Islam.jpg") ||
      path.includes("Tawsif Ur Rashid.jpg") ||
      path.includes("hero.jpg") ||
      path.includes('Editorial write up') ||
      path.includes("Screenshot 2025-11-05 010709.png")
    ) {
      return;
    }

    // Extract folder name from path
    const pathParts = path.split("/");
    const folderIndex = pathParts.findIndex((part) => part === "assets") + 1;
    const folderName = pathParts[folderIndex] || "Other";

    // Clean up folder name (remove date suffixes)
    const cleanFolderName = folderName.replace(/-\d{14}Z-1-\d{3}$/, "");

    if (!organizedImages[cleanFolderName]) {
      organizedImages[cleanFolderName] = [];
    }

    organizedImages[cleanFolderName].push((module as ImageModule).default);
  });

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold text-gradient mb-8 text-center">
          Media Gallery
        </h1>
        <p className="text-center text-muted-foreground text-lg mb-12">
          Photos and videos from our events and activities
        </p>

        {/* Display images organized by folder */}
        {Object.entries(organizedImages).map(([folderName, images]) => (
          <div key={folderName} className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-primary capitalize">
              {folderName}
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {images.map((imageSrc, index) => (
                <div
                  key={index}
                  className="aspect-square rounded-xl overflow-hidden glass hover:scale-105 transition-transform cursor-pointer"
                  onClick={() => setSelectedImage(imageSrc)}
                >
                  <img
                    src={imageSrc}
                    alt={`${folderName} - ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center animate-fade-in p-4"
          onClick={() => setSelectedImage(null)}
        >
          <Button
            size="icon"
            variant="outline"
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 bg-background/80 hover:bg-background"
          >
            <X className="h-5 w-5" />
          </Button>
          <img
            src={selectedImage}
            alt="Full size"
            className="max-w-full max-h-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
};

export default Media;
