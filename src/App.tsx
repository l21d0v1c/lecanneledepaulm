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
    {/* QueryClientProvider a un seul enfant : un React.Fragment */}
    <React.Fragment>
      {/* TooltipProvider enveloppe maintenant uniquement le contenu principal de l'application */}
      <TooltipProvider>
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
      {/* Toaster et Sonner sont des frères et sœurs du TooltipProvider, mais toujours dans le même React.Fragment */}
      <Toaster />
      <Sonner />
    </React.Fragment>
  </QueryClientProvider>
);

export default App;