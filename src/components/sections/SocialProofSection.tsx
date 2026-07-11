import { motion } from "framer-motion";
import { Quote, TrendingUp } from "lucide-react";

interface Case {
  client: string;
  segment: string;
  result: string;
  metric: string;
  quote: string;
}

interface SocialProofProps {
  cases: Case[];
}

export const SocialProofSection = ({ cases }: SocialProofProps) => {
  return (
    <section className="py-20 md:py-28 bg-background border-y border-border">
      <div className="container max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto mb-14 text-center"
        >
          <div className="flex items-center justify-center gap-2 uppercase tracking-[0.2em] text-muted-foreground mb-6 font-bold text-xl">
            <span className="h-px w-8 bg-foreground/30" />
            Quem já cresceu com a gente
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-medium text-balance leading-[1.08]">
            Resultados <em className="italic text-muted-foreground">que falam</em> mais alto.
          </h2>
        </motion.div>

      <div className={`grid gap-5 ${cases.length === 2 ? 'md:grid-cols-2 max-w-4xl mx-auto' : cases.length === 1 ? 'md:grid-cols-1 max-w-xl mx-auto' : 'md:grid-cols-3'}`}>
          {cases.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card rounded-2xl p-7 border border-border shadow-card flex flex-col"
            >
              <div className="flex items-baseline gap-2 mb-4">
                <TrendingUp className="w-5 h-5 text-lime shrink-0" />
                <div className="font-display text-3xl md:text-4xl font-semibold leading-none tracking-tight">
                  {c.metric}
                </div>
              </div>
              <p className="font-medium text-sm md:text-base text-foreground mb-5 leading-snug">{c.result}</p>

              <div className="border-t border-border pt-5 mt-auto">
                <Quote className="w-5 h-5 text-muted-foreground/40 mb-2" />
                <p className="text-sm text-muted-foreground italic leading-relaxed mb-3">"{c.quote}"</p>
                <div>
                  <div className="font-medium text-sm">{c.client}</div>
                  <div className="text-xs text-muted-foreground">{c.segment}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
