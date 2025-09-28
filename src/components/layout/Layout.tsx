import React from "react";
import Header from "./Header";
import SecondaryNavbar from "./SecondaryNavbar";
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
    <div className="min-h-screen flex flex-col relative overflow-hidden"> {/* Ajout de overflow-hidden */}
      <ImageCarousel images={carouselImages} />
      {/* Dégradé progressif pour masquer le contenu sous la navbar */}
      <div className="fixed top-0 left-0 right-0 h-48 bg-gradient-to-b from-black via-black/90 to-transparent pointer-events-none z-30" />
      <Header />
      <SecondaryNavbar />
      <main className="flex-grow relative z-10 pt-12 overflow-hidden"> {/* Ajout de overflow-hidden */}
        {children}
      </main>
    </div>
  );
};

export default Layout;