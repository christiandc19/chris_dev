import React from 'react'

import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import ContactForm from '../components/contact/ContactForm'
import ContactCards from '../components/contact/ContactCards'
import WixHero from '../components/services/WixHero'
import Wix from '../components/services/Wix'


const WixPage = () => {
    return (
        <>
           <Navbar /> 
            <WixHero />
            <Wix />
           <ContactForm />
           <ContactCards />
           <Footer />
        </>
    )
}

export default WixPage
