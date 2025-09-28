import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const SecondaryNavbar: React.FC = () => {
  const buttonStyle = "bg-black text-white border-2 border-[#f8ac54] hover:bg-gray-800 rounded-full text-sm py-2 px-4 whitespace-nowrap flex-shrink-0 text-center min-w-[120px]";

  return (
    <nav className="fixed top-[295px] sm:top-[128px] w-full z-40 border-b border-white bg-transparent"> {/* Changé de 'sticky' à 'fixed' */}
      <div className="container grid grid-cols-3 gap-4 h-16 items-center px-4">
        <Link to="/sales" className="col-span-1 flex justify-center">
          <Button className={buttonStyle}>
            Salés
          </Button>
        </Link>
        <Link to="/sucres" className="col-span-1 flex justify-center">
          <Button className={buttonStyle}>
            Sucrés
          </Button>
        </Link>
        <Link to="/creations" className="col-span-1 flex justify-center">
          <Button className={buttonStyle}>
            Créations
          </Button>
        </Link>
      </div>
    </nav>
  );
};

export default SecondaryNavbar;