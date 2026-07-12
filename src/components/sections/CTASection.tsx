import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ArrowRight, Shield, Clock, Gift, CheckCircle2 } from "lucide-react";

interface CTASectionProps {
  service: string;
  headline: string;
  subheadline: string;
}

export const CTASection = ({ service, headline, subheadline }: CTASectionProps) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate("/obrigado");
    }, 600);
  };

  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-hero pointer-events-none" />
      <div className="container max-w-6xl relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Risk reduction + copy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-lime text-ink text-xs font-semibold uppercase tracking-wider mb-6">
              <Gift className="w-3.5 h-3.5" /> Diagnóstico gratuito
            </div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-medium text-balance leading-[1.06] mb-5">
              {headline}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-lg">
              {subheadline}
            </p>

            <ul className="space-y-3 mb-8">
              {[
                { Icon: Shield, text: "Sem compromisso. Sem custo. Sem cartão." },
                { Icon: Clock, text: "Conversa de 30 min com nosso time de consultores." },
                { Icon: CheckCircle2, text: "Você sai com um plano de ação — usando ou não a UFABC Jr." },
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-foreground/85">
                  <item.Icon className="w-5 h-5 mt-0.5 text-lime shrink-0" strokeWidth={2} />
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>

            <p className="text-sm text-muted-foreground italic font-display">
              "Empresas que pedem o diagnóstico tomam decisões 3x mais rápidas no mês seguinte."
            </p>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="bg-card rounded-3xl p-8 md:p-10 shadow-editorial border border-border"
          >
            {(

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="mb-2">
                  <h3 className="font-display text-2xl font-medium mb-1">Solicite seu diagnóstico</h3>
                  <p className="text-sm text-muted-foreground">Leva menos de 60 segundos.</p>
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="name">Nome completo <span className="text-lime">*</span></Label>
                  <Input id="name" required placeholder="Seu nome" className="h-11" />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <Label htmlFor="email">E-mail corporativo <span className="text-lime">*</span></Label>
                    <Input id="email" type="email" required placeholder="voce@empresa.com" className="h-11" />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="phone">WhatsApp <span className="text-lime">*</span></Label>
                    <Input id="phone" type="tel" required placeholder="(11) 99999-9999" className="h-11" />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="company">Empresa <span className="text-lime">*</span></Label>
                  <Input id="company" required placeholder="Nome da empresa" className="h-11" />
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="challenge">Qual o principal desafio hoje?</Label>
                  <Textarea
                    id="challenge"
                    rows={3}
                    placeholder={`Conte rapidamente onde dói em ${service.toLowerCase()}...`}
                    className="resize-none"
                  />
                </div>

                <Button type="submit" variant="cta" size="xl" className="w-full" disabled={loading}>
                  {loading ? "Enviando..." : "Quero meu diagnóstico gratuito"}
                  <ArrowRight className="w-5 h-5 ml-1" />
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  🔒 Seus dados são confidenciais. Nada de spam, prometido.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
