import ProductList from "@/components/ProductList";

const Index = () => {
  return (
    <div className="relative w-full flex flex-col items-center justify-center">
      {/* Section du titre et de la description - reste transparente sur le carrousel */}
      <div className="relative z-10 w-full max-w-4xl p-4 container mx-auto py-8 pt-[12rem]">
        <div className="text-center mb-8 mt-4">
          <h1 className="text-4xl font-extrabold text-white mb-4">
            Découvrez nos Cannelés Artisanaux
          </h1>
          <p className="text-lg text-white">
            Chaque bouchée, un voyage gustatif.
          </p>
        </div>
      </div>

      {/* Nouveau conteneur pour ProductList avec un fond opaque */}
      <div className="relative z-10 w-full bg-background py-8 px-4"> {/* Ajout de bg-background ici */}
        <div className="container mx-auto max-w-4xl">
          <ProductList />
        </div>
      </div>
    </div>
  );
};

export default Index;