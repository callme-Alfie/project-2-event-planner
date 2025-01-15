import React from 'react'
import { IoLogoTwitter } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import './AFooter.css';


function AFooter() {
    return (
        <div>
            <div className="Afooter">
                <div className="Afirst-section-div">
                    <div className="logo-div5"></div>
                    <div className="Aholiday-discription">
                        <span>Holiday Planners sit amet consectetur adipisicing,<br />
                            elit. Perferendis sapiente tenetur officiis explicabo <br />
                            fugit, sit mollitia eum atque excepturi quaerat <br />
                            autem.</span>
                    </div>
                    <div className="Aemail-section">
                        <input type="text" placeholder='Enter your Email' className="Aemail-box" />
                        <div className="Asubmit-btn">
                            <span className="Asubmit-txt">SUBMIT</span>
                        </div>
                    </div>
                    <div className="Apayment-method1"></div>
                    <div className="Apayment-method2"></div>
                    <div className="Apayment-method3"></div>
                    <div className="Apayment-method4"></div>
                </div>
                <div className="Amiddle-section-div">
                    <span className="Anav-txt">Navigation</span>
                    <div className="Astraight-line-div"></div>
                    <ul className="list">
                        <li>Home</li>
                        <li>About</li>
                        <li>Destination</li>
                        <li>Tour</li>
                        <li>Blog</li>
                        <li>Contact us</li>
                    </ul>
                </div>
                <div className="Alast-section-div">
                    <div className="Astraight-line-div2"></div>
                    <span className="Aneed-help">Need Help ?</span>

                    <div className="Acall-us-line"></div>
                    <span className="Acall">Call Us</span>
                    <span className="Anumber">+1234567890</span>

                    <div className="Aemail-for-us-line"></div>
                    <span className="Aemail">Email for Us</span>
                    <span className="Aemail2">holidayplanners@gmail.com</span>

                    <div className="Alocation-line"></div>
                    <span className="Alocation">Location</span>
                    <span className="Alocation2">Main Street, Victoria 8007.</span>

                    <div className="Afollow-us-line"></div>
                    <span className="Afollow">Follow us</span>
                    <FaFacebookF className="Afacebook-icon2" />
                    <IoLogoInstagram className="Ainstagram-icon2" />
                    <IoLogoTwitter className="Atwitter-icon2" />

                </div>

            </div>
            <div className="Astraight-line"></div>
            <span className="Acopyright">Copyright 2020 Alfie Code Lab. All Rightd Reserved.</span>
            <span className="Aprivacy">Privacy | Terms of Use | Cookie Policy</span>
        </div>
    );
}

export default AFooter
