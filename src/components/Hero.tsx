import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface HeroProps {
  onScrollToServices: () => void;
  onCTA?: () => void;
}

const ALTERNATING_WORDS = ["inteligentes", "acessíveis"];

export const Hero = ({ onScrollToServices, onCTA }: HeroProps) => {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((i) => (i + 1) % ALTERNATING_WORDS.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden pt-24 md:pt-32 pb-8 md:pb-12 grain">
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
          className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.05] tracking-tight text-balance max-w-4xl mx-auto"
        >
          Soluções{" "}
          <span className="relative inline-block align-baseline">
            <AnimatePresence mode="wait">
              <motion.em
                key={ALTERNATING_WORDS[wordIndex]}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="not-italic inline-block text-lime font-semibold"
              >
                {ALTERNATING_WORDS[wordIndex]}
              </motion.em>
            </AnimatePresence>
          </span>{" "}
          e rápidas para crescer seu negócio
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-6 text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed mx-auto text-center"
        >
          Especializados em projetos de consultoria empresarial que garantem o crescimento do seu negócio.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          <Button variant="cta" size="xl" onClick={onCTA ?? onScrollToServices} className="text-lg px-10 h-16">
            Diagnóstico gratuito <ArrowRight className="w-5 h-5 ml-1" />
          </Button>
          <Button variant="outline" size="xl" onClick={onScrollToServices} className="text-lg px-10 h-16">
            Ver os serviços
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
