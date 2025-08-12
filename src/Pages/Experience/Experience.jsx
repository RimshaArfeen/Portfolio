

import React from 'react'; 
import { FaExternalLinkAlt } from 'react-icons/fa'; // Importing a modern icon

const Experience = () => {
  const experiences = [
    {
      company: 'National Center of Artificial Intelligence',
      division: 'Smart City Lab',
      title: 'Web Developer',
      type: '(Intern)',
      duration: 'July 2024 - Oct 2024',
      responsibilities: [
        'Developed and maintained responsive web applications using React and Tailwind CSS.',
        'Optimized UI components for performance and accessibility.',
        'Collaborated with backend developers to integrate APIs and improve user experience.',
      ],
      link: '#', // Replace with a real link
    }
  ];

  return (
    <section id="experience" className=" text-gray-100 py-16 md:py-24 bg-gradient-to-t from-indigo-950/90 to-indigo-950">
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="font-bold uppercase text-3xl md:text-4xl text-gray-100 tracking-wider mb-8 pb-2 border-b-4 border-indigo-700 w-fit" data-aos="fade-up">
          Experience
        </h2>

        {experiences.map((exp, index) => (
          <div key={index} className="flex flex-col md:flex-row gap-8 mb-12 last:mb-0" data-aos="fade-up">
            {/* Left Column: Dates and Company Info */}
            <div className="md:w-1/3 pr-0 md:pr-8 flex flex-col items-start" data-aos="fade-right">
              <p className="font-medium text-lg text-indigo-400 mb-2">{exp.duration}</p>
              <h3 className="font-semibold text-2xl md:text-3xl text-gray-100">{exp.company}</h3>
              <p className="text-lg text-gray-300">{exp.division}</p>
            </div>

            {/* Right Column: Title and Responsibilities */}
            <div className="md:w-2/3 md:pl-8 pt-4 md:pt-0 border-t-2 md:border-t-0 md:border-l-2 border-indigo-600" data-aos="fade-left">
              <h4 className="font-bold text-xl md:text-2xl text-gray-100 uppercase mb-2">
                {exp.title}
                <span className="text-base text-gray-400 font-normal ml-2">{exp.type}</span>
              </h4>
              <ul className="list-disc list-outside ml-5 space-y-2 text-lg text-gray-300">
                {exp.responsibilities.map((responsibility, i) => (
                  <li key={i}>{responsibility}</li>
                ))}
              </ul>
              {exp.link && (
                <a
                  href={exp.link}
                  className="inline-flex items-center text-indigo-400 hover:text-indigo-300 transition-colors mt-4 text-base"
                  aria-label={`Learn more about my ${exp.title} experience at ${exp.company}`}
                >
                  Learn More
                  <FaExternalLinkAlt className="ml-2 w-3 h-3" />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;