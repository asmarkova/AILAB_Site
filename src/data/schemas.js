/**
 * JSON-LD Structured Data Schemas for AI LAB
 * Optimized for search engines and AI assistants
 */

// Organization Schema - Use on all pages
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "AI LAB",
  "alternateName": "AI Laboratory",
  "url": "https://ai-lab.company",
  "logo": "https://ai-lab.company/logo.png",
  "description": "Разработка AI-агентов, чат-ботов и автоматизация бизнес-процессов. Корпоративное обучение работе с нейросетями.",
  "email": "manager@ai-lab.company",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "RU",
    "addressLocality": "Москва"
  },
  "sameAs": [
    "https://t.me/ai_lab_company",
    "https://youtube.com/@ai-lab-company"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "sales",
    "availableLanguage": ["Russian"],
    "areaServed": "RU"
  },
  "areaServed": {
    "@type": "Country",
    "name": "Russia"
  },
  "knowsAbout": [
    "Искусственный интеллект",
    "Разработка AI-агентов",
    "Чат-боты",
    "Автоматизация бизнес-процессов",
    "Корпоративное обучение нейросетям",
    "Machine Learning",
    "GPT технологии"
  ]
};

// Professional Service Schema - HomePage
export const professionalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "AI LAB — Разработка AI-решений для бизнеса",
  "image": "https://ai-lab.company/logo.png",
  "url": "https://ai-lab.company",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "RU",
    "addressLocality": "Москва"
  },
  "priceRange": "$$",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Услуги AI LAB",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Разработка AI-агентов",
          "description": "Создание интеллектуальных агентов для автоматизации бизнес-процессов"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Разработка чат-ботов",
          "description": "Создание чат-ботов для автоматизации коммуникаций с клиентами"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "AI-аудит бизнеса",
          "description": "Анализ бизнес-процессов и формирование стратегии внедрения ИИ"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Корпоративное обучение нейросетям",
          "description": "Обучение сотрудников работе с AI-инструментами"
        }
      }
    ]
  }
};

// Educational Organization Schema - Academy Page
export const educationalOrganizationSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "name": "AI Academy by AI LAB",
  "description": "Корпоративное обучение работе с нейросетями и искусственным интеллектом",
  "url": "https://ai-lab.company/academy",
  "email": "manager@ai-lab.company",
  "parentOrganization": {
    "@type": "Organization",
    "name": "AI LAB"
  },
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "RU",
    "addressLocality": "Москва"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Программы обучения AI Academy",
    "itemListElement": [
      {
        "@type": "Course",
        "name": "Базовый курс: Введение в нейросети для бизнеса",
        "description": "Основы работы с ChatGPT, Midjourney и другими AI-инструментами",
        "provider": {
          "@type": "Organization",
          "name": "AI Academy"
        },
        "educationalLevel": "Beginner",
        "inLanguage": "ru",
        "coursePrerequisites": "Не требуется",
        "teaches": [
          "ChatGPT",
          "Промпт-инжиниринг",
          "Midjourney",
          "AI-инструменты для бизнеса"
        ]
      },
      {
        "@type": "Course",
        "name": "Продвинутый курс: Автоматизация с ИИ",
        "description": "Глубокое погружение в автоматизацию бизнес-процессов с помощью AI",
        "provider": {
          "@type": "Organization",
          "name": "AI Academy"
        },
        "educationalLevel": "Advanced",
        "inLanguage": "ru",
        "teaches": [
          "AI-агенты",
          "Автоматизация процессов",
          "Интеграция ИИ",
          "No-code AI платформы"
        ]
      }
    ]
  }
};

// Course Schema - Detailed for Academy Page
export const courseSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "Корпоративное обучение работе с нейросетями",
  "description": "Практический курс по использованию ChatGPT, Midjourney и других AI-инструментов для повышения эффективности работы",
  "provider": {
    "@type": "EducationalOrganization",
    "name": "AI Academy by AI LAB",
    "url": "https://ai-lab.company/academy"
  },
  "hasCourseInstance": [
    {
      "@type": "CourseInstance",
      "courseMode": ["onsite", "online"],
      "courseWorkload": "PT8H",
      "instructor": {
        "@type": "Person",
        "name": "Эксперты AI LAB"
      }
    }
  ],
  "educationalLevel": "Beginner to Advanced",
  "inLanguage": "ru",
  "numberOfCredits": 0,
  "isAccessibleForFree": false,
  "teaches": [
    "Работа с ChatGPT и GPT-4",
    "Промпт-инжиниринг",
    "Создание изображений с Midjourney",
    "Автоматизация задач с помощью ИИ",
    "Внедрение AI в бизнес-процессы"
  ],
  "audience": {
    "@type": "EducationalAudience",
    "educationalRole": "corporate professionals"
  },
  "timeRequired": "PT8H",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "ratingCount": "47"
  }
};

// WebPage with Breadcrumbs Schema
export const createWebPageSchema = (pageName, pageUrl, breadcrumbs) => ({
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": pageName,
  "url": pageUrl,
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": crumb.name,
      "item": crumb.url
    }))
  }
});

// Local Business Schema
export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "AI LAB",
  "image": "https://ai-lab.company/logo.png",
  "@id": "https://ai-lab.company",
  "url": "https://ai-lab.company",
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Москва",
    "addressRegion": "Москва",
    "addressCountry": "RU"
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday"
    ],
    "opens": "09:00",
    "closes": "18:00"
  },
  "sameAs": [
    "https://t.me/ai_lab_company",
    "https://youtube.com/@ai-lab-company"
  ]
};

// FAQ Schema - Can be customized per page
export const createFAQSchema = (faqItems) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqItems.map(item => ({
    "@type": "Question",
    "name": item.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": item.answer
    }
  }))
});

// Example FAQ data for HomePage
export const homePageFAQs = [
  {
    question: "Сколько стоит разработка AI-агента?",
    answer: "Стоимость разработки AI-агента зависит от сложности задач и требований к интеграции. Базовые решения начинаются от 300 000 рублей, комплексные системы рассчитываются индивидуально. Свяжитесь с нами для точной оценки вашего проекта."
  },
  {
    question: "Какие технологии вы используете?",
    answer: "Мы работаем с современными AI-технологиями: GPT-4, Claude, Gemini, LangChain, векторные базы данных, RAG-системы. Выбор технологического стека зависит от специфики вашего проекта и бизнес-задач."
  },
  {
    question: "Сколько времени занимает разработка?",
    answer: "Простые AI-решения можно реализовать за 2-4 недели. Комплексные системы с интеграцией в корпоративную инфраструктуру могут занять 2-3 месяца. Мы предоставляем детальный план проекта после первичного аудита."
  }
];

// Example FAQ data for Academy Page
export const academyPageFAQs = [
  {
    question: "Сколько длится корпоративное обучение нейросетям?",
    answer: "Базовый курс занимает 8 часов (1 день интенсива), продвинутая программа — 16 часов (2 дня). Доступны как интенсивные, так и растянутые форматы обучения с учетом графика вашей команды."
  },
  {
    question: "Нужна ли специальная подготовка для обучения?",
    answer: "Нет, специальная подготовка не требуется. Наши курсы разработаны для специалистов с любым уровнем технической подготовки. Мы начинаем с основ и постепенно переходим к продвинутым техникам."
  },
  {
    question: "Какой формат обучения доступен?",
    answer: "Мы предлагаем три формата: очное обучение в вашем офисе, онлайн-курсы с живым преподавателем и гибридный формат. Все форматы включают практические задания и работу с реальными кейсами."
  },
  {
    question: "Что получают участники после обучения?",
    answer: "Участники получают сертификат об окончании курса, методические материалы, доступ к базе промптов и шаблонов, а также 30 дней технической поддержки от наших экспертов."
  }
];
