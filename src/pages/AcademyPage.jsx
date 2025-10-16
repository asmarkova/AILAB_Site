import '../styles.css';
import '../styles/academy.css';

// SEO Components
import MetaTags from '../components/SEO/MetaTags';
import {
  organizationSchema,
  educationalOrganizationSchema,
  courseSchema,
  createWebPageSchema,
  createFAQSchema,
  academyPageFAQs
} from '../data/schemas';

import Navigation from '../components/Navigation';
import AcademyHero from '../components/Academy/AcademyHero';
import AcademyProblem from '../components/Academy/AcademyProblem';
import AcademySolution from '../components/Academy/AcademySolution';
import BigQuote from '../components/BigQuote';
import BentoInfo from '../components/BentoInfo';
import AcademyExperts from '../components/Academy/AcademyExperts';
import YouTubeVideo from '../components/YouTubeVideo';
import Projects from '../components/Projects';
import ProjectsCTA from '../components/ProjectsCTA';
import Testimonials from '../components/Testimonials';
import Partners from '../components/Partners';
import AcademyPricing from '../components/Academy/AcademyPricing';
import AcademyCTA from '../components/Academy/AcademyCTA';
import YouTubeCarousel from '../components/YouTubeCarousel';
import Footer from '../components/Footer';

const AcademyPage = () => {
  // Create combined schema for AcademyPage
  const academySchema = {
    "@context": "https://schema.org",
    "@graph": [
      organizationSchema,
      educationalOrganizationSchema,
      courseSchema,
      createWebPageSchema(
        "AI Academy — Корпоративное обучение нейросетям и ИИ",
        "https://ai-lab.company/academy",
        [
          { name: "Главная", url: "https://ai-lab.company/" },
          { name: "AI Academy", url: "https://ai-lab.company/academy" }
        ]
      ),
      createFAQSchema(academyPageFAQs)
    ]
  };

  return (
    <div className="academy-page">
      <MetaTags
        title="AI Academy — Корпоративное обучение нейросетям | Тренинги по ИИ для бизнеса"
        description="Корпоративное обучение работе с нейросетями: ChatGPT, Midjourney, AI-агенты. Практические тренинги для команд. Онлайн и офлайн форматы. Сертификат AI LAB. Повысьте эффективность бизнеса с ИИ."
        keywords="корпоративное обучение нейросетям, обучение работе с ChatGPT, курсы по искусственному интеллекту, AI тренинги для бизнеса, обучение сотрудников ИИ, промпт инжиниринг обучение, Midjourney обучение, GPT для бизнеса курсы, корпоративные AI тренинги, обучение AI агентам, практические курсы по нейросетям"
        url="https://ai-lab.company/academy"
        image="https://ai-lab.company/og-image-academy.jpg"
        type="website"
        canonicalUrl="https://ai-lab.company/academy"
        schemaData={academySchema}
      />
      <div className="grid-pattern-global"></div>
      <Navigation />
      <AcademyHero />
      <AcademyProblem />
      <AcademySolution />
      <BigQuote />
      <BentoInfo />
      <AcademyExperts />
      <YouTubeVideo />
      <Projects />
      <ProjectsCTA />
      <Testimonials />
      <Partners />
      <AcademyPricing />
      <AcademyCTA />
      <YouTubeCarousel />
      <Footer />
    </div>
  );
};

export default AcademyPage;
