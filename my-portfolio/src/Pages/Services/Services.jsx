import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import { services } from "./Data.js"
const Services = () => {
  return (
     <section>
     <h1 class="font-bold uppercase title-font text-2xl mb-6  text-gray-100 tracking-wider border-b-[2px] border-indigo-700">What i can do</h1>
                 <div className="flex flex-wrap w-full">
                   {services.map((item, index) => (
                     <div key={index} className="w-full md:pr-10 mb-3">
                       <div className="flex relative pb-6">
                         <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                           <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                         </div>
                         <div className="flex-shrink-0 w-12  h-12 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                           <svg
                             fill="none"
                             stroke="currentColor"
                             strokeLinecap="round"
                             strokeLinejoin="round"
                             strokeWidth="2"
                             className="w-5 h-5"
                             viewBox="0 0 24 24"
                           >
                             <path d={item.iconPath}></path>
                           </svg>
                         </div>
                         <div className="flex-grow pl-4">
                           <h2 className="font-medium title-font text-lg text-gray-100 mb-1 tracking-wider">
                             {item.title}
                           </h2>
                           <p className="leading-relaxed text-base text-justify">{item.description}</p>
                         </div>
                       </div>
                     </div>
                   ))}
                 </div>
   </section>
   
  )
}

export default Services
