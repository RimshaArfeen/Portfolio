
import React from 'react'

const Contact = () => {
  return (
    <section className="text-gray-100 body-font relative top-24">
      <div className="absolute inset-0 bg-gray-300">
        <iframe
          width="100%" height="100%" frameborder="0" marginheight="0" marginwidth="0" title="map" scrolling="no" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23669.765432155843!2d67.1163632!3d24.9094499!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb338e02cf4dc85%3A0x8eb0b6c37d200f42!2sHunaid%20City!5e0!3m2!1sen!2sin!4v1678896363567!5m2!1sen!2sin" style={{ filter: "contrast(1.2)", opacity: 0.8 }}></iframe>

      </div>
      <div className="container px-5 py-24 mx-auto flex flex-col md:flex-row  justify-end items-end h-full">
        <div className="lg:w-2/3 md:mr-8 md:w-1/2 rounded-lg overflow-hidden text-lg p-10 flex flex-col items-start justify-start relative bg-black ">

          <div className="flex items-start space-x-4 mb-3">
            <span className="bg-gray-900 w-8 h-8 lg:w-12 lg:h-12 rounded-full flex items-center justify-center">
              📍
            </span>
            <p className="text-lg">Hunaid city D6 - 408 Gulistan-e-Johar block 17,Karachi, Pakistan</p>

          </div>
          <div className="flex items-center space-x-4 mb-3">
            <span className="bg-gray-900  w-8 h-8 lg:w-12 lg:h-12 rounded-full flex items-center justify-center">
              📧
            </span>
            <p className="text-lg">rimshaarfeen61@gmail.com</p>
          </div>

          <div className="flex items-center space-x-4 mb-3">
            <span className="bg-gray-900  w-8 h-8 lg:w-12 lg:h-12 rounded-full flex items-center justify-center">
              📞
            </span>
            <p className="text-lg">0340-4604887</p>
          </div>




        </div>
      </div>
    </section>
  )
}

export default Contact
