import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import ProductList from "@/components/ProductList";

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  category: "classique" | "sale" | "sucre" | "creation";
}

const Index = () => {
  const location = useLocation();
  const [currentCategory, setCurrentCategory] = useState<"classique" | "sale" | "sucre" | "creation">("classique");

  useEffect(() => {
    // Déterminer la catégorie basée sur l'URL
    const path = location.pathname;
    if (path === "/sales") {
      setCurrentCategory("sale");
    } else if (path === "/sucres") {
      setCurrentCategory("sucre");
    } else if (path === "/creations") {
      setCurrentCategory("creation");
    } else {
      setCurrentCategory("classique");
    }
  }, [location.pathname]);

  return (
    <div className="relative w-full flex flex-col items-center justify-center">
      {/* Section du titre et de la description */}
      <div className="relative z-10 w-full max-w-4xl container mx-auto pt-[270px] sm:pt-[105px]"> {/* Rétablit le padding-top ici */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-extrabold text-white mb-4">
            {currentCategory === "classique" && "Découvrez nos Cannelés Artisanaux"}
            {currentCategory === "sale" && "Nos Cannelés Salés"}
            {currentCategory === "sucre" && "Nos Cannelés Sucrés"}
            {currentCategory === "creation" && "Nos Créations Spéciales"}
          </h1>
          <p className="text-lg text-white">
            {currentCategory === "classique" && "Chaque bouchée, un voyage gustatif."}
            {currentCategory === "sale" && "Des saveurs salées innovantes."}
            {currentCategory === "sucre" && "La douceur à son paroxysme."}
            {currentCategory === "creation" && "L'innovation au service du goût."}
          </p>
        </div>
        <ProductList category={currentCategory} />
      </div>
    </div>
  );
};

export default Index;