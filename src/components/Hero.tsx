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
          className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed mx-auto text-justify"
        >
          Somos uma consultoria da Universidade Federal do ABC especializada em gestão de processos. Resolvemos os três gargalos que travam empresas em crescimento:
          <span className="text-foreground font-medium"> processos ineficientes, entendimento de mercado e dados desorganizados.</span>
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

      </div>
    </section>
  );
};
