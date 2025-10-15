const Projects = () => {
  const cases = [
    {
      name: 'Ipoteka Bank',
      type: 'Международный банк',
      items: [
        'Обучение топ-менеджеров департаментов банка',
        'AI-диагностика бизнес-процессов банка'
      ],
      featured: false
    },
    {
      name: 'IT Park Uzbekistan',
      type: 'Технологический парк',
      items: [
        'Обучение более 50 топ-менеджеров и сотрудников',
        'AI-диагностика бизнес-процессов',
        'Консалтинг и менторство в области AI и оптимизации'
      ],
      featured: true
    },
    {
      name: 'Belissimo Pizza',
      type: 'Крупнейшая сеть пиццерий в Узбекистане',
      items: [
        'AI-обучение топ-менеджеров компании Belissimo',
        'Консалтинг в области AI и оптимизации'
      ],
      featured: false
    },
    {
      name: 'LegalMax',
      type: 'Международная юридическая компания',
      items: [
        'AI-диагностика процессов компании',
        'AI-обучение топ-менеджмента',
        'Внедрение CRM-системы',
        'Внедрение AI-модулей (AI-архивация почты и т.д.)'
      ],
      featured: false
    },
    {
      name: 'PRO Business Club',
      type: 'Клуб предпринимателей в Ташкенте',
      items: [
        'Стратегические AI-партнёры клуба',
        'AI-обучение предпринимателей',
        'Совместные проекты AI-хакатонов и мероприятий по ИИ'
      ],
      featured: false
    },
    {
      name: 'BTT Tech',
      type: 'Международная компания солнечной энергетики',
      items: [
        'AI-обучение топ-менеджеров компании',
        'Консалтинг и менторство в области AI и оптимизации'
      ],
      featured: false
    }
  ];

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <h2 className="projects-title">Кейсы</h2>
        <p className="projects-subtitle">Некоторые из кейсов лаборатории AI LAB</p>
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
                <p className="case-label">О сотрудничестве:</p>
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
