import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface ServiceHeroProps {
  eyebrow: string;
  headline: string;
  subheadline: string;
  Icon: LucideIcon;
}

export const ServiceHero = ({ eyebrow, headline, subheadline, Icon }: ServiceHeroProps) => {
  return (
    <section className="pt-16 pb-12 md:pt-24 md:pb-20 border-t border-border bg-background">
      <div className="container max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-11 h-11 rounded-xl bg-ink text-lime flex items-center justify-center">
              <Icon className="w-5 h-5" strokeWidth={1.75} />
            </div>
            <span className="text-sm uppercase tracking-[0.2em] text-muted-foreground font-medium">
              {eyebrow}
            </span>
          </div>

          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.04] tracking-tight text-balance mb-6 max-w-4xl mx-auto">
            {headline}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed mx-auto">
            {subheadline}
          </p>
        </motion.div>
      </div>
    </section>
  );
};
