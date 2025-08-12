import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi'; // for icons

const Navbar = () => {
  const [scroll, setScroll] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ease-in-out ${
        scroll ? 'bg-gray-950/80 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto flex items-center justify-between p-4 md:p-5">
        <NavLink
          to="/"
          className="flex items-center text-indigo-400 font-bold text-2xl uppercase tracking-widest"
        >
          <span className="text-3xl text-indigo-600 font-extrabold">RA</span>
        </NavLink>

        {/* Desktop menu */}
        <nav className="hidden md:flex items-center text-base justify-center">
          {['Home', 'About', 'Skills', 'Portfolio', 'Contact'].map((item, idx) => (
            <NavLink
              key={idx}
              to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
              className="mr-6 uppercase font-medium text-slate-200 hover:text-indigo-400 transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-md p-1"
            >
              {item}
            </NavLink>
          ))}
        </nav>

        {/* Hamburger Icon for mobile */}
        <div className="md:hidden text-slate-200 text-2xl cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FiX /> : <FiMenu />}
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-gray-950/90 backdrop-blur-sm shadow-lg absolute w-full left-0 top-full flex flex-col items-center p-5 space-y-5">
          {['Home', 'About', 'Skills', 'Portfolio', 'Contact'].map((item, idx) => (
            <NavLink
              key={idx}
              to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className="uppercase font-medium text-slate-200 hover:text-indigo-400 transition-colors duration-300"
            >
              {item}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;
