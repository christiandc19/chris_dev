import React from 'react'

import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import ContactForm from '../components/contact/ContactForm'
import ContactCards from '../components/contact/ContactCards'
import SEOHero from '../components/services/SEOHero'
import SEO from '../components/services/SEO'


const SEOPage = () => {
    return (
        <>
            <Navbar /> 
            <SEOHero />
            <SEO />
            <ContactForm />
            <ContactCards />
            <Footer />
        </>
    )
}

export default SEOPage
