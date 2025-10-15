import { useState } from 'react';

const Articles = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const articles = [
    {
      title: "AI Lab — a startup that enhances business efficiency with AI",
      description: "Интервью с основателями AI Lab — Артемом Панферовым, Павлом Панферовым и Анастасией Марковой, где они рассказывают о создании семейного бизнеса в области AI-автоматизации и low-code разработки мобильных приложений в Узбекистане.",
      source: "THE TECH",
      link: "https://the-tech.kz/ai-lab-a-startup-that-enhances-business-efficiency-with-ai"
    },
    {
      title: "Ключевые игроки стартап-экосистемы обсудили планы на 2025 год",
      description: "О митапе в IT Park Tashkent с участием венчурных фондов и инкубационных центров, где Артем Панферов (AI Lab) поделился планами о проведении двух хакатонов и одной инкубационной программы в партнерстве с IT Park Uzbekistan.",
      source: "IT Park Uzbekistan",
      link: "https://it-park.uz/ru/itpark/news/klyuchevye-igroki-startap-ekosistemy-obsudili-plany-na-2025-god"
    },
    {
      title: "IT-семьи: Артем Панферов и Анастасия Маркова",
      description: "История любви и совместной работы IT-семьи из Узбекистана — Артема Панферова и Анастасии Марковой, основателей EndCode и AI LAB, о том, как они балансируют между семейной жизнью и карьерой в IT-сфере.",
      source: "THE TECH",
      link: "https://the-tech.kz/it-semi-artem-panferov-i-anastasiya-markova/"
    },
    {
      title: "«Юксалиш» объявил топ-30 лидеров в Узбекистане в сфере ИИ",
      description: "Рейтинг ведущих специалистов Узбекистана в области искусственного интеллекта, составленный движением «Юксалиш» и AICA, в который вошла соосновательница AI Lab Анастасия Маркова среди 30 лучших экспертов отрасли.",
      source: "Kursiv.media",
      link: "https://uz.kursiv.media/2025-08-31/yuksalish-obyavil-top-30-liderov-v-uzbekistane-v-sfere-ii/"
    },
    {
      title: "ТОП-30 Сунъий интеллект лидерлари",
      description: "Первый национальный рейтинг ТОП-30 лидеров в сфере искусственного интеллекта в Узбекистане, составленный движением \"Юксалиш\" и AICA, включающий ведущих специалистов, способствующих развитию AI-технологий в стране.",
      source: "Yuksalish.org",
      link: "https://yuksalish.org/uzc/news_detail/835?utm_source=in_materials"
    },
    {
      title: "В IT Park Uzbekistan стартовал первый корпоративный AI-хакатон",
      description: "О первом корпоративном AI-хакатоне в IT Park Uzbekistan, где Артём Панферов выступил в качестве ведущего эксперта в области искусственного интеллекта и стартапов, представив мировые тренды и практические кейсы применения AI.",
      source: "IT Park Uzbekistan",
      link: "https://it-park.uz/ru/itpark/news/v-it-park-uzbekistan-startoval-pervyy-korporativnyy-ai-hakaton"
    },
    {
      title: "Как автоматизировать бизнес с помощью нейросетей",
      description: "Подробная статья Артема Панферова о практическом применении AI-технологий в бизнесе, где он делится опытом AI LAB по автоматизации процессов через чат-ботов, речевую аналитику и обучение предпринимателей работе с нейросетями.",
      source: "Zerocoder.ru",
      link: "https://ya.zerocoder.ru/artem-panferov-i-ai-lab-kak-avtomatizirovat-biznes-s-pomoshhju-nejrosetej/"
    },
    {
      title: "AI LAB: как нейросети трансформируют бизнес и нашу реальность",
      description: "Интервью с представителем AI LAB о философии компании в отношении искусственного интеллекта как \"экзоскелета для мозга\", возможностях нейросетей в бизнесе и их продукте AskaBot для автоматизации продаж.",
      source: "Zerocoder.ru",
      link: "https://ya.zerocoder.ru/ai-lab-kak-nejroseti-transformirujut-biznes-i-nashu-realnost/"
    },
    {
      title: "Как Артём Панфёров стал экспертом FlutterFlow и основал EndCode",
      description: "История карьерного пути Артёма Панфёрова от Product Owner в крупных российских компаниях до основателя студии EndCode, специализирующейся на разработке мобильных приложений на Flutter Flow в Узбекистане.",
      source: "Zerocoder.ru",
      link: "https://ya.zerocoder.ru/kak-artiom-panfiorov-stal-ekspiertom-flutterflow-i-osnoval-endcode/"
    },
    {
      title: "Central Asia: A New Frontier on the Global Tech Map",
      description: "Масштабное исследование технологической экосистемы Центральной Азии от Crunchbase, где упоминается Артем Панферов как российский IT-специалист, переехавший в Узбекистан и основавший low-code стартап EndCode.",
      source: "Crunchbase",
      link: "https://about.crunchbase.com/blog/central-asia-global-tech-map/?utm_source=chatgpt.com"
    },
    {
      title: "How thousands of highly-skilled Russians support Uzbekistan's bid for technology development",
      description: "Репортаж о том, как тысячи высококвалифицированных российских IT-специалистов поддерживают технологическое развитие Узбекистана, с историей братьев Артема и Павла Панферовых и Анастасии Марковой, основавших стартап EndCode.",
      source: "IntelliNews",
      link: "https://www.intellinews.com/how-thousands-of-highly-skilled-russians-support-uzbekistan-s-bid-for-technology-development-303099"
    },
    {
      title: "Что происходит сейчас со стартапами и венчуром в Центральной Азии?",
      description: "Вторая часть исследования стартап-экосистемы Центральной Азии, где Артем Панферов комментирует формирование культуры предпринимательства в Узбекистане и упоминается его стартап EndCode среди примеров местных проектов.",
      source: "Digital Business",
      link: "https://digitalbusiness.kz/2023-06-28/chto-proishodit-sejchas-so-startapami-i-venchurom-v-czentralnoj-azii-prodolzhenie-ctati-v-crunchbase/"
    },
    {
      title: "Сколько долларов за ноль кода?",
      description: "Исследование рынка no-code разработки, где Артем Панферов рассказывает о создании студии EndCode, специализирующейся на FlutterFlow, и делится опытом ценообразования на low-code проекты.",
      source: "VC.ru",
      link: "https://vc.ru/services/546645-skolko-dollarov-za-nol-koda-i-my-ne-pro-lenivyh-razrabotchikov"
    },
    {
      title: "В Узбекистане назвали лучшие AI-стартапы по итогам хакатона Angel Connect",
      description: "Результаты хакатона Angel Connect, организованного IT Park Uzbekistan совместно с AI LAB, где более 150 участников разрабатывали AI-решения для оптимизации бизнес-процессов при поддержке экспертов и венчурных фондов.",
      source: "THE TECH",
      link: "https://the-tech.kz/v-uzbekistane-nazvali-luchshie-ai-startapy-po-itogam-hakatona-angel-connect/"
    },
    {
      title: "Angel Connect Hackathon",
      description: "Информация о прошедшем в UEnter хакатоне Angel Connect, организованном в сотрудничестве с IT Park, Pro Business и AI Lab, где участники разрабатывали инновационные AI-решения при поддержке 20 менторов.",
      source: "U-Enter",
      link: "https://www.u-enter.uz/ru/angel-connect-hackathon"
    },
    {
      title: "Хакатон Angel Connect - место, где раскрывается талант",
      description: "Репортаж о хакатоне Angel Connect, прошедшем в Ташкенте с 28 февраля по 2 марта, организованном IT Park Uzbekistan совместно с AI LAB, где 36 команд разрабатывали AI-решения при поддержке международных экспертов.",
      source: "Innov.ru",
      link: "https://www.innov.ru/news/it/hakaton-angel-connect-mesto-gde-raskryvaetsya-talant/"
    },
    {
      title: "International forum on artificial intelligence with participation of CIS countries and AI hackathon held in Samarkand",
      description: "Международный форум по искусственному интеллекту с участием стран СНГ в Самарканде, где финал AI-хакатона был организован IT Park и Angel Connect при поддержке AI Lab, AICA и School 21.",
      source: "gov.uz",
      link: "https://gov.uz/en/digital/news/view/77298"
    },
    {
      title: "«Юксалиш» назвал ТОП-30 лидеров в сфере искусственного интеллекта",
      description: "Объявление рейтинга 30 лучших специалистов Узбекистана в области искусственного интеллекта, составленного движением \"Юксалиш\", в который вошла соосновательница AI Lab Анастасия Маркова среди ведущих экспертов отрасли.",
      source: "Zamin.uz",
      link: "https://zamin.uz/ru/obshchestvo/159097-yuksalish-nazval-top-30-liderov-v-sfere-iskusstvennogo-intellekta.html"
    },
    {
      title: "Акмаль Пайзиев, Анвар Нарзуллаев, Константин Круглов",
      description: "Обзор первого национального топ-30 лидеров в сфере ИИ Узбекистана, сформированного движением \"Юксалиш\" и AICA, который призван продемонстрировать достижения специалистов и мотивировать развитие отрасли.",
      source: "Spot.uz",
      link: "https://www.spot.uz/ru/2025/09/02/ai-leaders/"
    },
    {
      title: "ТОП-30 экспертов, давших толчок развитию сферы искусственного интеллекта в Узбекистане",
      description: "Подробный обзор составления рейтинга ТОП-30 лидеров искусственного интеллекта в Узбекистане движением \"Юксалиш\" и AICA, включающего предпринимателей, ученых и основателей стартапов, способствующих развитию AI-технологий.",
      source: "Zamin.uz",
      link: "https://zamin.uz/ru/tekhnologii/159045-top-30-ekspertov-davshih-tolchok-razvitiyu-sfery-iskusstvennogo-intellekta-v-uzbekistane.html"
    },
    {
      title: "Международный форум по искусственному интеллекту с участием стран СНГ и AI-хакатон прошли в Самарканде",
      description: "Репортаж о международном форуме по развитию AI-технологий в странах СНГ в Самарканде, где центральным событием стал финал AI-хакатона, организованного IT Park и Angel Connect при поддержке AI Lab.",
      source: "IT Park Uzbekistan",
      link: "https://it-park.uz/ru/itpark/news/mezhdunarodnyy-forum-po-iskusstvennomu-intellektu-s-uchastiem-stran-sng-i-ai-hakaton-proshli-v-samarkande"
    },
    {
      title: "International forum on artificial intelligence with participation of CIS countries and AI hackathon held in Samarkand",
      description: "Официальный пресс-релиз о международном форуме по искусственному интеллекту в Самарканде, организованном при поддержке IT Park Uzbekistan, где финал AI-хакатона прошел при содействии AI Lab и других партнеров.",
      source: "outsource.gov.uz",
      link: "https://outsource.gov.uz/ru/media/international-forum-on-artificial-intelligence-with-participation-of-cis-countries-and-ai-hackathon-held-in-samarkand"
    },
    {
      title: "В Ташкенте состоится встреча на тему местного рынка стартапов",
      description: "Анонс мероприятия StartUp Entrepreneur MeetUp в Ташкенте, посвященного рынку инвестиций и развития бизнеса в Узбекистане, где среди спикеров выступит Артём Панферов, основатель студии мобильной разработки EndCode.",
      source: "Spot.uz",
      link: "https://www.spot.uz/ru/2022/11/25/start-up-it-park/"
    },
    {
      title: "Студенты участвовали в мероприятиях Ideathon в School 21",
      description: "Информация об участии студентов Ташкентского филиала в мероприятии Ideathon в School 21 на тему \"Как искусственный интеллект меняет бизнес и экономику\", организованном совместно с AI LAB.",
      source: "REU.uz",
      link: "https://reu.uz/novosti/studenty-uchastvovali-v-meroprijatijah-ideathon-v-school-21/"
    }
  ];

  const articlesPerPage = 6;
  const totalPages = Math.ceil(articles.length / articlesPerPage);

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const currentArticles = articles.slice(
    currentPage * articlesPerPage,
    (currentPage + 1) * articlesPerPage
  );

  return (
    <section className="section articles">
      <div className="container">
        <div className="articles-header">
          <h2 className="section-title">Статьи и публикации</h2>
          <div className="articles-controls">
            <button className="slider-btn" onClick={prevPage} aria-label="Предыдущие статьи">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button className="slider-btn" onClick={nextPage} aria-label="Следующие статьи">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>

        <div className="articles-grid">
          {currentArticles.map((article, index) => (
            <a
              key={`${currentPage}-${index}`}
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
              className="article-card"
            >
              <div className="article-source-chip">{article.source}</div>
              <h3 className="article-title">{article.title}</h3>
              <p className="article-description">{article.description}</p>
            </a>
          ))}
        </div>

        <div className="carousel-dots">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              className={`carousel-dot ${index === currentPage ? 'active' : ''}`}
              onClick={() => setCurrentPage(index)}
              aria-label={`Страница ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Articles;
