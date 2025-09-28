import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  category: "classique" | "sale" | "sucre" | "creation";
}

interface ProductListProps {
  category: "classique" | "sale" | "sucre" | "creation";
}

const products: Product[] = [
  // Nouveaux produits salés (IDs 1, 2, 3)
  {
    id: "1",
    name: "Cannelé Salé Mini (Sachet de 10)",
    description: "Un sachet de 10 cannelés salés.",
    price: 5.00,
    imageUrl: "/placeholder.svg",
    category: "sale"
  },
  {
    id: "2",
    name: "Cannelé Salé (Boîte de 24)",
    description: "Une boîte de 24 cannelés salés.",
    price: 10.00,
    imageUrl: "/placeholder.svg",
    category: "sale"
  },
  {
    id: "3",
    name: "Cannelé Salé (Deux Boîtes de 24)",
    description: "Deux boîtes de 24 cannelés salés.",
    price: 18.00,
    imageUrl: "/placeholder.svg",
    category: "sale"
  },
  // Produits sucrés (actuels)
  {
    id: "8",
    name: "Mini",
    description: "Un sachet de dix.",
    price: 5.00,
    imageUrl: "/placeholder.svg",
    category: "sucre"
  },
  {
    id: "9",
    name: "Gros",
    description: "Une boîte de neuf.",
    price: 12.00,
    imageUrl: "/placeholder.svg",
    category: "sucre"
  },
  {
    id: "27", 
    name: "Pudding de cannelé",
    description: "Un dessert gourmand à base de cannelés recyclés.",
    price: 4.00,
    imageUrl: "/placeholder.svg",
    category: "sucre"
  },
  {
    id: "28", 
    name: "Pâtisseries",
    description: "Assortiment de petites pâtisseries fines.",
    price: 15.00,
    imageUrl: "/placeholder.svg",
    category: "sucre"
  },
  {
    id: "29", 
    name: "Pain d'épices",
    description: "Un pain d'épices moelleux et parfumé.",
    price: 8.00,
    imageUrl: "/placeholder.svg",
    category: "sucre"
  },
];

const ProductList: React.FC<ProductListProps> = ({ category }) => {
  const filteredProducts = products.filter(product => product.category === category);

  return (
    <div className="w-full px-4">
      <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6 md:gap-8 w-full max-w-7xl mx-auto">
        {filteredProducts.map((product) => (
          <Card key={product.id} className="flex flex-col bg-transparent shadow-none border border-white h-full min-w-0">
            <CardHeader className="p-4 md:p-6">
              <CardTitle className="text-xl md:text-2xl font-semibold">
                <span className="text-shadow-cannelé text-foreground">
                  {product.name}
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-grow flex flex-col justify-between p-4 md:p-6">
              <p className="mb-4 md:mb-6 text-base md:text-lg text-shadow-cannelé text-foreground break-words">
                {product.description}
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 min-w-0">
                <span className="text-2xl md:text-3xl font-bold text-shadow-cannelé text-foreground flex-shrink-0">
                  {product.price.toFixed(2)}€
                </span>
                <Button
                  className="bg-black text-white border-2 border-[#f8ac54] hover:bg-gray-800 rounded-full text-sm py-2 px-4 whitespace-nowrap flex-shrink-0"
                >
                  Ajouter
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ProductList;