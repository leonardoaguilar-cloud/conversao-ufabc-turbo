import { useRef } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ServicePreviewCard } from "@/components/sections/ServicePreviewCard";
import { ContactSection } from "@/components/sections/ContactSection";
import { services } from "@/data/services";

// Quick highlights shown on each preview card (curated from each service's benefits)
const previewHighlights: Record<string, string[]> = {
  processos: [
    "Gargalos que custam produtividade e dinheiro",
    "Processos documentados e replicáveis",
    "Metodologia acadêmica + 210 projetos",
  ],
  mercado: [
    "Público, concorrentes e oportunidades reais",
    "Decisões com menor risco e mais evidência",
    "Pesquisa com suporte de professores doutores",
  ],
  dados: [
    "Dashboards e análises que o time usa",
    "Planilhas transformadas em inteligência visual",
    "BI e automação com metodologia rigorosa",
  ],
};

const Index = () => {
  const servicesRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

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
        <section className="border-y bg-paper-warm/50 py-8 overflow-hidden border-accent-foreground">
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

        {/* Services intro + preview cards */}
        <section id="servicos" ref={servicesRef} className="py-24 md:py-32">
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
                Nossos serviços
              </div>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.0] text-balance">
                Três frentes. <em className="italic text-muted-foreground">Um único objetivo:</em> destravar seu crescimento.
              </h2>
              <p className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed">
                Escolha o serviço que mais conversa com o momento da sua empresa. Cada um tem sua própria página com diagnóstico, método, benefícios e cases.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
              {services.map((s, i) => (
                <ServicePreviewCard
                  key={s.id}
                  index={i}
                  id={s.id}
                  eyebrow={s.eyebrow}
                  tab={s.tab}
                  Icon={s.Icon}
                  headline={s.hero.headline}
                  subheadline={s.hero.subheadline}
                  highlights={previewHighlights[s.id] ?? []}
                />
              ))}
            </div>
          </div>
        </section>

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
                  Há mais de 14 anos no mercado, aplicamos rigor acadêmico, ferramentas atualizadas e olhar de fora para entregar
                  resultado de mercado a um custo que startups e PMEs conseguem absorver.
                </p>
                <div className="mt-6 inline-flex items-center gap-3 rounded-full border border-lime/30 bg-lime/10 px-4 py-2 text-sm text-lime">
                  <span className="font-display font-semibold">4x</span>
                  <span className="text-paper/80">Empresa Júnior de Alto Impacto — reconhecimento consecutivo</span>
                </div>
              </div>
              <div className="md:col-span-4 grid grid-cols-2 gap-x-6 gap-y-5">
                <div>
                  <div className="font-display text-3xl font-semibold text-lime">+200</div>
                  <div className="text-xs text-paper/60 uppercase tracking-wider mt-1">projetos</div>
                </div>
                <div>
                  <div className="font-display text-3xl font-semibold text-lime">+170</div>
                  <div className="text-xs text-paper/60 uppercase tracking-wider mt-1">clientes atendidos</div>
                </div>
                <div>
                  <div className="font-display text-3xl font-semibold text-lime">14+</div>
                  <div className="text-xs text-paper/60 uppercase tracking-wider mt-1">anos de mercado</div>
                </div>
                <div>
                  <div className="font-display text-3xl font-semibold text-lime">97%</div>
                  <div className="text-xs text-paper/60 uppercase tracking-wider mt-1">NPS</div>
                </div>
                <div className="col-span-2">
                  <div className="font-display text-3xl font-semibold text-lime">95%</div>
                  <div className="text-xs text-paper/60 uppercase tracking-wider mt-1">CSAT</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div ref={ctaRef}>
          <ContactSection />
        </div>

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
