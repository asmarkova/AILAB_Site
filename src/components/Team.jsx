import { useRef, useState, useEffect } from 'react';

const Team = () => {
  const sliderTrackRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const teamMembers = [
    {
      name: 'Artem Panferov',
      role: 'Founder, CEO, AI Optimization Expert',
      photo: '/Team/Артем Панферов-compressed.jpeg'
    },
    {
      name: 'Anastasia Markova',
      role: 'Co-Founder, Creative Director',
      photo: '/Team/Анастасия Маркова.jpeg'
    },
    {
      name: 'Pavel Panferov',
      role: 'Co-Founder, Head of development, Business Analyst',
      photo: '/Team/Павел-compressed.jpeg'
    },
    {
      name: 'Sergey Kazharaliev',
      role: 'Co-Founder, COO, Business Analyst',
      photo: '/Team/Sergey Kazharaliev-compressed.jpeg'
    },
    {
      name: 'Nikita Terentyev',
      role: 'Developer, AI Architect',
      photo: '/Team/Nikita Terentyev.jpeg'
    },
    {
      name: 'Shahzod Usmanov',
      role: 'Developer, AI Architect',
      photo: '/Team/Шахзод усманов.jpeg'
    },
    {
      name: 'Abdulbosit Holikov',
      role: 'Developer',
      photo: '/Team/Abdulbosit-compressed.jpeg'
    },
    {
      name: 'Aziza Maksumova',
      role: 'Business Assistant, Project Manager',
      photo: '/Team/Aziza-compressed.jpeg'
    }
  ];

  const cardWidth = 260;
  const gap = 32;
  const slideWidth = cardWidth + gap;
  const totalCards = teamMembers.length;

  const updateSlider = (index, smooth = true) => {
    if (sliderTrackRef.current) {
      const offset = index * slideWidth;
      sliderTrackRef.current.style.transition = smooth ? 'transform 0.5s ease' : 'none';
      sliderTrackRef.current.style.transform = `translateX(-${offset}px)`;
    }
  };

  useEffect(() => {
    updateSlider(currentIndex, false);
  }, [currentIndex]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex - 1;
      if (newIndex < 0) {
        return totalCards - 1;
      }
      return newIndex;
    });
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex + 1;
      if (newIndex >= totalCards) {
        return 0;
      }
      return newIndex;
    });
  };

  return (
    <section id="team" className="section team">
      <div className="container">
        <div className="team-header">
          <h2 className="team-title">Специалисты лаборатории</h2>
          <div className="team-controls">
            <button
              className="slider-btn slider-btn-prev"
              onClick={handlePrev}
              aria-label="Предыдущий"
            >
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button
              className="slider-btn slider-btn-next"
              onClick={handleNext}
              aria-label="Следующий"
            >
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
        <div className="team-slider-wrapper">
          <div className="team-slider">
            <div className="team-slider-track" ref={sliderTrackRef}>
              {/* Render all members twice for infinite loop effect */}
              {[...teamMembers, ...teamMembers].map((member, index) => (
                <div key={index} className="team-member">
                  <div className="team-photo">
                    <img src={member.photo} alt={member.name} />
                  </div>
                  <div className="team-info">
                    <h3 className="team-name">{member.name}</h3>
                    <p className="team-role">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
