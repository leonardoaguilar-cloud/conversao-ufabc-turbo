import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

interface HeroProps {
  onScrollToServices: () => void;
}

export const Hero = ({ onScrollToServices }: HeroProps) => {
  return (
    <section className="relative overflow-hidden pt-32 md:pt-40 pb-20 md:pb-32 grain">
      <div className="absolute inset-0 bg-gradient-hero pointer-events-none" />

      {/* Decorative grid */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--ink)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--ink)) 1px, transparent 1px)`,
          backgroundSize: "64px 64px",
        }}
      />

      <div className="container max-w-6xl relative text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-card border border-border text-xs font-medium text-muted-foreground mb-8 mx-auto"
        >
          <Sparkles className="w-3.5 h-3.5 text-lime" strokeWidth={2.5} />
          Empresa Júnior da UFABC · +200 projetos entregues
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium leading-[0.98] tracking-tight text-balance max-w-5xl mx-auto"
        >
          Crescimento não é sorte.{" "}
          <em className="italic text-muted-foreground">É método.</em>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed mx-auto"
        >
          Consultoria estudantil de alto impacto da UFABC. Resolvemos os três gargalos que travam empresas em crescimento:
          <span className="text-foreground font-medium"> processos confusos, mercado nebuloso e dados sem direção.</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <Button variant="cta" size="xl" onClick={onScrollToServices}>
            Diagnóstico gratuito <ArrowRight className="w-5 h-5 ml-1" />
          </Button>
          <Button variant="ghost" size="xl" onClick={onScrollToServices}>
            Ver os serviços
          </Button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-10 max-w-4xl mx-auto pt-10 border-t border-border"
        >
          {[
            { value: "+200", label: "projetos entregues" },
            { value: "+170", label: "clientes atendidos" },
            { value: "14+ anos", label: "no mercado" },
            { value: "97%", label: "NPS" },
            { value: "95%", label: "CSAT" },
          ].map((s, i) => (
            <div key={i}>
              <div className="font-display text-3xl md:text-4xl font-semibold tracking-tight">{s.value}</div>
              <div className="text-xs md:text-sm text-muted-foreground mt-1">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
