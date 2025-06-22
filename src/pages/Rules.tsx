import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const Rules = () => {
  const generalRules = [
    "Уважительное отношение к другим игрокам",
    "Запрещено использование читов, багов и эксплойтов",
    "Запрещен гриф чужих построек без разрешения",
    "Нецензурная лексика допустима в умеренных количествах",
    "Запрещена торговля внутриигровых ресурсов за реальные деньги",
    "Администрация имеет право изменять правила без предварительного уведомления",
  ];

  const farmRules = [
    {
      category: "Разрешенные фермы",
      items: [
        "Фермы мобов (спавнеры и естественный спавн)",
        "Фермы растений всех видов",
        "Фермы животных",
        "Железные фермы (големы)",
        "Фермы опыта",
        "Фермы камня и булыжника",
      ],
    },
    {
      category: "Ограничения по фермам",
      items: [
        "Максимум 200 мобов в одном чанке",
        "Фермы должны иметь выключатель",
        "Запрещено строить лаг-машины",
        "Дюп-фермы строго запрещены",
        "AFK-фермы разрешены с ограничением по времени (до 8 часов)",
        "Фермы TNT требуют согласования с администрацией",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="font-oswald font-bold text-4xl md:text-5xl text-white mb-4">
              Правила сервера
            </h1>
            <p className="text-lg text-muted-foreground">
              Изучите правила перед началом игры на Fortol
            </p>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            {/* Sidebar Navigation */}
            <div className="lg:col-span-1">
              <Card className="bg-card border-stone sticky top-24">
                <CardHeader>
                  <CardTitle className="font-oswald text-lg text-white">
                    Навигация
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <a
                    href="#general"
                    className="block text-muted-foreground hover:text-crimson transition-colors py-2 border-l-2 border-transparent hover:border-crimson pl-3"
                  >
                    Общие правила
                  </a>
                  <a
                    href="#farms"
                    className="block text-muted-foreground hover:text-crimson transition-colors py-2 border-l-2 border-transparent hover:border-crimson pl-3"
                  >
                    Правила ферм
                  </a>
                </CardContent>
              </Card>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3 space-y-8">
              {/* General Rules */}
              <section id="general">
                <Card className="bg-card border-stone">
                  <CardHeader>
                    <CardTitle className="font-oswald text-2xl text-white">
                      Общие правила
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {generalRules.map((rule, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <div className="w-6 h-6 bg-gradient-to-br from-crimson to-blood rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-white text-sm font-bold">
                              {index + 1}
                            </span>
                          </div>
                          <p className="text-foreground">{rule}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </section>

              {/* Farm Rules */}
              <section id="farms">
                <Card className="bg-card border-stone">
                  <CardHeader>
                    <CardTitle className="font-oswald text-2xl text-white">
                      Правила ферм
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-8">
                    {farmRules.map((section, sectionIndex) => (
                      <div key={sectionIndex}>
                        <h3 className="font-oswald font-semibold text-xl text-white mb-4">
                          {section.category}
                        </h3>
                        <div className="space-y-3">
                          {section.items.map((item, index) => (
                            <div
                              key={index}
                              className="flex items-start space-x-3"
                            >
                              <div className="w-2 h-2 bg-crimson rounded-full flex-shrink-0 mt-2"></div>
                              <p className="text-foreground">{item}</p>
                            </div>
                          ))}
                        </div>
                        {sectionIndex < farmRules.length - 1 && (
                          <Separator className="mt-6 bg-stone" />
                        )}
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </section>

              {/* Warning */}
              <Card className="bg-gradient-to-r from-crimson/10 to-blood/10 border-crimson">
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-crimson rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-sm">!</span>
                    </div>
                    <div>
                      <p className="text-white font-semibold mb-2">Важно!</p>
                      <p className="text-muted-foreground text-sm">
                        Нарушение правил может привести к предупреждению,
                        временной блокировке или полному бану в зависимости от
                        серьезности проступка. При возникновении спорных
                        ситуаций обращайтесь к администрации.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Rules;
