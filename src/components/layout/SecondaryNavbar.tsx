import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const SecondaryNavbar: React.FC = () => {
  // Suppression de 'w-full' pour que les boutons soient moins larges
  const buttonStyle = "bg-black text-white border-2 border-[#f8ac54] hover:bg-gray-800 rounded-full text-sm py-2 px-4 whitespace-nowrap flex-shrink-0 text-center";

  return (
    <nav className="sticky top-32 w-full z-40 border-b border-white bg-transparent">
      {/* Utilisation d'une grille à 3 colonnes pour une répartition égale */}
      <div className="container grid grid-cols-3 gap-4 h-16 items-center px-4">
        <Link to="/sales" className="col-span-1 flex justify-center"> {/* Ajout de flex justify-center pour centrer le bouton */}
          <Button className={buttonStyle}>
            Salés
          </Button>
        </Link>
        <Link to="/sucres" className="col-span-1 flex justify-center"> {/* Ajout de flex justify-center */}
          <Button className={buttonStyle}>
            Sucrés
          </Button>
        </Link>
        <Link to="/creations" className="col-span-1 flex justify-center"> {/* Ajout de flex justify-center */}
          <Button className={buttonStyle}>
            Créations
          </Button>
        </Link>
      </div>
    </nav>
  );
};

export default SecondaryNavbar;