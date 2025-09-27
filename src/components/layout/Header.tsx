import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import OvalButton from "../OvalButton"; // Importation du nouveau composant OvalButton

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-black bg-transparent">
      <div className="flex w-full items-center justify-between px-4 py-4"> {/* Ajustement du padding vertical */}
        <div className="flex-1"></div> {/* Élément vide pour pousser le bouton central */}
        <OvalButton>Le Cannelé de Paul M</OvalButton> {/* Le bouton ovale au centre */}
        <div className="flex-1 flex justify-end"> {/* Section pour l'icône du panier à droite */}
          <nav>
            <Button variant="ghost" size="icon" aria-label="Panier" className="text-white hover:bg-white/20">
              <ShoppingCart className="h-6 w-6" />
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;