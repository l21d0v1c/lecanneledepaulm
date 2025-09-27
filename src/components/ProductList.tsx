import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils"; // Import cn

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

const products: Product[] = [
  {
    id: "1",
    name: "Cannelé Traditionnel",
    description: "Le classique, croustillant à l'extérieur, moelleux à l'intérieur.",
    price: 2.50,
    imageUrl: "/placeholder.svg", // Using a placeholder for now
  },
  {
    id: "2",
    name: "Cannelé Chocolat",
    description: "Une touche de cacao pour les amateurs de chocolat.",
    price: 2.80,
    imageUrl: "/placeholder.svg",
  },
  {
    id: "3",
    name: "Cannelé Vanille-Rhum",
    description: "Une saveur intense de vanille et un soupçon de rhum.",
    price: 2.70,
    imageUrl: "/placeholder.svg",
  },
];

interface ProductListProps {
  currentTextColor?: 'light' | 'dark';
}

const ProductList: React.FC<ProductListProps> = ({ currentTextColor }) => {
  const textColorClass = currentTextColor === 'dark' ? 'text-black' : 'text-white';
  const borderColorClass = currentTextColor === 'dark' ? 'border-gray-300' : 'border-black';

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-4xl">
      {products.map((product) => (
        <Card key={product.id} className={cn("flex flex-col bg-transparent shadow-none border", borderColorClass)}>
          <CardHeader>
            <CardTitle className={cn("text-xl font-semibold", textColorClass)}>
              {product.name}
            </CardTitle>
          </CardHeader>
          <CardContent className="flex-grow flex flex-col justify-between">
            <p className={cn("mb-4", textColorClass)}>{product.description}</p>
            <div className="flex items-center justify-between mt-auto">
              <span className={cn("text-2xl font-bold", textColorClass)}>{product.price.toFixed(2)}€</span>
              <Button>Ajouter au panier</Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default ProductList;