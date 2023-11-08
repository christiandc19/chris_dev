import React from 'react'
import './About1.css'
import ContactForm from '../contact/ContactForm'

import Deej from '../../assets/man_laptop2.webp'
import Alwyn from '../../assets/man_laptop.webp'
import Edgar from '../../assets/woman_laptop.webp'


const About1 = () => {
    return (
        <>
        <div className='about1'>

            <div className='about1-header container'>
                <h1>Meet The Team</h1>

                <div className='about1-flex'>

                    <div className='about1-flex-item'>
                        <img src={ Alwyn } alt="individual therapy" loading="lazy"/>
                        <h2>ALWYN</h2>
                        <p>Graphic Designer / Motion Graphic Artist</p>
                    </div>

                    <div className='about1-flex-item'>
                        <img src={ Deej } alt="individual therapy" loading="lazy"/>
                        <h2>DANIEL JAMES</h2>
                        <p>SEO Speacialist</p>
                    </div>

                    <div className='about1-flex-item'>
                        <img src={ Edgar } alt="individual therapy" loading="lazy"/>
                        <h2>EDGAR</h2>
                        <p>Project Manager / Content Editor</p>
                    </div>




                </div>

            </div>
        </div>

        <ContactForm />

</>
    )
}

export default About1
