import { useSlider } from '../../hooks/useSlider';
import { useLanguage } from '../../contexts/LanguageContext';
import { translations } from '../../translations/translations';

const AcademySolution = () => {
  const { language } = useLanguage();
  const t = translations[language]?.academyPage?.solution || translations.ru.academyPage.solution;
  const images = [
    '/training-photos/1-compressed.jpeg',
    '/training-photos/2-compressed.jpeg',
    '/training-photos/3-compressed.jpeg',
    '/training-photos/4-compressed.jpeg',
    '/training-photos/5-compressed.jpeg',
    '/training-photos/6-compressed.jpeg',
    '/training-photos/7-compressed.jpeg',
    '/training-photos/8-compressed.jpeg',
    '/training-photos/9-compressed.jpeg'
  ];

  const { currentIndex, goToNext, goToPrev, pauseAutoPlay, resumeAutoPlay } = useSlider(
    images.length,
    true,
    5000
  );

  return (
    <section id="academy-solution" className="section academy-solution">
      <div className="container">
        <div className="academy-solution-header">
          <h2 className="academy-solution-title">{t.title}</h2>
          <p className="academy-solution-subtitle">
            {t.subtitle}
          </p>
        </div>
        <div className="academy-solution-content">
          <div className="academy-results">
            <div className="academy-result-card">
              <h3 className="academy-result-title">{t.results.cost.title}</h3>
              <p className="academy-result-text">
                {t.results.cost.text}
              </p>
            </div>
            <div className="academy-result-card">
              <h3 className="academy-result-title">{t.results.time.title}</h3>
              <p className="academy-result-text">
                {t.results.time.text}
              </p>
            </div>
            <div className="academy-result-card">
              <h3 className="academy-result-title">{t.results.cases.title}</h3>
              <p className="academy-result-text">
                {t.results.cases.text}
              </p>
            </div>
          </div>
          <div className="academy-solution-photos">
            <div className="academy-photos-slider-wrapper">
              <button
                className="slider-btn slider-btn-prev"
                onClick={goToPrev}
                aria-label="Previous"
              >
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <div
                className="academy-photos-slider"
                onMouseEnter={pauseAutoPlay}
                onMouseLeave={resumeAutoPlay}
              >
                <div
                  className="academy-photos-slider-track"
                  style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                  {images.map((image, index) => (
                    <div key={index} className="academy-photo-slide">
                      <img src={image} alt={`AI Academy Training ${index + 1}`} />
                    </div>
                  ))}
                </div>
              </div>
              <button
                className="slider-btn slider-btn-next"
                onClick={goToNext}
                aria-label="Next"
              >
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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

export default AcademySolution;
