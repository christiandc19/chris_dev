import React from 'react'
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom';

import './Hero2.css'
import me from '../../assets/me2.png'

import { BsLinkedin } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs'
import { BsFacebook } from 'react-icons/bs'
import { BsTwitter } from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'
import { BsMessenger } from 'react-icons/bs'


const Hero2 = () => {

    const style = { fontSize: "1.5em" }


  return (
    <>
      <div className='hero2'>
        <div className='hero2-content container'>

            <div className='hero2-flex'>

              <div className='hero2-left'>
                <img src={me} alt='man with laptop' loading='lazy'/>
              </div>

              <div className='hero2-right'>
                <Fade top>

                <Fade left>
                            <p>"Your Web Design Source"</p>
                        </Fade>

                        <Fade right>
                        <h2><span className='span1'>Web Design.</span> <span className='span2'>SEO.</span> <span className='span3'>Solutions.</span></h2>
                        </Fade>

 

                        <div className='hero-btn'>
                            <Link to="/contact">
                                <Fade bottom>
                                    <button>CONTACT US</button>
                                </Fade>
                            </Link>
                        </div>

                        <Fade right>
                        <div className="header__socials">
                            <a href="https://www.linkedin.com/in/chris-carandang/" style={style}><span><BsLinkedin/></span></a>
                            <a href="https://github.com/christiandc19" style={style}><span className='span-github'><BsGithub/></span></a>
                            <a href="https://www.facebook.com/chrisvisits/" style={style}><span className='span-fb'><BsFacebook/></span></a>
                            <a href="https://twitter.com/christiandc19" style={style}><span className='span-twitter'><BsTwitter/></span></a>
                            <a href="https://www.instagram.com/christagram_19/"  style={style}><span className='span-instagram'><BsInstagram/></span></a>
                            <a href="https://www.m.me/chrisvisits/" style={style}><span className='span-messenger'><BsMessenger/></span></a>
                        </div>
                        </Fade>
                </Fade>
              </div>

            </div>

        </div>
      </div>
    </>
  )
}

export default Hero2
