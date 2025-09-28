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
    name: "Mini",
    description: "Un sachet de dix.",
    price: 5.00,
    imageUrl: "/placeholder.svg",
    category: "classique"
  },
  {
    id: "2",
    name: "Salés",
    description: "Un sachet de dix.",
    price: 5.00,
    imageUrl: "/placeholder.svg",
    category: "classique"
  },
  {
    id: "3",
    name: "Pudding de cannelé",
    description: "Le petit",
    price: 3.00,
    imageUrl: "/placeholder.svg",
    category: "classique"
  },
  {
    id: "4",
    name: "Gros",
    description: "Une boîte de neuf.",
    price: 12.00,
    imageUrl: "/placeholder.svg",
    category: "classique"
  },
  // Nouveaux produits classiques
  {
    id: "14",
    name: "Cannelé Café",
    description: "L'arôme riche du café pour un réveil gourmand.",
    price: 2.90,
    imageUrl: "/placeholder.svg",
    category: "classique"
  },
  {
    id: "15",
    name: "Cannelé Pistache",
    description: "La délicatesse de la pistache dans un cannelé.",
    price: 3.10,
    imageUrl: "/placeholder.svg",
    category: "classique"
  },
  {
    id: "16",
    name: "Cannelé Citron",
    description: "Une touche acidulée et rafraîchissante.",
    price: 2.70,
    imageUrl: "/placeholder.svg",
    category: "classique"
  },
  {
    id: "17",
    name: "Cannelé Noisette",
    description: "Le goût authentique de la noisette torréfiée.",
    price: 2.90,
    imageUrl: "/placeholder.svg",
    category: "classique"
  },
  {
    id: "18",
    name: "Cannelé Fleur d'Oranger",
    description: "Une saveur douce et parfumée de fleur d'oranger.",
    price: 2.80,
    imageUrl: "/placeholder.svg",
    category: "classique"
  },
  {
    id: "19",
    name: "Cannelé Spéculoos",
    description: "Les épices du spéculoos pour une saveur hivernale.",
    price: 3.00,
    imageUrl: "/placeholder.svg",
    category: "classique"
  },
  {
    id: "20",
    name: "Cannelé Coco",
    description: "L'exotisme de la noix de coco râpée.",
    price: 2.90,
    imageUrl: "/placeholder.svg",
    category: "classique"
  },
  {
    id: "21",
    name: "Cannelé Miel & Amande",
    description: "La douceur du miel et le croquant de l'amande.",
    price: 3.10,
    imageUrl: "/placeholder.svg",
    category: "classique"
  },
  {
    id: "22",
    name: "Cannelé Lavande",
    description: "Une note florale subtile et originale.",
    price: 3.20,
    imageUrl: "/placeholder.svg",
    category: "classique"
  },
  {
    id: "23",
    name: "Cannelé Gingembre",
    description: "Une saveur piquante et réconfortante.",
    price: 3.00,
    imageUrl: "/placeholder.svg",
    category: "classique"
  },
  {
    id: "24",
    name: "Cannelé Praliné",
    description: "Le goût intense et gourmand du praliné.",
    price: 3.20,
    imageUrl: "/placeholder.svg",
    category: "classique"
  },
  // Produits salés
  {
    id: "5",
    name: "Mini",
    description: "Un sachet de dix.",
    price: 5.00,
    imageUrl: "/placeholder.svg",
    category: "sale"
  },
  {
    id: "6",
    name: "Mini",
    description: "Une boîte de vingt-quatre.",
    price: 10.00,
    imageUrl: "/placeholder.svg",
    category: "sale"
  },
  {
    id: "7",
    name: "Mini",
    description: "Deux boîte de vingt-quatre.",
    price: 18.00,
    imageUrl: "/placeholder.svg",
    category: "sale"
  },
  // Produits sucrés
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
    id: "10",
    name: "mini",
    description: "Une boîte de vingt-quatre.",
    price: 10.00,
    imageUrl: "/placeholder.svg",
    category: "sucre"
  },
  // Nouveaux produits sucrés
  {
    id: "25",
    name: "Gros",
    description: "Deux boîtes de neuf.",
    price: 22.00,
    imageUrl: "/placeholder.svg",
    category: "sucre"
  },
  {
    id: "26",
    name: "Mini",
    description: "deux boîtes de vingt-quatre.",
    price: 3.10,
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