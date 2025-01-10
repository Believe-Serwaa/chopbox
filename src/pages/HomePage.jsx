import React from 'react'
import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection'
import ProductSection from '../components/ProductSection'
import Testimonials from '../components/Testimonials'
import Navbar from '../components/Navbar'


const Homepage = () => {
  return (
    <div>
        <Navbar/>
        <HeroSection/>
        <ProductSection/>
        <Testimonials/>
        <Footer/>
        </div>
    
  )
}

export default Homepage;