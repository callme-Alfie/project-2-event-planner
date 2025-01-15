import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import './NavPage.css'
import { Link } from 'react-router-dom';
import { IoIosCloseCircleOutline } from "react-icons/io";


const NavPage = () => {
  
  return (
    <div className="slide-in">
      <div className="main-div">
        <div className="logo-div"></div>
        <div className="links-div">
            <span className="home">Home</span>
          
            <Link to ="/" className="home">Home</Link>
            <Link to ="/about" className="about">About</Link>
            <Link to ="/destination" className="destination">Destination</Link>
            <Link to ="/blog" className="blog">Blog</Link>
            <Link to ="/contact" className="contact">Contact us</Link>


            
            <span className="tour">Tour</span>
            
            
        </div>
        <div className="social-media-div">
        <FaFacebookF className="fb" />
        <div className="circle1"></div>

        <FaInstagram  className="insta"/>
        <div className="circle2"></div>

        <FaTwitter  className="tw"/>
        <div className="circle3"></div>
        </div>
        <div className="background-logo"></div>
        <div className="cancel-div">
            
      
            <IoIosCloseCircleOutline className="closebutton" 
            onClick={() => window.history.back()} />
            </div>
      </div>
    </div>
  )
}

export default NavPage
