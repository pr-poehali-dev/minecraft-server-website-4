import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-obsidian via-stone to-obsidian overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-4 h-4 bg-crimson transform rotate-45"></div>
        <div className="absolute top-40 right-32 w-6 h-6 bg-blood transform rotate-45"></div>
        <div className="absolute bottom-32 left-32 w-8 h-8 bg-crimson transform rotate-45"></div>
        <div className="absolute bottom-20 right-20 w-4 h-4 bg-blood transform rotate-45"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="font-oswald font-bold text-6xl md:text-8xl text-white mb-4">
            FORTOL
          </h1>
          <div className="flex items-center justify-center space-x-4 mb-8">
            <div className="h-px bg-gradient-to-r from-transparent via-crimson to-transparent flex-1 max-w-32"></div>
            <span className="text-xl md:text-2xl font-oswald font-semibold text-crimson">
              2 SEASON
            </span>
            <div className="h-px bg-gradient-to-r from-transparent via-crimson to-transparent flex-1 max-w-32"></div>
          </div>
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Окунись в мир приключений на лучшем майнкрафт сервере. Уникальные
            механики, дружное сообщество и незабываемые моменты ждут тебя!
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a
              href="/how-to-play"
              className="bg-gradient-to-r from-crimson to-blood hover:from-blood hover:to-crimson px-8 py-4 rounded-lg font-semibold text-white transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
            >
              <Icon name="Play" size={20} />
              <span>Начать играть</span>
            </a>
            <a
              href="http://mc.fortol.su:25884/"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-crimson text-crimson hover:bg-crimson hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center space-x-2"
            >
              <Icon name="Map" size={20} />
              <span>Посмотреть карту</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
