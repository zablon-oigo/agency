import React from 'react'
import logo from '../assets/image/logo.png'
function Navbar() {
  return (
   <header className="w-full bg-white md:bg-transparent fixed top-0 left-0 right-0">
    <nav className="flex items-center justify-between">
        <div className="">
            <a href="" className="flex items-center space-x-2 ">
                <img src={logo} alt="" className='inline-block items-center w-10 h-10' />
                <span className="text-[#263238] font-bold text-2xl uppercase">
                    agency
                </span>
               
            </a>
            </div>
            <div className="flex items-center justify-center space-x-6">
                <a href="" className="text-gray-900 hover:text-brandPrimary text-base font-medium ">home</a>
                <a href="" className="text-gray-900 hover:text-brandPrimary text-base font-medium ">services</a>
                <a href="" className="text-gray-900 hover:text-brandPrimary text-base font-medium ">about</a>
                <a href="" className="text-gray-900 hover:text-brandPrimary text-base font-medium ">product</a>
                <a href="" className="text-gray-900 hover:text-brandPrimary text-base font-medium ">testimonial</a>
                <a href="" className="text-gray-900 hover:text-brandPrimary text-base font-medium ">faq</a>


                </div>
    </nav>
   </header>
  )
}

export default Navbar