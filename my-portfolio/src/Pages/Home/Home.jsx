
import React from 'react'
import "./Home.css"
import SpaceBg from "./SpaceBg.mp4"
const Home = () => {
     return (
          <section className=" text-gray-100 body-font relative w-full top-0 h-screen">
               {/* Background Video */}
               <video autoPlay loop muted playsInline className="videoBg absolute w-full object-cover z-0 h-[100vh] md:h-full">
                    <source src={SpaceBg} type="video/mp4" />
               </video>
               <div className="relative mx-auto flex px-5 md:px-14 py-52 md:flex-row flex-col items-center">
                    <div className="md:w-full lg:w-[90%] xl:w-3/4 lg:pr-24 md:pr-10 flex flex-col items-center md:items-start md:text-left mb-5 md:mb-0">
                         <h1 className="title-font text-2xl md:text-4xl sm:items-center md:items-start uppercase mb-4 flex flex-col font-normal text-gray-200">
                              Hello, I'm
                              <span className="mt-2 text-[#d94400] text-[2rem] md:text-[3.5rem] tracking-wide font-semibold md:font-bold">Rimsha Arfeen,</span>
                              <h5 className="mt-2 flex flex-col items-center md:items-start">a Passionate <span className="mt-2 text-[#d94400] text-[2rem] md:text-[3.5rem] tracking-wide font-semibold md:font-bold ml-1">Web Developer</span></h5>
                         </h1>
                         <hr className="w-100 md:w-[95%] lg:w-4/5 bg-[#d94400] text-[#d94400] mb-3 rounded" />
                         <p className="mb-3 text-center md:text-left text-[1.2rem] md:text-[1.5rem] lg:text-3xl leading-relaxed text-gray-300 font-light tracking-widest">
                              LET'S BUILD SOMETHING TOGETHER
                         </p>
                         <div className="flex flex-row w-[90%] mt-10 md:mt-1 md:w-[100%] lg:w-2/3 justify-between md:justify-start items-end">
                              <button className="inline-flex tracking-wide text-gray-200 hover:text-gray-400 bg-[#a2a2a30a] border border-[#5d5d5e] py-2 px-6 focus:outline-none hover:bg-[#000] rounded-lg text-lg uppercase md:mr-7">
                                   View My Work
                              </button>
                              <button className="inline-flex tracking-wide text-gray-200 hover:text-gray-400 bg-[#a2a2a30a] border border-[#5d5d5e] py-2 px-6 focus:outline-none hover:bg-[#00000094] rounded-lg text-lg uppercase">
                                   Contact Me
                              </button>
                         </div>
                       
                    </div>
                    <div class=" md:w-[25%] w-1/2 mx-auto">
                              <span class=" flex flex-row md:flex-col sm:ml-auto sm:mt-0 mt-4 justify-around md:items-end h-[14rem]">
                                   <a href="#" class="text-[#d94400]" aria-label="LinkedIn">
                                        <svg fill="currentColor" class="w-8 h-8 text-[#d94400]" viewBox="0 0 24 24">
                                             <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                                             <circle cx="4" cy="4" r="2"></circle>
                                        </svg>
                                   </a>


                                   <a class="ml-3 text-[#d94400]">
                                        <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-8 h-8" viewBox="0 0 24 24">
                                             <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                        </svg>
                                   </a>
                                   <a class="ml-3 text-[#d94400]">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-8 h-8" viewBox="0 0 24 24">
                                             <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                             <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                                        </svg>
                                   </a>
                                   <a href="#" class="ml-3 text-[#d94400]" aria-label="GitHub">
                                        <svg fill="currentColor" class="w-8 h-8 text-[#d94400]" viewBox="0 0 24 24">
                                             <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.07 3.29 9.38 7.86 10.91.58.11.79-.25.79-.55v-2c-3.22.7-3.91-1.56-3.91-1.56-.52-1.3-1.26-1.64-1.26-1.64-1.03-.7.08-.69.08-.69 1.14.08 1.74 1.18 1.74 1.18 1.01 1.73 2.65 1.23 3.3.94.1-.73.4-1.23.73-1.51-2.57-.29-5.27-1.28-5.27-5.69 0-1.26.45-2.3 1.18-3.11-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.15 1.19a10.9 10.9 0 012.87-.39c.97 0 1.94.13 2.87.39 2.19-1.5 3.15-1.19 3.15-1.19.62 1.58.23 2.75.11 3.04.73.81 1.18 1.85 1.18 3.11 0 4.42-2.71 5.39-5.3 5.68.41.35.77 1.02.77 2.06v3.06c0 .31.21.67.8.55A11.52 11.52 0 0023.5 12c0-6.35-5.15-11.5-11.5-11.5z"></path>
                                        </svg>
                                   </a>
                              </span>
                         </div>
               </div>
               {/* <div class="md:w-5/6 lg:w-3/4  bg-[#010101] mx-auto flex flex-col text-center w-full mb-12 my-10 border-4 border-[#d94400] p-5">
              <h1 class="text-[2.2rem] md:text-[2.5rem] text-blue-800 title-font font-light mb-1">Welcome to<p class=' uppercase font-bold'>Smart City Lab,<span class='font-bold text-teal-600  '> NCAI</span></p> </h1>
              <p class="text-sm md:text-lg leading-relaxed">The centre is designed to become a leading hub of innovation,
                scientific research, knowledge transfer of the local economy, and training in the area of
                Artificial Intelligence(AI) and its closely associated fields.</p>
            </div> */}
          </section>


     )
}

export default Home
