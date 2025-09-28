import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
// import { ShoppingCart } from "lucide-react"; // Plus besoin de l'icône du panier
// import { useCart } from "@/context/CartContext"; // Plus besoin du hook useCart

const Header: React.FC = () => {
  // const { itemCount } = useCart(); // Plus besoin du nombre d'articles dans le panier

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white bg-transparent">
      <div className="container flex h-32 items-center py-4 relative px-4">
        {/* Bouton "La Maison" à gauche */}
        <Link to="/la-maison" className="absolute left-4"> {/* Le bouton "La Maison" pointe maintenant vers /la-maison */}
          <Button variant="ghost" className="text-base md:text-lg font-semibold text-white hover:bg-white/20">
            La Maison
          </Button>
        </Link>

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

        {/* Le bouton Caddie est supprimé */}
      </div>
    </header>
  );
};

export default Header;