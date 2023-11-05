import React from 'react'

import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import ContactForm from '../components/contact/ContactForm'
import ContactCards from '../components/contact/ContactCards'
import WebDesignHero from '../components/services/WebDesignHero'
import WebDesign from '../components/services/WebDesign'


const WebDesignPage = () => {
    return (
        <>
           <Navbar /> 
            <WebDesignHero />
            <WebDesign />
           <ContactForm />
           <ContactCards />
           <Footer />
        </>
    )
}

export default WebDesignPage
