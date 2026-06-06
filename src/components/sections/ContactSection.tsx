import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";
import { services } from "@/data/services";

export const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    whatsapp: "",
    company: "",
    service: "",
    message: "",
  });

  const update = (field: keyof typeof form) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.service) {
      toast({
        title: "Preencha os campos obrigatórios",
        description: "Nome, e-mail e serviço de interesse são necessários.",
        variant: "destructive",
      });
      return;
    }
    setLoading(true);
    // Simulação de envio — conecte ao Lovable Cloud para persistir os leads.
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      toast({
        title: "Recebemos seu contato!",
        description: "Um consultor vai responder em até 1 dia útil.",
      });
    }, 600);
  };

  return (
    <section id="contato" className="py-24 md:py-32 border-t border-border bg-background">
      <div className="container max-w-6xl">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left: copy + info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <div className="flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-muted-foreground mb-6">
              <span className="h-px w-8 bg-foreground/30" />
              Fale com a gente
            </div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.0] tracking-tight text-balance">
              Deixe seu contato.{" "}
              <em className="italic text-muted-foreground">Respondemos em 1 dia útil.</em>
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Conte um pouco sobre o seu negócio e o que você quer destravar. Marcamos uma conversa
              de 30 minutos sem custo para entender seu contexto e indicar o melhor caminho.
            </p>

            <div className="mt-10 inline-flex items-center gap-3 rounded-full border border-border bg-card px-4 py-2 text-sm text-muted-foreground">
              <span className="h-2 w-2 rounded-full bg-lime animate-pulse" />
              Diagnóstico inicial sem custo nem compromisso
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <div className="rounded-3xl border border-border bg-card p-6 md:p-10 shadow-card">
              {submitted ? (
                <div className="flex flex-col items-center text-center py-10">
                  <div className="w-14 h-14 rounded-full bg-lime/15 text-lime flex items-center justify-center mb-5">
                    <CheckCircle2 className="w-7 h-7" strokeWidth={2} />
                  </div>
                  <h3 className="font-display text-2xl md:text-3xl font-medium mb-3">
                    Recebemos seu contato!
                  </h3>
                  <p className="text-muted-foreground max-w-md">
                    Um dos nossos consultores entra em contato em até 1 dia útil pelo e-mail{" "}
                    <span className="text-foreground font-medium">{form.email}</span>.
                  </p>
                  <Button
                    variant="ghost"
                    className="mt-6"
                    onClick={() => {
                      setSubmitted(false);
                      setForm({ name: "", email: "", whatsapp: "", company: "", service: "", message: "" });
                    }}
                  >
                    Enviar outra mensagem
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <Label htmlFor="name">
                        Nome <span className="text-lime">*</span>
                      </Label>
                      <Input
                        id="name"
                        placeholder="Como podemos te chamar?"
                        value={form.name}
                        onChange={update("name")}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">
                        E-mail <span className="text-lime">*</span>
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="voce@empresa.com"
                        value={form.email}
                        onChange={update("email")}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <Label htmlFor="whatsapp">WhatsApp</Label>
                      <Input
                        id="whatsapp"
                        type="tel"
                        placeholder="(11) 99999-9999"
                        value={form.whatsapp}
                        onChange={update("whatsapp")}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">Empresa</Label>
                      <Input
                        id="company"
                        placeholder="Nome da sua empresa"
                        value={form.company}
                        onChange={update("company")}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="service">
                        Serviço de interesse <span className="text-lime">*</span>
                      </Label>
                      <Select
                        value={form.service}
                        onValueChange={(v) => setForm((f) => ({ ...f, service: v }))}
                      >
                        <SelectTrigger id="service">
                          <SelectValue placeholder="Selecione um serviço" />
                        </SelectTrigger>
                        <SelectContent>
                          {services.map((s) => (
                            <SelectItem key={s.id} value={s.id}>
                              {s.tab}
                            </SelectItem>
                          ))}
                          <SelectItem value="indeciso">Ainda não sei / quero conversar</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Conte um pouco sobre o seu desafio</Label>
                    <Textarea
                      id="message"
                      placeholder="O que está travando hoje? O que você gostaria de resolver?"
                      rows={5}
                      value={form.message}
                      onChange={update("message")}
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
                    <p className="text-xs text-muted-foreground">
                      Ao enviar, você concorda em receber um retorno do nosso time. Não compartilhamos seus dados.
                    </p>
                    <Button type="submit" variant="cta" size="lg" disabled={loading}>
                      {loading ? "Enviando..." : "Enviar mensagem"}
                      {!loading && <ArrowRight className="w-4 h-4 ml-1" />}
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
