import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { cn } from "@/lib/utils"; // Import cn

interface HeaderProps {
  currentTextColor: 'light' | 'dark';
  borderColorClass: string;
}

const Header: React.FC<HeaderProps> = ({ currentTextColor, borderColorClass }) => {
  const textColorClass = currentTextColor === 'dark' ? 'text-black' : 'text-white';

  return (
    <header className={cn("sticky top-0 z-40 w-full border-b bg-transparent", borderColorClass)}>
      <div className="container flex h-32 items-center py-4 relative px-4">
        {/* Bouton "La Maison" à gauche */}
        <Button variant="ghost" className={cn("absolute left-4 text-base md:text-lg font-semibold hover:bg-gray-100", textColorClass)}>
          La Maison
        </Button>

        {/* Conteneur pour le bouton central "Le Cannelé de Paul M" */}
        <div className="absolute left-1/2 -translate-x-1/2">
          <Link to="/">
            <Button
              variant="default"
              className="text-base font-bold text-white bg-black px-8 py-12 rounded-full hover:bg-gray-800 transition-colors flex flex-col justify-center items-center leading-tight border-4 border-[#f8ac54]"
            >
              <span>Le Cannelé de</span>
              <span>Paul M</span>
            </Button>
          </Link>
        </div>

        {/* Bouton Caddie à droite */}
        <Button variant="ghost" size="icon" className={cn("absolute right-4 hover:bg-gray-100", textColorClass)}>
          <ShoppingCart className="h-5 w-5 md:h-6 md:w-6" />
        </Button>
      </div>
    </header>
  );
};

export default Header;