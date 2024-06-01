import './App.css';
import Footer from './components/footer';
import Navigation from './components/navigation';
import HomePage from './pages/HomePage';


function App() {
  return (
    <div className="App">
      <Navigation />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;
