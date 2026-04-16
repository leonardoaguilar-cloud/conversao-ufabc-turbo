import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface Benefit {
  title: string;
  description: string;
  Icon: LucideIcon;
}

interface BenefitsSectionProps {
  eyebrow: string;
  headline: string;
  benefits: Benefit[];
}

export const BenefitsSection = ({ eyebrow, headline, benefits }: BenefitsSectionProps) => {
  return (
    <section className="py-20 md:py-28">
      <div className="container max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-14"
        >
          <div className="flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-muted-foreground mb-6">
            <span className="h-px w-8 bg-foreground/30" />
            {eyebrow}
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium text-balance leading-[1.05]">
            {headline}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {benefits.map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group p-7 rounded-2xl bg-card border border-border shadow-card hover:shadow-editorial hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-lime-soft flex items-center justify-center mb-5 group-hover:bg-lime transition-colors">
                <b.Icon className="w-6 h-6 text-ink" strokeWidth={1.75} />
              </div>
              <h3 className="font-display text-2xl font-medium mb-2 leading-tight">{b.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{b.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
