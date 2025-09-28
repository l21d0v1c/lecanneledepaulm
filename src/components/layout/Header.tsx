import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Instagram, Facebook } from "lucide-react";

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white bg-transparent">
      <div className="container flex flex-col items-center py-4 px-4 min-h-[400px] sm:h-32 sm:flex sm:flex-row sm:justify-between sm:items-center"> {/* min-h augmenté pour les petits écrans */}

        {/* Small screen layout (visible below 640px) */}
        <div className="sm:hidden flex flex-col items-center w-full space-y-4">
          {/* Top section: La Maison + Instagram */}
          <div className="flex flex-col items-center space-y-2 w-full">
            <Link to="/la-maison" className="w-full flex justify-center">
              <Button variant="ghost" className="text-base font-semibold text-white hover:bg-white/20 border-2 border-white rounded-full px-6 py-3">
                La Maison
              </Button>
            </Link>
            <Link to="https://www.instagram.com/lecanneledepaulm/" target="_blank" rel="noopener noreferrer" className="flex justify-center items-center">
              <Button variant="ghost" className="text-white hover:bg-white/20 h-16 w-16 p-0 flex items-center justify-center">
                <Instagram className="h-12 w-12" />
              </Button>
            </Link>
          </div>

          {/* Main button */}
          <Link to="/" className="flex justify-center">
            <Button
              variant="default"
              className="text-base font-bold text-white bg-black px-8 py-12 rounded-full hover:bg-gray-800 transition-colors flex flex-col justify-center items-center leading-tight border-4 border-[#f8ac54]"
            >
              <span>Le Cannelé de</span>
              <span>Paul M</span>
            </Button>
          </Link>

          {/* Bottom section: Le contact + Facebook */}
          <div className="flex flex-col items-center space-y-2 w-full">
            <Link to="/nous-contacter" className="w-full flex justify-center">
              <Button variant="ghost" className="text-base font-semibold text-white hover:bg-white/20 border-2 border-white rounded-full px-6 py-3">
                Le contact
              </Button>
            </Link>
            <Link to="https://www.facebook.com/lecanneledepaulm/" target="_blank" rel="noopener noreferrer" className="flex justify-center items-center">
              <Button variant="ghost" className="text-white hover:bg-white/20 h-16 w-16 p-0 flex items-center justify-center">
                <Facebook className="h-12 w-12" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Large screen layout (hidden below 640px) */}
        <div className="hidden sm:flex sm:w-full sm:justify-between sm:items-center">
          <Link to="/la-maison" className="sm:w-auto">
            <Button variant="ghost" className="text-base md:text-lg font-semibold text-white hover:bg-white/20 border-2 border-white rounded-full px-6 py-3">
              La Maison
            </Button>
          </Link>

          {/* Social icons for large screens, centered */}
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