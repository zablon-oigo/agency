import React from 'react'
import product from '../assets/image/product.png'
function Product() {
  return (
    <div className='min-h-500x'>
        <div className="">
            <div className="">
            <img src={product} alt="" />
            </div>
            <div className="">
                <h2 className="">
                    how to design your footer like we did 
                </h2>
                <p className="">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat ut, deleniti atque nam adipisci ex architecto minus itaque obcaecati in ipsum laborum accusamus saepe asperiores cumque doloribus illo cupiditate ratione assumenda expedita tenetur ipsam soluta quas. Nulla praesentium quibusdam explicabo.
                </p>
                <div className="">
                    <button className="">
                        learn more
                    </button>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Product