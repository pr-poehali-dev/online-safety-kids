import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-secondary/30 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[hsl(var(--cyan))] to-[hsl(var(--violet))] flex items-center justify-center">
                <Icon name="Shield" size={16} className="text-background" />
              </div>
              <span className="font-display font-bold text-lg gradient-text">КиберЩит</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Комплексная платформа защиты детей от угроз в интернете. Бесплатно для семей, интегрировано в школьные программы.
            </p>
            <div className="flex items-center gap-3 mt-4">
              <span className="text-xs text-muted-foreground">При поддержке:</span>
              <span className="text-xs px-2 py-1 rounded bg-secondary text-muted-foreground">СИНВ</span>
              <span className="text-xs px-2 py-1 rounded bg-secondary text-muted-foreground">МВД РФ</span>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-4">Платформа</h4>
            <ul className="space-y-2">
              {["Образование", "Мониторинг", "МВД-партнёры", "Сообщество", "Для школ"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-4">Поддержка</h4>
            <ul className="space-y-2">
              {["Справочный центр", "Политика конфиденциальности", "Условия использования", "Контакты"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{item}</a>
                </li>
              ))}
            </ul>
            <div className="mt-4 flex items-center gap-1.5 text-sm text-[hsl(var(--rose))]">
              <Icon name="Phone" size={14} />
              <a href="tel:88002000122" className="hover:underline">8-800-2000-122</a>
            </div>
            <div className="text-xs text-muted-foreground mt-1">Детский телефон доверия</div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between pt-6 border-t border-border gap-4">
          <p className="text-xs text-muted-foreground">© 2026 КиберЩит · Все права защищены</p>
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <Icon name="Lock" size={12} />
            Данные зашифрованы end-to-end
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
