import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import Obrigado from "./pages/Obrigado.tsx";
import PesquisaMercado from "./pages/PesquisaMercado.tsx";
import AnaliseDados from "./pages/AnaliseDados.tsx";
import MapeamentoProcessos from "./pages/MapeamentoProcessos.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/pesquisa-de-mercado" element={<PesquisaMercado />} />
          <Route path="/analise-de-dados" element={<AnaliseDados />} />
          <Route path="/mapeamento-de-processos" element={<MapeamentoProcessos />} />
          <Route path="/obrigado" element={<Obrigado />} />

          {/* Redirects for legacy service URLs (avoid duplicate content) */}
          <Route path="/processos" element={<Navigate to="/mapeamento-de-processos" replace />} />
          <Route path="/mercado" element={<Navigate to="/pesquisa-de-mercado" replace />} />
          <Route path="/dados" element={<Navigate to="/analise-de-dados" replace />} />
          <Route path="/servicos/processos" element={<Navigate to="/mapeamento-de-processos" replace />} />
          <Route path="/servicos/mercado" element={<Navigate to="/pesquisa-de-mercado" replace />} />
          <Route path="/servicos/dados" element={<Navigate to="/analise-de-dados" replace />} />
          <Route path="/servicos/*" element={<Navigate to="/" replace />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
