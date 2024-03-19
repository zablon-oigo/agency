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
        <div className="px-10 md:py-20 py-10">
            <div className="mb-20 grid md:grid-cols-2 grid-cols-1 gap-4 place-content-center justify-items-center">
            <div className="">
            <img src={product} alt="" />
            </div>
            <div className="">
                <h2 className="md:text-3xl text-xl capitalize mb-4 text-center md:text-start font-bold">
                    how to design your <span className="text-brandPrimary">footer</span> like we did 
                </h2>
                <p className="md:text-base text-sm  text-center md:text-start font-light first-letter:capitalize text-neutralDGray mb-4">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat ut, deleniti atque nam adipisci ex architecto minus itaque obcaecati in ipsum laborum accusamus saepe asperiores cumque doloribus illo cupiditate ratione assumenda expedita tenetur ipsam soluta quas. Nulla praesentium quibusdam explicabo.
                </p>
                <div className="flex md:justify-start justify-center">
                    <button className="px-6 py-3 rounded bg-brandPrimary text-white capitalize transition-all duration-300 hover:bg-neutralDGray hover:-translate-y-2">
                        learn more
                    </button>
                </div>
            </div>
            </div>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-4 place-content-center justify-items-center">
            <div className="md:order-1 order-2 ">
                <p className="md:text-base text-sm  text-center md:text-start font-light first-letter:capitalize text-neutralGray mb-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab iure, voluptates, et sit, aliquid voluptate aspernatur harum obcaecati corrupti modi dolorem consequatur accusamus quas repellendus tenetur quod fugiat quia totam quibusdam reiciendis quis deleniti excepturi repellat error! Unde ad maxime rem excepturi quos modi provident iure at accusamus. Fugit sapiente, quae obcaecati aliquam molestiae natus laborum commodi illum aliquid esse?
                </p>
                <div className=" ">
                    <p className="capitalize  font-semibold mb-2 text-brandPrimary text-xl">
                        tim smith
                    </p>
                    <p className="capitalize text-sm font-light text-neutralGray">
                        british Dragon boat racing association
                    </p>
                    <div className="flex justify-center items-center mt-6">
                       <div className="grid grid-cols-7 gap-4 place-content-center justify-items-center ">
                       <img src={icon1} alt="" className="w-10 h-10 mt-2.5" />
                       <img src={icon2} alt="" className="w-10 h-10" />
                       <img src={icon3} alt="" className="w-10 h-10" />
                       <img src={icon4} alt="" className="w-10 h-10" />
                       <img src={icon5} alt="" className="w-10 h-10" />
                       <img src={icon6} alt="" className="w-10 h-10" />
                       </div>
                       <div className="">
                        <a href="" className="gap-2 inline-flex items-center justify-center text-brandPrimary duration-300 hover:translate-x-2 transition-all hover:text-neutralDGray text-base capitalize">
                            meet all customers
                            <HiArrowLongRight className='text-xl'/>
                        </a>
                       </div>
                    </div>
                </div>
            </div>
            <div className="md:order-2 order-1">
            <img src={product2} alt="" />
            </div>
            </div>
        </div>

    </div>
  )
}

export default Product