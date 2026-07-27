import { useRef } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, CheckCircle2 } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { ServiceHero } from "@/components/sections/ServiceHero";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { SolutionSection } from "@/components/sections/SolutionSection";
import { SocialProofSection } from "@/components/sections/SocialProofSection";
import { CTASection } from "@/components/sections/CTASection";
import { services } from "@/data/services";
import ufabcjrLogo from "@/assets/logo-ufabcjr.webp";

const TITLE = "Pesquisa de Mercado sob Medida para Empresas | UFABC Jr.";
const DESCRIPTION =
  "Pesquisa de mercado com dados de público, concorrência e oportunidades reais do seu setor. Diagnóstico gratuito com a Empresa Júnior da UFABC.";
const CANONICAL = "https://ufabcjr.com.br/pesquisa-de-mercado";

const differentials = [
  "Personas reais, com dores e critérios de compra documentados",
  "Concorrência radiografada: preço, canais e posicionamento",
  "Dimensionamento de oportunidade antes de você investir",
  "Relatório executivo com recomendações objetivas",
];

const PesquisaMercado = () => {
  const ctaRef = useRef<HTMLDivElement>(null);
  const service = services.find((s) => s.id === "mercado")!;

  const scrollToCTA = () => {
    ctaRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div id="top" className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>{TITLE}</title>
        <meta name="description" content={DESCRIPTION} />
        <link rel="canonical" href={CANONICAL} />
        <meta property="og:title" content={TITLE} />
        <meta property="og:description" content={DESCRIPTION} />
        <meta property="og:url" content={CANONICAL} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={TITLE} />
        <meta name="twitter:description" content={DESCRIPTION} />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Pesquisa de Mercado",
          description: DESCRIPTION,
          provider: { "@type": "Organization", name: "UFABC Jr.", url: "https://ufabcjr.com.br" },
          url: CANONICAL,
        })}</script>
      </Helmet>

      <Navbar onCTA={scrollToCTA} />

      <main className="pt-20 md:pt-24">
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

        {/* Diferenciais — foco em conversão */}
        <section className="py-16 md:py-20 border-t border-border bg-background">
          <div className="container max-w-4xl text-center">
            <div className="flex items-center justify-center gap-2 text-sm uppercase tracking-[0.2em] text-muted-foreground mb-5">
              <span className="h-px w-8 bg-foreground/30" />
              O que você recebe
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-medium leading-tight text-balance mb-10">
              Uma pesquisa que vira decisão — não um relatório na gaveta.
            </h2>
            <ul className="grid sm:grid-cols-2 gap-4 text-left">
              {differentials.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.45, delay: i * 0.06 }}
                  className="flex items-start gap-3 rounded-2xl border border-border bg-card p-5"
                >
                  <CheckCircle2 className="w-5 h-5 mt-0.5 text-lime shrink-0" strokeWidth={2} />
                  <span className="text-foreground/85">{item}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </section>

        <SocialProofSection cases={service.cases} />

        <div id="contato" ref={ctaRef}>
          <CTASection
            service={service.tab}
            serviceId="pesquisa-de-mercado"
            headline={service.cta.headline}
            subheadline={service.cta.subheadline}
          />
        </div>

        <footer className="bg-ink text-paper/60 border-t border-paper/10 py-10">
          <div className="container max-w-6xl grid gap-8 text-sm md:grid-cols-[1fr_auto] md:items-start">
            <div className="space-y-5">
              <div className="flex items-center gap-2">
                <img src={ufabcjrLogo} alt="UFABC Jr." className="h-8 w-auto object-contain" />
                <span className="text-paper/40">· Consultoria Empresarial</span>
              </div>
              <div>© {new Date().getFullYear()} UFABC Jr. Todos os direitos reservados.</div>
            </div>

            <div className="grid gap-4 sm:grid-cols-3 md:grid-cols-1 lg:grid-cols-3">
              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 mt-1 text-lime shrink-0" strokeWidth={2} />
                <div>
                  <div className="text-paper/40">E-mail</div>
                  <div className="font-medium text-paper">comercial@ufabcjr.com.br</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 mt-1 text-lime shrink-0" strokeWidth={2} />
                <div>
                  <div className="text-paper/40">Telefone / WhatsApp</div>
                  <div className="font-medium text-paper">(11) 95412-4779</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-1 text-lime shrink-0" strokeWidth={2} />
                <div>
                  <div className="text-paper/40">Onde estamos</div>
                  <div className="font-medium text-paper">UFABC · Santo André</div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default PesquisaMercado;
