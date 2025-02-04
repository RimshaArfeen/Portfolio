import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { progressData, services, techStack } from "./Data";
// import Services from "../../Services/Services";
const Skills = () => {
  const settings = {
    infinite: true,
    speed: 300,
    slidesToShow: 6, // Set to 6 for large screens
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1280, // Large screens
        settings: { slidesToShow: 6 },
      },
      {
        breakpoint: 1024, // Medium screens (tablets)
        settings: { slidesToShow: 5 },
      },
      {
        breakpoint: 768, // Small screens
        settings: { slidesToShow: 4 },
      },
      {
        breakpoint: 480, // Mobile screens
        settings: { slidesToShow: 2 },
      },
    ],
  };

  return (
    <>
     <section class="text-gray-100 body-font relative h-fit bg-[#010101] lg:px-8 px-5">
        <div class="container mx-auto flex sm:flex-nowrap items-start flex-wrap h-screen py-14">

          {/* SKILLS SECTION */}
          <div className="w-full mb-8 md:mb-0 flex flex-col items-center md:items-start  py- text-gray-100 -mt-1 relative top-0 lg:w-[30%] lg:ml-2">
            <h1 class=" text-3xl font-medium uppercase mb-5 title-font text-white border-b-2 border-indigo-600">My Skills</h1>
            {progressData.map((item, index) => (
              <div key={index} className="flex flex-col w-[85%] mb-7">
                <div className="w-full flex justify-between">
                  <span className="mb-1 uppercase leading-relaxed text-lg tracking-wide">{item.name}</span>
                  <span className="mb-1 uppercase leading-relaxed text-lg tracking-wide">{item.width}</span>
                </div>
                <div className="h-[6px] border border-[#dce1fc] rounded-lg overflow-hidden">
                  <div
                    style={{ width: item.width }}
                    className={`h-full bg-white rounded-lg`}></div>
                </div>
              </div>
            ))}
          </div>

          {/* SERVICES SECTION */}
          <div class="w-full lg:w-[40%] h-fit z-10 relative  overflow-hidden  flex flex-col items-start justify-start  mb-8 md:mb-0 ">
            <h1 class="font-bold uppercase title-font text-2xl mb-6  text-gray-100 tracking-wider border-b-[2px] border-indigo-700">What i can do</h1>
            <div className="flex flex-wrap w-full">
              {services.map((item, index) => (
                <div key={index} className="w-full md:pr-10 mb-3 px-3 md:px-0">
                  <div className="flex relative pb-6">
                    <div className="h-full w-8 md:w-10 absolute inset-0 flex items-center justify-center">
                      <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                    </div>
                    <div className="flex-shrink-0 w-8 md:w-12  h-8 md:h-12 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className=" w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d={item.iconPath}></path>
                      </svg>
                    </div>
                    <div className="flex-grow pl-4">
                      <h2 className="font-medium title-font text-lg text-gray-100 mb-1  border-b-[0.5px] w-fit uppercase tracking-wider border-indigo-700">
                        {item.title}
                      </h2>
                      <p className="leading-relaxed text-base text-justify">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* TOOLS SECTION */}
          <div class="w-full lg:w-[30%] py- mx-auto">

            <h1 class="text-2xl font-medium title-font mb-7 text-gray-100 tracking-wider uppercase border-b-2 border-indigo-600 w-fit ">Tech Stack & Tools</h1>
            <div className="h-full lg:w-full flex flex-wrap justify-center sm:justify-start text-center sm:text-left">
              {techStack.flatMap((item, index) =>
                <div key={index} className="lg:w-[28%] md:w-1/3 w-[25%] p-1 py-3 flex justify-center mr-2 mb-2 rounded border-[1px] border-indigo-600">
                  <a className="block relative rounded overflow-hidden">
                    <img alt="ecommerce" className="object-cover object-center w-11 h-11 block" src={item} />
                  </a>
                </div>

              )}
            </div>

            <div class="w-full  py-5 mx-auto flex flex-col items-center md:items-start
            lg:pr-5">

              {/* <!-- Text --> */}
              <h2 class="text-xl font-light w-full text-center md:text-left leading-relaxed mb-6 my-3 px-5 md:px-0 ">
                Get a copy of my resume to learn more about my skills and experience.
              </h2>

              {/* <!-- Buttons --> */}
              <div class="flex flex-col ml-8 md:ml-0 w-full items-center  ">
                <a href="/assets/resume.pdf" download class="inline-flex items-start text-white bg-indigo-600 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-700 rounded mb-4 capitalize transition duration-200 text-lg">
                  <i class="fas fa-download mr-2 text-xl "></i> Download My Resume
                </a>

                <a href="/portfolio.html" class="inline-flex items-center text-white bg-indigo-600 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-700 rounded capitalize transition duration-200 text-lg">
                  <i class="fas fa-folder-open mr-2 text-xl"></i> View My Portfolio
                </a>
              </div>

            </div>

          </div>


        </div>
      </section >

    </>
  )
    ;
};

export default Skills;
