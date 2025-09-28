import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/context/CartContext"; // Import du hook useCart

const Header: React.FC = () => {
  const { itemCount } = useCart(); // Récupération du nombre d'articles dans le panier

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white bg-transparent">
      <div className="container flex h-32 items-center py-4 relative px-4">
        {/* Bouton "La Maison" à gauche */}
        <Button variant="ghost" className="absolute left-4 text-base md:text-lg font-semibold text-white hover:bg-white/20">
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
        <Link to="/cart" className="absolute right-4"> {/* Lien vers la page du panier */}
          <Button variant="ghost" size="icon" className="relative text-white hover:bg-white/20">
            <ShoppingCart className="h-5 w-5 md:h-6 md:w-6" />
            {itemCount > 0 && ( // Affichage du compteur si des articles sont dans le panier
              <span className="absolute -top-1 -right-1 bg-[#f8ac54] text-black rounded-full h-5 w-5 flex items-center justify-center text-xs font-bold">
                {itemCount}
              </span>
            )}
          </Button>
        </Link>
      </div>
    </header>
  );
};

export default Header;