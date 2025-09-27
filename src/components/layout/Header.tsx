import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-black bg-transparent">
      <div className="container flex h-44 items-center justify-between py-4">
        <Link to="/">
          <Button
            variant="default"
            className="text-base font-bold text-white bg-black px-16 py-4 rounded-full hover:bg-gray-800 transition-colors" // Ajustement du padding pour une ellipse plus prononcée
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