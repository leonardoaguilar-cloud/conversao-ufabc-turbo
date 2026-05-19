import { useEffect, useRef } from "react";
import { Link, Navigate, useLocation, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { ServiceHero } from "@/components/sections/ServiceHero";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { SolutionSection } from "@/components/sections/SolutionSection";
import { SocialProofSection } from "@/components/sections/SocialProofSection";
import { CTASection } from "@/components/sections/CTASection";
import { services } from "@/data/services";

const ServicePage = () => {
  const params = useParams();
  const location = useLocation();
  const idFromPath = location.pathname.replace(/^\//, "").split("/").pop();
  const id = params.id ?? idFromPath;
  const ctaRef = useRef<HTMLDivElement>(null);
  const service = services.find((s) => s.id === id);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [id]);

  if (!service) return <Navigate to="/" replace />;

  const scrollToCTA = () => {
    ctaRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div id="top" className="min-h-screen bg-background text-foreground">
      <Navbar onCTA={scrollToCTA} />

      <main>
        {/* Breadcrumb / back link */}
        <div className="pt-20 md:pt-24">
          <div className="container max-w-5xl">
            <Link
              to="/#servicos"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-4 h-4" strokeWidth={2} />
              Voltar para todos os serviços
            </Link>
          </div>
        </div>

        <motion.div
          key={service.id}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
        >
          <ServiceHero
            eyebrow={service.eyebrow}
            headline={service.hero.headline}
            subheadline={service.hero.subheadline}
            Icon={service.Icon}
            ctaLabel={service.hero.cta}
            onCTA={scrollToCTA}
          />
          <ProblemSection headline={service.problem.headline} pains={service.problem.pains} />
          <SolutionSection
            eyebrow={service.solution.eyebrow}
            headline={service.solution.headline}
            description={service.solution.description}
            steps={service.solution.steps}
            Icon={service.Icon}
          />
          <SocialProofSection cases={service.cases} />
          <div id="contato" ref={ctaRef}>
            <CTASection
              service={service.tab}
              headline={service.cta.headline}
              subheadline={service.cta.subheadline}
            />
          </div>
        </motion.div>

        {/* Other services */}
        <section className="py-20 md:py-28 border-t border-border bg-background">
          <div className="container max-w-6xl">
            <div className="flex flex-col items-center text-center gap-6 mb-10">
              <div>
                <div className="flex items-center justify-center gap-2 text-sm uppercase tracking-[0.2em] text-muted-foreground mb-4">
                  <span className="h-px w-8 bg-foreground/30" />
                  Outros serviços
                </div>
                <h2 className="font-display text-3xl md:text-4xl font-medium leading-tight text-balance max-w-2xl mx-auto">
                  Combinamos as três frentes para destravar seu crescimento.
                </h2>
              </div>
              <Link
                to="/#servicos"
                className="text-sm font-medium text-foreground hover:underline underline-offset-4"
              >
                Ver todos →
              </Link>
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              {services
                .filter((s) => s.id !== service.id)
                .map((s) => (
                  <Link
                    key={s.id}
                    to={`/servicos/${s.id}`}
                    className="group flex items-start gap-5 rounded-2xl border border-border bg-card p-6 md:p-7 transition-all hover:-translate-y-0.5 hover:border-foreground/40 hover:shadow-card"
                  >
                    <div className="w-11 h-11 rounded-xl bg-ink text-lime flex items-center justify-center shrink-0">
                      <s.Icon className="w-5 h-5" strokeWidth={1.75} />
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-1.5">
                        {s.eyebrow}
                      </div>
                      <div className="font-display text-xl font-medium mb-1.5">{s.tab}</div>
                      <p className="text-sm text-muted-foreground line-clamp-2">{s.hero.subheadline}</p>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </section>

        <footer className="bg-ink text-paper/60 border-t border-paper/10 py-10">
          <div className="container max-w-6xl flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-md bg-lime text-ink flex items-center justify-center font-display font-bold">U</div>
              <span className="font-display font-medium text-paper">UFABC Jr.</span>
              <span className="text-paper/40">· Consultoria Empresarial</span>
            </div>
            <div>© {new Date().getFullYear()} UFABC Jr. Todos os direitos reservados.</div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default ServicePage;
