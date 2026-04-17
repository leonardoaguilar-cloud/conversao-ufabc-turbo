import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight, LucideIcon } from "lucide-react";

interface ServicePreviewCardProps {
  id: string;
  eyebrow: string;
  tab: string;
  Icon: LucideIcon;
  headline: string;
  subheadline: string;
  highlights: string[];
  index: number;
}

export const ServicePreviewCard = ({
  id,
  eyebrow,
  tab,
  Icon,
  headline,
  subheadline,
  highlights,
  index,
}: ServicePreviewCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
    >
      <Link
        to={`/servicos/${id}`}
        className="group relative flex h-full flex-col rounded-2xl border border-border bg-card p-7 md:p-8 shadow-card transition-all hover:-translate-y-1 hover:border-foreground/40 hover:shadow-lg"
      >
        <div className="flex items-start justify-between mb-6">
          <div className="w-12 h-12 rounded-xl bg-ink text-lime flex items-center justify-center">
            <Icon className="w-5 h-5" strokeWidth={1.75} />
          </div>
          <div className="w-9 h-9 rounded-full bg-secondary text-foreground flex items-center justify-center transition-all group-hover:bg-ink group-hover:text-lime">
            <ArrowUpRight className="w-4 h-4" strokeWidth={2} />
          </div>
        </div>

        <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">
          {eyebrow}
        </div>
        <h3 className="font-display text-2xl md:text-3xl font-medium leading-[1.1] text-balance mb-3">
          {tab}
        </h3>
        <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-6 line-clamp-3">
          {subheadline}
        </p>

        <ul className="mt-auto space-y-2.5 pt-5 border-t border-border">
          {highlights.map((h) => (
            <li key={h} className="flex items-start gap-2.5 text-sm text-foreground/80">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-lime" />
              <span>{h}</span>
            </li>
          ))}
        </ul>

        <div className="mt-7 inline-flex items-center gap-1.5 text-sm font-medium text-foreground">
          Ver serviço completo
          <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={2} />
        </div>
      </Link>
    </motion.div>
  );
};
