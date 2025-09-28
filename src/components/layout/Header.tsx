import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react"; // Import de l'icône ShoppingCart

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white bg-transparent"> {/* Z-index augmenté à 50 */}
      <div className="container flex h-32 items-center py-4 relative px-4">
        {/* Bouton "La Maison" à gauche */}
        <Button variant="ghost" className="absolute left-4 text-base md:text-lg font-semibold text-white hover:bg-white/20"> {/* White text, subtle hover */}
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
        <Button variant="ghost" size="icon" className="absolute right-4 text-white hover:bg-white/20"> {/* White icon, subtle hover */}
          <ShoppingCart className="h-5 w-5 md:h-6 md:w-6" />
        </Button>
      </div>
    </header>
  );
};

export default Header;