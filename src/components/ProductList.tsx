import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

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
    imageUrl: "/placeholder.svg",
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
  {
    id: "4",
    name: "Cannelé Caramel Beurre Salé",
    description: "Une douceur fondante avec une pointe de sel de Guérande.",
    price: 3.00,
    imageUrl: "/placeholder.svg",
  },
];

const ProductList: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 w-full max-w-7xl">
      {products.map((product) => (
        <Card key={product.id} className="flex flex-col bg-transparent shadow-none border border-white min-h-0">
          <CardHeader className="p-3 md:p-4">
            <CardTitle className="text-lg md:text-xl font-semibold">
              <span className="text-shadow-cannelé text-foreground">
                {product.name}
              </span>
            </CardTitle>
          </CardHeader>
          <CardContent className="flex-grow flex flex-col justify-between p-3 md:p-4">
            <p className="mb-3 md:mb-4 text-sm md:text-base text-shadow-cannelé text-foreground">
              {product.description}
            </p>
            <div className="flex items-center justify-between mt-2 md:mt-3">
              <span className="text-xl md:text-2xl font-bold text-shadow-cannelé text-foreground">
                {product.price.toFixed(2)}€
              </span>
              <Button className="bg-black text-white border-2 border-[#f8ac54] hover:bg-gray-800 rounded-full text-sm md:text-base py-2 px-4 md:px-5">
                Ajouter
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default ProductList;