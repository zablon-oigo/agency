import React from 'react'

function About() {
  return (
    <div className='min-h-[400px] bg-gray-100'>
      <div className="md:py-40 px-10 py-20 flex items-center md:flex-row flex-col justify-between">
        <div className="md:w-1/2 w-full">
          <img src="" alt="" className="" />
        </div>
        <div className="md:w-1/2 w-full">
          <h2 className="text-center md:text-start text-3xl mb-6 capitalize">
            lorem ipsum dolor
          </h2>
          <p className="text-base md:text-center text-start text-neutralDGray first-letter:capitalize ">
           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore qui sed, voluptatem amet in sint ratione labore reprehenderit earum? Consectetur corporis expedita a? Odio debitis, nemo adipisci quo culpa eum, neque ex aliquid, minus id blanditiis enim. Molestias, quibusdam accusamus.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About