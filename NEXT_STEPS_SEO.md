# 🚀 Следующие шаги для завершения SEO оптимизации

## ✅ Что уже сделано

- ✅ Все мета-теги (title, description, keywords, OG, Twitter)
- ✅ Structured data (JSON-LD) для всех страниц
- ✅ robots.txt с поддержкой AI-краулеров
- ✅ sitemap.xml
- ✅ Семантическая HTML структура
- ✅ Canonical URLs
- ✅ Alt-атрибуты для всех изображений

## 🎯 Критические задачи (Сделать в первую очередь)

### 1. Создать Open Graph изображения
Необходимо создать 2 изображения размером **1200x630px**:

**Для главной страницы:** `/public/og-image-home.jpg`
- Текст: "AI LAB — Разработка AI-агентов и автоматизация бизнеса"
- Логотип AI LAB
- Фон в стиле сайта (фиолетовый градиент)

**Для Academy:** `/public/og-image-academy.jpg`
- Текст: "AI Academy — Корпоративное обучение нейросетям"
- Изображение тренинга или логотип
- Фон в стиле Academy

### 2. Регистрация в поисковых системах

#### Google Search Console
1. Перейти: https://search.google.com/search-console
2. Добавить сайт `ai-lab.company`
3. Подтвердить владение (HTML тег или файл)
4. Скопировать код верификации
5. Добавить в `index.html` на строку 26:
   ```html
   <meta name="google-site-verification" content="ВАШ_КОД_ЗДЕСЬ" />
   ```
6. Отправить sitemap: `https://ai-lab.company/sitemap.xml`

#### Yandex Webmaster
1. Перейти: https://webmaster.yandex.ru
2. Добавить сайт `ai-lab.company`
3. Подтвердить владение
4. Скопировать код верификации
5. Добавить в `index.html` на строку 23:
   ```html
   <meta name="yandex-verification" content="ВАШ_КОД_ЗДЕСЬ" />
   ```
6. Отправить sitemap: `https://ai-lab.company/sitemap.xml`

### 3. Обновить sitemap.xml актуальной датой

Откройте `public/sitemap.xml` и замените даты на текущую:
```xml
<lastmod>2025-10-16</lastmod>
```

## 📊 Важные задачи (Недели 2-3)

### 4. Настроить аналитику

#### Google Analytics 4
```bash
# Установить пакет
npm install react-ga4

# Добавить в src/App.jsx
import ReactGA from 'react-ga4';

useEffect(() => {
  ReactGA.initialize('G-XXXXXXXXXX'); // Ваш Measurement ID
  ReactGA.send('pageview');
}, []);
```

#### Yandex.Metrica
Добавить код счетчика в `index.html` перед `</head>`:
```html
<!-- Yandex.Metrika counter -->
<script type="text/javascript" >
   (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
   m[i].l=1*new Date();
   for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
   k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
   (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

   ym(XXXXXXXX, "init", {
        clickmap:true,
        trackLinks:true,
        accurateTrackBounce:true,
        webvisor:true
   });
</script>
```

### 5. Добавить страницу Политики конфиденциальности

Создать `/src/pages/PrivacyPolicy.jsx` и добавить в роутинг.

### 6. Добавить FAQ секции на страницы

Использовать данные из `src/data/schemas.js`:
- `homePageFAQs` для главной
- `academyPageFAQs` для Academy

## 🔄 Регулярные задачи

### 7. Контент-маркетинг
- Создать блог (если еще нет)
- Публиковать 2 статьи в месяц по темам:
  * Кейсы внедрения AI
  * Обучающие материалы по ChatGPT
  * Новости в области AI
  * Интервью с экспертами

### 8. Мониторинг SEO
**Еженедельно проверять:**
- Позиции в поиске (Google/Yandex)
- Органический трафик
- Ошибки индексации

**Инструменты:**
- Google Search Console
- Yandex Webmaster
- Ahrefs / Semrush (опционально)

### 9. Технический SEO
- Проверить скорость загрузки (PageSpeed Insights)
- Убедиться что HTTPS работает
- Проверить мобильную версию
- Исправлять битые ссылки

## 📈 Целевые метрики (6 месяцев)

- [ ] 15-20 ключевых слов в ТОП-10 Google
- [ ] 10-15 ключевых слов в ТОП-10 Yandex
- [ ] 5,000-8,000 органических посещений/месяц
- [ ] 150-400 лидов из органики/месяц
- [ ] Средняя позиция по целевым запросам: 5-15

## 🎓 Полезные ресурсы

**Для проверки SEO:**
- Google Rich Results Test: https://search.google.com/test/rich-results
- Schema.org Validator: https://validator.schema.org/
- PageSpeed Insights: https://pagespeed.web.dev/

**Обучение:**
- Google SEO Starter Guide
- Yandex Вебмастер Help

## 💡 Советы

1. **Не спешите с оптимизацией** - изменения в SEO показывают результаты через 1-3 месяца
2. **Фокус на качество** - лучше 1 качественная статья, чем 10 посредственных
3. **Следите за конкурентами** - анализируйте их стратегию
4. **Тестируйте заголовки** - A/B тестирование title и description
5. **Собирайте отзывы** - они влияют на конверсию и доверие

---

**Вопросы?** Обращайтесь к документации в файлах:
- `SEO_OPTIMIZATION_STRATEGY.md` - полная стратегия
- `SEO_IMPLEMENTATION_GUIDE.md` - детальное руководство
- `SEO_QUICK_REFERENCE.md` - быстрая справка
