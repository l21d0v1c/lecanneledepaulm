import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const LaMaisonPage: React.FC = () => {
  return (
    <div className="relative z-10 w-full max-w-4xl container mx-auto flex justify-center items-center py-12">
      <Card className="flex flex-col bg-transparent shadow-none border border-white h-full w-full max-w-2xl">
        <CardHeader className="p-6 text-center">
          <CardTitle className="text-4xl md:text-5xl font-extrabold text-white mb-4 text-shadow-cannelé">
            La Maison
          </CardTitle>
        </CardHeader>
        <CardContent className="flex-grow flex flex-col justify-center p-6 text-center">
          <p className="mb-6 text-lg md:text-xl text-white text-shadow-cannelé leading-relaxed">
            Bienvenue chez Le Cannelé de Paul M, où la passion pour la pâtisserie rencontre la tradition bordelaise.
            Nous nous engageons à vous offrir des cannelés artisanaux d'une qualité exceptionnelle, préparés avec les meilleurs ingrédients.
            Chaque cannelé est une invitation à un voyage gustatif, un équilibre parfait entre un extérieur caramélisé et un intérieur moelleux et parfumé.
            Découvrez notre savoir-faire et laissez-vous séduire par l'authenticité de nos créations.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default LaMaisonPage;