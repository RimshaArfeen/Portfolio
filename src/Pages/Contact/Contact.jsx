import React from 'react'

const Contact = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center py-12 sm:py-16 px-4">
      {/* Background Map */}
      <div className="absolute inset-0 bg-gray-300 z-0">
        <iframe
          width="100%"
          height="100%"
          style={{ filter: "grayscale(1) saturate(0.8) contrast(1.2)" }}
          loading="lazy"
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Karachi,%20Pakistan&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        ></iframe>
      </div>

      {/* Contact Card */}
      <div className="relative z-10 w-full sm:w-11/12 md:w-3/4 lg:w-1/2 p-4 sm:p-6 md:p-10 rounded-lg shadow-2xl bg-white bg-opacity-10 backdrop-filter backdrop-blur-xl border border-white border-opacity-30">
        <div className="flex flex-col items-start text-black">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">Let's Connect!</h2>

          {/* Contact Info */}
          <div className="flex flex-col space-y-5 w-full">
            {/* Address */}
            <div className="flex items-start sm:items-center space-x-4">
              <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-xl sm:text-2xl md:text-3xl bg-white bg-opacity-20 rounded-full">
                📍
              </span>
              <p className="text-sm sm:text-base md:text-lg font-light">
                Hunaid City D6 - 408 Gulistan-e-Johar block 17, Karachi, Pakistan
              </p>
            </div>

            {/* Email */}
            <div className="flex items-center space-x-4">
              <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-xl sm:text-2xl md:text-3xl bg-white bg-opacity-20 rounded-full">
                📧
              </span>
              <a href="mailto:rimshaarfeen61@gmail.com" className="text-sm sm:text-base md:text-lg font-light hover:underline transition-all duration-300 break-words">
                rimshaarfeen61@gmail.com
              </a>
            </div>

            {/* Phone */}
            <div className="flex items-center space-x-4">
              <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-xl sm:text-2xl md:text-3xl bg-white bg-opacity-20 rounded-full">
                📞
              </span>
              <a href="tel:+923404604887" className="text-sm sm:text-base md:text-lg font-light hover:underline transition-all duration-300">
                +92 371-0253935
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
