import React from 'react';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const CartPage: React.FC = () => {
  const { cartItems, updateQuantity, removeFromCart, cartTotal, clearCart } = useCart();

  return (
    <div className="relative z-10 w-full max-w-4xl container mx-auto py-8 px-4">
      <h1 className="text-4xl font-extrabold text-black mb-8 text-center">Votre Panier</h1>

      {cartItems.length === 0 ? (
        <Card className="bg-transparent shadow-none border border-white text-black text-center p-8">
          <CardTitle className="text-2xl mb-4">Votre panier est vide.</CardTitle>
          <p className="mb-6">Commencez à explorer nos délicieux cannelés !</p>
          <Link to="/">
            <Button className="bg-black text-white border-2 border-[#f8ac54] hover:bg-gray-800 rounded-full text-base py-2 px-6">
              Retour à l'accueil
            </Button>
          </Link>
        </Card>
      ) : (
        <div className="space-y-6">
          {cartItems.map((item) => (
            <Card key={item.id} className="flex flex-col sm:flex-row items-center bg-transparent shadow-none border border-white p-4 md:p-6 text-black">
              <div className="flex-grow text-center sm:text-left">
                <CardTitle className="text-xl font-semibold">
                  <span className="text-shadow-cannelé text-black">{item.name}</span>
                </CardTitle>
                <p className="text-sm text-shadow-cannelé text-black">{item.description}</p>
                <p className="text-lg font-bold mt-2 text-shadow-cannelé text-black">{(item.price * item.quantity).toFixed(2)}€</p>
              </div>
              <div className="flex items-center space-x-2 mt-4 sm:mt-0">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  className="bg-black text-white border-2 border-[#f8ac54] hover:bg-gray-800 rounded-full"
                >
                  -
                </Button>
                <Input
                  type="number"
                  value={item.quantity}
                  onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                  className="w-16 text-center bg-transparent border-white text-black"
                  min="1"
                />
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className="bg-black text-white border-2 border-[#f8ac54] hover:bg-gray-800 rounded-full"
                >
                  +
                </Button>
                <Button
                  variant="destructive"
                  size="icon"
                  onClick={() => removeFromCart(item.id)}
                  className="bg-red-600 hover:bg-red-700 text-white rounded-full"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </Card>
          ))}

          <Card className="bg-transparent shadow-none border border-white p-6 md:p-8 text-black">
            <CardHeader className="p-0 mb-4">
              <CardTitle className="text-2xl font-bold">
                <span className="text-shadow-cannelé text-black">Total du panier</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="flex justify-between items-center text-xl font-bold mb-6">
                <span className="text-shadow-cannelé text-black">Total :</span>
                <span className="text-shadow-cannelé text-black">{cartTotal.toFixed(2)}€</span>
              </div>
              <div className="flex flex-col sm:flex-row justify-end gap-4">
                <Button
                  onClick={clearCart}
                  className="bg-red-600 text-white border-2 border-red-700 hover:bg-red-700 rounded-full text-base py-2 px-6"
                >
                  Vider le panier
                </Button>
                <Button className="bg-black text-white border-2 border-[#f8ac54] hover:bg-gray-800 rounded-full text-base py-2 px-6">
                  Passer la commande
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default CartPage;