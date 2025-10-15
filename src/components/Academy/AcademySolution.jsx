import { useSlider } from '../../hooks/useSlider';

const AcademySolution = () => {
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

  return (
    <section id="academy-solution" className="section academy-solution">
      <div className="container">
        <div className="academy-solution-header">
          <h2 className="academy-solution-title">Решение — AI LAB Academy</h2>
          <p className="academy-solution-subtitle">
            Превращаем искусственный интеллект в инструмент роста для вашей команды
          </p>
        </div>
        <div className="academy-solution-content">
          <div className="academy-results">
            <div className="academy-result-card">
              <h3 className="academy-result-title">Снижение операционных затрат на 10–30%</h3>
              <p className="academy-result-text">
                Автоматизация рутинных процессов освобождает ресурсы для стратегических задач
              </p>
            </div>
            <div className="academy-result-card">
              <h3 className="academy-result-title">Экономия 5–10 часов в неделю</h3>
              <p className="academy-result-text">
                Каждый сотрудник получает больше времени на творческие и важные задачи
              </p>
            </div>
            <div className="academy-result-card">
              <h3 className="academy-result-title">Реальные кейсы и готовые решения</h3>
              <p className="academy-result-text">
                Разбираем задачи сотрудников и создаем инструменты автоматизации под них
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
