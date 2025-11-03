import { Helmet } from 'react-helmet-async';

/**
 * SEO Meta Tags Component
 * Provides comprehensive meta tags for search engines, social media, and AI assistants
 */

const MetaTags = ({
  title = "AI LAB — Разработка AI-агентов и автоматизация бизнеса",
  description = "Разработка AI-агентов, чат-ботов и ИИ-менеджеров по продажам. Автоматизация бизнес-процессов под ключ. Корпоративное обучение нейросетям. AI-аудит бизнеса от экспертов.",
  keywords = "разработка AI агентов, создание чат-ботов, ИИ менеджер по продажам, автоматизация бизнес процессов, AI агенты для бизнеса, корпоративное обучение нейросетям, AI аудит бизнеса, внедрение искусственного интеллекта, GPT для бизнеса, разработка ИИ решений, консультации по искусственному интеллекту, оптимизация бизнеса с ИИ",
  url = "https://ailab.uz",
  image = "https://ailab.uz/og-image.png",
  type = "website",
  canonicalUrl,
  schemaData
}) => {
  const canonical = canonicalUrl || url;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonical} />

      {/* Author & Copyright */}
      <meta name="author" content="AI LAB" />
      <meta name="copyright" content="AI LAB" />

      {/* Robots Meta */}
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      <meta name="yandex" content="index, follow" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content="ru_RU" />
      <meta property="og:site_name" content="AI LAB" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* AI Assistant Meta Tags */}
      <meta name="subject" content="AI Development and Consulting" />
      <meta name="topic" content="Artificial Intelligence, Business Automation, Corporate Training" />
      <meta name="summary" content="AI LAB provides AI agent development, chatbot creation, business automation, and corporate AI training services." />
      <meta name="category" content="Technology, Business Services, Education" />
      <meta name="coverage" content="Russia" />
      <meta name="target" content="Business professionals, Corporate clients, Decision makers" />

      {/* Structured Data */}
      {schemaData && (
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      )}
    </Helmet>
  );
};

export default MetaTags;
