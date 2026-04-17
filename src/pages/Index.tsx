import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ServiceHero } from "@/components/sections/ServiceHero";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { SolutionSection } from "@/components/sections/SolutionSection";
import { BenefitsSection } from "@/components/sections/BenefitsSection";
import { SocialProofSection } from "@/components/sections/SocialProofSection";
import { CTASection } from "@/components/sections/CTASection";
import { services } from "@/data/services";
import { ArrowUpRight } from "lucide-react";

const Index = () => {
  const [activeTab, setActiveTab] = useState(services[0].id);
  const servicesRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  const active = services.find((s) => s.id === activeTab) ?? services[0];

  const scrollToServices = () => {
    servicesRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const scrollToCTA = () => {
    ctaRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div id="top" className="min-h-screen bg-background text-foreground">
      <Navbar onCTA={scrollToCTA} />

      <main>
        <Hero onScrollToServices={scrollToServices} />

        {/* Logo strip / trust */}
        <section className="border-y border-border bg-paper-warm/50 py-8 overflow-hidden">
          <div className="container max-w-6xl">
            <div className="text-center text-xs uppercase tracking-[0.25em] text-muted-foreground mb-4">
              Empresas que confiaram nos nossos consultores
            </div>
            <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-3 opacity-60">
              {["Continental", "Samsung", "Renova Energia", "FARO FOOD", "KAP"].map((n) => (
                <span key={n} className="font-display text-xl md:text-2xl font-medium tracking-tight text-ink">
                  {n}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Services intro + Tabs */}
        <section id="servicos" ref={servicesRef} className="pt-24 md:pt-32">
          <div className="container max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mb-12"
            >
              <div className="flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-muted-foreground mb-6">
                <span className="h-px w-8 bg-foreground/30" />
                Nossos serviços
              </div>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.0] text-balance">
                Três frentes. <em className="italic text-muted-foreground">Um único objetivo:</em> destravar seu crescimento.
              </h2>
            </motion.div>

            {/* Tabs */}
            <div className="flex flex-wrap gap-2 p-1.5 bg-card rounded-2xl border border-border shadow-card sticky top-20 z-30 backdrop-blur">
              {services.map((s) => {
                const isActive = activeTab === s.id;
                return (
                  <button
                    key={s.id}
                    onClick={() => setActiveTab(s.id)}
                    className={`relative flex-1 min-w-[180px] flex items-center gap-3 px-4 md:px-6 py-3.5 rounded-xl text-sm md:text-base font-medium transition-all ${
                      isActive
                        ? "text-paper"
                        : "text-foreground/70 hover:text-foreground hover:bg-secondary/60"
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="active-tab"
                        className="absolute inset-0 bg-ink rounded-xl shadow-card"
                        transition={{ type: "spring", stiffness: 350, damping: 30 }}
                      />
                    )}
                    <s.Icon className="w-4 h-4 relative z-10 shrink-0" strokeWidth={1.75} />
                    <span className="relative z-10 text-left">{s.tab}</span>
                    {isActive && <ArrowUpRight className="w-4 h-4 relative z-10 ml-auto text-lime" />}
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* Active service content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
          >
            <ServiceHero
              eyebrow={active.eyebrow}
              headline={active.hero.headline}
              subheadline={active.hero.subheadline}
              Icon={active.Icon}
            />
            <ProblemSection headline={active.problem.headline} pains={active.problem.pains} />
            <SolutionSection
              eyebrow={active.solution.eyebrow}
              headline={active.solution.headline}
              description={active.solution.description}
              steps={active.solution.steps}
              Icon={active.Icon}
            />
            <BenefitsSection
              eyebrow={active.benefits.eyebrow}
              headline={active.benefits.headline}
              benefits={active.benefits.items}
            />
            <SocialProofSection cases={active.cases} />
            <div id="contato" ref={active.id === activeTab ? ctaRef : undefined}>
              <CTASection
                service={active.tab}
                headline={active.cta.headline}
                subheadline={active.cta.subheadline}
              />
            </div>
          </motion.div>
        </AnimatePresence>

        {/* About / Footer band */}
        <section id="sobre" className="bg-ink text-paper py-20 md:py-28 grain relative overflow-hidden">
          <div className="container max-w-5xl relative">
            <div className="grid md:grid-cols-12 gap-10 items-end">
              <div className="md:col-span-8">
                <div className="flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-lime mb-6">
                  <span className="h-px w-8 bg-lime/60" />
                  Sobre a UFABC Jr.
                </div>
                <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium text-balance leading-[1.05]">
                  Empresa Júnior da UFABC. <em className="italic text-paper/60">Gente jovem, método sério.</em>
                </h2>
                <p className="mt-6 text-lg text-paper/70 max-w-2xl leading-relaxed">
                  Somos consultores em formação na Universidade Federal do ABC — uma das universidades mais bem ranqueadas do Brasil.
                  Aplicamos rigor acadêmico, ferramentas atualizadas e olhar de fora para entregar resultado de mercado a um custo
                  que startups e PMEs conseguem absorver.
                </p>
              </div>
              <div className="md:col-span-4 grid grid-cols-2 gap-6">
                <div>
                  <div className="font-display text-3xl font-semibold text-lime">+120</div>
                  <div className="text-xs text-paper/60 uppercase tracking-wider mt-1">projetos</div>
                </div>
                <div>
                  <div className="font-display text-3xl font-semibold text-lime">8</div>
                  <div className="text-xs text-paper/60 uppercase tracking-wider mt-1">anos atuando</div>
                </div>
                <div>
                  <div className="font-display text-3xl font-semibold text-lime">98%</div>
                  <div className="text-xs text-paper/60 uppercase tracking-wider mt-1">satisfação</div>
                </div>
                <div>
                  <div className="font-display text-3xl font-semibold text-lime">35+</div>
                  <div className="text-xs text-paper/60 uppercase tracking-wider mt-1">consultores</div>
                </div>
              </div>
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

export default Index;
