import { useRef, useState, useEffect } from 'react';

const Team = () => {
  const sliderTrackRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const teamMembers = [
    {
      name: 'Artem Panferov',
      role: 'Founder, CEO, AI Optimization Expert',
      photo: '/Team/Артем Панферов.png'
    },
    {
      name: 'Anastasia Markova',
      role: 'Co-Founder, Creative Director',
      photo: '/Team/Анастасия Маркова.jpeg'
    },
    {
      name: 'Pavel Panferov',
      role: 'Co-Founder, Head of development, Business Analyst',
      photo: '/Team/Павел Панферов.JPG'
    },
    {
      name: 'Sergey Kazharaliev',
      role: 'Co-Founder, COO, Business Analyst',
      photo: '/Team/Sergey Kazharaliev.jpeg'
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
      photo: '/Team/Abdulbosit Holikov.JPG'
    },
    {
      name: 'Aziza Maksumova',
      role: 'Business Assistant, Project Manager',
      photo: '/Team/Aziza Maksumova.png'
    }
  ];

  const cardWidth = 280;
  const gap = 48;
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
        <h2 className="team-title">Специалисты лаборатории</h2>
        <div className="team-slider-wrapper">
          <button
            className="team-slider-nav team-slider-prev"
            onClick={handlePrev}
            aria-label="Previous"
          >
            ←
          </button>
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
          <button
            className="team-slider-nav team-slider-next"
            onClick={handleNext}
            aria-label="Next"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Team;
