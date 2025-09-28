import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Instagram, Facebook } from "lucide-react";

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white bg-transparent">
      <div className="container relative py-4 px-4 min-h-[280px] sm:h-32 sm:flex sm:items-center sm:justify-between"> {/* min-h pour les petits écrans, flex pour les grands */}

        {/* Bouton principal "Le Cannelé de Paul M" - toujours absolument centré */}
        <Link to="/" className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-20">
          <Button
            variant="default"
            className="text-base font-bold text-white bg-black px-8 py-12 rounded-full hover:bg-gray-800 transition-colors flex flex-col justify-center items-center leading-tight border-4 border-[#f8ac54]"
          >
            <span>Le Cannelé de</span>
            <span>Paul M</span>
          </Button>
        </Link>

        {/* Mise en page pour les petits écrans (inférieurs à 640px) */}
        <div className="sm:hidden flex flex-col justify-between h-full w-full">
          {/* Top section: La Maison et Le contact (boutons) */}
          <div className="flex justify-between w-full mt-4">
            <Link to="/la-maison">
              <Button variant="ghost" className="text-base font-semibold text-white hover:bg-white/20 border-2 border-white rounded-full px-6 py-3">
                La Maison
              </Button>
            </Link>
            <Link to="/nous-contacter">
              <Button variant="ghost" className="text-base font-semibold text-white hover:bg-white/20 border-2 border-white rounded-full px-6 py-3">
                Le contact
              </Button>
            </Link>
          </div>

          {/* Bottom section: Instagram et Facebook (icônes) */}
          <div className="flex justify-between w-full mb-4">
            <Link to="https://www.instagram.com/lecanneledepaulm/" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" className="text-white hover:bg-white/20 h-16 w-16 p-0 flex items-center justify-center">
                <Instagram className="h-12 w-12" />
              </Button>
            </Link>
            <Link to="https://www.facebook.com/lecanneledepaulm/" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" className="text-white hover:bg-white/20 h-16 w-16 p-0 flex items-center justify-center">
                <Facebook className="h-12 w-12" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Mise en page pour les grands écrans (640px et plus) */}
        <div className="hidden sm:flex sm:w-full sm:justify-between sm:items-center">
          <Link to="/la-maison" className="sm:w-auto">
            <Button variant="ghost" className="text-base md:text-lg font-semibold text-white hover:bg-white/20 border-2 border-white rounded-full px-6 py-3">
              La Maison
            </Button>
          </Link>

          {/* Icônes sociales pour les grands écrans, positionnées au centre */}
          <div className="flex items-center space-x-4">
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

          <Link to="/nous-contacter" className="sm:w-auto">
            <Button variant="ghost" className="text-base md:text-lg font-semibold text-white hover:bg-white/20 border-2 border-white rounded-full px-6 py-3">
              Le contact
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;