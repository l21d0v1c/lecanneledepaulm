import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button"; // Ré-importation du composant Button

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-black bg-transparent">
      <div className="container flex h-44 items-center justify-between py-4">
        <Link to="/"> {/* Le Link gère la navigation */}
          <Button
            variant="default" // Utilise la variante par défaut du bouton
            className="text-base font-bold text-white bg-black px-6 py-12 rounded-full hover:bg-gray-800 transition-colors" // Applique les styles pour le rendre rond et noir
          >
            Le Cannelé de Paul M
          </Button>
        </Link>
        <nav>
          {/* Le bouton du panier a été supprimé */}
        </nav>
      </div>
    </header>
  );
};

export default Header;