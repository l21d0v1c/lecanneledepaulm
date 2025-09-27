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
  // L'App retourne un seul React.Fragment
  <React.Fragment>
    {/* QueryClientProvider enveloppe le TooltipProvider */}
    <QueryClientProvider client={queryClient}>
      {/* TooltipProvider enveloppe le BrowserRouter */}
      <TooltipProvider>
        {/* BrowserRouter enveloppe le Layout */}
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/" element={<Index />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
    {/* Toaster et Sonner sont des frères et sœurs directs du QueryClientProvider,
        au niveau le plus élevé de l'application, à l'intérieur du React.Fragment. */}
    <Toaster />
    <Sonner />
  </React.Fragment>
);

export default App;