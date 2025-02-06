import React, { useState } from 'react';
import portfolio from "./Data.js"; // Assuming the data is correctly imported
import ProjectDetail from './ProjectDetail.jsx';

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const viewDetails = (item) => {
    setSelectedProject(item);
  };
  const close =() => {
    navigate("/")
   }

  return (
    <section className="body-font mx-auto flex flex-wrap px-5 xl:w-[90%] py-24 text-gray-100 relative top-[155vh]  md:top-[140vh] lg:top-0 h-fit  bg-[#010101] z-10">
      <div className=' w-full flex justify-center items-center ml-2'>
       <h1 className="font-bold uppercase title-font text-4xl text-gray-100 tracking-wider border-b-2 border-indigo-700 w-fit text-center mb-14"
        data-aos="fade-up">
          portfolio
        </h1>

      </div>

      <div 
      className={`${selectedProject ? "blur-2xl mx-auto  flex flex-wrap w-full" :"mx-auto  flex flex-wrap w-full"}`}
      data-aos="zoom-in">
        {portfolio.map((item, index) => (
          <div key={index} className="mx-auto md:mx-0 mb-5 w-[80%] px-2 md:w-1/2 lg:w-1/3 ">
            <div className="relative border-2 border-indigo-600
            transition duration-300 hover:scale-90 flex w-full flex-wrap px-6 py-16 sm:px-10 sm:py-24">
              <img
                alt="gallery"
                className="absolute inset-0 block h-full w-full object-cover object-center opacity-55"
                src={item.imgUrl}
              />
              <div className="relative z-10 w-full text-center">
                <h2 className="title-font mb-2 text-xl font-medium text-gray-100">{item.title}</h2>
                {/* <p className="leading-relaxed">{item.description}</p> */}
                <button
                  onClick={() => viewDetails(item)}
                  className="mt-4 bg-indigo-800 text-white py-2 px-4 rounded hover:bg-indigo-700 hover:cursor-pointer">
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedProject && (
        <ProjectDetail
          img={selectedProject.imgUrl}
          img2={selectedProject.img2}
          title={selectedProject.title}
          description={selectedProject.description}
          link={selectedProject.link}
          close = {() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};

export default Portfolio;
