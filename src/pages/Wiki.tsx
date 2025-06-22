import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Wiki = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="font-oswald font-bold text-4xl md:text-5xl text-white mb-4">
              Вики сервера
            </h1>
            <p className="text-lg text-muted-foreground">
              База знаний и гайды по игре на Fortol
            </p>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            {/* Sidebar Navigation */}
            <div className="lg:col-span-1">
              <Card className="bg-card border-stone sticky top-24">
                <CardHeader>
                  <CardTitle className="font-oswald text-lg text-white">
                    Разделы
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="text-muted-foreground py-2 border-l-2 border-stone pl-3">
                    Начало игры
                  </div>
                  <div className="text-muted-foreground py-2 border-l-2 border-stone pl-3">
                    Экономика
                  </div>
                  <div className="text-muted-foreground py-2 border-l-2 border-stone pl-3">
                    Команды
                  </div>
                  <div className="text-muted-foreground py-2 border-l-2 border-stone pl-3">
                    Плагины
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              <Card className="bg-card border-stone">
                <CardContent className="pt-12">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-gradient-to-br from-crimson/20 to-blood/20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Icon
                        name="BookOpen"
                        size={32}
                        className="text-crimson"
                      />
                    </div>
                    <h2 className="font-oswald font-bold text-3xl text-white mb-4">
                      Скоро здесь появится контент
                    </h2>
                    <p className="text-muted-foreground text-lg mb-8 max-w-md mx-auto">
                      Мы работаем над созданием подробной вики с гайдами,
                      командами и полезной информацией для игроков.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                      <a
                        href="/how-to-play"
                        className="bg-gradient-to-r from-crimson to-blood hover:from-blood hover:to-crimson px-6 py-3 rounded-lg font-semibold text-white transition-all duration-300"
                      >
                        Начать играть
                      </a>
                      <a
                        href="/rules"
                        className="border-2 border-crimson text-crimson hover:bg-crimson hover:text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
                      >
                        Изучить правила
                      </a>
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

export default Wiki;
