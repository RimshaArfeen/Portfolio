

import React from "react";
import "../../index.css"

import { progressData, services, techStack } from "./Data";

import { NavLink } from "react-router-dom";

// Make separate mapping section for each services and progress and then use in the section

import Resume from "../../assets/Resume.pdf"



const ProgressBar = ({ name, width }) => (

  <div className="flex flex-col w-[85%] mb-5">

    <div className="w-full flex justify-between">

      <span className="mb-1 uppercase leading-relaxed text-[16px] tracking-wide">{name}</span>

      <span className="mb-1 uppercase leading-relaxed text-lg tracking-wide">{width}</span>

    </div>

    <div className="h-[6px] border border-[#dce1fc6b] rounded-lg overflow-hidden">

      <div style={{ width }} className="h-full bg-indigo-700 rounded-lg"></div>

    </div>

  </div>

);



const ServiceItem = ({ icon, title, description }) => (

  <div className="w-full lg:pr-10 mb-3 px-3 md:px-0">

    <div className="flex relative pb-6">

      <div className="h-full w-8 md:w-12 absolute inset-0 flex items-center justify-center">

        <div className="h-full w-1 mx-auto bg-gray-200 "></div>

      </div>

      <div className="flex-shrink-0 w-8 md:w-12 h-8 md:h-12 rounded-full inline-flex items-center justify-center text-white relative z-10">

         <span className="bg-black  border-2 border-indigo-600 w-8 h-8 lg:w-12 lg:h-12 rounded-full flex items-center justify-center p-3 md:p-5 mt-0">

                  {icon}

                </span>

      </div>

      <div className="flex-grow pl-4">

        <h2 className="font-medium title-font text-lg text-gray-100 mb-1 border-b-[0.5px] w-fit uppercase tracking-wider border-indigo-700">

          {title}

        </h2>

        <p className="leading-relaxed text-base text-justify">{description}</p>

      </div>

    </div>

  </div>

);



const Skills = () => {

  return (

      <section className=" section-container text-gray-100 py-24 body-font relative h-fit  bg-gradient-to-t from-gray-950/50 to-gray-950 lg:px-8 px-5">

      <div className="container mx-auto flex items-start flex-wrap lg:flex-nowrap h-screen py-14">

       

        {/* Skills Section */}

        <div className="w-full md:w-3/4 mx-auto mb-8 lg:mb-0 flex flex-col items-center lg:items-start lg:w-[30%] lg:ml-2 lg:mx-0"

         data-aos="fade-right">

          <h1 className="text-3xl font-medium uppercase mb-5 title-font text-white border-b-2 border-indigo-600">

            My Skills

          </h1>

          {progressData.map((item, index) => (

            <ProgressBar key={index} name={item.name} width={item.width} />

          ))}

        </div>



        {/* Services Section */}

        <div className="w-full lg:w-[40%] flex flex-col items-start justify-start md:w-3/4 mx-auto mb-8 lg:mb-0 lg:mx-0 "

         data-aos="fade-up">

          <h1 className="font-bold uppercase title-font text-2xl mb-6 text-gray-100 tracking-wider border-b-2 border-indigo-700">

            What I Can Do

          </h1>

          {services.map((item, index) => <ServiceItem key={index} {...item} />)}

        </div>



        {/* Tech Stack Section */}

        <div className="w-full lg:w-[30%] py- md:w-3/4 mx-auto lg:mx-0 mb-8 lg:mb-0"

         data-aos="fade-left">



<h1 className="text-2xl font-medium title-font mb-7 text-gray-100 tracking-wider uppercase border-b-2 border-indigo-600 w-fit ">Tech Stack & Tools</h1>

<div className="h-full lg:w-full flex flex-wrap justify-center lg:justify-start text-center sm:text-left">

  {techStack.flatMap((item, index) =>

    <div key={index} className="md:w-[28%] w-[25%] py-3 flex justify-center mr-2 mb-2 rounded border-[1px] border-indigo-600">

      <a className="block relative rounded overflow-hidden">

        <img alt="ecommerce" className="object-cover object-center w-13 lg:w-14 h-13 lg:h-14 block" src={item} />

      </a>

    </div>



  )}

</div>



<div className="w-full  py-5 mx-auto flex flex-col items-center md:items-start

lg:pr-5">



  {/* <!-- Text --> */}

  <h2 className="text-xl font-light w-full text-center lg:text-left leading-relaxed mb-6 my-3 px-5 md:px-0 ">

    Get a copy of my resume to learn more about my skills and experience.

  </h2>



  {/* <!-- Buttons --> */}

  <div className="flex flex-col ml-8 md:ml-0 w-full items-center  ">

    <a href={Resume} download className="inline-flex items-start text-white border border-indigo-600 py-2 px-6 focus:outline-none hover:bg-[#1f1f1f79] rounded mb-4 capitalize transition duration-200 text-lg ">

      <i className="fas fa-download mr-2 text-xl "></i> Download My Resume

    </a>



    <NavLink to="/portfolio" className="inline-flex items-center text-white border border-indigo-600 py-2 px-6 focus:outline-none hover:bg-[#1f1f1f79] rounded capitalize transition duration-200 text-lg ">

      <i className="fas fa-folder-open mr-2 text-xl"></i> View My Portfolio

    </NavLink>

  </div>



</div>



</div>







      </div>

    </section>

  );

};



export default Skills;