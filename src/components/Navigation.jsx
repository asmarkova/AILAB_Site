import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations/translations';

const Navigation = () => {
  const location = useLocation();
  const isAcademyPage = location.pathname === '/academy';
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, toggleLanguage } = useLanguage();
  const t = translations[language]?.nav || translations.ru.nav;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    closeMenu();

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
    <nav className="nav">
      <div className="container">
        <div className="nav-content">
          <Link to="/" className="logo" onClick={closeMenu}>
            <img src="/AI LAB лого.png" alt="AI LAB" className="logo-image" />
          </Link>
          <div className={`nav-wrapper ${isMenuOpen ? 'active' : ''}`}>
            {isAcademyPage ? (
              <>
                <ul className="nav-menu" id="navMenu">
                  <li><a href="#academy-solution" onClick={(e) => handleLinkClick(e, '#academy-solution')}>{t.aiAcademy}</a></li>
                  <li><a href="#academy-experts" onClick={(e) => handleLinkClick(e, '#academy-experts')}>{t.experts}</a></li>
                  <li><a href="#projects" onClick={(e) => handleLinkClick(e, '#projects')}>{t.cases}</a></li>
                  <li><a href="#testimonials" onClick={(e) => handleLinkClick(e, '#testimonials')}>{t.reviews}</a></li>
                  <li><a href="#academy-pricing" onClick={(e) => handleLinkClick(e, '#academy-pricing')}>{t.packages}</a></li>
                  <li><Link to="/" onClick={closeMenu}>{t.aiLabPage}</Link></li>
                </ul>
                <div className="nav-actions">
                  <button
                    className="language-toggle"
                    onClick={toggleLanguage}
                    aria-label="Toggle language"
                  >
                    {language === 'ru' ? 'EN' : 'RU'}
                  </button>
                  <a href="#academy-cta" className="btn btn-primary" onClick={(e) => handleLinkClick(e, '#academy-cta')}>{t.contact}</a>
                </div>
              </>
            ) : (
              <>
                <ul className="nav-menu" id="navMenu">
                  <li><a href="#advantages" onClick={(e) => handleLinkClick(e, '#advantages')}>{t.about}</a></li>
                  <li><a href="#services" onClick={(e) => handleLinkClick(e, '#services')}>{t.services}</a></li>
                  <li><Link to="/academy" onClick={closeMenu}>{t.training}</Link></li>
                  <li><a href="#projects" onClick={(e) => handleLinkClick(e, '#projects')}>{t.projects}</a></li>
                  <li><a href="#team" onClick={(e) => handleLinkClick(e, '#team')}>{t.team}</a></li>
                </ul>
                <div className="nav-actions">
                  <button
                    className="language-toggle"
                    onClick={toggleLanguage}
                    aria-label="Toggle language"
                  >
                    {language === 'ru' ? 'EN' : 'RU'}
                  </button>
                  <a href="#forma" className="btn btn-primary" onClick={(e) => handleLinkClick(e, '#forma')}>{t.start}</a>
                </div>
              </>
            )}
          </div>
          <button
            className={`mobile-menu-toggle ${isMenuOpen ? 'active' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
