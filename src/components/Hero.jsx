import { ParticlesBackground } from './Background/ParticlesBackground';

const Hero = () => {
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
    <section className="hero">
      <ParticlesBackground />
      <div className="container">
        <div className="hero-layout">
          <div className="hero-main">
            <h1 className="hero-title">
              <span className="hero-line">AI-лаборатория оптимизации</span>
              <span className="hero-line">бизнеса</span>
            </h1>
            <a href="#forma" className="btn btn-hero" onClick={(e) => handleLinkClick(e, '#forma')}>
              Обсудить проект
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
