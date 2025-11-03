import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations/translations';

const BentoInfo = () => {
  const { language } = useLanguage();
  const t = translations[language]?.bentoInfo || translations.ru.bentoInfo;

  return (
    <section className="section bento-info">
      <div className="container">
        <div className="bento-grid">
          {/* Photo Card */}
          <div className="bento-card bento-photo">
            <img src="/Блок доп.инфо/AI LAB Founders-compressed.jpeg" alt="AI LAB Founders" />
          </div>

          {/* 700+ Card */}
          <div className="bento-card bento-stat">
            <h3 className="bento-number">{t.trainedCount}</h3>
            <p className="bento-text">{t.trainedText}</p>
            <p className="bento-date">{t.sinceDate}</p>
          </div>

          {/* IT Park Residents Card */}
          <a href="https://it-park.uz/uz/itpark" target="_blank" rel="noopener noreferrer" className="bento-card bento-itpark">
            <img src="/Блок доп.инфо/Logo_IT_Park_Uzbekistan.svg 2.png" alt="IT Park" className="bento-logo-itpark" />
            <h3 className="bento-title">{t.itParkTitle}</h3>
            <p className="bento-subtitle">{t.itParkSubtitle}</p>
          </a>

          {/* PRO Business Card */}
          <a href="https://www.instagram.com/probusiness.tashkent/" target="_blank" rel="noopener noreferrer" className="bento-card bento-probusiness">
            <p className="bento-label">{t.proBusinessLabel}</p>
            <img src="/Блок доп.инфо/PRO BUSINESS.png" alt="PRO BUSINESS" className="bento-logo-probusiness" />
          </a>

          {/* Top AI Experts Card */}
          <a href="https://uz.kursiv.media/2025-08-31/yuksalish-obyavil-top-30-liderov-v-uzbekistane-v-sfere-ii/" target="_blank" rel="noopener noreferrer" className="bento-card bento-experts">
            <div className="bento-experts-content">
              <h3 className="bento-experts-title">{t.expertsTitle}</h3>
              <p className="bento-experts-text">{t.expertsText}</p>
            </div>
            <div className="bento-experts-logos">
              <img src="/Блок доп.инфо/AICA logo.png" alt="AICA" className="bento-logo-aica" />
              <img src="/Блок доп.инфо/Yuksalish.png" alt="Yuksalish" className="bento-logo-yuksalish" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default BentoInfo;
