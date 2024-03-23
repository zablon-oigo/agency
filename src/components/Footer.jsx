import React from 'react'
import { Link } from 'react-scroll';
import logo from '../assets/image/footer.png'
import { SlSocialInstagram } from "react-icons/sl";
import { TfiTwitterAlt } from "react-icons/tfi";
import { GrYoutube } from "react-icons/gr";
import { TbWorld } from "react-icons/tb";
function Footer() {
  return (
    <>
    <div className="min-h-[300px] bg-[#263238] ">
      <div className="flex flex-col justify-center px-10 py-10 md:flex-row">
        <div className="">
            <Link to={'/'} smooth={true} spy={true} duration={500} className="flex items-center space-x-2 cursor-pointer ">
                    <img src={logo} alt="" className='items-center inline-block w-6 h-6' />
                    <span className="text-[#FAF9F6] font-bold text-2xl uppercase">
                        nextcent
                    </span>
                </Link>
                <div className="">
                  <h2 className="text-base capitalize font-light  text-[#FFF5EE] mt-2">copyright &copy; {new Date().getFullYear()}</h2>
                  <p className="text-sm text-[#FFF5EE] capitalize font-light mt-2">
                    all rights reserved
                  </p>
                </div>
                <div className="flex items-center gap-4 my-6">
                <SlSocialInstagram className='text-[#E2DFD2] text-3xl'/>
                <TfiTwitterAlt className='text-[#E2DFD2] text-3xl '/>
                <GrYoutube className='text-[#E2DFD2] text-3xl '/>
                <TbWorld className='text-[#E2DFD2] text-3xl '/>
                </div>
        </div>
        <div className="">

        </div>
      </div>
    </div>
    </>
  )
}

export default Footer