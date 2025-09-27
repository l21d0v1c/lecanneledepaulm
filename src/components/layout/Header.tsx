import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-black bg-transparent">
      <div className="container flex h-56 items-center justify-between py-2">
        {/* Le bouton "Le Cannelé de Paul M" a été supprimé */}
        <nav>
          <Button variant="ghost" size="icon" aria-label="Panier" className="text-white hover:bg-white/20">
            <ShoppingCart className="h-6 w-6" />
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;