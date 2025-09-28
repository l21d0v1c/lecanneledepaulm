import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const SecondaryNavbar: React.FC = () => {
  return (
    <nav className="w-full bg-white shadow-sm z-30 relative"> {/* Ajout d'un fond blanc et d'une ombre */}
      <div className="container flex h-16 items-center justify-center space-x-8 px-4">
        <Link to="/boutique">
          <Button variant="ghost" className="text-base font-medium text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100">
            Boutique
          </Button>
        </Link>
        <Link to="/notre-histoire">
          <Button variant="ghost" className="text-base font-medium text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100">
            Notre Histoire
          </Button>
        </Link>
        <Link to="/contact">
          <Button variant="ghost" className="text-base font-medium text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100">
            Contact
          </Button>
        </Link>
      </div>
    </nav>
  );
};

export default SecondaryNavbar;