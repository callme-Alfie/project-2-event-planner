import React from 'react'
import { IoLogoTwitter } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import './DFooter.css';


function DFooter() {
    return (
        <div>
            <div className="Dfooter">
                <div className="Dfirst-section-div">
                    <div className="logo-div5"></div>
                    <div className="Dholiday-discription">
                        <span>Holiday Planners sit amet consectetur adipisicing,<br />
                            elit. Perferendis sapiente tenetur officiis explicabo <br />
                            fugit, sit mollitia eum atque excepturi quaerat <br />
                            autem.</span>
                    </div>
                    <div className="Demail-section">
                        <input type="text" placeholder='Enter your Email' className="Demail-box" />
                        <div className="Dsubmit-btn">
                            <span className="Dsubmit-txt">SUBMIT</span>
                        </div>
                    </div>
                    <div className="Dpayment-method1"></div>
                    <div className="Dpayment-method2"></div>
                    <div className="Dpayment-method3"></div>
                    <div className="Dpayment-method4"></div>
                </div>
                <div className="Dmiddle-section-div">
                    <span className="Dnav-txt">Navigation</span>
                    <div className="Dstraight-line-div"></div>
                    <ul className="list">
                        <li>Home</li>
                        <li>About</li>
                        <li>Destination</li>
                        <li>Tour</li>
                        <li>Blog</li>
                        <li>Contact us</li>
                    </ul>
                </div>
                <div className="Dlast-section-div">
                    <div className="Dstraight-line-div2"></div>
                    <span className="Dneed-help">Need Help ?</span>

                    <div className="Dcall-us-line"></div>
                    <span className="Dcall">Call Us</span>
                    <span className="Dnumber">+1234567890</span>

                    <div className="Demail-for-us-line"></div>
                    <span className="Demail">Email for Us</span>
                    <span className="Demail2">holidayplanners@gmail.com</span>

                    <div className="Dlocation-line"></div>
                    <span className="Dlocation">Location</span>
                    <span className="Dlocation2">Main Street, Victoria 8007.</span>

                    <div className="Dfollow-us-line"></div>
                    <span className="Dfollow">Follow us</span>
                    <FaFacebookF className="Dfacebook-icon2" />
                    <IoLogoInstagram className="Dinstagram-icon2" />
                    <IoLogoTwitter className="Dtwitter-icon2" />

                </div>

            </div>
            <div className="Dstraight-line"></div>
            <span className="Dcopyright">Copyright 2020 Alfie Code Lab. All Rightd Reserved.</span>
            <span className="Dprivacy">Privacy | Terms of Use | Cookie Policy</span>
        </div>
    );
}

export default DFooter
