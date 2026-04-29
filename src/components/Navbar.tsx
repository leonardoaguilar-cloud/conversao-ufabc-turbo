import { Button } from "@/components/ui/button";
import ufabcLogo from "@/assets/logo-horizontal-ufabc-jr.webp";
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
      <div className="container max-w-7xl flex items-center justify-between h-16 md:h-20 bg-ink">
        <a href="#top" className="flex items-center" aria-label="UFABC Jr. - início">
          <img
            src={ufabcLogo}
            alt="UFABC Jr."
            className="h-8 w-auto object-contain md:h-10"
          />
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-foreground/80">
          <a href="#servicos" className="transition-colors text-lime">Serviços</a>
          <a href="#sobre" className="transition-colors text-lime">Sobre</a>
          <a href="#contato" className="transition-colors text-lime">Contato</a>
        </nav>

        <Button variant="cta" size="default" onClick={onCTA}>
          Diagnóstico grátis
        </Button>
      </div>
    </header>
  );
};
