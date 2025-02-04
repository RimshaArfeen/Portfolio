import React from 'react'
import NCAI from "./NCAI.png"
const Experience = () => {
     return (
          <section class="text-gray-100 pb-24 body-font relative h-fit  bg-[#010101]">
               <div class="px-5 mx-auto flex flex-col lg:px-8 ">
               <h1 class="font-bold uppercase title-font text-3xl text-gray-100 tracking-wider border-b-[2px] border-indigo-700 w-fit">Experience</h1>
                    <div class="lg:w-full mx-auto">
                         <div class="flex flex-col sm:flex-row mt-10">
                              <div class="sm:w-1/3 text-left sm:pr-8 sm:py-">
                          {/* <div class="w-3/4 -mt-5 ml-0 h-auto inline-flex items-start justify-center  text-gray-100">
                             
                          </div> */}
                              <div class="flex flex-col items-start text-left justify-start ml-5">
                                   <h2 class="font-medium title-font mt-2 text-gray-100 text-xl -mb-1 uppercase">Smart City Lab</h2>
                                   {/* <!-- <h2 class="font-normal tracking-wide title-font mt-4 text-gray-100 text-xs">National Center of Artificial Intelligence</h2> --> */}
                                   <div class="w-12 h-1 bg-indigo-500 rounded my-3"></div>
                                   <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                                        <span class="font-semibold title-font text-gray-100 uppercase">Frontend Developer <span class="text-[16px] font-normal text-gray-100 title-font mb-2">(Intern)</span></span>
                                        <span class="mt-1 text-gray-100 text-sm">July 2024 - Oct 2024</span>
                                   </div>
                              </div>
                         </div>
                         <div class="sm:w-2/3 sm:pl-8 sm:py- sm:border-l border-indigo-900 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left pr-3 lg:pr-8">
                              <h2 class="text-2xl font-medium text-gray-100 title-font mb-2">Frontend Developer - Tech Innovators Inc.</h2>
                              <div class="w-48 h-1 bg-indigo-500 rounded my-3"></div>

                              <p class="leading-relaxed text-lg space-y-2">
                                   - Developed and maintained responsive web applications using React and Tailwind CSS.<br />
                                   - Optimized UI components for performance and accessibility.<br />
                                   - Collaborated with backend developers to integrate APIs and improve user experience.
                              </p>
                              <a href="#" class="text-indigo-500 inline-flex items-center">Learn More
                                   <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                   </svg>
                              </a>
                         </div>
                    </div>
               </div>
          </div>
      </section >
      

     )
}

export default Experience
