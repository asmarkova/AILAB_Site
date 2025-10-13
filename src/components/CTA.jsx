const CTA = () => {
  return (
    <section id="forma" className="section cta">
      <div className="container">
        <div className="cta-wrapper">
          <div className="cta-content">
            <h2 className="cta-title">Готовы повысить эффективность бизнеса?</h2>
            <p className="cta-text">
              Свяжитесь с нами в Telegram и опишите свой запрос. Мы проведем бесплатную консультацию и определим, где можем быть полезны друг другу
            </p>
          </div>
          <div className="cta-button">
            <a
              href="https://t.me/endcode_manager"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-cta"
            >
              Связаться в Telegram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
