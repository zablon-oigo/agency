import React from 'react'
import image1 from '../image/testimonial/icon1.png'
import image2 from '../image/testimonial/icon2.png'
import image3 from '../image/testimonial/icon3.png'
function TestimonialCard() {
    const card=[
        {
            id:1,
            image:image1
        },
        {
            id:2,
            image:image2
        },
        {
            id:3,
            image:image3
        }
    ]
  return (
    <>
    <div className="grid grid-cols-1 gap-3 md:grid-cols-3 place-content-center justify-items-center">
          {card.map((item)=>(
            <div className="" key={item.id}>
                <img src={item.image} alt="" className="" />
            </div>
          ))}
    </div>
    </>
  )
}

export default TestimonialCard