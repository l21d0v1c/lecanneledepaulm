import ProductList from "@/components/ProductList";
import { cn } from "@/lib/utils"; // Import cn

interface IndexProps {
  currentTextColor?: 'light' | 'dark'; // Rendu optionnel car passé via cloneElement
}

const Index: React.FC<IndexProps> = ({ currentTextColor }) => {
  const textColorClass = currentTextColor === 'dark' ? 'text-black' : 'text-white';

  return (
    <div className="relative w-full flex flex-col items-center justify-center">
      <div className="relative z-10 w-full max-w-4xl p-4 rounded-lg container mx-auto py-8">
        <div className="text-center mb-8 mt-4">
          <h1 className={cn("text-4xl font-extrabold mb-4", textColorClass)}>
            Découvrez nos Cannelés Artisanaux
          </h1>
          <p className={cn("text-lg", textColorClass)}>
            Chaque bouchée, un voyage gustatif.
          </p>
        </div>
        <ProductList currentTextColor={currentTextColor} /> {/* Passe à ProductList */}
      </div>
    </div>
  );
};

export default Index;