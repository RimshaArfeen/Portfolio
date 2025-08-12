import React, { useState } from 'react';
import {portfolio} from "./Data.js"; // Assuming the data is correctly imported
import {Graphics} from "./Data.js"; // Assuming the data is correctly imported

import ProjectDetail from './ProjectDetail.jsx';

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("Web");

  const viewDetails = (item) => {
    setSelectedProject(item);
  };

  const handlePort = (category) => {
    setSelectedCategory(category);
  };

  return (
     <section className="bg-gradient-to-t from-indigo-950/90 to-indigo-950 min-h-screen py-24 bg-gray-900 text-gray-100 px-4 md:px-8">
      <div className="container mx-auto">
        {/* Category Selector Tabs */}
        <div className="flex justify-center mb-16">
          <div className="flex space-x-6 p-2 bg-gray-800 rounded-full shadow-lg">
            <button
              onClick={() => handlePort("Web")}
              className={`px-6 py-2 rounded-full font-semibold uppercase tracking-wider transition-all duration-300 ${
                selectedCategory === "Web"
                  ? "bg-indigo-600 text-white shadow-xl"
                  : "text-gray-400 hover:text-white"
              }`}
              aria-pressed={selectedCategory === "Web"}
            >
              Web Development
            </button>
            <button
              onClick={() => handlePort("Graphic")}
              className={`px-6 py-2 rounded-full font-semibold uppercase tracking-wider transition-all duration-300 ${
                selectedCategory === "Graphic"
                  ? "bg-indigo-600 text-white shadow-xl"
                  : "text-gray-400 hover:text-white"
              }`}
              aria-pressed={selectedCategory === "Graphic"}
            >
              Graphic Design
            </button>
          </div>
        </div>

        {/* Dynamic content based on selected category */}
        {selectedCategory === "Web" ? (
          <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-500 ${selectedProject ? "blur-sm pointer-events-none" : ""}`}>
            {portfolio.map((item) => (
              <div key={item.id} className="relative group overflow-hidden rounded-xl shadow-2xl">
                <img
                  alt={item.title}
                  className="w-full h-72 object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  src={item.imgUrl}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center z-10 transition-all duration-500">
                  <h2 className="title-font text-2xl font-bold mb-2 text-white transform translate-y-8 group-hover:translate-y-0 transition-all duration-500">
                    {item.title}
                  </h2>
                  <button
                    onClick={() => viewDetails(item)}
                    className="mt-4 px-6 py-2 bg-indigo-600 text-white rounded-full font-semibold opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100 transition-all duration-500"
                    aria-label={`View details for ${item.title}`}
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Graphics.map((item) => (
              <div key={item.id} className="relative overflow-hidden rounded-xl shadow-2xl transition-transform duration-300 hover:scale-105 group">
                <img
                  alt={item.title}
                  className="w-full h-auto object-cover object-center"
                  src={item.imgUrl}
                />
                <div className="absolute bottom-0 left-0 right-0 py-4 px-6 bg-black bg-opacity-70 group-hover:bg-opacity-80 transition-all duration-300">
                  <h2 className="title-font text-lg font-semibold uppercase tracking-wider text-indigo-400 text-center">
                    {item.title}
                  </h2>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Project Detail Modal */}
        {selectedProject && (
          <ProjectDetail
            img={selectedProject.imgUrl}
            img2={selectedProject.img2}
            title={selectedProject.title}
            description={selectedProject.description}
            link={selectedProject.link}
            close={() => setSelectedProject(null)}
          />
        )}
      </div>
    </section>
  );
};

export default Portfolio;
