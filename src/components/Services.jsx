import React from 'react'
import Card from '../assets/Layout/Card'
function Services() {
  return (
    <div className='md:px-14 px-4 py-16 max-w-screen-2xl min-h-[480px] mx-auto'>
        <div className="text-center my-8">
            <h1 className="text-4xl text-neutralDGray font-semibold mb-2">
                our clients
            </h1>
            <p className="text-neutralGray">
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, eius ut. Labore sunt iure dolor praesentium!
            </p>
        </div>
        <div className="my-20">
          <div className="flex justify-center items-center">
            <img src="" alt="" className="" />
            <img src="" alt="" className="" />
            <img src="" alt="" className="" />

          </div>
          <div className="my-10 text-center">
            <h2 className="first-letter:uppercase font-semibold text-3xl text-neutralDGray">
              manage your entire community in a single system
            </h2>
            <p className="first-letter:uppercase text-base text-neutralGray">
              we have been working with Fortune 500+ clients
            </p>
          </div>
          <div className="my-14">
            <Card/>
          </div>
        </div>
    </div>
  )
}

export default Services