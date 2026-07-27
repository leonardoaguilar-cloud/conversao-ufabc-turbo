import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import ServicePage from "./pages/ServicePage.tsx";
import NotFound from "./pages/NotFound.tsx";
import Obrigado from "./pages/Obrigado.tsx";
import PesquisaMercado from "./pages/PesquisaMercado.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/processos" element={<ServicePage />} />
          <Route path="/mercado" element={<ServicePage />} />
          <Route path="/dados" element={<ServicePage />} />
          <Route path="/pesquisa-de-mercado" element={<PesquisaMercado />} />
          <Route path="/obrigado" element={<Obrigado />} />

          {/* Redirects for legacy /servicos/* URLs */}
          <Route path="/servicos/processos" element={<Navigate to="/processos" replace />} />
          <Route path="/servicos/mercado" element={<Navigate to="/mercado" replace />} />
          <Route path="/servicos/dados" element={<Navigate to="/dados" replace />} />
          <Route path="/servicos/*" element={<Navigate to="/" replace />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
