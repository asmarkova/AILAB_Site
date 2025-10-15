import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles.css';
import HomePage from './pages/HomePage';
import AcademyPage from './pages/AcademyPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/academy" element={<AcademyPage />} />
      </Routes>
    </Router>
  );
}

export default App;
