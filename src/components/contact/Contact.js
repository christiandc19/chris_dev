import React from "react";
import Fade from 'react-reveal/Fade';

import ContactForm from "./ContactForm";
import './Contact.css'


const Contact = () => {

    return (
      <>

<div className='contact-hero'>
            <div className="contact-hero-content">
            <Fade top>
                    <h1>Got Questions?</h1>
                    <h2>We’d love to hear from you!</h2>
                    <h1>+1 (818) 272-1022</h1>
            </Fade>
            </div>
     </div>

      <ContactForm />

      </>
    )
}

export default Contact