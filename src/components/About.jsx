const About = () => {
  return (
    <section id="advantages" className="section about">
      <div className="container">
        <div className="about-content">
          <div className="about-stats-left">
            <div className="stat-item-large">
              <div className="stat-number">40+</div>
              <div className="stat-label">РЕАЛИЗОВАНО<br />ПРОЕКТОВ</div>
            </div>
            <div className="stat-item-large">
              <div className="stat-number">2023</div>
              <div className="stat-label">РАБОТАЕМ С</div>
            </div>
          </div>
          <div className="about-text-content">
            <h2 className="about-heading">О нас</h2>
            <p className="about-description">Мы — AI LAB, AI-лаборатория решений для бизнеса.</p>
            <p className="about-description">Наши эксперты разрабатывают инструменты на основе искусственного интеллекта, чтобы оптимизировать бизнес-процессы компаний.</p>
            <p className="about-description">Мы помогаем компаниям повысить эффективность, сократить издержки и получить конкурентное преимущество на рынке с помощью AI-инструментов.</p>
          </div>
          <div className="about-quote">
            <blockquote>
              <p>Мы убеждены —</p>
              <p className="quote-highlight">нейросети не соперник и не конкурент человека, а экзоскелет для его мозга, который позволяет выйти на новый уровень эффективности.</p>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
