import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { LucideIcon } from "lucide-react";

interface Step {
  title: string;
  description: string;
}

interface SolutionSectionProps {
  eyebrow: string;
  headline: string;
  description: string;
  steps: Step[];
  Icon: LucideIcon;
}

export const SolutionSection = ({ eyebrow, headline, description, steps, Icon }: SolutionSectionProps) => {
  return (
    <section className="py-20 md:py-28 bg-ink text-paper relative overflow-hidden grain">
      <div className="container max-w-6xl relative">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 lg:sticky lg:top-32"
          >
            <div className="flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-lime mb-6">
              <span className="h-px w-8 bg-lime/60" />
              {eyebrow}
            </div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-medium text-balance leading-[1.08] mb-6">
              {headline}
            </h2>
            <p className="text-lg text-paper/70 leading-relaxed max-w-md">{description}</p>

            <div className="mt-10 inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-lime/10 border border-lime/30">
              <Icon className="w-9 h-9 text-lime" strokeWidth={1.5} />
            </div>
          </motion.div>

          <div className="lg:col-span-7 space-y-3">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative p-6 md:p-8 rounded-2xl border border-paper/10 bg-paper/[0.03] hover:bg-paper/[0.06] hover:border-lime/30 transition-all"
              >
                <div className="flex items-start gap-5">
                  <div className="shrink-0 w-10 h-10 rounded-full bg-lime text-ink flex items-center justify-center font-display font-semibold text-lg">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-2xl md:text-3xl font-medium mb-2 leading-tight">
                      {step.title}
                    </h3>
                    <p className="text-paper/70 leading-relaxed">{step.description}</p>
                  </div>
                  <Check className="w-5 h-5 text-lime opacity-0 group-hover:opacity-100 transition-opacity mt-2" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
