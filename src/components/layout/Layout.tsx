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
  "/canneles-8.jpg",
];

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow relative min-h-[calc(100vh-4rem)]">
        <ImageCarousel images={carouselImages} />
        <div className="relative z-10 h-full w-full flex flex-col items-center justify-center">
          {children}
        </div>
      </main>
    </div>
  );
};

export default Layout;