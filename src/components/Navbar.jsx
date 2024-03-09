import React,{useEffect,useState} from 'react'
import logo from '../assets/image/logo.png'
import { CiMenuBurger } from "react-icons/ci";
import { LiaTimesSolid } from "react-icons/lia";
function Navbar() {
    const[isSticky, setisSticky]=useState(false)
    const[menu, setMenu]=useState(false)
    
    const toggleMenu=()=>{
        setMenu(!menu)
    }

    useEffect(()=>{
        const handleScroll=()=>{
            if(window.scrollY > 100){
                setisSticky(true)
            }
            else{
                setisSticky(false)
            }
        };
        window.addEventListener('scroll', handleScroll)
        return()=>{
            window.addEventListener('scroll', handleScroll)

        }
    })
  return (
   <header className="w-full bg-white md:bg-transparent fixed top-0 left-0 right-0">
    <nav className="flex items-center justify-between px-10 py-6">
        <div className="">
            <a href="" className="flex items-center space-x-2 ">
                <img src={logo} alt="" className='inline-block items-center w-10 h-10' />
                <span className="text-[#263238] font-bold text-2xl uppercase">
                    agency
                </span>
               
            </a>
            </div>
            <div className="hidden md:flex items-center justify-center space-x-6">
                <a href="" className="text-gray-900 capitalize hover:text-brandPrimary text-base font-medium ">home</a>
                <a href="" className="text-gray-900 capitalize hover:text-brandPrimary text-base font-medium ">services</a>
                <a href="" className="text-gray-900 capitalize hover:text-brandPrimary text-base font-medium ">about</a>
                <a href="" className="text-gray-900 capitalize hover:text-brandPrimary text-base font-medium ">product</a>
                <a href="" className="text-gray-900 capitalize hover:text-brandPrimary text-base font-medium ">testimonial</a>
                <a href="" className="text-gray-900 capitalize hover:text-brandPrimary text-base font-medium ">faq</a>


                </div>
            <div className="md:block hidden space-x-6">
                <a href="" className="capitalize text-brandPrimary hover:text-gray-900">
                    login
                </a>
                <button className="bg-brandPrimary text-white py-2 px-4 transition-all duration-300 rounded hover:bg-neutralDGray">
                    sign up
                </button>
            </div>
            <button className="md:hidden" onClick={toggleMenu}>
                {menu?<LiaTimesSolid className='text-brandPrimary text-3xl '/>:<CiMenuBurger className='text-brandPrimary text-3xl '/>}
            </button>
    </nav>
    <div className={`${menu?'translate-x-0':'-translate-x-full'} duration-500 z-10 transition-transform md:hidden bg-brandPrimary  -translate-x-1/2 w-full  h-[300px] flex  gap-6 items-center justify-center py-3 px-10 flex-col`}>
                <a href="" className="text-white capitalize hover:text-gray-600 duration-300 text-xl font-medium ">home</a>
                <a href="" className="text-white capitalize hover:text-gray-600 duration-300 text-xl font-medium ">services</a>
                <a href="" className="text-white capitalize hover:text-gray-600 duration-300 text-xl font-medium ">about</a>
                <a href="" className="text-white capitalize hover:text-gray-600 duration-300 text-xl font-medium ">product</a> 
                <a href="" className="text-white capitalize hover:text-gray-600 duration-300 text-xl font-medium ">product</a> 
                <a href="" className="text-white capitalize hover:text-gray-600 duration-300 text-xl font-medium ">product</a> 

    </div>
   </header>
  )
}

export default Navbar