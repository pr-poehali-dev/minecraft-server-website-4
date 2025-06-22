import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const HowToPlay = () => {
  const [formData, setFormData] = useState({
    nickname: "",
    howHeard: "",
    platform: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission (replace with actual Google Sheets integration)
    try {
      // Here you would integrate with Google Sheets API
      console.log("Form data:", formData);

      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 1500));

      setIsSubmitted(true);
    } catch (error) {
      console.error("Submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-crimson to-blood rounded-full flex items-center justify-center mx-auto mb-6">
              <Icon name="Check" size={32} className="text-white" />
            </div>
            <h1 className="font-oswald font-bold text-4xl text-white mb-4">
              Заявка отправлена!
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Спасибо за заявку! Мы свяжемся с вами в ближайшее время через
              выбранную платформу для проведения экскурсии по серверу.
            </p>
            <Button
              onClick={() => (window.location.href = "/")}
              className="bg-gradient-to-r from-crimson to-blood hover:from-blood hover:to-crimson"
            >
              Вернуться на главную
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container mx-auto px-4 py-20">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="font-oswald font-bold text-4xl md:text-5xl text-white mb-4">
              Как начать играть?
            </h1>
            <p className="text-lg text-muted-foreground">
              Заполните анкету ниже, и мы проведем для вас экскурсию по серверу
            </p>
          </div>

          <Card className="bg-card border-stone">
            <CardHeader>
              <CardTitle className="font-oswald text-2xl text-white">
                Анкета игрока
              </CardTitle>
              <CardDescription>
                Перед подачей заявки не забудьте прочитать{" "}
                <a href="/rules" className="text-crimson hover:underline">
                  правила сервера
                </a>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="nickname" className="text-white font-medium">
                    Ваш ник в Minecraft *
                  </Label>
                  <Input
                    id="nickname"
                    value={formData.nickname}
                    onChange={(e) =>
                      handleInputChange("nickname", e.target.value)
                    }
                    placeholder="Введите ваш игровой ник"
                    required
                    className="mt-2 bg-stone border-stone text-white placeholder:text-muted-foreground focus:border-crimson"
                  />
                </div>

                <div>
                  <Label htmlFor="howHeard" className="text-white font-medium">
                    Как вы узнали о нас? *
                  </Label>
                  <Textarea
                    id="howHeard"
                    value={formData.howHeard}
                    onChange={(e) =>
                      handleInputChange("howHeard", e.target.value)
                    }
                    placeholder="Расскажите, откуда узнали о нашем сервере"
                    required
                    rows={3}
                    className="mt-2 bg-stone border-stone text-white placeholder:text-muted-foreground focus:border-crimson resize-none"
                  />
                </div>

                <div>
                  <Label className="text-white font-medium">
                    Где вам удобнее пройти экскурсию? *
                  </Label>
                  <Select
                    value={formData.platform}
                    onValueChange={(value) =>
                      handleInputChange("platform", value)
                    }
                  >
                    <SelectTrigger className="mt-2 bg-stone border-stone text-white focus:border-crimson">
                      <SelectValue placeholder="Выберите платформу" />
                    </SelectTrigger>
                    <SelectContent className="bg-stone border-stone">
                      <SelectItem
                        value="telegram"
                        className="text-white focus:bg-crimson"
                      >
                        <div className="flex items-center space-x-2">
                          <Icon name="Send" size={16} />
                          <span>Telegram</span>
                        </div>
                      </SelectItem>
                      <SelectItem
                        value="discord"
                        className="text-white focus:bg-crimson"
                      >
                        <div className="flex items-center space-x-2">
                          <Icon name="MessageCircle" size={16} />
                          <span>Discord</span>
                        </div>
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button
                  type="submit"
                  disabled={
                    isSubmitting ||
                    !formData.nickname ||
                    !formData.howHeard ||
                    !formData.platform
                  }
                  className="w-full bg-gradient-to-r from-crimson to-blood hover:from-blood hover:to-crimson disabled:opacity-50 disabled:cursor-not-allowed py-3"
                >
                  {isSubmitting ? (
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Отправляем...</span>
                    </div>
                  ) : (
                    "Отправить заявку"
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="mt-8 text-center text-sm text-muted-foreground">
            <p>
              После отправки заявки наша команда свяжется с вами для проведения
              экскурсии.
              <br />
              Результаты анкеты автоматически сохраняются для модерации.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default HowToPlay;
