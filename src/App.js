import './App.css';
import Navbar from './Components/Navbar/navbar'; 
import Hero from './Components/Hero/hero'
import Portfolio from './Components/Portfolio/portfolio';
import CodeSnippet from './Components/CodeSnippet/codesnippet';
import AboutMe from './Components/AboutMe/aboutme'
import Contact from './Components/Contact/contact'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div className="App">
        <Navbar />
        <Hero />
        <Portfolio />
        <CodeSnippet />
        <AboutMe />
        <Contact />
      </div>
      </header>
    </div>
  );
}

export default App;
