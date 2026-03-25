import { useState, useEffect } from "react";
import Icon from "@/components/ui/icon";

const navLinks = [
  { id: "education", label: "Образование", icon: "BookOpen" },
  { id: "monitoring", label: "Мониторинг", icon: "Shield" },
  { id: "mvd", label: "МВД-партнёры", icon: "BadgeCheck" },
  { id: "community", label: "Сообщество", icon: "Users" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setActive(id);
      setMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-xl border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2 group"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[hsl(var(--cyan))] to-[hsl(var(--violet))] flex items-center justify-center animate-pulse-ring">
              <Icon name="Shield" size={16} className="text-background" />
            </div>
            <span className="font-display font-bold text-lg gradient-text">
              КиберЩит
            </span>
          </button>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  active === link.id
                    ? "tab-active"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                }`}
              >
                <Icon name={link.icon} size={14} />
                {link.label}
              </button>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => scrollTo("monitoring")}
              className="px-4 py-2 rounded-lg bg-gradient-to-r from-[hsl(var(--cyan))] to-[hsl(var(--violet))] text-background text-sm font-semibold hover:opacity-90 transition-opacity"
            >
              Начать бесплатно
            </button>
          </div>

          <button
            className="md:hidden p-2 rounded-lg hover:bg-secondary transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Icon name={menuOpen ? "X" : "Menu"} size={20} />
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border px-4 pb-4">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="flex items-center gap-2 w-full px-3 py-3 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary transition-all"
            >
              <Icon name={link.icon} size={16} />
              {link.label}
            </button>
          ))}
          <button
            onClick={() => scrollTo("monitoring")}
            className="mt-2 w-full px-4 py-2.5 rounded-lg bg-gradient-to-r from-[hsl(var(--cyan))] to-[hsl(var(--violet))] text-background text-sm font-semibold"
          >
            Начать бесплатно
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
