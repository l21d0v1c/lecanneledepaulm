import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Instagram, Facebook } from "lucide-react";

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white bg-transparent">
      <div className="container py-4 px-4 flex flex-col items-center sm:flex-row sm:justify-between sm:items-center sm:h-32">

        {/* Small screen layout (visible below 640px) */}
        <div className="sm:hidden flex flex-col w-full space-y-4">
          {/* Première div: La Maison + Instagram */}
          <div className="flex justify-center items-center space-x-4">
            <Link to="/la-maison">
              <Button variant="ghost" className="text-lg font-semibold text-white hover:bg-white/20 border-2 border-white rounded-full px-6 py-3">
                La Maison
              </Button>
            </Link>
            <Link to="https://www.instagram.com/lecanneledepaulm/" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" className="text-white hover:bg-white/20 h-16 w-16 p-0 flex items-center justify-center">
                <Instagram className="h-12 w-12" />
              </Button>
            </Link>
          </div>

          {/* Deuxième div: Le Cannelé de Paul M */}
          <div className="flex justify-center items-center">
            <Link to="/">
              <Button
                variant="default"
                className="text-base font-bold text-white bg-black px-8 py-12 rounded-full hover:bg-gray-800 transition-colors flex flex-col justify-center items-center leading-tight border-4 border-[#f8ac54]"
              >
                <span>Le Cannelé de</span>
                <span>Paul M</span>
              </Button>
            </Link>
          </div>

          {/* Troisième div: Facebook + Le contact */}
          <div className="flex justify-center items-center space-x-4">
            <Link to="https://www.facebook.com/lecanneledepaulm/" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" className="text-white hover:bg-white/20 h-16 w-16 p-0 flex items-center justify-center">
                <Facebook className="h-12 w-12" />
              </Button>
            </Link>
            <Link to="/nous-contacter">
              <Button variant="ghost" className="text-lg font-semibold text-white hover:bg-white/20 border-2 border-white rounded-full px-6 py-3">
                Le contact
              </Button>
            </Link>
          </div>
        </div>

        {/* Large screen layout (hidden below 640px) */}
        <div className="hidden sm:flex sm:w-full sm:justify-between sm:items-center">
          {/* Première div pour grands écrans */}
          <div className="flex items-center space-x-4">
            <Link to="/la-maison" className="sm:w-auto">
              <Button variant="ghost" className="text-lg md:text-xl font-semibold text-white hover:bg-white/20 border-2 border-white rounded-full px-6 py-3">
                La Maison
              </Button>
            </Link>
            <Link to="https://www.instagram.com/lecanneledepaulm/" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" className="text-white hover:bg-white/20 h-20 w-20 p-0 flex items-center justify-center">
                <Instagram className="h-16 w-16" />
              </Button>
            </Link>
          </div>

          {/* Deuxième div pour grands écrans (bouton principal) */}
          <Link to="/" className="sm:w-auto">
            <Button
              variant="default"
              className="text-base font-bold text-white bg-black px-8 py-12 rounded-full hover:bg-gray-800 transition-colors flex flex-col justify-center items-center leading-tight border-4 border-[#f8ac54]"
            >
              <span>Le Cannelé de</span>
              <span>Paul M</span>
            </Button>
          </Link>

          {/* Troisième div pour grands écrans */}
          <div className="flex items-center space-x-4">
            <Link to="https://www.facebook.com/lecanneledepaulm/" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" className="text-white hover:bg-white/20 h-20 w-20 p-0 flex items-center justify-center">
                <Facebook className="h-16 w-16" />
              </Button>
            </Link>
            <Link to="/nous-contacter" className="sm:w-auto">
              <Button variant="ghost" className="text-lg md:text-xl font-semibold text-white hover:bg-white/20 border-2 border-white rounded-full px-6 py-3">
                Le contact
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;