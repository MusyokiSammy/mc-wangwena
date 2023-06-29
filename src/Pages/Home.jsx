import React from 'react'
import HeroSection from '../components/HeroSection'
import Service from '../components/Service'
import Navbar from '../components/Navbar'
import PromotionWrapperSLider from '../components/PromotionWrapper'
// import AboutSection from '../components/AboutSection'
import About from '../components/About'

const Home = () => {
  return (
    <React.Fragment>
        <Navbar/>
        <HeroSection/>
        <Service/>
        <PromotionWrapperSLider/>
        {/* <AboutSection/> */}
        <About/>
    </React.Fragment>
  )
}

export default Home
