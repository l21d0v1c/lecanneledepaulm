import React from 'react';
import { useCart } from '@/context/CartContext';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MinusIcon, PlusIcon, Trash2Icon } from 'lucide-react';
import { Link } from 'react-router-dom';

const CartPage: React.FC = () => {
  const { items, total, removeItem, updateQuantity, clearCart } = useCart();

  return (
    <div className="relative z-10 w-full max-w-4xl container mx-auto py-8 px-4 min-h-[calc(100vh-200px)]"> {/* Ajusté min-h pour tenir compte du header/navbar */}
      <h1 className="text-4xl font-extrabold text-white mb-8 text-center">Votre Panier</h1>

      {items.length === 0 ? (
        <div className="text-center text-white text-xl">
          <p className="mb-4">Votre panier est vide.</p>
          <Link to="/">
            <Button className="bg-black text-white border-2 border-[#f8ac54] hover:bg-gray-800 rounded-full text-base py-2 px-6">
              Retourner à la boutique
            </Button>
          </Link>
        </div>
      ) : (
        <div className="space-y-6">
          {items.map((item) => (
            <Card key={item.id} className="flex flex-col sm:flex-row items-center bg-transparent shadow-none border border-white p-4">
              <img src={item.imageUrl} alt={item.name} className="w-24 h-24 object-cover rounded-md mr-4 mb-4 sm:mb-0" />
              <div className="flex-grow text-white text-center sm:text-left">
                <CardTitle className="text-xl font-semibold mb-1">{item.name}</CardTitle>
                <p className="text-lg mb-2">{item.description}</p>
                <p className="text-xl font-bold">{item.price.toFixed(2)}€</p>
              </div>
              <div className="flex items-center space-x-2 mt-4 sm:mt-0">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  className="text-white hover:bg-white/20"
                >
                  <MinusIcon className="h-5 w-5" />
                </Button>
                <span className="text-white text-lg font-semibold">{item.quantity}</span>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className="text-white hover:bg-white/20"
                >
                  <PlusIcon className="h-5 w-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => removeItem(item.id)}
                  className="text-red-500 hover:bg-red-500/20"
                >
                  <Trash2Icon className="h-5 w-5" />
                </Button>
              </div>
            </Card>
          ))}

          <div className="flex flex-col sm:flex-row justify-between items-center border-t border-white pt-6 mt-6">
            <h2 className="text-3xl font-bold text-white mb-4 sm:mb-0">Total: {total.toFixed(2)}€</h2>
            <div className="flex space-x-4">
              <Button
                onClick={clearCart}
                className="bg-red-600 text-white border-2 border-red-600 hover:bg-red-700 rounded-full text-base py-2 px-6"
              >
                Vider le panier
              </Button>
              <Button className="bg-black text-white border-2 border-[#f8ac54] hover:bg-gray-800 rounded-full text-base py-2 px-6">
                Commander
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;