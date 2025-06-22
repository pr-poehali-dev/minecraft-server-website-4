import Icon from "@/components/ui/icon";

const Footer = () => {
  const socialLinks = [
    { name: "Telegram", url: "https://t.me/fortol_mc", icon: "Send" },
    {
      name: "Discord",
      url: "https://discord.gg/fortol",
      icon: "MessageCircle",
    },
    { name: "YouTube", url: "https://youtube.com/@fortol", icon: "Play" },
  ];

  return (
    <footer className="bg-obsidian border-t border-stone">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-crimson to-blood rounded-lg flex items-center justify-center">
              <span className="text-white font-oswald font-bold text-2xl">
                F
              </span>
            </div>
            <div>
              <h3 className="font-oswald font-bold text-2xl text-white">
                FORTOL
              </h3>
              <p className="text-sm text-muted-foreground">2 SEASON</p>
            </div>
          </div>

          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            Лучший майнкрафт сервер для истинных ценителей качественной игры
          </p>

          <div className="flex items-center justify-center space-x-6 mb-8">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-stone hover:bg-crimson rounded-lg flex items-center justify-center transition-colors duration-300 group"
                title={link.name}
              >
                <Icon
                  name={link.icon as any}
                  size={20}
                  className="text-muted-foreground group-hover:text-white transition-colors"
                />
              </a>
            ))}
          </div>

          <div className="pt-8 border-t border-stone">
            <p className="text-sm text-muted-foreground">
              © 2024 Fortol Minecraft Server. Все права защищены.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
