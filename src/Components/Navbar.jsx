import React, { useState } from 'react';
import logo from '../Images/logo.png';
function Navbar() {
    const [nav, setNav] = useState(false);
    const [activeMenuItem, setActiveMenuItem] = useState('Home'); // State to track active menu item

    const changeBackground = () => {
        if (window.scrollY >= 50) {
            setNav(true);
        } else {
            setNav(false);
        }
    }

    const handleMenuClick = (menuItem) => {
        setActiveMenuItem(menuItem);
    }

    window.addEventListener('scroll', changeBackground);

    return (
        <nav className={nav ? 'nav active' : 'nav'}>
            <a href='#' className='logo'>
                <img src={logo} alt='' />
            </a>
            <input type='checkbox' className='menu-btn' id='menu-btn' />
            <label className='menu-icon' htmlFor='menu-btn'>
                <span className='nav-icon'></span>
            </label>
            <ul className='menu'>
                <li><a href='/' className={activeMenuItem === 'Home' ? 'active' : ''} onClick={() => handleMenuClick('Home')}>Home</a></li>
                <li><a href='#abouts' className={activeMenuItem === 'AboutUs' ? 'active' : ''} onClick={() => handleMenuClick('Games')}>About Us</a></li>
                <li><a href='#features' className={activeMenuItem === 'Portfolio' ? 'active' : ''} onClick={() => handleMenuClick('Service')}>Services</a></li>
                <li><a href='/privacy' className={activeMenuItem === 'Pricing' ? 'active' : ''} onClick={() => handleMenuClick('Privacy Policy')}>Our Team</a></li>
                <li><a href='#contacts' className={activeMenuItem === 'Careers' ? 'active' : ''} onClick={() => handleMenuClick('Terms & Condition')}>Contact Us</a></li>
            </ul>
        </nav>
    )
}

export default Navbar;

