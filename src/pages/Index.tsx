import ProductList from "@/components/ProductList";

const Index = () => {
  return (
    <div className="relative w-full flex flex-col items-center justify-center">
      {/* Section du titre et de la description - reste transparente sur le carrousel */}
      <div className="relative z-10 w-full max-w-4xl p-4 container mx-auto pt-8 pb-8"> {/* Changé py-8 en pt-8 pb-8 */}
        <div className="text-center mb-8"> {/* Retiré mt-4 */}
          <h1 className="text-4xl font-extrabold text-white mb-4">
            Découvrez nos Cannelés Artisanaux
          </h1>
          <p className="text-lg text-white">
            Chaque bouchée, un voyage gustatif.
          </p>
        </div>
        {/* ProductList est maintenant directement ici, sans conteneur opaque */}
        <ProductList />
      </div>
    </div>
  );
};

export default Index;