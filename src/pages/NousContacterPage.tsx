import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const NousContacterPage: React.FC = () => {
  return (
    <div className="relative z-10 w-full max-w-4xl container mx-auto flex justify-center items-center py-12">
      <Card className="flex flex-col bg-transparent shadow-none border border-white h-full w-full max-w-2xl">
        <CardHeader className="p-6 text-center">
          <CardTitle className="text-4xl md:text-5xl font-extrabold text-black mb-4 text-shadow-cannelé">
            06.76.79.55.10
          </CardTitle>
        </CardHeader>
        <CardContent className="flex-grow flex flex-col justify-center p-6 text-center">
          <p className="mb-6 text-xl md:text-2xl text-black text-shadow-cannelé leading-relaxed">
            Commandez par Téléphone / SMS / Mail
            <br />
            Du lundi au samedi de 10h à 18H
            <br />
            Indiquez nom, quantité et délai.
            <br />
            Commandes à retirer au Haillan et sur vos marchés.
            <br /><br />
            lecanneledepaul@hotmail.com
            <br /><br />
            Sur les marchés:
            <br />
            Vendredi ==&gt; Saint-Aubin de Médoc
            <br />
            Samedi ==&gt; Saint-Médard-en-Jalles
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default NousContacterPage;