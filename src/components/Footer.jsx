import React from 'react'
import { Link } from 'react-scroll';
import logo from '../assets/image/footer.png'
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
        </div>
        <div className="">

        </div>
      </div>
    </div>
    </>
  )
}

export default Footer