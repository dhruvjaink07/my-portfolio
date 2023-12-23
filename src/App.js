import './App.css';
import About from './components/About';
import Projects  from './components/Projects';
import Social from './components/Social';
import Intro from './components/intro';
// import Navbar from './components/navbar';


function App() {
  return (
    <div>
      <Intro />
      <About></About>
      <Projects/>
      <Social/>
    </div>
  );
}

export default App;
