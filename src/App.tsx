import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "@/pages/Index";
import NotFound from "@/pages/NotFound";
import Movimento from "@/pages/Movimento";
import Iniciativa from "@/pages/Iniciativa";
import InfluIA from "@/pages/InfluIA";
import Apoiar from "@/pages/Apoiar";
import FAQ from "@/pages/FAQ";
import Algoritmo from "@/pages/Algoritmo";
import Header from "@/components/Header";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/o-movimento" element={<Movimento />} />
          <Route path="/uma-iniciativa-creator" element={<Iniciativa />} />
          <Route path="/influia" element={<InfluIA />} />
          <Route path="/apoie" element={<Apoiar />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/algoritmo" element={<Algoritmo />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
