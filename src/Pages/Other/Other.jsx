import React from 'react';
import { Data } from "./Data.js"; // Assuming the data is correctly imported

const Portfolio = () => {
  return (
     <section className="body-font mx-auto flex flex-col px-5 xl:w-[90%] py-24 text-gray-100 relative  lg:top-0 h-fit bg-[#010101] z-10">
      
      {/* Section Header
      <div className="w-full flex justify-center items-center mb-12">
        <h1
          className="font-bold uppercase title-font text-4xl text-gray-100 tracking-wider border-b-4 border-indigo-700 px-6 py-2"
          data-aos="fade-up"
        >
          Other Activities
        </h1>
      </div> */}

      {/* Portfolio Items */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full mx-auto " data-aos="zoom-in">
        {Data.map((item, index) => (
          <div className=' flex flex-col justify-center items-center'>
          <div
            key={index}
            className="relative border-2 border-indigo-600 overflow-hidden rounded shadow-lg transition-transform duration-300 hover:scale-105"
          >
            <img
              alt={item.title}
              className="h-auto w-full object-cover object-center"
              src={item.imgUrl}
            />
            
          </div>
          <div className=" bg-opacity-50 flex items-center justify-center">
          <h2 className="title-font text-xl  mt-1  uppercase w-fit font-normal tracking-wider  text-indigo-600 text-center px-4">
            {item.title}
          </h2>
        </div>
          </div >
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
