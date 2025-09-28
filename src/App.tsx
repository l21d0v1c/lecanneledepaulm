import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Layout from "./components/layout/Layout";
import CartPage from "./pages/CartPage"; // Import the new CartPage component
import { CartProvider } from "./context/CartContext"; // Import the CartProvider

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <CartProvider> {/* Wrap Layout with CartProvider */}
          <Layout>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/sales" element={<Index />} />
              <Route path="/sucres" element={<Index />} />
              <Route path="/creations" element={<Index />} />
              <Route path="/cart" element={<CartPage />} /> {/* Add route for CartPage */}
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