import React from 'react'
import { HiArrowLongRight } from "react-icons/hi2";
function Faq() {
  return (
    <>
    <div className="min-h-[250px] bg-gradient-to-br from-[#F0EAD6] to-[#E9DCC9] md:px-10 px-2 py-10">
        <div className="flex flex-col items-center justify-center w-full">
            <h2 className="text-xl font-semibold text-center capitalize md:text-3xl md:w-2/5 ">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero, eaque.
            </h2>
            <div className="my-4">
                <button className="inline-flex items-center justify-center gap-2 px-8 py-3 text-base text-white capitalize transition-all duration-300 rounded itmes-center bg-brandPrimary hover:bg-neutralDGray hover:-translate-y-2">
                    learn more
                    <HiArrowLongRight className='text-xl'/>
                </button>
            </div>
        </div>
    </div>
    </>
  )
}

export default Faq