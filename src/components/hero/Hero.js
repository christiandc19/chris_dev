import React from 'react'
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import './Hero.css'

import { BsLinkedin } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs'
import { BsFacebook } from 'react-icons/bs'
import { BsTwitter } from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'
import { BsMessenger } from 'react-icons/bs'

import BgVideo from '../../assets/hero_video_bg.mp4'
import logo from '../../assets/fontrow_logo_wh.png'


const Hero = () => {

    const style = { fontSize: "1.5em" }

    return (
<>        

        <div className='hero'>
            <video src={BgVideo} autoPlay muted loop playsInline className='video-bg' />



            <div className="hero-container">

                <div className="content">


                <Fade left>
                            <p>"Your Web Design Source"</p>
                        </Fade>

                        <Fade right>
                        <h2><span className='span1'>Web Design.</span> <span className='span2'>SEO.</span> <span className='span3'>Solutions.</span></h2>
                        </Fade>

                        <div className="hero-logo">
                    <Link to='/'>
                    <img src={logo} alt="Logo" loading="lazy"/>
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

                        <div className='hero-btn'>
                            <Link to="/contact">
                                <Fade bottom>
                                    <button>Contact Us</button>
                                </Fade>
                            </Link>
                        <div>


                        </div>
                    </div>
                </div>
            </div>
        </div>


</>

    )
}

export default Hero