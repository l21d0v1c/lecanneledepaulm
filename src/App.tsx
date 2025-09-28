import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Layout from "./components/layout/Layout";
import LaMaisonPage from "./pages/LaMaisonPage";
import NousContacterPage from "./pages/NousContacterPage";
import Loader from "./components/Loader"; // Import du composant Loader
import React, { useState, useEffect } from "react"; // Import de useState et useEffect

const queryClient = new QueryClient();

const App = () => {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 4000); // Masquer le loader après 4 secondes

    return () => clearTimeout(timer);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          {showLoader && <Loader />} {/* Afficher le Loader de manière conditionnelle */}
          <Layout>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/sales" element={<Index />} />
              <Route path="/sucres" element={<Index />} />
              <Route path="/creations" element={<Index />} />
              <Route path="/la-maison" element={<LaMaisonPage />} />
              <Route path="/nous-contacter" element={<NousContacterPage />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;