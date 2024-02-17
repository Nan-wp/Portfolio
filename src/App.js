
import './App.css';
import Navbar from './Component/Navbar';
import Home from './Component/Home';
import About from './Component/About';
import Skills from './Component/Skills';
import Project from './Component/Project';




function App() {

  return (
    <div className='overflow-hidden'> 
      <Navbar />
      <Home />
      <About/>
      <Skills/>
      <Project/>
    </div>
  );
}

export default App;
