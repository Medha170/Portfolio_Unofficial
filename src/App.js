import './App.css';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import EducationPage from './pages/EducationPage';
import HomePage from './pages/HomePage';
import WorkExperiencePage from './pages/WorkExperiencePage';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/education" element={<EducationPage />} />
          <Route path="/work-experience" element={<WorkExperiencePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
