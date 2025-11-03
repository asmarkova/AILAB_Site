import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations/translations';

const CTA = () => {
  const { language } = useLanguage();
  const t = translations[language]?.cta || translations.ru.cta;

  return (
    <section id="forma" className="section cta">
      <div className="container">
        <div className="cta-wrapper">
          <div className="cta-content">
            <h2 className="cta-title">{t.title}</h2>
            <p className="cta-text">
              {t.text}
            </p>
          </div>
          <div className="cta-button">
            <a
              href="https://t.me/endcode_manager"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-cta"
            >
              {t.button}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
