import React from 'react'
import image1 from '../image/testimonial/icon1.png'
import image2 from '../image/testimonial/icon2.png'
import image3 from '../image/testimonial/icon3.png'
import { HiArrowLongRight } from "react-icons/hi2";
function TestimonialCard() {
    const card=[
        {
            id:1,
            image:image1,
            description:'creating streamlined safeguarding processes with OneRen'
        },
        {
            id:2,
            image:image2,
            description:'What are your safeguarding responsibilties and how can you manage them ?'
        },
        {
            id:3,
            image:image3,
            description:'revamping the membership model with Triathlon Australia'
        }
    ]
  return (
    <>
    <div className="grid grid-cols-1 gap-3 md:grid-cols-3 place-content-center justify-items-center">
          {card.map((item)=>(
            <div className="relative" key={item.id}>
                <img src={item.image} alt="" className="object-cover h-64 rounded w-96" />
                
                <div className="absolute w-3/4 px-4 py-6 mx-10 bg-gray-200 rounded-lg shadow-2xl -bottom-6 ">
                  <p className="text-md text-neutral-700 first-letter:capitalize">
                    {item.description}
                    
                  </p>
                  <a href="" className="inline-flex items-center justify-between gap-2 text-sm transition-all duration-300 hover:translate-x-2 hover:text-neutralDGray text-brandPrimary ">
                      readmore
                      <HiArrowLongRight className='text-xl'/>
                    </a>
                </div>
                
            </div>
          ))}
    </div>
    </>
  )
}

export default TestimonialCard