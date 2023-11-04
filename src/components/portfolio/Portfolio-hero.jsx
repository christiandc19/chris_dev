import React from "react";
import Splatter3 from '../../assets/splatter3.png'

import './Portfolio-hero.css'



const PortfolioHero = () => {

    return (
            <>
        <div className='portfolio-hero'>
                <div className="portfolio-hero-content">
                    <h1>Check out our projects</h1>
                        <div className='portfolio-hero-accent'>
                            <img src={ Splatter3 } alt="individual therapy" loading="lazy"/>
                        </div>
                </div>
            </div>



            </>
    )

    }
export default PortfolioHero




