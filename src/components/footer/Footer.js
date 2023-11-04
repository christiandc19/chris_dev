import React from 'react'
import {Link} from 'react-router-dom'
import { BsFillArrowUpCircleFill } from 'react-icons/bs'
import logo from '../../assets/fontrow_logo.png'
import './FooterStyles.css'

import { Link as LinkRoll } from 'react-scroll'

const Footer = () => {
    return (

<> 
        <div className='footer'>

            <div className="footer-content container">

                <div className="top">
                    <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500} >
                        <Link to='/'>
                    <div className="logo-footer">
                        <img src={logo} alt="Logo" loading="lazy"/>
                    </div>
                    </Link>
                        </LinkRoll>

                    <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500} >
                        <BsFillArrowUpCircleFill className='footer-icon' />
                    </LinkRoll>
                </div>


                <div className="col-container">

                    <div className="column">
                        <h3>Company</h3>

                        <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500} >
                        <Link to='/'><p>Home</p></Link>
                        </LinkRoll>

                        <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500} >
                        <Link to='/about-us'><p>About Us</p></Link>
                        </LinkRoll>

                        <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500} >
                        <Link to='/our-mission'><p>Our Mission</p></Link>
                        </LinkRoll>
                    </div>


                    <div className="column">
                        <h3>Navigation</h3>

                        <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500} >
                        <Link to='/employment'><p>Employment Assistance</p></Link>
                        </LinkRoll>

                        <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500} >
                        <Link to='/transitional-housing'><p>Transitional Housing</p></Link>
                        </LinkRoll>

                        <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500} >
                        <Link to='/other-resources '><p>Other Resources</p></Link>
                        </LinkRoll>
                    </div>


                    <div className="column">
                        <h3>Contact Us</h3>
                        <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500} >
                        <Link to='/los-angeles'><p><a href="tel:8182721022">  (818) 272-1022</a></p></Link>
                        </LinkRoll>

                        <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500} >
                        <Link to='/'><p>Torrance Ave. <br/>Torrance, CA 90028</p></Link>
                        </LinkRoll>
                    </div>


                </div>

                <div className='copyright'>
                    <p>&copy; 2023 Fontrow Web Services. All rights reserved</p>
                </div>

            </div>

        </div>
</>
    )
}

export default Footer
