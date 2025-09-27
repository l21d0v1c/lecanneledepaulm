import React from "react";
import Header from "./Header";
// import ImageCarousel from "@/components/ImageCarousel"; // Temporairement supprimé

interface LayoutProps {
  children: React.ReactNode;
}

// Les images du carrousel sont temporairement supprimées
// const carouselImages = [
//   "/canneles-1.jpg",
//   "/canneles-2.jpg",
//   "/canneles-3.jpg",
//   "/canneles-4.jpg",
//   "/canneles-5.jpg",
//   "/canneles-6.jpg",
//   "/canneles-7.jpg",
// ];

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col relative">
      {/* ImageCarousel est temporairement supprimé */}
      <Header />
      <main className="flex-grow relative z-10">
        {children}
      </main>
    </div>
  );
};

export default Layout;