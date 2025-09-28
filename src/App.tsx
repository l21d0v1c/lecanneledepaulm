import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Layout from "./components/layout/Layout";
import LaMaisonPage from "./pages/LaMaisonPage";
import NousContacterPage from "./pages/NousContacterPage"; // Import de la nouvelle page

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/sales" element={<Index />} />
            <Route path="/sucres" element={<Index />} />
            <Route path="/creations" element={<Index />} />
            <Route path="/la-maison" element={<LaMaisonPage />} />
            <Route path="/nous-contacter" element={<NousContacterPage />} /> {/* Nouvelle route pour Nous Contacter */}
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;