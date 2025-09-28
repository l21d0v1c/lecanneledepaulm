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
      <ImageCarousel images={carouselImages} /> {/* z-[-1] */}
      <Header /> {/* z-40 */}
      <SecondaryNavbar /> {/* z-30 */}
      <main className="flex-grow relative z-10 pt-12"> {/* pt-12 */}
        {children}
      </main>
    </div>
  );
};

export default Layout;