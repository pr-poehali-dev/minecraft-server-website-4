import Icon from "@/components/ui/icon";

const AboutSection = () => {
  const features = [
    {
      icon: "Users",
      title: "Дружное сообщество",
      description: "Активные игроки, которые всегда готовы помочь новичкам",
    },
    {
      icon: "Zap",
      title: "Уникальные механики",
      description: "Собственные плагины и модификации для незабываемого опыта",
    },
    {
      icon: "Shield",
      title: "Честная игра",
      description: "Строгая модерация и защита от читеров",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-oswald font-bold text-4xl md:text-5xl text-white mb-4">
            БОЛЬШЕ, чем сервер
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Fortol — это не просто майнкрафт сервер. Это целая вселенная
            возможностей, где каждый найдет что-то для себя.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-card border border-stone rounded-lg p-8 text-center hover:border-crimson transition-all duration-300 group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-crimson to-blood rounded-lg flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Icon
                  name={feature.icon as any}
                  size={24}
                  className="text-white"
                />
              </div>
              <h3 className="font-oswald font-semibold text-xl text-white mb-4">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
