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
  // Le composant App retourne un seul React.Fragment qui contient tout
  <React.Fragment>
    <QueryClientProvider client={queryClient}>
      {/* QueryClientProvider a un seul enfant : TooltipProvider */}
      <TooltipProvider>
        {/* TooltipProvider a un seul enfant : un div */}
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
      </TooltipProvider>
    </QueryClientProvider>
    {/* Toaster et Sonner sont maintenant des frères et sœurs directs du QueryClientProvider,
        tous à l'intérieur du React.Fragment de l'App. */}
    <Toaster />
    <Sonner />
  </React.Fragment>
);

export default App;