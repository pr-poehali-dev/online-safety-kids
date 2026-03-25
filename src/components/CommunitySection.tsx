import { useState } from "react";
import Icon from "@/components/ui/icon";

const posts = [
  {
    id: 1,
    author: "Елена М.",
    avatar: "👩",
    role: "Мама двоих детей",
    time: "2 часа назад",
    text: "Благодаря приложению узнала, что сын общается с подозрительным аккаунтом в Telegram. Поговорили, всё объяснила — теперь он сам рассказывает мне о странных контактах. КиберЩит реально помогает наладить диалог!",
    likes: 47,
    comments: 12,
    tag: "История успеха",
    tagColor: "emerald",
  },
  {
    id: 2,
    author: "Андрей К.",
    avatar: "👨",
    role: "Учитель информатики",
    time: "5 часов назад",
    text: "Внедрили образовательный модуль в 7 классах. Дети проходят тесты как игру — вовлечённость 89%. Видно, что материал усваивается: начали сами замечать фишинговые ссылки.",
    likes: 83,
    comments: 24,
    tag: "Опыт педагога",
    tagColor: "cyan",
  },
  {
    id: 3,
    author: "Марина П.",
    avatar: "👩‍💼",
    role: "Педагог-психолог",
    time: "1 день назад",
    text: "Кибербуллинг — это реальная травма. Хорошо, что система фиксирует инциденты и сразу подключает психолога. Уже помогли 3 детям из нашей школы выйти из тяжёлых ситуаций.",
    likes: 129,
    comments: 31,
    tag: "Психология",
    tagColor: "violet",
  },
];

const tips = [
  { icon: "Lock", tip: "Используй разные пароли для каждого аккаунта и включи двухфакторную аутентификацию", category: "Пароли" },
  { icon: "MapPin", tip: "Никогда не публикуй своё местоположение в реальном времени в соцсетях", category: "Геолокация" },
  { icon: "UserX", tip: "Принимай в друзья только знакомых людей из реальной жизни", category: "Соцсети" },
  { icon: "Link", tip: "Перед переходом по ссылке проверь адрес — мошенники копируют дизайн сайтов", category: "Фишинг" },
  { icon: "Download", tip: "Скачивай приложения только из официальных магазинов — App Store и Google Play", category: "Приложения" },
  { icon: "MessageSquare", tip: "Если что-то в интернете тебя пугает — сразу расскажи родителям или учителю", category: "Доверие" },
];

const colorMap: Record<string, string> = {
  cyan: "hsl(var(--cyan))",
  violet: "hsl(var(--violet))",
  emerald: "hsl(var(--emerald))",
  rose: "hsl(var(--rose))",
};

const CommunitySection = () => {
  const [likes, setLikes] = useState<Record<number, number>>(
    Object.fromEntries(posts.map((p) => [p.id, p.likes]))
  );
  const [liked, setLiked] = useState<Record<number, boolean>>({});
  const [tipIndex, setTipIndex] = useState(0);

  const toggleLike = (id: number) => {
    setLiked((prev) => {
      const isLiked = prev[id];
      setLikes((l) => ({ ...l, [id]: l[id] + (isLiked ? -1 : 1) }));
      return { ...prev, [id]: !isLiked };
    });
  };

  const currentTip = tips[tipIndex];

  return (
    <section id="community" className="py-24 relative pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[hsl(var(--rose)/0.1)] border border-[hsl(var(--rose)/0.2)] text-[hsl(var(--rose))] text-sm font-medium mb-4">
            <Icon name="Users" size={14} />
            Сообщество
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-black mb-4">
            Вместе <span className="gradient-text">безопаснее</span>
          </h2>
          <p className="max-w-xl mx-auto text-muted-foreground">
            Родители, педагоги и специалисты делятся опытом и помогают друг другу
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          <div className="lg:col-span-2 space-y-5">
            {posts.map((post, i) => (
              <div
                key={post.id}
                className="gradient-border rounded-2xl p-6 animate-fade-in-up"
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <div className="flex items-start gap-4">
                  <span className="text-3xl flex-shrink-0">{post.avatar}</span>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <span className="font-semibold text-sm">{post.author}</span>
                      <span className="text-xs text-muted-foreground">{post.role}</span>
                      <span className="text-xs text-muted-foreground ml-auto">{post.time}</span>
                    </div>
                    <span
                      className="text-xs px-2.5 py-0.5 rounded-full font-medium mb-3 inline-block"
                      style={{ background: `${colorMap[post.tagColor]}15`, color: colorMap[post.tagColor] }}
                    >
                      {post.tag}
                    </span>
                    <p className="text-sm text-muted-foreground leading-relaxed">{post.text}</p>

                    <div className="flex items-center gap-4 mt-4 pt-3 border-t border-border">
                      <button
                        onClick={() => toggleLike(post.id)}
                        className={`flex items-center gap-1.5 text-sm transition-all hover:scale-105 ${liked[post.id] ? "text-[hsl(var(--rose))]" : "text-muted-foreground hover:text-foreground"}`}
                      >
                        <Icon name={liked[post.id] ? "Heart" : "HeartOff"} size={15} />
                        {likes[post.id]}
                      </button>
                      <button className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors">
                        <Icon name="MessageCircle" size={15} />
                        {post.comments}
                      </button>
                      <button className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors ml-auto">
                        <Icon name="Share2" size={15} />
                        Поделиться
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <div className="gradient-border rounded-2xl p-5">
              <div className="flex gap-3">
                <span className="text-2xl">✍️</span>
                <input
                  type="text"
                  placeholder="Поделитесь своим опытом или задайте вопрос..."
                  className="flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
                />
                <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-[hsl(var(--cyan))] to-[hsl(var(--violet))] text-background text-sm font-semibold hover:opacity-90 transition-opacity">
                  Опубликовать
                </button>
              </div>
            </div>
          </div>

          <div className="space-y-5">
            <div className="gradient-border rounded-2xl p-6 animate-fade-in-up">
              <h3 className="font-display font-bold mb-4 flex items-center gap-2">
                <Icon name="Lightbulb" size={16} className="text-[hsl(var(--cyan))]" />
                Совет дня
              </h3>
              <div className="mb-4 p-4 rounded-xl bg-secondary">
                <span className="text-xs font-semibold text-[hsl(var(--cyan))] mb-2 block">{currentTip.category}</span>
                <p className="text-sm leading-relaxed">{currentTip.tip}</p>
              </div>
              <div className="flex items-center justify-between">
                <button
                  onClick={() => setTipIndex((i) => (i - 1 + tips.length) % tips.length)}
                  className="p-2 rounded-lg hover:bg-secondary transition-colors"
                >
                  <Icon name="ChevronLeft" size={16} />
                </button>
                <div className="flex gap-1">
                  {tips.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setTipIndex(i)}
                      className={`w-1.5 h-1.5 rounded-full transition-all ${i === tipIndex ? "bg-[hsl(var(--cyan))] w-4" : "bg-border"}`}
                    />
                  ))}
                </div>
                <button
                  onClick={() => setTipIndex((i) => (i + 1) % tips.length)}
                  className="p-2 rounded-lg hover:bg-secondary transition-colors"
                >
                  <Icon name="ChevronRight" size={16} />
                </button>
              </div>
            </div>

            <div className="gradient-border rounded-2xl p-6 animate-fade-in-up delay-100">
              <h3 className="font-display font-bold mb-4 flex items-center gap-2">
                <Icon name="BarChart3" size={16} className="text-[hsl(var(--violet))]" />
                Статистика платформы
              </h3>
              <div className="space-y-4">
                {[
                  { label: "Семей защищено", value: "12 847", icon: "Home", color: "cyan" },
                  { label: "Угроз заблокировано", value: "3 291", icon: "ShieldCheck", color: "emerald" },
                  { label: "Курсов завершено", value: "28 519", icon: "GraduationCap", color: "violet" },
                  { label: "Школ-партнёров", value: "214", icon: "School", color: "rose" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-3">
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: `${colorMap[item.color]}20` }}
                    >
                      <Icon name={item.icon} size={14} style={{ color: colorMap[item.color] }} />
                    </div>
                    <span className="text-sm text-muted-foreground flex-1">{item.label}</span>
                    <span className="font-bold text-sm">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="gradient-border rounded-2xl p-6 animate-fade-in-up delay-200">
              <h3 className="font-display font-bold mb-3 flex items-center gap-2">
                <Icon name="Calendar" size={16} className="text-[hsl(var(--emerald))]" />
                Ближайшие мероприятия
              </h3>
              <div className="space-y-3">
                {[
                  { title: "Вебинар для родителей", date: "28 марта", type: "Онлайн" },
                  { title: "Урок в школе №23", date: "2 апреля", type: "Офлайн" },
                  { title: "Хакатон по кибербезопасности", date: "10 апреля", type: "Гибридный" },
                ].map((ev) => (
                  <div key={ev.title} className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-secondary transition-colors cursor-pointer">
                    <div className="text-center w-10 flex-shrink-0">
                      <div className="text-xs text-[hsl(var(--cyan))] font-bold">{ev.date.split(" ")[1]}</div>
                      <div className="text-lg font-black">{ev.date.split(" ")[0]}</div>
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-medium">{ev.title}</div>
                      <div className="text-xs text-muted-foreground">{ev.type}</div>
                    </div>
                    <Icon name="ChevronRight" size={14} className="text-muted-foreground" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
