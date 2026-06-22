import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowLeft } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";

const Obrigado = () => {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Helmet>
        <title>Obrigado pelo contato | UFABC Jr.</title>
        <meta name="description" content="Recebemos seu contato. Um consultor da UFABC Jr. vai responder em até 1 dia útil." />
        <meta name="robots" content="noindex" />
        <link rel="canonical" href="https://ufabcjr.com.br/obrigado" />
      </Helmet>
      <Navbar onCTA={() => {}} />

      <main className="flex-1 flex items-center justify-center px-4 pt-24 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl w-full text-center"
        >
          <div className="w-20 h-20 rounded-full bg-lime/15 text-lime flex items-center justify-center mx-auto mb-8">
            <CheckCircle2 className="w-10 h-10" strokeWidth={2} />
          </div>
          <h1 className="font-display text-4xl md:text-6xl font-medium leading-[1.05] tracking-tight text-balance mb-6">
            Agradecemos seu contato!
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto mb-10">
            Recebemos suas informações com sucesso. Um dos nossos consultores
            entrará em contato em até <span className="text-foreground font-medium">1 dia útil</span>{" "}
            para entender melhor seu desafio e indicar o próximo passo.
          </p>
          <Button asChild variant="cta" size="xl">
            <Link to="/">
              <ArrowLeft className="w-4 h-4 mr-1" /> Voltar para a página inicial
            </Link>
          </Button>
        </motion.div>
      </main>
    </div>
  );
};

export default Obrigado;
