import React, {useEffect, useState} from 'react'
import { NavLink } from 'react-router-dom'
// border-bottom: 2px solid #d9440
// text[#d94400]
const Navbar = () => {
  const [Scroll, setScroll] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 50)
    }
  
  
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [])

  return (
     <header className={`body-font  w-full top-0 z-20  border-b-2 fixed border-indigo-600 text-indigo-600 tracking-wider transition-all duration-500 ${Scroll ? "bg-indigo-dark opacity-100 border-indigo-600 text-white z-50" : "bg-transparent border-indigo-600 text-indigo-600"} `}>
     <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
       <a className={`flex w-full md:w-fit title-font font-medium items-center justify-center text-indigo-600 tracking-wider mx-auto mb-4 md:mb-2 ${Scroll ? "hidden transition-all duration-300" : "block"}`}>
         <span className={ `text-xl uppercase  `}>MERN STACK DEVELOPER <span className=' text-white'> | </span>
           Graphic Designer</span>
       </a>
       <nav className="md:ml-auto md:mr-auto text-white flex flex-wrap items-center text-base justify-center transition-all duration-300">
         <NavLink to="/" className="mr-5 hover:text-indigo-600 tracking-wider hover:cursor-pointer uppercase ">Home</NavLink>
         <NavLink to="/about" className="mr-5 hover:text-indigo-600 tracking-wider hover:cursor-pointer uppercase ">About</NavLink>
         <NavLink to="/skills" className="mr-5 hover:text-indigo-600 tracking-wider hover:cursor-pointer uppercase ">Skills</NavLink>
         <NavLink to="/portfolio" className="mr-5 hover:text-indigo-600 tracking-wider hover:cursor-pointer uppercase ">Portfolio</NavLink>
         <NavLink to="/contact" className="mr-5 hover:text-indigo-600 tracking-wider hover:cursor-pointer uppercase ">Contact</NavLink>
       </nav>
      
     </div>
   </header>
  )
}

export default Navbar
