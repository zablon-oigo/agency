import React from 'react'
import TestimonialCard from '../assets/Layout/TestimonialCard'

function Testimonial() {
  return (
    <>
    <div className="min-h-[200px] bg-slate-50 px-10 py-16">
        <div className="flex flex-col items-center justify-center">
            <h2 className="text-xl font-bold text-center capitalize md:text-3xl text-neutral-600">
                caring is the new marketing
            </h2>
            <p className="w-full mt-4 text-sm font-light text-center md:text-base md:w-2/5 text-neutralDGray first-letter:capitalize">
                the nextcent blog is the best place to read about the latest membership insights, 
                trends and more.See who's joining the community, read about how our community are increasing their membership income and lot's more
            </p>
        </div>
        <div className="my-10">
            <TestimonialCard/>
        </div>
    </div>
    </>
  )
}

export default Testimonial