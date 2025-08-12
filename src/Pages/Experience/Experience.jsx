
import React from 'react';

const Experience = () => {
  return (
     <section className="text-gray-100 pb-24 body-font relative top-[155vh]  md:top-[140vh] lg:top-0  bg-[#010101] h-fit">
      <div className="px-5 mx-auto flex flex-col lg:px-8">
        <h1 className="font-bold uppercase title-font text-3xl text-gray-100 tracking-wider border-b-2 border-indigo-700 w-fit"
        data-aos="fade-up">
          Experience
        </h1>
        <div className="lg:w-full mx-auto">
          <div className="flex flex-col sm:flex-row mt-8">
            <div className="sm:w-[35%] text-left sm:pr-8 flex flex-col justify-start items-start"
            data-aos="fade-right">
              <h2 className="font-normal uppercase tracking-wider title-font mt-4 text-indigo-600 text-xl">
                National Center of Artificial Intelligence
              </h2>
              <div className="flex flex-col items-start text-left justify-start ml-0">
                <h2 className="font-medium title-font mt-2 text-gray-100 text-xl -mb-1 uppercase">
                  Smart City Lab
                </h2>
                <div className="w-12 h-1 bg-indigo-500 rounded my-3"></div>
                <div className="md:w-64 flex-shrink-0 flex flex-col">
                  <span className="font-semibold title-font text-gray-100 uppercase">
                    Web Developer <span className="text-[16px] font-normal text-gray-100 title-font mb-2">(Intern)</span>
                  </span>
                  <span className="mt-1 text-gray-100 text-base">July 2024 - Oct 2024</span>
                </div>
              </div>
            </div>

            <div className="sm:w-[74%] sm:pl-8 sm:border-l border-indigo-600 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-left pr-3 lg:pr-8"
            data-aos="fade-left">
              <h2 className="text-2xl font-medium text-gray-100 title-font mb-2 uppercase">
                Web Developer 
              </h2>
              <div className="w-48 h-1 bg-indigo-500 rounded my-3"></div>

              <p className="leading-relaxed text-lg space-y-2">
                <li> Developed and maintained responsive web applications using React and Tailwind CSS.</li>
                <li>Optimized UI components for performance and accessibility.</li>
                <li> Collaborated with backend developers to integrate APIs and improve user experience.</li>
              </p>
              <a href="#" className="text-indigo-500 inline-flex items-center mt-2">
                Learn More
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
