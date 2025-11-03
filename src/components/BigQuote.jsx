import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations/translations';

const BigQuote = () => {
  const { language } = useLanguage();
  const t = translations[language]?.bigQuote || translations.ru.bigQuote;

  return (
    <section className="section big-quote-section">
      <div className="container">
        <div className="big-quote">
          <blockquote>
            <p>"{t.text}"</p>
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default BigQuote;
