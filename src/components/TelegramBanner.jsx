import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations/translations';

const TelegramBanner = () => {
  const { language } = useLanguage();
  const t = translations[language]?.telegramBanner || translations.ru.telegramBanner;

  return (
    <section className="section telegram-banner">
      <div className="container">
        <div className="telegram-banner-wrapper">
          <div className="telegram-photo">
            <img src="/images/team/Артем Панферов-compressed.jpeg" alt="Artem Panferov" />
          </div>
          <div className="telegram-content">
            <h3 className="telegram-title">{t.title}</h3>
            <p className="telegram-text">{t.text}</p>
          </div>
          <div className="telegram-button">
            <a href="https://t.me/Panferov_AI" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              {t.button}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TelegramBanner;
