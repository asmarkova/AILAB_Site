const AcademyPricing = () => {
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
      name: 'Лекция «Нейросети в бизнесе»',
      duration: '2,5 часа',
      price: '$590',
      ideal: 'для руководителей и команд на старте',
      description: '',
      features: [
        'Q/A сессия с экспертами по AI-автоматизации',
        'Понимание основ работы с AI',
        'Практические примеры применения',
        'Ответы на все вопросы команды'
      ],
      result: 'Быстрое погружение в тему AI. Команда понимает, как работает искусственный интеллект, перестаёт его бояться и получает конкретные инструменты для ежедневных задач.'
    },
    {
      name: 'Двухдневный AI-интенсив',
      duration: '2 дня практики и внедрения',
      price: '$1 590',
      ideal: 'для команд, готовых к практическому применению',
      description: '2 дня × 4 часа (онлайн или офлайн в вашем офисе в Ташкенте)',
      features: [
        'День 1 — разбор принципов искусственного интеллекта и освоение ChatGPT, Claude, Gemini',
        'День 2 — работа на реальных задачах компании, адаптация решений под процессы',
        'Q&A-сессия с экспертами по вашим бизнес-кейсам',
        'Поддержка и обмен опытом в закрытом чате'
      ],
      result: 'Команда понимает, как применять AI в ежедневной работе, делает задачи быстрее и точнее, а руководители видят измеримый эффект в эффективности процессов.',
      featured: true
    },
    {
      name: 'Глубинный AI-курс',
      duration: '1 месяц + поддержка',
      price: '$4 590',
      priceNote: 'включено 10 учётных записей на месяц',
      ideal: 'для системного внедрения AI в компании',
      description: 'Полное погружение с домашними заданиями и менторством',
      features: [
        'Диагностика процессов и адаптация программы под специфику компании',
        '1 месяц интенсивного обучения сотрудников работе с AI-инструментами',
        'Создание AI-инструментов для автоматизации внутренних процессов',
        'Пошаговые шаблоны, промпты и инструкции по внедрению',
        'Финальный отчёт о росте эффективности и рекомендациях по масштабированию',
        'Поддержка и обмен опытом в закрытом чате'
      ],
      result: 'Команда уверенно использует AI в ежедневной работе, снижая рутину и повышая производительность на 20–40%, компания получает собственных AI-ассистентов и устойчивую культуру цифрового мышления.'
    }
  ];

  return (
    <section id="academy-pricing" className="section academy-pricing">
      <div className="container">
        <div className="academy-pricing-header">
          <h2 className="academy-pricing-title">Форматы обучения</h2>
          <p className="academy-pricing-subtitle">
            Выберите подходящий формат для вашей команды
          </p>
        </div>
        <div className="academy-pricing-grid">
          {pricingPlans.map((plan, index) => (
            <div key={index} className={`academy-pricing-card ${plan.featured ? 'featured' : ''}`}>
              {plan.featured && <div className="pricing-badge">Популярный</div>}
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
                    <strong>Результат:</strong> {plan.result}
                  </div>
                )}
              </div>
              <div className="pricing-footer">
                <a
                  href="#academy-cta"
                  className={`btn ${plan.featured ? 'btn-primary' : 'btn-secondary'}`}
                  onClick={(e) => handleLinkClick(e, '#academy-cta')}
                >
                  Оставить заявку
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
