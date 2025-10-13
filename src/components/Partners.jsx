const Partners = () => {
  const partners = [
    {
      name: 'IT Park Uzbekistan',
      logo: '/Партнеры лого/it-park-logo- 1.png',
      url: 'https://it-park.uz/uz/itpark'
    },
    {
      name: 'Министерство',
      logo: '/Партнеры лого/Министерство лого 2.png',
      url: 'https://digital.uz/ru'
    },
    {
      name: 'AICA',
      logo: '/Партнеры лого/AICA 3.png',
      url: 'https://aica.uz'
    },
    {
      name: 'School',
      logo: '/Партнеры лого/School 4.png',
      url: 'https://21-school.uz/ru/'
    },
    {
      name: 'Angel Connect',
      logo: '/Партнеры лого/Angel Connect logo 5.png',
      url: 'https://angelconnect.uz/'
    },
    {
      name: 'Pro Business',
      logo: '/Партнеры лого/Pro Business logo 6.png',
      url: 'https://www.instagram.com/probusiness.tashkent/'
    },
    {
      name: 'Endcode',
      logo: '/Партнеры лого/Endcode.logo7.png',
      url: 'https://endcode.io/'
    }
  ];

  return (
    <section className="section partners">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Партнеры AI LAB</h2>
          <p className="partners-subtitle">Партнеры совместных проектов с AI Лабораторией AI LAB</p>
        </div>
        <div className="partners-grid">
          <div className="partners-scroll">
            {/* Render partners twice for seamless loop */}
            {[...partners, ...partners].map((partner, index) => (
              <a
                key={index}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className="partner-logo"
              >
                <img src={partner.logo} alt={partner.name} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
