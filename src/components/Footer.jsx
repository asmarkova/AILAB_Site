const Footer = () => {
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
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-column">
            <img src="/AI LAB лого.png" alt="AI LAB" className="footer-logo-image" />
            <p className="footer-text">© AI LAB, located in Uzbekistan</p>
            <a href="mailto:manager@ai-lab.company" className="footer-email">
              manager@ai-lab.company
            </a>
          </div>
          <div className="footer-column">
            <h4 className="footer-heading">Меню</h4>
            <ul className="footer-links">
              <li><a href="#advantages" onClick={(e) => handleLinkClick(e, '#advantages')}>О нас</a></li>
              <li><a href="#services" onClick={(e) => handleLinkClick(e, '#services')}>Услуги</a></li>
              <li><a href="#academy" onClick={(e) => handleLinkClick(e, '#academy')}>Обучение</a></li>
              <li><a href="#projects" onClick={(e) => handleLinkClick(e, '#projects')}>Проекты</a></li>
              <li><a href="#team" onClick={(e) => handleLinkClick(e, '#team')}>Команда</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4 className="footer-heading">Подписывайтесь</h4>
            <div className="social-links">
              <a href="https://www.instagram.com/ailab.bpo/" target="_blank" rel="noopener noreferrer" className="social-link">
                Instagram
              </a>
              <a href="https://www.linkedin.com/company/ai-laborаtory/" target="_blank" rel="noopener noreferrer" className="social-link">
                LinkedIn
              </a>
              <a href="https://t.me/endcode_manager" target="_blank" rel="noopener noreferrer" className="social-link">
                Telegram
              </a>
              <a href="https://t.me/Panferov_AI" target="_blank" rel="noopener noreferrer" className="social-link">
                Канал
              </a>
              <a href="https://www.youtube.com/channel/UC5-gQfHltBCNVFsn2pnsXtg" target="_blank" rel="noopener noreferrer" className="social-link">
                YouTube
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
