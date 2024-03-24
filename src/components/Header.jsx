import React from 'react'
import { Carousel } from 'flowbite-react';
import head1 from '../assets/image/head1.png'
import head2 from '../assets/image/about.png'
function Header() {
  return (
    <div className='min-h-screen bg-neutralSilver'>
        <div className="px-4 mx-auto md:px-14 max-w-screen-2xl">
        
      <Carousel className='w-full mx-auto md:my-0'>
        <div className="flex flex-col items-center justify-between gap-12 md:flex-row-reverse">
          <div className="">
          <img src={head1} alt="" className="" />
          </div>
          <div className="md:w-1/2">
            <h1 className="mb-4 text-3xl font-semibold leading-snug text-center capitalize md:text-5xl text-neutralDGray md:text-start">
            lessons and insight  <span className="text-brandPrimary">
            from 8 years
            </span>
            </h1>
            <p className="mb-8 text-center first-letter:capitalize text-neutralDGray md:text-base text-md md:text-start">
              where to grow your business as a photographer:site or social media ?
            </p>
            <div className="flex items-center justify-center md:justify-start">
            <button className="py-2 text-white transition-all duration-300 rounded px-7 bg-brandPrimary hover:bg-neutralDGray hover:-translate-y-4 ">
                Register
              </button>
            </div>

          </div>
        </div>
        
        <div className="flex flex-col items-center justify-between gap-12 md:flex-row-reverse">
          <div className="">
          <img src={head2} alt="" className="" />
          </div>
          <div className="md:w-1/2">
            <h1 className="mb-4 text-3xl font-semibold leading-snug text-center capitalize md:text-5xl text-neutralDGray md:text-start">
            learn design and illustrations  <span className="text-brandPrimary">
            in 4 months
            </span>
            </h1>
            <p className="mb-8 text-center first-letter:capitalize text-neutralDGray md:text-base text-md md:text-start ">
              where to grow your business as a photographer:site or social media ?
            </p>
            <div className="flex items-center justify-center md:justify-start">
            <button className="py-2 text-white transition-all duration-300 rounded px-7 bg-brandPrimary hover:bg-neutralDGray hover:-translate-y-4 ">
                Register
              </button>
            </div>

          </div>
        </div>
        
        <div className="flex flex-col items-center justify-between gap-12 md:flex-row-reverse">
          <div className="">
          <img src={head1} alt="" className="" />
          </div>
          <div className="md:w-1/2">
            <h1 className="mb-4 text-3xl font-semibold leading-snug text-center md:text-5xl text-neutralDGray md:text-start">
            lessons and insight  <span className="text-brandPrimary">
            from 8 years
            </span>
            </h1>
            <p className="mb-8 text-center text-neutralDGray md:text-base text-md md:text-start ">
              where to grow your business as a photographer:site or social media ?
            </p>
            <div className="flex items-center justify-center md:justify-start">
            <button className="py-2 text-white transition-all duration-300 rounded px-7 bg-brandPrimary hover:bg-neutralDGray hover:-translate-y-4 ">
                Register
              </button>
            </div>

          </div>
        </div>
        
        
      </Carousel>
   
        </div>
    </div>
  )
}

export default Header