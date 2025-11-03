import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations/translations';

const ProjectsCTA = () => {
  const { language } = useLanguage();
  const t = translations[language]?.projectsCTA || translations.ru.projectsCTA;
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
    <section className="section projects-cta">
      <div className="container">
        <div className="projects-cta-wrapper">
          <div className="projects-cta-content">
            <h3 className="projects-cta-title">
              {t.title}
            </h3>
            <p className="projects-cta-text">
              {t.text}
            </p>
          </div>
          <div className="projects-cta-button">
            <a
              href="https://t.me/endcode_manager"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-projects-cta"
            >
              {t.button}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsCTA;
