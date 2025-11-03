import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations/translations';

const Services = () => {
  const { language } = useLanguage();
  const t = translations[language]?.services || translations.ru.services;

  const services = [
    {
      number: '01',
      name: t.academy.name,
      description: t.academy.description
    },
    {
      number: '02',
      name: t.audit.name,
      description: t.audit.description
    },
    {
      number: '03',
      name: t.development.name,
      description: t.development.description
    }
  ];

  return (
    <section id="services" className="section services">
      <div className="container">
        <h2 className="services-title">{t.title}</h2>
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
