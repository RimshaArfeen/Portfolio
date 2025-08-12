import React from 'react'

const Footer = () => {
  return (
    <footer className="text-indigo-600 body-font relative h-fit top-[180vh] lg:top-0 w-full bottom-0">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap md:text-left text-xl text-center order-first">
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-100 tracking-widest text-sm mb-3">CONTACT INFO</h2>
            <nav className="list-none mb-10">
              <li>
                <a href="mailto:youremail@example.com" className=" hover:text-gray-100">Email: rimshaarfeen61@gmail.com</a>
              </li>
              <li>
                <a href="tel:+1234567890" className=" hover:text-gray-100">Phone: 0340-4604887</a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/in/rimsha-arfeen-b25709305/" className=" hover:text-gray-100">LinkedIn: Rimsha Arfeen</a>
              </li>
            </nav>
          </div>
          
        </div>
      </div>
      <div className="bg-gray-800">
        <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-100">
            <span className="ml-3 text-xl">MERN STACK DEVELOPER</span>
          </a>
          <p className="text-sm text-gray-100 sm:ml-6 sm:mt-0 mt-4">© 2025 RA Creative —
            <a href="https://twitter.com/yourhandle" rel="noopener noreferrer" className=" ml-1" target="_blank"></a>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <a href="https://www.linkedin.com/in/your-profile" className="text-gray-100">
              <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a href="https://twitter.com/yourhandle" className="ml-3 text-gray-100">
              <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
          </span>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
