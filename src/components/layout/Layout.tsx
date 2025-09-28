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
      <ImageCarousel images={carouselImages} />
      {/* Masque dégradé uniquement sur le bas de la navbar secondaire */}
      <div className="fixed top-[128px] left-0 right-0 h-8 bg-gradient-to-b from-black/80 to-transparent pointer-events-none z-40" />
      <Header />
      <SecondaryNavbar />
      <main className="flex-grow relative z-10">
        {children}
      </main>
    </div>
  );
};

export default Layout;