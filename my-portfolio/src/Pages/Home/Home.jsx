import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom"; // Import useLocation
import "./Home.css";
import SpaceBg from "./SpaceBg.mp4";
import { NavLink } from "react-router-dom";

const Home = () => {
  const [scroll, setScroll] = useState(false);
  const location = useLocation(); // Get the current page location

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="text-gray-100 body-font relative w-full top-0 h-screen">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="videoBg absolute w-full object-cover z-0 h-[100vh] md:h-full"
      >
        <source src={SpaceBg} type="video/mp4" />
      </video>

      <div className="relative mx-auto flex px-5 md:px-14 py-52 md:flex-row flex-col items-center">
        <div className="md:w-full lg:w-[90%] xl:w-3/4 lg:pr-24 md:pr-10 flex flex-col items-center md:items-start md:text-left mb-5 md:mb-0"
        data-aos="fade-right">
          <h1 className="title-font text-2xl md:text-4xl sm:items-center md:items-start uppercase mb-4 flex flex-col font-normal text-gray-200">
            Hello, I'm
            <span className="mt-2 text-[#2a49ff] text-[2rem] md:text-[3.5rem] tracking-wide font-semibold md:font-bold">
              Rimsha Arfeen,
            </span>
            <h5 className="mt-2 flex flex-col items-center md:items-start">
              a Passionate{" "}
              <span className="mt-2 text-[#2a49ff] text-[2rem] md:text-[3.5rem] tracking-wide font-semibold md:font-bold ml-1">
                Web Developer
              </span>
            </h5>
          </h1>
          <hr className="w-100 md:w-[95%] lg:w-4/5 bg-indigo-800 text-[#2a49ff] mb-3 rounded" />
          <p className="mb-3 text-center md:text-left text-[1.2rem] md:text-[1.5rem] lg:text-3xl leading-relaxed text-gray-300 font-light tracking-widest">
            LET'S BUILD SOMETHING TOGETHER
          </p>
          <div className="flex flex-row w-[90%] mt-10 md:mt-1 md:w-[100%] lg:w-2/3 justify-between md:justify-start items-end">
            <NavLink 
            to="/portfolio"
            className="inline-flex tracking-wide text-gray-200 hover:text-gray-400 bg-[#a2a2a30a] border border-[#5d5d5e] py-2 px-6 focus:outline-none hover:bg-[#000] rounded-lg text-lg uppercase md:mr-7">
              View My Work
            </NavLink>
            <NavLink 
            to="/contact"
            className="inline-flex tracking-wide text-gray-200 hover:text-gray-400 bg-[#a2a2a30a] border border-[#5d5d5e] py-2 px-6 focus:outline-none hover:bg-[#00000094] rounded-lg text-lg uppercase">
              Contact Me
            </NavLink>
          </div>
        </div>
        <div className=" md:w-[25%] w-1/2 mx-auto"
        data-aos="fade-up" data-aos-duration= "5000" >
          <span className=" flex flex-row md:flex-col sm:ml-auto sm:mt-0 mt-4 justify-around md:items-end h-[14rem]">
            <a 
            href="https://www.linkedin.com/in/rimsha-arfeen-b25709305/" 
            className="text-[#2a49ff]" aria-label="LinkedIn">
              <svg fill="currentColor" className="w-8 h-8 text-[#2a49ff]" viewBox="0 0 24 24">
                <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>


            <a
            href= "https://www.facebook.com/profile.php?id=61569563560369"
             className="ml-3 text-[#2a49ff]">
  <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-8 h-8" viewBox="0 0 24 24">
    <path d="M22 12.07C22 6.48 17.52 2 12 2S2 6.48 2 12.07C2 17.08 5.67 21.14 10.44 22v-6.98H7.9v-2.96h2.54v-2.26c0-2.5 1.49-3.88 3.77-3.88 1.1 0 2.25.2 2.25.2v2.46h-1.27c-1.25 0-1.63.78-1.63 1.57v1.9h2.77l-.44 2.96h-2.33V22C18.33 21.14 22 17.08 22 12.07z"></path>
  </svg>
</a>

<a href="https://profile.indeed.com/" 
className="ml-3 text-[#2a49ff]">
  <svg fill="currentColor" stroke="none" className="w-8 h-8" viewBox="0 0 24 24">
    <path d="M12.02 7.19c2.15 0 3.81 1.67 3.81 3.85 0 2.18-1.66 3.85-3.81 3.85-2.15 0-3.81-1.67-3.81-3.85 0-2.18 1.66-3.85 3.81-3.85zm0-3.17c-4.01 0-7.27 3.23-7.27 7.27 0 4.04 3.26 7.27 7.27 7.27s7.27-3.23 7.27-7.27c0-4.04-3.26-7.27-7.27-7.27zm5.24 7.27c0 2.89-2.35 5.24-5.24 5.24s-5.24-2.35-5.24-5.24c0-2.89 2.35-5.24 5.24-5.24s5.24 2.35 5.24 5.24z"></path>
  </svg>
</a>

            <a href="https://github.com/RimshaArfeen" className="ml-3 text-[#2a49ff]" aria-label="GitHub">
              <svg fill="currentColor" className="w-8 h-8 text-[#2a49ff]" viewBox="0 0 24 24">
                <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.07 3.29 9.38 7.86 10.91.58.11.79-.25.79-.55v-2c-3.22.7-3.91-1.56-3.91-1.56-.52-1.3-1.26-1.64-1.26-1.64-1.03-.7.08-.69.08-.69 1.14.08 1.74 1.18 1.74 1.18 1.01 1.73 2.65 1.23 3.3.94.1-.73.4-1.23.73-1.51-2.57-.29-5.27-1.28-5.27-5.69 0-1.26.45-2.3 1.18-3.11-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.15 1.19a10.9 10.9 0 012.87-.39c.97 0 1.94.13 2.87.39 2.19-1.5 3.15-1.19 3.15-1.19.62 1.58.23 2.75.11 3.04.73.81 1.18 1.85 1.18 3.11 0 4.42-2.71 5.39-5.3 5.68.41.35.77 1.02.77 2.06v3.06c0 .31.21.67.8.55A11.52 11.52 0 0023.5 12c0-6.35-5.15-11.5-11.5-11.5z"></path>
              </svg>
            </a>
          </span>
        </div>
      </div>
    

      {/* Show Scroll Button on All Pages Except Home */ }
  {
    scroll && location.pathname !== "/" && (
      <div className="w-full flex justify-end items-end fixed z-40">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="w-16 h-16 bg-red-700 rounded-full p-2 hover:bg-red-600 fixed bottom-10 right-10"
        >
          ↑
        </button>
      </div>
    )
  }
    </section >
  );
};

export default Home;
