import React,{useEffect,useState} from 'react'
import logo from '../assets/image/icon.png'
import { CiMenuBurger } from "react-icons/ci";
import { LiaTimesSolid } from "react-icons/lia";
import { Link } from 'react-scroll';
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
   <header className="w-full bg-white md:bg-transparent  top-0 left-0 right-0">
    <nav className="flex items-center justify-between px-10 py-6">
        <div className="">
            <Link to={'/'} smooth={true} spy={true} duration={500} className=" cursor-pointer flex items-center space-x-2 ">
                <img src={logo} alt="" className='inline-block items-center w-6 h-6' />
                <span className="text-[#263238] font-bold text-2xl uppercase">
                    nextcent
                </span>
               
            </Link>
            </div>
            <div className="hidden md:flex items-center justify-center space-x-6">
                <Link to={'home'} smooth={true} spy={true} duration={500} className="text-gray-900  cursor-pointer capitalize hover:text-brandPrimary text-base font-medium ">home</Link>
                <Link to={'services'} smooth={true} spy={true} duration={500} className="text-gray-900  cursor-pointer capitalize hover:text-brandPrimary text-base font-medium ">services</Link>
                <Link to={'about'} smooth={true} spy={true} duration={500} className="text-gray-900  cursor-pointer capitalize hover:text-brandPrimary text-base font-medium ">about</Link>
                <Link to={'product'} smooth={true} spy={true} duration={500} className="text-gray-900  cursor-pointer capitalize hover:text-brandPrimary text-base font-medium ">product</Link>
                <Link to={'testimonial'} smooth={true} spy={true} duration={500} className="text-gray-900  cursor-pointer capitalize hover:text-brandPrimary text-base font-medium ">testimonial</Link>
                <Link to={'faq'} smooth={true} spy={true} duration={500} className="text-gray-900  cursor-pointer capitalize hover:text-brandPrimary text-base font-medium ">faq</Link>
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
                <Link to={'home'} smooth={true} spy={true} duration={500} className="text-white cursor-pointer capitalize hover:text-gray-600 duration-300 text-xl font-medium ">home</Link>
                <Link to={'services'} smooth={true} spy={true} duration={500} className="text-white cursor-pointer capitalize hover:text-gray-600 duration-300 text-xl font-medium ">services</Link>
                <Link to={'about'} smooth={true} spy={true} duration={500} className="text-white cursor-pointer capitalize hover:text-gray-600 duration-300 text-xl font-medium ">about</Link>
                <Link to={'product'} smooth={true} spy={true} duration={500} className="text-white cursor-pointer capitalize hover:text-gray-600 duration-300 text-xl font-medium ">product</Link> 
                <Link to={'testimonial'} smooth={true} spy={true} duration={500} className="text-white cursor-pointer capitalize hover:text-gray-600 duration-300 text-xl font-medium ">testimonial</Link> 
                <Link to={'faq'} smooth={true} spy={true} duration={500} className="text-white cursor-pointer capitalize hover:text-gray-600 duration-300 text-xl font-medium ">faq</Link> 

    </div>
   </header>
  )
}

export default Navbar