import React, { useState, useRef } from 'react';
import './Navbar.css';
import logo from '../../Assets/Logo_3.png';
import underline from '../../Assets/theme_underline2.png';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import more from '../../Assets/more.png';  // The hamburger icon (open icon)
import close_dark from '../../Assets/x-mark.png';  // The close icon

const Navbar = () => {
  const [menu, setMenu] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);  // New state to track menu open/close
  const menuref = useRef();

  const openMenu = () => {
    menuref.current.style.right = '0'; // Open the menu
    setIsMenuOpen(true);  // Set the menu to open
  };

  const closeMenu = () => {
    menuref.current.style.right = '-350px'; // Close the menu
    setIsMenuOpen(false);  // Set the menu to closed
  };

  return (
    <div className="navbar">
      <img src={logo} alt="" />
      
      {/* If the menu is open, show close icon, else show more (hamburger) icon */}
      <img
        src={isMenuOpen ? close_dark : more}
        alt=""
        className={isMenuOpen ? 'nav-mob-close' : 'nav-mob-open'}
        onClick={isMenuOpen ? closeMenu : openMenu}
      />

      <ul ref={menuref} className="nav-menu" style={{ marginLeft: '20px' }}>
        <li>
          <AnchorLink className="anchor-link" href="#home">
            <p onClick={() => setMenu('home')}>Home</p>
          </AnchorLink>
          {menu === 'home' ? <img style={{ width: '50px' }} src={underline} /> : null}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#about">
            <p onClick={() => setMenu('Aboutme')}>About Me</p>
          </AnchorLink>
          {menu === 'Aboutme' ? <img style={{ width: '50px' }} src={underline} /> : null}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#services">
            <p onClick={() => setMenu('Services')}>Services</p>
          </AnchorLink>
          {menu === 'Services' ? <img style={{ width: '50px' }} src={underline} /> : null}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#work">
            <p onClick={() => setMenu('Work')}>Portfolio</p>
          </AnchorLink>
          {menu === 'Work' ? <img style={{ width: '50px' }} src={underline} /> : null}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            <p onClick={() => setMenu('Contact')}>Contact</p>
          </AnchorLink>
          {menu === 'Contact' ? <img style={{ width: '50px' }} src={underline} /> : null}
        </li>
      </ul>
      <div className="nav-connect">
        <AnchorLink className="anchor-link" offset={50} href="#contact">
          Connect with Me
        </AnchorLink>
      </div>
    </div>
  );
};

export default Navbar;
