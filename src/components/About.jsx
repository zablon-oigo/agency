import React from 'react'
import about from '../assets/image/about.png'
function About() {
  return (
    <div className='bg-gray-50'>
      <div className=" px-10 py-10 flex items-center md:flex-row flex-col justify-between">
        <div className="md:w-1/2 w-full">
          <img src={about} alt="" className="" />
        </div>
        <div className="md:w-1/2 w-full">
          <h2 className="font-semibold text-center md:text-start first-letter:capitalize text-3xl mb-6 capitalize">
           the unseen of spending three years at Pixelgrade
          </h2>
          <p className="text-base text-center md:text-start text-neutralDGray first-letter:capitalize ">
           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore qui sed, voluptatem amet in sint ratione labore reprehenderit earum? Consectetur corporis expedita a? Odio debitis, nemo adipisci quo culpa eum, neque ex aliquid, minus id blanditiis enim. Molestias, quibusdam accusamus.
          </p>
          <div className="flex justify-center md:justify-start">
            <button className="px-6 py-3 text-white mt-6 rounded capitalize bg-brandPrimary hover:bg-neutralDGray hover:text-white hover:-translate-y-2 duration-300 transition-transform">
              learn more
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About