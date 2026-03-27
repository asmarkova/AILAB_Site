import { useEffect, useRef, useState } from 'react';

function useReveal(threshold = 0.1) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold, root: null }
    );
    const el = ref.current;
    if (el) observer.observe(el);
    return () => { if (el) observer.unobserve(el); };
  }, [threshold]);
  return { ref, isVisible };
}

const S = {
  page: {
    position: 'relative', width: '100%', overflowX: 'hidden',
    backgroundColor: '#0a0a0a', fontFamily: "'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    color: '#fff', lineHeight: '1.6', letterSpacing: '-0.03em', WebkitFontSmoothing: 'antialiased',
  },
  gridBg: {
    position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none',
    backgroundImage: 'linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)',
    backgroundSize: '100px 100px',
  },
  content: { position: 'relative', zIndex: 1 },
  // Nav
  nav: {
    position: 'fixed', left: 0, right: 0, top: 0, zIndex: 50,
    borderBottom: '1px solid rgba(255,255,255,0.08)',
    background: 'rgba(10,10,10,0.85)',
    backdropFilter: 'blur(24px)', WebkitBackdropFilter: 'blur(24px)',
    padding: '1.25rem 2rem',
  },
  navInner: {
    maxWidth: '1100px', margin: '0 auto',
    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
  },
  navLogos: { display: 'flex', alignItems: 'center', gap: '10px' },
  navLogoAI: { fontWeight: 700, fontSize: '1.1rem', color: '#8b5cf6', letterSpacing: '-0.02em' },
  navX: { color: '#444', fontWeight: 300, fontSize: '0.875rem' },
  navLogoPB: { fontWeight: 700, fontSize: '1.1rem', color: '#22c55e', letterSpacing: '-0.02em' },
  navLinks: { display: 'flex', gap: '2rem' },
  navLink: { fontSize: '0.875rem', color: '#a0a0a0', textDecoration: 'none', transition: 'color 0.2s' },
  navCta: {
    padding: '0.5rem 1.25rem', borderRadius: '50px',
    border: '1px solid rgba(255,255,255,0.1)', fontSize: '0.875rem',
    color: '#fff', textDecoration: 'none', transition: 'all 0.2s',
  },
  // Hero
  hero: {
    position: 'relative', minHeight: '100vh', overflow: 'hidden',
    display: 'flex', alignItems: 'flex-end',
  },
  heroBlobPurple: {
    position: 'absolute', top: '10%', right: '-5%',
    width: '700px', height: '700px', borderRadius: '50%', pointerEvents: 'none',
    background: 'radial-gradient(circle, rgba(139,92,246,0.65) 0%, rgba(139,92,246,0.22) 40%, transparent 60%)',
    filter: 'blur(60px)',
  },
  heroBlobGreen: {
    position: 'absolute', top: '-5%', left: '-10%',
    width: '550px', height: '550px', borderRadius: '50%', pointerEvents: 'none',
    background: 'radial-gradient(circle, rgba(34,197,94,0.5) 0%, rgba(34,197,94,0.12) 40%, transparent 60%)',
    filter: 'blur(60px)',
  },
  heroFade: {
    position: 'absolute', bottom: 0, left: 0, right: 0,
    height: '250px', pointerEvents: 'none', zIndex: 1,
    background: 'linear-gradient(to bottom, transparent, #0a0a0a)',
  },
  heroInner: {
    position: 'relative', zIndex: 2, maxWidth: '1200px', margin: '0 auto', width: '100%',
    padding: '0 2rem 6rem', paddingTop: '8rem',
  },
  heroBadge: {
    display: 'inline-flex', alignItems: 'center', gap: '8px',
    padding: '0.375rem 1rem', borderRadius: '50px',
    border: '1px solid rgba(255,255,255,0.08)', background: '#1a1a1a',
    fontSize: '0.8125rem', color: '#a0a0a0', marginBottom: '1.5rem',
  },
  badgeDot: {
    width: '6px', height: '6px', borderRadius: '50%',
    background: '#22c55e', display: 'inline-block',
  },
  heroTitle: {
    fontSize: 'clamp(3.5rem, 10vw, 9rem)', fontWeight: 400,
    lineHeight: 0.88, letterSpacing: '-0.04em', marginBottom: '1.5rem',
  },
  heroTitleAccent: {
    background: 'linear-gradient(to right, #8b5cf6, #a78bfa)',
    WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  },
  heroDesc: {
    maxWidth: '520px', fontSize: '1.0625rem', color: '#a0a0a0',
    lineHeight: 1.65, marginBottom: '2.5rem',
  },
  heroActions: { display: 'flex', gap: '1rem', flexWrap: 'wrap' },
  btnPrimary: {
    padding: '1rem 2.5rem', borderRadius: '50px',
    background: '#8b5cf6', color: '#fff', textDecoration: 'none',
    fontSize: '0.9375rem', fontWeight: 400, transition: 'all 0.2s',
    display: 'inline-block', border: 'none', cursor: 'pointer',
    fontFamily: 'inherit', letterSpacing: '-0.03em',
  },
  btnOutline: {
    padding: '1rem 2rem', borderRadius: '50px',
    border: '1px solid rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.7)',
    textDecoration: 'none', fontSize: '0.9375rem', transition: 'all 0.2s',
    display: 'inline-block',
  },
  heroPhoto: {
    position: 'absolute', right: '-40px', bottom: 0, zIndex: 2,
    width: 'clamp(320px, 42vw, 580px)',
  },
  heroPhotoGlow: {
    position: 'absolute', inset: 0, borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(139,92,246,0.28) 0%, transparent 70%)',
    filter: 'blur(50px)', transform: 'scale(1.2)',
  },
  // Sections
  section: { padding: '5rem 2rem' },
  sectionInner: { maxWidth: '1100px', margin: '0 auto' },
  sectionInnerNarrow: { maxWidth: '800px', margin: '0 auto' },
  sectionLabel: {
    display: 'inline-block', padding: '0.5rem 1.25rem',
    borderRadius: '50px', border: '1px solid rgba(255,255,255,0.06)',
    background: '#1a1a1a', fontSize: '0.875rem', color: '#a0a0a0',
    marginBottom: '1rem',
  },
  sectionTitle: {
    fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 400,
    lineHeight: 1, letterSpacing: '-0.03em', marginBottom: '1rem',
  },
  sectionSub: {
    fontSize: '1.0625rem', color: '#a0a0a0', lineHeight: 1.65,
    maxWidth: '540px',
  },
  sectionSubCenter: {
    fontSize: '1.0625rem', color: '#a0a0a0', lineHeight: 1.65,
    maxWidth: '540px', margin: '0 auto',
  },
  // Problem
  problemText: {
    fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 400,
    lineHeight: 1.2, letterSpacing: '-0.03em', textAlign: 'center',
  },
  problemMuted: { color: 'rgba(255,255,255,0.35)' },
  problemDesc: { marginTop: '1.5rem', fontSize: '1.0625rem', color: '#a0a0a0', textAlign: 'center', maxWidth: '600px', margin: '1.5rem auto 0' },
  // Intro / Speaker
  introGrid: { display: 'grid', gridTemplateColumns: '340px 1fr', gap: '4rem', alignItems: 'center' },
  introImg: { width: '100%', objectFit: 'contain', borderRadius: '12px' },
  introName: { fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 500, letterSpacing: '-0.03em', marginBottom: '0.25rem' },
  introRole: { fontSize: '0.9375rem', color: '#8b5cf6', marginBottom: '1.5rem' },
  introText: { fontSize: '0.9375rem', color: '#a0a0a0', lineHeight: 1.7, marginBottom: '1rem' },
  // Program grid
  programGrid: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '2rem' },
  weekCard: {
    borderRadius: '12px', border: '1px solid rgba(255,255,255,0.06)',
    background: 'rgba(26,26,26,0.6)', padding: '2rem',
    transition: 'border-color 0.3s, background 0.3s',
  },
  weekHead: { display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.25rem' },
  weekNum: {
    width: '56px', height: '56px', borderRadius: '12px', flexShrink: 0,
    border: '1px solid rgba(139,92,246,0.4)', background: 'rgba(139,92,246,0.1)',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    fontFamily: 'monospace', fontSize: '1.125rem', fontWeight: 700, color: '#8b5cf6',
  },
  weekTitle: { fontSize: '1rem', fontWeight: 500, letterSpacing: '-0.02em' },
  weekDesc: { fontSize: '0.875rem', color: '#a0a0a0', lineHeight: 1.65, marginBottom: '1.25rem' },
  weekTags: { display: 'flex', flexWrap: 'wrap', gap: '0.5rem' },
  tag: {
    padding: '0.3rem 0.75rem', borderRadius: '50px',
    border: '1px solid rgba(255,255,255,0.06)', background: 'rgba(255,255,255,0.04)',
    fontSize: '0.75rem', color: '#a0a0a0',
  },
  tagGreen: {
    padding: '0.3rem 0.75rem', borderRadius: '50px',
    border: '1px solid rgba(34,197,94,0.3)', background: 'rgba(34,197,94,0.08)',
    fontSize: '0.75rem', color: '#22c55e', fontWeight: 500,
  },
  // Results
  resultsGrid: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '2rem' },
  resultCard: {
    borderRadius: '12px', border: '1px solid rgba(255,255,255,0.06)',
    background: 'rgba(26,26,26,0.6)', padding: '2rem',
    transition: 'border-color 0.3s',
  },
  resultTitle: { fontSize: '1rem', fontWeight: 500, marginBottom: '0.75rem' },
  resultDesc: { fontSize: '0.875rem', color: '#a0a0a0', lineHeight: 1.65 },
  // Pricing
  pricingGrid: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', maxWidth: '800px', margin: '2.5rem auto 0' },
  pricingCard: {
    borderRadius: '12px', border: '1px solid rgba(255,255,255,0.06)',
    background: 'rgba(26,26,26,0.6)', padding: '2.5rem',
    position: 'relative', transition: 'all 0.3s', display: 'flex', flexDirection: 'column',
  },
  pricingCardFeatured: {
    borderRadius: '12px', border: '1px solid rgba(139,92,246,0.4)',
    background: 'rgba(26,26,26,0.8)', padding: '2.5rem',
    position: 'relative', transition: 'all 0.3s', display: 'flex', flexDirection: 'column',
  },
  pricingBadge: {
    position: 'absolute', top: '-12px', right: '20px',
    background: '#8b5cf6', color: '#fff',
    padding: '0.3rem 1rem', borderRadius: '20px',
    fontSize: '0.8125rem',
  },
  pricingHeader: { marginBottom: '1.5rem', paddingBottom: '1.5rem', borderBottom: '1px solid rgba(255,255,255,0.06)' },
  pricingName: { fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.06em', color: '#a0a0a0', marginBottom: '0.75rem' },
  pricingPrice: { fontSize: '3.5rem', fontWeight: 700, letterSpacing: '-0.04em' },
  pricingPeriod: { fontSize: '0.875rem', color: '#666', marginTop: '0.25rem' },
  pricingFeatures: { flex: 1, marginBottom: '2rem' },
  pricingFeature: {
    padding: '0.6rem 0', fontSize: '0.875rem', color: '#a0a0a0',
    display: 'flex', alignItems: 'center', gap: '0.75rem',
    borderBottom: '1px solid rgba(255,255,255,0.03)',
  },
  pricingCheck: { color: '#22c55e', flexShrink: 0 },
  // CTA
  ctaBox: {
    borderRadius: '12px', border: '1px solid rgba(255,255,255,0.06)',
    background: 'rgba(26,26,26,0.6)', padding: '3rem',
    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    gap: '2rem', flexWrap: 'wrap',
  },
  ctaTitle: { fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', fontWeight: 500, letterSpacing: '-0.03em', marginBottom: '0.5rem' },
  ctaSub: { color: '#a0a0a0', fontSize: '0.9375rem' },
  tgBtn: {
    display: 'inline-flex', alignItems: 'center', gap: '0.75rem',
    padding: '1rem 2.5rem', borderRadius: '50px',
    background: '#8b5cf6', color: '#fff', textDecoration: 'none',
    fontSize: '0.9375rem', fontWeight: 500, whiteSpace: 'nowrap', flexShrink: 0,
    transition: 'all 0.2s',
  },
  // Video
  videoWrap: {
    maxWidth: '1100px', margin: '0 auto',
    borderRadius: '12px', overflow: 'hidden',
    aspectRatio: '16/9',
  },
  // Footer
  footer: {
    borderTop: '1px solid rgba(255,255,255,0.06)',
    padding: '3rem 2rem',
  },
  footerInner: { maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '2rem' },
  footerLogo: { display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1rem' },
  footerDesc: { fontSize: '0.875rem', color: '#666', lineHeight: 1.6 },
  footerHeading: { fontSize: '0.875rem', fontWeight: 500, marginBottom: '1rem' },
  footerLinks: { display: 'flex', flexDirection: 'column', gap: '0.625rem' },
  footerLink: { display: 'flex', alignItems: 'center', gap: '0.625rem', fontSize: '0.875rem', color: '#a0a0a0', textDecoration: 'none', transition: 'color 0.2s' },
};

const weeks = [
  { num: '01', title: 'AI-инструменты для бизнеса', desc: 'Обзор AI-экосистемы: какие модели и инструменты решают конкретные задачи бизнеса. Вы освоите профессиональный промптинг и уйдёте с первой работающей автоматизацией своего процесса.', topics: ['ChatGPT, Claude, Gemini', 'Промптинг для бизнеса', 'AI в маркетинге и продажах'], practical: 'Автоматизация процесса' },
  { num: '02', title: 'Создание сайтов и лендингов', desc: 'Создаёте полноценный сайт или лендинг с помощью AI за одно занятие. От формулировки задачи до публикации — без навыков программирования.', topics: ['Claude Code: от задачи к сайту', 'Прототипирование и итерации', 'Деплой и публикация'], practical: 'Рабочий лендинг за занятие' },
  { num: '03', title: 'AI-агенты и чат-боты для бизнеса', desc: 'Проектирование и запуск Telegram-бота с базой знаний вашей компании. Бот обрабатывает обращения клиентов, квалифицирует лиды и отвечает на типовые вопросы.', topics: ['Архитектура бизнес-ботов', 'Интеграция базы знаний', 'Telegram Bot API + AI'], practical: 'Запуск бота с базой знаний компании' },
  { num: '04', title: 'Разработка продуктов с помощью ИИ', desc: 'Проектирование и запуск полноценного AI-продукта: от идеи и архитектуры до рабочего прототипа. Вы соберёте MVP, интегрируете его с CRM и получите систему, готовую к использованию в бизнесе.', topics: ['Продуктовое мышление с AI', 'Интеграция с CRM и бизнес-системами', 'AI-стратегия для масштабирования'], practical: 'Запуск рабочего MVP' },
];

const results = [
  { title: 'AI-агент 24/7', desc: 'Ваш личный AI-ассистент, который отвечает клиентам, ведёт документы и выполняет задачи — без выходных.' },
  { title: '3-5 автоматизаций', desc: 'Конкретные процессы вашего бизнеса, которые теперь работают без вашего участия.' },
  { title: '10-20 часов в неделю', desc: 'Свободного времени. Навсегда. Не разовая экономия — а системное изменение.' },
  { title: 'Нетворкинг', desc: 'Знакомства с предпринимателями из Pro Business. Люди, которые мыслят так же.' },
];

const proFeatures = ['4 живых занятия по 2 часа', 'Практика на каждом занятии', 'Свой AI-агент к концу курса', 'Чат поддержки с тренером', 'Записи всех занятий', 'Шаблоны и промпты', 'Нетворкинг Pro Business', 'Сертификат AI LAB'];
const extFeatures = ['4 живых занятия по 2 часа', 'Практика на каждом занятии', 'Свой AI-агент к концу курса', 'Чат поддержки с тренером', 'Записи всех занятий', 'Шаблоны и промпты', 'Знакомство с Pro Business', 'Сертификат AI LAB'];

function Fade({ children, delay = 0, style = {} }) {
  const { ref, isVisible } = useReveal(0.1);
  return (
    <div
      ref={ref}
      style={{
        transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
        ...style,
      }}
    >
      {children}
    </div>
  );
}

export default function ProBusinessPage() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <div style={S.page}>
      <div style={S.gridBg} />
      <div style={S.content}>

        {/* NAV */}
        <nav style={S.nav}>
          <div style={S.navInner}>
            <div style={S.navLogos}>
              <span style={S.navLogoAI}>AI LAB</span>
              <span style={S.navX}>×</span>
              <span style={S.navLogoPB}>Pro Business</span>
            </div>
            <div style={{ ...S.navLinks, display: window.innerWidth < 768 ? 'none' : 'flex' }}>
              <a href="#speaker" style={S.navLink}>О спикере</a>
              <a href="#program" style={S.navLink}>Программа</a>
              <a href="#pricing" style={S.navLink}>Стоимость</a>
            </div>
            <a href="https://t.me/probusiness_tash" target="_blank" rel="noreferrer" style={S.navCta}>Записаться</a>
          </div>
        </nav>

        {/* HERO */}
        <section style={S.hero}>
          <div style={S.heroBlobPurple} />
          <div style={S.heroBlobGreen} />
          <div style={S.heroFade} />
          <div style={{ ...S.heroInner, opacity: mounted ? 1 : 0, transition: 'opacity 1s ease' }}>
            <div style={{ position: 'relative' }}>
              {/* Text block */}
              <div style={{ position: 'relative', zIndex: 3, maxWidth: '560px' }}>
                <div style={S.heroBadge}>
                  <span style={S.badgeDot} />
                  AI-курс · Апрель 2026
                </div>
                <h1 style={S.heroTitle}>
                  <span style={{ display: 'block' }}>Внедрите AI</span>
                  <span style={{ ...S.heroTitleAccent, display: 'block' }}>в бизнес</span>
                </h1>
                <p style={S.heroDesc}>
                  4 недели интенсива с Артёмом Панферовым. Вы обучитесь AI-методологиям и создадите автоматизации в бизнесе, которые окупятся с первого месяца.
                </p>
                <div style={S.heroActions}>
                  <a href="https://t.me/probusiness_tash" target="_blank" rel="noreferrer" style={S.btnPrimary}>Записаться на курс</a>
                  <a href="#program" style={S.btnOutline}>Программа</a>
                </div>
              </div>
              {/* Photo */}
              <div style={S.heroPhoto}>
                <div style={S.heroPhotoGlow} />
                <img
                  src="/images/artem.png"
                  alt="Артём Панферов"
                  style={{ position: 'relative', zIndex: 1, width: '100%', objectFit: 'contain', filter: 'drop-shadow(0 20px 60px rgba(0,0,0,0.5))' }}
                  onError={(e) => { e.target.style.display = 'none'; }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* PROBLEM */}
        <section style={S.section}>
          <div style={S.sectionInnerNarrow}>
            <Fade>
              <h2 style={S.problemText}>
                В 2026 году AI заменит не бизнесы.<br />
                <span style={S.problemMuted}>Он заменит тех, кто его не использует.</span>
              </h2>
              <p style={S.problemDesc}>Каждый месяц без AI — это потерянные часы, клиенты и деньги. Те, кто внедряет сейчас, получают преимущество, которое невозможно будет догнать.</p>
            </Fade>
          </div>
        </section>

        {/* SPEAKER */}
        <section style={S.section} id="speaker">
          <div style={S.sectionInner}>
            <Fade>
              <div style={S.introGrid}>
                <div>
                  <img
                    src="/images/artem.png"
                    alt="Артём Панферов"
                    style={S.introImg}
                    onError={(e) => { e.target.style.display = 'none'; }}
                  />
                </div>
                <div>
                  <h3 style={S.introName}>Привет! Я Артём Панферов</h3>
                  <p style={S.introRole}>Основатель AI LAB · Партнёр Anthropic · AICA TOP-30</p>
                  <p style={S.introText}>Я серийный предприниматель, эксперт AI-автоматизации бизнес-процессов. За плечами 700+ обученных предпринимателей и проекты с крупными энтерпрайзами Ipoteka Bank, IT Park, Ozon, DNS, Азбука вкуса и др.</p>
                  <p style={S.introText}>Я резидент Pro Business с 2023 года, и как и вы, каждый день сталкиваюсь с задачами, которые требуют скорости и точности. Совместно с клубом мы провели десятки обучений и получили запрос на расширенную программу по AI. Так появился этот курс, где вы не просто слушаете, а создаёте реальные автоматизации для своего бизнеса.</p>
                </div>
              </div>
            </Fade>
          </div>
        </section>

        {/* PROGRAM */}
        <section style={S.section} id="program">
          <div style={S.sectionInner}>
            <Fade>
              <span style={S.sectionLabel}>Программа</span>
              <h2 style={S.sectionTitle}>Вот что мы будем делать</h2>
              <p style={S.sectionSub}>Каждая неделя — новый инструмент. Каждое занятие — 2 часа, из которых минимум час — чистая практика.</p>
            </Fade>
            <div style={S.programGrid}>
              {weeks.map((week, i) => (
                <Fade key={i} delay={(i + 1) * 100}>
                  <div style={S.weekCard}>
                    <div style={S.weekHead}>
                      <div style={S.weekNum}>{week.num}</div>
                      <h3 style={S.weekTitle}>{week.title}</h3>
                    </div>
                    <p style={S.weekDesc}>{week.desc}</p>
                    <div style={S.weekTags}>
                      {week.topics.map((t, j) => <span key={j} style={S.tag}>{t}</span>)}
                      <span style={S.tagGreen}>{week.practical}</span>
                    </div>
                  </div>
                </Fade>
              ))}
            </div>
          </div>
        </section>

        {/* RESULTS */}
        <section style={S.section}>
          <div style={S.sectionInnerNarrow}>
            <Fade style={{ textAlign: 'center' }}>
              <span style={S.sectionLabel}>Что вы получите</span>
              <h2 style={{ ...S.sectionTitle }}>
                Через 4 недели ваш бизнес будет работать{' '}
                <span style={{ color: '#22c55e' }}>иначе</span>
              </h2>
            </Fade>
            <div style={S.resultsGrid}>
              {results.map((r, i) => (
                <Fade key={i} delay={(i + 1) * 100}>
                  <div style={S.resultCard}>
                    <h3 style={S.resultTitle}>{r.title}</h3>
                    <p style={S.resultDesc}>{r.desc}</p>
                  </div>
                </Fade>
              ))}
            </div>
          </div>
        </section>

        {/* PRICING */}
        <section style={S.section} id="pricing">
          <div style={S.sectionInner}>
            <Fade>
              <span style={S.sectionLabel}>Стоимость</span>
              <h2 style={S.sectionTitle}>Инвестиция, которая окупается сразу</h2>
              <p style={S.sectionSub}>Старт — апрель 2026. Количество мест ограничено.</p>
            </Fade>
            <div style={S.pricingGrid}>
              <Fade delay={100}>
                <div style={S.pricingCardFeatured}>
                  <div style={S.pricingBadge}>Для участников клуба</div>
                  <div style={S.pricingHeader}>
                    <div style={S.pricingName}>Pro Business</div>
                    <div style={S.pricingPrice}>$500</div>
                    <div style={S.pricingPeriod}>за весь курс · 4 недели</div>
                  </div>
                  <div style={S.pricingFeatures}>
                    {proFeatures.map((f) => (
                      <div key={f} style={S.pricingFeature}>
                        <span style={S.pricingCheck}>✓</span> {f}
                      </div>
                    ))}
                  </div>
                  <a href="https://t.me/probusiness_tash" target="_blank" rel="noreferrer" style={{ ...S.btnPrimary, textAlign: 'center', display: 'block' }}>Записаться →</a>
                </div>
              </Fade>
              <Fade delay={200}>
                <div style={S.pricingCard}>
                  <div style={S.pricingHeader}>
                    <div style={S.pricingName}>Внешний участник</div>
                    <div style={S.pricingPrice}>$700</div>
                    <div style={S.pricingPeriod}>за весь курс · 4 недели</div>
                  </div>
                  <div style={S.pricingFeatures}>
                    {extFeatures.map((f) => (
                      <div key={f} style={S.pricingFeature}>
                        <span style={S.pricingCheck}>✓</span> {f}
                      </div>
                    ))}
                  </div>
                  <a href="https://t.me/probusiness_tash" target="_blank" rel="noreferrer" style={{ ...S.btnOutline, textAlign: 'center', display: 'block', padding: '1rem' }}>Записаться →</a>
                </div>
              </Fade>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={S.section} id="form">
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <Fade>
              <div style={S.ctaBox}>
                <div>
                  <h2 style={S.ctaTitle}>Готовы внедрить AI в свой бизнес?</h2>
                  <p style={S.ctaSub}>Напишите нам в Telegram — поможем выбрать пакет и забронировать место</p>
                </div>
                <a href="https://t.me/probusiness_tash" target="_blank" rel="noreferrer" style={S.tgBtn}>
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" /></svg>
                  Написать в Telegram
                </a>
              </div>
            </Fade>
          </div>
        </section>

        {/* VIDEO */}
        <section style={S.section}>
          <div style={S.videoWrap}>
            <iframe
              style={{ width: '100%', height: '100%', border: 'none' }}
              src="https://www.youtube.com/embed/SNbR5LD-ApM"
              title="Pro Business × AI LAB"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </section>

        {/* FOOTER */}
        <footer style={S.footer}>
          <div style={S.footerInner}>
            <div>
              <div style={S.footerLogo}>
                <span style={S.navLogoAI}>AI LAB</span>
                <span style={S.navX}>×</span>
                <span style={S.navLogoPB}>Pro Business</span>
              </div>
              <p style={S.footerDesc}>AI-курс для предпринимателей.<br />Ташкент, Узбекистан.</p>
            </div>
            <div>
              <h4 style={S.footerHeading}>AI LAB</h4>
              <div style={S.footerLinks}>
                <a href="https://ailab.uz" target="_blank" rel="noreferrer" style={S.footerLink}>ailab.uz</a>
                <a href="https://t.me/Panferov_AI" target="_blank" rel="noreferrer" style={S.footerLink}>Telegram</a>
                <a href="https://www.instagram.com/ailab.bpo" target="_blank" rel="noreferrer" style={S.footerLink}>Instagram</a>
                <a href="https://youtube.com/@AI_panferov" target="_blank" rel="noreferrer" style={S.footerLink}>YouTube</a>
              </div>
            </div>
            <div>
              <h4 style={S.footerHeading}>Pro Business</h4>
              <div style={S.footerLinks}>
                <a href="https://probusinessclub.uz" target="_blank" rel="noreferrer" style={S.footerLink}>probusinessclub.uz</a>
                <a href="https://t.me/probusiness_tash" target="_blank" rel="noreferrer" style={S.footerLink}>Telegram</a>
              </div>
            </div>
          </div>
        </footer>

      </div>
    </div>
  );
}
