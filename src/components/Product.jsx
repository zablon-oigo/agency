import React from 'react'
import product from '../assets/image/product.png'
function Product() {
  return (
    <div className='min-h-500x'>
        <div className="px-10 md:py-20 py-10">
            <div className="grid md:grid-cols-2 grid-cols-1 gap-4 place-content-center justify-items-center">
            <div className="">
            <img src={product} alt="" />
            </div>
            <div className="text-center">
                <h2 className="text-3xl capitalize mb-4 font-bold">
                    how to design your footer like we did 
                </h2>
                <p className="text-base  first-letter:capitalize text-neutralDGray mb-4">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat ut, deleniti atque nam adipisci ex architecto minus itaque obcaecati in ipsum laborum accusamus saepe asperiores cumque doloribus illo cupiditate ratione assumenda expedita tenetur ipsam soluta quas. Nulla praesentium quibusdam explicabo.
                </p>
                <div className="">
                    <button className="px-6 py-3 rounded-lg bg-brandPrimary text-white capitalize transition-all duration-300 hover:bg-neutralDGray hover:-translate-y-2">
                        learn more
                    </button>
                </div>
            </div>
            </div>
            
        </div>

    </div>
  )
}

export default Product