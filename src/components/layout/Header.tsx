import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-black bg-transparent">
      <div className="container flex h-32 items-center justify-between py-4">
        <Link
          to="/"
          className="text-xl font-bold text-white bg-black px-6 py-10 rounded-full hover:bg-gray-800 transition-colors" // Augmentation du py-8 à py-10 pour un ovale encore plus allongé verticalement
        >
          Le Cannelé de Paul M
        </Link>
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