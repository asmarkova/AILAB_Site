import { useEffect, useRef, useState } from 'react';

const AcademyProblem = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.2,
        rootMargin: '0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`section academy-problem ${isVisible ? 'fade-up-visible' : ''}`}
    >
      <div className="container">
        <div className="academy-problem-content">
          <h2 className="academy-problem-title">
            Команда тонет в рутине, а конкуренты уже используют AI?
          </h2>
        </div>
      </div>
    </section>
  );
};

export default AcademyProblem;
