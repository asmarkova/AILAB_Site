import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations/translations';

const Projects = () => {
  const { language } = useLanguage();
  const t = translations[language]?.projects || translations.ru.projects;

  const cases = [
    {
      name: t.cases.ipoteka.name,
      type: t.cases.ipoteka.type,
      items: t.cases.ipoteka.items,
      featured: false
    },
    {
      name: t.cases.itpark.name,
      type: t.cases.itpark.type,
      items: t.cases.itpark.items,
      featured: true
    },
    {
      name: t.cases.belissimo.name,
      type: t.cases.belissimo.type,
      items: t.cases.belissimo.items,
      featured: false
    },
    {
      name: t.cases.legalmax.name,
      type: t.cases.legalmax.type,
      items: t.cases.legalmax.items,
      featured: false
    },
    {
      name: t.cases.probusiness.name,
      type: t.cases.probusiness.type,
      items: t.cases.probusiness.items,
      featured: false
    },
    {
      name: t.cases.btt.name,
      type: t.cases.btt.type,
      items: t.cases.btt.items,
      featured: false
    }
  ];

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <h2 className="projects-title">{t.title}</h2>
        <p className="projects-subtitle">{t.subtitle}</p>
        <div className="cases-grid">
          {cases.map((caseItem, index) => (
            <div
              key={index}
              className={`case-card ${caseItem.featured ? 'case-card-featured' : ''}`}
              style={{
                backgroundColor: 'rgba(26, 26, 26, 0.6)',
                border: '1px solid rgba(255, 255, 255, 0.06)',
                borderRadius: '12px',
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                minHeight: '200px'
              }}
            >
              <div className="case-header">
                <h3 className="case-name" style={{color: '#ffffff', fontSize: '1.25rem'}}>{caseItem.name}</h3>
                <span className="case-type" style={{color: '#a0a0a0', fontSize: '0.875rem'}}>{caseItem.type}</span>
              </div>
              <div className="case-content">
                <p className="case-label">{t.collaborationLabel}</p>
                <ul className="case-list">
                  {caseItem.items.map((item, itemIndex) => (
                    <li key={itemIndex}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
