import React from 'react'
import { IoLogoTwitter } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import './Footer.css'

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="first-section-div">
          <div className="logo-div5"></div>
          <div className="holiday-discription">
            <span>Holiday Planners sit amet consectetur adipisicing,<br />
              elit. Perferendis sapiente tenetur officiis explicabo <br />
              fugit, sit mollitia eum atque excepturi quaerat <br />
              autem.</span>
          </div>
          <div className="email-section">
            <input type="text" placeholder='Enter your Email' className="email-box" />
            <div className="submit-btn">
              <span className="submit-txt">SUBMIT</span>
            </div>
          </div>
          <div className="payment-method1"></div>
          <div className="payment-method2"></div>
          <div className="payment-method3"></div>
          <div className="payment-method4"></div>
        </div>
        <div className="middle-section-div">
          <span className="nav-txt">Navigation</span>
          <div className="straight-line-div"></div>
          <ul className="list">
            <li>Home</li>
            <li>About</li>
            <li>Destination</li>
            <li>Tour</li>
            <li>Blog</li>
            <li>Contact us</li>
          </ul>
        </div>
        <div className="last-section-div">
          <div className="straight-line-div2"></div>
          <span className="need-help">Need Help ?</span>

          <div className="call-us-line"></div>
          <span className="call">Call Us</span>
          <span className="number">+1234567890</span>

          <div className="email-for-us-line"></div>
          <span className="email">Email for Us</span>
          <span className="email2">holidayplanners@gmail.com</span>

          <div className="location-line"></div>
          <span className="location">Location</span>
          <span className="location2">Main Street, Victoria 8007.</span>

          <div className="follow-us-line"></div>
          <span className="follow">Follow us</span>
          <FaFacebookF className="facebook-icon2"/>
          <IoLogoInstagram  className="instagram-icon2"/>
          <IoLogoTwitter  className="twitter-icon2"/>

        </div>

      </div>
      <div className="straight-line"></div>
        <span className="copyright">Copyright 2020 Alfie Code Lab. All Rightd Reserved.</span>
        <span className="privacy">Privacy | Terms of Use | Cookie Policy</span>
    </div>
  )
}

export default Footer
