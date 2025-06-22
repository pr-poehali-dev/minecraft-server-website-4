import { Link, useLocation } from "react-router-dom";
import Icon from "@/components/ui/icon";

const Header = () => {
  const location = useLocation();

  const navItems = [
    { name: "Главная", path: "/" },
    { name: "Как играть?", path: "/how-to-play" },
    { name: "Правила", path: "/rules" },
    { name: "Вики", path: "/wiki" },
    { name: "Команда", path: "/team" },
  ];

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
    <header className="bg-obsidian/95 backdrop-blur-sm border-b border-stone sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center space-x-3 hover:opacity-80 transition-opacity"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-crimson to-blood rounded-lg flex items-center justify-center">
              <span className="text-white font-oswald font-bold text-xl">
                F
              </span>
            </div>
            <div>
              <h1 className="font-oswald font-bold text-xl text-white">
                FORTOL
              </h1>
              <p className="text-xs text-muted-foreground">2 SEASON</p>
            </div>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`font-medium transition-colors hover:text-crimson ${
                  location.pathname === item.path
                    ? "text-crimson"
                    : "text-foreground"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <a
              href="http://mc.fortol.su:25884/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-foreground hover:text-crimson transition-colors flex items-center space-x-1"
            >
              <span>Карта</span>
              <Icon name="ExternalLink" size={16} />
            </a>
          </nav>

          {/* Social Links */}
          <div className="flex items-center space-x-4">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-crimson transition-colors"
                title={link.name}
              >
                <Icon name={link.icon as any} size={20} />
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden text-foreground">
            <Icon name="Menu" size={24} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
