import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const SecondaryNavbar: React.FC = () => {
  return (
    <nav className="sticky top-32 w-full z-40 border-b border-white bg-transparent"> {/* Z-index augmenté à 40 */}
      <div className="container flex h-16 items-center justify-center space-x-8 px-4">
        <Link to="/sales">
          <Button variant="ghost" className="text-base font-medium text-white hover:text-gray-200"> {/* White text, subtle hover */}
            Salés
          </Button>
        </Link>
        <Link to="/sucres">
          <Button variant="ghost" className="text-base font-medium text-white hover:text-gray-200"> {/* White text, subtle hover */}
            Sucrés
          </Button>
        </Link>
        <Link to="/creations">
          <Button variant="ghost" className="text-base font-medium text-white hover:text-gray-200"> {/* White text, subtle hover */}
            Créations
          </Button>
        </Link>
      </div>
    </nav>
  );
};

export default SecondaryNavbar;