import React from 'react'
import Card from '../assets/Layout/Card'
import img1 from '../assets/image/services/img1.png'
import img2 from '../assets/image/services/img2.png'
import img3 from '../assets/image/services/img3.png'
import img4 from '../assets/image/services/img4.png'
import img5 from '../assets/image/services/img5.png'
import img6 from '../assets/image/services/img6.png'
function Services() {
  return (
    <div className='md:px-14 px-4 py-16 max-w-screen-2xl min-h-[480px] mx-auto'>
        <div className="my-8 text-center">
            <h1 className="mb-2 text-4xl font-semibold capitalize text-neutralDGray">
                our clients
            </h1>
            <p className="text-neutralGray">
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, eius ut. Labore sunt iure dolor praesentium!
            </p>
        </div>
        <div className="my-10">
          <div className="flex items-center justify-between gap-3 ">
            <div className="-mb-6">
            <img src={img1} alt="" className="w-12 h-12 transition-all duration-300 hover:scale-125" />
            </div>
            <div className="">
            <img src={img2} alt="" className="w-12 h-12 transition-all duration-300 hover:scale-125" />
            </div>
            <div className="">
            <img src={img3} alt="" className="w-12 h-12 transition-all duration-300 hover:scale-125" />
            </div>
            <div className="">
            <img src={img4} alt="" className="w-12 h-12 transition-all duration-300 hover:scale-125" />
            </div>
            <div className="">
            <img src={img5} alt="" className="w-12 h-12 transition-all duration-300 hover:scale-125" />
            </div>
            <div className="">
            <img src={img6} alt="" className="w-12 h-12 transition-all duration-300 hover:scale-125" />
            </div>
          </div>
          <div className="my-10 text-center">
            <h2 className="text-3xl font-semibold first-letter:uppercase text-neutralDGray">
              manage your entire community in a single system
            </h2>
            <p className="text-base first-letter:uppercase text-neutralGray">
              we have been working with Fortune 500+ clients
            </p>
          </div>
          <div className="mt-10 md:mt-20">
            <Card/>
          </div>
        </div>
    </div>
  )
}

export default Services