import { useState, useEffect, useRef } from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Рустам Джураев',
      position: 'Начальник отдела стратегии и аналитики IT Park Uzbekistan',
      photo: '/testimonials/Рустам Джураев.jpeg',
      text: 'Большое спасибо команде AI LAB за проведённый воркшоп. На самом деле узнали очень много нового, очень много полезного. Открыли для себя новые двери, которые раньше не были открыты. Надеемся на дальнейшее плодотворное сотрудничество. Знания, которые мы получили от ребят из AI LAB, безусловно повысят нашу эффективность и помогут нам с автоматизацией наших процессов. Спасибо большое.'
    },
    {
      name: 'Алина Шилкина',
      position: 'Предприниматель и директор Novacore',
      photo: '/testimonials/Алина Шилкина.jpeg',
      text: 'Команда AI LAB научила нас пользоваться нейросетями. И скажу сразу: все задачи, которые раньше занимали у меня 2–3 часа, теперь выполняются за 2–3 минуты. Поэтому команде AI LAB огромное спасибо за то, что помогли улучшить и оптимизировать бизнес-процессы в нашей компании'
    },
    {
      name: 'Рано Хамидова',
      position: 'HR-директор IT Park Uzbekistan',
      photo: '/testimonials/Рано Хамидова.jpeg',
      text: 'Мы провели воркшоп и изучили фишки, которые, я уверена, добавят очень много моментов в нашу продуктивность. И я очень рекомендую приглашать этих ребят, потому что уверена — вашим командам это будет очень полезно.'
    },
    {
      name: 'Анна Ким',
      position: 'Финансовый директор',
      photo: '/testimonials/Анна Ким.jpeg',
      text: 'Казалось бы, мало что может удивить — всё уже доступно. Но сегодняшняя лекция, знаете, поломала все границы моего мира. Я получила столько информации, столько инсайтов в голове, столько удивления и эмоций! Не знаю, когда я в последний раз испытывала такое ощущение новизны и вдохновения. Не могу даже выразить словами, но вы меня сегодня реально удивили. Огромное вам спасибо — это искренне'
    },
    {
      name: 'Сергей Зубков',
      position: 'Основатель эстонской студии разработки Prosightdev',
      photo: '/testimonials/Сергей Зубков.jpeg',
      text: 'Сегодня мы пригласили Артёма из AI LAB, который нам провел очень интересную лекцию по искусственному интеллекту. Подчеркнули много интересного, обязательно будем новые вещи у себя внедрять'
    },
    {
      name: 'Сергей Седых',
      position: 'Бизнес-аналитик в газовой компании «Экс-Форма»',
      photo: '/testimonials/Сергей Седых.jpeg',
      text: 'Программа действительно получилась интересной и продуманной. Всё было проведено достаточно подробно. Думаю, что мы обязательно проведём ещё одну сессию, чтобы закрепить результат. Хочу добавить: было комфортно, легко и познавательно.'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const textRefs = useRef([]);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  // Auto-play slider
  useEffect(() => {
    if (!isAutoPlaying || isHovered) return;

    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        setTimeout(() => setIsAnimating(false), 100);
      }, 200);
    }, 3000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, isHovered, testimonials.length]);

  // Auto-scroll text on hover
  useEffect(() => {
    if (hoveredCard === null) return;

    const textElement = textRefs.current[hoveredCard];
    if (!textElement) return;

    const isOverflowing = textElement.scrollHeight > textElement.clientHeight;
    if (!isOverflowing) return;

    let scrollInterval;
    let direction = 1;
    let pauseTimeout;
    let isUserScrolling = false;
    let userScrollTimeout;

    const handleUserScroll = () => {
      isUserScrolling = true;
      clearInterval(scrollInterval);
      clearTimeout(pauseTimeout);
      clearTimeout(userScrollTimeout);

      userScrollTimeout = setTimeout(() => {
        isUserScrolling = false;
        startScrolling();
      }, 1500);
    };

    const startScrolling = () => {
      if (isUserScrolling) return;

      scrollInterval = setInterval(() => {
        if (!textElement || isUserScrolling) return;

        textElement.scrollTop += direction;

        if (textElement.scrollTop >= textElement.scrollHeight - textElement.clientHeight) {
          direction = -1;
          clearInterval(scrollInterval);
          pauseTimeout = setTimeout(() => startScrolling(), 1000);
        } else if (textElement.scrollTop <= 0) {
          direction = 1;
          clearInterval(scrollInterval);
          pauseTimeout = setTimeout(() => startScrolling(), 1000);
        }
      }, 30);
    };

    textElement.addEventListener('wheel', handleUserScroll);
    textElement.addEventListener('touchmove', handleUserScroll);

    const initialTimeout = setTimeout(startScrolling, 500);

    return () => {
      clearInterval(scrollInterval);
      clearTimeout(pauseTimeout);
      clearTimeout(initialTimeout);
      clearTimeout(userScrollTimeout);
      textElement.removeEventListener('wheel', handleUserScroll);
      textElement.removeEventListener('touchmove', handleUserScroll);
    };
  }, [hoveredCard]);

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAutoPlaying(false);
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
      setTimeout(() => setIsAnimating(false), 100);
    }, 200);
  };

  const handleNext = () => {
    if (isAnimating) return;
    setIsAutoPlaying(false);
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      setTimeout(() => setIsAnimating(false), 100);
    }, 200);
  };

  // Swipe handlers
  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      handleNext();
    } else if (isRightSwipe) {
      handlePrev();
    }
  };

  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % testimonials.length;
      visible.push(testimonials[index]);
    }
    return visible;
  };

  return (
    <section
      id="testimonials"
      className="section testimonials"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="container">
        <div className="testimonials-header">
          <div className="testimonials-header-content">
            <h2 className="testimonials-title">Отзывы</h2>
            <p className="testimonials-subtitle">Что говорят наши клиенты</p>
          </div>
          <div className="testimonials-controls">
            <button
              className="slider-btn slider-btn-prev"
              onClick={handlePrev}
              aria-label="Предыдущий отзыв"
            >
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button
              className="slider-btn slider-btn-next"
              onClick={handleNext}
              aria-label="Следующий отзыв"
            >
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>

        <div
          className="testimonials-slider"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <div className={`testimonials-track ${isAnimating ? 'animating' : ''}`}>
            {getVisibleTestimonials().map((testimonial, index) => {
              const testimonialIndex = (currentIndex + index) % testimonials.length;
              return (
                <div
                  key={`testimonial-${testimonialIndex}`}
                  className="testimonial-card"
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className="testimonial-header">
                    <div className="testimonial-photo">
                      <img
                        src={testimonial.photo}
                        alt={testimonial.name}
                        onError={(e) => {
                          e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60"%3E%3Ccircle cx="30" cy="30" r="30" fill="%23374151"/%3E%3Ctext x="30" y="35" font-family="Arial" font-size="24" fill="%23fff" text-anchor="middle"%3E' + testimonial.name.charAt(0) + '%3C/text%3E%3C/svg%3E';
                        }}
                      />
                    </div>
                    <div className="testimonial-info">
                      <h3 className="testimonial-name">{testimonial.name}</h3>
                      <p className="testimonial-position">{testimonial.position}</p>
                    </div>
                  </div>
                  <p
                    ref={(el) => (textRefs.current[index] = el)}
                    className="testimonial-text"
                  >
                    {testimonial.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="testimonials-dots">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => {
                setIsAutoPlaying(false);
                setCurrentIndex(index);
              }}
              aria-label={`Перейти к отзыву ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
