import Home from './../../components/home'
import Skills from '../../components/skills';
import Projects from '../../components/projects';
import Navigation from '../../components/navigation';
import Footer from '../../components/footer';

function HomePage() {
  return (
    <div>
      <Navigation />
      <Home />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}

export default HomePage;