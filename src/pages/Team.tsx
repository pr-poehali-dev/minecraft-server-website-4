import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Team = () => {
  const creators = [
    {
      name: "kuv8lda",
      role: "Создатель",
      description: "Основатель и главный разработчик сервера",
      avatar: "👑",
    },
  ];

  const techAdmins = [
    {
      name: "Newriel_",
      role: "Технический администратор",
      description: "Отвечает за техническую часть сервера",
      avatar: "⚙️",
    },
  ];

  const mediaTeam = [
    {
      name: "KNIGHTLEV",
      role: "Медиа команда",
      description: "Создание контента и продвижение",
      avatar: "🎬",
    },
    {
      name: "Линги",
      role: "Медиа команда",
      description: "Создание контента и продвижение",
      avatar: "📸",
    },
    {
      name: "Shadow",
      role: "Медиа команда",
      description: "Создание контента и продвижение",
      avatar: "🎭",
    },
    {
      name: "VladDaDep",
      role: "Медиа команда",
      description: "Создание контента и продвижение",
      avatar: "🎨",
    },
  ];

  const TeamCard = ({ member, index }: { member: any; index: number }) => (
    <Card
      className="bg-card border-stone hover:border-crimson transition-all duration-300 group hover:-translate-y-2 animate-fade-in"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <CardContent className="pt-8 pb-6 text-center">
        <div className="text-4xl mb-4">{member.avatar}</div>
        <h3 className="font-oswald font-bold text-xl text-white mb-2">
          {member.name}
        </h3>
        <p className="text-crimson font-semibold text-sm mb-3">{member.role}</p>
        <p className="text-muted-foreground text-sm">{member.description}</p>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="font-oswald font-bold text-4xl md:text-5xl text-white mb-4">
              Наша команда
            </h1>
            <p className="text-lg text-muted-foreground">
              Люди, которые делают Fortol особенным местом
            </p>
          </div>

          {/* Creators */}
          <section className="mb-16">
            <h2 className="font-oswald font-semibold text-2xl text-white mb-8 text-center">
              Создатели
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
              {creators.map((member, index) => (
                <TeamCard key={member.name} member={member} index={index} />
              ))}
            </div>
          </section>

          {/* Tech Admins */}
          <section className="mb-16">
            <h2 className="font-oswald font-semibold text-2xl text-white mb-8 text-center">
              Техническая команда
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
              {techAdmins.map((member, index) => (
                <TeamCard key={member.name} member={member} index={index} />
              ))}
            </div>
          </section>

          {/* Media Team */}
          <section className="mb-16">
            <h2 className="font-oswald font-semibold text-2xl text-white mb-8 text-center">
              Медиа команда
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {mediaTeam.map((member, index) => (
                <TeamCard key={member.name} member={member} index={index} />
              ))}
            </div>
          </section>

          {/* Contact Section */}
          <section>
            <Card className="bg-gradient-to-r from-crimson/10 to-blood/10 border-crimson">
              <CardContent className="pt-8 pb-6">
                <div className="text-center">
                  <h3 className="font-oswald font-bold text-2xl text-white mb-4">
                    Связаться с командой
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Есть вопросы или предложения? Мы всегда готовы к диалогу!
                  </p>
                  <div className="flex items-center justify-center space-x-6">
                    <a
                      href="https://t.me/fortol_mc"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-white hover:text-crimson transition-colors"
                    >
                      <Icon name="Send" size={20} />
                      <span>Telegram</span>
                    </a>
                    <a
                      href="https://discord.gg/fortol"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-white hover:text-crimson transition-colors"
                    >
                      <Icon name="MessageCircle" size={20} />
                      <span>Discord</span>
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Team;
