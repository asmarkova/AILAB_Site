import { useSlider } from '../hooks/useSlider';

const AIAcademy = () => {
  const images = [
    '/Фото Обучение/1.JPG',
    '/Фото Обучение/2.JPG',
    '/Фото Обучение/3.JPG',
    '/Фото Обучение/4.jpeg',
    '/Фото Обучение/5.PNG',
    '/Фото Обучение/6.PNG',
    '/Фото Обучение/7.JPG',
    '/Фото Обучение/8.PNG',
    '/Фото Обучение/9.PNG'
  ];

  const { currentIndex, goToNext, goToPrev, pauseAutoPlay, resumeAutoPlay } = useSlider(
    images.length,
    true,
    5000
  );

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
    <section id="academy" className="section ai-academy">
      <div className="container">
        <div className="academy-content">
          <div className="academy-info">
            <h2 className="academy-title">AI Academy</h2>
            <p className="academy-subtitle">
              Корпоративные тренинги, которые превращают AI-технологии в конкурентное преимущество вашей компании от эксперта лаборатории Артема Панферова
            </p>
            <a href="#forma" className="btn btn-primary btn-academy" onClick={(e) => handleLinkClick(e, '#forma')}>
              Узнать больше
            </a>
          </div>
          <div className="academy-slider-wrapper">
            <button
              className="academy-slider-nav academy-prev"
              onClick={goToPrev}
              aria-label="Previous"
            >
              ←
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
              className="academy-slider-nav academy-next"
              onClick={goToNext}
              aria-label="Next"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIAcademy;
