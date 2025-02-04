import React from 'react';

const About = () => {
  return (
    <section className="relative top-0 py-16 invert-0 bg-[#010101] h-fit md:h-screen lg:pb-0 lg:w-[90%] mx-auto px-3 md:px-0">
        {/* Background Video */}
                     <img src="https://images.unsplash.com/photo-1537498425277-c283d32ef9db?q=80&w=1478&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className=" absolute w-full object-cover z-0 h-auto md:h-screen top-40 lg:top-20 opacity-60 "
                        
                     />
      <div className="container px-5 mx-auto invert-100">
        <div className="flex flex-wrap md:flex-nowrap items-start gap-10 ">
          {/* Left Section */}
          <div className="md:w-1/3 w-full flex flex-col">
            <h2 className="font-semibold text-gray-700 text-5xl uppercase">Who I Am</h2>
            <hr className="bg-amber-600 my-3 w-3/4 h-[2px]" />

            {/* Contact Info */}
            <div className="w-full mt-7 space-y-4">
              <div className="flex items-center space-x-4">
                <span className="bg-indigo-100 text-indigo-500 w-8 h-8 lg:w-10 lg:h-10 rounded-full flex items-center justify-center">
                  📧
                </span>
                <p className="text-gray-900 text-lg">rimshaarfeen61@gmail.com</p>
              </div>

              <div className="flex items-center space-x-4">
                <span className="bg-indigo-100 text-indigo-500 w-8 h-8 lg:w-10 lg:h-10 rounded-full flex items-center justify-center">
                  📞
                </span>
                <p className="text-gray-900 text-lg">0340-4604887</p>
              </div>

              <div className="flex items-center space-x-4">
                <span className="bg-indigo-100 text-indigo-500 w-8 h-8 lg:w-10 lg:h-10 rounded-full flex items-center justify-center">
                  📍
                </span>
                <p className="text-gray-900 text-lg">Karachi, Pakistan</p>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="md:w-2/3 w-full pr-3">
            <h2 className="text-3xl font-semibold uppercase tracking-wide text-gray-900 mb-4">
              Transforming Ideas into Digital Experiences
            </h2>
            <p className="leading-relaxed text-lg text-gray-700 text-justify">
              I'm <span className="font-bold text-gray-950">Rimsha Arfeen</span>, a passionate
              <span className="font-bold text-gray-950"> Web Developer</span> dedicated to
              building dynamic, responsive, and user-centric web applications.
              With expertise in <span className="font-bold text-gray-950">React, Redux, Tailwind
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
