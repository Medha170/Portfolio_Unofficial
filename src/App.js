import logo from './logo.svg';
import './App.css';
import About from './components/about/About';
import Education from './components/education/Education';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import Navigation from './components/navigation/Navigation';
import Projects from './components/projects/Projects';
import Skills from './components/skills/Skills';
import Work from './components/work experience/Work_Experience';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Home />
      <About />
      <Education />
      <Work />
      <Skills />
      <Projects />
      <Footer /> 
    </div>
  );
}

export default App;
