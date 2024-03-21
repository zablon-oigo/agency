import React from 'react'
import Navbar from './Navbar'
import Header from './Header'
import Services from './Services'
import About from './About'
import Members from './Members'
import Footer from './Footer'
import Product from './Product'
import Testimonial from './Testimonial'
function Home() {
  return (
    <>
    <Navbar/>
       <div id="home">
       <Header/>
       </div>
    <div id="services">
    <Services/>
    </div>
    <div id="about">
    <About/>
    </div>
    <div id="">
      <Members/>
    </div>
    <div id="product">
      <Product/>
    </div>
    <div id="testimonial">
      <Testimonial/>
    </div>
    <Footer/>
    </>
  )
}

export default Home