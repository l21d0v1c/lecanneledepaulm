import React from "react";
import { Link } from "react-router-dom";
// Removed Button and ShoppingCart imports as they are no longer used
// import { Button } from "@/components/ui/button";
// import { ShoppingCart } from "lucide-react";

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-black bg-transparent">
      <div className="container flex h-44 items-center justify-between py-4">
        <Link
          to="/"
          className="text-base font-bold text-white bg-black px-6 py-12 rounded-full hover:bg-gray-800 transition-colors"
        >
          Le Cannelé de Paul M
        </Link>
        <nav>
          {/* Le bouton du panier a été supprimé */}
        </nav>
      </div>
    </header>
  );
};

export default Header;