import { useRef } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ServicePreviewCard } from "@/components/sections/ServicePreviewCard";
import { ContactSection } from "@/components/sections/ContactSection";
import { services } from "@/data/services";
import { Mail, MapPin, Phone } from "lucide-react";
import samsungLogo from "@/assets/logo-samsung.png";
import continentalLogo from "@/assets/logo-continental.png";
import renovaLogo from "@/assets/logo-renova.png";
import dasaLogo from "@/assets/logo-dasa.jpg";
import casLogo from "@/assets/logo-cas.png";
import adventistaLogo from "@/assets/logo-adventista.png";
import shopperLogo from "@/assets/logo-shopper.png";
import aperamLogo from "@/assets/logo-aperam.webp";

// Quick highlights shown on each preview card (curated from each service's benefits)
const previewHighlights: Record<string, string[]> = {
  processos: [
    "Gargalos que custam tempo e dinheiro",
    "Processos documentados e replicáveis",
    "Gestão eficiente da equipe",
  ],
  mercado: [
    "Público, concorrentes e oportunidades reais",
    "Decisões com menor risco e mais evidência",
    "Pesquisa com suporte de professores doutores",
  ],
  dados: [
    "Bases de dados organizadas",
    "Dashboards interativos e intuitivos",
    "Automações inteligentes",
  ],
};

const trustedCompanies: { name: string; logo?: string }[] = [
  { name: "Continental", logo: continentalLogo },
  { name: "Samsung", logo: samsungLogo },
  { name: "Renova Energia", logo: renovaLogo },
  { name: "Dasa", logo: dasaLogo },
  { name: "CAS Tecnologia", logo: casLogo },
  { name: "Igreja Adventista do Sétimo Dia", logo: adventistaLogo },
  { name: "Shopper", logo: shopperLogo },
  { name: "Aperam", logo: aperamLogo },
];

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
        <section className="border-y py-4 overflow-hidden border-neutral-100 bg-background">
          <div className="container max-w-7xl relative bg-background border-background">
            <div className="text-center uppercase tracking-[0.25em] text-muted-foreground mb-4 text-lg font-bold text-emerald-950">
              Empresas que confiaram nos nossos consultores
            </div>
            <div className="relative mx-auto w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
              <motion.div
                className="flex w-max items-center gap-5 opacity-70"
                animate={{ x: [0, -520] }}
                transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
              >
                {[...trustedCompanies, ...trustedCompanies, ...trustedCompanies].map((company, index) => (
                  <div
                    key={`${company.name}-${index}`}
                    className="flex h-20 w-56 shrink-0 items-center justify-center rounded-md border border-border bg-background px-8"
                  >
                    {company.logo ? (
                      <img src={company.logo} alt={company.name} className="max-h-12 w-auto object-contain" />
                    ) : (
                      <span className="font-display text-xl md:text-2xl font-medium tracking-tight text-ink whitespace-nowrap">
                        {company.name}
                      </span>
                    )}
                  </div>
                ))}
              </motion.div>
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
              className="max-w-3xl mx-auto mb-14 text-center"
            >
              <div className="flex items-center justify-center gap-2 uppercase tracking-[0.2em] text-muted-foreground mb-6 font-bold text-4xl">
                <span className="h-px w-8 bg-foreground/30" />
                NOSSOS SERVIÇOS
              </div>
              <h2 className="font-display text-5xl font-medium leading-[1.0] text-balance">
                Três frentes. <em className="italic text-muted-foreground">Um único objetivo:</em> destravar seu crescimento.
              </h2>
              <p className="mt-6 text-muted-foreground max-w-2xl mx-auto leading-relaxed text-sm">
                
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
          <div className="container max-w-6xl relative">
            <div className="grid gap-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(320px,0.75fr)] lg:items-center">
              <div className="max-w-3xl text-left">
                <div className="flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-lime mb-6">
                  <span className="h-px w-8 bg-lime/60" />
                  Sobre a UFABC Jr.
                </div>
                <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium text-balance leading-[1.05]">
                  Empresa Júnior da UFABC. <em className="italic text-paper/60">Gente jovem, método sério.</em>
                </h2>
                <p className="mt-6 text-lg text-paper/70 max-w-2xl mx-auto leading-relaxed text-justify">
                  A UFABC jr. é uma empresa de consultoria formada por estudantes da Universidade Federal do ABC, conectando conhecimento acadêmico e visão de mercado para desenvolver soluções estratégicas para diversos perfis de empresas. Há mais de 14 anos, atuamos com foco em inovação, análise e resultado, entregando projetos de alta qualidade com uma abordagem acessível, personalizada e orientada ao crescimento dos nossos clientes.
                </p>
                <div className="mt-6 inline-flex items-center gap-3 rounded-full border border-lime/30 bg-lime/10 px-4 py-2 text-sm text-lime">
                  <span className="font-display font-semibold">4x</span>
                  <span className="text-paper/80">Empresa Júnior de Alto Impacto — reconhecimento consecutivo</span>
                </div>

                <div className="mt-10 grid grid-cols-3 gap-4 md:gap-10 max-w-2xl pt-10 border-t border-paper/10">
                  {[
                    { value: "+200", label: "projetos entregues" },
                    { value: "+170", label: "clientes atendidos" },
                    { value: "+14 anos", label: "no mercado" },
                  ].map((s, i) => (
                    <div key={i}>
                      <div className="font-display md:text-4xl font-semibold tracking-tight text-paper text-2xl">{s.value}</div>
                      <div className="text-xs md:text-sm text-paper/60 mt-1">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="hidden min-h-[360px] lg:block" aria-hidden="true" />
            </div>
          </div>
        </section>

        <div ref={ctaRef}>
          <ContactSection />
        </div>

        <footer className="bg-ink text-paper/60 border-t border-paper/10 py-10">
          <div className="container max-w-6xl grid gap-8 text-sm md:grid-cols-[1fr_auto] md:items-start">
            <div className="space-y-5">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-md bg-lime text-ink flex items-center justify-center font-display font-bold">U</div>
                <span className="font-display font-medium text-paper">UFABC Jr.</span>
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

export default Index;
