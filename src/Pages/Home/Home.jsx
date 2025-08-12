

import React, { useState, useEffect } from "react";
import { useLocation, NavLink } from "react-router-dom";
import Typed from "typed.js";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Home.css";
import SpaceBg from "./SpaceBg.mp4";

const Home = () => {
  const [scroll, setScroll] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const typed = new Typed("#typed-text", {
      strings: ["Web Developer", "Graphic Designer", "Creative Coder"],
      typeSpeed: 60,
      backSpeed: 40,
      loop: true,
      cursorChar: '_',
    });
    return () => typed.destroy();
  }, []);

  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <>
      <main className="text-slate-200 bg-gray-950 relative w-full h-screen overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0 opacity-40"
          aria-hidden="true"
        >
          <source src={SpaceBg} type="video/mp4" />
        </video>

        <div className="relative z-10 container mx-auto flex h-full flex-col justify-center items-center px-4 md:px-8 lg:px-16">
          <div
            className="flex flex-col items-center md:items-start text-center md:text-left"
            data-aos="fade-right"
          >
            <p className="text-xl md:text-2xl font-light text-indigo-400 uppercase tracking-widest mb-2">
              Hello, I'm
            </p>
            <h1 className="text-4xl md:text-6xl font-extrabold uppercase text-white mb-2">
              Rimsha Arfeen,
            </h1>
            <p className="text-2xl md:text-4xl font-semibold text-slate-300">
              A Passionate <span id="typed-text" className="text-indigo-400"></span>
            </p>
            <hr className="w-24 border-t-2 border-indigo-600 my-4" />
            <p className="text-lg md:text-xl leading-relaxed text-slate-400 mb-6 max-w-xl">
              LET'S BUILD SOMETHING TOGETHER
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <NavLink
                to="/portfolio"
                className="inline-flex items-center justify-center tracking-wide text-slate-200 border-2 border-indigo-600 bg-indigo-600 py-3 px-8 font-semibold rounded-full hover:bg-transparent hover:text-indigo-400 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
              >
                View My Work
              </NavLink>
              <NavLink
                to="/contact"
                className="inline-flex items-center justify-center tracking-wide text-indigo-400 border-2 border-indigo-600 py-3 px-8 font-semibold rounded-full hover:bg-indigo-600 hover:text-white transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
              >
                Contact Me
              </NavLink>
            </div>
          </div>
        </div>

        {/* Social Icons - A cleaner, more integrated look */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 md:top-1/2 md:left-auto md:right-8 md:-translate-x-0 md:-translate-y-1/2 z-20">
          <div className="flex flex-row md:flex-col gap-6">
            <a href="https://www.linkedin.com/in/rimsha-arfeen-b25709305/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-indigo-400 transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-md p-1">
              {/* SVG for LinkedIn */}
              <svg fill="currentColor" className="w-7 h-7" viewBox="0 0 24 24">...</svg>
            </a>
            <a href="https://www.facebook.com/profile.php?id=61569563560369" aria-label="Facebook" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-indigo-400 transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-md p-1">
              {/* SVG for Facebook */}
              <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-7 h-7" viewBox="0 0 24 24">...</svg>
            </a>
            <a href="https://profile.indeed.com/" aria-label="Indeed" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-indigo-400 transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-md p-1">
              {/* SVG for Indeed */}
              <svg fill="currentColor" className="w-7 h-7" viewBox="0 0 24 24">...</svg>
            </a>
            <a href="https://github.com/RimshaArfeen" aria-label="GitHub" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-indigo-400 transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-md p-1">
              {/* SVG for GitHub */}
              <svg fill="currentColor" className="w-7 h-7" viewBox="0 0 24 24">...</svg>
            </a>
          </div>
        </div>
      </main>

      {scroll && location.pathname !== "/" && (
        <div className="fixed bottom-8 right-8 z-40">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="w-14 h-14 bg-indigo-600 text-white rounded-full p-2 hover:bg-indigo-700 transition-colors duration-300 shadow-xl"
            aria-label="Scroll to top"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-full w-full" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2l-8 8h6v10h4v-10h6l-8-8z"/>
            </svg>
          </button>
        </div>
      )}
    </>
  );
};

export default Home;