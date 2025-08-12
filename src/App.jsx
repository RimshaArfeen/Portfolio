import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Skills from './Pages/Skills/Skills';
import Experience from './Pages/Experience/Experience';
import Portfolio from './Pages/Portfolio/Portfolio';
import Contact from './Pages/Contact/Contact';

function App() {
  return (
    <div className='bg-[#010101]'>
      <Navbar />
      <Routes>
        <Route path='/' element = {
          <>
          <Home/>
          <About/>
          <Skills/>
          <Experience/>
          <Portfolio/>
          <Contact/>
          </>} />
        <Route path='/about' element = {<About/>} />
        <Route path='/skills' element = {<Skills/>} />
        <Route path='/experience' element = {<Experience/>} />
        <Route path='/portfolio' element = {<><Portfolio/></>} />
        <Route path='/contact' element = {<Contact/>} />

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
