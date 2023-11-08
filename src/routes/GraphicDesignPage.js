import React from 'react'

import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import ContactForm from '../components/contact/ContactForm'
import ContactCards from '../components/contact/ContactCards'
import GraphicDesignHero from '../components/services/GraphicDesignHero'
import GraphicDesign from '../components/services/GraphicDesign'


const GraphicDesignPage = () => {
    return (
        <>
            <Navbar /> 
            <GraphicDesignHero />
            <GraphicDesign />
            <ContactForm />
            <ContactCards />
            <Footer />
        </>
    )
}

export default GraphicDesignPage
