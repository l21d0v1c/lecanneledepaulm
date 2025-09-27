import React, { useState, useCallback } from "react";
import Header from "./Header";
import ImageCarousel from "@/components/ImageCarousel";
import { cn } from "@/lib/utils"; // Import cn for conditional classes

interface LayoutProps {
  children: React.ReactNode;
}

interface CarouselImage {
  src: string;
  textColor: 'light' | 'dark';
}

const carouselImagesData: CarouselImage[] = [
  { src: "/canneles-1.jpg", textColor: "light" }, // Fond sombre, texte clair
  { src: "/canneles-2.jpg", textColor: "dark" },  // Fond clair, texte sombre
  { src: "/canneles-3.jpg", textColor: "light" },
  { src: "/canneles-4.jpg", textColor: "dark" },
  { src: "/canneles-5.jpg", textColor: "light" },
  { src: "/canneles-6.jpg", textColor: "dark" },
  { src: "/canneles-7.jpg", textColor: "light" },
];

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [currentTextColor, setCurrentTextColor] = useState<'light' | 'dark'>(
    carouselImagesData[0].textColor // Initialise avec la couleur de texte de la première image
  );

  const handleSlideChange = useCallback((index: number) => {
    setCurrentTextColor(carouselImagesData[index].textColor);
  }, []);

  // Détermine la couleur de la bordure en fonction de la couleur du texte
  const borderColorClass = currentTextColor === 'dark' ? 'border-gray-300' : 'border-black';

  return (
    <div className="min-h-screen flex flex-col relative">
      <ImageCarousel images={carouselImagesData} onSlideChange={handleSlideChange} />
      <Header currentTextColor={currentTextColor} borderColorClass={borderColorClass} />
      <main className={cn("flex-grow relative z-10")}>
        {/* Passe currentTextColor aux enfants */}
        {React.Children.map(children, child => {
          if (React.isValidElement(child)) {
            return React.cloneElement(child as React.ReactElement<any>, { currentTextColor });
          }
          return child;
        })}
      </main>
    </div>
  );
};

export default Layout;