const ProjectsCTA = () => {
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
    <section className="section projects-cta">
      <div className="container">
        <div className="projects-cta-wrapper">
          <div className="projects-cta-content">
            <h3 className="projects-cta-title">
              Ваш проект может быть следующим в этом списке
            </h3>
            <p className="projects-cta-text">
              Расскажите о своих задачах в Telegram. Проведем бесплатную консультацию и покажем, как AI может трансформировать и усилить ваш бизнес
            </p>
          </div>
          <div className="projects-cta-button">
            <a
              href="https://t.me/endcode_manager"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-projects-cta"
            >
              Обсудить проект
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsCTA;
