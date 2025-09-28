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
  // Produits classiques (mis à jour selon votre demande)
  {
    id: "cl1",
    name: "Mini",
    description: "Un sachet de 10.", // Identique au premier produit sucré
    price: 5.00,
    imageUrl: "/placeholder.svg",
    category: "classique"
  },
  {
    id: "cl2",
    name: "Gros",
    description: "Une boîte de neuf.", // Identique au deuxième produit sucré
    price: 12.00,
    imageUrl: "/placeholder.svg",
    category: "classique"
  },
  {
    id: "cl3",
    name: "Mini",
    description: "Un sachet de 10.", // Identique au premier produit salé
    price: 5.00,
    imageUrl: "/placeholder.svg",
    category: "classique"
  },
  {
    id: "cl4",
    name: "Pudding de cannelés",
    description: "Petit", // Identique au premier produit création
    price: 3.00,
    imageUrl: "/placeholder.svg",
    category: "classique"
  },
  // Produits salés (actuels)
  {
    id: "1",
    name: "Mini",
    description: "Un sachet de 10.",
    price: 5.00,
    imageUrl: "/placeholder.svg",
    category: "sale"
  },
  {
    id: "2",
    name: "Mini",
    description: "Une boîte de 24.",
    price: 10.00,
    imageUrl: "/placeholder.svg",
    category: "sale"
  },
  {
    id: "3",
    name: "Mini",
    description: "Deux boîtes de 24.",
    price: 18.00,
    imageUrl: "/placeholder.svg",
    category: "sale"
  },
  // Produits sucrés (actuels)
  {
    id: "4",
    name: "Mini",
    description: "Un sachet de 10.",
    price: 5.00,
    imageUrl: "/placeholder.svg",
    category: "sucre"
  },
  {
    id: "5",
    name: "Gros",
    description: "Une boîte de neuf.",
    price: 12.00,
    imageUrl: "/placeholder.svg",
    category: "sucre"
  },
  {
    id: "6",
    name: "Mini",
    description: "Une boîte de 24.",
    price: 10.00,
    imageUrl: "/placeholder.svg",
    category: "sucre"
  },
  {
    id: "7",
    name: "Gros",
    description: "Deux boîtes de neuf.",
    price: 22.00,
    imageUrl: "/placeholder.svg",
    category: "sucre"
  },
  {
    id: "8",
    name: "Mini",
    description: "Deux boîtes de 24.",
    price: 18.00,
    imageUrl: "/placeholder.svg",
    category: "sucre"
  },
  // Produits créations corrigés
  {
    id: "9",
    name: "Pudding de cannelés",
    description: "Petit",
    price: 3.00,
    imageUrl: "/placeholder.svg",
    category: "creation"
  },
  {
    id: "10",
    name: "Pudding de cannelés",
    description: "Moyen",
    price: 5.00,
    imageUrl: "/placeholder.svg",
    category: "creation"
  },
  {
    id: "11",
    name: "Pudding de cannelés",
    description: "Grand",
    price: 8.00,
    imageUrl: "/placeholder.svg",
    category: "creation"
  },
  {
    id: "12",
    name: "Pain d'épices",
    description: "Savoureux",
    price: 8.00,
    imageUrl: "/placeholder.svg",
    category: "creation"
  },
  {
    id: "13",
    name: "Pâtisseries",
    description: "1x Banoffee ou Entremet chocolat ou Tarte Mojito ou Tarte Citron",
    price: 3.50,
    imageUrl: "/placeholder.svg",
    category: "creation"
  },
  {
    id: "14",
    name: "Pâtisseries",
    description: "6x Banoffee ou Entremet chocolat ou Tarte Mojito ou Tarte Citron",
    price: 16.00,
    imageUrl: "/placeholder.svg",
    category: "creation"
  },
  {
    id: "15",
    name: "Pâtisseries",
    description: "8x Banoffee ou Entremet chocolat ou Tarte Mojito ou Tarte Citron",
    price: 21.00,
    imageUrl: "/placeholder.svg",
    category: "creation"
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