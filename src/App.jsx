import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Analytics } from '@vercel/analytics/react';
import { LanguageProvider } from './contexts/LanguageContext';
import './styles.css';
import HomePage from './pages/HomePage';
import AcademyPage from './pages/AcademyPage';

function App() {
  return (
    <HelmetProvider>
      <LanguageProvider>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/academy" element={<AcademyPage />} />
          </Routes>
        </Router>
        <Analytics />
      </LanguageProvider>
    </HelmetProvider>
  );
}

export default App;
