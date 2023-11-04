import React, { useState } from 'react'
import {NavLink, Link} from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'
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
                                <li> <NavLink onClick={toggleClass} activeClassName='is-active'  to={`/depression`}> Web Design </NavLink> </li>
                                <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/anxiety`}> Website and Maintenance </NavLink> </li>
                                <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/panic-disorder`}> eCommerce </NavLink> </li>
                                <li> <NavLink onClick={toggleClass} activeClassName='is-active'  to={`/acute-stress-disorder`}> Graphic Design </NavLink> </li>
                                <li> <NavLink onClick={toggleClass} activeClassName='is-active'  to={`/acute-stress-disorder`}> Search Engine Optimization </NavLink> </li>
                            </ul>
                    </li>
                    <li><Link to='/about-us'>About Us</Link></li>
                    <li><Link to='/Portfolio'>Portfolio</Link></li>
                    <li><Link to='/contact'>Contact Us</Link></li>
                </ul>

                <div className="hamburger" onClick={handleNav}>
                    {!nav ? (<FaBars className='icon' />) : (<FaTimes className='icon' />)}
                </div>



            </div>
        </div>
    )
}

export default Navbar
