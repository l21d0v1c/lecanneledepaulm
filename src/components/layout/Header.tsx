import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-16 items-center justify-between py-4">
        <Link to="/" className="text-2xl font-bold text-primary hover:text-primary/90 transition-colors">
          Le Cannelé de Paul M
        </Link>
        <nav>
          <Button variant="ghost" size="icon" aria-label="Panier">
            <ShoppingCart className="h-6 w-6" />
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;