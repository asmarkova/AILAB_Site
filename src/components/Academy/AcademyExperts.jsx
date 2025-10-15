const AcademyExperts = () => {
  const experts = [
    {
      name: 'Artem Panferov',
      role: 'Founder & CEO AI LAB, AI Optimization Expert',
      photo: '/Team/Артем Панферов-compressed.jpeg',
      bio: [
        'Серийный IT-предприниматель, CEO и основатель AI LAB, EndCode и Angel Connect.',
        'С 2018 года оптимизировал процессы в крупных энтерпрайзах: маркетплейс Ozon, DNS, Азбука Вкуса',
        'Эксперт по AI-оптимизации бизнес-процессов. Ментор IT-стартапов',
        'AI-спикер и партнер бизнес-клуба ProBusiness для предпринимателей и топ-менеджеров в Ташкенте'
      ],
      links: [
        {
          label: 'Telegram',
          url: 'https://t.me/Panferov_AI',
          icon: (
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/>
            </svg>
          )
        },
        {
          label: 'YouTube',
          url: 'https://www.youtube.com/@AI_panferov',
          icon: (
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
          )
        },
        {
          label: 'LinkedIn',
          url: 'https://www.linkedin.com/in/arpanferov/',
          icon: (
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          )
        }
      ]
    },
    {
      name: 'Pavel Panferov',
      role: 'Co-Founder AI LAB, Head of AI Development',
      photo: '/Team/Павел-compressed.jpeg',
      bio: [
        'Соосновать и Руководитель отдела AI-разработки AI LAB и EndCode, студии разработки мобильных приложений',
        'Бизнес-аналитик, консультант в области AI-оптимизации бизнес-процессов',
        'Спикер и ментор EdTech проектов и обучающих программ SkillBox и Zerocoder'
      ],
      links: [
        {
          label: 'Telegram',
          url: 'https://t.me/Panferov_AI_dev',
          icon: (
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/>
            </svg>
          )
        },
        {
          label: 'LinkedIn',
          url: 'https://www.linkedin.com/in/pavel-panferov-5541a8260/',
          icon: (
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          )
        }
      ]
    }
  ];

  return (
    <section id="academy-experts" className="section academy-experts">
      <div className="container">
        <div className="academy-experts-header">
          <h2 className="academy-experts-title">Эксперты AI LAB Academy</h2>
          <p className="academy-experts-subtitle">
            Практики с реальным опытом внедрения AI в бизнесе
          </p>
        </div>
        <div className="academy-experts-grid">
          {experts.map((expert, index) => (
            <div key={index} className="academy-expert-card">
              <div className="academy-expert-header">
                <div className="academy-expert-photo">
                  <img src={expert.photo} alt={expert.name} />
                </div>
                <div className="academy-expert-info">
                  <h3 className="academy-expert-name">{expert.name}</h3>
                  <p className="academy-expert-role">{expert.role}</p>
                </div>
              </div>
              <ul className="academy-expert-bio">
                {expert.bio.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              <div className="academy-expert-links">
                {expert.links.map((link, i) => (
                  <a
                    key={i}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="academy-expert-link"
                  >
                    {link.icon}
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AcademyExperts;
