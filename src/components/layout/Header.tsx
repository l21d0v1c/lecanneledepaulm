import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import OvalButton from "../OvalButton";

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-black bg-transparent h-20"> {/* Hauteur fixe h-20 */}
      <div className="flex w-full items-center justify-between px-4 h-full"> {/* Supprime py-6, utilise h-full et items-center */}
        <div className="flex-1"></div>
        <OvalButton>Le Cannelé de Paul M</OvalButton>
        <div className="flex-1 flex justify-end">
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