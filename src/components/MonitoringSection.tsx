import { useState } from "react";
import Icon from "@/components/ui/icon";

const children = [
  { id: 1, name: "Алиса", age: 12, avatar: "👧", status: "safe", platform: "ВКонтакте" },
  { id: 2, name: "Максим", age: 15, avatar: "👦", status: "warning", platform: "Telegram" },
  { id: 3, name: "Соня", age: 10, avatar: "👧", status: "safe", platform: "Roblox" },
];

const alerts = [
  {
    id: 1,
    child: "Максим",
    type: "warning",
    icon: "MessageSquareWarning",
    title: "Подозрительный контакт",
    desc: "Незнакомый пользователь отправил ссылку в Telegram",
    time: "5 мин назад",
    color: "rose",
  },
  {
    id: 2,
    child: "Алиса",
    type: "info",
    icon: "Clock",
    title: "Превышено время экрана",
    desc: "ВКонтакте: 3 часа 20 минут сегодня",
    time: "1 час назад",
    color: "violet",
  },
  {
    id: 3,
    child: "Соня",
    type: "success",
    icon: "Trophy",
    title: "Курс завершён",
    desc: "Пройден урок «Безопасность в играх»",
    time: "2 часа назад",
    color: "emerald",
  },
];

const activityData = [
  { platform: "ВКонтакте", icon: "Users", time: "2ч 15м", risk: 12, color: "#00c6ff" },
  { platform: "Telegram", icon: "MessageCircle", time: "1ч 40м", risk: 67, color: "#a855f7" },
  { platform: "Roblox", icon: "Gamepad2", time: "3ч 05м", risk: 23, color: "#10b981" },
  { platform: "YouTube", icon: "Play", time: "0ч 55м", risk: 8, color: "#f43f5e" },
];

const colorMap: Record<string, string> = {
  rose: "hsl(var(--rose))",
  violet: "hsl(var(--violet))",
  emerald: "hsl(var(--emerald))",
  cyan: "hsl(var(--cyan))",
};

const MonitoringSection = () => {
  const [selectedChild, setSelectedChild] = useState(children[1]);
  const [notifEnabled, setNotifEnabled] = useState(true);

  return (
    <section id="monitoring" className="py-24 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[hsl(var(--violet)/0.04)] blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[hsl(var(--violet)/0.1)] border border-[hsl(var(--violet)/0.2)] text-[hsl(var(--violet))] text-sm font-medium mb-4">
            <Icon name="Shield" size={14} />
            Мониторинг
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-black mb-4">
            ИИ-мониторинг <span className="gradient-text">в реальном времени</span>
          </h2>
          <p className="max-w-xl mx-auto text-muted-foreground">
            Отслеживаем активность в соцсетях, мессенджерах и играх — мгновенные уведомления при угрозе
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="gradient-border rounded-2xl p-6 animate-fade-in-up">
            <div className="flex items-center justify-between mb-5">
              <h3 className="font-display font-bold">Дети</h3>
              <button className="text-xs px-3 py-1.5 rounded-lg bg-gradient-to-r from-[hsl(var(--cyan))] to-[hsl(var(--violet))] text-background font-semibold">
                + Добавить
              </button>
            </div>
            <div className="space-y-3">
              {children.map((child) => (
                <button
                  key={child.id}
                  onClick={() => setSelectedChild(child)}
                  className={`w-full flex items-center gap-3 p-3 rounded-xl transition-all text-left ${
                    selectedChild.id === child.id
                      ? "bg-[hsl(var(--cyan)/0.1)] border border-[hsl(var(--cyan)/0.3)]"
                      : "hover:bg-secondary border border-transparent"
                  }`}
                >
                  <span className="text-2xl">{child.avatar}</span>
                  <div className="flex-1">
                    <div className="font-semibold text-sm">{child.name}</div>
                    <div className="text-xs text-muted-foreground">{child.age} лет · {child.platform}</div>
                  </div>
                  <div className={`w-2.5 h-2.5 rounded-full ${child.status === "safe" ? "bg-[hsl(var(--emerald))]" : "bg-[hsl(var(--rose))] animate-pulse"}`} />
                </button>
              ))}
            </div>

            <div className="mt-5 pt-5 border-t border-border">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-medium">Push-уведомления</span>
                <button
                  onClick={() => setNotifEnabled(!notifEnabled)}
                  className={`w-11 h-6 rounded-full transition-all relative ${notifEnabled ? "bg-[hsl(var(--cyan))]" : "bg-secondary"}`}
                >
                  <span className={`absolute top-0.5 w-5 h-5 rounded-full bg-white transition-all ${notifEnabled ? "left-[22px]" : "left-0.5"}`} />
                </button>
              </div>
              <p className="text-xs text-muted-foreground">
                {notifEnabled ? "Уведомления включены" : "Уведомления выключены"}
              </p>
            </div>
          </div>

          <div className="gradient-border rounded-2xl p-6 animate-fade-in-up delay-100">
            <div className="flex items-center gap-3 mb-5">
              <span className="text-3xl">{selectedChild.avatar}</span>
              <div>
                <h3 className="font-display font-bold">{selectedChild.name}</h3>
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <span className={`w-1.5 h-1.5 rounded-full ${selectedChild.status === "safe" ? "bg-[hsl(var(--emerald))]" : "bg-[hsl(var(--rose))] animate-pulse"}`} />
                  {selectedChild.status === "safe" ? "Всё в порядке" : "Требует внимания"}
                </div>
              </div>
            </div>

            <div className="space-y-3 mb-5">
              {activityData.map((item) => (
                <div key={item.platform} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: `${item.color}20` }}>
                    <Icon name={item.icon} size={14} style={{ color: item.color }} />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between text-xs mb-1">
                      <span className="font-medium">{item.platform}</span>
                      <span className="text-muted-foreground">{item.time}</span>
                    </div>
                    <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all"
                        style={{
                          width: `${item.risk}%`,
                          background: item.risk > 50 ? "hsl(var(--rose))" : item.risk > 25 ? "hsl(var(--violet))" : item.color,
                        }}
                      />
                    </div>
                  </div>
                  <span
                    className="text-xs font-bold w-8 text-right"
                    style={{ color: item.risk > 50 ? "hsl(var(--rose))" : item.risk > 25 ? "hsl(var(--violet))" : "hsl(var(--emerald))" }}
                  >
                    {item.risk}%
                  </span>
                </div>
              ))}
            </div>

            <div className="text-xs text-muted-foreground text-center pt-3 border-t border-border">
              Индекс риска по активности за сегодня
            </div>
          </div>

          <div className="gradient-border rounded-2xl p-6 animate-fade-in-up delay-200">
            <div className="flex items-center justify-between mb-5">
              <h3 className="font-display font-bold">Уведомления</h3>
              <span className="w-5 h-5 rounded-full bg-[hsl(var(--rose))] text-white text-xs flex items-center justify-center font-bold">
                {alerts.filter(a => a.type === "warning").length}
              </span>
            </div>
            <div className="space-y-3">
              {alerts.map((alert, i) => (
                <div
                  key={alert.id}
                  className="flex gap-3 p-3 rounded-xl border transition-all animate-fade-in-up"
                  style={{
                    borderColor: `${colorMap[alert.color]}30`,
                    background: `${colorMap[alert.color]}08`,
                    animationDelay: `${i * 0.1}s`,
                  }}
                >
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: `${colorMap[alert.color]}20` }}
                  >
                    <Icon name={alert.icon} size={16} style={{ color: colorMap[alert.color] }} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <span className="text-sm font-semibold leading-tight">{alert.title}</span>
                      <span className="text-xs text-muted-foreground whitespace-nowrap flex-shrink-0">{alert.time}</span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">{alert.desc}</p>
                    <span className="text-xs mt-1 inline-block" style={{ color: colorMap[alert.color] }}>{alert.child}</span>
                  </div>
                </div>
              ))}
            </div>
            <button className="mt-4 w-full py-2.5 text-sm text-center text-muted-foreground hover:text-foreground border border-border rounded-xl hover:border-[hsl(var(--cyan)/0.3)] transition-all">
              Все уведомления →
            </button>
          </div>
        </div>

        <div className="mt-8 gradient-border rounded-2xl p-6 animate-fade-in-up">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { icon: "Activity", label: "Платформ отслеживается", value: "15+", color: "cyan" },
              { icon: "Zap", label: "Время реакции ИИ", value: "< 3 сек", color: "violet" },
              { icon: "Bell", label: "Точность алертов", value: "94%", color: "emerald" },
              { icon: "Lock", label: "Данные зашифрованы", value: "E2E", color: "rose" },
            ].map((item) => (
              <div key={item.label}>
                <div className={`w-10 h-10 rounded-xl mx-auto mb-2 flex items-center justify-center bg-[hsl(var(--${item.color})/0.1)]`}>
                  <Icon name={item.icon} size={18} className={`text-[hsl(var(--${item.color}))]`} />
                </div>
                <div className="text-2xl font-display font-black stat-counter">{item.value}</div>
                <div className="text-xs text-muted-foreground mt-1">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MonitoringSection;
