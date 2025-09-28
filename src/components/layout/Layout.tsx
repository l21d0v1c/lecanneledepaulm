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
    <div className="min-h-screen flex flex-col relative">
      {/* Carousel en fond */}
      <ImageCarousel images={carouselImages} />

      {/* Navbar fixe transparente */}
      <Header /> {/* z-40 */}
      <SecondaryNavbar /> {/* z-30 */}

      {/* Conteneur principal avec masquage du haut */}
      <div className="relative flex-grow overflow-hidden z-10">
        {/* Contenu décalé pour ne pas passer sous la navbar */}
        <main className="pt-16 relative z-10">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;