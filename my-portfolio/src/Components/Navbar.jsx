import React from 'react'
import { NavLink } from 'react-router-dom'
// border-bottom: 2px solid #d9440
// text[#d94400]
const Navbar = () => {
  return (
     <header className=" body-font absolute w-full top-0 z-20  border-b-2 border-indigo-600 text-indigo-600 tracking-wider">
     <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
       <a className="flex title-font font-medium items-center text-indigo-600 tracking-wider mb-4 md:mb-0">
         {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
           <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
         </svg> */}
         <span className="ml-3 text-xl">MERN STACK DEVELOPER</span>
       </a>
       <nav className="md:ml-auto md:mr-auto text-white flex flex-wrap items-center text-base justify-center">
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
