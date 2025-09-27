import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react"; // Import de l'icône ShoppingCart

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-black bg-transparent">
      <div className="container flex h-32 items-center py-4 space-x-4"> {/* Ajout de space-x-4 pour l'espacement */}
        <Link to="/">
          <Button
            variant="default"
            className="text-base font-bold text-white bg-black px-8 py-12 rounded-full hover:bg-gray-800 transition-colors flex flex-col justify-center items-center leading-tight border-4 border-[#f8ac54]"
          >
            <span>Le Cannelé de</span>
            <span>Paul M</span>
          </Button>
        </Link>
        {/* Bouton "La Maison" */}
        <Button variant="ghost" className="text-lg font-semibold text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">
          La Maison
        </Button>
        {/* Bouton Caddie */}
        <Button variant="ghost" size="icon" className="text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">
          <ShoppingCart className="h-6 w-6" />
        </Button>
      </div>
    </header>
  );
};

export default Header;