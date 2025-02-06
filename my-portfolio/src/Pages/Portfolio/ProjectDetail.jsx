import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProjectDetail = ({ img, img2, title, description, link, close }) => {
  let navigate = useNavigate();

  return (
    <section className="body-font text-gray-700 fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="relative mx-auto px-6 w-full md:w-[85%] lg:w-3/4 h-fit bg-white rounded-lg shadow-lg overflow-hidden">
        
        {/* Background Image */}
        <img 
          src={img} 
          className="absolute inset-0 w-full h-full object-cover opacity-60 z-0" 
          alt="Background"
        />
        
        {/* Content */}
        <div className="relative z-10 p-6">
          <img
            className="mb-6 w-[85%] h-auto mx-auto rounded-lg object-cover object-center border border-indigo-600"
            src={img2 ? img2 : img}
            alt="content"
          />
          <h2 className="mb-4 border-b-2 border-[#003687] w-fit text-xl font-bold text-gray-900 uppercase tracking-wide">
            {title}
          </h2>
          <p className="text-base leading-relaxed text-gray-950">{description}</p>
          <div className="flex justify-between items-center mt-6">
            <a 
              href={link} 
              className="uppercase text-sm px-6 py-2 rounded-lg bg-transparent border-2 border-[#003687] text-[#003687] hover:bg-[#003687] hover:text-white transition-all duration-300"
            >
              Learn More
            </a>
            <button
              onClick={close}
              className="uppercase text-sm px-6 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700 transition-all duration-300"
            >
              Close
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ProjectDetail;
