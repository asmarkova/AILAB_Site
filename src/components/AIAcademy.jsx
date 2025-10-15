import { useSlider } from '../hooks/useSlider';
import { Link } from 'react-router-dom';

const AIAcademy = () => {
  const images = [
    '/Фото Обучение/1-compressed.jpeg',
    '/Фото Обучение/2-compressed.jpeg',
    '/Фото Обучение/3-compressed.jpeg',
    '/Фото Обучение/4-compressed.jpeg',
    '/Фото Обучение/5-compressed.jpeg',
    '/Фото Обучение/6-compressed.jpeg',
    '/Фото Обучение/7-compressed.jpeg',
    '/Фото Обучение/8-compressed.jpeg',
    '/Фото Обучение/9-compressed.jpeg'
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
          <div className="academy-badge">Популярно сегодня</div>
          <div className="academy-content">
            <div className="academy-info">
              <h2 className="academy-title">AI Academy</h2>
              <p className="academy-subtitle">
                Корпоративные тренинги, которые превращают AI-технологии в конкурентное преимущество вашей компании от эксперта лаборатории Артема Панферова
              </p>
              <Link to="/academy" className="btn btn-primary btn-academy" onClick={handleAcademyClick}>
                Узнать больше
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
