import { useState } from "react";
import Icon from "@/components/ui/icon";

const courses = [
  {
    id: 1,
    title: "Цифровая гигиена",
    description: "Основы безопасного поведения в интернете для детей 7–12 лет",
    lessons: 8,
    duration: "2 часа",
    level: "Начальный",
    icon: "Sparkles",
    color: "cyan",
    progress: 0,
    tags: ["Дети 7–12", "Родители"],
  },
  {
    id: 2,
    title: "Защита от кибербуллинга",
    description: "Как распознать травлю онлайн и что делать, если это случилось",
    lessons: 6,
    duration: "1.5 часа",
    level: "Начальный",
    icon: "ShieldCheck",
    color: "violet",
    progress: 45,
    tags: ["Дети 10–16", "Школы"],
  },
  {
    id: 3,
    title: "Мошенники в играх",
    description: "Распознаём скам в онлайн-играх, защищаем аккаунты и средства",
    lessons: 5,
    duration: "1 час",
    level: "Средний",
    icon: "Gamepad2",
    color: "emerald",
    progress: 70,
    tags: ["Подростки", "Геймеры"],
  },
  {
    id: 4,
    title: "Фишинг и мошенничество",
    description: "Как распознать поддельные сайты и не попасться на уловки",
    lessons: 7,
    duration: "1.5 часа",
    level: "Средний",
    icon: "Fish",
    color: "rose",
    progress: 0,
    tags: ["Родители", "Все возрасты"],
  },
  {
    id: 5,
    title: "Приватность в соцсетях",
    description: "Настройки конфиденциальности, геолокация и персональные данные",
    lessons: 9,
    duration: "2.5 часа",
    level: "Продвинутый",
    icon: "Lock",
    color: "cyan",
    progress: 20,
    tags: ["Подростки 13+", "Родители"],
  },
  {
    id: 6,
    title: "Цифровой след",
    description: "Что остаётся в интернете навсегда и как управлять своей репутацией",
    lessons: 4,
    duration: "1 час",
    level: "Начальный",
    icon: "Footprints",
    color: "violet",
    progress: 0,
    tags: ["Все возрасты"],
  },
];

const quizQuestions = [
  {
    q: "Незнакомец в игре просит поделиться данными аккаунта в обмен на редкий предмет. Что делать?",
    options: ["Поделиться, если предмет дорогой", "Никогда не давать данные аккаунта никому", "Спросить родителей, а потом решить", "Попросить доказательства честности"],
    correct: 1,
    explanation: "Данные аккаунта не передаются никому — даже другу. Это первое правило цифровой безопасности.",
  },
  {
    q: "Ты получил ссылку от «друга» с просьбой срочно войти в аккаунт. Сайт выглядит знакомо. Что делать?",
    options: ["Войти — ведь это же друг прислал", "Проверить адрес сайта в адресной строке", "Ввести данные, но потом сменить пароль", "Отправить ссылку всем друзьям"],
    correct: 1,
    explanation: "Всегда проверяй URL. Фишинговые сайты копируют дизайн, но адрес отличается.",
  },
  {
    q: "Одноклассник распространяет обидные фото о тебе в чате. Как правильно поступить?",
    options: ["Ответить тем же", "Заблокировать и рассказать взрослым", "Сделать вид, что не замечаешь", "Удалить аккаунт"],
    correct: 1,
    explanation: "Кибербуллинг — это правонарушение. Обязательно сохрани скриншоты и обратись к взрослым или в МВД.",
  },
];

const colorMap: Record<string, string> = {
  cyan: "hsl(var(--cyan))",
  violet: "hsl(var(--violet))",
  emerald: "hsl(var(--emerald))",
  rose: "hsl(var(--rose))",
};

const EducationSection = () => {
  const [activeTab, setActiveTab] = useState<"courses" | "quiz">("courses");
  const [quizStep, setQuizStep] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const handleAnswer = (idx: number) => {
    if (selected !== null) return;
    setSelected(idx);
    if (idx === quizQuestions[quizStep].correct) setScore((s) => s + 1);
  };

  const nextQuestion = () => {
    if (quizStep < quizQuestions.length - 1) {
      setQuizStep((s) => s + 1);
      setSelected(null);
    } else {
      setFinished(true);
    }
  };

  const resetQuiz = () => {
    setQuizStep(0);
    setSelected(null);
    setScore(0);
    setFinished(false);
  };

  return (
    <section id="education" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[hsl(var(--cyan)/0.1)] border border-[hsl(var(--cyan)/0.2)] text-[hsl(var(--cyan))] text-sm font-medium mb-4">
            <Icon name="BookOpen" size={14} />
            Образование
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-black mb-4">
            Знания — лучшая <span className="gradient-text">защита</span>
          </h2>
          <p className="max-w-xl mx-auto text-muted-foreground">
            Интерактивные курсы и тесты для детей, родителей и педагогов — в игровом формате
          </p>
        </div>

        <div className="flex gap-2 mb-8 p-1 bg-secondary rounded-xl w-fit mx-auto">
          <button
            onClick={() => setActiveTab("courses")}
            className={`px-6 py-2.5 rounded-lg text-sm font-semibold transition-all ${activeTab === "courses" ? "tab-active" : "text-muted-foreground hover:text-foreground"}`}
          >
            <span className="flex items-center gap-2"><Icon name="GraduationCap" size={14} />Курсы</span>
          </button>
          <button
            onClick={() => setActiveTab("quiz")}
            className={`px-6 py-2.5 rounded-lg text-sm font-semibold transition-all ${activeTab === "quiz" ? "tab-active" : "text-muted-foreground hover:text-foreground"}`}
          >
            <span className="flex items-center gap-2"><Icon name="HelpCircle" size={14} />Тест знаний</span>
          </button>
        </div>

        {activeTab === "courses" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {courses.map((course, i) => (
              <div
                key={course.id}
                className="gradient-border card-hover rounded-2xl p-6 flex flex-col animate-fade-in-up cursor-pointer group"
                style={{ animationDelay: `${i * 0.07}s` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ background: `${colorMap[course.color]}20` }}
                  >
                    <Icon name={course.icon} size={22} style={{ color: colorMap[course.color] }} />
                  </div>
                  <span
                    className="text-xs px-2.5 py-1 rounded-full font-medium"
                    style={{ background: `${colorMap[course.color]}15`, color: colorMap[course.color] }}
                  >
                    {course.level}
                  </span>
                </div>

                <h3 className="font-display font-bold text-lg mb-2 group-hover:gradient-text transition-all">{course.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 flex-1">{course.description}</p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {course.tags.map((tag) => (
                    <span key={tag} className="text-xs px-2 py-0.5 rounded-full bg-secondary text-muted-foreground">{tag}</span>
                  ))}
                </div>

                {course.progress > 0 && (
                  <div className="mb-3">
                    <div className="flex justify-between text-xs text-muted-foreground mb-1">
                      <span>Прогресс</span><span>{course.progress}%</span>
                    </div>
                    <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all"
                        style={{ width: `${course.progress}%`, background: colorMap[course.color] }}
                      />
                    </div>
                  </div>
                )}

                <div className="flex items-center justify-between text-xs text-muted-foreground pt-3 border-t border-border">
                  <span className="flex items-center gap-1"><Icon name="BookMarked" size={12} />{course.lessons} уроков</span>
                  <span className="flex items-center gap-1"><Icon name="Clock" size={12} />{course.duration}</span>
                  <button
                    className="text-xs font-semibold px-3 py-1.5 rounded-lg transition-all hover:opacity-80"
                    style={{ background: `${colorMap[course.color]}20`, color: colorMap[course.color] }}
                  >
                    {course.progress > 0 ? "Продолжить" : "Начать"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "quiz" && (
          <div className="max-w-2xl mx-auto">
            {!finished ? (
              <div className="gradient-border rounded-2xl p-8 animate-fade-in-up">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-sm text-muted-foreground">Вопрос {quizStep + 1} из {quizQuestions.length}</span>
                  <span className="text-sm font-semibold text-[hsl(var(--cyan))]">Счёт: {score}</span>
                </div>
                <div className="h-1 bg-secondary rounded-full mb-8 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-[hsl(var(--cyan))] to-[hsl(var(--violet))] transition-all duration-500"
                    style={{ width: `${((quizStep) / quizQuestions.length) * 100}%` }}
                  />
                </div>

                <h3 className="text-lg font-semibold mb-6 leading-relaxed">{quizQuestions[quizStep].q}</h3>

                <div className="space-y-3 mb-6">
                  {quizQuestions[quizStep].options.map((opt, idx) => {
                    let cls = "border-border bg-secondary text-foreground";
                    if (selected !== null) {
                      if (idx === quizQuestions[quizStep].correct) cls = "border-[hsl(var(--emerald))] bg-[hsl(var(--emerald)/0.1)] text-[hsl(var(--emerald))]";
                      else if (idx === selected && idx !== quizQuestions[quizStep].correct) cls = "border-[hsl(var(--rose))] bg-[hsl(var(--rose)/0.1)] text-[hsl(var(--rose))]";
                      else cls = "border-border bg-secondary/50 text-muted-foreground";
                    }
                    return (
                      <button
                        key={idx}
                        onClick={() => handleAnswer(idx)}
                        className={`w-full text-left px-4 py-3.5 rounded-xl border text-sm font-medium transition-all ${cls} ${selected === null ? "hover:border-[hsl(var(--cyan)/0.4)] hover:bg-[hsl(var(--cyan)/0.05)]" : ""}`}
                      >
                        <span className="flex items-center gap-3">
                          <span className="w-6 h-6 rounded-full border border-current flex items-center justify-center text-xs flex-shrink-0">{String.fromCharCode(65 + idx)}</span>
                          {opt}
                        </span>
                      </button>
                    );
                  })}
                </div>

                {selected !== null && (
                  <div className="mb-6 p-4 rounded-xl bg-secondary border border-border text-sm text-muted-foreground animate-fade-in-up">
                    <Icon name="Info" size={14} className="inline mr-2 text-[hsl(var(--cyan))]" />
                    {quizQuestions[quizStep].explanation}
                  </div>
                )}

                <button
                  onClick={nextQuestion}
                  disabled={selected === null}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-[hsl(var(--cyan))] to-[hsl(var(--violet))] text-background font-semibold disabled:opacity-40 disabled:cursor-not-allowed hover:opacity-90 transition-all"
                >
                  {quizStep < quizQuestions.length - 1 ? "Следующий вопрос →" : "Завершить тест"}
                </button>
              </div>
            ) : (
              <div className="gradient-border rounded-2xl p-8 text-center animate-fade-in-up">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[hsl(var(--cyan))] to-[hsl(var(--violet))] flex items-center justify-center mx-auto mb-6 animate-pulse-ring">
                  <Icon name="Trophy" size={36} className="text-background" />
                </div>
                <h3 className="text-2xl font-display font-black mb-2">Тест завершён!</h3>
                <p className="text-muted-foreground mb-6">
                  Вы ответили правильно на <span className="text-[hsl(var(--cyan))] font-bold text-xl">{score}</span> из {quizQuestions.length} вопросов
                </p>
                <div className="flex gap-3 justify-center">
                  <button onClick={resetQuiz} className="px-6 py-3 rounded-xl border border-border bg-secondary text-foreground font-semibold hover:bg-secondary/80 transition-all">
                    Пройти снова
                  </button>
                  <button
                    onClick={() => { setActiveTab("courses"); }}
                    className="px-6 py-3 rounded-xl bg-gradient-to-r from-[hsl(var(--cyan))] to-[hsl(var(--violet))] text-background font-semibold hover:opacity-90 transition-all"
                  >
                    К курсам
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default EducationSection;
