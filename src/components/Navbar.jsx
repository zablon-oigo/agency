import React from 'react'

function Navbar() {
  return (
    <div>
        <div className="bg-teal-500 text-white drop-shadow-2xl flex items-center justify-between">
            <div className="">
                <a href="">
                    agency
                </a>
            </div>
            <div className="">
                <a href="">Home</a><a href="">About</a><a href="">Contact</a>
            </div>
        </div>
    </div>
  )
}

export default Navbar