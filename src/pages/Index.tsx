import { MadeWithDyad } from "@/components/made-with-dyad";
import ProductList from "@/components/ProductList";

const Index = () => {
  return (
    <div className="flex flex-col items-center bg-gray-50 dark:bg-gray-900 p-4 rounded-lg shadow-lg">
      <div className="container mx-auto px-4"> {/* Ajout d'un conteneur pour le contenu principal */}
        <div className="text-center mb-8 mt-4">
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
            Découvrez nos Cannelés Artisanaux
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Chaque bouchée, un voyage gustatif.
          </p>
        </div>
        <ProductList />
      </div>
      <MadeWithDyad />
    </div>
  );
};

export default Index;