import logo from './logo.svg';
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
