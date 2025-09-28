import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const SecondaryNavbar: React.FC = () => {
  return (
    <nav className="sticky top-32 w-full z-30 border-b border-white bg-transparent"> {/* Changé de 'relative' à 'sticky top-32' et ajouté 'bg-transparent' */}
      <div className="container flex h-16 items-center justify-center space-x-8 px-4">
        <Link to="/sales">
          <Button variant="ghost" className="text-base font-medium text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100">
            Salés
          </Button>
        </Link>
        <Link to="/sucres">
          <Button variant="ghost" className="text-base font-medium text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100">
            Sucrés
          </Button>
        </Link>
        <Link to="/creations">
          <Button variant="ghost" className="text-base font-medium text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100">
            Créations
          </Button>
        </Link>
      </div>
    </nav>
  );
};

export default SecondaryNavbar;