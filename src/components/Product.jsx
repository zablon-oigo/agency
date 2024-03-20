import React from 'react'
import product from '../assets/image/product.png'
import product2 from '../assets/image/product2.png'
import icon1 from '../assets/image/product/icon1.png'
import icon2 from '../assets/image/product/icon2.png'
import icon3 from '../assets/image/product/icon3.png'
import icon4 from '../assets/image/product/icon4.png'
import icon5 from '../assets/image/product/icon5.png'
import icon6 from '../assets/image/product/icon6.png'
import { HiArrowLongRight } from "react-icons/hi2";

function Product() {
  return (
    <div className='min-h-500x'>
        <div className="px-10 py-10 md:py-20">
            <div className="grid grid-cols-1 gap-4 mb-20 md:grid-cols-2 place-content-center justify-items-center">
            <div className="">
            <img src={product} alt="" />
            </div>
            <div className="">
                <h2 className="mb-4 text-xl font-bold text-center capitalize md:text-3xl md:text-start">
                    how to design your <span className="text-brandPrimary">footer</span> like we did 
                </h2>
                <p className="mb-4 text-sm font-light text-center md:text-base md:text-start first-letter:capitalize text-neutralDGray">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat ut, deleniti atque nam adipisci ex architecto minus itaque obcaecati in ipsum laborum accusamus saepe asperiores cumque doloribus illo cupiditate ratione assumenda expedita tenetur ipsam soluta quas. Nulla praesentium quibusdam explicabo.
                </p>
                <div className="flex justify-center md:justify-start">
                    <button className="px-6 py-3 text-white capitalize transition-all duration-300 rounded bg-brandPrimary hover:bg-neutralDGray hover:-translate-y-2">
                        learn more
                    </button>
                </div>
            </div>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 place-content-center justify-items-center">
            <div className="order-2 md:order-1 ">
                <p className="mb-4 text-sm font-light text-center md:text-base md:text-start first-letter:capitalize text-neutralGray">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab iure, voluptates, et sit, aliquid voluptate aspernatur harum obcaecati corrupti modi dolorem consequatur accusamus quas repellendus tenetur quod fugiat quia totam quibusdam reiciendis quis deleniti excepturi repellat error! Unde ad maxime rem excepturi quos modi provident iure at accusamus. Fugit sapiente, quae obcaecati aliquam molestiae natus laborum commodi illum aliquid esse?
                </p>
                <div className="">
                    <p className="mb-2 font-semibold text-center capitalize md:text-start text-brandPrimary text-md md:text-xl">
                        tim smith
                    </p>
                    <p className="text-xs font-light text-center capitalize md:text-start md:text-sm text-neutralGray">
                        british Dragon boat racing association
                    </p>
                    <div className="flex flex-col items-center justify-center mt-6 md:flex-row">
                       <div className="grid grid-cols-7 gap-4 place-content-center justify-items-center ">
                       <img src={icon1} alt="" className="w-10 h-10 mt-2.5" />
                       <img src={icon2} alt="" className="w-10 h-10" />
                       <img src={icon3} alt="" className="w-10 h-10" />
                       <img src={icon4} alt="" className="w-10 h-10" />
                       <img src={icon5} alt="" className="w-10 h-10" />
                       <img src={icon6} alt="" className="w-10 h-10" />
                       </div>
                       <div className="">
                        <a href="" className="inline-flex items-center justify-center gap-2 text-base capitalize transition-all duration-300 text-brandPrimary hover:translate-x-2 hover:text-neutralDGray">
                            meet all customers
                            <HiArrowLongRight className='text-xl'/>
                        </a>
                       </div>
                    </div>
                </div>
            </div>
            <div className="order-1 md:order-2">
            <img src={product2} alt="" className='w-[300px] h-[300px] object-cover mx-auto' />
            </div>
            </div>
        </div>

    </div>
  )
}

export default Product