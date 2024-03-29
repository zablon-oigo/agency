import React from 'react'
import { Link } from 'react-scroll';
import logo from '../assets/image/footer.png'
import { SlSocialInstagram } from "react-icons/sl";
import { TfiTwitterAlt } from "react-icons/tfi";
import { GrYoutube } from "react-icons/gr";
import { TbWorld } from "react-icons/tb";
import send from '../assets/image/send.svg'
function Footer() {
  return (
    <>
    <div className="min-h-[300px] bg-[#263238] ">
      <div className="flex flex-col justify-between px-10 py-10 md:flex-row">
        <div className="w-full md:w-2/5">
            <Link to={'/'} smooth={true} spy={true} duration={500} className="flex items-center space-x-2 cursor-pointer ">
                    <img src={logo} alt="" className='items-center inline-block w-6 h-6' />
                    <span className="text-[#FAF9F6] font-bold text-2xl uppercase">
                        nextcent
                    </span>
                </Link>
                <div className="mx-0 md:mx-4">
                  <h2 className="text-sm capitalize font-light  text-[#FFF5EE] mt-2">copyright &copy; {new Date().getFullYear()}</h2>
                  <p className="text-sm text-[#FFF5EE] capitalize font-light mt-2">
                    all rights reserved
                  </p>
                </div>
                <div className="flex items-center gap-4 mx-0 my-6 md:mx-4">
                <SlSocialInstagram className='text-[#E2DFD2] text-3xl hover:scale-125 hover:rotate-6 duration-300 delay-75 transition-all'/>
                <TfiTwitterAlt className='text-[#E2DFD2] text-3xl hover:scale-125 hover:rotate-6 duration-300 delay-75 transition-all '/>
                <GrYoutube className='text-[#E2DFD2] text-3xl hover:scale-125 hover:rotate-6 duration-300 delay-75 transition-all '/>
                <TbWorld className='text-[#E2DFD2] text-3xl hover:scale-125 hover:rotate-6 duration-300 delay-75 transition-all '/>
                </div>
        </div>
        <div className="flex flex-col justify-around w-full gap-y-4 md:flex-row md:w-3/4">
             <div className="">
             <h2 className="text-2xl capitalize font-semibold mb-6  text-[#FFF5EE]">
              company
             </h2>
             <div className="flex flex-col justify-center gap-y-2">
              <a href="" className="text-lg text-[#FFF5EE] first-letter:capitalize font-light hover:text-[#FFDEAD] duration-300 transition-all hover:translate-x-2">about us</a>
              <a href="" className="text-lg text-[#FFF5EE] first-letter:capitalize font-light hover:text-[#FFDEAD] duration-300 transition-all hover:translate-x-2">blog</a>
              <a href="" className="text-lg text-[#FFF5EE] first-letter:capitalize font-light hover:text-[#FFDEAD] duration-300 transition-all hover:translate-x-2">contact us</a>
              <a href="" className="text-lg text-[#FFF5EE] first-letter:capitalize font-light hover:text-[#FFDEAD] duration-300 transition-all hover:translate-x-2">pricing</a>
              <a href="" className="text-lg text-[#FFF5EE] first-letter:capitalize font-light hover:text-[#FFDEAD] duration-300 transition-all hover:translate-x-2">testimonials</a>
             </div>
             </div>
             <div className="">
              <h2 className="text-2xl capitalize font-semibold mb-6  text-[#FFF5EE]">
                support
              </h2>
              <div className="flex flex-col justify-center gap-y-2">
              <a href="" className="text-lg text-[#FFF5EE] first-letter:capitalize font-light hover:text-[#FFDEAD] duration-300 transition-all hover:translate-x-2">help center</a>
              <a href="" className="text-lg text-[#FFF5EE] first-letter:capitalize font-light hover:text-[#FFDEAD] duration-300 transition-all hover:translate-x-2">terms of service</a>
              <a href="" className="text-lg text-[#FFF5EE] first-letter:capitalize font-light hover:text-[#FFDEAD] duration-300 transition-all hover:translate-x-2">legal</a>
              <a href="" className="text-lg text-[#FFF5EE] first-letter:capitalize font-light hover:text-[#FFDEAD] duration-300 transition-all hover:translate-x-2">privacy policy</a>
              <a href="" className="text-lg text-[#FFF5EE] first-letter:capitalize font-light hover:text-[#FFDEAD] duration-300 transition-all hover:translate-x-2">status</a>
             </div>
             </div>
             <div className="">
              <h2 className="mb-6 text-2xl first-letter:capitalize font-semibold  text-[#FFF5EE]">
                stay up to date
              </h2>
              <div className="relative w-full">
                <input type="text" className=" px-4 py-2 border-none rounded focus:outline-none focus:ring-1 focus:ring-brandPrimary placeholder-[#668869]" placeholder='your email address' />
                <button type="submit" className="absolute md:right-1 right-[80px]  top-[14%]">
                  <img src={send} alt="" className="w-8 h-8" />
                </button>
              </div>
             </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Footer