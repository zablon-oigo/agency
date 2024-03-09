import React from 'react'
import { Carousel } from 'flowbite-react';
function Header() {
  return (
    <div className='bg-neutralSilver'>
        <div className="px-4 md:px-14 max-w-screen-2xl mx-auto min-h-screen h-screen">
        <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel onSlideChange={(index) => console.log('onSlideChange()', index)}>
        <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
          Slide 1
        </div>
        <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
          Slide 2
        </div>
        <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
          Slide 3
        </div>
      </Carousel>
    </div>
        </div>
    </div>
  )
}

export default Header