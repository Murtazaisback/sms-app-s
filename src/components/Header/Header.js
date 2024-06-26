'use client'
import { Logo } from '../../public'
import { Img } from 'react-image';
import { NavLink } from 'react-router-dom';
import React, { useEffect, useState } from 'react'

import './index.css'
import { BsX, BsList } from 'react-icons/bs'
import { FaChevronDown } from 'react-icons/fa'



const Header = () => {
    const [selectedLink, setSelectedLink] = useState('/'); // Initial selected link is '/'
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);


    const links = [
        { path: '/', text: 'Home' },
        { path: '/Pricing', text: 'Pricing' },
        { path: '/EventsPage', text: 'EVENTS' },
        { path: '/SmsSign', text: 'Login', className: 'login-button pc_none' },
        { path: '/NewEvent', text: 'CREATE EVENT', className: 'li_active' },
    ];

    useEffect(() => {
        const handleScroll = () => {
            console.log('Scrolling...');
            const scrollPosition = window.scrollY;
            setIsScrolled(scrollPosition >= 75); // Adjust this threshold if needed
        };
    
        // Attach the event listener to the window
        window.addEventListener('scroll', handleScroll);
    
        // Cleanup: Remove the event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []); 

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };
    const [isDropdownVisible, setDropdownVisible] = useState(false);

    const toggleDropdown = () => {
        setDropdownVisible(!isDropdownVisible);
    };

    useEffect(() => {
        // Update selectedLink when the component mounts to reflect the initial URL
        setSelectedLink(window.location.pathname);
    }, []);

    const addYellowCrrClass = (path) => {
        return selectedLink === path ? 'yellow_crr' : '';
    };

    const handleLinkClick = (path) => {
        setSelectedLink(path);
        // Add additional logic for any other actions when a link is clicked
    };



    return (
        <nav className={isScrolled ? 'scrolled' : ''}>
            <a href="/">
                <img src={Logo} alt='logo' className='logo_nav' />
            </a>


            <button onClick={toggleMenu} className="menu-btn">
            <input class="checkbox7" type="checkbox" name="" id="" />
                {/* {isOpen ? <BsX className="icon_i" /> : <BsList className="icon_i" />} */}
            <div class="hamburger-lines">
              <span class="line line1"></span>
              <span class="line line2"></span>
              <span class="line line3"></span>
            </div>
            </button>
            <div className={`menu ${isOpen ? 'open' : ''}`}>
                <ul className="navs-links">
                    <li><a href='/' className={addYellowCrrClass('/')}>Home</a></li>
                    <li><a href='/Pricing' className={addYellowCrrClass('/Pricing')}>Pricing</a></li>
                    <li><a href='/SendMessage' className={addYellowCrrClass('/SendMessage')}>SMS Campaigns</a></li>
                    <li><a href='/SmsSign' className={`login-button pc_none ${addYellowCrrClass('/SmsSign')}`}>Login</a></li>
                    {/* <li><a href='/SendMessage' className={`li_active ${addYellowCrrClass('/SendMessage')}`}>CREATE EVENT</a></li> */}
                </ul>
            </div>
            <div className='dropdwon_custom_warp' style={{ display: "none" }}>
                <p className='dropdwon_custom' onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
                    Hover over me
                    <FaChevronDown className="dropdwon_custom_i" />
                </p>
                {isDropdownVisible && (
                    <div className="dropdownStyles">
                        <ul>
                            <a href="/Dashboard">Dashboard</a>
                            <a href="/NewEvent">Create an Event</a>
                            <a href="/Events">Events</a>
                            <a href="/settingdash">Settings</a>
                            <a href="/SmsCampaigns">SMS Campaigns</a>
                            <a href="/myaccount">My Account</a>
                        </ul>
                    </div>
                )}
            </div>

            <a href="/SmsSign" className="login-button  res_none" onClick={closeMenu}>Login</a>
        </nav>
    )
}

export default Header










