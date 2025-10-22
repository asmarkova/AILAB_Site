import { useEffect } from 'react';
import { useScrollEffect } from '../hooks/useScrollEffect';

// SEO Components
import MetaTags from '../components/SEO/MetaTags';
import {
  organizationSchema,
  professionalServiceSchema,
  createWebPageSchema,
  createFAQSchema,
  homePageFAQs
} from '../data/schemas';

// Import all components
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import BigQuote from '../components/BigQuote';
import About from '../components/About';
import BentoInfo from '../components/BentoInfo';
import TelegramBanner from '../components/TelegramBanner';
import Services from '../components/Services';
import AIAcademy from '../components/AIAcademy';
import YouTubeVideo from '../components/YouTubeVideo';
import Projects from '../components/Projects';
import ProjectsCTA from '../components/ProjectsCTA';
import Testimonials from '../components/Testimonials';
import Team from '../components/Team';
import Partners from '../components/Partners';
import CTA from '../components/CTA';
import YouTubeCarousel from '../components/YouTubeCarousel';
import Articles from '../components/Articles';
import Footer from '../components/Footer';

const HomePage = () => {
  // Initialize scroll animations
  useScrollEffect();

  useEffect(() => {
    // Add loaded class to body when component mounts
    document.body.classList.add('loaded');

    // Console messages
    console.log('%c🚀 AI LAB - Оптимизация бизнеса с помощью ИИ', 'color: #8b5cf6; font-size: 16px; font-weight: bold;');
    console.log('%cСвяжитесь с нами: manager@ai-lab.company', 'color: #a0a0a0; font-size: 12px;');
  }, []);

  // Create combined schema for HomePage
  const homeSchema = {
    "@context": "https://schema.org",
    "@graph": [
      organizationSchema,
      professionalServiceSchema,
      createWebPageSchema(
        "AI LAB — Разработка AI-агентов и автоматизация бизнеса",
        "https://ai-lab.company/",
        [{ name: "Главная", url: "https://ai-lab.company/" }]
      ),
      createFAQSchema(homePageFAQs)
    ]
  };

  return (
    <>
      <MetaTags
        title="AI LAB — Оптимизация бизнеса с помощью искусственного интеллекта | Ташкент"
        description="AI LAB. Оптимизация бизнеса с помощью искусственного интеллекта. Корпоративное обучение работе с нейросетями в Ташкенте от эксперта Артема Панферова. AI-аудит. Разработка AI-инструментов для бизнеса."
        keywords="AI LAB Ташкент, оптимизация бизнеса искусственный интеллект, Артем Панферов AI, корпоративное обучение нейросетям Ташкент, AI аудит бизнеса, разработка AI инструментов, разработка AI агентов, создание чат-ботов, автоматизация бизнес процессов, обучение нейросетям Узбекистан, AI эксперт Ташкент"
        url="https://ai-lab.company/"
        image="https://ai-lab.company/og-image-home.jpg"
        canonicalUrl="https://ai-lab.company/"
        schemaData={homeSchema}
      />
      <Navigation />
      <Hero />
      <BigQuote />
      <About />
      <BentoInfo />
      <YouTubeVideo />
      <TelegramBanner />
      <Services />
      <AIAcademy />
      <Projects />
      <ProjectsCTA />
      <Testimonials />
      <Team />
      <Partners />
      <CTA />
      <YouTubeCarousel />
      <Articles />
      <Footer />
    </>
  );
};

export default HomePage;
