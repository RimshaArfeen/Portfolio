

import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProjectDetail = ({ img, img2, title, description, link, close }) => {
  return (
    // Modal overlay with frosted glass effect
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-sm z-50 p-4">
      {/* Modal content container */}
      <div className="relative w-full max-w-4xl p-6 md:p-8 bg-white bg-opacity-10 backdrop-filter backdrop-blur-xl border border-white border-opacity-20 rounded-2xl shadow-2xl overflow-y-auto max-h-[90vh]">
        
        {/* Close button */}
        <button
          onClick={close}
          className="absolute top-4 right-4 text-white text-3xl font-bold bg-red-600 rounded-full w-10 h-10 flex items-center justify-center hover:bg-red-700 transition-colors duration-300 z-20"
          aria-label="Close Project Details"
        >
          &times;
        </button>

        {/* Project image */}
        <img
          className="w-full h-auto mb-6 rounded-xl object-cover border-4 border-indigo-600 shadow-lg"
          src={img2 || img}
          alt={`Main view of the ${title} project`}
        />

        {/* Project details */}
        <div className="text-white">
          <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-wide mb-4 border-b-2 border-indigo-400 pb-2">
            {title}
          </h2>
          <p className="whitespace-pre-line text-lg leading-relaxed mb-6 text-gray-200">{description}</p>
          <div className="flex justify-start items-center">
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="uppercase text-sm px-6 py-3 rounded-full bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition-all duration-300"
            >
              View Live
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
