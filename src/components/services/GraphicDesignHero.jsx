import React from 'react'
import Fade from 'react-reveal/Fade';

import './GraphicDesignHero.css'
import WixHeroImg from '../../assets/wix-hero.webp'

const GraphicDesignHero = () => {
  return (
    <>
      <div className='graphic-hero'>
        <div className='graphic-hero-content'>

            <div className='graphic-hero-flex'>

              <div className='graphic-left'>
                <img src={WixHeroImg} alt='man with laptop' loading='lazy'/>
              </div>

              <div className='graphic-right'>
                <Fade bottom>
                <h1>Hi, I'm Alwyn</h1>
                <h2>Graphic Designer / Motion Graphic Artist</h2>
                <p>All websites shown in my portfolio are custom made using the WiX platform. My services include a custom mobile version for every site, and basic search engine optimization (SEO) strategically built into the web design.</p>
                <p>After a website is created, it requires behind-the-scenes intervention and ongoing monitoring to improve rankings and drive traffic. I have vast experience optimizing websites for various industries including legal firms, medical services, restaurants, industrial machinery, transportation, and everything in between.</p>
                </Fade>
              </div>

            </div>

        </div>
      </div>
    </>
  )
}

export default GraphicDesignHero
