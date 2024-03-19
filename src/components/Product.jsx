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
            
        </div>

    </div>
  )
}

export default Product