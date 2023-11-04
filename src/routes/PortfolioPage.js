import React from 'react'

import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import Portfolio from '../components/portfolio/Portfolio'
import PortfolioHero from '../components/portfolio/Portfolio-hero'


const PortfolioPage = () => {
  return (
    <>
    <Navbar /> 
    <PortfolioHero />
    <Portfolio />
    <Footer />
     </>
  )
}

export default PortfolioPage