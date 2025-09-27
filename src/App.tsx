import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Layout from "./components/layout/Layout";
import React from "react"; // Import de React pour utiliser React.Fragment

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    {/* TooltipProvider doit avoir un seul enfant. Nous allons envelopper tout le reste dans un React.Fragment. */}
    <TooltipProvider>
      <React.Fragment>
        {/* Le div wrapper pour BrowserRouter reste pour s'assurer que BrowserRouter est bien un enfant unique du div */}
        <div>
          <BrowserRouter>
            <Layout>
              <Routes>
                <Route path="/" element={<Index />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Layout>
          </BrowserRouter>
        </div>
        {/* Toaster et Sonner sont maintenant des frères et sœurs du div, tous à l'intérieur du React.Fragment */}
        <Toaster />
        <Sonner />
      </React.Fragment>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;