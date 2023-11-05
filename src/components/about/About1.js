import React from 'react'
import './About1.css'
import ContactForm from '../contact/ContactForm'

import Me from '../../assets/me.png'


const About1 = () => {
    return (
        <>
        <div className='about1'>

            <div className='about1-header container'>
                <h1>Know More About Us</h1>

                <div className='about1-flex'>

                    <div className='about1-flex-left'>
                        <img src={ Me } alt="individual therapy" loading="lazy"/>
                    </div>

                    <div className='about1-flex-right'>
                        <p>To provide the best quality transitional housing and treatment for those seeking recovery that creates long-lasting, positive change in your life and the world around you. Every recovery journey begins with a single step. And at First Step, we're here to guide you towards long-term success and stability... not just today, but tomorrow, the next day, and for the rest of your life.</p>
                    </div>

                </div>

            </div>
        </div>

        <ContactForm />

</>
    )
}

export default About1
