import { useSlider } from '../../hooks/useSlider';

const AcademyPhotos = () => {
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

  return (
    <section className="section academy-photos">
      <div className="container">
        <div className="academy-photos-header">
          <h2 className="academy-photos-title">Фото с наших обучений</h2>
          <p className="academy-photos-subtitle">
            Взгляд изнутри на атмосферу наших корпоративных тренингов
          </p>
        </div>
        <div className="academy-slider-wrapper">
          <button
            className="slider-btn slider-btn-prev"
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
            className="slider-btn slider-btn-next"
            onClick={goToNext}
            aria-label="Next"
          >
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default AcademyPhotos;
