import { ParticlesBackground } from './Background/ParticlesBackground';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations/translations';

const Hero = () => {
  const { language } = useLanguage();
  const t = translations[language]?.hero || translations.ru.hero;
  const handleLinkClick = (e, href) => {
    e.preventDefault();

    if (href !== '#' && href.length > 1) {
      const target = document.querySelector(href);
      if (target) {
        const navHeight = document.querySelector('.nav').offsetHeight;
        const targetPosition = target.offsetTop - navHeight;
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <section className="hero">
      <ParticlesBackground />
      <div className="container">
        <div className="hero-layout">
          <div className="hero-main">
            <h1 className="hero-title">
              <span className="hero-line">{t.title1}</span>
              <span className="hero-line">{t.title2}</span>
            </h1>
            <p className="hero-subtitle">{t.subtitle}</p>
            <a href="#forma" className="btn btn-hero" onClick={(e) => handleLinkClick(e, '#forma')}>
              {t.cta}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
