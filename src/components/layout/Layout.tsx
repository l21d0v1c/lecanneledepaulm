import React from "react";
import Header from "./Header";
import ImageCarousel from "@/components/ImageCarousel";

interface LayoutProps {
  children: React.ReactNode;
}

const carouselImages = [
  "/canneles-1.jpg",
  "/canneles-2.jpg",
  "/canneles-3.jpg",
  "/canneles-4.jpg",
  "/canneles-5.jpg",
  "/canneles-6.jpg",
  "/canneles-7.jpg",
];

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col relative"> {/* Ajout de 'relative' pour que le carrousel absolu se positionne par rapport à lui */}
      <ImageCarousel images={carouselImages} /> {/* Déplacé ici pour couvrir toute la page */}
      <Header /> {/* Le Header a déjà un z-index élevé et un fond */}
      <main className="flex-grow relative z-10"> {/* Ajout de z-10 pour que le contenu soit au-dessus du carrousel */}
        {children}
      </main>
    </div>
  );
};

export default Layout;