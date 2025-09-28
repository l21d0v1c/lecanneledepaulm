import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Layout from "./components/layout/Layout";
import CartPage from "./pages/CartPage"; // Import de la nouvelle page du panier
import { CartProvider } from "./context/CartContext"; // Import du CartProvider

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <CartProvider> {/* Enveloppe l'application avec le CartProvider */}
          <Layout>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/sales" element={<Index />} />
              <Route path="/sucres" element={<Index />} />
              <Route path="/creations" element={<Index />} />
              <Route path="/cart" element={<CartPage />} /> {/* Nouvelle route pour le panier */}
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </CartProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;