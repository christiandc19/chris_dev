import React from 'react'

import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import ContactForm from '../components/contact/ContactForm'
import ContactCards from '../components/contact/ContactCards'
import WebDesign from '../components/services/WebDesignHero'


const WebDesignPage = () => {
    return (
        <>
           <Navbar /> 
            <WebDesign />
           <ContactForm />
           <ContactCards />
           <Footer />
        </>
    )
}

export default WebDesignPage
