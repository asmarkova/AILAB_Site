const BentoInfo = () => {
  return (
    <section className="section bento-info">
      <div className="container">
        <div className="bento-grid">
          {/* Photo Card */}
          <div className="bento-card bento-photo">
            <img src="/Блок доп.инфо/AI LAB Founders-compressed.jpeg" alt="AI LAB Founders" />
          </div>

          {/* 700+ Card */}
          <div className="bento-card bento-stat">
            <h3 className="bento-number">700+</h3>
            <p className="bento-text">Обученных предпринимателей и их сотрудников работе с ИИ: IT Park, LegalMax, Probusiness и др</p>
            <p className="bento-date">с октября 2023</p>
          </div>

          {/* IT Park Residents Card */}
          <a href="https://it-park.uz/uz/itpark" target="_blank" rel="noopener noreferrer" className="bento-card bento-itpark">
            <img src="/Блок доп.инфо/Logo_IT_Park_Uzbekistan.svg 2.png" alt="IT Park" className="bento-logo-itpark" />
            <h3 className="bento-title">Резиденты IT Park</h3>
            <p className="bento-subtitle">IT Park, Uzbekistan</p>
          </a>

          {/* PRO Business Card */}
          <a href="https://www.instagram.com/probusiness.tashkent/" target="_blank" rel="noopener noreferrer" className="bento-card bento-probusiness">
            <p className="bento-label">AI-партнеры бизнес-клуба</p>
            <img src="/Блок доп.инфо/PRO BUSINESS.png" alt="PRO BUSINESS" className="bento-logo-probusiness" />
          </a>

          {/* Top AI Experts Card */}
          <a href="https://uz.kursiv.media/2025-08-31/yuksalish-obyavil-top-30-liderov-v-uzbekistane-v-sfere-ii/" target="_blank" rel="noopener noreferrer" className="bento-card bento-experts">
            <div className="bento-experts-content">
              <h3 className="bento-experts-title">ТОП AI-эксперты Узбекистана</h3>
              <p className="bento-experts-text">В августе 2025 года команда AI LAB вошла в топ наиболее влиятельных лидеров в сфере искусственного интеллекта в Узбекистане по версии центра исследований Yuksalish и AICA, ассоциации ИИ Центральной Азии</p>
            </div>
            <div className="bento-experts-logos">
              <img src="/Блок доп.инфо/AICA logo.png" alt="AICA" className="bento-logo-aica" />
              <img src="/Блок доп.инфо/Yuksalish.png" alt="Yuksalish" className="bento-logo-yuksalish" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default BentoInfo;
