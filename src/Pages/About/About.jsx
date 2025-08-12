import React, { useState, useEffect } from 'react';
import Laptop from "../../assets/Images/Laptop.png"
const About = () => {
  const [selectCat, setSelectCat] = useState("Development")

  const handleSelection = (category) => {
    setSelectCat(category)
  }


  return (
    <section className="relative top-5 py-24 bg-[#010101] h-fit md:h-screen lg:pb-0 lg:w-[90%] mx-auto px-3 md:px-0">
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
                <p className="text-gray-100 text-lg">MERN Stack Developer</p>
              </div>
              <div className="flex items-center space-x-4">
                <span className="bg-[#0e0e0e6e]  border-2 border-indigo-600 w-8 h-8 lg:w-12 lg:h-12 rounded-full flex items-center justify-center">
                  🎨
                </span>
                <p className="text-gray-100 text-lg">Graphic Designer</p>
              </div>
            </div>

          </div>
          <hr className='hidden md:block w-[1px] h-[28rem] text-indigo-600 mx-1 bg-indigo-600' />
          
          
          {/* Right Section */}
          <div className="md:w-2/3 w-full pr-3" data-aos="fade-left">
            <h2 className="text-[28px] font-light uppercase tracking-wider text-indigo-600 mb-4">
              Transforming Ideas into Engaging Digital Experiences
            </h2>

            <div className=' flex items-center'>
              <button
                onClick={() => handleSelection("Development")} className=' focus:bg-indigo-950 focus:p-1.5  focus:text-white w-fit text-2xl focus:text-[20px] font-semibold text-indigo-500 transition-all duration-500 hover:bg-[#0000007c] m-3 mr-6 ml-0 uppercase tracking-wider'>
                Development

                <hr className='  w-full h-[1px] text-indigo-600 bg-indigo-600' />

              </button>
              <button
                onClick={() => handleSelection("Design")} className=' focus:bg-indigo-950 focus:p-1.5  focus:text-white w-fit text-2xl focus:text-[20px] font-semibold text-indigo-500 transition-all duration-500 hover:bg-[#0000007c]  m-3 uppercase tracking-wider'>
                Design
                <hr className='  w-full h-[1px] text-indigo-600  bg-indigo-600' />

              </button>
            </div>

            {selectCat === "Development" ? (

              <div className=' text-gray-300 transition-all duration-300 '>
                <p className="text-lg text-justify">
                  I'm <span className="font-bold text-gray-150">Rimsha Arfeen</span>, a passionate and detail-oriented
                  <span className="font-bold text-gray-150"> MERN Stack Developer</span> dedicated to creating modern, responsive, and user-focused web applications. I work extensively with
                  <span className="font-bold text-gray-150">MongoDB, Express.js, React.js, and Node.js</span>. I focus on writing clean and reusable code, building scalable REST APIs, and creating dynamic user interfaces through React components.
                  <p>

                    I am currently expanding my knowledge in <span className="font-bold text-gray-150">Next.js</span> to build full-stack applications with server-side rendering and improved performance. Additionally, I have basic knowledge of
                    <span className="font-bold text-gray-150"> Redux</span>,
                    <span className="font-bold text-gray-150"> Python</span>, and
                    <span className="font-bold text-gray-150"> C language</span> for understanding core programming concepts.
                  </p>
                </p>
              </div>
            ) : (
              <div className=' text-gray-300 transition-all duration-300 '>
                <p className="text-lg text-justify">
                  Alongside development, I’m also a creative <span className="font-bold text-gray-150">Graphic Designer</span> with hands-on experience in
                  <span className="font-bold text-gray-150"> Adobe Illustrator</span> and
                  <span className="font-bold text-gray-150"> Canva</span>. I specialize in designing compelling
                  <span className="font-bold text-gray-150">logos, posters, digital artworks, and custom visuals</span>. I bring a strong design sense, ensuring that the end product is not only functional but also aesthetically impressive.
                </p>
              </div>

            )}


          
          </div>


        </div>
      </div>
    </section>
  );
};

export default About;
