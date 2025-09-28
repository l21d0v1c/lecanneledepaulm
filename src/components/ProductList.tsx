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
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-4 gap-6 md:gap-8 w-full max-w-7xl mx-auto">
      {products.map((product) => (
        <Card key={product.id} className="flex flex-col bg-transparent shadow-none border border-white h-full min-w-[280px] sm:min-w-[300px] md:min-w-[320px]">
          <CardHeader className="p-4 md:p-6">
            <CardTitle className="text-xl md:text-2xl font-semibold">
              <span className="text-shadow-cannelé text-foreground">
                {product.name}
              </span>
            </CardTitle>
          </CardHeader>
          <CardContent className="flex-grow flex flex-col justify-between p-4 md:p-6">
            <p className="mb-4 md:mb-6 text-base md:text-lg text-shadow-cannelé text-foreground">
              {product.description}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 mt-4">
              <span className="text-2xl md:text-3xl font-bold text-shadow-cannelé text-foreground">
                {product.price.toFixed(2)}€
              </span>
              <Button className="bg-black text-white border-2 border-[#f8ac54] hover:bg-gray-800 rounded-full text-sm py-2 px-4 whitespace-nowrap">
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