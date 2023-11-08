import React, { useState } from 'react'
import {NavLink, Link} from 'react-router-dom'
import { FaTimes } from 'react-icons/fa'
import { BiMenuAltRight } from 'react-icons/bi'

import logo from '../../assets/fontrow_logo_wh.png'
import {BsFillCaretDownFill } from "react-icons/bs";

import './NavbarStyles.css'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleNav = () => setNav(!nav)

    const [isMenu, setisMenu] = useState(false);


    const toggleClass = () => {
        setisMenu(isMenu === false ? true : false);
    };

    let boxClass = ["main-menu menu-right menuq1"];
    if(isMenu) {
        boxClass.push('menuq2');
    }else{
        boxClass.push('');
    }

    const [isMenuSubMenu, setMenuSubMenu] = useState(false);
      
    const toggleSubmenu = () => {
      setMenuSubMenu(isMenuSubMenu === false ? true : false);
    };
    
    let boxClassSubMenu = ["sub__menus"];
    if(isMenuSubMenu) {
        boxClassSubMenu.push('sub__menus__Active');
    }else {
        boxClassSubMenu.push('');
    }



    return (
        <div name='top' className='navbar'>
            <div className="navbar-container container">
                
                 <div className="navbar-logo">
                    <Link to='/'>
                    <img src={logo} alt="Logo" loading="lazy"/>
                    </Link>
                </div>



                <ul className={nav ? 'nav-menu active' : 'nav-menu'}>

                    <li><Link to='/'>Home</Link></li>

                    <li onClick={toggleSubmenu} className="menu-item sub__menus__arrows" > <Link to="/"> Services<BsFillCaretDownFill /> </Link>
                    <ul className={boxClassSubMenu.join(' ')} id='submenu-item'> 
                                <li> <NavLink onClick={toggleClass} activeClassName='is-active'  to={`/web-design`}> Web Design and Maintenance</NavLink> </li>
                                <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/wix-professional-design`}> Professional WIX Design </NavLink> </li>
                                <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/ecommerce`}> eCommerce </NavLink> </li>
                                <li> <NavLink onClick={toggleClass} activeClassName='is-active'  to={`/graphic-design`}> Graphic Design </NavLink> </li>
                                <li> <NavLink onClick={toggleClass} activeClassName='is-active'  to={`/search-engine-optimization`}> Search Engine Optimization </NavLink> </li>
                            </ul>
                    </li>
                    <li><Link to='/about-us'>About Us</Link></li>
                    <li><Link to='/portfolio'>Portfolio</Link></li>
                    <li><Link to='/contact'>Contact Us</Link></li>
                </ul>

                <div className="hamburger" onClick={handleNav}>
                    {!nav ? (<BiMenuAltRight className='icon-bar' />) : (<FaTimes className='icon' />)}
                </div>



            </div>
        </div>
    )
}

export default Navbar
