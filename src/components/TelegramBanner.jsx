const TelegramBanner = () => {
  return (
    <section className="section telegram-banner">
      <div className="container">
        <div className="telegram-banner-wrapper">
          <div className="telegram-photo">
            <img src="/Team/Артем Панферов-compressed.jpeg" alt="Artem Panferov" />
          </div>
          <div className="telegram-content">
            <h3 className="telegram-title">Хотите знать больше о нейросетях?</h3>
            <p className="telegram-text">Все про AI для бизнеса найдете в Telegram-канале Артема Панферова — Основатель и CEO AI LAB</p>
          </div>
          <div className="telegram-button">
            <a href="https://t.me/Panferov_AI" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              Telegram-канал
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TelegramBanner;
