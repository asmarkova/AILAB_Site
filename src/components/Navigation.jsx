import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const location = useLocation();
  const isAcademyPage = location.pathname === '/academy';
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [navBg, setNavBg] = useState('rgba(10, 10, 10, 0.8)');

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 50) {
        setNavBg('rgba(10, 10, 10, 0.95)');
      } else {
        setNavBg('rgba(10, 10, 10, 0.8)');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    <nav className="nav" style={{ backgroundColor: navBg }}>
      <div className="container">
        <div className="nav-content">
          <Link to="/" className="logo" onClick={closeMenu}>
            <img src="/AI LAB лого.png" alt="AI LAB" className="logo-image" />
          </Link>
          {isAcademyPage ? (
            <>
              <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`} id="navMenu">
                <li><a href="#academy-solution" onClick={(e) => handleLinkClick(e, '#academy-solution')}>О программе</a></li>
                <li><a href="#academy-experts" onClick={(e) => handleLinkClick(e, '#academy-experts')}>Эксперты</a></li>
                <li><a href="#academy-pricing" onClick={(e) => handleLinkClick(e, '#academy-pricing')}>Пакеты</a></li>
                <li><Link to="/" onClick={closeMenu}>Главная</Link></li>
              </ul>
              <a href="#academy-cta" className="btn btn-primary" onClick={(e) => handleLinkClick(e, '#academy-cta')}>Связаться</a>
            </>
          ) : (
            <>
              <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`} id="navMenu">
                <li><a href="#advantages" onClick={(e) => handleLinkClick(e, '#advantages')}>О нас</a></li>
                <li><a href="#services" onClick={(e) => handleLinkClick(e, '#services')}>Услуги</a></li>
                <li><Link to="/academy" onClick={closeMenu}>Обучение</Link></li>
                <li><a href="#projects" onClick={(e) => handleLinkClick(e, '#projects')}>Проекты</a></li>
                <li><a href="#team" onClick={(e) => handleLinkClick(e, '#team')}>Команда</a></li>
              </ul>
              <a href="#forma" className="btn btn-primary" onClick={(e) => handleLinkClick(e, '#forma')}>Начать</a>
            </>
          )}
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
