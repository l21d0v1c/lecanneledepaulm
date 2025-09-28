import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const LaMaisonPage: React.FC = () => {
  return (
    <div className="relative z-10 w-full max-w-4xl container mx-auto flex justify-center items-center py-12">
      <Card className="flex flex-col bg-transparent shadow-none border border-white h-full w-full max-w-2xl">
        <CardHeader className="p-6 text-center">
          <CardTitle className="text-4xl md:text-5xl font-extrabold text-black mb-4 text-shadow-cannelé">
            La Maison
          </CardTitle>
        </CardHeader>
        <CardContent className="flex-grow flex flex-col justify-center p-6 text-center">
          <p className="mb-6 text-lg md:text-xl text-black text-shadow-cannelé leading-relaxed">
            Bonjour ! Moi c’est Paul.
            Cuisinier pâtissier de formation, j'ai exercé depuis plus de 10 ans,
            en restaurants traditionnels, salon de thé, collectivités et traiteurs.
            J’ai quitté mon travail pour me lancer exclusivement dans cette nouvelle activité.
            J’y retrouve ma passion pour la pâtisserie et avant tout ce produit traditionnel Bordelais.
            Consommateur depuis mon enfance je souhaite faire partager le vrai goût du véritable Cannelé.
            Je viens à votre rencontre toutes les semaines sur vos marchés, pour vous les faire découvrir.
            Je peux également vous livrer, n'hésitez pas à me contacter!
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default LaMaisonPage;