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
            Pour toute question, commande spéciale ou simplement pour discuter de nos délicieux cannelés, n'hésitez pas à nous contacter !
            <br /><br />
            Vous pouvez nous joindre par téléphone au : **06.76.79.55.10**
            <br />
            Ou par email à : **contact@lecannaledepaulm.fr**
            <br /><br />
            Nous sommes impatients de vous entendre !
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default NousContacterPage;