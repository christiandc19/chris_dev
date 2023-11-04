import React from 'react'
import Logo from '../../assets/me.png'

import './About.css'



const Team = () => {
    return (
<>
<div className='about'>
        <div className="about-content container">
                <div className='about-accent'>
                    <img src={ Logo } alt="individual therapy" loading="lazy"/>
                </div>

                <div className='about-right'>
                    <h1>About Us</h1>
                </div>
        </div>
    </div>
</>
)
}

export default Team