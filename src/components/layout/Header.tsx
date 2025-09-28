import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Instagram, Facebook } from "lucide-react";

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white bg-transparent">
      <div className="container flex flex-col items-center py-4 px-4 space-y-4 sm:flex-row sm:justify-between sm:items-center sm:h-32 sm:space-y-0">

        {/* Bouton "La Maison" */}
        <Link to="/la-maison" className="w-full flex justify-center sm:w-auto sm:order-1 order-1">
          <Button variant="ghost" className="text-base md:text-lg font-semibold text-white hover:bg-white/20 border-2 border-white rounded-full px-6 py-3">
            La Maison
          </Button>
        </Link>

        {/* Icône Instagram (visible uniquement sur les grands écrans) */}
        <Link to="https://www.instagram.com/lecanneledepaulm/" target="_blank" rel="noopener noreferrer" className="hidden sm:flex sm:order-2 justify-center items-center h-20 w-20 p-0">
          <Button variant="ghost" className="text-white hover:bg-white/20 h-20 w-20 p-0 flex items-center justify-center">
            <Instagram className="h-16 w-16" />
          </Button>
        </Link>

        {/* Bouton principal "Le Cannelé de Paul M" */}
        <Link to="/" className="w-full flex justify-center sm:w-auto sm:order-3 order-3">
          <Button
            variant="default"
            className="text-base font-bold text-white bg-black px-8 py-12 rounded-full hover:bg-gray-800 transition-colors flex flex-col justify-center items-center leading-tight border-4 border-[#f8ac54]"
          >
            <span>Le Cannelé de</span>
            <span>Paul M</span>
          </Button>
        </Link>

        {/* Icône Facebook (visible uniquement sur les grands écrans) */}
        <Link to="https://www.facebook.com/lecanneledepaulm/" target="_blank" rel="noopener noreferrer" className="hidden sm:flex sm:order-4 justify-center items-center h-20 w-20 p-0">
          <Button variant="ghost" className="text-white hover:bg-white/20 h-20 w-20 p-0 flex items-center justify-center">
            <Facebook className="h-16 w-16" />
          </Button>
        </Link>

        {/* Bouton "Le contact" */}
        <Link to="/nous-contacter" className="w-full flex justify-center sm:w-auto sm:order-5 order-2">
          <Button variant="ghost" className="text-base md:text-lg font-semibold text-white hover:bg-white/20 border-2 border-white rounded-full px-6 py-3">
            Le contact
          </Button>
        </Link>

        {/* Icônes sociales (Instagram & Facebook) - visibles uniquement sur les petits écrans */}
        <div className="flex justify-center space-x-4 w-full sm:hidden order-4">
          <Link to="https://www.instagram.com/lecanneledepaulm/" target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" className="text-white hover:bg-white/20 h-20 w-20 p-0 flex items-center justify-center">
              <Instagram className="h-16 w-16" />
            </Button>
          </Link>
          <Link to="https://www.facebook.com/lecanneledepaulm/" target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" className="text-white hover:bg-white/20 h-20 w-20 p-0 flex items-center justify-center">
              <Facebook className="h-16 w-16" />
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;