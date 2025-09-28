import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const SecondaryNavbar: React.FC = () => {
  const buttonStyle = "bg-black text-white border-2 border-[#f8ac54] hover:bg-gray-800 rounded-full text-sm py-2 px-4 whitespace-nowrap flex-shrink-0";

  return (
    <nav className="sticky top-32 w-full z-40 border-b border-white bg-transparent">
      <div className="container flex h-16 items-center justify-center space-x-8 px-4">
        <Link to="/sales">
          <Button className={buttonStyle}>
            Salés
          </Button>
        </Link>
        <Link to="/sucres">
          <Button className={buttonStyle}>
            Sucrés
          </Button>
        </Link>
        <Link to="/creations">
          <Button className={buttonStyle}>
            Créations
          </Button>
        </Link>
      </div>
    </nav>
  );
};

export default SecondaryNavbar;