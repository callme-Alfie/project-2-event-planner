//import React from 'react';
import FormComponent from './FormComponents/FormComponent';
import NavBar from '../Navbar/NavBar'
import ContactInfoAbout from './ContactInfoAbout/ContactInfoAbout';
import ContentAbout from './ContentAbout/ContentAbout';
import Footer from '../Footer/Footer';
import CFooter from './CFooter/CFooter';
import { useEffect } from "react";

const ContactPage = () => {
  useEffect(() => {
    document.title = "Contact";
}, []);
  return (
    <div>
        
        <ContentAbout/>
        <FormComponent/>
        <ContactInfoAbout/>
        <CFooter />

        {/* <Footer/> */}
        
    </div>
  )
}

export default ContactPage