import Icon from "@/components/ui/icon";

const partners = [
  {
    name: "МВД России",
    desc: "Официальная горячая линия по киберпреступлениям, прямая передача инцидентов",
    icon: "BadgeCheck",
    color: "cyan",
    contact: "8-800-222-74-47",
    type: "Горячая линия",
  },
  {
    name: "Роскомнадзор",
    desc: "Блокировка вредоносных ресурсов, жалобы на незаконный контент",
    icon: "ShieldOff",
    color: "violet",
    contact: "rkn.gov.ru",
    type: "Регулятор",
  },
  {
    name: "Лига безопасного интернета",
    desc: "Фильтрация контента, экспертиза угроз, обучение педагогов",
    icon: "Globe",
    color: "emerald",
    contact: "ligainternet.ru",
    type: "НКО",
  },
  {
    name: "Детский телефон доверия",
    desc: "Психологическая помощь детям и родителям 24/7, анонимно и бесплатно",
    icon: "Phone",
    color: "rose",
    contact: "8-800-2000-122",
    type: "Поддержка",
  },
];

const steps = [
  {
    step: "01",
    title: "ИИ обнаруживает угрозу",
    desc: "Система автоматически фиксирует инцидент с доказательной базой",
    icon: "Cpu",
    color: "cyan",
  },
  {
    step: "02",
    title: "Уведомление родителей",
    desc: "Немедленный алерт с деталями и рекомендациями по действиям",
    icon: "Bell",
    color: "violet",
  },
  {
    step: "03",
    title: "Автоматическая заявка в МВД",
    desc: "Пакет доказательств передаётся в уполномоченные органы одним нажатием",
    icon: "Send",
    color: "emerald",
  },
  {
    step: "04",
    title: "Поддержка до решения",
    desc: "Юридическое сопровождение и психологическая помощь на каждом этапе",
    icon: "HeartHandshake",
    color: "rose",
  },
];

const colorMap: Record<string, string> = {
  cyan: "hsl(var(--cyan))",
  violet: "hsl(var(--violet))",
  emerald: "hsl(var(--emerald))",
  rose: "hsl(var(--rose))",
};

const MvdSection = () => {
  return (
    <section id="mvd" className="py-24 relative">
      <div className="absolute inset-0 pointer-events-none mesh-bg opacity-40" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[hsl(var(--emerald)/0.1)] border border-[hsl(var(--emerald)/0.2)] text-[hsl(var(--emerald))] text-sm font-medium mb-4">
            <Icon name="BadgeCheck" size={14} />
            Государственные партнёры
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-black mb-4">
            Связь с <span className="gradient-text">МВД и ведомствами</span>
          </h2>
          <p className="max-w-xl mx-auto text-muted-foreground">
            Прямая интеграция с правоохранительными органами — от инцидента до заявления в один клик
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {partners.map((partner, i) => (
            <div
              key={partner.name}
              className="gradient-border card-hover rounded-2xl p-6 animate-fade-in-up"
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                style={{ background: `${colorMap[partner.color]}20` }}
              >
                <Icon name={partner.icon} size={22} style={{ color: colorMap[partner.color] }} />
              </div>
              <span
                className="text-xs px-2.5 py-1 rounded-full font-medium mb-3 inline-block"
                style={{ background: `${colorMap[partner.color]}15`, color: colorMap[partner.color] }}
              >
                {partner.type}
              </span>
              <h3 className="font-display font-bold mb-2">{partner.name}</h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{partner.desc}</p>
              <div
                className="flex items-center gap-2 text-sm font-semibold"
                style={{ color: colorMap[partner.color] }}
              >
                <Icon name="ArrowRight" size={14} />
                {partner.contact}
              </div>
            </div>
          ))}
        </div>

        <div className="gradient-border rounded-3xl p-8 lg:p-12">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-display font-black mb-2">Как работает реагирование</h3>
            <p className="text-muted-foreground">Автоматизированный процесс от угрозы до правовой защиты</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
            <div className="hidden md:block absolute top-8 left-[15%] right-[15%] h-px bg-gradient-to-r from-[hsl(var(--cyan)/0.3)] via-[hsl(var(--violet)/0.3)] to-[hsl(var(--emerald)/0.3)]" />
            {steps.map((step, i) => (
              <div key={step.step} className="text-center animate-fade-in-up" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="relative inline-flex mb-4">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center"
                    style={{ background: `${colorMap[step.color]}20`, border: `2px solid ${colorMap[step.color]}40` }}
                  >
                    <Icon name={step.icon} size={24} style={{ color: colorMap[step.color] }} />
                  </div>
                  <span
                    className="absolute -top-2 -right-2 w-6 h-6 rounded-full text-xs font-black flex items-center justify-center text-background"
                    style={{ background: colorMap[step.color] }}
                  >
                    {i + 1}
                  </span>
                </div>
                <h4 className="font-semibold mb-2 text-sm">{step.title}</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <button className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[hsl(var(--cyan))] to-[hsl(var(--violet))] text-background font-semibold hover:opacity-90 transition-all hover:scale-105">
              <Icon name="Send" size={16} />
              Подать заявление онлайн
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MvdSection;
