import React from 'react'
import './Section1.css'
import Fade from 'react-reveal/Fade';

import PenTool from '../../assets/web_pen_tool.png'
import SEO from '../../assets/web_seo.png'
import WebDesign from '../../assets/web_design.png'
import Maintenance from '../../assets/web_maintenance.png'

import { Link as LinkRoll } from 'react-scroll'
import { Link } from 'react-router-dom';


const Section1 = () => {
  return (
    <>
      <div className='section1'>
                    <div className='section1-header'>
                    <h1>Our Services</h1>
                    </div>
                      

        <div className='section1-content'>

              <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
              <Link to="/employment">
                <div className='section1-card'>
                    <div className='section1-card-img'>
                        <img src={ WebDesign } alt="hand shake" loading="lazy"/>
                    </div>
                    <div className='section1-card-caption'>
                        <h1>Web Design & e-Commerce</h1>
                        <p>Whether you need to revamp an outdated website, start a custom design or launch an online shop, we create mobile responsive sites with SEO in mind using the leading open source and site builder platforms.</p>

                        <div className='card-btn'>
                            <Link to="/web-design">
                                <Fade bottom>
                                    <button>Learn More</button>
                                </Fade>
                            </Link>
                        </div>
                        
                    </div>
                </div>
              </Link>
              </LinkRoll>

              <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
              <Link to="/transitional-housing">
                <div className='section1-card'>
                    <div className='section1-card-img'>
                        <img src={ SEO } alt="Transitional Housing" loading="lazy"/>
                    </div>
                    <div className='section1-card-caption'>
                        <h1>SEARCH ENGIINE OPTIMIZATION</h1>
                        <p>As a Google Partner we stay sharp on search engine optimization strategies and understand how to get your business ranked in the top listing pages. A terrific web design with rich content and effective SEO management will compel your visitors to take action.</p>

                        <div className='card-btn'>
                            <Link to="/contact">
                                <Fade bottom>
                                    <button>Contact Us</button>
                                </Fade>
                            </Link>
                        </div>


                    </div>
                </div>
              </Link>
              </LinkRoll>

              <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
              <Link to="/other-resources">
                <div className='section1-card'>
                    <div className='section1-card-img'>
                        <img src={ PenTool } alt="Other Resources" loading="lazy"/>
                    </div>
                    <div className='section1-card-caption'>
                        <h1>GRAPHIC DESIGN</h1>
                        <p>Looking to elevate your brand's visual identity? Our team of skilled graphic designers is here to turn your ideas into stunning visual creations. Whether you need a captivating logo, eye-catching marketing materials, or a complete brand overhaul, we've got you covered.</p>

                    <div className='card-btn'>
                        <Link to="/contact">
                            <Fade bottom>
                                <button>Contact Us</button>
                            </Fade>
                        </Link>
                    </div>

                    </div>
                </div>
              </Link>
              </LinkRoll>

              <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
              <Link to="/employment">
                <div className='section1-card'>
                    <div className='section1-card-img'>
                        <img src={ Maintenance } alt="hand shake" loading="lazy"/>
                    </div>
                    <div className='section1-card-caption'>
                        <h1>WEBSITE MAINTENANCE</h1>
                        <p>Is your website in need of regular updates, security checks, and technical support? Our dedicated team of experts is here to ensure your online presence remains seamless and secure.</p>

                        <div className='card-btn'>
                            <Link to="/contact">
                                <Fade bottom>
                                    <button>Contact Us</button>
                                </Fade>
                            </Link>
                        </div>

                    </div>
                </div>
              </Link>
              </LinkRoll>


        </div>

      </div>
    </>
  )
}

export default Section1
