import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const SecondaryNavbar: React.FC = () => {
  return (
    <nav className="sticky top-32 w-full z-40 border-b border-white bg-transparent">
      <div className="container flex h-16 items-center justify-center space-x-8 px-4">
        <Link to="/sales">
          <Button className="text-base font-medium text-white bg-black hover:bg-gray-800"> {/* Changé pour fond noir */}
            Salés
          </Button>
        </Link>
        <Link to="/sucres">
          <Button className="text-base font-medium text-white bg-black hover:bg-gray-800"> {/* Changé pour fond noir */}
            Sucrés
          </Button>
        </Link>
        <Link to="/creations">
          <Button className="text-base font-medium text-white bg-black hover:bg-gray-800"> {/* Changé pour fond noir */}
            Créations
          </Button>
        </Link>
      </div>
    </nav>
  );
};

export default SecondaryNavbar;