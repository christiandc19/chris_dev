import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import ContactForm from '../components/contact/ContactForm'
import EcommerceHero from '../components/services/EcommerceHero'
import Ecommerce from '../components/services/Ecommerce'
import ContactCards from '../components/contact/ContactCards'

const EcommercePage = () => {
  return (
    <>
          <Navbar /> 
          <EcommerceHero />
          <Ecommerce />
          <ContactForm />
          <ContactCards />
          <Footer />

    </>
  )
}

export default EcommercePage
