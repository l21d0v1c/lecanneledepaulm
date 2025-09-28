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

const ProductList: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-4xl">
      {products.map((product) => (
        <Card key={product.id} className="flex flex-col bg-transparent shadow-none border border-black">
          <CardHeader>
            <CardTitle className="text-xl font-semibold">
              {product.name}
            </CardTitle>
          </CardHeader>
          <CardContent className="flex-grow flex flex-col justify-between">
            <p className="mb-4">
              {product.description}
            </p>
            <div className="flex items-center justify-between mt-auto">
              <span className="text-2xl font-bold">
                {product.price.toFixed(2)}€
              </span>
              <Button className="bg-black text-white border-4 border-[#f8ac54] hover:bg-gray-800">Ajouter au panier</Button> {/* Styles ajoutés ici */}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default ProductList;