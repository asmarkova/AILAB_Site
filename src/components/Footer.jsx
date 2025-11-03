import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations/translations';

const Footer = () => {
  const { language } = useLanguage();
  const t = translations[language]?.footer || translations.ru.footer;
  const navT = translations[language]?.nav || translations.ru.nav;
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
            <p className="footer-text">{t.copyright}</p>
            <a href="mailto:manager@ai-lab.company" className="footer-email">
              manager@ai-lab.company
            </a>
          </div>
          <div className="footer-column">
            <h4 className="footer-heading">{t.menuTitle}</h4>
            <ul className="footer-links">
              <li><a href="#advantages" onClick={(e) => handleLinkClick(e, '#advantages')}>{navT.about}</a></li>
              <li><a href="#services" onClick={(e) => handleLinkClick(e, '#services')}>{navT.services}</a></li>
              <li><a href="#academy" onClick={(e) => handleLinkClick(e, '#academy')}>{navT.training}</a></li>
              <li><a href="#projects" onClick={(e) => handleLinkClick(e, '#projects')}>{navT.projects}</a></li>
              <li><a href="#team" onClick={(e) => handleLinkClick(e, '#team')}>{navT.team}</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4 className="footer-heading">{t.followTitle}</h4>
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
                {t.channel}
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
