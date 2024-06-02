import './App.css';
import Footer from './components/footer';
import Navigation from './components/navigation';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';


function App() {
  return (
    <div className="App">
      <Navigation />
      {/* <HomePage /> */}
      {/* <AboutPage /> */}
      <ContactPage />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
