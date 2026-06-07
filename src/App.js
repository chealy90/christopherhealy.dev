import logo from './logo.svg';
import Header from './components/Header';
import About from './components/About';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <section id="experience">Experience</section>
      <section id="contact">Contact</section>
    </div>
  );
}

export default App;
