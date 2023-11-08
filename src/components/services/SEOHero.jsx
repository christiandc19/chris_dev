import React from 'react'
import Fade from 'react-reveal/Fade';

import './SEOHero.css'
import WixHeroImg from '../../assets/wix-hero.webp'

const SEOHero = () => {
  return (
    <>
      <div className='seo-hero'>
        <div className='seo-hero-content'>

            <div className='seo-hero-flex'>

              <div className='seo-left'>
                <img src={WixHeroImg} alt='man with laptop' loading='lazy'/>
              </div>

              <div className='seo-right'>
                <Fade bottom>
                <h1>Hi, I'm DeeJay</h1>
                <h2>SEO Specialist / Content Editor</h2>
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

export default SEOHero
