import { motion } from "framer-motion";
import { ArrowRight, AlertTriangle } from "lucide-react";

interface Pain {
  text: string;
}

interface ProblemSectionProps {
  headline: string;
  pains: Pain[];
}

export const ProblemSection = ({ headline, pains }: ProblemSectionProps) => {
  return (
    <section className="py-20 md:py-28 border-t border-border">
      <div className="container max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="flex items-center justify-center gap-2 text-sm uppercase tracking-[0.2em] text-muted-foreground mb-6">
            <span className="h-px w-8 bg-foreground/30" />
            O problema
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium text-balance leading-[1.05] mb-12 max-w-3xl mx-auto">
            {headline}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4">
          {pains.map((pain, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex items-start gap-4 p-6 rounded-2xl bg-danger-soft border border-destructive/10"
            >
              <div className="shrink-0 w-9 h-9 rounded-full bg-destructive/10 text-destructive flex items-center justify-center">
                <AlertTriangle className="w-4 h-4" />
              </div>
              <p className="text-base md:text-lg text-foreground/90 leading-snug pt-1">{pain.text}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 flex items-center gap-3 text-muted-foreground"
        >
          <ArrowRight className="w-5 h-5" />
          <span className="text-sm md:text-base italic font-display">Reconheceu o cenário? A boa notícia: dá pra resolver.</span>
        </motion.div>
      </div>
    </section>
  );
};
