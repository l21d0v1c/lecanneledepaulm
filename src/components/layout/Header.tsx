import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Instagram, Facebook } from "lucide-react";

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white bg-transparent">
      <div className="container relative min-h-[280px] py-4 px-4 sm:h-32 sm:flex sm:items-center sm:justify-between"> {/* min-h pour les petits écrans, flex pour les grands */}

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
        <div className="sm:hidden flex flex-col items-center space-y-4 w-full">
          {/* Groupe du haut : La Maison + Icône Instagram */}
          <div className="flex flex-col items-center space-y-2 absolute top-4 left-1/2 -translate-x-1/2 w-full max-w-xs">
            <Link to="/la-maison" className="w-full flex justify-center">
              <Button variant="ghost" className="text-base md:text-lg font-semibold text-white hover:bg-white/20 border-2 border-white rounded-full px-6 py-3">
                La Maison
              </Button>
            </Link>
            <Link to="https://www.instagram.com/lecanneledepaulm/" target="_blank" rel="noopener noreferrer" className="flex justify-center items-center h-20 w-20 p-0">
              <Button variant="ghost" className="text-white hover:bg-white/20 h-20 w-20 p-0 flex items-center justify-center">
                <Instagram className="h-16 w-16" />
              </Button>
            </Link>
          </div>

          {/* Groupe du bas : Le contact + Icône Facebook */}
          <div className="flex flex-col items-center space-y-2 absolute bottom-4 left-1/2 -translate-x-1/2 w-full max-w-xs">
            <Link to="/nous-contacter" className="target='_blank' w-full flex justify-center">
              <Button variant="ghost" className="text-base md:text-lg font-semibold text-white hover:bg-white/20 border-2 border-white rounded-full px-6 py-3">
                Le contact
              </Button>
            </Link>
            <Link to="https://www.facebook.com/lecanneledepaulm/" target="_blank" rel="noopener noreferrer" className="flex justify-center items-center h-20 w-20 p-0">
              <Button variant="ghost" className="text-white hover:bg-white/20 h-20 w-20 p-0 flex items-center justify-center">
                <Facebook className="h-16 w-16" />
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