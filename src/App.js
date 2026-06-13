import logo from './logo.svg';
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Experience />
      <section id="contact">Contact</section>
    </div>
  );
}

export default App;
