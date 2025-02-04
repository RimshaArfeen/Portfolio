import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Services from './Pages/Services/Services'
import Skills from './Pages/Home/Skills/Skills'
import Experience from './Pages/Experience/Experience'

function App() {

  return (
   <div className='  bg-[#010101]'>
   <Navbar/>
   <Home/>
   <About/>
   <Skills/>
   <Experience/>
   <Footer/>
   </div>
  )
}

export default App
