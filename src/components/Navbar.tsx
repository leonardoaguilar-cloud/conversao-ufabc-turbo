import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

interface NavbarProps {
  onCTA: () => void;
}

export const Navbar = ({ onCTA }: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-lg border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="container max-w-7xl flex items-center justify-between h-16 md:h-20 bg-muted-foreground">
        <a href="#top" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-lg bg-ink text-lime flex items-center justify-center font-display font-bold text-lg group-hover:bg-lime group-hover:text-ink transition-colors">
            U
          </div>
          <div className="leading-none">
            <div className="font-display font-semibold text-lg tracking-tight">UFABC Jr.</div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">consultoria</div>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-foreground/80">
          <a href="#servicos" className="hover:text-foreground transition-colors">Serviços</a>
          <a href="#sobre" className="hover:text-foreground transition-colors">Sobre</a>
          <a href="#contato" className="hover:text-foreground transition-colors">Contato</a>
        </nav>

        <Button variant="cta" size="default" onClick={onCTA}>
          Diagnóstico grátis
        </Button>
      </div>
    </header>
  );
};
