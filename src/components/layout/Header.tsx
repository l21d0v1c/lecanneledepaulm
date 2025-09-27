import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react"; // Import de l'icône ShoppingCart

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-black bg-transparent">
      <div className="container flex h-32 items-center py-4 relative"> {/* Ajout de 'relative' pour le positionnement absolu des enfants */}
        {/* Bouton "La Maison" à gauche */}
        <Button variant="ghost" className="absolute left-0 text-lg font-semibold text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">
          La Maison
        </Button>

        {/* Conteneur pour le bouton central "Le Cannelé de Paul M" */}
        <div className="absolute left-1/2 -translate-x-1/2"> {/* Centrage parfait avec positionnement absolu */}
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
        <Button variant="ghost" size="icon" className="absolute right-0 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">
          <ShoppingCart className="h-6 w-6" />
        </Button>
      </div>
    </header>
  );
};

export default Header;