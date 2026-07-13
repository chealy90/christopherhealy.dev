import logo from './logo.svg';
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Experience />
      <Contact />
    </div>
  );
}

export default App;
