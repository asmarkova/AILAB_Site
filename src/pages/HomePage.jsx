import { useEffect } from 'react';
import { useScrollEffect } from '../hooks/useScrollEffect';

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

  return (
    <>
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
      <Articles />
      <Footer />
    </>
  );
};

export default HomePage;
