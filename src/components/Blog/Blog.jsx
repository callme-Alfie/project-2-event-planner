import React from 'react'
import './Blog.css'
import NavBar from '../Navbar/NavBar'
import { IoSearch } from "react-icons/io5";
import { FaClock } from "react-icons/fa6";
import { FaTag } from "react-icons/fa";
import { FaPen } from "react-icons/fa";
import { useEffect } from "react";

const Blog = () => {
  useEffect(() => {
    document.title = "Blog";
}, []);
  return (
    <div>
      
      <div className="blog-home-div">
        <img src="https://images.pexels.com/photos/163688/hiker-travel-trip-wander-163688.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="home" className="blog-home-image" />
        <span className="blog-txt">Blog</span>
      </div>
      <div className="side-image-div">
        <div className="image-div">
          <img src="https://images.pexels.com/photos/5379170/pexels-photo-5379170.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="beach" className="blog-img" />
        </div>
        <div className="image-txt-div">
          <span className="things-japan">Things to See and Do When Visiting Japan</span>
        <div className="italy-small-div"><span className="italy-main">ITALY</span></div>
        <FaTag className="tag-icon"/><span className="dnation">Destination</span>
        <FaClock className="cloc-icon"/><span className="june"> June 6, 2020</span>
        <FaPen  className="pen-icon"/><span className="bhplanners">By Holiday Planners</span>
        <span className="description-sec">I should be incapable of drawing a single stroke at the present moment; and yet I feel that I never<br />
           was a greater artist than now. When, while the lovely valley teems with vapour around me</span>
          </div>

        <div className="image-div2">
        <img src="https://c.pxhere.com/photos/a6/6e/asphalt_automobile_cars_daylight_expressway_freeway_highway_hillside-1552497.jpg!s2" alt="beach" className="blog-img" />
        </div>
        <div className="image-txt-div2">
          <span className="things-japan">Things to See and Do When Visiting Japan</span>
        <div className="italy-small-div"><span className="italy-main">ITALY</span></div>
        <FaTag className="tag-icon"/><span className="dnation">Destination</span>
        <FaClock className="cloc-icon"/><span className="june"> June 6, 2020</span>
        <FaPen  className="pen-icon"/><span className="bhplanners">By Holiday Planners</span>
        <span className="description-sec">I should be incapable of drawing a single stroke at the present moment; and yet I feel that I never<br />
           was a greater artist than now. When, while the lovely valley teems with vapour around me</span>
          </div>
        
      </div>
      <div className="search-object-div">
        <div className="search-line"></div>
        <span className="search-objects-txt">SEARCH OBJECTS</span>
        <input type="text"  placeholder="Search Your Keyword" className="blog-search1"/>
        <div className="search-icon-div"><IoSearch className="search-icon" /></div>
      </div>
      <div className="categories-div">
        <div className="categories-line"></div>
        <span className="bcategories">CATEGORIES</span>
        <div className="div-20-1">
          <span className="world-among">world among the stalks</span>
          <div className="c20-1"><span className="n1">20</span></div>
        </div>
        <div className="div-20-2">
          <span className="countless">countless indescribable forms</span>
          <div className="c20-2"><span className="n2">20</span></div>
        </div>
        <div className="div-20-3">
          <span className="exquisite">exquisite sense of mere...</span>
          <div className="c20-3"><span className="n3">20</span></div>
        </div>
        <div className="div-20-4">
          <span className="myself">myself down among the tall</span>
          <div className="c20-4"><span className="n4">20</span></div>
        </div>
        <div className="div-20-5">
          <span className="stroke">stroke at the present moment</span>
          <div className="c20-5"><span className="n5">20</span></div>
        </div>
      </div>
      <div className="latest-posts-div">
        <div className="latest-post-line"></div>
        <span className="latest-post-txt">LATEST POSTS</span>
        
        <span className="way"> WAY TO TRAVEL</span>
        <span className="d1">February 28, 202</span>
        <div className="lastest-pic1"></div>

        <span className="greate"> GREATE TODAY</span>
        <span className="d2">February 28, 202</span>
        <div className="lastest-pic2"></div>

        <span className="time"> TIME ON TRAVELLIING</span>
        <span className="d3">February 28, 202</span>
        <div className="lastest-pic3"></div>
      </div>
      <div className="popular-tags-div">
        <div className="popular-line"></div>
        <span className="popular-tags">POPULAR TAGS</span>
        <div className="adventure-box">
          <span className="a">Adventure</span>
        </div>
        <div className="destination-box">
          <span className="d">Destination</span>
        </div>
        <div className="map-box">
          <span className="m">Map</span>
        </div>
        <div className="travel-box">
          <span className="t">Travel</span>
        </div>
        <div className="guide-box">
          <span className="g">Guide</span>
        </div>
        <div className="world-box">
          <span className="w">World</span>
        </div>
      </div>

    </div>
  )
}

export default Blog
