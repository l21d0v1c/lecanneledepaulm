import ProductList from "@/components/ProductList";

const Index = () => {
  return (
    <div className="relative w-full flex flex-col items-center justify-center">
      {/* Le conteneur de contenu aura un fond semi-transparent pour laisser apparaître le carrousel */}
      <div className="relative z-10 w-full max-w-4xl p-4 rounded-lg shadow-lg bg-white/80 dark:bg-gray-800/80 container mx-auto py-8">
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
    </div>
  );
};

export default Index;