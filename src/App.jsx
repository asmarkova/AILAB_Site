import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import './styles.css';
import HomePage from './pages/HomePage';
import AcademyPage from './pages/AcademyPage';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/academy" element={<AcademyPage />} />
        </Routes>
      </Router>
      <Analytics />
    </>
  );
}

export default App;
