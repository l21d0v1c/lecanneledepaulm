import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import OvalButton from "../OvalButton";

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-black bg-transparent h-56 md:h-72">
      <div className="flex w-full items-center justify-between px-4">
        <div className="flex-1" />
        <OvalButton>Le Cannelé de Paul M</OvalButton>
        <div className="flex-1 flex justify-end">
          {/* bouton panier */}
        </div>
      </div>
    </header>
  );
};

export default Header;