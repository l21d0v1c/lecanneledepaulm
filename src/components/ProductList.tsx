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
  // Produits classiques (actuels)
  {
    id: "1",
    name: "Cannelé Traditionnel",
    description: "Le classique, croustillant à l'extérieur, moelleux à l'intérieur.",
    price: 2.50,
    imageUrl: "/placeholder.svg",
    category: "classique"
  },
  {
    id: "2",
    name: "Cannelé Chocolat",
    description: "Une touche de cacao pour les amateurs de chocolat.",
    price: 2.80,
    imageUrl: "/placeholder.svg",
    category: "classique"
  },
  {
    id: "3",
    name: "Cannelé Vanille-Rhum",
    description: "Une saveur intense de vanille et un soupçon de rhum.",
    price: 2.70,
    imageUrl: "/placeholder.svg",
    category: "classique"
  },
  {
    id: "4",
    name: "Cannelé Caramel Beurre Salé",
    description: "Une douceur fondante avec une pointe de sel de Guérande.",
    price: 3.00,
    imageUrl: "/placeholder.svg",
    category: "classique"
  },
  // Produits salés
  {
    id: "5",
    name: "Cannelé Fromage & Herbes",
    description: "Un mélange subtil de fromage et d'herbes fraîches.",
    price: 3.20,
    imageUrl: "/placeholder.svg",
    category: "sale"
  },
  {
    id: "6",
    name: "Cannelé Olive & Romarin",
    description: "Le parfum méditerranéen de l'olive et du romarin.",
    price: 3.10,
    imageUrl: "/placeholder.svg",
    category: "sale"
  },
  {
    id: "7",
    name: "Cannelé Tomate & Basilic",
    description: "La fraîcheur de la tomate et du basilic.",
    price: 3.00,
    imageUrl: "/placeholder.svg",
    category: "sale"
  },
  // Produits sucrés
  {
    id: "8",
    name: "Les ",
    description: "Une explosion de framboise acidulée.",
    price: 3.30,
    imageUrl: "/placeholder.svg",
    category: "sucre"
  },
  {
    id: "9",
    name: "Cannelé Pistache",
    description: "La douceur crémeuse de la pistache.",
    price: 3.40,
    imageUrl: "/placeholder.svg",
    category: "sucre"
  },
  {
    id: "10",
    name: "Cannelé Noix de Coco",
    description: "L'exotisme de la noix de coco.",
    price: 3.20,
    imageUrl: "/placeholder.svg",
    category: "sucre"
  },
  // Créations spéciales
  {
    id: "11",
    name: "Cannelé Or & Safran",
    description: "Une création luxueuse au safran et feuille d'or.",
    price: 5.00,
    imageUrl: "/placeholder.svg",
    category: "creation"
  },
  {
    id: "12",
    name: "Cannelé Champagne",
    description: "La sophistication du champagne.",
    price: 4.50,
    imageUrl: "/placeholder.svg",
    category: "creation"
  },
  {
    id: "13",
    name: "Cannelé Truffe",
    description: "L'arôme rare et précieux de la truffe.",
    price: 6.00,
    imageUrl: "/placeholder.svg",
    category: "creation"
  }
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
                <Button className="bg-black text-white border-2 border-[#f8ac54] hover:bg-gray-800 rounded-full text-sm py-2 px-4 whitespace-nowrap flex-shrink-0">
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