const Services = () => {
  const services = [
    {
      number: '01',
      name: 'AI Academy',
      description: 'Обучающие сессии от экспертов AI LAB для корпоративных команд по использованию искусственного интеллекта в процессах работы'
    },
    {
      number: '02',
      name: 'AI Audit',
      description: 'Исследование бизнес-процессов вашей компании, выявление точек роста и формирование дорожной карты AI-автоматизации'
    },
    {
      number: '03',
      name: 'AI Development',
      description: 'Разработка и внедрение кастомных решений для автоматизации бизнес-процессов вашей компании с помощью искусственного интеллекта'
    }
  ];

  return (
    <section id="services" className="section services">
      <div className="container">
        <h2 className="services-title">Направления лаборатории</h2>
        <div className="services-grid-new">
          {services.map((service, index) => (
            <div key={index} className="service-card-new" data-animate>
              <div className="service-number">{service.number}</div>
              <h3 className="service-name">{service.name}</h3>
              <p className="service-desc">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
