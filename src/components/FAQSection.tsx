import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "Какой у вас хостинг?",
      answer:
        "Специально под проект было куплено собственное серверное оборудование и проведены выделенные каналы. 1 ГБ/Сек канала с фильтрацией от DDoS, 12 Ядер Xeon, 24 ГБ ОЗУ, 100 ГБ диска. От чижа не закроемся 😊",
    },
    {
      question: "Когда новый сезон?",
      answer:
        "Когда будет новый сезон решает аудитория сервера средствами массового голосования. У нас нет никаких временных рамок, это может быть и год и два.",
    },
    {
      question: "Можно ли снимать/стримить на сервере?",
      answer:
        "Конечно! Мы заинтересованы в медиа развитии и более того — готовы к сотрудничеству, обратитесь к Администрации, и мы обсудим детали.",
    },
    {
      question: "Воровство, гриферство, как жить дальше?",
      answer:
        "Если тебя загриферили или украли что-либо — не паникуй. Запиши координаты, сделай скриншоты. Напиши нашему инспектору, и мы решим ситуацию в кратчайшие сроки.",
    },
    {
      question: "Как попасть в команду проекта?",
      answer:
        "Мы крайне редко отбираем людей и в наш фокус попадают активные игроки, которые внесли большой вклад в развитие проекта. Фидбек от игроков крайне важен.",
    },
    {
      question: "Почему тут есть донат?",
      answer:
        "На разработку и поддержание проекта ушло около 70 т.р. Донат никак не вмешивается в игровой процесс — ведь он только даёт префикс в табе.",
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
