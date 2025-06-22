const WhyUsSection = () => {
  const reasons = [
    {
      title: "Стабильность",
      description: "Сервер работает 24/7 без лагов и перебоев",
      shape: "square",
    },
    {
      title: "Поддержка",
      description: "Быстрая помощь от администрации и модераторов",
      shape: "circle",
    },
    {
      title: "Развитие",
      description: "Постоянные обновления и новые функции",
      shape: "triangle",
    },
    {
      title: "Экономика",
      description: "Сбалансированная игровая экономика и торговля",
      shape: "diamond",
    },
  ];

  const getShapeClass = (shape: string) => {
    switch (shape) {
      case "circle":
        return "rounded-full";
      case "triangle":
        return "rounded-none transform rotate-45";
      case "diamond":
        return "rounded-none transform rotate-45";
      default:
        return "rounded-lg";
    }
  };

  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-oswald font-bold text-4xl md:text-5xl text-white mb-4">
            Почему мы?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Узнай, что делает наш сервер особенным среди тысяч других
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="text-center group animate-fade-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="relative mb-6">
                <div
                  className={`w-20 h-20 bg-gradient-to-br from-crimson to-blood mx-auto ${getShapeClass(reason.shape)} group-hover:scale-110 transition-transform duration-300`}
                ></div>
                {reason.shape === "triangle" && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-crimson to-blood transform rotate-45"></div>
                  </div>
                )}
              </div>
              <h3 className="font-oswald font-semibold text-xl text-white mb-3">
                {reason.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
