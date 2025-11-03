import { useSlider } from '../hooks/useSlider';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations/translations';

const AIAcademy = () => {
  const { language } = useLanguage();
  const t = translations[language]?.aiAcademy || translations.ru.aiAcademy;
  const images = [
    '/images/training/1-compressed.jpeg',
    '/images/training/2-compressed.jpeg',
    '/images/training/3-compressed.jpeg',
    '/images/training/4-compressed.jpeg',
    '/images/training/5-compressed.jpeg',
    '/images/training/6-compressed.jpeg',
    '/images/training/7-compressed.jpeg',
    '/images/training/8-compressed.jpeg',
    '/images/training/9-compressed.jpeg'
  ];

  const { currentIndex, goToNext, goToPrev, pauseAutoPlay, resumeAutoPlay } = useSlider(
    images.length,
    true,
    5000
  );

  const handleAcademyClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="academy" className="section ai-academy">
      <div className="container">
        <div className="academy-wrapper">
          <div className="academy-badge">{t.badge}</div>
          <div className="academy-content">
            <div className="academy-info">
              <h2 className="academy-title">{t.title}</h2>
              <p className="academy-subtitle">
                {t.subtitle}
              </p>
              <Link to="/academy" className="btn btn-primary btn-academy" onClick={handleAcademyClick}>
                {t.learnMore}
              </Link>
            </div>
          <div className="academy-slider-wrapper">
            <button
              className="slider-btn slider-btn-prev academy-slider-btn-prev"
              onClick={goToPrev}
              aria-label="Previous"
            >
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <div
              className="academy-slider"
              onMouseEnter={pauseAutoPlay}
              onMouseLeave={resumeAutoPlay}
            >
              <div
                className="academy-slider-track"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {images.map((image, index) => (
                  <div key={index} className="academy-slide">
                    <img src={image} alt={`AI Academy Training ${index + 1}`} />
                  </div>
                ))}
              </div>
            </div>
            <button
              className="slider-btn slider-btn-next academy-slider-btn-next"
              onClick={goToNext}
              aria-label="Next"
            >
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default AIAcademy;
