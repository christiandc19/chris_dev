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
                        <Link to='/contact'><p>Contact Us</p></Link>
                        </LinkRoll>
                    </div>


                    <div className="column">
                        <h3>Web Solutions</h3>

                        <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500} >
                        <Link to='/web-design'><p>Web Design and Maintenance</p></Link>
                        </LinkRoll>

                        <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500} >
                        <Link to='/wix-professional-design'><p>Wix Professional Website</p></Link>
                        </LinkRoll>

                        <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500} >
                        <Link to='/ecommerce'><p>eCommerce</p></Link>
                        </LinkRoll>
                    </div>


                    <div className="column">
                        <h3>Services</h3>

                        <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500} >
                        <Link to='/'><p>Graphic Designs</p></Link>
                        </LinkRoll>

                        <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500} >
                        <Link to='/'><p>Search Engine Optimization</p></Link>
                        </LinkRoll>

                        <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500} >
                        <Link to='/'><p>Photography</p></Link>
                        </LinkRoll>

                    </div>


                </div>

                <div className='copyright'>
                    <p>&copy; 2023 Fontrow Web Solutions. All rights reserved</p>
                </div>

            </div>

        </div>
</>
    )
}

export default Footer
