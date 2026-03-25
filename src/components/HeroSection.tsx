import { useEffect, useRef, useState } from "react";
import Icon from "@/components/ui/icon";

const stats = [
  { value: "30%", label: "детей подвергаются кибербуллингу", icon: "AlertTriangle", color: "rose" },
  { value: "120%", label: "рост жертв киберпреступлений", icon: "TrendingUp", color: "violet" },
  { value: "81%", label: "родителей хотят обучения", icon: "Users", color: "cyan" },
  { value: "100", label: "школ в пилотной программе", icon: "School", color: "emerald" },
];

const threats = [
  { icon: "MessageSquareWarning", label: "Кибербуллинг", color: "#f43f5e" },
  { icon: "Fish", label: "Фишинг", color: "#a855f7" },
  { icon: "Gamepad2", label: "Игровое мошенничество", color: "#00c6ff" },
  { icon: "Eye", label: "Нежелательный контент", color: "#10b981" },
];

const CountUp = ({ target, suffix = "" }: { target: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1500;
          const steps = 60;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-16 pb-12 overflow-hidden mesh-bg">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-[hsl(var(--cyan)/0.05)] blur-3xl animate-float" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-[hsl(var(--violet)/0.06)] blur-3xl animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 right-1/3 w-64 h-64 rounded-full bg-[hsl(var(--emerald)/0.04)] blur-3xl animate-float" style={{ animationDelay: "1s" }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex justify-center mb-8 animate-fade-in-up">
          <div className="relative w-48 h-48 sm:w-64 sm:h-64">
            <img
              src="https://cdn.poehali.dev/projects/2b1a7b94-cb92-4294-9596-8d7eb8bbe480/files/356d82b9-bd69-4cd8-8e30-a0dcc75d8c4c.jpg"
              alt="КиберЩит"
              className="w-full h-full object-cover rounded-3xl glow-cyan animate-float"
            />
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-background/40 to-transparent" />
          </div>
        </div>

        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-6 text-sm text-muted-foreground">
            <span className="w-2 h-2 rounded-full bg-[hsl(var(--emerald))] animate-pulse" />
            Платформа цифровой безопасности детей · Россия 2026
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-display font-black leading-tight mb-6">
            <span className="gradient-text">КиберЩит</span>
            <br />
            <span className="text-foreground">для ваших детей</span>
          </h1>

          <p className="max-w-2xl mx-auto text-lg sm:text-xl text-muted-foreground leading-relaxed mb-10">
            ИИ-мониторинг активности, образовательные курсы и партнёрство с МВД — комплексная защита несовершеннолетних от угроз в интернете
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => document.getElementById("monitoring")?.scrollIntoView({ behavior: "smooth" })}
              className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-[hsl(var(--cyan))] to-[hsl(var(--violet))] text-background font-semibold text-lg hover:opacity-90 transition-all hover:scale-105 glow-cyan"
            >
              <Icon name="Shield" size={20} />
              Начать защиту бесплатно
            </button>
            <button
              onClick={() => document.getElementById("education")?.scrollIntoView({ behavior: "smooth" })}
              className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-border bg-secondary text-foreground font-semibold text-lg hover:bg-secondary/80 transition-all hover:scale-105"
            >
              <Icon name="BookOpen" size={20} />
              Образовательная программа
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="gradient-border card-hover rounded-2xl p-6 text-center animate-fade-in-up"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className={`w-10 h-10 rounded-lg mx-auto mb-3 flex items-center justify-center bg-[hsl(var(--${stat.color})/0.15)]`}>
                <Icon name={stat.icon} size={20} className={`text-[hsl(var(--${stat.color}))]`} />
              </div>
              <div className="text-3xl font-display font-black stat-counter mb-1">
                {stat.value}
              </div>
              <div className="text-xs text-muted-foreground leading-tight">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-sm text-muted-foreground mb-6">Защищаем от угроз</p>
          <div className="flex flex-wrap justify-center gap-3">
            {threats.map((threat) => (
              <div
                key={threat.label}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border text-sm font-medium hover:scale-105 transition-transform cursor-default"
                style={{ borderColor: `${threat.color}30` }}
              >
                <Icon name={threat.icon} size={14} style={{ color: threat.color }} />
                <span style={{ color: threat.color }}>{threat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <Icon name="ChevronDown" size={24} className="text-muted-foreground" />
      </div>
    </section>
  );
};

export default HeroSection;