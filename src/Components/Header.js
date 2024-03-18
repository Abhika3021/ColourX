import Img from '../images/logo.png';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import HomeIcon from '@mui/icons-material/Home';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import MenuIcon from '@mui/icons-material/Menu';
const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    return (
        <>
            <header>
                {/* navbar for bigscreen */}
                <div className='container-fluid '>
                    <div className='laptop'>
                    <div className='laptop-logo'>
                        <img src={Img} alt='Logo' style={{ height: '50px', width: '60px' }} />
                        <h2>ColourX</h2>
                    </div>
                    <nav>
                        <div className='header-links-laptop nav'>
                            <Link to='/' className='nav-link'>Home</Link>
                            <Link to='/about-us' className='nav-link'>About us</Link>
                            <Link to='/services' className='nav-link'>Services</Link>
                            <Link to='/contact-us' className='nav-link'>Contact us</Link>
                        </div>
                    </nav>
                    </div>
                </div>

                {/* Navbar for small screen */}
                <div className='container-fluid mobile'>
                    <nav className='navbar'>
                        <div className="navbar-toggle" onClick={toggleMenu}>
                            <div className='menu-icon'>{isOpen ? <ArrowBackIosIcon /> : <MenuIcon sx={{fontSize: 35}}/>}</div>
                        </div>
                        <div className='navbar-head'>
                        <h2>ColourX</h2>
                        </div>
                        <div className='navbar-home' >
                            <Link to='/'><HomeIcon sx={{fontSize: 35}} /></Link>
                        </div>
                        <div className={`navbar-items ${isOpen ? 'active' : ''}`}>
                            <Link to='/' className='navbar-item' onClick={toggleMenu}>Home</Link>
                            <Link to='/about-us' className='navbar-item' onClick={toggleMenu}>About us</Link>
                            <Link to='/services' className='navbar-item' onClick={toggleMenu}>Services</Link>
                            <Link to='/contact-us' className='navbar-item' onClick={toggleMenu}>Contact us</Link>
                        </div>
                    </nav>
                </div>

            </header>

            <div id="shopify-section-theme-benefits" class="shopify-section">

                <div id="benefits">
                    <div id="benefitsInner" class="container">
                        <div class="benefitItem">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.25781 15.7422C3.53906 15.0234 4.01563 13.5156 3.64844 12.6328C3.28125 11.75 1.875 10.9766 1.875 10C1.875 9.02344 3.26563 8.28125 3.64844 7.36719C4.03125 6.45313 3.53906 4.97656 4.25781 4.25781C4.97656 3.53906 6.48438 4.01563 7.36719 3.64844C8.25 3.28125 9.02344 1.875 10 1.875C10.9766 1.875 11.7187 3.26563 12.6328 3.64844C13.5469 4.03125 15.0234 3.53906 15.7422 4.25781C16.4609 4.97656 15.9844 6.48438 16.3516 7.36719C16.7188 8.25 18.125 9.02344 18.125 10C18.125 10.9766 16.7344 11.7187 16.3516 12.6328C15.9688 13.5469 16.4609 15.0234 15.7422 15.7422C15.0234 16.4609 13.5156 15.9844 12.6328 16.3516C11.75 16.7188 10.9766 18.125 10 18.125C9.02344 18.125 8.28125 16.7344 7.36719 16.3516C6.45313 15.9688 4.97656 16.4609 4.25781 15.7422Z" stroke="#120A0A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M13.4375 8.125L8.85156 12.5L6.5625 10.3125" stroke="#120A0A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                            7+ year experience
                        </div>
                        <div class="benefitItem">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.75 6.25001H17.0781C17.2026 6.2492 17.3245 6.28608 17.4277 6.35579C17.5309 6.42551 17.6105 6.52481 17.6562 6.64064L18.75 9.37501" stroke="#120A0A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M1.25 11.25H13.75" stroke="#120A0A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M14.6875 16.875C15.723 16.875 16.5625 16.0355 16.5625 15C16.5625 13.9645 15.723 13.125 14.6875 13.125C13.652 13.125 12.8125 13.9645 12.8125 15C12.8125 16.0355 13.652 16.875 14.6875 16.875Z" stroke="#120A0A" stroke-width="1.5" stroke-miterlimit="10"></path>
                                <path d="M5.3125 16.875C6.34803 16.875 7.1875 16.0355 7.1875 15C7.1875 13.9645 6.34803 13.125 5.3125 13.125C4.27697 13.125 3.4375 13.9645 3.4375 15C3.4375 16.0355 4.27697 16.875 5.3125 16.875Z" stroke="#120A0A" stroke-width="1.5" stroke-miterlimit="10"></path>
                                <path d="M12.8125 15H7.1875" stroke="#120A0A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M3.4375 15H1.875C1.70924 15 1.55027 14.9342 1.43306 14.8169C1.31585 14.6997 1.25 14.5408 1.25 14.375V5.625C1.25 5.45924 1.31585 5.30027 1.43306 5.18306C1.55027 5.06585 1.70924 5 1.875 5H13.75V13.375" stroke="#120A0A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M13.75 9.375H18.75V14.375C18.75 14.5408 18.6842 14.6997 18.5669 14.8169C18.4497 14.9342 18.2908 15 18.125 15H16.5625" stroke="#120A0A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                            Promised Timely Delivery
                        </div>
                        <div class="benefitItem">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 16.875C10 16.875 2.1875 12.5 2.1875 7.18751C2.1875 6.24836 2.51289 5.33821 3.1083 4.61193C3.70371 3.88564 4.53236 3.38808 5.45328 3.2039C6.37419 3.01971 7.33047 3.16029 8.15942 3.6017C8.98838 4.04311 9.63879 4.7581 10 5.62501C10.3612 4.7581 11.0116 4.04311 11.8406 3.6017C12.6695 3.16029 13.6258 3.01971 14.5467 3.2039C15.4676 3.38808 16.2963 3.88564 16.8917 4.61193C17.4871 5.33821 17.8125 6.24836 17.8125 7.18751C17.8125 12.5 10 16.875 10 16.875Z" stroke="#120A0A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                            1000+ Delivered project
                        </div>
                        <div class="benefitItem">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.3434 14.8985L14.2809 17.3985C14.7887 17.7188 15.4137 17.2422 15.2653 16.6563L14.1246 12.1719C14.0938 12.0476 14.0987 11.9171 14.1388 11.7955C14.1789 11.6738 14.2525 11.566 14.3512 11.4844L17.8824 8.53908C18.3434 8.15627 18.109 7.38283 17.5074 7.34377L12.8981 7.04689C12.7723 7.03958 12.6514 6.99578 12.5501 6.92086C12.4488 6.84594 12.3716 6.74314 12.3278 6.62502L10.609 2.29689C10.5635 2.17182 10.4806 2.06377 10.3716 1.98742C10.2626 1.91107 10.1327 1.87012 9.99963 1.87012C9.86654 1.87012 9.73667 1.91107 9.62765 1.98742C9.51863 2.06377 9.43575 2.17182 9.39025 2.29689L7.6715 6.62502C7.6277 6.74314 7.55044 6.84594 7.44915 6.92086C7.34787 6.99578 7.22696 7.03958 7.10119 7.04689L2.49182 7.34377C1.89026 7.38283 1.65588 8.15627 2.11682 8.53908L5.64807 11.4844C5.74677 11.566 5.8204 11.6738 5.86048 11.7955C5.90057 11.9171 5.90547 12.0476 5.87463 12.1719L4.81994 16.3281C4.64026 17.0313 5.39026 17.6016 5.99182 17.2188L9.65588 14.8985C9.75863 14.8331 9.87787 14.7984 9.99963 14.7984C10.1214 14.7984 10.2406 14.8331 10.3434 14.8985V14.8985Z" stroke="#120A0A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                            Highly Professional Team
                        </div>
                    </div>
                </div>

            </div>
        </>

    )
}

export default Header