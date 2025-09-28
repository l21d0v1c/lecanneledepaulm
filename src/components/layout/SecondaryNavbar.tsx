import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const SecondaryNavbar: React.FC = () => {
  return (
    <nav className="sticky top-32 w-full z-30 border-b border-border bg-background"> {/* Revert: Changed bg-transparent to bg-background and border-white to border-border */}
      <div className="container flex h-16 items-center justify-center space-x-8 px-4">
        <Link to="/sales">
          <Button variant="ghost" className="text-base font-medium text-muted-foreground hover:text-foreground"> {/* Revert: Adjusted text and hover colors */}
            Salés
          </Button>
        </Link>
        <Link to="/sucres">
          <Button variant="ghost" className="text-base font-medium text-muted-foreground hover:text-foreground"> {/* Revert: Adjusted text and hover colors */}
            Sucrés
          </Button>
        </Link>
        <Link to="/creations">
          <Button variant="ghost" className="text-base font-medium text-muted-foreground hover:text-foreground"> {/* Revert: Adjusted text and hover colors */}
            Créations
          </Button>
        </Link>
      </div>
    </nav>
  );
};

export default SecondaryNavbar;