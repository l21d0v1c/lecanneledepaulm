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
  // L'App retourne un seul QueryClientProvider
  <QueryClientProvider client={queryClient}>
    {/* QueryClientProvider a un seul enfant : TooltipProvider */}
    <TooltipProvider>
      {/* TooltipProvider a un seul enfant : un div qui contient tout le reste */}
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
        {/* Toaster et Sonner sont maintenant à l'intérieur de ce même div,
            ce qui garantit que TooltipProvider a un seul enfant direct. */}
        <Toaster />
        <Sonner />
      </div>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;