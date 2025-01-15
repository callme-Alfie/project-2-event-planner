import React from 'react'
// import React { useEffect } from 'react';
import "./Content.css"
import { IoLocationSharp } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";
import { FaFlag } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaClock } from "react-icons/fa6";
import { FaUserGroup } from "react-icons/fa6";
import HeroSlider from '../HeroSlider/HeroSlider';
import BackgroundVideo from '../BackgroundVideo/BackgroundVideo';
import { useEffect } from "react";
// import React, { useEffect, useState } from 'react';
import {useState} from 'react';








const Content = () => {
  useEffect(() => {
    document.title = "Home";
}, []);
  // useEffect(() => {
  //   const handleScroll = () => {
  //     const navbar = document.querySelector('.navigation-bar');
  //     if (navbar) {
  //       const sticky = navbar.offsetTop;

  //       if (window.pageYOffset > sticky) {
  //         navbar.classList.add('shrink');
  //       } else {
  //         navbar.classList.remove('shrink');
  //       }
  //     }
  //   };

  //   window.addEventListener('scroll', handleScroll);

  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);
  return (
    <div>
   <div className="hiome-image">

   <HeroSlider /> 

<div className="thae-world">

<div className="ticket-section-div">
<IoLocationSharp className="location-icon-main" /><input type="text" placeholder="Where To?" className="where-to-text"/>
<SlCalender className="calender-icon-main"/><input type="text" placeholder="When?" className="when-box"/>
<FaFlag className="flag-icon-main"/><input type="text" placeholder="Travel Type" className="travel-type"/>
  <div className="find-now-btn">
    <span className="find-now-txt">Find Now</span>
  </div>
</div>
</div>
</div>

<div className="big-picture-div"></div>
<div className="small-picture-div"></div>
<div className="about-div">
  <div className="about-us-line-div"></div>
   <span className="about-us">About us</span>
  <span className="plan">Plan Your <b>Trip</b> with Us</span>
  <span className="plan-description">Far far away, behind the word mountains, far from the countries Vokalia and<br />
     Consonantia, there live the blind texts. Separated they live in<br />
      Bookmarksgrove right at the coast of the Semantics, a large language ocean. <br />
      A small river named Duden flows by their place and supplies it with the<br />
       necessary regelialia. It is a paradisematic country, in which roasted parts of<br />
        sentences fly into your mouth. Even the all-powerful Pointing has no control<br />
         about the blind texts it is an almost unorthographic. Italic Mountains, she<br />
          had a last view back on the skyline</span>
  <div className="read-more-btn">
    <span className="read-more-txt">READ MORE</span>
  </div>
</div>
<BackgroundVideo /> 
<div className="v-ideo-section-div">
{/* <video autoPlay loop muted className="background-video">
         <source src="./highlight-video.mp4" type="video/mp4" /> 
        
      </video> */}
  {/* <span className="traveling-highlights">Traveling Highlights</span>
  <span className="idea">Your New Traveling Idea</span> */}
  {/* <div className="stroke-shape-div"></div> */}
</div>

<div className="destination-div">

<div className="icon1"></div>
<span className="text1-main">Far far away, behind the word <br />mountains, far countries Vokalia.</span>
  <div className="destination-small">
    <span className="header1">700+ DESTINATIONS</span>
    </div>

    <div className="icon2"></div>
    <span className="text2-main">Far far away, behind the word <br />mountains, far countries Vokalia.</span>
    <div className="best-guarentee-div">
    <span className="header2">BEST PRICE GUARANTEE</span>
    </div>
     
    <div className="icon3"></div>
    <span className="text3-main">Far far away, behind the word <br />mountains, far countries Vokalia.</span>
    <span className="header3">TOP NOTCH <br />SUPPORT</span>
    <div className="top-notch-div">
    </div>
  </div>

   <div className="learn-more-div">
    <div className="latest-news-line"></div>
    <span className="news">Latest News</span>
    <span className="learn">Learn More About Tours</span>
    <div className="learn-more-btn">
      <span className="learn-more-txt">Learn More</span>
    </div>
    <div className="three-section-div">
      <div className="first-section">
      <img src="https://images.pexels.com/photos/5379170/pexels-photo-5379170.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="beach" className="blog-img" />
        <span className="section-text">Things to See and Do Whe...</span>
        <span className="section-date">June 6, 2020</span>
      </div>
      <div className="second-section">
      <img src="https://images.pexels.com/photos/2373495/pexels-photo-2373495.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="beach" className="blog-img" />
      <span className="section2-text">Travel the Most Beautiful...</span>
      <span className="section2-date">May 18, 2020</span>
      </div>
      <div className="third-section">
      <img src="https://images.pexels.com/photos/3733685/pexels-photo-3733685.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="beach" className="blog-img" />
      <span className="section3-text">Journey are Best Measured...</span>
      <span className="section3-date">April 5, 2020</span>
      </div>
    </div>
  </div>
  <div className="holiday-planner-section">
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
    {/* <div className="section7">
    <img src="" alt="beach" className="blog-img" />
    </div> */}
    </div>
  </div>
  <div className="amazing-tours-section">
    <div className="amazing-tour-line"></div>
    <span className="amazing">Amazing Tours</span>
    <span className="trending">Trending, Best Selling Tours And < br/> Fun Destinations</span>
    <div className="prev">
      <span className="prev-txt">Prev</span>
    </div>
    <div className="next">
      <span className="next-txt">Next</span>
    </div>
    
    <div className="image-section">
      
      <div className="image1">
        <div className="image1-child"></div>
        <div className="coutry-div"><span className="greece">GREECE</span></div>
         <span className="holiday-planner">Holiday Planners is a World Leading<br /> Online Tour Booking Platform</span>
         <span className="content-main">Far far away, behind the word mountains, far<br />
          from the coutries Vokalia and Consonantia
         </span>
         <div className="line"></div>
         <div className="line2"></div>
         <div className="duration-group-secion">
         <FaClock  className="clock-icon"/>
         <span className="duration">Duration</span>
         <span className="days">6 days 3 hours</span>

         <FaUserGroup className="group-icon" />
         <span className="group">Group Size</span>
         <span className="people">15+ People</span>
         </div>
      </div> 
      <div className="image2">
        <div className="image2-child"></div>
        <div className="coutry-div2"><span className="greece2">GREECE</span></div>
         <span className="holiday-planner2">Holiday Planners is a World Leading<br /> Online Tour Booking Platform</span>
         <span className="content2">Far far away, behind the word mountains, far<br />
          from the coutries Vokalia and Consonantia
         </span>
         <div className="line3"></div>
         <div className="line4"></div>
         <div className="duration-group-secion2">
         <FaClock  className="clock-icon2"/>
         <span className="duration2">Duration</span>
         <span className="days2">6 days 3 hours</span>

         <FaUserGroup className="group-icon2" />
         <span className="group2">Group Size</span>
         <span className="people2">15+ People</span>
         </div>
      </div>
      <div className="image3">
        <div className="image3-child"></div>
        <div className="coutry-div3"><span className="greece3">GREECE</span></div>
         <span className="holiday-planner3">Holiday Planners is a World Leading<br /> Online Tour Booking Platform</span>
         <span className="content3">Far far away, behind the word mountains, far<br />
          from the coutries Vokalia and Consonantia
         </span>
         <div className="line5"></div>
         <div className="line6"></div>
         <div className="duration-group-secion3">
         <FaClock  className="clock-icon3"/>
         <span className="duration3">Duration</span>
         <span className="days3">6 days 3 hours</span>

         <FaUserGroup className="group-icon3" />
         <span className="group3">Group Size</span>
         <span className="people3">15+ People</span>
         </div>
      </div>
      <div className="image4">
        <div className="image4-child"></div>
      </div>
      <span className="money">$2500</span>
         <div className="booknow-btn">
          <span className="book-now">BOOK NOW</span>
         </div>
         <span className="money2">$2500</span>
         <div className="booknow-btn2">
          <span className="book-now2">BOOK NOW</span>
         </div>

         <span className="money3">$2500</span>
         <div className="booknow-btn3">
          <span className="book-now3">BOOK NOW</span>
         </div>
    </div>

  </div>
  
    </div>
  )
}

export default Content
