import React from 'react'

import './WebDesignHero.css'
import WebDesignHeroImg from '../../assets/web-design-hero.webp'

const WebDesignHero = () => {
  return (
    <>
      <div className='web-design-hero'>
        <div className='web-design-hero-content'>

            <div className='web-design-hero-flex'>

              <div className='web-design-left'>
                <img src={WebDesignHeroImg} alt='man with laptop' loading='lazy'/>
              </div>

              <div className='web-design-right'>
                <h1>AFFORDABLE WEBSITE PACKAGES</h1>
                <h2>Managed Website Services</h2>
                <p>We offer competitive pricing and complete web solutions. Contact us to determine the best package to accomplish your objectives.</p>
              </div>

            </div>

        </div>
      </div>
    </>
  )
}

export default WebDesignHero
