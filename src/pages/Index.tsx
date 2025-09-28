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
      <div className="relative z-10 w-full max-w-4xl container mx-auto pt-[100px] sm:pt-[105px]">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-extrabold text-white mb-4 text-shadow-cannelé">
            {currentCategory === "classique" && (
              <>
                Caramélisé et bien croustillant à l'extérieur.
                <br />
                Moelleux à cœur.
              </>
            )}
            {currentCategory === "sale" && "Dégustez chaque semaine trois parfums."}
            {currentCategory === "sucre" && (
              <>
                Caramélisé et bien croustillant à l'extérieur.
                <br />
                Moelleux à cœur.
              </>
            )}
            {currentCategory === "creation" && "Je vous propose régulièrement des petites pâtisseries."}
          </h1>
          <p className="text-lg text-white text-shadow-cannelé">
            {currentCategory === "classique" && "Goût équilibré entre vanille et rhum ambré."}
            {currentCategory === "sale" && "Chèvre, miel, noix / Colin, citron, ciboulette / Chorizo, piment d'Espelette / Tomates confites, basilic / Saumon, citron, aneth / Chèvre, épinard / Poulet, estragon / Jambon, emmental / Carottes, cumin / ..."}
            {currentCategory === "sucre" && "Goût équilibré entre vanille et rhum ambré."}
            {currentCategory === "creation" && ""}
          </p>
        </div>
        <ProductList category={currentCategory} />
      </div>
    </div>
  );
};

export default Index;