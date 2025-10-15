import { MeshGradientAcademy } from './MeshGradientAcademy';

const AcademyHero = () => {
  const handleLinkClick = (e, href) => {
    e.preventDefault();

    if (href !== '#' && href.length > 1) {
      const target = document.querySelector(href);
      if (target) {
        const navHeight = document.querySelector('.nav')?.offsetHeight || 0;
        const targetPosition = target.offsetTop - navHeight;
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <section className="section academy-hero">
      <MeshGradientAcademy
        speed={1.2}
        colors={['#A78BFA', '#6D28D9', '#4C1D95', '#2D1B69', '#1A0F3D', '#0A0A0A']}
      />
      <div className="academy-hero-overlay"></div>
      <div className="container">
        <div className="academy-hero-content">
          <h1 className="academy-hero-title">
            Объединяем потенциал человека и силу ИИ в бизнесе
          </h1>
          <p className="academy-hero-subtitle">
            Корпоративное обучение, превращающее AI-технологии<br />в конкурентное преимущество вашей компании
          </p>
          <div className="academy-hero-actions">
            <a
              href="#academy-cta"
              className="btn btn-primary btn-lg"
              onClick={(e) => handleLinkClick(e, '#academy-cta')}
            >
              Запросить обучение
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AcademyHero;
