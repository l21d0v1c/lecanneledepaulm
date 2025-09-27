import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Layout from "./components/layout/Layout";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      {/* Envelopper BrowserRouter dans un div pour s'assurer que TooltipProvider reçoit un seul élément enfant */}
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
    {/* Toaster et Sonner sont déplacés ici pour être des frères et sœurs du TooltipProvider */}
    <Toaster />
    <Sonner />
  </QueryClientProvider>
);

export default App;