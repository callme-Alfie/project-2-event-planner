import React from 'react'
import NavBar from '../Navbar/NavBar'
import './Destination.css'
// import Footer from '../Footer/Footer';
import { useEffect } from "react";


const Destination = () => {
  useEffect(() => {
    document.title = "Destination";
}, []);
  return (
    <div>
      
      <div className="destination-home-div">
        <span className="destin-list">Destination List</span>
      </div>
      <div className="greece2-shape">
        <span className="country1">Greece</span>
      </div>
      <div className="greece-picture">
      <img src="https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="beach" className="blog-img3" />
      </div>

      <div className="thailand2-shape">
        <span className="country2">Thailand</span>
      </div>
      <div className="thailand-picture">
      <img src="https://images.pexels.com/photos/8299488/pexels-photo-8299488.jpeg?auto=compress&cs=tinysrgb&w=800" alt="beach" className="blog-img3" />
      </div>

      <div className="switzerland2-shape">
        <span className="country3">Switzerland</span>
      </div>
      <div className="switzerland-picture">
      <img src="https://images.pexels.com/photos/267104/pexels-photo-267104.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="beach" className="blog-img3" />
      </div>

      <div className="india2-shape">
        <span className="country4">India</span>
      </div>
      <div className="india-picture">
      <img src="https://images.pexels.com/photos/2528414/pexels-photo-2528414.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="beach" className="blog-img3" />
      </div>

      <div className="europe2-shape">
        <span className="country5">Europe</span>
      </div>
      <div className="europe-picture">
      <img src="https://travelisto.com/wp-content/uploads/2022/01/sitges-barcelona-spain-gay-friendly-city-break-holiday-1-e1642703355410.jpg.webp" alt="beach" className="blog-img3" />
      </div>

      <div className="canada2-shape">
        <span className="country6">Canada</span>
      </div>
      <div className="canada-picture">
      <img src="https://images.pexels.com/photos/4490699/pexels-photo-4490699.jpeg?auto=compress&cs=tinysrgb&w=800" alt="beach" className="blog-img3" />
      </div>

      <div className="japan2-shape">
        <span className="country7">Japan</span>
      </div>
      <div className="japan-picture">
      <img src="https://images.pexels.com/photos/402028/pexels-photo-402028.jpeg?auto=compress&cs=tinysrgb&w=800" alt="beach" className="blog-img3" />
      </div>

      <div className="mexico2-shape">
        <span className="country8">Mexico</span>
      </div>
      <div className="mexico-picture">
      <img src="https://images.pexels.com/photos/604661/pexels-photo-604661.jpeg?auto=compress&cs=tinysrgb&w=800" alt="beach" className="blog-img3" />
      </div>
      <div className="load-more-btn">
        <span>LOAD MORE</span>
      </div>
      {/* <Footer className="destin-footer"/>  */}
    </div>
    
  )
}

export default Destination
