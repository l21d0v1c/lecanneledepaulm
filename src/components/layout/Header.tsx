import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Instagram, Facebook } from "lucide-react"; // Import des icônes

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white bg-transparent">
      <div className="container flex h-48 items-center py-4 relative px-4">
        {/* Bouton "La Maison" à gauche */}
        <Link to="/la-maison" className="absolute left-4">
          <Button variant="ghost" className="text-base md:text-lg font-semibold text-white hover:bg-white/20">
            La Maison
          </Button>
        </Link>

        {/* Conteneur pour le bouton central "Le Cannelé de Paul M" et les icônes sociales */}
        <div className="absolute left-1/2 -translate-x-1/2 flex items-center space-x-4">
          {/* Icône Instagram à gauche du bouton central */}
          <Link to="https://www.instagram.com/lecanneledepaulm/" target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" className="text-white hover:bg-white/20 h-24 w-24 p-0 flex items-center justify-center"> {/* Taille du bouton augmentée */}
              <Instagram className="h-20 w-20" /> {/* Taille de l'icône augmentée */}
            </Button>
          </Link>

          <Link to="/">
            <Button
              variant="default"
              className="text-lg font-bold text-white bg-black px-12 py-20 rounded-full hover:bg-gray-800 transition-colors flex flex-col justify-center items-center leading-tight border-4 border-[#f8ac54]"
            >
              <span>Le Cannelé de</span>
              <span>Paul M</span>
            </Button>
          </Link>

          {/* Icône Facebook à droite du bouton central */}
          <Link to="https://www.facebook.com/lecanneledepaulm/" target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" className="text-white hover:bg-white/20 h-24 w-24 p-0 flex items-center justify-center"> {/* Taille du bouton augmentée */}
              <Facebook className="h-20 w-20" /> {/* Taille de l'icône augmentée */}
            </Button>
          </Link>
        </div>

        {/* Bouton "Nous Contacter" à droite */}
        <Link to="/nous-contacter" className="absolute right-4">
          <Button variant="ghost" className="text-base md:text-lg font-semibold text-white hover:bg-white/20">
            Nous Contacter
          </Button>
        </Link>
      </div>
    </header>
  );
};

export default Header;