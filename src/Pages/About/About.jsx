

import React, { useState } from 'react';
import "../../index.css"
const About = () => {
  const [selectedCat, setSelectedCat] = useState("Development");

  const handleSelection = (category) => {
    setSelectedCat(category);
  };

  return (
     <section className=" section-container relative min-h-screen py-24  bg-gradient-to-t from-indigo-950/90 to-indigo-950  text-slate-200 flex items-center justify-center px-4 md:px-8 lg:px-16">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left Section: Personal Info */}
        <div className="flex flex-col space-y-10">
          <div className="flex flex-col">
            <h1 className="text-4xl md:text-5xl font-extrabold uppercase text-indigo-400">
              Who I Am
            </h1>
            <hr className="w-24 border-t-2 border-indigo-600 my-4" />
          </div>

          <ul className="space-y-6">
            <li className="flex items-start space-x-4">
              <span className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-indigo-600 bg-gray-800 text-2xl" aria-hidden="true">
                👤
              </span>
              <div>
                <p className="text-lg text-slate-400 font-medium">Name</p>
                <p className="text-xl md:text-2xl font-semibold text-slate-200">Rimsha Arfeen</p>
              </div>
            </li>
            <li className="flex items-start space-x-4">
              <span className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-indigo-600 bg-gray-800 text-2xl" aria-hidden="true">
                🎓
              </span>
              <div>
                <p className="text-lg text-slate-400 font-medium">Education</p>
                <p className="text-xl md:text-2xl font-semibold text-slate-200">Computer Science Student</p>
              </div>
            </li>
            <li className="flex items-start space-x-4">
              <span className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-indigo-600 bg-gray-800 text-2xl" aria-hidden="true">
                💻
              </span>
              <div>
                <p className="text-lg text-slate-400 font-medium">Role</p>
                <p className="text-xl md:text-2xl font-semibold text-slate-200">MERN Stack Developer</p>
              </div>
            </li>
            <li className="flex items-start space-x-4">
              <span className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-indigo-600 bg-gray-800 text-2xl" aria-hidden="true">
                🎨
              </span>
              <div>
                <p className="text-lg text-slate-400 font-medium">Specialty</p>
                <p className="text-xl md:text-2xl font-semibold text-slate-200">Graphic Designer</p>
              </div>
            </li>
          </ul>
        </div>

        {/* Right Section: About Me text with category toggle */}
        <div className="flex flex-col space-y-8 mt-12 lg:mt-0">
          <h2 className="text-xl md:text-2xl font-light text-slate-400">
            Transforming Ideas into Engaging Digital Experiences
          </h2>

          <div className='flex items-center space-x-6 border-b border-gray-700'>
            <button
              onClick={() => handleSelection("Development")}
              className={`relative pb-3 text-xl md:text-2xl font-bold uppercase transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-t-lg px-2 ${selectedCat === "Development" ? 'text-indigo-400' : 'text-slate-400 hover:text-white'}`}
              aria-pressed={selectedCat === "Development"}
            >
              Development
              <span className={`absolute bottom-0 left-0 h-0.5 bg-indigo-600 transition-all duration-300 ${selectedCat === "Development" ? 'w-full' : 'w-0'}`}></span>
            </button>
            <button
              onClick={() => handleSelection("Design")}
              className={`relative pb-3 text-xl md:text-2xl font-bold uppercase transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-t-lg px-2 ${selectedCat === "Design" ? 'text-indigo-400' : 'text-slate-400 hover:text-white'}`}
              aria-pressed={selectedCat === "Design"}
            >
              Design
              <span className={`absolute bottom-0 left-0 h-0.5 bg-indigo-600 transition-all duration-300 ${selectedCat === "Design" ? 'w-full' : 'w-0'}`}></span>
            </button>
          </div>

          <div className='text-slate-300 text-lg md:text-xl transition-opacity duration-500'>
            {selectedCat === "Development" ? (
              <p className="text-justify leading-relaxed">
                I'm <span className="font-bold text-slate-100">Rimsha Arfeen</span>, a passionate and detail-oriented <span className="font-bold text-slate-100">MERN Stack Developer</span> dedicated to creating modern, responsive, and user-focused web applications. I work extensively with <span className="font-bold text-slate-100">MongoDB, Express.js, React.js, and Node.js</span>, focusing on writing clean and reusable code, building scalable REST APIs, and creating dynamic user interfaces. I am currently expanding my knowledge in <span className="font-bold text-slate-100">Next.js</span> and have a basic understanding of <span className="font-bold text-slate-100">Redux, Python</span>, and <span className="font-bold text-slate-100">C language</span>.
              </p>
            ) : (
              <p className="text-justify leading-relaxed">
                Alongside development, I’m a creative <span className="font-bold text-slate-100">Graphic Designer</span> with hands-on experience in <span className="font-bold text-slate-100">Adobe Illustrator</span> and <span className="font-bold text-slate-100">Canva</span>. I specialize in designing compelling <span className="font-bold text-slate-100">logos, posters, digital artworks, and custom visuals</span>. I bring a strong design sense, ensuring that the end product is not only functional but also aesthetically impressive.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;