import React from 'react';
import Laptop from "../../assets/Images/Laptop.png"
const About = () => {
  return (
    <section className="relative top-0 py-24 bg-[#010101] h-fit md:h-screen lg:pb-0 lg:w-[90%] mx-auto px-3 md:px-0">
      {/* Background Image */}
      <img src={Laptop} className=" absolute w-full object-cover z-0 h-auto md:h-screen top-40 lg:top-20 opacity-60 "

      />
      <div className="container top-5 px-5 mx-auto relative z-30">
        <div className="flex flex-wrap md:flex-nowrap items-start gap-10 ">
          {/* Left Section */}
          <div className="md:w-[40%] w-full flex flex-col"
            data-aos="fade-right">
            <h2 className="font-semibold text-gray-100 text-5xl uppercase">Who I Am</h2>
            <hr className="bg-amber-600 my-3 w-3/4 h-[2px]" />

            {/* Contact Info */}
            <div className="w-full mt-7 space-y-4">
              <div className="flex items-center space-x-4">
                <span className="bg-[#0e0e0e6e]  border-2 border-indigo-600 w-8 h-8 lg:w-12 lg:h-12 rounded-full flex items-center justify-center">
                  👤
                </span>
                <p className="text-gray-100 text-lg">Rimsha Arfeen</p>
              </div>

              <div className="flex items-center space-x-4">
                <span className="bg-[#0e0e0e6e]  border-2 border-indigo-600 w-8 h-8 lg:w-12 lg:h-12 rounded-full flex items-center justify-center">
                  🎓
                </span>
                <p className="text-gray-100 text-lg">Computer Science Student</p>
              </div>

              <div className="flex items-center space-x-4">
                <span className="bg-[#0e0e0e6e]  border-2 border-indigo-600 w-8 h-8 lg:w-12 lg:h-12 rounded-full flex items-center justify-center">
                  💻
                </span>
                <p className="text-gray-100 text-lg">React & Frontend Developer</p>
              </div>
            </div>

          </div>
          <hr className='hidden md:block w-[1px] h-80 text-indigo-600 mx-1 bg-indigo-600' />
          {/* Right Section */}
          <div className="md:w-2/3 w-full pr-3"
            data-aos="fade-left">
            <h2 className="text-3xl font-light uppercase tracking-wider text-indigo-600 mb-4">
              Transforming Ideas into Digital Experiences
            </h2>
            <p className="leading-relaxed text-lg text-gray-100 text-justify">
              I'm <span className="font-bold text-gray-150">Rimsha Arfeen</span>, a passionate
              <span className="font-bold text-gray-150"> Web Developer</span> dedicated to
              building dynamic, responsive, and user-centric web applications.
              With expertise in <span className="font-bold text-gray-150">React, Redux, Tailwind
                CSS, and modern web technologies</span>, I focus on crafting seamless digital
              experiences that bring ideas to life. Whether it's designing interactive interfaces
              or optimizing performance, I thrive on problem-solving and innovation.
            </p>
            <a className="text-indigo-500 inline-flex items-center mt-6 text-lg font-medium" href="#about">
              Learn More
              <svg className="w-5 h-5 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none"
                strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
