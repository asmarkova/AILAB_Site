# SEO Implementation Guide

## Quick Start

This guide shows you how to implement the SEO optimization strategy for AI LAB website.

---

## Files Created

1. **SEO_OPTIMIZATION_STRATEGY.md** - Complete SEO strategy document
2. **public/sitemap.xml** - XML sitemap for search engines
3. **public/robots.txt** - Robots directives for crawlers
4. **src/components/SEO/MetaTags.jsx** - Reusable meta tags component
5. **src/data/schemas.js** - JSON-LD structured data schemas

---

## Step 1: Update HomePage

### 1.1 Add MetaTags to HomePage.jsx

```jsx
import MetaTags from '../components/SEO/MetaTags';
import {
  organizationSchema,
  professionalServiceSchema,
  homePageFAQs,
  createFAQSchema
} from '../data/schemas';

const HomePage = () => {
  useScrollEffect();

  useEffect(() => {
    document.body.classList.add('loaded');
    console.log('%c🚀 AI LAB - Оптимизация бизнеса с помощью ИИ', 'color: #8b5cf6; font-size: 16px; font-weight: bold;');
    console.log('%cСвяжитесь с нами: manager@ai-lab.company', 'color: #a0a0a0; font-size: 12px;');
  }, []);

  // Combine schemas
  const schemas = [
    organizationSchema,
    professionalServiceSchema,
    createFAQSchema(homePageFAQs)
  ];

  return (
    <>
      <MetaTags
        title="AI LAB — Разработка AI-агентов и автоматизация бизнеса"
        description="Разработка AI-агентов, чат-ботов и ИИ-менеджеров по продажам. Автоматизация бизнес-процессов под ключ. Корпоративное обучение нейросетям. AI-аудит бизнеса от экспертов."
        keywords="разработка AI агентов, создание чат-ботов, ИИ менеджер по продажам, автоматизация бизнес процессов, AI агенты для бизнеса, корпоративное обучение нейросетям, AI аудит бизнеса"
        url="https://ai-lab.company/"
        image="https://ai-lab.company/og-image-home.jpg"
        schemaData={schemas}
      />

      <Navigation />
      <Hero />
      {/* ... rest of components */}
    </>
  );
};
```

### 1.2 Add H1 to Hero Component

Open `src/components/Hero.jsx` and ensure there's an H1 tag:

```jsx
const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <h1 className="hero-title">
          AI LAB — Разработка AI-агентов и автоматизация бизнеса
        </h1>
        <p className="hero-subtitle">
          Оптимизируем бизнес с помощью искусственного интеллекта
        </p>
        {/* ... rest of hero content */}
      </div>
    </section>
  );
};
```

---

## Step 2: Update Academy Page

### 2.1 Add MetaTags to AcademyPage.jsx

```jsx
import MetaTags from '../components/SEO/MetaTags';
import {
  organizationSchema,
  educationalOrganizationSchema,
  courseSchema,
  academyPageFAQs,
  createFAQSchema,
  createWebPageSchema
} from '../data/schemas';

const AcademyPage = () => {
  // Combine schemas
  const breadcrumbs = [
    { name: "Главная", url: "https://ai-lab.company/" },
    { name: "AI Academy", url: "https://ai-lab.company/academy" }
  ];

  const schemas = [
    organizationSchema,
    educationalOrganizationSchema,
    courseSchema,
    createFAQSchema(academyPageFAQs),
    createWebPageSchema(
      "AI Academy — Корпоративное обучение нейросетям",
      "https://ai-lab.company/academy",
      breadcrumbs
    )
  ];

  return (
    <>
      <MetaTags
        title="AI Academy — Корпоративное обучение нейросетям | AI LAB"
        description="Корпоративное обучение работе с нейросетями от экспертов AI LAB. Практические курсы по ChatGPT, Midjourney, автоматизации с ИИ. Повышение эффективности команды на 40%. Обучение под ключ."
        keywords="корпоративное обучение нейросетям, обучение работе с ChatGPT, курсы по искусственному интеллекту для бизнеса, обучение сотрудников ИИ, промпт инжиниринг обучение"
        url="https://ai-lab.company/academy"
        image="https://ai-lab.company/og-image-academy.jpg"
        canonicalUrl="https://ai-lab.company/academy"
        schemaData={schemas}
      />

      <div className="academy-page">
        <div className="grid-pattern-global"></div>
        <Navigation />
        <AcademyHero />
        {/* ... rest of components */}
      </div>
    </>
  );
};
```

### 2.2 Add H1 to AcademyHero Component

Open `src/components/Academy/AcademyHero.jsx` and add H1:

```jsx
const AcademyHero = () => {
  return (
    <section className="academy-hero">
      <div className="container">
        <h1 className="academy-hero-title">
          AI Academy — Корпоративное обучение нейросетям
        </h1>
        <p className="academy-hero-subtitle">
          Обучите команду работе с искусственным интеллектом за 1 день
        </p>
        {/* ... rest of hero content */}
      </div>
    </section>
  );
};
```

---

## Step 3: Update Services Component

Add proper semantic structure to Services.jsx:

```jsx
const Services = () => {
  const services = [
    {
      number: '01',
      name: 'AI Academy',
      title: 'Корпоративное обучение нейросетям',
      description: 'Обучающие сессии от экспертов AI LAB для корпоративных команд по использованию искусственного интеллекта в процессах работы'
    },
    {
      number: '02',
      name: 'AI Audit',
      title: 'AI-аудит и стратегия внедрения',
      description: 'Исследование бизнес-процессов вашей компании, выявление точек роста и формирование дорожной карты AI-автоматизации'
    },
    {
      number: '03',
      name: 'AI Development',
      title: 'Разработка AI-решений под ключ',
      description: 'Разработка и внедрение кастомных решений для автоматизации бизнес-процессов вашей компании с помощью искусственного интеллекта'
    }
  ];

  return (
    <section id="services" className="section services">
      <div className="container">
        <h2 className="services-title">Направления лаборатории</h2>
        <div className="services-grid-new">
          {services.map((service, index) => (
            <article key={index} className="service-card-new" data-animate>
              <div className="service-number">{service.number}</div>
              <h3 className="service-name">{service.title}</h3>
              <p className="service-desc">{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
```

---

## Step 4: Create OG Images

You need to create Open Graph images for social sharing:

### Requirements:
- **Size:** 1200x630px
- **Format:** JPG or PNG
- **Location:** `/public/og-image-home.jpg` and `/public/og-image-academy.jpg`

### Design Guidelines:
- Include AI LAB logo
- Key message/value proposition
- Clean, professional design
- High contrast for readability
- Brand colors (purple/violet theme)

### Example Design Structure:
```
┌─────────────────────────────────┐
│  [AI LAB Logo]                  │
│                                 │
│  AI LAB                         │
│  Разработка AI-агентов          │
│  и автоматизация бизнеса        │
│                                 │
│  ai-lab.company                 │
└─────────────────────────────────┘
```

---

## Step 5: Update Main App Component

Wrap your app with HelmetProvider for react-helmet-async:

```jsx
// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import App from './App.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </React.StrictMode>,
);
```

---

## Step 6: Update index.html

Update the base HTML file with minimal meta tags (components will override):

```html
<!doctype html>
<html lang="ru">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />

    <!-- Base meta tags - will be overridden by components -->
    <meta name="description" content="AI LAB — Разработка AI-агентов и автоматизация бизнеса" />
    <title>AI LAB</title>

    <!-- Preconnect to improve performance -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

---

## Step 7: Add FAQ Section (Optional but Recommended)

Create a new FAQ component for both pages:

```jsx
// src/components/FAQ.jsx
const FAQ = ({ items }) => {
  return (
    <section className="faq-section">
      <div className="container">
        <h2>Часто задаваемые вопросы</h2>
        <div className="faq-grid">
          {items.map((item, index) => (
            <details key={index} className="faq-item">
              <summary className="faq-question">
                <h3>{item.question}</h3>
              </summary>
              <div className="faq-answer">
                <p>{item.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
```

Add to HomePage:
```jsx
import FAQ from '../components/FAQ';
import { homePageFAQs } from '../data/schemas';

// In HomePage component, before Footer:
<FAQ items={homePageFAQs} />
```

Add to AcademyPage:
```jsx
import FAQ from '../components/FAQ';
import { academyPageFAQs } from '../data/schemas';

// In AcademyPage component, before Footer:
<FAQ items={academyPageFAQs} />
```

---

## Step 8: Test Implementation

### 8.1 Build and Deploy

```bash
npm run build
```

### 8.2 Test Structured Data

After deployment, test your structured data:

1. **Google Rich Results Test**
   - URL: https://search.google.com/test/rich-results
   - Test both pages: `/` and `/academy`

2. **Yandex Validator**
   - URL: https://webmaster.yandex.ru/tools/microtest/
   - Check all schemas

3. **Schema.org Validator**
   - URL: https://validator.schema.org/
   - Paste your page HTML

### 8.3 Check Meta Tags

Use browser extensions:
- **Meta SEO Inspector** (Chrome)
- **SEO META in 1 CLICK** (Chrome/Firefox)

Or check manually in browser DevTools:
```javascript
// Open Console and run:
document.querySelector('meta[name="description"]').content
document.querySelector('meta[property="og:title"]').content
```

---

## Step 9: Submit to Search Engines

### 9.1 Google Search Console

1. Go to https://search.google.com/search-console
2. Add property: `ai-lab.company`
3. Verify ownership (HTML tag method)
4. Submit sitemap: `https://ai-lab.company/sitemap.xml`

### 9.2 Yandex Webmaster

1. Go to https://webmaster.yandex.ru/
2. Add site: `https://ai-lab.company`
3. Verify ownership
4. Submit sitemap: `https://ai-lab.company/sitemap.xml`
5. Enable Turbo Pages (optional)

---

## Step 10: Set Up Analytics

### 10.1 Yandex.Metrica

1. Create counter at https://metrika.yandex.ru/
2. Get tracking code
3. Add to `index.html` before closing `</head>`:

```html
<!-- Yandex.Metrica -->
<script type="text/javascript">
   (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
   m[i].l=1*new Date();
   for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
   k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
   (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

   ym(YOUR_COUNTER_ID, "init", {
        clickmap:true,
        trackLinks:true,
        accurateTrackBounce:true,
        webvisor:true
   });
</script>
<noscript><div><img src="https://mc.yandex.ru/watch/YOUR_COUNTER_ID" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
<!-- /Yandex.Metrica -->
```

### 10.2 Google Analytics 4

1. Create property at https://analytics.google.com/
2. Get Measurement ID
3. Add to `index.html` before closing `</head>`:

```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

---

## Step 11: Monitor and Optimize

### Weekly Tasks:
- [ ] Check Google Search Console for errors
- [ ] Check Yandex Webmaster for issues
- [ ] Monitor site speed (PageSpeed Insights)
- [ ] Review traffic in analytics

### Monthly Tasks:
- [ ] Analyze keyword rankings
- [ ] Review top landing pages
- [ ] Check competitor changes
- [ ] Update content if needed
- [ ] Add new FAQ items based on user questions

---

## Verification Checklist

After implementation, verify:

- [ ] Both pages have unique titles
- [ ] Both pages have unique descriptions
- [ ] H1 exists on both pages and is unique
- [ ] Canonical tags are present
- [ ] OG images are created and linked
- [ ] All schemas validate without errors
- [ ] Sitemap.xml is accessible
- [ ] Robots.txt is accessible
- [ ] Google Search Console is set up
- [ ] Yandex Webmaster is set up
- [ ] Analytics tracking is working
- [ ] Mobile version looks good
- [ ] Page speed is acceptable (< 3s)

---

## Expected Results Timeline

**Week 1-2:**
- Search engines discover sitemap
- Initial indexing begins
- Structured data appears in search console

**Week 3-4:**
- Pages fully indexed
- First ranking improvements
- Structured data shows in search results

**Month 2-3:**
- Significant traffic increase (50-100%)
- Multiple keywords in top 30
- AI assistants reference your content

**Month 4-6:**
- 200-300% traffic increase
- 15-20 keywords in top 10
- Established authority in AI development niche

---

## Troubleshooting

### Issue: Schemas not validating
**Solution:** Check JSON syntax, ensure all required fields are present

### Issue: Pages not indexing
**Solution:** Check robots.txt, verify sitemap submission, check for crawl errors

### Issue: Duplicate meta tags
**Solution:** Ensure react-helmet-async is properly configured, check for conflicts in index.html

### Issue: OG images not showing
**Solution:** Verify image URLs are absolute, check image dimensions (1200x630), clear Facebook/LinkedIn cache

---

## Additional Resources

- [Google Search Console Help](https://support.google.com/webmasters)
- [Yandex Webmaster Help](https://yandex.ru/support/webmaster/)
- [Schema.org Documentation](https://schema.org/)
- [Open Graph Protocol](https://ogp.me/)
- [React Helmet Async Docs](https://github.com/staylor/react-helmet-async)

---

## Support

If you need help implementing these changes:
1. Review the main strategy document: `SEO_OPTIMIZATION_STRATEGY.md`
2. Check component examples in `/src/components/SEO/`
3. Review schema definitions in `/src/data/schemas.js`

Good luck with your SEO optimization!
