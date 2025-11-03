import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations/translations';

const About = () => {
  const { language } = useLanguage();
  const t = translations[language]?.about || translations.ru.about;
  const [projectsCount, setProjectsCount] = useState(0);
  const [yearCount, setYearCount] = useState(1);
  const [hasAnimated, setHasAnimated] = useState(false);
  const statsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);

            // Анимация для проектов (0 -> 40)
            let projectStart = 0;
            const projectEnd = 40;
            const projectDuration = 2000;
            const projectIncrement = projectEnd / (projectDuration / 16);

            const projectTimer = setInterval(() => {
              projectStart += projectIncrement;
              if (projectStart >= projectEnd) {
                setProjectsCount(projectEnd);
                clearInterval(projectTimer);
              } else {
                setProjectsCount(Math.floor(projectStart));
              }
            }, 16);

            // Анимация для года (1 -> 2023)
            let yearStart = 1;
            const yearEnd = 2023;
            const yearDuration = 1500;
            const yearIncrement = (yearEnd - yearStart) / (yearDuration / 20);

            const yearTimer = setInterval(() => {
              yearStart += yearIncrement;
              if (yearStart >= yearEnd) {
                setYearCount(yearEnd);
                clearInterval(yearTimer);
              } else {
                setYearCount(Math.floor(yearStart));
              }
            }, 20);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, [hasAnimated]);

  return (
    <section id="advantages" className="section about">
      <div className="container">
        <div className="about-content">
          <div className="about-stats-left" ref={statsRef}>
            <div className="stat-item-large">
              <div className="stat-number">{projectsCount}+</div>
              <div className="stat-label" dangerouslySetInnerHTML={{ __html: t.projectsLabel }}></div>
            </div>
            <div className="stat-item-large">
              <div className="stat-number">{yearCount}</div>
              <div className="stat-label">{t.workingSinceLabel}</div>
            </div>
          </div>
          <div className="about-text-content">
            <h2 className="about-heading">{t.title}</h2>
            <p className="about-description">{t.description1}</p>
            <p className="about-description">{t.description2}</p>
          </div>
          <div className="about-quote">
            <blockquote>
              <p className="quote-highlight">{t.quote}</p>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
