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
    const closeMenu=()=>{
        setMenu(false)
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
   <header className="relative top-0 left-0 right-0 w-full bg-white md:bg-transparent">
    <nav className="flex items-center justify-between py-4 md:py-6 md:px-10">
        <div className="">
            <Link to={'/'} smooth={true} spy={true} duration={500} className="flex items-center space-x-2 cursor-pointer ">
                <img src={logo} alt="" className='items-center inline-block w-6 h-6' />
                <span className="text-[#263238] font-bold text-2xl uppercase">
                    nextcent
                </span>
               
            </Link>
            </div>
            <div className="items-center justify-center hidden space-x-6 md:flex">
                <Link to={'home'} smooth={true} spy={true} duration={500} className="text-base font-medium text-gray-900 capitalize cursor-pointer hover:text-brandPrimary ">home</Link>
                <Link to={'services'} smooth={true} spy={true} duration={500} className="text-base font-medium text-gray-900 capitalize cursor-pointer hover:text-brandPrimary ">services</Link>
                <Link to={'about'} smooth={true} spy={true} duration={500} className="text-base font-medium text-gray-900 capitalize cursor-pointer hover:text-brandPrimary ">about</Link>
                <Link to={'product'} smooth={true} spy={true} duration={500} className="text-base font-medium text-gray-900 capitalize cursor-pointer hover:text-brandPrimary ">product</Link>
                <Link to={'testimonial'} smooth={true} spy={true} duration={500} className="text-base font-medium text-gray-900 capitalize cursor-pointer hover:text-brandPrimary ">testimonial</Link>
                <Link to={'faq'} smooth={true} spy={true} duration={500} className="text-base font-medium text-gray-900 capitalize cursor-pointer hover:text-brandPrimary ">faq</Link>
                </div>
            <div className="hidden space-x-6 md:block">
                <a href="" className="capitalize text-brandPrimary hover:text-gray-900">
                    login
                </a>
                <button className="px-4 py-2 text-white transition-all duration-300 rounded bg-brandPrimary hover:bg-neutralDGray">
                    sign up
                </button>
            </div>
            <button className="md:hidden" onClick={toggleMenu}>
                {menu?<LiaTimesSolid className='text-3xl text-brandPrimary '/>:<CiMenuBurger className='text-3xl text-brandPrimary '/>}
            </button>
    </nav>
    <div className={`${menu ? 'translate-x-0':'-translate-x-full'} duration-500 z-10 transition-transform md:hidden bg-brandPrimary  -translate-x-1/2 w-full  h-[300px] flex  gap-6 items-start justify-center py-4 px-3 flex-col`}>
                <Link to={'home'} smooth={true} spy={true} duration={500} onClick={closeMenu} className="text-xl font-medium text-white capitalize duration-300 cursor-pointer hover:text-gray-600 ">home</Link>
                <Link to={'services'} smooth={true} spy={true} duration={500} onClick={closeMenu} className="text-xl font-medium text-white capitalize duration-300 cursor-pointer hover:text-gray-600 ">services</Link>
                <Link to={'about'} smooth={true} spy={true} duration={500} onClick={closeMenu} className="text-xl font-medium text-white capitalize duration-300 cursor-pointer hover:text-gray-600 ">about</Link>
                <Link to={'product'} smooth={true} spy={true} duration={500} onClick={closeMenu} className="text-xl font-medium text-white capitalize duration-300 cursor-pointer hover:text-gray-600 ">product</Link> 
                <Link to={'testimonial'} smooth={true} spy={true} duration={500} onClick={closeMenu} className="text-xl font-medium text-white capitalize duration-300 cursor-pointer hover:text-gray-600 ">testimonial</Link> 
                <Link to={'faq'} smooth={true} spy={true} duration={500} onClick={closeMenu} className="text-xl font-medium text-white capitalize duration-300 cursor-pointer hover:text-gray-600 ">faq</Link> 

    </div>
   </header>
  )
}

export default Navbar