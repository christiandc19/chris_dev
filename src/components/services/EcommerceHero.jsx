import React from 'react'
import Fade from 'react-reveal/Fade';

import './EcommerceHero.css'
import EcommerceHeroImg from '../../assets/woman_laptop.webp'

const EcommerceHero = () => {
  return (
    <>
      <div className='ecommerce-hero'>
        <div className='ecommerce-hero-content'>

            <div className='ecommerce-hero-flex'>

              <div className='ecommerce-left'>
                <img src={EcommerceHeroImg} alt='woman with laptop' loading='lazy'/>
              </div>

              <div className='ecommerce-right'>
                <Fade top>
                <h1>E-COMMERCE</h1>
                </Fade>
              </div>

            </div>

        </div>
      </div>
    </>
  )
}

export default EcommerceHero
