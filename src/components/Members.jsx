import React from 'react'
import icon1 from '../assets/image/members/icon1.png'
import icon2 from '../assets/image/members/icon2.png'
import icon3 from '../assets/image/members/icon3.png'
import icon4 from '../assets/image/members/icon4.png'
function Members() {
  return (
    <div className='bg-gray-100'>
      <div className="min-h-[100px] px-10 md:py-20 py-10 flex flex-col  md:flex-row gap-6">
        <div className="md:w-2/5 w-full text-center">
          <h2 className="md:text-4xl text-2xl mb-2 text-neutralGray  capitalize ">
            helping a local <span className="text-brandPrimary">
              business reinvent itself
            </span>
            <p className="text-sm text-neutralDGray font-semibold first-letter:capitalize">
              we reached with here with our hard work and dedication
            </p>
          </h2>
        </div>
        <div className="md:w-3/4 w-full  grid grid-cols-2 place-content-center justify-items-center gap-4">
          <div className=" flex flex-col items-center justify-between">
          <div className="flex items-center justify-center gap-6">
            <div className="">
            <img src={icon1} alt="" className="" />
            </div>
            <div className="">
              <h2 className="md:text-2xl text-lg text-neutralDGray font-semibold">2,245,341</h2>
              <p className="text-neutralGray md:text-base text-xs capitalize">members</p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-6">
            <div className="">
            <img src={icon2} alt="" className="" />
            </div>
            <div className="">
              <h2 className="md:text-2xl text-lg text-neutralDGray font-semibold">828,827</h2>
              <p className="text-neutralGray md:text-base text-xs capitalize">event bookings</p>
            </div>
          </div>
          </div>
          <div className=" flex flex-col items-center justify-between gap-4">
          <div className="flex item-center justify-center gap-6">
            <div className="">
            <img src={icon3} alt="" className="" />
            </div>
            <div className="">
              <h2 className="md:text-2xl text-lg text-neutralDGray font-semibold">1,667,341</h2>
              <p className="text-neutralGray md:text-base text-xs capitalize">clubs</p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-6">
            <div className="">
            <img src={icon4} alt="" className="" />
            </div>
            <div className="">
              <h2 className="md:text-2xl text-lg text-neutralDGray font-semibold">1,258,303</h2>
              <p className="text-neutralGray md:text-base text-xs capitalize">payments</p>
            </div>
          </div>
          </div>
         
          
        </div>
      </div>

    </div>
  )
}

export default Members