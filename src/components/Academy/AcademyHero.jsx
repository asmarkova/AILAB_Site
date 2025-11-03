import { MeshGradientAcademy } from './MeshGradientAcademy';
import { useLanguage } from '../../contexts/LanguageContext';
import { translations } from '../../translations/translations';

const AcademyHero = () => {
  const { language } = useLanguage();
  const t = translations[language]?.academyPage?.hero || translations.ru.academyPage.hero;
  const handleLinkClick = (e, href) => {
    e.preventDefault();

    if (href !== '#' && href.length > 1) {
      const target = document.querySelector(href);
      if (target) {
        const navHeight = document.querySelector('.nav')?.offsetHeight || 0;
        const targetPosition = target.offsetTop - navHeight;
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <section className="section academy-hero">
      <MeshGradientAcademy
        speed={1.2}
        colors={['#1a1a1a', '#2d1b4e', '#4C1D95', '#6D28D9', '#7C3AED', '#8B5CF6']}
      />
      <div className="academy-hero-overlay"></div>
      <div className="container">
        <div className="academy-hero-content">
          <h1 className="academy-hero-title">
            {t.title.split('\n').map((line, i) => (
              <span key={i}>
                {line}
                {i < t.title.split('\n').length - 1 && <br />}
              </span>
            ))}
          </h1>
          <p className="academy-hero-subtitle">
            {t.subtitle.split('\n').map((line, i) => (
              <span key={i}>
                {line}
                {i < t.subtitle.split('\n').length - 1 && <br />}
              </span>
            ))}
          </p>
          <div className="academy-hero-actions">
            <a
              href="#academy-cta"
              className="btn btn-primary btn-lg"
              onClick={(e) => handleLinkClick(e, '#academy-cta')}
            >
              {t.cta}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AcademyHero;
