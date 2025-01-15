import React, { useState, useEffect } from 'react';
import { FaFacebookF, FaTwitter, FaPhoneAlt, FaInstagram } from "react-icons/fa";
import { MdMailOutline } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { VscThreeBars } from "react-icons/vsc";
import { useNavigate } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);

  // Scroll event handler
  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolled(true); // Add the sticky effect after scrolling 100px
    } else {
      setScrolled(false); // Remove the sticky effect when scrolling back up
    }
  };

  useEffect(() => {
    // Add event listener on mount
    window.addEventListener('scroll', handleScroll);

    // Clean up event listener on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleIconClick = () => {
    navigate('/navpage'); // Navigate to the NavPage component
  };

  return (
    <div>
      <div className="nav-bar1">
        <MdMailOutline className="mail-icon" />
        <span className="holiday-email">Holiday planners@gmail.com</span>
        <FaPhoneAlt className="phone-icon" />
        <span className="holiday-contact">+123 456 7890</span>
        <FaFacebookF className="facebook-icon" />
        <FaInstagram className="instagram-icon" />
        <FaTwitter className="twitter-icon" />
      

      <div className={`navbar-main ${scrolled ? 'scrolled' : ''}`}>
        <div className="reserve-btn">
          <span className="reserve-txt">Reserve</span>
        </div>
        <div className="three-bar">
          <IoSearch className="search-icon-main" />
          <VscThreeBars className="three-bar-icon" onClick={handleIconClick} />
          <div className="search-icon-shape"></div>
          <div className="logo"></div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default NavBar;
