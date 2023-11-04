import React from "react";
import Splatter3 from '../../assets/splatter2.png'

import './Portfolio-hero.css'



const PortfolioHero = () => {

    return (
            <>
        <div className='portfolio-hero'>
                <div className="portfolio-hero-content">
                    <h1>Our Mission</h1>
                        <div className='portfolio-hero-accent'>
                            <img src={ Splatter3 } alt="individual therapy" loading="lazy"/>
                        </div>
                </div>
            </div>



            </>
    )

    }
export default PortfolioHero




