import React, { createContext, useContext, useState, useMemo, useEffect } from 'react';
import { toast } from 'sonner'; // Utilisation de sonner pour les notifications

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  category: "classique" | "sale" | "sucre" | "creation";
}

export interface CartItem extends Product {
  quantity: number;
}

interface CartContextType {
  items: CartItem[];
  total: number;
  addItem: (product: Product) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>(() => {
    // Charger le panier depuis le localStorage au démarrage
    if (typeof window !== 'undefined') {
      const savedCart = localStorage.getItem('cart');
      return savedCart ? JSON.parse(savedCart) : [];
    }
    return [];
  });

  useEffect(() => {
    // Sauvegarder le panier dans le localStorage à chaque modification
    if (typeof window !== 'undefined') {
      localStorage.setItem('cart', JSON.stringify(items));
    }
  }, [items]);

  const total = useMemo(() => {
    return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }, [items]);

  const addItem = (product: Product) => {
    setItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        toast.success(`${product.name} (x${existingItem.quantity + 1}) ajouté au panier !`);
        return prevItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        toast.success(`${product.name} ajouté au panier !`);
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  const removeItem = (productId: string) => {
    setItems((prevItems) => {
      const itemToRemove = prevItems.find(item => item.id === productId);
      if (itemToRemove) {
        toast.info(`${itemToRemove.name} retiré du panier.`);
      }
      return prevItems.filter((item) => item.id !== productId);
    });
  };

  const updateQuantity = (productId: string, quantity: number) => {
    setItems((prevItems) => {
      if (quantity <= 0) {
        return prevItems.filter((item) => item.id !== productId);
      }
      return prevItems.map((item) =>
        item.id === productId ? { ...item, quantity } : item
      );
    });
  };

  const clearCart = () => {
    setItems([]);
    toast.info("Le panier a été vidé.");
  };

  const value = useMemo(
    () => ({
      items,
      total,
      addItem,
      removeItem,
      updateQuantity,
      clearCart,
    }),
    [items, total]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};