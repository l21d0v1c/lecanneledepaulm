import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-black bg-transparent">
      <div className="container flex h-32 items-center justify-center py-4"> {/* Hauteur augmentée à h-32 pour contenir le bouton */}
        <Link to="/">
          <Button
            variant="default"
            className="text-base font-bold text-white bg-black px-8 py-12 rounded-full hover:bg-gray-800 transition-colors flex flex-col justify-center items-center leading-tight border-4 border-[#f8ac54]"
          >
            <span>Le Cannelé de</span>
            <span>Paul M</span>
          </Button>
        </Link>
        {/* La balise nav a été supprimée car elle est vide et n'est plus nécessaire pour le centrage */}
      </div>
    </header>
  );
};

export default Header;