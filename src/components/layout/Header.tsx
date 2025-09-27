import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-black bg-transparent">
      <div className="container flex h-56 items-center justify-between py-2">
        <Link to="/"> {/* Le Link enveloppe maintenant le Button */}
          <Button asChild className="w-48 h-40 flex items-center justify-center text-center text-base leading-tight font-bold text-white bg-black rounded-full hover:bg-gray-800 transition-colors">
            <span>
              Le Cannelé de Paul M
            </span>
          </Button>
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