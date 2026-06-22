import { Button } from "@/components/ui/button";
import ufabcLogo from "@/assets/logo-horizontal-ufabc-jr.webp";
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

interface NavbarProps {
  onCTA: () => void;
}

export const Navbar = ({ onCTA }: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Handle hash scroll after navigation
  useEffect(() => {
    if (location.pathname === "/" && location.hash) {
      const id = location.hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: "smooth", block: "start" }), 50);
      }
    }
  }, [location]);

  const handleNav = (hash: string) => (e: React.MouseEvent) => {
    if (location.pathname === "/") {
      e.preventDefault();
      const id = hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        history.replaceState(null, "", `/#${id}`);
      } else if (id === "top") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
    // otherwise let react-router Link handle the navigation
  };

  const navItems = [
    { hash: "top", label: "Início" },
    { hash: "servicos", label: "Serviços" },
    { hash: "sobre", label: "Sobre nós" },
    { hash: "contato", label: "Contato" },
  ];

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 bg-ink ${
        scrolled ? "backdrop-blur-lg border-b border-border" : ""
      }`}
    >
      <div className="w-full flex items-center justify-between h-16 md:h-20 px-4 md:px-6">
        <Link
          to="/#top"
          onClick={handleNav("top")}
          className="flex items-center"
          aria-label="UFABC Jr. - início"
        >
          <img
            src={ufabcLogo}
            alt="UFABC Jr."
            className="h-8 w-auto object-contain md:h-10"
          />
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-foreground/80">
          {navItems.map((item) => (
            <Link
              key={item.hash}
              to={`/#${item.hash}`}
              onClick={handleNav(item.hash)}
              className="transition-colors text-lime"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Button variant="cta" size="default" onClick={onCTA}>
          Diagnóstico grátis
        </Button>
      </div>
    </header>
  );
};
