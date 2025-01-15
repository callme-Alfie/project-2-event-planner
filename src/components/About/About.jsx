import React from 'react'
import NavBar from '../Navbar/NavBar'
import './About.css'
// import Footer from '../Footer/Footer';
import { FaBusSimple } from "react-icons/fa6";
import { BiWorld } from "react-icons/bi";
import { FaHotel } from "react-icons/fa6";
import { FaUserClock } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import '../AboutFooter/AFooter';
import { useEffect } from "react";


const About = () => {
  useEffect(() => {
    document.title = "About";
}, []);
  return (
    <div>
      
      <div className="home-div">
        <span className="about-txt">About Us </span>
      </div>
      <div className="next-section">
        <div className="next-sect1">
        <FaBusSimple  className="bus"/>
          <span className="private">Private Transportation</span>
          <span className="text1">Far far away, behind the world <br /> moutains, 
          far from the countries <br />Vokalia</span>
        </div>
        <div className="next-sect2">
        <BiWorld  className="world"/>
        <span className="diverse">Diverse Destinations</span>
          <span className="text2">Far far away, behind the world <br /> moutains, 
          far from the countries <br />Vokalia</span>
        </div>
        <div className="next-sect3">

        <span className="great">Great Hotels</span>
        <FaHotel className="hotel"/>
          <span className="text3">Far far away, behind the world <br /> moutains, 
          far from the countries <br />Vokalia</span>
        </div>
        <div className="next-sect4">
        <FaUserClock className="clock"/>
        <span className="fast">Fast Booking</span>
          <span className="text4">Far far away, behind the world <br /> moutains, 
          far from the countries <br />Vokalia</span>
        </div>
      </div>
      <div className="big-picture-div2"></div>
<div className="small-picture-div2"></div>
      <div className="about-div2">
  <div className="about-us-line-div2"></div>
   <span className="about-us2">About us</span>
  <span className="plan2">Plan Your <b>Trip</b> with Us</span>
  <span className="plan-description2">Far far away, behind the word mountains, far from the countries Vokalia and<br />
     Consonantia, there live the blind texts. Separated they live in<br />
      Bookmarksgrove right at the coast of the Semantics, a large language ocean. <br />
      A small river named Duden flows by their place and supplies it with the<br />
       necessary regelialia. It is a paradisematic country, in which roasted parts of<br />
        sentences fly into your mouth. Even the all-powerful Pointing has no control<br />
         about the blind texts it is an almost unorthographic. Italic Mountains, she<br />
          had a last view back on the skyline</span>
  <div className="read-more-btn2">
    <span className="read-more-txt2">READ MORE</span>
  </div>
</div>
<div className="bookmarksgrove-div">
  <div className="bookmarks-pic"></div>
  <span className="btext1">Bookmarksgrove, the headline<br /> of Alphabet Village sunline</span>
  <span className="btext2">Far far away, behind the word mountains, far from the countries Vokalia<br />
     and Consonantia, there live the blind texts. Separated they live in<br />
      Bookmarksgrove right at the coast of the Semantics.</span>

      <div className="shape1"></div>
      <FaCheck className="check1" />
      <span className="btext3">Far far away, behind the word<br /> mountains.</span>

      <div className="shape2"></div>
      <FaCheck  className="check2"/>
      <span className="btext4">Countries Vokalia and <br />Consonantia, there live.</span>

      <div className="shape3"></div>
      <FaCheck  className="check3"/>
      <span className="btext5">Separated they live in<br /> Bookmarksgrove right.</span>

      <div className="shape4"></div>
      <FaCheck className="check4"/>
      <span className="btext6">The coast of the Semantics.</span>

      <div className="shape5"></div>
      <FaCheck  className="check5" />
      <span className="btext7">Word mountains, far from the<br /> countries Vokalia.</span>
</div>
<div className="alphabet-div">
  <span className="alpha-txt1">The headline of Alphabet subline</span>
  <span className="alpha-txt2">Far far away, behind the word mountains, far from the countries Vokalia and<br /> 
    Consonantia, there live the blind texts. Separated they live in Bookmarksgrove <br />
    right at the coast of the Semantics, a large language ocean. A small river named <br />
    Duden flows by their place and supplies it with the necessary regelialia. It is a <br />
    paradisematic country blind text by the name of Lorem Ipsum decided to leave<br />
     for the far World of Grammar.</span>

     <span className="accomodation">Accomodation</span>
     <div className="accom-div1"></div>
     <div className="accom-div">
     </div>

     <span className="destin">Destination</span>
     <div className="destin-div"></div>
     <div className="destin-div1"></div>

     <span className="meals">Meals</span>
     <div className="meals-div1"></div>
     <div className="meals-div"></div>

     <span className="transport">Transport</span>
     <div className="transport-div1"></div>
     <div className="transport-div"></div>
</div>
<div className="holiday-planner-section-about">
    <div className="instagram-line"></div>
    <span className="instatxt">Instagram</span>
    <span className="holiday">Holiday Planners</span>
    <div className="photo-section">
    <div className="section1">
    <img src="https://html.geekcodelab.com/holiday-planners/assets/images/instagram-image5.jpg" alt="beach" className="blog-img2" />
    </div>
    <div className="section2">
    <img src="https://html.geekcodelab.com/holiday-planners/assets/images/instagram-image4.jpg" alt="beach" className="blog-img2" />
    </div>
    <div className="section3">
    <img src="https://html.geekcodelab.com/holiday-planners/assets/images/instagram-image2.jpg" alt="beach" className="blog-img2" />
    </div>
    <div className="section4">
    <img src="https://html.geekcodelab.com/holiday-planners/assets/images/instagram-image6.jpg" alt="beach" className="blog-img2" />
    </div>
    <div className="section5">
    <img src="https://html.geekcodelab.com/holiday-planners/assets/images/instagram-image1.jpg" alt="beach" className="blog-img2" />
    </div>
    <div className="section6">
    <img src="https://html.geekcodelab.com/holiday-planners/assets/images/instagram-image3.jpg" alt="beach" className="blog-img2" />
    </div>
    <div className="section7"></div>
    </div>
  </div>


    </div>
  )
}

export default About
