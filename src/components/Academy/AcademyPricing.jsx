import { useLanguage } from '../../contexts/LanguageContext';
import { translations } from '../../translations/translations';

const AcademyPricing = () => {
  const { language } = useLanguage();
  const t = translations[language]?.academyPage?.pricing || translations.ru.academyPage.pricing;
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

  const pricingPlans = [
    {
      ...t.plans.lecture,
      featured: false
    },
    {
      ...t.plans.intensive,
      featured: true
    },
    {
      ...t.plans.course,
      featured: false
    }
  ];

  return (
    <section id="academy-pricing" className="section academy-pricing">
      <div className="container">
        <div className="academy-pricing-header">
          <h2 className="academy-pricing-title">{t.title}</h2>
          <p className="academy-pricing-subtitle">
            {t.subtitle}
          </p>
        </div>
        <div className="academy-pricing-grid">
          {pricingPlans.map((plan, index) => (
            <div key={index} className={`academy-pricing-card ${plan.featured ? 'featured' : ''}`}>
              {plan.featured && <div className="pricing-badge">{t.popularBadge}</div>}
              <div className="pricing-header">
                <h3 className="pricing-name">{plan.name}</h3>
                <div className="pricing-duration">{plan.duration}</div>
                <div className="pricing-ideal">{plan.ideal}</div>
              </div>
              <div className="pricing-body">
                <p className="pricing-description">{plan.description}</p>
                <ul className="pricing-features">
                  {plan.features.map((feature, i) => (
                    <li key={i}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                {plan.result && (
                  <div className="pricing-result">
                    <strong>{t.resultLabel}</strong> {plan.result}
                  </div>
                )}
              </div>
              <div className="pricing-footer">
                <a
                  href="#academy-cta"
                  className={`btn ${plan.featured ? 'btn-primary' : 'btn-secondary'}`}
                  onClick={(e) => handleLinkClick(e, '#academy-cta')}
                >
                  {t.cta}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AcademyPricing;
