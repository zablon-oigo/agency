import React from 'react'
import { Carousel } from 'flowbite-react';
import head1 from '../assets/image/head1.png'
function Header() {
  return (
    <div className='bg-neutralSilver'>
        <div className="px-4 md:px-14 max-w-screen-2xl mx-auto min-h-screen h-screen">
        
      <Carousel className='w-full mx-auto'>
        <div className="  flex flex-col md:flex-row-reverse justify-between items-center gap-12">
          <div className="">
          <img src={head1} alt="" className="" />
          </div>
          <div className="md:w-1/2">
            <h1 className="md:text-5xl text-3xl font-semibold mb-4 text-neutralDGray md:text-start text-center  leading-snug">
            lessons and insight  <span className="text-brandPrimary">
            from 8 years
            </span>
            </h1>
            <p className="text-neutralDGray md:text-base text-md mb-8 text-center md:text-start ">
              where to grow your business as a photographer:site or social media ?
            </p>
            <div className="flex items-center justify-center md:justify-start">
            <button className="px-7 py-2 bg-brandPrimary text-white rounded hover:bg-neutralDGray transition-all duration-300 hover:-translate-y-4 ">
                Register
              </button>
            </div>

          </div>
        </div>
        <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse justify-between items-center gap-12">
          <div className="">
          <img src="" alt="" className="" />
          </div>
          <div className="md:w-1/2">
            <h1 className="text-5xl font-semibold mb-4 text-neutralDGray  leading-snug">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita atque recusandae <span className="text-brandPrimary">
            officiis dolores. Architecto
            </span>
            </h1>
            <p className="text-neutralDGray text-base mb-8 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita atque recusandae officiis dolores. Architecto, inventore at?
            </p>
              <button className="px-7 py-2 bg-brandPrimary text-white rounded hover:bg-neutralDGray transition-all duration-300 hover:-translate-y-4">
                Register
              </button>
          </div>
        </div>
        <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse justify-between items-center gap-12">
          <div className="">
          <img src="" alt="" className="" />
          </div>
          <div className="md:w-1/2">
            <h1 className="text-5xl font-semibold mb-4 text-neutralDGray  leading-snug">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita atque recusandae <span className="text-brandPrimary">
            officiis dolores. Architecto
            </span>
            </h1>
            <p className="text-neutralDGray text-base mb-8 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita atque recusandae officiis dolores. Architecto, inventore at?
            </p>
              <button className="px-7 py-2 bg-brandPrimary text-white rounded hover:bg-neutralDGray transition-all duration-300 hover:-translate-y-4">
                Register
              </button>
          </div>
        </div>
        
      </Carousel>
   
        </div>
    </div>
  )
}

export default Header