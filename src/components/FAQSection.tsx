import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "На каком хостинге размещен сервер?",
      answer:
        "Сервер размещен на надежном хостинге с высокой производительностью, что обеспечивает стабильную работу 24/7 без лагов.",
    },
    {
      question: "Сколько длится сезон?",
      answer:
        "Длительность сезона зависит от активности игроков и развития игрового мира. Обычно сезон длится 6-12 месяцев.",
    },
    {
      question: "Можно ли стримить игру на сервере?",
      answer:
        "Да, стриминг разрешен и даже приветствуется! Мы поддерживаем контент-мейкеров и можем предоставить дополнительные возможности.",
    },
    {
      question: "Какая версия Minecraft поддерживается?",
      answer:
        "Сервер работает на последней стабильной версии Minecraft. Информация о поддерживаемых версиях указана при подключении.",
    },
    {
      question: "Есть ли донат на сервере?",
      answer:
        "Да, есть система доната для поддержки сервера. Все донат-привилегии носят косметический характер и не нарушают баланс игры.",
    },
    {
      question: "Как попасть на сервер?",
      answer:
        'Для игры на сервере нужно пройти небольшой отбор. Заполните анкету на странице "Как играть?" и пройдите собеседование с администрацией.',
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-oswald font-bold text-4xl md:text-5xl text-white mb-4">
            Частые вопросы
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ответы на самые популярные вопросы о нашем сервере
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-stone rounded-lg px-6 data-[state=open]:border-crimson transition-colors duration-300"
              >
                <AccordionTrigger className="text-left font-oswald font-semibold text-white hover:text-crimson transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
