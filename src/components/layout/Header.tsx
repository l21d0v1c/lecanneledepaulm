import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import OvalButton from "@/components/OvalButton";

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-black bg-transparent">
      <div className="flex h-56 w-full items-center justify-between px-4"> {/* 'container' et 'py-2' supprimés, 'w-full' et 'px-4' ajoutés */}
        <OvalButton aria-label="Le Cannelé de Paul M">
          Le Cannelé de Paul M
        </OvalButton>
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